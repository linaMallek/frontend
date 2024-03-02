import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='yesbg-primary yesflex yesjustify-between yespt-3 yespl-20'>
        <div className='yesflex yesflex-col'>
      <img src='/Logo.svg'></img>
      <h1 className='yestext-xl yesflex yestext-white yespt-4'>
        <img className='yespr-2'src="Letter.svg" alt="" />Medzone@gmail.com
      </h1>
        </div>

        <div className='yesflex yesflex-col'>
      <h1 className='yestext-white yestext-2xl yesfont-bold yespt-2 yespb-2'>Navigation</h1>
      <button className='yestext-white yestext-xl yespr-12 yespb-3'>
       Services
      </button>
      <button className='yestext-white yestext-xl yespb-5 yespr-14'>
        About us
      </button>
</div>
<div className='yesflex yesflex-col'>
      <h1 className='yestext-white yestext-2xl yesfont-bold yespt-2 yespb-2'>Discover</h1>
      <button className='yestext-white yestext-xl yespr-8 yespb-3'>
        Privacy Policy
      </button>
      <button className='yestext-white yestext-xl yespb-5 yespr-14'>
        Our Blogs
      </button>
</div> 
<div className='yesflex yesflex-col'>
      <h1 className='yestext-white yestext-2xl yesfont-semibold yespl-5 yespt-2'>Contacts</h1>
      <h1 className='yestext-white yestext-xl yesp-1'>
        Give us your opinions!
      </h1>
      <div className='yesbg-white yesh-10 yesflex yesjustify-end yesrounded-3xl yesw-30'>

      <button className=' yesflex yesbg-primary yesrounded-xl yesjustify-center yesh-7 yesmt-2 yesmr-2 yesw-20 yestext-white'>
        SEND <img className='yesmt-1' src='Arrow.svg'></img>
      </button>
      </div>

</div>
<div>
    
</div>

    </div>
    </>
  )
}

export default Footer
