"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2025-12-31");

const CountDown = () => {
  return (
    <div>
      <Countdown date={endingDate}  className='text-orange-600  font-bold text-5xl'/>
    </div>
  )
}

export default CountDown
