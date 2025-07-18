"use client"
import { Button } from '@/components/ui/button';
import {  Video } from 'lucide-react';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


function LatestInterviewList() {
  const [interviewList,setInterviewList] = useState([]);

    const router = useRouter();
   const handleCreateInterview = () => {
    router.push('/dashboard/create-interview');
  };
  return (
    <div className='my-5'>
      <h2 className='font-bold text-2xl'> Previously Created Interviews</h2>

      {interviewList?.length == 0 && <div className='p-5 flex flex-col gap-3 items-center bg-white mt-5 '>
        <Video className='h-10 w-10 text-primary'></Video>
        <h2>You don't have any interview created</h2>
        <Button onClick={handleCreateInterview}>+ Create New Interview</Button>
        </div>
        }
        </div>
    
  )
}

export default LatestInterviewList
