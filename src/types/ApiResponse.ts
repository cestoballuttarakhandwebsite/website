import { NewsletterEmail } from "@/models/Newsletter.models";

export interface ApiResponse{
    success: boolean,
    message: string,
    emails?: Array<NewsletterEmail>
}