import React from 'react'
import Link from 'next/link'
import {UserAuth} from '../../context/AuthContext'

const Navbar = () => {
  const {user,logOut}= UserAuth();
  //console.log(user.email)
  const handleLogOut=async()=>{
    try {
      await logOut();

    } catch (error) {
      console.log(error)
    }
  }
  return (
   <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
    <Link href={'/'}>
    <h1 className='text-3xl font-bold text-red-600 cursor-pointer'>Netflix</h1>
    </Link>
    {
      user?.email ? 
      <div>
        <Link href={'/Account'}>
          <button className='px-4 py-2 text-white bg-blue-700 rounded-md cursor-pointer'>Account</button>
        </Link>
        <button 
        onClick={handleLogOut}
        className='px-4 py-2 text-white rounded-md cursor-pointer'>LogOut</button>
      </div>
      :
    <div>
      <Link href={'/Login'}>
        <button className='px-4 py-2 pr-4 text-white rounded-md cursor-pointer'>Sign In</button>
      </Link>
      <Link href={'/Signup'}>
        <button className='px-4 py-2 text-white bg-red-500 rounded-md cursor-pointer'>Sign Up</button>
      </Link>
    </div>
    }
   </div>
  )
}

export default Navbar;