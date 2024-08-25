import React from 'react'

function Button({styles}) {
  return (
    <button
      type='button'
      className='py-4 px-6 mt-5 font-poppins font-bold text-[18px]
       bg-blue-gradient rounded-[10px] outline-none text-primary'>
      Get Started
    </button>
  )
}

export default Button