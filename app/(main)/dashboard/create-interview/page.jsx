"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress"
import React, { useState } from "react";
import Formcontainer from "./_components/Formcontainer";
import QuestionsList from "./_components/QuestionsList";

function CreateInterview() {

  const router  = useRouter();
  const [formData, setFormData] = useState();
  const [step,setStep] = useState(1);
  const onHandleInputChange=(field,value)=>{
    setFormData(prev=>({
      ...prev,
      [field]: value
    }))

    console.log("Form Data",formData);
  }
  return (
    <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56
    ">
      <div className="flex gap-5 items-center">
        <ArrowLeft onClick={()=> router.back()} className="cursor-pointer"></ArrowLeft>
        <h2 className="font-bold text-2xl">Create New Interview</h2>

     
      </div>
        <Progress value={step*33.33} className='my-5'></Progress>
       {step == 1?<Formcontainer onHandleInputChange={onHandleInputChange} ></Formcontainer>: step == 2?<QuestionsList/>:null}

        
    </div>
  );
}

export default CreateInterview;
