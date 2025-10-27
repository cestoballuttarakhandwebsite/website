"use client"
import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='w-full text-xs sm:text-lg h-25 sm:h-35 bg-[#161939] text-white flex'>
      <div className="h-full w-1/3 px-1 py-1.5 sm:px-3 sm:py-4">
        cestoballuttarakhand@gmail.com <br />
        <a target='_blank' href={`https://instagram.com/shashikant_cestoball}`}>Our Instagram</a> <br />
        <a target='_blank' href={`https://wa.me/${process.env.WHATSAPP_PHONE}`}>Message Us</a> <br />
        <Link href={`/about-us`}>About Us</Link>
      </div>
      <div className="h-full w-1/3"></div>
      <div className="h-full w-1/3"></div>
    </div>
  )
}

export default Footer
