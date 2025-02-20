import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
function MyCarousel() {
  return (
    <div className='container mx-auto max-w-7xl mt-5 h-[500px] lg:px-0 md:px-0 px-2'>
    <Carousel>
        <CarouselContent>
            <CarouselItem>
                <div  className='h-[500px]  border-2'>
                    <h1>This is banner</h1>
                </div>
            </CarouselItem>
            <CarouselItem>

            </CarouselItem>
            <CarouselItem>

            </CarouselItem>
        </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>

  )
}

export default MyCarousel