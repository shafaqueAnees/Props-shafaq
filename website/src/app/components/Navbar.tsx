import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";


const Navbar = () => {
  return (
    <div>
      <div className="bg-[rgb(4,56,115)] w-full h-[92px] py-4 px-[220px] flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="logo" width={191} height={34} />
        </div>

        {/* Navigation */}
        <div className="w-[737.5px] h-[60px]">
          <div className="w-[549px] h-[23px]">
            <ul className="text-[18px] font-semibold leading-[23px] flex justify-between text-white">
              <li>Products</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-[126px] h-[40px] bg-[#FFE492] text-[18px] font-medium text-gray-900 rounded-md hover:bg-yellow-500 transition-all">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
