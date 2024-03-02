import React from 'react'
import Sidebar from '@/components/ui/Sidebar'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Calendar } from "@/components/ui/calendar"

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
 


const Doctormain = () => {
  return (
    <>
    <div className='yesflex'>

  <Sidebar>
  </Sidebar>
  <div className='yesflex yesw-lvh'>

<div className='yesml-10'>
        <p className='yesml-10 yesmt-5 yestext-2xl yesfont-medium'>
            Welcome
        </p>
    <p className='yesml-10 yesmt-2 yestext-3xl yesfont-bold yestext-docblue'>
            Dr. Fares Slimani!
        </p>
        <p className='yesml-10 yesmb-5 yestext-lg'>Here are your recent Tasks. updates and Appointments </p>

  <Card className='yesw-[50rem] yesh-[20rem] yesshadow-xl '>
    <CardHeader>
    <CardTitle className='yesflex yesjustify-center'> </CardTitle>
    <CardDescription className=' yestext-lg yesml-5 yesflex yesjustify-around  yestextblack yesfont-bold'>
      <p className='yestext-black yestext-xl yesmb-1 yesw-[50rem}'>
      Upcoming appointments
      </p>
      </CardDescription>
  </CardHeader>
  <CardContent className='yesflex yesjustify-around yesw-[50rem]'>
    <p className='yesopacity-70  yesmt-[-1rem]'>Date.</p>
    <p className='yesopacity-70 yesmt-[-1rem]'>Time.</p>
    <p className='yesopacity-70  yesmt-[-1rem]'>Description.</p>
  </CardContent>


  <CardDescription 
  className=' yesmb-1 yestext-lg yesml-5 yesflex yesjustify-around yesw-[46rem]  yestextblack yesfont-semibold'>
      <p className='yestext-black yestext-lg '>
      01 January 2024
      </p> 
      <p className='yestext-black yestext-lg '>
      9:00h-10:00h
      </p>
      <p className='yestext-black yestext-lg '>
      Tooth extraction
      </p>
      </CardDescription>
      <CardContent className='yesflex yesjustify-around yesw-[50rem]'>
    <p className='yesopacity-70 '>Date.</p>
    <p className='yesopacity-70 '>Time.</p>
    <p className='yesopacity-70 '>Description.</p>
  </CardContent>





 <CardDescription 
  className=' yesmb-1 yestext-lg yesml-5 yesflex yesjustify-around yesw-[46rem]  yestextblack yesfont-semibold'>
      <p className='yestext-black yestext-lg '>
      01 January 2024
      </p> 
      <p className='yestext-black yestext-lg '>
      9:00h-10:00h
      </p>
      <p className='yestext-black yestext-lg '>
      Regular check-up
      </p>
      </CardDescription>
      <CardContent className='yesflex yesjustify-around yesw-[50rem]'>
    <p className='yesopacity-70 '>Date.</p>
    <p className='yesopacity-70 '>Time.</p>
    <p className='yesopacity-70 '>Description.</p>
  </CardContent>
  <CardDescription 
  className=' yestext-lg yesml-5 yesflex yesjustify-around yesw-[46rem]  yestextblack yesfont-semibold'>
      <p className='yestext-black yestext-lg '>
      01 January 2024
      </p> 
      <p className='yestext-black yestext-lg '>
      9:00h-10:00h
      </p>
      <p className='yestext-black yestext-lg '>
      Teeth whitening
      </p>
      </CardDescription>
</Card>







<Card className='yesw-[50rem] yesh-[15rem] yesshadow-xl '>
    <CardHeader>
    <CardTitle className='yesflex yesjustify-center'> </CardTitle>
    <CardDescription className=' yestext-lg yesml-5 yesflex yesjustify-around  yestextblack yesfont-bold'>
      <p className='yestext-black yestext-xl yesmb-1 yesw-[50rem}'>
      Recent modifications
      </p>
      </CardDescription>
  </CardHeader>
  <CardContent className='yesflex yesjustify-around yesw-[50rem]'>
    <p className='yesopacity-70  yesmt-[-1rem]'>Date.</p>
    <p className='yesopacity-70 yesmt-[-1rem]'>Time.</p>
    <p className='yesopacity-70  yesmt-[-1rem]'>Description.</p>
  </CardContent>


  <CardDescription 
  className=' yesmb-1 yestext-lg yesml-5 yesflex yesjustify-around yesw-[46rem]  yestextblack yesfont-semibold'>
      <p className='yestext-black yestext-lg '>
      01 January 2024
      </p> 
      <p className='yestext-black yestext-lg '>
      9:00h-10:00h
      </p>
      <p className='yestext-black yestext-lg '>
      Tooth extraction
      </p>
      </CardDescription>
      <CardContent className='yesflex yesjustify-around yesw-[50rem]'>
    <p className='yesopacity-70 '>Date.</p>
    <p className='yesopacity-70 '>Time.</p>
    <p className='yesopacity-70 '>Description.</p>
  </CardContent>

</Card>
    </div>
    <div className='yesflex yesml-20 yesmt-10'>
        <img className='yesh-7' src='/message.svg'></img>
        <img className='yesh-7 yesml-14' src='/Notifications.svg'></img>
  <div className='yesh-80 yesflex yesflex-col'>
        <Select>
  <SelectTrigger className="yesw-[190px] yesml-10">
    <img src='/profilepic.svg'>
    </img>
    <SelectValue className='yestext-bold yestext-xl yesml-10'placeholder="Dr. Fares" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Profile</SelectItem>
    <SelectItem value="dark">Settings</SelectItem>
    <SelectItem value="system">Log out</SelectItem>
  </SelectContent>
</Select>
    </div>

    </div>
  </div>
  <div className='yesflex yesflex-col yesjustify-around yesmr-10 yesmt-10'>

    <Calendar  className=''
     mode="single"
     />
     <Card className='yesh-72 yesw-80'>

     <Accordion type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger>Appointment request</AccordionTrigger>
    <AccordionContent>
      A patient has requested an appointment
    </AccordionContent>
  </AccordionItem>
</Accordion>


<Accordion type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger>Cancellation</AccordionTrigger>
    <AccordionContent>
      A patient has cancelled an appointment
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger>Reminder</AccordionTrigger>
    <AccordionContent>
      An appointmentis schedueled in two days from now at 10 am
    </AccordionContent>
  </AccordionItem>
</Accordion>
     </Card>

     </div>
    </div>

    </>
  )
}

export default Doctormain
