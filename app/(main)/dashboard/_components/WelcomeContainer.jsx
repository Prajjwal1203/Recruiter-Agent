"use client";
import { useUser } from '@/app/provider'
import Image from 'next/image';
import React from 'react'

function WelcomeContainer() {
  const {user} = useUser() || {};
  return (
    <div className='bg-white p-5 rounded-xl flex justify-between items-center'>
      <div >
        <h2 className='text-lg font-bold'>Welcome Back {user?.name}</h2>
        <h2 className='text-gray-500'> AI-Driven Interviews , Hassle-Free Hiring </h2>
      </div>
      
      {/*<Image src={user?.picture} alt="userAvatar" width={50} height={50} className="rounded-full"></Image>*/}

       {user?.picture ? (
        <Image src={user.picture} alt="userAvatar" width={50} height={50} className="rounded-full" />
      ) : (
        <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
         
        </div>
      )}
    </div>
  )
}

export default WelcomeContainer
