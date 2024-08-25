import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () =>
(
  <div className={`${styles.flexCenter} rounded-full w-[140px] h-[140px] bg-blue-gradient p-[2] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[99%] h-[99%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row}`}>
        <p className='font-poppins font-medium text-[18px] leading-[23.4px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className='w-[32px] h-[32px] contain-object' />

      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23.4px] mr-2'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>

  </div>
)


export default GetStarted