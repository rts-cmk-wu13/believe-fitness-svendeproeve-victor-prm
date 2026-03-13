"use server"
import z from "zod";
import { addRemoveUserSchema } from "@/lib/schemas";
import { fetchFromAPI } from "@/lib/dal/general";
import { revalidatePath } from "next/cache";

export default async function addRemoveUser(prevState, formData) {
    const values = {
        activityId: formData.get("activityId"),
        userId: formData.get("userId"),
        isEnrolled: formData.get("isEnrolled") === "true",
    };

    console.log("💿", values)

    const validate = addRemoveUserSchema.safeParse(values);
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }

    const method = values.isEnrolled ? "DELETE" : "POST";

    const result = await fetchFromAPI(
        `/api/v1/users/${values.userId}/classes/${values.activityId}`,
        {
            method: method,
            secured: true
        }
    );

    //console.log("🎁", result)
    revalidatePath("/classes");
    revalidatePath("/profile");

    return {
        success: true,
        object: result
    }
}