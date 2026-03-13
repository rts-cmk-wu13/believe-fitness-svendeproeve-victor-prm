"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkTokenValidity } from "../utils";

// Implemenent JSDocs for future developers (including myself)
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
    // Use Next.js server-side API to access cookies for the current request. 
    // Fetching cookies is cheap, so usually it’s fine to do it unconditionally
    // cookies() gives a CookieStore you can read from; this is only available in server components / server actions.
    const cookieStore = await cookies();

    // Manually check if we have a token, and check if it's expired
    // Grab the token if it exists. Using optional chaining avoids errors if cookie is missing.
    const token = cookieStore.get("believe-access-token")?.value;
    let tokenExpired = checkTokenValidity(token);

    // If route is secured but no token exists, redirect to auth.
    // redirect() throws and stops execution.
    if (secured && !token) {
        redirect("/auth");
    }

    // Start building the full API URL.
    let url = `http://localhost:4000${endpoint}`;

    // Convert query object into URL query string if provided.
    if (query && typeof query === "object") {
        // Only append if query string is not empty.
        const params = new URLSearchParams(query).toString();
        if (params) url += `?${params}`;
    }

    // Detect if body is FormData
    const isFormData = values instanceof FormData;

    const response = await fetch(url, {
        method, // HTTP method (GET, POST, etc.)
        headers: {
            // Default JSON header, omit for FormData
            ...(!isFormData && { "Content-Type": "application/json" }),

            // Attach Bearer token for secured requests.
            ...(secured && token && {
                Authorization: `Bearer ${token}`,
            }),

            // Allow caller to override or extend headers.
            ...headers,
        },


        // Include request body only if values exist.
        // If it's FormData, pass it directly; otherwise stringify JSON.
        ...(values && {
            body: isFormData ? values : JSON.stringify(values),
        }),
    });

    // If the HTTP status is not 2xx, treat it as an error.
    // response.ok is true for status codes 200–299.
    if (!response.ok) {
        console.warn("Response not ok!")

        //If token is expired, stop any further investigation to the problem
        if (tokenExpired) {
            return null;
        }

        // Attempt to read the error message from the response body.
        // Hopefully we get useful error details in the body.
        const text = await response.text();

        //Check if call is unauthorized (401)
        if (response.status === 401) {
            console.error("Credentials are missing or invalid")
            return null;
        }

        // Throw an error to stop execution and let the caller handle it.
        // If no body exists, fallback to a generic message.
        throw new Error(text || `Request failed (${response.status})`);
    }

    // The server guarantees there is no response body (204 means "No Content").
    // Trying to parse JSON here would throw an error.
    if (response.status === 204) {
        return { success: true };
    }

    // Read the body as plain text.
    // We use .text() instead of .json() to avoid automatic JSON parsing errors.
    const text = await response.text();

    // If the body is empty (""), return a success object.
    // This prevents "Unexpected end of JSON input".
    if (!text) {
        return { success: true };
    }

    // Attempt to parse the response as JSON.
    // Not all APIs return JSON — some return plain text.
    try {
        return JSON.parse(text);
    } catch {
        // If parsing fails, return the raw text instead of crashing.
        // This makes the function more robust and flexible.
        return text;
    }
}