import React, { useState } from 'react'
import {BsFillMoonStarsFill} from "react-icons/bs"

const Header = ({toggleTheme}) => {
  

  return (
    <div className='max-w-[1640px] w-full p-12 mx-auto flex justify-between mb-12'>
        <h1 className='text-xl lg:text-2xl dark:text-white font-bold italic'>Developedbyxure</h1>
        <div>
            <BsFillMoonStarsFill onClick={()=> toggleTheme()} size={30} className="dark:text-white cursor-pointer" />
        </div>
    </div>
  )
}

export default Header