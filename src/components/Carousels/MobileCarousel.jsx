'use client'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import chairmanPhoto from '@/assets/ShukdevSingh.jpg'
import presidentPhoto from '@/assets/PoonamPalival.jpg'
import treasurerPhoto from '@/assets/LaxmiRani.jpg'
import generalSecretary from '@/assets/Shashikant.jpg'
import Image from 'next/image'
import { useEffect } from 'react'


function MobileCarousel() {

  useEffect(()=>{
    require('../../../node_modules/bootstrap/dist/js/bootstrap.js')
  },[])
  return (
    <div className='mt-2 bg-[#f2f2f2] h-[20rem]'>
        <div className='font-bold text-2xl pt-3 text-[#0B45F2]'>
            People connected with Us...
        </div>
      <div className="w-30 h-30 sm:hidden flex mx-22 mt-4">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="bg-[#e6e4e4] h-[14rem] w-[11rem] font-bold text-lg">
                <div className="bg-black w-full h-[11rem]">
                  <Image 
                  src={chairmanPhoto}
                  alt="chairman"
                  />
                <div className="text-sm">
                Sukhdev Singh&#40;Namdhari&#41;
                </div>
                <div className="font-medium text-sm">
                  CHAIRMAN
                </div>
             </div>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="bg-[#e6e4e4] h-[14rem] w-[11rem] font-bold text-lg">
                <div className="bg-black w-full h-[11rem]">
                  <Image 
                  src={presidentPhoto}
                  alt="president"
                  />
                <div className="text-sm">
                Poonam Paliwal&#40;BHAGAT&#41;
                </div>
                <div className="font-medium text-sm">
                  PRESIDENT
                </div>
             </div>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="bg-[#e6e4e4] h-[14rem] w-[11rem] font-bold text-lg">
                <div className="bg-black w-full h-[11rem]">
                  <Image 
                  src={treasurerPhoto}
                  alt="treasurerPhoto"
                  />
                <div className="text-sm">
                Mrs. Laxmi Rani
                </div>
                <div className="font-medium text-sm">
                  TREASURER
                </div>
             </div>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="bg-[#e6e4e4] h-[14rem] w-[11rem] font-bold text-lg">
                <div className="bg-black w-full h-[11rem]">
                  <Image 
                  src={generalSecretary}
                  alt="generalSecretary"
                  />
                <div className="text-sm">
                Mr. Shashikant
                </div>
                <div className="font-medium text-sm">
                  GENERAL SECRETARY
                </div>
             </div>
            </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileCarousel
