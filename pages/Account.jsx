import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import SavedShows from '../components/SavedMovies/SavedShows';

const Account = () => {
  const { user } = UserAuth();
  const router = useRouter();
  useEffect(() => {
    if(!user.email){
      router.back();
    }
  }, [])
  
    return (
      <>
        <div className='w-full text-white'>
          <img
            className='object-cover w-full h-[400px]'
            src={`https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/7fe2200c-587b-4beb-bc41-7ee702fa230f/MX-es-20220718-popsignuptwoweeks-perspective_alpha_website_large.jpg`} />
          <div className='fixed top-0 left-0 w-full h-[550px] bg-black/50' />
          <div className='absolute top-[20%] p-4 md:p-8 '>
            <h1 className='text-3xl font-bold md:text-5xl'>My shows</h1>
          </div>
        </div>
        <SavedShows/>
      </>
    )
 
}

export default Account