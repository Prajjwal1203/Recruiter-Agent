"use client";
import React, { useState,useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewType } from "@/services/Constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function Formcontainer({ onHandleInputChange }) {

  const[interviewType,setInterviewType] = useState([]);
  useEffect(()=>{
    if(interviewType)
    {
      onHandleInputChange('type', interviewType);
    }
  },[interviewType])

  const AddInterviewType =(type)=>{
    const data = interviewType.includes(type);
    if(!data)
    {
      setInterviewType(prev=>[...prev,type.title]);
    }
    else{
      const result = interviewType.filter((item)=> item !=type);
      setInterviewType(result);
    }

  }


  return (
    <div className="p-5 bg-white font-medium rounded-2xl">
      <div>
        <h2 className="text-sm">Job Position</h2>
        <Input placeholder="eg. Software Developer" onChange={(event)=>onHandleInputChange('Job Position',event.target.value)}></Input>
      </div>

      <div className="mt-5 ">
        <h2 className="text-sm  font-medium">Job Description</h2>
        <Textarea
          placeholder="Enter the job description here..."
          className="h-[200px] mt-2" onChange={(event)=>onHandleInputChange('Job Description',event.target.value)}
        ></Textarea>
      </div>

      <div className="mt-5">
        <h2 className="text-sm  font-medium">Interview Duration</h2>

        <Select onValueChange={(value)=>onHandleInputChange('Interview Duration',value)}>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 Mins">5 Mins</SelectItem>
            <SelectItem value="15 Mins">15 Mins</SelectItem>
            <SelectItem value="30 Mins">30 Mins</SelectItem>
            <SelectItem value="45 Mins">45 Mins</SelectItem>
            <SelectItem value="60 Mins">60 Mins</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5">
        <h2 className="text-sm  font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer gap-2 p-1 px-4 bg-white border border-gray-300 rounded-2xl hover:bg-secondary ${interviewType.includes(type.title)&& 'bg-blue-100 text-primary'}` } onClick={()=>AddInterviewType(type.title)}
            >
              <type.icon className="h-4 w-4" />
              <span className="text-sm">{type.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex justify-end">
        <Button>
          Generate Questions <ArrowRight></ArrowRight>
        </Button>
      </div>
    </div>
  );
}

export default Formcontainer;
