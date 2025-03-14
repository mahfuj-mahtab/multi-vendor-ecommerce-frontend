import React from 'react'
import { Link } from 'react-router'
function VendorLeftContainer() {
  return (
    <div>
        <h2 className='font-bold my-3 text-xl text-white'>Vendor Section</h2>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>Vendor Details</Link> </li>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>All Orders</Link> </li>
        <li className='mb-1'> <Link to="/vendor/all/products" className='font-semibold text-white'>All Products</Link> </li>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>Settings</Link> </li>
    </div>
  )
}

export default VendorLeftContainer