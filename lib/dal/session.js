"use server"

import { cookies } from "next/headers";
import { fetchFromAPI } from "./general";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export async function getSession() {
    const cookieStore = await cookies()
    const token = cookieStore?.get("believe-access-token");

    //Skip the check entirely, if no token is stored in cookies
    if (!token?.value) return null
    
    //Decode JWToken to access user ID
    const decodedToken = jwtDecode(token.value);
    const userId = decodedToken.data.id;

    console.log(decodedToken)
    
    //Check if user token is valid and return extended user object (has more data than token holds)
    const user = await fetchFromAPI(`/api/v1/users/${userId}`, { secured: true })
    
    //The fetch above returns the user if token is valid, and null if not
    return user;
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