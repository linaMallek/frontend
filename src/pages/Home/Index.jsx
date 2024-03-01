import Navbar from "@/components/ui/Navbar";
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Map from "./Map";
import Footer from "./Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Map/>
      <Footer/>
    </>
  );
}
