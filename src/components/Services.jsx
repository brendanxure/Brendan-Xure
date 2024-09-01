import React, { useState } from 'react'
import { services } from '../data/Data'

const Services = () => {
    const [details, setDetails] = useState(services)
    console.log(details)
    return (
        <div className='max-w-[1640px] p-8 mx-auto' id='Services'>
            <h1 className='text-center dark:text-white text-4xl font-bold lg:text-5xl my-8'>Services I Offer</h1>
            <div className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-xl text-center dark:text-white'>
                <p>Since the beginning of my journey as a computer programmer, I've done remote work for agencies and collaborated with talented software developers of different stack to create digital products for both business and consumer use.</p>
                <p className='my-4'>I offer a wide range of services, including designing user interface, web development maintenance, web automated testing, web hosting and web programming.</p>
            </div>
            <div className='w-[100%] md:w-[80%] lg:w-[70%] flex mx-auto text-center dark:text-white font-bold justify-between flex-wrap gap-8'>
                {details.map(item =>
                    <div key={item.id} className="p-8 shadow-xl mx-auto flex flex-col items-center flex-wrap w-[200px] justify-between dark:bg-teal-600 rounded-xl dark:shadow-blue-400 dark:shadow-lg">
                        <img src={`${item.image}`} className="object-contain h-[70px] w-[70px]" />
                        <p>{item.title}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services