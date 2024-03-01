import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  return (
    <div className="yesbg-white yesh-dvh" id="Services">
      <h1 className="yestext-6xl yesfont-semibold yestext-center  yestext-black">
        Services
      </h1>
      <div className="yesflex  yesjustify-around yesmt-16">
        <Card className="yesw-80 yesh-72 yesshadow-xl ">
          <CardHeader>
            <CardTitle className="yesflex yesjustify-center">
              {" "}
              <img className="yesh-14" src="/Chat.svg"></img>
            </CardTitle>
            <CardDescription className=" yestext-lg yesml-5 yestext-center yesw-56 yestextblack yesfont-bold">
              <p className="yestext-black">
                Connect with your doctor instantly!
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="yesopacity-70 yestext-center yesmt-[-1rem]">
              Receive personalized advice and answers to your questions via our
              secure messaging platform.
            </p>
          </CardContent>
          <CardFooter className="yesflex yesjustify-center">
            <button className=" yesmt-[-1rem] yesw-40 yesh-10 yesrounded-2xl yesfont-semibold yesbg-docblue yestext-white">
              Check now
            </button>
          </CardFooter>
        </Card>

        <Card className="yesw-80 yesh-72 yesmb-16 yesshadow-xl">
          <CardHeader>
            <CardTitle className="yesflex yesjustify-center">
              {" "}
              <img className="yesh-14" src="/Message Bot.svg"></img>
            </CardTitle>
            <CardDescription className="yestext-lg yesm-10 yesw-56 yestext-black yesfont-bold">
              <p className="yestext-black yesml-6">Full access to Ai Chat</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="yesopacity-70 yesmt-[-0.5rem] yestext-center">
              Receive personalized advice and answers to your questions via our
              secure messaging platform.
            </p>
          </CardContent>
          <CardFooter className="yesflex yesjustify-center">
            <button className=" yesw-40 yesh-10 yesrounded-2xl yesfont-semibold yesbg-docblue yestext-white">
              Chat now
            </button>
          </CardFooter>
        </Card>
        <Card className="yesw-80 yesh-72 yesshadow-xl">
          <CardHeader>
            <CardTitle className="yesflex yesjustify-center">
              {" "}
              <img
                className="yesh-14"
                src="/Heart with Pulse.svg"
              ></img>
            </CardTitle>
            <CardDescription className="yestext-lg yesml-16 yesw-56 yestext-black yesfont-bold">
              <p className="yestext-black">Test your well being!</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="yesopacity-70 yesmt-[-0.5rem] yestext-center">
              Check your blood pressure and glucose levels for insights into
              your overall well-being.
            </p>
          </CardContent>
          <CardFooter className="yesflex yesjustify-center">
            <button className=" yesw-40 yesh-10 yesrounded-2xl yesfont-semibold yesbg-docblue yestext-white">
              Check now
            </button>
          </CardFooter>
        </Card>
      </div>
      <div className="yesflex yesw-[70rem] yesjustify-around yesml-60 yesmt-[-3rem]">
        <Card className="yesw-80 yesh-72 yesshadow-xl">
          <CardHeader>
            <CardTitle className="yesflex yesjustify-center">
              {" "}
              <img className="yesh-14" src="/Today.svg"></img>
            </CardTitle>
            <CardDescription className="yestext-lg yesflex yesml-14 yesjustify-center yesw-40 yestext-black yesfont-bold">
              <p className="yestext-black">
                Book your appointment quickly and easily!
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="yesopacity-70 yesmt-[-0.5rem] yestext-center">
              Find the perfect time slot with our convenient scheduling tool.
            </p>
          </CardContent>
          <CardFooter className="yesflex yesjustify-center">
            <button className=" yesw-40 yesh-10 yesrounded-3xl yesfont-semibold yesbg-docblue yestext-white">
              Check now
            </button>
          </CardFooter>
        </Card>
        <Card className="yesw-80 yesh-72 yesshadow-xl">
          <CardHeader>
            <CardTitle className="yesflex yesjustify-center">
              {" "}
              <img className="yesh-16" src="/place marker.svg"></img>
            </CardTitle>
            <CardDescription className="yestext-lg yesm-10 yesw-56 yestext-black yesfont-bold">
              <p className="yestext-black">Find the right doctor for you!</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="yesopacity-70 yesmt-1 yestext-center">
              {" "}
              AI-powered search to discover qualified professionals in your
              area.
            </p>
          </CardContent>
          <CardFooter className="yesflex yesjustify-center">
            <button className=" yesw-40 yesh-10 yesrounded-3xl yesfont-semibold yesbg-docblue yestext-white">
              Check the map
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
