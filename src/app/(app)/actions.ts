"use server";
import { kv } from "@vercel/kv";
import { UserClaimSchema } from "@/utils/userClaim.schema.";
import { Resend } from "resend";
import { Environments } from "@/app/environments";
import { get } from "@vercel/edge-config";

const resend = new Resend(Environments.EmailApiKey);

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
  const receiver = await get<string>("notification-receiver");
  console.log(`Sending email to ${receiver}`);
  // send reward
  await resend.emails
    .send({
      from: "AR NFT System <noreply@noreply.rxbot.dev>",
      to: receiver!,
      subject: "Someone claimed the reward",
      text: `${userAddress} claimed the reward`,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((e) => {
      console.error(e);
    });
  return;
}
