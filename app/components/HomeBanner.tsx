"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from "embla-carousel-autoplay"
import Image from 'next/image'
import promo from "../../public/img/promo1.png"

const HomeBanner = () =>{
  const [emblaRef] = useEmblaCarousel({loop: true}, [AutoPlay({delay: 2000})])

  return (
    <div className="embla border max-w-lg h-56 mt-12 mx-auto" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">
          <Image src={promo} alt='testing' style={{height: "100%"}} />
        </div>
        <div className="embla__slide flex items-center justify-center">Slide 2</div>
        <div className="embla__slide flex items-center justify-center">Slide 3</div>
      </div>
    </div>
  )
}

export default HomeBanner