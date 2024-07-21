import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.resetPasswordToken.findUnique({
      where: { token: token },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetEmail = await db.resetPasswordToken.findFirst({
      where: { email },
    });

    return passwordResetEmail;
  } catch {
    return null;
  }
};
