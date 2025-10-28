import {z} from 'zod'

export const contactUsSchema = z.object({
    name: z.string().regex(/^[A-Za-z\s]+$/),
    from: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please Enter a valid email"),
    content: z.string().min(10,"message should be atleast 10 characters")
})