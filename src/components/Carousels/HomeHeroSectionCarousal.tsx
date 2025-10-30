import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
import car1 from '@/assets/HomeCarousal1.jpg'
import car2 from '@/assets/HomeCarousal2.jpg'
import car3 from '@/assets/HomeCarousal3.jpg'

function HomeHeroSectionCarousal() {
  return (
    <div>
        <Carousel className="w-full mt-20 sm:mt-10 sm:ml-14 sm:w-202">
          <CarouselContent>
            <CarouselItem>
              <Image
              src={car3}
              alt="image"
              className='h-full w-full object-cover'/>
            </CarouselItem>
            <CarouselItem>
              <Image
              src={car1}
              alt="image"
              className='h-full w-full object-cover'/>
            </CarouselItem>
            <CarouselItem>
              <Image
              src={car2}
              alt="image"
              className='h-full w-auto object-cover'/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex"/>
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
  )
}

export default HomeHeroSectionCarousal
