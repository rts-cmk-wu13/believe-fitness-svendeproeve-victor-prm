"use server"
import z, { success } from "zod";
import { compareFormData } from "@/lib/utils";
import { saveRatingSchema } from "@/lib/schemas";
import { fetchFromAPI } from "@/lib/dal/general";
import { revalidatePath } from "next/cache";

export default async function saveRating(prevState, formData) {

    const values = {
        rating: Number(formData.get("rating")),
        userId: formData.get("userId"),
        classId: formData.get("classId")
    };
    
    compareFormData(values, prevState);
    
    const validate = saveRatingSchema.safeParse(values);
    console.log(validate)
    if (!validate.success) {
        return {
            values,
            errors: z.flattenError(validate.error).fieldErrors,
        };
    }
    

    const result = await fetchFromAPI(`/api/v1/classes/${values.classId}/ratings`, { method: "POST", values: values, secured: true })
    
    revalidatePath("/classes")

    return {
        success: true,
        object: result
    }
}