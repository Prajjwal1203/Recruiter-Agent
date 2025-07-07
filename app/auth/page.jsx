"use client"
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import Image from 'next/image'
import React from 'react'

function login() {

  const signINWithGoogle=async()=>{
    const {error} =  await supabase.auth.signInWithOAuth({
      provider:'google'
    })

    if(error){
      console.error('Error:', error.message);
    }

  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {/*<div className='flex flex-col items-center border rounded-2xl p-8'>
        <Image src={'/hiii.png'} 
        width={400} 
        height={100} 
        alt="axxcs"
        className='w-[180px]'
        ></Image>
      </div>*/}

      <div className='flex flex-col items-center border rounded-2xl p-8 bg-white shadow-lg'>
        <Image src={'/111.png'} alt="csdx" 
        width={600}
        height={400}
        className='w-[400px] h-[250px]'>  
        </Image>
        <h2 className='text-2xl font-bold text-center mt-5'>Welcome to your Recruiter Agent</h2>
        <p className='text-gray-500 text-center'>Sign In with Google Authentication</p>
        <Button className='mt-7 w-full' onClick={signINWithGoogle}>Login with Google</Button>
      </div>
    </div>
  )
}

export default login
