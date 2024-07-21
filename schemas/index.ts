import { UserRole } from "@prisma/client";
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 character required" }),
  name: z.string().min(1, { message: "Name is required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 character required!" }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(
      z.string().min(6, { message: "Minimum 6 character required" })
    ),
    newPassword: z.optional(
      z.string().min(6, { message: "Minimum 6 character required" })
    ),
  })
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "New Password is required!",
    path: ["newPassword"],
  }).refine((data) => {
    if (!data.password && data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "Old Password is required!",
    path: ["password"],
  });
