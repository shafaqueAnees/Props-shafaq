import React from 'react';
import Image from 'next/image';
import arrow from '@/app/assets/arrow.png';
import img from '@/app/assets/Img.png';

const HeroSection = () => {
  return (
    <div className="flex flex-col  md:flex-row justify-between items-center bg-[#043873] w-full h-[auto] py-[140px] px-[220] md:px-20 lg:px-36">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="font-bold text-[#FFFFFF] text-[64px] md:text-5xl lg:text-6xl leading-[77.45px] tracking[-2%] ">
          Get More Done with Whitepace
        </h2>
        <p className="text-[#FFFFFF] text-[18px] md:text-lg mt-4 leading-[30px] tracking-[-2%]">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks.
        </p>
        <button className="flex items-center justify-center text-[18px] bg-[#4F9CF9] text-[#FFFFFF] font-medium text-sm md:text-base py-3 px-6 rounded-lg mt-8">
          Try Whitepace Free
          <Image src={arrow} width={15} height={15} alt="arrow" className="ml-2" />
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src={img}
          width={824}
          height={549}
          alt="img"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
