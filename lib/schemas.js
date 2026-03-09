import z from "zod"

/*--- Schema for /auth/token ---*/
export const loginSchema = z.object({
    username: z
        .string({ message: "Username required" }),
    password: z
        .string({ message: "Password required" }),
});


/*--- Schema for /newsletter ---*/
export const newsletterSchema = z.object({
    email: z.email({ message: "Email not valid" }),
});


/*--- Schema for /messages ---*/
export const contactSchema = z.object({
    name: z
        .string({ message: "Name is required" })
        .min(2, { message: "Name must be min. 2 characters" }),
    email: z
        .email({ message: "Email not valid" }),
    message: z
        .string({ message: "Message is required" })
        .min(24, { message: "Message must be min. 24 characters" }),

    //Alternativ, hvis logik skal være mere custom
    /* .refine(v => v.length > 10, {
        message: "Message not long enough",
    }), */
});


/*--- Schema for adding/removing user from calsses ---*/
export const addRemoveUserSchema = z.object({
    userId: z
        .string({ message: "User ID not valid" }),
    activityId: z
        .string({ message: "Activity ID not valid" }),
});

