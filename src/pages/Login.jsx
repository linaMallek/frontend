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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


const Login = () => {
  return (
      <>
   <div className='yesflex yesjustify-between'>
    <div className='yesbg-login yesh-lvh yesw-[150rem] yesflex yesflex-col  '>
        <p className='yestext-black yestext-4xl yesfont-bold yesw-40 yesfontbold yesml-20 yesmt-20'>
        Welcome </p>
        <p className='yestext-black yestext-4xl yesfont-bold yesw-60 yesfontbold yesml-20'>Back to</p>
        <p className='yestext-black yestext-4xl yesfont-bold yesw-60 yesfontbold yesml-20'>
         MeDz
        </p>
    
        <img className='yesh-[33.4rem] yesmt-1 yesw-[30rem]' src="./public/login.svg" alt="" />
      </div>
        <div className='yesflex yesjustify-end'>
        <Card className='yesh-lvh yesw-[60rem] yesrounded-xl'>
            <CardHeader className='yesml-[45rem] yesw-40'>
            <DropdownMenu>
  <DropdownMenuTrigger className='yesfont-semibold'>English (UK) </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem> French (FR)</DropdownMenuItem>
    <DropdownMenuItem>Arabi(AR)</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            </CardHeader>
  <CardHeader>
    <div className='yesflex yespb-5'>
    <CardTitle className='yesml-[25rem] yestext-3xl yesfont-bold yesflex'>Log in
    </CardTitle>

    </div>
    <CardTitle className='yesw-[40rem] yesh-14 yesflex yesjustify-between yesml-32'>
        <button className='yesflex yesjustify-around yesw-[15rem] yestext-lg yesmt-3 yesborder yesrounded-lg'>
            <img  className='yesml-2 yesmt-2 'src='./public/google.svg' >
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
  <CardContent className='yesw-[40rem] yesml-40 yesh-[9rem] yesflex yesflex-col yesjustify-between'>
 

<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password"/>

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

export default Login
