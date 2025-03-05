import React from 'react'
import UserLeftContainer from './SubComponents/UserLeftContainer'
import VendorLeftContainer from './SubComponents/VendorLeftContainer'

function Profile() {
  return (
    <div className='w-full h-lvh flex'>
        <div className='w-[15%] bg-emerald-500'>
            <h2 className='font-bold text-3xl m-5 border-b-2 pb-3 text-white'>Hello, <h1 className='text-xl'> Mahfuj Mahtab Mohot</h1> </h2>
            <ul className='ml-5'>
                <UserLeftContainer/>
                <VendorLeftContainer/>
            </ul>
        </div>
        <div className='w-[82%] ml-[1%] bg-white'></div>
    </div>
  )
}

export default Profile