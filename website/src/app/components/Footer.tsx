import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[rgb(4,56,115)] text-white w-full h-auto px-[220px] pt-[140px] pb-[32px]">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Left Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-y-16 gap-[15px]">
    <div className="flex items-center gap-2 mb-4  ">
          <Image src={Logo} alt="logo" width={191} height={34} />
        
          <p className="text-[18px] leading-[30px]">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p></div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-3 w-[295] h-[127]">
          {/* Column 1 */}
          <div>
            <h3 className="text-[18px] font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Overview</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Pricing</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Customer stories</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Start today</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[18px] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Blog</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Guides & tutorials</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Help center</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Media kit</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[18px] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">About us</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Careers</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Terms & privacy</li>
              <li className="opacity-80 hover:opacity-100 transition-all cursor-pointer">Security</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-[32px] flex justify-center items-center text-[14px] opacity-80">
        <div>©2021 Whitepace LLC.</div>
        <div>
          <ul className="flex space-x-4">
            <li className="hover:opacity-100 cursor-pointer">English</li>
            <li className="hover:opacity-100 cursor-pointer">Status</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
