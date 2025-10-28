"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
import logoImg from "@/assets/Logo.jpeg"
import { Button } from "@/components/ui/button"
import Link from 'next/link'



function Navbar() {
  return (
    <>
    <div className='list-none w-full bg-blue-600'>
        <div className='flex justify-between w-full h-9 sm:h-18'>
            <div className='flex justify-start h-9 sm:h-18 w-9 sm:w-18'>
                <Link href={"/"}>
                <Image
                src={logoImg}
                alt="Logo"
                />
                </Link>
            </div>
            <div className="hidden sm:inline text-white font-bold text-3xl text-center pt-4">
                Welcome to CESTOBALL Uttarakhand
            </div>
            <div className="sm:hidden text-white font-bold sm:text-3xl text-center pt-1">
            CESTOBALL Uttarakhand
            </div>
            <div className='sm:pt-4 pt-1 pr-1 sm:pr-3 sm:inline'>
                <Link href="/login">
                <button className=' bg-orange-400 text-white w-13 sm:w-20 sm:p-2 sm:py-0.5 cursor-pointer sm:font-bold rounded-sm text-xs sm:text-lg'>Login</button>
                </Link>
            </div>
        </div>
        <div className='sm:flex h-5 sm:h-6 bg-white justify-items-center sm:justify-center text-black text-sm sm:text-xl font-bold'>
            <NavigationMenu className='space-x-1.5 sm:space-x-10 p-0'>
                <NavigationMenuItem>
                    <NavigationMenuLink href='/' className='cursor-pointer'>Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href='/gallery' className='cursor-pointer'>Gallery
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href='/about-us' className='cursor-pointer'>About Us
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href='/contact-us' className='cursor-pointer'>Contact Us
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    </div>
    </>
  )
}

export default Navbar
