import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {api} from './SubComponents/API'
function AllCategory() {
    const [categories,setCategories] = useState()
    useEffect(() => {
      axios.get(`${api}/api/v1/category/`)
      .then((response)=>{
        console.log(response)
        
        setCategories(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }, [])
    if(!categories){
        return <div>Loading...</div>
    }
  return (
    <div className='container mx-auto lg:w-7xl mt-5 lg:h-68 h-auto lg:px-0 md:px-0 px-2'>
        <h1 className='font-medium text-2xl'>Popular Category</h1>
        <div className='w-full lg:h-54 h-auto mt-6  flex justify-between flex-col lg:flex-row'>
            {categories.map((category)=>(

            <div className='lg:w-75 w-[98%] border-2 h-full rounded-lg align-center flex flex-col items-center pb-5 mb-5'>
                <img className='w-34 h-36 rounded-full mt-2' src={category.logo} alt="" /> 
                <p className='font-normal mt-5'>{category.name}</p>
            </div>
            ))}
           
          
         
            
           

        </div>
    </div>
  )
}

export default AllCategory