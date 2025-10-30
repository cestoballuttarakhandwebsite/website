"use client"
import { contactUsSchema } from '@/schemas/contactUsEmail.schema'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { ApiResponse } from '@/types/ApiResponse'


function ContactUsForm() {

  // states
  const [isSending, setIsSending] = useState(false)
  // const router = useRouter()


  // zod implementation

  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name:"",
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
  )
}

export default ContactUsForm
