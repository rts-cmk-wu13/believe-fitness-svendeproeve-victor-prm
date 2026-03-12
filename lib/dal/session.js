"use server"

import { cookies } from "next/headers";
import { fetchFromAPI } from "./general";
import { redirect } from "next/navigation";

export async function getSession() {
    const cookieStore = await cookies()
    const token = cookieStore?.get("believe-access-token");
    const userId = cookieStore?.get("believe-user-id");

    //console.log("🔴", token, userId)

    if (!token?.value || !userId?.value) {
        return null
    }

    const user = await fetchFromAPI(`/api/v1/users/${userId.value}`, { secured: true })
    //console.log("🎁", user)

    return user
}

export async function setSplash(formData) {
    const cookieStore = await cookies();
    const values = {
        url: formData.get("url") || "/",
    };
    cookieStore?.set("believe-splash", true);
    redirect(values.url)
}

export async function getSplash(formData) {
    const cookieStore = await cookies()
    const hasSeenSplash = cookieStore?.get("believe-splash");
    return hasSeenSplash ? true : false;
}