"use client"
import Image from 'next/image'
import React, { use, useState } from 'react'
import whatsappBtn from "@/assets/Chat with Us on Whatsapp.png"
import instaBtn from "@/assets/Chat with Us on Instagram.png"

// js form imports

import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { contactUsSchema } from '@/schemas/contactUsEmail.schema'
import { useRouter } from 'next/navigation'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { ApiResponse } from '@/types/ApiResponse'

function page() {

  // states
  const [isSending, setIsSending] = useState(false)
  const [messageSent, setMessageSent] = useState("")
  // const router = useRouter()


  // zod implementation

  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      from: "",
      content: ""
    }
  })


  const onSubmit = async (data: z.infer<typeof contactUsSchema>) => {
    setIsSending(true)
    try {
      const result = await axios.post<ApiResponse>('/api/contact-us',data)
      toast(result.data.message)
    } catch (error) {
      console.error(error)
    }
    setIsSending(false)
  }


  return (
    <>
    <div className="w-full sm:h-24 h-14 "></div>
    <div className='block justify-items-center py-0 my-0 sm:flex sm:h-[calc(100vh-(14.75rem))]'>
      <div className='sm:flex block w-full sm:w-1/2 text-center sm:py-0 text-3xl h-full sm:mb-0 mb-2'>
      <div className="sm:mx-auto w-full h-full sm:w-110 p-3 pt-6 sm:bg-[#C8D4FE] sm:my-auto sm:h-110 sm:p-4 sm:pt-5 rounded-2xl">
      <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sm:text-xl sm:font-bold'>Name</FormLabel>
                  <Input {...field} placeholder='Enter your Name here...' name="name" className='border border-black font-bold sm:placeholder:text-white sm:not-placeholder-shown:bg-white sm:placeholder-shown:bg-[#9a9a9a]'/>
                </FormItem>
              )}
            />
            <FormField
              name="from"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sm:text-xl sm:font-bold'>From</FormLabel>
                  <Input {...field} name="from" placeholder='Enter your Email here...' className='border border-black font-bold sm:placeholder:text-white sm:not-placeholder-shown:bg-white sm:placeholder-shown:bg-[#9a9a9a]'/>
                </FormItem>
              )}
            />
            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sm:text-xl sm:font-bold'>Content</FormLabel>
                  <Input type="text" {...field} name="content" placeholder='Enter your message here...' className='border border-black font-bold h-30 sm:placeholder:text-white sm:not-placeholder-shown:bg-white sm:placeholder-shown:bg-[#9a9a9a]' />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-full bg-amber-600' disabled={isSending}>
              {isSending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                'Send'
              )}
            </Button>
          </form>
        </Form>
      </div>
      </div>
      <div className='block sm:block sm:w-1/2 justify-items-center mb-2 mt-10'>
        <div className='sm:flex sm:mx-50 sm:my-50 sm:mb-0 mb-1'>
          <button>
          <a target='_blank' href={`https://wa.me/${process.env.WHATSAPP_PHONE}`}>
            <Image className='rounded-3xl h-12 w-70' src={whatsappBtn} alt='whatsapp'/>
          </a>
          </button>
        </div>
        <div className='sm:flex sm:mx-50 sm:my-5'>
          <button>
          <a target='_blank' href={`https://instagram.com/shashikant_cestoball}`}>
            <Image className='rounded-3xl h-12 w-70' src={instaBtn} alt='whatsapp'/>
          </a>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
