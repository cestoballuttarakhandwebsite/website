'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, } from '@/components/ui/form'
import { newsletterSchema } from '@/schemas/newsletter.schema'
import { toast } from 'sonner'
import { ApiResponse } from '@/types/ApiResponse'
import axios from 'axios'
import { Input } from './ui/input'
import { Button } from '@react-email/components'
import { Loader2 } from 'lucide-react'

function Newsletter() {

    const [isSending, setIsSending] = useState(false)

    const form = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
          email: ''
        }
      })

    const onSubmit = async (data: z.infer<typeof newsletterSchema>) => {
    setIsSending(true)
    try {
      const result = await axios.post<ApiResponse>('/api/subscribe-newsletter',data)
      toast(result.data.message)
    } catch (error) {
      console.error(error)
    }
    setIsSending(false)
  }

  return (
    <div className='w-full bg-blue-900 sm:h-60'>
        <div className='w-full sm:h-14 text-4xl text-center sm:pt-1 font-bold text-white pt-2'>
            Subscribe to our Newsletter
        </div>
        <div className='sm:w-2/3  sm:mx-auto sm:h-24 sm:mt-8'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='flex'>
                            <Input {...field} placeholder='Enter your Email' name="email" className='border mt-4 sm:mt-0 border-black font-bold placeholder:text-white not-placeholder-shown:bg-white placeholder-shown:bg-gray-500 flex'/>
                            </FormItem>
                        )}
                        />
                    <Button type="submit" className='w-20 sm:w-20 mt-5 ml-2 sm:mt-2 sm:h-7 rounded-md text-center pt-1 font-semibold text-white bg-amber-600 sm:ml-0 mb-3 sm:mb-0'>
                        {isSending ? (
                            <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                            </>
                        ) : (
                            'Subscribe'
                        )}
                        </Button>
                </form>
            </Form>
        </div>
    </div>
  )
}

export default Newsletter
