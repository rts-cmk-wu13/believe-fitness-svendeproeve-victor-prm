"use server"
import z from "zod";
import { compareFormData } from "@/lib/utils";
import { newsletterSchema } from "@/lib/schemas";
import { fetchFromAPI } from "@/lib/dal/general";

//To-do: check if user is logged in, and already signed up

export default async function subscribeToNewsletter(prevState, formData) {
   
    const values = {
        email: formData.get("email"),
    };

    compareFormData(values, prevState)

    const validate = newsletterSchema.safeParse(values);
    
        if (!validate.success) {
            return {
                values,
                errors: z.flattenError(validate.error).fieldErrors,
            };
        }
    
    const result = await fetchFromAPI("POST", "/api/v1/newsletter", values)
    console.log("🟢", result)

    return result;
}