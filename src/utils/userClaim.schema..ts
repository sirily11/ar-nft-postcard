import { z } from "zod";

export const UserClaimSchema = z.object({
  numberOfClaims: z.number(),
});
