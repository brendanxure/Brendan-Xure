import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandMessenger} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pdy85un', 'template_rk7wsqb', form.current, 'DfUa95LXgAOAfiT8l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
    }

  return (
    <div className='max-w-[1640px] p-8 mx-auto w-[100%]' >
        <h1 className='text-4xl font-bold text-center my-2 py-6 dark:text-white'>Contact Me</h1>
    <div className='xl:w-[90%] mx-auto flex flex-col lg:flex-row gap-8 w-[100%]'>
        <div className='grid md:grid-cols-2 md:grid-rows-2 lg:w-[50%]'>
            <article className='bg-teal-600 m-2 md:col-span-1 rounded-xl p-2 flex flex-col items-center leading-10 text-xl'>
                <BsWhatsapp size={30} />
                <h3>WhatsApp</h3>
                <p>+234 817 266 5800</p>
                <a className='bg-black text-white px-6 text-xl rounded-full my-3 py-1' href='https://wa.me/+2348172665800?text=Hi' target='_blank' rel="noreferrer">Send a message</a>
            </article>
            <article className='bg-teal-600 m-2 md:col-span-1 rounded-xl p-2 flex flex-col items-center leading-10 text-xl'>
                <TbBrandMessenger size={30}/>
                <h3>Messenger</h3>
                <p>Brendan Xure</p>
                <a className='bg-black text-white px-6 text-xl rounded-full my-3 py-1' href='https://m.me/bukkyobilo' target='_blank' rel='noreferrer'>Send a message</a>
            </article>
            <article className='bg-teal-600 m-2 md:col-span-2 rounded-xl p-2 flex flex-col items-center leading-10 text-xl'>
                <MdOutlineEmail size={30}/>
                <h3>Email</h3>
                <p>Brendanxure@outlook.com</p>
                <a className='bg-black text-white px-6 text-xl rounded-full my-3 py-1' href='mailto:brendanxure@outlook.com' rel='noreferrer' target='_blank'>Send Message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col lg:w-[50%] px-8 items-center'>
            <input type='text' required name='name' placeholder='Please input your name' className=' border-2 p-3 w-full  m-3 italic' />
            <input type='text' required name='email' placeholder='Enter Email.....' className=' border-2 p-3 w-full  m-3 italic' />
            <textarea required name='message' placeholder='Enter message here...' className='w-full border-2 m-3 p-3 resize-none h-[30vh]'/>
            <button className='bg-black dark:bg-teal-600 text-white px-6 py-3'>Send Message</button>
        </form>
    </div>
    </div>
  )
}

export default Contact