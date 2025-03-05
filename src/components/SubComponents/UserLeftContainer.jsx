import React from 'react'
import { Link } from 'react-router'

function UserLeftContainer() {
  return (
    <div>

        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>My Profile</Link> </li>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>My Orders</Link> </li>
        <li className='mb-1'> <Link to="/profile" className='font-semibold text-white'>Settings</Link> </li>
      
       
    </div>
  )
}

export default UserLeftContainer