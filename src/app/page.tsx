"use client"
import Image from "next/image";
import gameAbstract from "@/assets/gameAbstract.png"
import chairmanPhoto from '@/assets/ShukdevSingh.jpg'
import presidentPhoto from '@/assets/PoonamPalival.jpg'
import treasurerPhoto from '@/assets/LaxmiRani.jpg'
import generalSecretary from '@/assets/Shashikant.jpg'
import car1 from '@/assets/HomeCarousal1.jpg'
import car2 from '@/assets/HomeCarousal2.jpg'
import car3 from '@/assets/HomeCarousal3.jpg'
import 'bootstrap/dist/css/bootstrap.css'

// shadcnimports

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";


export default function Home() {

  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.js")
  })

  return (
    <>
    <div>
      <div className="w-full sm:h-24 h-14 ">
      </div>
      {/* heroSectionBootstrap */}

    <div className="flex w-full h-[12.5rem] sm:h-[calc(100vh-(13rem))] mb-0">
      <div className="w-full sm:w-2/3">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link href={"galley/photos"}>
            <Image src={car3} className="d-block w-100" alt="..."/>
            </Link>
          </div>
          <div className="carousel-item">
            <Link href={"galley/photos"}>
            <Image src={car1} className="d-block w-100" alt="..."/>
            </Link>
          </div>
          <div className="carousel-item">
            <Link href={"galley/photos"}>
            <Image src={car2} className="d-block w-100" alt="..."/>
            </Link>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
      </div>
    </div>

    {/* heroSectionBootstrap */}

    {/* gameAboutSection */}
  

    <div className=" w-full py-0 mt-0 flex sm:h-[calc(100vh-(14rem))]">
      <div className="flex w-2/3 py-0 my-0 mt-0">
        <div className="mx-auto my-0 py-0 sm:my-auto">
          <div className="text-lg sm:text-5xl font-bold text-[#150EA2] text-center">
            Welcome to Cestoball
          </div>
          <div className="text-sm text-[#BE175A] text-center sm:text-3xl font-bold">
            Something About Us
          </div>
          <div className="hidden sm:inline text-black text-center text-xs sm:text-lg my-5">
            Cestoball is an Argentine sport that was created in 1897 by professor Enrique Romero Brest, the father of Physical Education in Argentina and was first named &#34;Pelota El Cesto&#34;. <br />
            In 1903, the sport was included in the teaching of Physical Education syllabuses and in 1986 it adopted its present name after an important change in the regulations was introduced. This made Cestoball a dynamic discipline of high performance. A cestoball team is made up players of either the same or different genders. <br />
            In Cestoball, different physical quatities are developed, together with the psychological aspects and social values of the people involved in a game. What is more, due to its tactical and technical features, and the dynamics inherent in the game, it fosters a wide sense of coorperation among the players since there is no bouncing of the ball. <br />
            The infrastructure and equipements needed for its practice are scare - goalposts, a ball and a court and they facilitate socialization and integration of a great number of people with little equipement; also a quite small space for doing this fun activity is enough, so it is ideal for teaching at schools
          </div>
          <div className="sm:hidden text-black text-center text-xs sm:text-lg my-1">
            Cestoball is an Argentine sport that was created in 1897 by professor Enrique Romero Brest, was first named &#34;Pelota El Cesto&#34;. <br />
            In 1903, the sport was included in the teaching of Physical Education syllabuses and in 1986 it adopted its present name after an important change in the regulations was introduced. This made Cestoball a dynamic discipline of high performance.
          </div>
        </div>
      </div>
      <div className="flex w-1/3">
      <div className="hidden sm:inline mx-auto my-auto ">
        <Image
        src={gameAbstract}
        alt="gameAbstract"
        height={400}
        />
      </div>
      <div className="sm:hidden mx-auto my-auto pr-0 mr-0">
        <Image
        src={gameAbstract}
        alt="gameAbstract"
        height={150}
        />
      </div>
      </div>
    </div>


    {/* gameAboutSection */}

    {/* membersSection */}

    
    <div className="w-full bg-[#f2f2f2] h-[15rem] sm:h-[28rem]">
      <div className="sm:text-2xl py-2 ml-4 font-bold text-[#0B45F2] sm:ml-10 sm:py-5">
        People Connected with Us...
      </div>
      <div className="hidden sm:flex w-[75rem] mx-auto h-[23rem] justify-around">
        <div className="bg-[#e6e4e4] h-[21rem] w-[15rem] font-bold text-lg">
          <div className="bg-black w-full h-[15rem]">
              <Image 
              src={chairmanPhoto}
              alt="chairman"
              />
            <div>
            Sukhdev Singh&#40;Namdhari&#41;
            </div>
            <div className="font-medium">
              CHAIRMAN <br />
              Cestoball Assn. UK
            </div>
          </div>
        </div>
        <div className="bg-[#e6e4e4] h-[21rem] w-[15rem] font-bold text-lg">
          <div className="bg-black w-full h-[15rem]">
              <Image 
              src={presidentPhoto}
              alt="president"
              />
            <div>
            Poonam Paliwal&#40;BHAGAT&#41;
            </div>
            <div className="font-medium">
              PRESIDENT <br />
              Cestoball Assn. UK
            </div>
          </div>
        </div>
        <div className="bg-[#e6e4e4] h-[21rem] w-[15rem] font-bold text-lg">
          <div className="bg-black w-full h-[15rem]">
              <Image 
              src={treasurerPhoto}
              alt="treasurer"
              height={300}
              />
            <div>
            Mrs. Laxmi Rani
            </div>
            <div className="font-medium">
              TREASURER <br />
              Cestoball Assn. UK
            </div>
          </div>
        </div>
        <div className="hidden md:flex bg-[#e6e4e4] h-[21rem] w-[15rem] font-bold text-lg">
          <div className="bg-black w-full h-[15rem]">
              <Image 
              src={generalSecretary}
              alt="gnrlsc"
              />
            <div>
            Mr. Shashikant
            </div>
            <div className="font-medium">
              GENERAL SECRETARY <br />
              Cestoball Assn. UK
            </div>
          </div>
        </div>

      </div>

    </div>


    {/* membersSection */}

    </div>
    </>
  );
}
