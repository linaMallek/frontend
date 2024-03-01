import React from "react";

export default function About() {
  return (
    <div className="yesbg-white  yesflex yesjustify-between" id="About">
      <img src="./public/Component 43.png" className="yesw-1/3 yesh-1/3" />
      <div className="yesflex yesflex-col yesgap-12 yesitems-start yesml-24">
        <p className="yestext-5xl yesfont-bold ">About us</p>
        <p className="yestext-lg yesfont-normal yestext-slate-500 yeslette">
          Our application ensures a secure connection between doctors and
          patients, simplifying communication and improving healthcare
          interactions.
        </p>
        <img className="yesw-32 yesh-20" src="./public/logo blue.svg"></img>
      </div>
      <img
        className="yesw-1/3 yesh-1/3 yesself-end"
        src="./public/component 44 (1).svg"
      />
    </div>
  );
}
