import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../config/axiosConfig.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("/auth/signup", values)
        .then((res) => {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          toast.success("Account created successfully");
          // wait for 2 seconds before redirecting
          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="yesflex yesjustify-between">
        <div className="yesbg-docblue yesh-lvh yesw-[100rem] yesflex yesflex-col  ">
          <p className="yestext-white yestext-4xl yesfont-bold yesw-40 yesfontbold yesml-20 yesmt-20">
            Getting
          </p>
          <p className="yestext-white yestext-4xl yesfont-bold yesw-60 yesfontbold yesml-20">
            Started With MeDz
          </p>
          <img
            className="yesh-[33.4rem] yesmt-1 yesw-[30rem]"
            src="/Patient.svg"
            alt=""
          />
        </div>
        <div className="yesflex yesjustify-end">
          <Card className="yesh-lvh yesw-[60rem] yesrounded-lg">
            <CardHeader className="yesml-[45rem] yesw-40">
              <DropdownMenu>
                <DropdownMenuTrigger className="yesfont-semibold">
                  English (UK){" "}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem> French (FR)</DropdownMenuItem>
                  <DropdownMenuItem>Arabi(AR)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardHeader>
              <div className="yesflex yespb-5">
                <CardTitle className="yesml-40 yestext-3xl yesfont-bold yesflex">
                  Create account
                  <ToggleGroup
                    className="yesml-60 yesw-40 yesh-14 yesbg-slate-300 yesrounded-md"
                    type="single"
                  >
                    <ToggleGroupItem value="Patient" aria-label="Toggle bold">
                      <p className="h-4 w-4">Patient</p>
                    </ToggleGroupItem>

                    <Link to="/signupdoc">
                      <ToggleGroupItem value="Doctor">
                        <p className="h-4 w-4">Doctor</p>
                      </ToggleGroupItem>
                    </Link>
                  </ToggleGroup>
                </CardTitle>
              </div>
              <CardTitle className="yesw-[40rem] yesh-14 yesflex yesjustify-between yesml-32">
                <button className="yesflex yesjustify-around yesw-[15rem] yestext-lg yesmt-3 yesborder yesrounded-lg">
                  <img className="yesml-2 " src="/google.svg"></img>
                  <p className="yesmt-2">Signup with Google</p>
                </button>
                <button className="yesflex yesjustify-around yesw-[15rem] yestext-lg yesmt-3 yesborder yesrounded-lg">
                  <img className=" yesmt-2 " src="/Facebook.svg"></img>
                  <p className="yesmt-2">Signup with Facebook</p>
                </button>
              </CardTitle>
              <CardDescription className="yesw-[57rem] yesmt-10 yesflex yesjustify-center yestext-xl yespt-10">
                -OR-
              </CardDescription>
            </CardHeader>
            <CardContent className="yesw-[40rem] yesml-40 yesh-[16rem] yesflex yesflex-col yesjustify-between">
              <form onSubmit={formik.handleSubmit}>
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div>{formik.errors.fullName}</div>
                ) : null}

                <Input
                  className={`${
                    formik.touched.Nom && formik.errors.Nom && "yesborder-red-500"
                  }`}
                  type="text"
                  placeholder="Full name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                <Input
                  className={`${
                    formik.touched.email &&
                    formik.errors.email &&
                    "yesborder-red-500"
                  }`}
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <Input
                  className={`${
                    formik.touched.password &&
                    formik.errors.password &&
                    "yesborder-red-500"
                  }`}
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <Input
                  className={`${
                    formik.touched.phoneNumber &&
                    formik.errors.phoneNumber &&
                    "yesborder-red-500"
                  }`}
                  type="text"
                  placeholder="Phone number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
              </form>
            </CardContent>
            <CardFooter className="yesflex yesjustify-center yesw-[60rem] yespt-10">
              <button
                type="submit"
              className="yesrounded-lg yesw-[37rem] yesh-10 yesborder yesbg-docblue yestext-white yesfont-semibold yestext-xl">
                Create account
              </button>
            </CardFooter>
            <h1 className="yesml-80">
              Already have an account?
              <Link to="/login">
                <button className="yestext-docblue yesml-3">Log in</button>
              </Link>
            </h1>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Signup;
