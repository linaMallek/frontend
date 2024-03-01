import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Home() {
  return (
    <>
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

      <div className="yesflex yesml-20">
        <div className="yesh-[35rem]   yesw-[35rem]">
          <h1 className="yesfont-bold yestext-black yesmt-44 yestext-6xl yesml-10">
            A Great Place To
          </h1>
          <h1 className="yesfont-bold yestext-black yestext-6xl yesml-10">
            Receive Care
          </h1>
          <p className="yesml-10 yesmt-16 yestext-2xl yestext-slate-400">
            Take control of your health journey{" "}
          </p>{" "}
          <p className="yesml-10  yestext-2xl yestext-slate-400 ">
            all in one place.
          </p>
          <button className=" yesm-10 yesrounded-3xl yesfont-semibold yesbg-docblue yestext-white yespy-4 yespx-6 ">
            Learn More
          </button>
        </div>
        <div>
          <img
            className="yesh-16 yesml-96"
            src="./public/Place Marker.svg"
          ></img>
          <img
            className="yesh-[40rem] yesw-[40rem] yesml-60"
            src="./public/Group 8885.svg"
          ></img>
        </div>
      </div>
      <div className="yesbg-white yesh-lvh yesflex yesjustify-between">
        <img
          src="./public/Component 43.png"
          className=" yesmt-10 yesh-[40rem]"
        ></img>
        <div className="yesflex yesw-96">
          <p className="yestext-5xl yesfont-bold yesw-96 yesml-[-35rem] yesmt-14">
            About us
          </p>
          <p className="yestext-xl yesfont-bold yesw-80 yesml-[-20rem] yesmt-40 yestext-slate-400">
            Our app connects doctors and patients securely, streamlining
            interactions to enhance healthcare experiences for all
          </p>
          <img
            className="yesh-24 yesw-52 yesmt-80 yesml-[-20rem] "
            src="./public/logo.svg"
          ></img>
          <img
            className="yesmt-72 yesml-80"
            src="./public/component 44 (1).svg"
          ></img>
        </div>
      </div>
      <div className="yesbg-white yesh-dvh">
        <h1 className="yestext-6xl yesfont-semibold yestext-center  yestext-black">
          Services
        </h1>
        <div className="yesflex  yesjustify-around yesmt-16">
          <Card className="yesw-80 yesh-72 yesshadow-xl ">
            <CardHeader>
              <CardTitle className="yesflex yesjustify-center">
                {" "}
                <img className="yesh-14" src="./public/Chat.svg"></img>
              </CardTitle>
              <CardDescription className=" yestext-lg yesml-5 yestext-center yesw-56 yestextblack yesfont-bold">
                <p className="yestext-black">
                  Connect with your doctor instantly!
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="yesopacity-70 yestext-center yesmt-[-1rem]">
                Receive personalized advice and answers to your questions via
                our secure messaging platform.
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
                <img className="yesh-14" src="./public/Message Bot.svg"></img>
              </CardTitle>
              <CardDescription className="yestext-lg yesm-10 yesw-56 yestext-black yesfont-bold">
                <p className="yestext-black yesml-6">Full access to Ai Chat</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="yesopacity-70 yesmt-[-0.5rem] yestext-center">
                Receive personalized advice and answers to your questions via
                our secure messaging platform.
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
                  src="./public/Heart with Pulse.svg"
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
                <img className="yesh-14" src="./public/Today.svg"></img>
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
                <img className="yesh-16" src="./public/place marker.svg"></img>
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
    </>
  );
}
