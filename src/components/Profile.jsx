import React,{useEffect} from 'react'
import UserLeftContainer from './SubComponents/UserLeftContainer'
import VendorLeftContainer from './SubComponents/VendorLeftContainer'
import ProfileHeader from './SubComponents/ProfileHeader'
import { useNavigate } from 'react-router'

 function Profile() {
  const navigate = useNavigate()
  const userinfo = JSON.parse(localStorage.getItem('userinfo'))
  // console.log(userinfo);
  
  useEffect(() => {
    const isloggedIn = localStorage.getItem('loggedIn')
    if(!isloggedIn){
      navigate('/login')
    }
  }, [])
  
  return (
    <div className='w-full h-lvh flex'>
        <div className='w-[15%] bg-emerald-500'>
            <h2 className='font-bold text-3xl m-5 border-b-2 pb-3 text-white'>Hello, Mahfuj Mahtab Mohot</h2><h1 className='text-xl'> </h1> 
            <ul className='ml-5'>
                <UserLeftContainer/>
                {userinfo.role === 'VENDOR' ? 
                
                <VendorLeftContainer/>
                : null }
            </ul>
        </div>
        <div className='w-[82%] ml-[1%] bg-white'>
          <ProfileHeader/>
        </div>
    </div>
  )
}

export default Profile