"use server"
import z from "zod";
import { compareFormData } from "@/lib/utils";
import { loginSchema } from "@/lib/schemas";
import { fetchFromAPI } from "@/lib/dal/general";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logUserIn(prevState, formData) {
    const cookieStore = await cookies();

    const values = {
        username: formData.get("username"),
        password: formData.get("password"),
        remember: formData.get("remember"),
    };

    compareFormData(values, prevState);

    const validate = loginSchema.safeParse(values);

    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const result = await fetchFromAPI("/auth/token", { method: "POST", values: values })
    console.log("🟢", result)

    if (result) {
        //Remember user if user checks checkbox, otherwise cookie will default as session cookie
        if (values.remember === "save") {
            cookieStore.set("believe-access-token", result.token, { expires: result.validUntil });
        } else {
            cookieStore.set("believe-access-token", result.token);
        }

        //redirect("/profile");
    }

     return {
        success: false,
        object: result
    }
}