import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
    const now =  new Date();
    return (
      <div className='max-w-[1640px] p-8 mx-auto w-full dark:text-white' id='Footer'>
          <div className='text-center my-6 text-3xl font-bold'>
              <h1>Brendan Xure</h1>           
          </div>
          <div className='flex flex-wrap gap-8 lg:w-[80%] mx-auto justify-between text-xl my-8 w-[90%]'>
            <h3><a href='#Services'>Services</a></h3>
            <h3><a href='#Experience'>Experience</a></h3>
            <h3><a href='#Portfolio'>Portfolio</a></h3>
            <h3><a href='#About'>About </a></h3>
            <h3><a href='#Contact'>Contact </a></h3>
            {/* <h3><a href='#Testimonial'>Testimonial</a></h3> */}
          </div>
          {/*<div className='flex justify-center gap-8 w-full my-6'>*/}
          {/*  <a href='https://web.facebook.com/bukkyobilo/' target='_blank' rel="noreferrer"><GrFacebookOption size={30} /></a>*/}
          {/*  <a href='https://instagram.com/brendanxure' target='_blank' rel="noreferrer"><BsInstagram size={30} /></a>*/}
          {/*  <a href='https://twitter.com/brendanxure/' target='_blank' rel="noreferrer"><BsTwitter size={30} /></a>*/}
          {/*</div>*/}
          <footer className='text-center'>Copyright &copy;{now.getFullYear()} </footer>
      </div>
    )
}

export default Footer