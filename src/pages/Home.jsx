import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Home() {
  return (
    <>
    <div className='yesh-16 yesflex'>


      <div className='yesh-16 yesmt-5'>
      <button className='yesml-10 yestext-3xl yestext-docblue yesfont-bold'>
        MeDz
      </button>
      </div>

      <div className='yesfont-semibold'>

    <button className='yesm-5 yesml-96'>
      Home
    </button>
    <button className='yesm-5 yesml-16'>
      About us
    </button>
    <button className='yesm-5 yesml-16'>
      Services
    </button>
    <button className='yesm-5 yesml-16'>
      Contact
    </button>
      </div>
      <div className='yesml-60'>

    <button className='yesmt-5 yesml-16 yestext-textblue'>
      Log in
    </button>
    <button className=' yesml-10 yesw-24 yesh-10 yesrounded-3xl yesbg-docblue yestext-white'>
      Sign up
    </button>
      </div>

      </div>
      
      <div className='yesflex yesml-20'>

      <div className='yesh-[35rem]   yesw-[35rem]'>
        <h1 className='yesfont-bold yestext-docblue yesmt-44 yestext-6xl yesml-10'>A Great Place To  
</h1>
<h1 className='yesfont-bold yestext-docblue yestext-6xl yesml-10'>
Receive Care
</h1>
<p className='yesml-10 yesmt-16 yestext-2xl yesopacity-70'>Take control of your health journey </p> <p className='yesml-10 yestext-xl yesopacity-70 '>
all in one place.</p>
    </div>
    <div>
      <img className='yesh-16 yesml-96' src='./public/Place Marker.svg'></img>
      <img className='yesh-[40rem] yesw-[40rem] yesml-60' src='./public/Group 8885.svg'></img>
    </div>
      </div>
      <div className='yesbg-docblue yesh-dvh'>
     <h1 className='yestext-6xl yesfont-semibold yestext-center  yestext-white'>Services</h1>
     <div className='yesflex  yesjustify-around yesmt-20'>
     <Card className='yesw-80'>
  <CardHeader>
    <CardTitle className='yesml-24'> <img className='yesh-16' src='./public/Chat.svg' ></img></CardTitle>
    <CardDescription className='yestext-xl yesm-10 yesw-56 yestext-docblue yesfont-bold'>
      <p className='yestext-docblue'>
      Connect with your doctor instantly!
      </p>
      </CardDescription>
  </CardHeader>
  <CardContent>
    <p className='yesopacity-70 yestext-center'>Receive personalized advice and answers to your questions via our secure messaging platform.</p>
  </CardContent>
 <CardFooter className='yesflex yesjustify-center'>
 <button className=' yesw-40 yesh-10 yesrounded-3xl yesfont-semibold yesbg-docblue yestext-white'>
      Check now
    </button>
 </CardFooter>
</Card>

<Card className='yesw-80 yesmb-16 yesmt-[-3rem]'>
  <CardHeader>
    <CardTitle className='yesml-24'> <img className='yesh-16' src='./public/Message Bot.svg' ></img></CardTitle>
    <CardDescription className='yestext-xl yesm-10 yesw-56 yestext-docblue yesfont-bold'>
      <p className='yestext-docblue'>
      Full access to Ai Chat     
       </p>
      </CardDescription>
  </CardHeader>
  <CardContent>
    <p className='yesopacity-70'>Receive personalized advice and answers to your questions via our secure messaging platform.</p>
  </CardContent>
 <CardFooter>
 <button className=' yesml-10 yesw-40 yesh-10 yesrounded-3xl yesfont-semibold yesbg-docblue yestext-white'>
      Check now
    </button>
 </CardFooter>
</Card>

<Card className='yesw-80'>
  <CardHeader>
    <CardTitle className='yesml-24'> <img className='yesh-16' src='./public/Chat.svg' ></img></CardTitle>
    <CardDescription className='yestext-xl yesm-10 yesw-56 yestext-docblue yesfont-bold'>
      <p className='yestext-docblue'>
      Connect with your doctor instantly!
      </p>
      </CardDescription>
  </CardHeader>
  <CardContent>
    <p className='yesopacity-70'>Receive personalized advice and answers to your questions via our secure messaging platform.</p>
  </CardContent>
 <CardFooter>
 <button className=' yesml-10 yesw-40 yesh-10 yesrounded-3xl yesfont-semibold yesbg-docblue yestext-white'>
      Check now
    </button>
 </CardFooter>
</Card>
     </div>
      </div>
    </>
  )
}
