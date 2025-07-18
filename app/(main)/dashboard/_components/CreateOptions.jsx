import { Phone, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <Link href={'/dashboard/create-interview'} className='bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2 cursor-pointer'>
        <Video className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'></Video>
        <h2 className='font-bold'>Create New Interview</h2>
        <p className='text-gray-500'>Create AI Interviews and schedule them with Candidates</p>

      </Link>
      
        <Link href={'/dashboard/create-interview'}className='bg-white border border-gray-200 rounded-lg p-5'>
        <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-10 w-10'></Phone>
        <h2 className='font-bold'>Create Phone Screening call</h2>
        <p className='text-gray-500'>Schedule Phone screening call with candidates</p>
      
        </Link>
    </div>
  )
}

export default CreateOptions
