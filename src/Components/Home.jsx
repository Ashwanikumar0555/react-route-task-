import React from 'react'
import food from '../assets/food.png'

const Home = () => {
  return (

    <div className=''>
        <h1 className="font-bold text-pink flex justify-items-center"></h1>
    <img className="w-[100%] h-85    text-white " src={food} alt="" />
    </div>
  )
}

export default Home;
