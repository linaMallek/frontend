import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
       <div className='yesflex'>
      <div className='yesbg-primary yesw-20 yesh-lvh yesflex yesflex-col'>
        <div>
            <img className='yesml-4 yesmt-5 yesh-12' src='Fichier 2 2.svg'>
            
            </img>
            <Link to='/'>
            <img className='yesmt-24 yesh-5 yesml-8' src='./public/Home.svg'>
            </img>

            </Link>
            <Link to='/patient'>

            <img className='yesmt-10 yesh-5 yesml-8' src='./public/Patients.svg'>
            </img>
            </Link>
            <img className='yesmt-10 yesh-5 yesml-8' src='./public/Calendar.svg'>
            </img>
            <img className='yesmt-10 yesh-5 yesml-8' src='./public/History.svg'>
            </img>
            <img className='yesmt-36 yesh-5 yesml-8' src='./public/Edit.svg'>
            </img>
            <Link to='/login'
              >
            <img className='yesmt-10 yesh-5 yesml-8' src='./public/Logout.svg'>
            </img>

            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
