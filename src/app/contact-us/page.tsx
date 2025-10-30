import React from 'react'
import Image from 'next/image'
import whatsappBtn from "@/assets/Chat with Us on Whatsapp.png"
import instaBtn from "@/assets/Chat with Us on Instagram.png"

function page() {
  return (
    <div>
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
  )
}

export default page
