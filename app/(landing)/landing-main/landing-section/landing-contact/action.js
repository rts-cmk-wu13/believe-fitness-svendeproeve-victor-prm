"use server"
import z from "zod";
import { compareFormData } from "@/lib/utils";
import { contactSchema } from "@/lib/schemas";
import { fetchFromAPI } from "@/lib/dal/general";

export default async function sendMessage(prevState, formData) {

    const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    compareFormData(values, prevState);


    const validate = contactSchema.safeParse(values);

    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const result = await fetchFromAPI("/api/v1/messages", { method: "POST", values: values })
    console.log("🟢", result)

    return result;
}