import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/logo.png'
import Group from'@/app/assets/Group.png'

const FigmaNavbar = () => {
  return (
    <div>
      <div className='bg-[rgb(4,56,115)] w-full h-[92px] py-4 px-[220px] flex justify-between items-center ml-[1px]  '>
        <div className='flex justify-between  gap-2 mt-[2.55px] mr-36 '>
          <Image
            src={Group}
            width={37}
            height={26.46}
            alt='group'
            className=''
          />
          <Image
            src={logo}
            width={191}
            height={34}
            alt='logo'
            className=''
          />
          
        </div>
        <div className='w-[737.5px] h-[60px] flex justify-between items-center'>
          <div className='w-[549px] h-23px '>
            <ul className='text-[18px] font-semibold leading-[23px] flex justify-between text-white '>
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='ml-28'>
            <button className='py-4 px-10 rounded-lg bg-[#FFE492] '>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaNavbar
