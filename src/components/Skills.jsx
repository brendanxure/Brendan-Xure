import React, { useState } from 'react'
import { backend, frontend } from '../data/Data'

const Skills = () => {
    const [front, setFront] = useState(frontend)
    const [back, setBack] = useState(backend)

  return (
    <div className='max-w-[1640px] p-8 w-full h-full mx-auto' id='Experience'>
        <h1 className='text-4xl font-bold text-center lg:text-5xl dark:text-teal-600 my-8'>Skills</h1>
        <div className='flex flex-col max-w-[90%] md:flex-row max-w-[60%] gap-8 w-full mx-auto justify-center justify-evenly'>
            <div className='hover:scale-110 duration-300 cursor-pointer flex flex-col my-10 bg-teal-600 w-full shadow-xl shadow-black p-6 max-w-[500px] rounded-tl-2xl rounded-br-2xl'>
                <h1 className='text-center text-3xl font-bold'>Frontend</h1>
                <ul className='grid grid-cols-2 max-h-[50vh]'>
                    {front.map((item) => 
                    <li key={item.id} className="px-4 py-4 text-xl grid mx-auto">
                        <p>{item.name}</p>
                        <p>{item.stage}</p>
                    </li>
                    )}
                </ul>
            </div>
            <div className='hover:scale-110 duration-300 cursor-pointer flex flex-col my-6 md:my-10 bg-teal-600 w-full shadow-xl shadow-black p-6 max-w-[500px] rounded-tl-2xl rounded-br-2xl'>
                <h1 className='text-center text-3xl font-bold'>Backend</h1>
                <ul className='grid grid-cols-2 max-h-[50vh]'>
                    {back.map(item =>
                    <li key={item.id} className="px-4 py-4 text-xl grid mx-auto">
                        <p>{item.name}</p>
                        <p>{item.stage}</p>
                    </li>    
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills