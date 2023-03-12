import React, { useState } from 'react'
import { Portfolios } from '../data/Data'

const Portfolio = () => {
    const [sites, setSites] = useState(Portfolios)

  return (
    <div className='max-w-[1640px] mx-auto w-full p-8'>
        <h1 className='text-center text-4xl lg:text-5xl font-bold mt-12 mb-6 dark:text-white'>Portfolio</h1>
        <p className='text-center text-xl dark:text-white'>Here are some of my static frontend projects, you can check my <a className="text-blue-400" href='#'>Github reposotires </a>to get fullstack projects and more.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3  w-[96%] mx-auto mt-6 lg:w-[85%]'>
            {sites.map(item => 
            <div className='px-8 pb-6 rounded-xl bg-teal-600 mx-4 my-6 cursor-pointer'>
                <img className='w-full mt-8 object-contain hover:scale-105 duration-300' src={`${item.picture}`} />
                <h1 className='text-xl py-4 font-bold'>{item.body}</h1>
                <a href={item.link} target="_blank" className='text-xl border-2 bg-black text-white border-black px-4 py-1.5 rounded-full'>Live Demo</a>
            </div>    
            )}
        </div>
    </div>
  )
}

export default Portfolio