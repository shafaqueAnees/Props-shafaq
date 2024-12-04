import React from 'react'
import arrow from '@/app/assets/arrow.png'
import Image from 'next/image'

const Work = () => {
  return (
    <div className='flex justify-center items-center w-full h-[574px]  py-[140px] px-[220px] bg-[#043873]'>
    <div className='flex flex-col justify-center items-center w-[1481px] h-[294px] gap-[30px] text-center'>
      <h1 className='w-[1064px] h-[87px] text-[#FFFFFF] font-[700] text-[70px] tracking-[-2%] leading-[87.14px]'>
        Your work, everywhere you are
      </h1>
      <p className='w-[1064px] text-[18px] font-[400] tracking-[-2%] leading-[30px] text-[#FFFFFF]'>
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
      </p>
      <button className='flex justify-center items-center w-[201px] h-[63px] bg-[#4F9CF9] text-[#FFFFFF] rounded-lg mt-10 border-[1px] px-[40px] py-[20px]'>
        Try it now
        <Image
          src={arrow}
          width={10}
          height={10}
          alt='work'
        />
      </button>
    </div>
  </div>
  
  
  )
}

export default Work
