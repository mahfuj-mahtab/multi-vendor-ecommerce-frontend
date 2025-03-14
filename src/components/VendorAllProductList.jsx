import React,{useEffect,useState} from 'react'
import API from './SubComponents/API'
import { useNavigate } from 'react-router'
function VendorAllProductList() {
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    useEffect(() => {
        API.get('/api/v1/users/profile/vendor/all/products')
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            // console.log(err)
            navigate('/login')
        })
    }, [])
    if(!products){
        return <div>Loading...</div>
    }
    return (
        <div className='w-full mt-5'>
            <h1 className='text-2xl font-bold mb-5'>All Products</h1>
            <table className='w-full text-left'>
                <tr className='border-2 h-15'>
                    <th className='pl-5'>Product ID</th>
                    <th>Product Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {products.map((product,key)=>(

                <tr className='border-1 h-10 '>
                    <td className='pl-5'>{key + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.sku}</td>
                    <td>12</td>
                    <td>{product.stock_quantity}</td>
                    <td>{product.is_active ? 'Active' : 'Inactive'}</td>
                    <td><button>Cancel</button></td>
                </tr>
                ))}
             
            </table>
        </div>
      )
}

export default VendorAllProductList