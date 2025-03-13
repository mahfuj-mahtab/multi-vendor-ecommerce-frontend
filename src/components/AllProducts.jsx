import React,{useState,useEffect} from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import axios from 'axios'
import { api } from './SubComponents/API'
function AllProducts() {
  const [products, setProducts] = useState()
  useEffect(() => {
        axios.get(`${api}/api/v1/home/products/`)
        .then((response)=>{
          setProducts(response.data.data);
          
        })
        .catch((error)=>{
          console.log(error,'in fetching products');
          
        })
  }, [])
  
  if(!products){
    return <p>Loading...</p>
  }
  return (
    <div className='container mx-auto mt-5 lg:w-7xl md:px-0 lg:px-0 px-2'>
        <h2 className='my-5 font-medium text-2xl'>Our All Products</h2>
        <Carousel>
        <CarouselContent className='lg:p-3'>
          {products.map((product)=>(

            <CarouselItem className="lg:basis-1/4 h-[520px] mx-2 rounded-lg lg:h-[420px] border-1 p-2">
            
            <div key='' className="group relative">
              <img
                alt='alt'
                src={`${api}/${product.banner_img}`}
                className="aspect-square w-[95%] m-[2.5%] rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-75"
              crossOrigin='anonymous'/>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md font-bold text-gray-700">
                    <a href={`/single/product/${product._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">color</p> */}
                </div>
                <p className="text-sm mr-10 font-medium text-gray-900">{product.discount_price}</p>
              </div>
            </div>
            </CarouselItem>
          ))}
            
         
         
           
      
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

    </div>
  )
}

export default AllProducts