import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import cv from "./Brendan.pdf"

const Banner = () => {
  return (
    <div className='max-w-[1640px] px-8 py-6 mx-auto h-full w-full' id='About'>
      <div className='md:w-[80%] lg:w-[60%] dark:text-white mx-auto text-center '>
        <h1 className='cursor-pointer text-4xl lg:text-6xl my-4'>Brendan Obilo</h1>
        <h1 className='cursor-pointer text-2xl lg:text-4xl my-4'>Fullstack Developer</h1>
        <p className='cursor-pointer text-xl leading-[2.5rem]  lg:text-2xl mt-8 mb-12 lg:leading-[2.5rem]'>A Professional fullstack web developer with experience in design, developement, analysis, testing and deployment of projects. Skilled in the use of React.js and Node.js. Dedicated to building and optimizing user-focused websites and applications.</p>
        <a className='cursor-pointer text-xl lg:text-2xl rounded-full dark:text-white font-bold bg-teal-400 py-4 px-6' href={cv} download >Download CV</a>
        <span className='flex my-12 justify-center'>
          <a href='https://linkedin.com/in/brendan-obilo-xure' target='_blank'><BsLinkedin size={35} className="cursor-pointer m-7 bg-teal-600 dark:bg-black dark:text-teal-600" /></a>
          <a href='https://twitter.com/brendanxure' target='_blank'><AiFillTwitterCircle size={40} className="cursor-pointer m-7 text-teal-600 bg-black rounded-full dark:text-black dark:bg-teal-600" /></a>
          <a href='https://github.com/brendanxure' target='_blank'><BsGithub size={35} className="cursor-pointer m-7 text-teal-600 bg-black rounded-full dark:text-black dark:bg-teal-600" /> </a>
        </span>
        <img className='w-[500px] h-[500px] my-12 mx-auto object-fill rounded-full bg-gradient-to-l from-teal-600 via-black to-teal-600 to-teal-600' src="https://raw.githubusercontent.com/developedbyed/react-portofolio-with-tailwind/main/public/dev-ed-wave.png" alt='' />
      </div>
    </div>
  )
}

export default Banner