import React, { useState } from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import {useRouter} from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const {user,logIn}= UserAuth();
  const router= useRouter();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError('')
    try {
      await logIn(email,pass)
      router.push('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }
  return (
    <div className='w-full h-screen '>
        <img
          className='absolute hidden object-cover w-full h-full sm:block'
          src={`https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/7fe2200c-587b-4beb-bc41-7ee702fa230f/MX-es-20220718-popsignuptwoweeks-perspective_alpha_website_large.jpg`} />
        <div className='fixed top-0 left-0 w-full h-screen bg-black/60' />
        <div className='fixed z-50 w-full px-4 py-24'>
          <div className='h-[600px] max-w-[450px] mx-auto text-white bg-black/75'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col py-4'>
                <input type={'email'} placeholder='Email' autoComplete='email' 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                className='p-3 my-2 bg-gray-700 rounded'/>
                <input type={'password'} placeholder='Password' autoComplete='current-password' 
                onChange={(e)=>setPass(e.target.value)}
                value={pass}
                className='p-3 my-2 bg-gray-700 rounded'/>

              {/*Errrors*/}
              {error? <p className='p-3 my-2 bg-red-400 rounded'>Favor de verificar su correo o contraseña</p>:null}
                <button className='px-1 py-2 my-6 font-bold bg-red-500 rounded' type='submit'>Sign In</button>
                <div className='flex items-center justify-between text-sm text-slate-500'>
                  <p><input type={'checkbox'} className='mr-2 rounded'/>Remember me</p>
                  <p>Need help</p>
                </div>
                <p className='py-8'>
                  <span className='text-slate-500'>New to Netflix?</span> {' '}
                  <Link href={'/Signup'}><a className='hover:underline'>Sign Up</a></Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login