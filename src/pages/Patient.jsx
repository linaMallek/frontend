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
 
  


const Patient = () => {
  return (
    <>
    <div className='yesflex'>

  <Sidebar>
  </Sidebar>
  <div className='yesflex yesw-lvh'>

<div className='yesml-10'>

  <Card className='yesw-[45rem] yesmt-10 yesh-[13rem] yesshadow-lg '>
    <CardHeader>
    <CardTitle className='yesflex yesjustify-center'> </CardTitle>
    <CardDescription className=' yestext-lg  yesflex   yestextblack yesfont-bold'>
      <p className='yestext-black yestext-xl yesmt-[-1rem] yesmb-1 yesw-[45rem}'>
      Patient Profile
      </p>
      </CardDescription>
  </CardHeader>



  <div className='yesflex yesml-10'>
  <CardDescription 
  className=' yesmb-1 yesh-5 yesflex  yesw-[45rem]  yestextblack yesfont-semibold'>
    <div className='yesflex '>
    <img className='yesh-10' src='Image.png'>
    </img>
    <div className='yesml-5 yesflex yesflex-col'>

      <p className='yestext-black yesmt-1  '>
      Katia Lounas 
      </p> 
      <p>
        20 Years old
      </p>
    </div>
<div className='yesflex yesjustify-between yesw-52'>
</div>
    </div>
    <div className='yesflex  yesalign-end yesflex-col'>

    <p>Email: katiaLounas@gmail.com</p>
    <p>Phone number : 05 66 74 77 90</p>
    <p>Blood type : B+</p>
    <p>Height : 1.70</p>
    <p>Weight : 60kg</p>
    <p className='yestext-primary yesml-60'>Edit profile</p>
    </div>
      </CardDescription>
      </div>
      <CardContent className='yesflex yesjustify-around yesw-[45rem]'>
   
  </CardContent>


</Card>







<Card className='yesw-[45rem] yesmt-5 yesh-[15rem] yesshadow-lg '>
    <CardHeader>
    <CardTitle className='yesflex yesjustify-center'> </CardTitle>
    <CardDescription className=' yestext-lg yesml-5 yesflex yesjustify-around  yestextblack yesfont-bold'>
      <p className='yestext-black yestext-xl yesmb-1 yesw-[50rem}'>
      Recent apppointments
      </p>
      </CardDescription>
  </CardHeader>
  <CardContent className='yesflex yesjustify-around yesw-[45rem]'>
    <p className='yesopacity-70  yesmt-[-1rem]'>Date.</p>
    <p className='yesopacity-70 yesmt-[-1rem]'>Time.</p>
    <p className='yesopacity-70  yesmt-[-1rem]'>Description.</p>
  </CardContent>


  <CardDescription 
  className=' yesmb-1 yestext-lg yesmt-[-1rem] yesh-5 yesflex yesborder-b-2 yesjustify-around yesw-[44rem]  yesfont-semibold'>
      <p className='yestext-black  '>
      01 January 2024
      </p> 
      <p className='yestext-black '>
      9:00h-10:00h
      </p>
      <p className='yestext-black  '>
      Tooth extraction
      </p>
      </CardDescription>
      <CardContent className='yesflex yesmt-2 yesjustify-around yesw-[45rem]'>
    <p className='yesopacity-70 '>Date.</p>
    <p className='yesopacity-70 '>Time.</p>
    <p className='yesopacity-70 '>Description.</p>
  </CardContent>
  <CardDescription 
  className=' yesmb-1 yestext-lg yesmt-[-1rem] yesh-5 yesflex yesborder-b-2 yesjustify-around yesw-[44rem]  yesfont-semibold'>
      <p className='yestext-black  '>
      01 January 2024
      </p> 
      <p className='yestext-black '>
      9:00h-10:00h
      </p>
      <p className='yestext-black  '>
      Tooth extraction
      </p>
      </CardDescription>
      <CardContent className='yesflex yesmt-5 yesjustify-around yesw-[45rem]'>
    <p className='yesopacity-70  yesmt-[-1rem]'>Date.</p>
    <p className='yesopacity-70 yesmt-[-1rem]'>Time.</p>
    <p className='yesopacity-70  yesmt-[-1rem]'>Description.</p>
  </CardContent>
  <CardDescription 
  className=' yesmb-2 yestext-lg yesmt-[-1rem] yesh-5 yesflex  yesjustify-around yesw-[44rem]  yesfont-semibold'>
      <p className='yestext-black  '>
      01 January 2024
      </p> 
      <p className='yestext-black '>
      9:00h-10:00h
      </p>
      <p className='yestext-black  '>
      Check up
      </p>
      </CardDescription>
</Card>
    </div>
    <div className='yesflex yesml-40  yesmt-10'>
        <img className='yesh-6 yesmt-1' src='/message.svg'></img>
        <img className='yesh-6 yesmt-1 yesml-14' src='/Notifications.svg'></img>
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


  <div className='yesflex yesflex-col yesml-[-15rem] yesjustify-around yesmr-10 yesmt-[-5rem]'>

    <Calendar  className='yesh-96 yesmt-20'
     mode="single"
     />
     
     <Card className='yesh-40 yesmt-[-13rem] yesw-80'>
<p className='yestext-lg yesfont-semibold yestext-center'> Your Doctors</p>
     <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Appointment request</AccordionTrigger>
    <AccordionContent>
      A patient has requested an appointment
    </AccordionContent>
  </AccordionItem>
</Accordion>


<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Cancellation</AccordionTrigger>
    <AccordionContent>
      A patient has cancelled an appointment
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
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

export default Patient
