"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import whatsappBtn from "@/assets/Chat with Us on Whatsapp.png"
import instaBtn from "@/assets/Chat with Us on Instagram.png"

function page() {

  return (
    <div className='flex h-[calc(100vh-(8.5rem))] sm:h-[calc(100vh-(14.75rem))]'>
      <div className='hidden sm:flex w-1/2 text-center px-35 text-3xl my-50'>
      Email Coming Soon...
      </div>
      <div className='hidden sm:block w-1/2'>
      <div className='sm:flex mx-50 my-50 mb-0'>
        <button>
        <a target='_blank' href={`https://wa.me/${process.env.WHATSAPP_PHONE}`}>
          <Image className='rounded-3xl h-12 w-70' src={whatsappBtn} alt='whatsapp'/>
        </a>
        </button>
      </div>
      <div className='sm:flex mx-50 my-5'>
        <button>
        <a target='_blank' href={`https://instagram.com/shashikant_cestoball}`}>
          <Image className='rounded-3xl h-12 w-70' src={instaBtn} alt='whatsapp'/>
        </a>
        </button>
      </div>
      </div>
    </div>
  )
}

export default page
