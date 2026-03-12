import { cookies } from "next/headers";
import { fetchFromAPI } from "./general";

export async function getSession() {
    const cookieStore = await cookies()
    const token = cookieStore?.get("believe-access-token");
    const userId = cookieStore?.get("believe-user-id");

    console.log(token, userId)

    //console.log("🔴", token)
    if (!token?.value || !userId?.value) {
        return null
    }


    const user = await fetchFromAPI(`/api/v1/users/${userId.value}`, { secured: true })
    //console.log("🎁", user)

    // verify token logic here
    return user
}