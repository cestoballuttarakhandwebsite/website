import { NextRequest } from "next/server";
import {recieveContactUsEmail} from "@/helpers/recieveContactUsEmail"

export async function POST(request: NextRequest){
    try {
        const {name, from, content} = await request.json()
        const emailMessageResponse = await recieveContactUsEmail(name, from, content)

        if(emailMessageResponse.success === false ){
            return Response.json({
                success: false,
                message: "Error sending contact Us message"
            })
    }
        return Response.json({
            success: true,
            message: "Message Sent Successfully"
        })

    } catch (error) {
        console.error(error)
        return Response.json({
                success: false,
                message: "Error sending contact Us message"
            })
    }
}