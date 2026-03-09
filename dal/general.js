"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//Implemenent JSDocs for future developers (including myself)
/**
 * General-purpose fetch utility
 * @param {string} endpoint - API path (e.g. "/api/v1/activities")
 * @param {object} options - Configuration object
 *    options.method - HTTP method (default: GET)
 *    options.values - JSON object or FormData to send
 *    options.secured - Boolean, attach Bearer token if true
 *    options.headers - Extra headers
 *    options.query - Object of query params
 */

export async function fetchFromAPI(
    endpoint,
    {
        method = "GET",
        values = null,
        secured = false,
        headers = {},
        query = null,
    } = {}
) {
    const cookieStore = await cookies();
    const token = cookieStore.get("believe-access-token")?.value;

    if (secured && !token) {
        redirect("/auth");
    }

    let url = `http://localhost:4000${endpoint}`;

    if (query && typeof query === "object") {
        const params = new URLSearchParams(query).toString();
        if (params) url += `?${params}`;
    }

    const isFormData = values instanceof FormData;

    const response = await fetch(url, {
        method,
        headers: {
            ...(!isFormData && { "Content-Type": "application/json" }),
            ...(secured && token && {
                Authorization: `Bearer ${token}`,
            }),
            ...headers,
        },


        ...(values && {
            body: isFormData ? values : JSON.stringify(values),
        }),
    });


    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed (${response.status})`);
    }


    if (response.status === 204) {
        return { success: true };
    }

    const text = await response.text();
    if (!text) {
        return { success: true };
    }

    try {
        return JSON.parse(text);
    } catch {
        return text;
    }
}