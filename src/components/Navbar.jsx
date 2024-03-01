import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="yesh-16 yesflex yesfixed yespr-2 yesbg-white">
        <div className="yesh-16 yesmt-5">
          <img
            src="./public/logo.svg"
            className="yesw-40  yesmt-[-0.5rem] yesml-16"
          ></img>
        </div>

        <div className="yesfont-semibold">
          <button className="yesm-5 yesml-48">Home</button>
          <button className="yesm-5 yesml-16">About us</button>
          <button className="yesm-5 yesml-16">Services</button>
          <button className="yesm-5 yesml-16">Contact</button>
          <button className="yesm-5 yesml-16">Map</button>
        </div>
        <div className="yesml-72">
          <button className="yesmt-5 yestext-textblue">Log in</button>
          <button className=" yesml-10 yesw-24 yesh-10 yesrounded-3xl yesbg-docblue yestext-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
