'use server';

import { signOut } from "@/auth";

export const logout = async () => {
    // bunch of stuff before doing logging out like clearing some information about the user or removing the user
    await signOut();
}