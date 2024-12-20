import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-16 bg-black text-white pt-5 font-thin hover:bg-gray-900 duration-300 '>
            <nav>
                <ul className='flex justify-around'>
                    <li className='hover:bg-gray-500 duration-300 rounded-xl p-1' >
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:bg-gray-500 duration-300 rounded-xl p-1' >
                        <Link to="/Meal">Meal</Link>
                    </li>
                    <li className='hover:bg-gray-500 duration-300 rounded-xl p-1'>
                        <Link to="/Cocktail">Cocktail</Link>
                    </li>
                    <li className='hover:bg-gray-500 duration-300 rounded-xl p-1'>
                        <Link to="/Potter">Potter</Link>
                    </li>
                    <li className='hover:bg-gray-500 duration-300 rounded-xl p-1'>
                        <Link to="/Bank">Bank</Link>
                    </li>
                  
                </ul>
            </nav>
    </div>
  )
}

export default Navbar
