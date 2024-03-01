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
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const Doctormain = () => {
  return (
    <>
    <div className='yesflex'>

  <Sidebar>
  </Sidebar>
  <div className='yesflex yesw-lvh'>

<div className='yesml-10'>
        <p className='yesml-10 yesmt-10 yestext-3xl yesfont-medium'>
            Welcome
        </p>
    <p className='yesml-10 yesmt-5 yestext-5xl yesfont-bold yestext-docblue'>
            Dr. Fares Slimani!
        </p>
        <p className='yesml-10 yestext-xl'>Here are your recent Tasks. updates and Appointments </p>
    </div>
    <div className='yesflex yesml-96 yesmt-10'>
        <img className='yesh-7' src='/message.svg'></img>
        <img className='yesh-7 yesml-14' src='/notifications.svg'></img>
        <Select>
  <SelectTrigger className="yesw-[180px] yesml-10">
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
  <Card className='yesw-80 yesh-72 yesshadow-xl '>
  <CardHeader>
    <CardTitle className='yesflex yesjustify-center'> <img className='yesh-14' src='/Chat.svg' ></img></CardTitle>
    <CardDescription className=' yestext-lg yesml-5 yestext-center yesw-56 yestextblack yesfont-bold'>
      <p className='yestext-black'>
      Connect with your doctor instantly!
      </p>
      </CardDescription>
  </CardHeader>
  <CardContent>
    <p className='yesopacity-70 yestext-center yesmt-[-1rem]'>Receive personalized advice and answers to your questions via our secure messaging platform.</p>
  </CardContent>
 <CardFooter className='yesflex yesjustify-center'>
 <button className=' yesmt-[-1rem] yesw-40 yesh-10 yesrounded-2xl yesfont-semibold yesbg-docblue yestext-white'>
      Check now
    </button>
 </CardFooter>
</Card>
    </div>
    </>
  )
}

export default Doctormain
