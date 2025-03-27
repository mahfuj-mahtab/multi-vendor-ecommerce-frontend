import React,{useState,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import AllProducts from './AllProducts'
import { api } from './SubComponents/API'
import axios from 'axios'
import { Link, useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { p_id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage on component mount
  useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
  }, []);

  // ✅ Save cart to localStorage whenever it updates
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
      setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === product.id);
          if (existingItem) {
              const updatedCart = prevCart.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
              );
              toast.success("Cart updated!");
              return updatedCart;
          }
          toast.success("Item added to cart!");
          return [...prevCart, { ...product, quantity }];
      });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  useEffect(() => {
    axios.get(`${api}/api/v1/products/${p_id}/`)
    .then((response)=>{
      setProduct(response.data)
      console.log(response.data.banner_img)
      
      console.log(response.data)
      
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
                <img className='mt-3 rounded-2xl' src={product.banner_img} alt="" />
              </div>
              <div className="lg:w-[49%] h-full pl-5 w-full">
                <h2 className='mt-3 font-semibold text-2xl text-gray-600'>{product.name}</h2>
                <div className="w-[90%] h-10 mt-4 ">
                  <span className='font-semibold text-md text-gray-600 me-5 px-3 py-1 rounded-2xl bg-gray-200'>Price : {product.discount_price} tk

                  <del> <span className='font-semibold text-md text-gray-400 pl-3'>{product.price} tk</span></del>
                  </span>
                 
                </div>
                {/* <p className='text-justify pe-4 text-sm'>{product.description}</p> */}
                <div className="mt-4">
                <p className='mb-2 font-semibold text-gray-600'>Choose Variant</p>
               
               <select  className='border-1 w-60 rounded-lg  border-gray-400 text-gray-600 p-1 text-sm'>
                <option  value="">Size : L, Color : Red</option>
                <option  value="">Size : L, Color : Red</option>
                <option  value="">Size : L, Color : Red</option>
                <option  value="">Size : L, Color : Red</option>
            
               </select> <br />
               <p className='my-2 font-semibold text-gray-600'>Quantity</p>

               <input type="number" name="" id="" className='border-1 rounded-md  border-gray-400 h-7 pl-2 w-20'  defaultValue={1} onChange={(e) => setQuantity(Number(e.target.value))}/> <br />
               <Link to='/order' className='px-6 py-2 btn-lg w-40 h-9 rounded-md mt-3 bg-blue-700 text-white hover:bg-blue-600'>Buy Now</Link>
               <button className='w-40 h-9 rounded-md mt-3 bg-blue-700 text-white hover:bg-blue-600 ml-3' onClick={() => addToCart(product, quantity)}>Add to Cart</button>
               
               </div>
              </div>
          </div>
          <div className='w-full h-auto mb-10'>
            <h1 className='font-semibold text-2xl text-gray-900 mb-5'>Details</h1>
            <p className='text-justify'>{product.description}</p>
          </div>
          <ToastContainer />
        </div>
        <AllProducts/>
        <Footer/>
    </div>
  )
}

export default SingleProduct