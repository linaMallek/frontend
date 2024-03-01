import React from "react";
import { useState } from "react";
import { motion as m } from "framer-motion";

export default function Navbar() {
  const [showBorderBottom, setShowBorderBottom] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShowBorderBottom(true);
    } else {
      setShowBorderBottom(false);
    }
  });

  // smooth scroll
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={` yesw-full yesflex yesfixed  yesbg-white yesjustify-between yesitems-center yespx-14 yespy-5 yesz-40 ${
        showBorderBottom ? "yesborder-b-2" : ""
      }`}
    >
      <img src="./public/logo.svg" className="yesw-40"></img>

      <div className="yesfont-semibold yesflex yesgap-10">
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            scrollTo("Home");
          }}
        >
          Home
        </m.button>
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            scrollTo("About");
          }}
        >
          About us
        </m.button>
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            scrollTo("Services");
          }}
        >
          Services
        </m.button>
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            scrollTo("Contact");
          }}
        >
          Contact
        </m.button>
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            scrollTo("Map");
          }}
        >
          Map
        </m.button>
      </div>
      <div className="yesflex yesgap-5">
        <button className=" yestext-textblue">Log in</button>
        <button className=" yesrounded-3xl yesbg-docblue yestext-white yespx-4 yespy-2">
          Sign up
        </button>
      </div>
    </div>
  );
}
