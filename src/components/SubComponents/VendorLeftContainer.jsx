import React from 'react'
import { Link } from 'react-router'
function VendorLeftContainer() {
  return (
    <div>
        <h2 className='font-bold my-3 text-xl text-white'>Vendor Section</h2>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>Vendor Details</Link> </li>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>My Orders</Link> </li>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>Settings</Link> </li>
    </div>
  )
}

export default VendorLeftContainer