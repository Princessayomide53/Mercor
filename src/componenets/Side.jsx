import React from 'react';
import task from "../assets/task.png";
import category from "../assets/category.png";
import message2 from "../assets/message2.png";
import users from "../assets/users.png";
import settings from "../assets/settings.png";
import {MdOutlineAddBox} from "react-icons/md";
import lamp from "../assets/lamp.png";
import ellipse from "../assets/ellipse.png";


export default function Side() {
  return (
    <aside>
    <div className='border-r-2 border-[#DBDBDB] w-64 h-[100%]'>
      <div className='p-7 pt-7 space-y-5 border-b-2 border-[#DBDBDB] '>
      <div className='flex gap-5'>
      <img src={category} alt="" className="w-7 h-7"/>
        <p className='text-[#787486] text-lg'>Home</p>
      </div>
      <div className="flex gap-5"><img src={message2} alt="" className="w-7 h-7"/><p className='text-[#787486] text-lg'>Messages</p></div>
      <div className="flex gap-5"><img src={task} alt="" className="w-7 h-7"/><p className='text-[#787486] text-lg'>Tasks</p></div>
      <div className="flex gap-5"><img src={users} alt="" className="w-7 h-7"/><p className='text-[#787486] text-lg'>Members</p></div>
      <div className="flex gap-5"><img src={settings} alt="" className="w-7 h-7"/><p className='text-[#787486] text-lg'>Settings</p></div>
      </div>
      <div className='pt-5 p-5'>
      <div className='flex justify-between'><p className='uppercase text-[#787486] font-bold text-sm'>MY Projects</p>
      <MdOutlineAddBox className='text-end text-[#787486]'/>
      </div>

      <div className='space-y-5'>
      <div className='flex gap-5 mt-3'>
        <div className='w-2 h-2 bg-[#7AC555] rounded-full mt-2'></div>
        <p className='text-base hover:text-black font-semibold text-[#787486]'>Mobile App</p>
      </div>
      <div className='flex gap-5 mt-3'>
        <div className='w-2 h-2 bg-[#FFA500] rounded-full mt-2'></div>
        <p className='text-base hover:text-black font-semibold text-[#787486]'>Website Redesign</p>
      </div>
      <div className='flex gap-5 mt-3'>
        <div className='w-2 h-2 bg-[#E4CCFD] rounded-full mt-2'></div>
        <p className='text-base hover:text-black font-semibold text-[#787486]'>Design System</p>
      </div>
      <div className='flex gap-5 mt-3'>
        <div className='w-2 h-2 bg-[#76A5EA] rounded-full mt-2'></div>
        <p className='text-base hover:text-black font-semibold text-[#787486]'>Wireframes</p>
      </div>
      </div>
      </div>

      <div className='p-5 mt-3'>
        <div className='flex justify-center'>
        <div className='w-16 h-16 rounded-full bg-[#F5F5F5]'>
          <img src={ellipse} alt="" className=''/>
          <img src={lamp} alt="" className='p-5 -mt-16'/>
        </div>
        </div>
    <div className='w-52 bg-[#F5F5F5] h-56 rounded-xl -mt-8'>
      <p className='text-black pt-10 text-center font-semibold'>Thoughts Time</p>
      <p className='text-center text-[12px] text-[#787486] font-semibold pt-3'>We don’t have any notice for<br/> you, till then you can share<br /> your thoughts with your<br /> peers.</p>
   <div className='flex justify-center pt-5'><input type="text" className='w-44 pl-5 h-8 rounded-md focus:outline-blue-400' placeholder='Write a Message'/></div>
    </div>
      </div>
      </div>
    </aside>
  )
}
