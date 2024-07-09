"use server";
import { kv } from "@vercel/kv";
import { UserClaimSchema } from "@/utils/userClaim.schema.";
import { get } from "@vercel/edge-config";
import { Environments } from "@/app/environments";

export async function getKey(userAddress: string, invitationCode: string) {
  return `${userAddress}:${invitationCode}`;
}

/**
 * Check if the user has claimed the reward
 * @param userAddress
 * @param invitationCode
 */
export async function checkIfUserHasClaimed(
  userAddress: string,
  invitationCode: string,
): Promise<boolean> {
  console.log("Checking if user has claimed");
  const key = await getKey(userAddress, invitationCode);
  if (!(await kv.exists(key))) {
    return false;
  }
  return true;
}

export async function setClaimed(userAddress: string, invitationCode: string) {
  const key = await getKey(userAddress, invitationCode);
  if (await kv.exists(key)) {
    const value = await kv.get(key);
    const parsedValue = UserClaimSchema.parse(value);
    parsedValue.numberOfClaims += 1;
    await kv.set(key, parsedValue);
    return;
  }
  await kv.set(key, { numberOfClaims: 1 });
}

export async function checkInvitationCode(invitationCode: string) {
  const expectedCode = Environments.ServerInvitationCode;
  return invitationCode === expectedCode;
}

export async function claim(userAddress: string, invitationCode: string) {
  if (await checkIfUserHasClaimed(userAddress, invitationCode)) {
    return {
      error: "User has already claimed the reward",
    };
  }

  if (!(await checkInvitationCode(invitationCode))) {
    return {
      error: "Invalid invitation code",
    };
  }
  await setClaimed(userAddress, invitationCode);
  // send reward
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return;
}
