import React from 'react'
import whatsappBtn from '@/assets/Chat with Us on Whatsapp.png'
import Image from 'next/image'
import instaBtn from '@/assets/Chat with Us on Instagram.png'

function page() {

  return (
    <>
    <div className="w-full sm:h-24 h-14 "></div>
    <div className='block justify-items-center py-0 my-0 sm:flex sm:h-[calc(100vh-(14.75rem))]'>
      <div className='sm:flex block w-full sm:w-1/2 text-center sm:py-0 text-3xl h-full sm:mb-0 mb-2'>
      <div className="sm:mx-auto w-full h-full sm:w-110 p-3 pt-6 sm:bg-[#C8D4FE] sm:my-auto sm:h-110 sm:p-4 sm:pt-5 rounded-2xl">

      coming soon...
          
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
