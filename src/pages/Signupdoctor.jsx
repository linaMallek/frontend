import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import {
    ToggleGroup,
    ToggleGroupItem,
  } from "@/components/ui/toggle-group"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Label } from "@/components/ui/label"


const Signupdoctor= () => {
  return (
      <>
   <div className='yesflex yesjustify-between'>
    <div className='yesbg-docblue yesh-lvh yesw-[100rem] yesflex yesflex-col  '>
        <p className='yestext-white yestext-4xl yesfont-bold yesw-40 yesfontbold yesml-20 yesmt-20'>
        Getting </p>
        <p className='yestext-white yestext-4xl yesfont-bold yesw-60 yesfontbold yesml-20'>Started With MeDz
        </p>
        <img className='yesh-[33.4rem] yesmt-1 yesw-[30rem]' src="./public/login.svg" alt="" />
      </div>
        <div className='yesflex yesjustify-end'>
        <Card className='yesh-lvh yesw-[60rem] yesrounded-lg'>
            <CardHeader className='yesml-[45rem] yesw-40'>
            <Select>
  <SelectTrigger className="yesw-[140px]">
    <SelectValue placeholder="English (UK)" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">English (UK)</SelectItem>
    <SelectItem value="dark">French (FR)</SelectItem>
    <SelectItem value="system">Arabic (AR)</SelectItem>
  </SelectContent>
</Select>

            </CardHeader>
  <CardHeader>
    <div className='yesflex yespb-5'>
    <CardTitle className='yesml-40 yestext-3xl yesfont-bold yesflex'>Create account 
    <ToggleGroup className='yesml-60 yesw-40 yesh-14 yesbg-slate-300 yesrounded-md' type="single">
      <ToggleGroupItem value="Patient" aria-label="Toggle bold">
        <p className="h-4 w-4">Patient</p>
      </ToggleGroupItem>
      <ToggleGroupItem value="Doctor" aria-label="Toggle italic">
        <p className="h-4 w-4">
            Doctor
            </p>
      </ToggleGroupItem>
      </ToggleGroup>
    </CardTitle>

    </div>
    <CardTitle className='yesw-[40rem] yesh-14 yesflex yesjustify-between yesml-32'>
        <button className='yesflex yesjustify-around yesw-[15rem] yestext-lg yesmt-3 yesborder yesrounded-lg'>
            <img  className='yesml-2 'src='./public/google.svg' >
            </img>
        <p className='yesmt-2'>
            Signup with Google
            </p>
        </button>
        <button className='yesflex yesjustify-around yesw-[15rem] yestext-lg yesmt-3 yesborder yesrounded-lg'>
            <img  className=' yesmt-2 'src='./public/facebook.svg' >
            </img>
        <p className='yesmt-2'>
            Signup with Facebook
            </p>
        </button>
    </CardTitle>
        <CardDescription className='yesw-[57rem] yesmt-10 yesflex yesjustify-center yestext-xl yespt-10'>
            -OR-
        </CardDescription>
  </CardHeader>
  <CardContent className='yesw-[40rem] yesml-40 yesh-[16rem] yesflex yesflex-col yesjustify-between'>
 
<Input type="text" placeholder="Full name" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password"/>
<div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Agreement</Label>
      <Input id="picture" type="file" placeholder="Agreemnt" />
    </div>
  </CardContent>
  <CardFooter className="yesflex yesjustify-center yesw-[60rem] yespt-10">
    <button className='yesrounded-lg yesw-[37rem] yesh-10 yesborder yesbg-docblue yestext-white yesfont-semibold yestext-xl'>
        Create account
    </button>
  </CardFooter>
  <h1 className='yesml-80'>
    Already have an account? <span className='yestext-docblue yesml-3'>Log in</span>
  </h1>
</Card>
        </div>
    </div> 
    </>
  )
}

export default Signupdoctor
