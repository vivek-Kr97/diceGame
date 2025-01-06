import React from 'react'

export default function Score({score}) {
  return (
    <div className='
    lg:max-w-[135px] max-w-[110px]
    flex flex-col
    align-center 
    text-center
   
    
    '>
         <h1 className='lg:text-[100px] text-[60px]
          font-[500]'> {score}</h1>
        <p className='lg:text-[24px] text-[18px] pb-12'>Total  Score</p>
    </div>
  )
}


