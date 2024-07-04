import React, { Component, useEffect } from 'react'
import logo from "../assets/images/icon-3.png"
import LogoName from "../assets/images/Nexcent.png"
import {Button} from "@/components/ui/button"
import { CgMenuMotion } from "react-icons/cg";
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ToggleButton from './toggleButton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import '../index.css'
export default function Navbar(){
  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("body").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  
    return (
      
      <nav className='h-16  flex flex-row justify-center items-center w-full gap-16 fixed transition duration-700 ease-in-out z-30 bg-opacity-70'>
        <div className='flex flex-row items-center justify-center w-full min-w-[200px]'>
        <img src={logo} alt="" className='min-w-min'/>
        <img src={LogoName} alt="" className='min-w-min'/>
        </div>
        <div className='hidden space-x-5 md:flex items-center justify-center w-full'>
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Feature</a>
            <a href="#">Product</a>
            <a href="#">Testimonial</a>
            <a href="#">FAQ</a>
        </div>
        <div className='hidden space-x-4 md:flex items-center justify-center w-full'>
            <Button className=" bg-white text-[#4CAF4F]">Log in</Button>
            <Button className='bg-[#4CAF4F] text-white'>Sign Up</Button>
        </div>
        <div className="hidden md:flex">
        <ToggleButton onClick={toggleDarkMode} />
        </div>
        <div className='md:hidden ml-auto px-16'>
        <Sheet>
  <SheetTrigger>
    <CgMenuMotion/>
  </SheetTrigger>
  <SheetContent>
  <div className='flex flex-col items-center justify-center w-full gap-5'>
            <a href="" className='text-[#4CAF4F]'></a>
            <a href="#" className='text-[#4CAF4F]'>Home</a>
            <a href="#" className='text-[#4CAF4F]'>Service</a>
            <a href="#" className='text-[#4CAF4F]'>Feature</a>
            <a href="#" className='text-[#4CAF4F]'>Product</a>
            <a href="#" className='text-[#4CAF4F]'>Testimonial</a>
            <a href="#" className='text-[#4CAF4F]'>FAQ</a>
            <Button className=" bg-white text-[#4CAF4F]">Log in</Button>
            <Button className='bg-[#4CAF4F] text-white'>Sign Up</Button>
            <ToggleButton onClick={toggleDarkMode} />
        </div>
  </SheetContent>
</Sheet>
        </div>
      </nav>
    )
  }

