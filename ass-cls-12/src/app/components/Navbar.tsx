import React from 'react'
import Image from 'next/image' 
import Logo from "../app/assets/Landing page V1/desktop/Nav-menu.png"
import menu from "../app/assets/Nav-menu.png"
const Navbar = () => {
  return (
    <div>
        <div className='bg-[rgb(4,56,115)] w-[1920] h-[92px] py-4 px-[220px] flex justify-between items-center ml-[1px] '></div>
<div>
    <Image src={Logo} alt='logo' width={191}
            height={34}/>
    </div>
    <div className='w-[737.5px] h-[60px]'>
<div className='w-[549] h-[23]'>
  {/* <ul>
  <li>Products</li>
  <li>Solution</li>
  <li>Resources</li>
  <li>pricing</li>
  </ul> */}
  <Image src={menu} alt="menu"/>
</div>
    </div>
    </div>
  )
}
export default Navbar