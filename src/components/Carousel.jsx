import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import im1 from '../assets/im1.jpeg'
  import im2 from '../assets/im2.webp'
  import im3 from '../assets/im3.jpeg'
function MyCarousel() {
  return (
    <div className='container mx-auto max-w-7xl mt-5 h-[500px] lg:px-0 md:px-0 px-2'>
    <Carousel>
        <CarouselContent>
            <CarouselItem>
                <div  className='h-[500px]  border-2 p-2'>
                    <img src={im1} alt="img1" className='w-full h-full object-cover object-center' />
                </div>
            </CarouselItem>
            <CarouselItem>
            <div  className='h-[500px]  border-2 p-2'>
                    <img src={im2} alt="img1" className='w-full h-full object-cover object-center' />
                </div>
            </CarouselItem>
            <CarouselItem>
            <div  className='h-[500px]  border-2 p-2'>
                    <img src={im3} alt="img1" className='w-full h-full object-cover object-center' />
                </div>
            </CarouselItem>
        </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>

  )
}

export default MyCarousel