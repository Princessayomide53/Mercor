import React from 'react';
import logo from "../assets/logo.png";
import{RxDoubleArrowLeft} from "react-icons/rx"
import calendar from "../assets/calendar.png";
import message from "../assets/message.png";
import notification from "../assets/notification.png";
import image from "../assets/image.png";
import {RiArrowDownSLine} from "react-icons/ri"
import {CiSearch} from "react-icons/ci"

export default function Navbar() {
  return (
    <nav>
        <div className='bg-white border-b-2  h-16 border-[#DBDBDB]'>
            <div className='flex mac:gap-8 xl:gap-5'>
        <div className='flex mac:gap-5 p-4 mac:w-64 xl:w-64 gap-5 border-r-2'>
            <img src={logo} alt="" className='w-7 h-7'/>
            <h1 className='font-bold mac:text-[20px]'>Project M.</h1>
           < RxDoubleArrowLeft className='mt-2 mac:ml-7'/>
        </div>
        <div className='mac:pr-5 relative'>
            <div className='absolute top-6 left-5'>
            <CiSearch size={20}/>
            </div>
            <input type="text" className='bg-[#F5F5F5] mac:w-80 h-8 mt-4 focus:outline-blue-400 pl-16 rounded-lg' placeholder='Search for anything....'/></div>
           
       <div className='flex gap-4 pt-4 mac:ml-[410px]'>
        <img src={calendar} alt=""  className='w-7 h-7'/>
       <img src={message} alt="" className='w-7 h-7'/>
       <img src={notification} alt="" className='w-7 h-7'/></div>
       <div>
        <p className='pt-3 text-sm'>Amina Agraval</p>
        <p className='text-xs text-[#787486] text-center'>U.p, India</p>
       </div>
       <div className='pt-3'><img src={image} alt="" className='rounded-full'/></div>
       <RiArrowDownSLine className='mt-6' size={20}/>
        </div>
        </div>
    </nav>
  )
}
