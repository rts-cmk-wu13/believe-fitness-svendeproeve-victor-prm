"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logoutCurrentUser() {
    const cookieStore = await cookies();
    cookieStore.delete("believe-access-token");
    redirect("/auth/login");
}