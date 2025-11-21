import {z} from 'zod'

export const newsletterSchema = z.object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please enter a valid email")
})