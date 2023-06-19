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
            <div className='flex mac:gap-8 '>
        <div className='flex mac:gap-5 p-4 mac:w-64 lg:w-[255px] md:w-64 gap-5 border-r-2 se:w-[208px] galaxy:w-[213px] app5:w-[210px] fold:w-[320px]'>
            <img src={logo} alt="" className='w-7 h-7'/>
            <h1 className='font-bold mac:text-[20px]'>Project M.</h1>
           < RxDoubleArrowLeft className='mt-2 mac:ml-7 lg:ml-5'/>
        </div>
        <div className='mac:pr-5 relative lg:ml-16 md:ml-5 hidden sm:block duo:block duo:ml-5'>
            <div className='absolute top-6 left-5 md:left-3 duo:left-2'>
            <CiSearch size={20}/>
            </div>
            <input type="text" className='bg-[#F5F5F5] mac:w-80 lg:w-80 duo:pl-10 md:w-48 h-8 duo:w-32 duo:text-xs mt-4 focus:outline-blue-400 pl-16 md:pl-10 md:text-sm rounded-lg' placeholder='Search for anything....'/></div>
       <div className='flex gap-4'>    
       <div className='flex gap-4 pt-4 md:mt-1 mac:ml-[410px] lg:ml-24 xl:ml-80 md:ml-5 mini:ml-12 pro:ml-40'>
        <img src={calendar} alt=""  className='w-7 h-7 md:w-5 md:h-5 hidden sm:block'/>
       <img src={message} alt="" className='w-7 h-7 md:w-5 md:h-5 hidden sm:block'/>
       <img src={notification} alt="" className='w-7 h-7 md:w-5 md:h-5 hidden sm:block'/></div>
       <div>
        <p className='pt-3 lg:text-sm md:text-xs text-[8px] duo:mt-1'>Amina Agraval</p>
        <p className='lg:text-xs md:text-[10px] text-[#787486] text-center text-[7px]'>U.p, India</p>
       </div>
       <div className='pt-3'><img src={image} alt="" className='rounded-full fold:mt-2 mt-0 se:-mt-1'/></div>
       <RiArrowDownSLine className='mt-6' size={20}/>
        </div>
        </div>
        </div>
    </nav>
  )
}
