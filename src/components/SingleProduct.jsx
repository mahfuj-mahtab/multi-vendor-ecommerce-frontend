import React,{useState,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import AllProducts from './AllProducts'
import { api } from './SubComponents/API'
import axios from 'axios'
import { useParams } from 'react-router'

function SingleProduct() {
  const [product, setProduct] = useState()
  const {p_id} = useParams()
  useEffect(() => {
    axios.get(`${api}/api/v1/home/product/${p_id}`)
    .then((response)=>{
      setProduct(response.data.data)
      console.log(response.data.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])
  if(!product){
    return <div>Loading...</div>
  }
  return (
    <div>
        <Header/>

        <div className="container m-auto max-w-7xl h-auto mt-5">
          <div className="container h-[600px] lg:flex">
              <div className="lg:w-[50%] h-full w-full">
                <img className='mt-3 rounded-2xl' src="https://easyfashion.com.bd/wp-content/uploads/2025/02/shirt-10-1-800x534.webp" alt="" />
              </div>
              <div className="lg:w-[49%] h-full pl-5 w-full">
                <h2 className='mt-3 font-semibold text-2xl text-gray-600'>{product.name}</h2>
                <div className="w-[90%] h-10 mt-4 ">
                  <span className='font-semibold text-md text-gray-600 me-5 px-3 py-1 rounded-2xl bg-gray-200'>Price : 1200 tk

                  <del> <span className='font-semibold text-md text-gray-400 pl-3'>1200 tk</span></del>
                  </span>
                 
                </div>
                {/* <p className='text-justify pe-4 text-sm'>{product.description}</p> */}
                <div className="mt-4">
                <p className='mb-2 font-semibold text-gray-600'>Choose Variant</p>
                <form action="">
               <select  className='border-1 w-60 rounded-lg  border-gray-400 text-gray-600 p-1 text-sm'>
                <option  value="">Size : L, Color : Red</option>
                <option  value="">Size : L, Color : Red</option>
                <option  value="">Size : L, Color : Red</option>
                <option  value="">Size : L, Color : Red</option>
            
               </select> <br />
               <p className='my-2 font-semibold text-gray-600'>Quantity</p>

               <input type="number" name="" id="" className='border-1 rounded-md  border-gray-400 h-7 pl-2 w-20'  defaultValue={1}/> <br />
               <button className='w-40 h-9 rounded-md mt-3 bg-blue-700 text-white hover:bg-blue-600'>Buy Now</button>
               </form>
               </div>
              </div>
          </div>
          <div className='w-full h-auto mb-10'>
            <h1 className='font-semibold text-2xl text-gray-900 mb-5'>Details</h1>
            <p className='text-justify'>{product.description}</p>
          </div>
        </div>
        <AllProducts/>
        <Footer/>
    </div>
  )
}

export default SingleProduct