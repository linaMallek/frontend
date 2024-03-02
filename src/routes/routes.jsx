import React from "react";
import Index from "@/pages/Home/Index.jsx";
import { Routes, Route } from "react-router-dom";
import Signup from "@/pages/Signup";
import Signupdoctor from "@/pages/Signupdoctor";
import Login from "@/pages/Login";
import Doctormain from "@/pages/Doctormain";
import ChatBot from "@/components/features/ChatBot.jsx";
import Patient from "@/pages/Patient";
import HeartPrediction from "@/components/features/HeartPrediction.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signupdoc" element={<Signupdoctor />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/doctormain" element={<Doctormain />}></Route>
      <Route path="/chatbot" element={<ChatBot />}></Route>
      <Route path="/patient" element={<Patient />}></Route>
      <Route path="/heartPrediction" element={<HeartPrediction />}></Route>
    </Routes>
  );
};

export default Routers;
