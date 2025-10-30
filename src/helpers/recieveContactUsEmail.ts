import { resend } from "@/lib/resend";
import ContactUsEmail from "../../emails/ContactUsEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function recieveContactUsEmail(name: string, from: string, content: string ):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from:"cestoball.website@cestoballuttarakhand.in",
            to: ["abhinavd2210@gmail.com"],
            subject: "Email from Cestoball Uttarakhand Website",
            react: ContactUsEmail({name: name, from: from, content: content}),
        })
        return {
            success: true,
            message: "Email sent succesfully"
        }
    } catch (error) {
        console.error(error)
        return{
            success: false,
            message: "Error Sending Contact us Email"
        }
    }
}