import { sendContactUsEmail } from "@/helpers/sendContactUsEmail";
import { NextRequest } from "next/server";
import { success } from "zod";

export async function POST(request: NextRequest){
    try {
        const {name, from, content} = await request.json()
        const emailMessageResponse = await sendContactUsEmail(name, from, content)

        if(emailMessageResponse.success === false ){
            return Response.json({
            success: false,
            message: "Error Sending Message"
        })
        }

        return Response.json({
            success: true,
            message: "Message Sent Successfully"
        })
    } catch (error) {
        console.error(error)
        return {
            success: false,
            message: "Error Sending Message"
        }
    }
}