"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  { id: 1, 
    title: "Craving Something Delicious?",
  image:"/Rectangle 44.png"
  },
  { id: 2,
     title: "Feeling Hungry?",
      image:"/Group 8.png"
    },
  { id: 3,
     title: "Planning a Special Date?",
      image:"/Group 8 (2).png"
    },
];




const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => 
       setCurrentSlide( prev => data.length -1 === prev ? 0 : prev + 1)
    , 4000)
    return () => clearInterval(interval);
  } ,
    []);


  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-orange-50'>
     <div className='flex-1 flex items-center justify-center flex-col gap-8 text-orange-600 font-bold '>
      <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
        {data[currentSlide].title}
        </h1> 
      <button className='bg-orange-600 text-white py-4 px-8'>Order Now</button>

     </div>

     <div className='w-full relative flex-1'>
        <Image src={data[currentSlide].image} alt=""  fill className='object-cover'/>
     </div>
    </div>
  )
}

export default Slider


//37