"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
import logoImg from "@/assets/Logo.jpeg"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

function Navbar() {
  return (
    <div className='list-none w-full bg-blue-600'>
        <div className='flex justify-between w-full h-18'>
            <div className='flex justify-start h-18 w-18'>
                <Image
                src={logoImg}
                />
            </div>
            <div className="text-white font-bold text-3xl text-center pt-4">
                Welcome to Cestoball Uttarakhand
            </div>
            <div className='pt-4 pr-3'>
                <Link href="/login">
                <button className='bg-orange-400 text-white w-20 p-2 py-0.5 cursor-pointer font-bold rounded-sm '>Login</button>
                </Link>
            </div>
        </div>
        <div className='h-6 flex bg-white justify-center text-black text-xl font-bold'>
            <NavigationMenu className='space-x-10 p-0'>
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
  )
}

export default Navbar
