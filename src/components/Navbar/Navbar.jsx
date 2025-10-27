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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { TextAlignJustify } from 'lucide-react';


function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
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
            <div className='pt-4 pr-3 hidden sm:inline'>
                <Link href="/login">
                <button className=' bg-orange-400 text-white w-20 p-2 py-0.5 cursor-pointer font-bold rounded-sm '>Login</button>
                </Link>
            </div>
            <div className='w-6 flex pt-1 sm:hidden justify-end'>
                <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className='flex w-5 flex-col'
                >
                    <div>
                        <CollapsibleTrigger className='align-middle' asChild>
                        <Button variant="ghost" size="xl" className='text-white mr-2 p-0 mt-0'>
                        <TextAlignJustify />
                        </Button>
                    </CollapsibleTrigger>
                    </div>
                    
                </Collapsible>
            </div>
        </div>
        <div className='hidden sm:flex h-6 bg-white justify-center text-black text-sm sm:text-xl font-bold'>
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
  )
}

export default Navbar
