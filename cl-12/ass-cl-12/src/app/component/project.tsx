import React from 'react';
import Image from 'next/image';
import arrow from '@/app/assets/arrow.png';
import img from '@/app/assets/Img.png';
import w from '@/app/assets/w.png';

const Project = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full h-[1588] px-[220px] py-[140px] gap-[100px] bg-[#F0F4F8]">
            {/* First Card */}
            <div className="flex flex-col sm:flex-row w-full items-center justify-between py-8 gap-8">
                {/* Left Section */}
                <div className="flex-1 max-w-[672px]">
                    <h2 className="font-[700] text-[#212529] text-[72px] leading-[87.14px] tracking-[-2%]">
                        Project Management
                    </h2>
                    <p className="font-[400] text-[18px] leading-[30px] text-[#212529] mt-4">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                    </p>
                    <button className="flex justify-center items-center w-[201px] h-[63px] bg-[#4F9CF9] text-[#FFFFFF] rounded-lg gap-[10px] mt-10 border-[1px] outline-[#FFFFFF] px-[40px] py-[20px]">
                        Get Started
                        <Image src={arrow} 
                        width={14} 
                        height={14} 
                        alt="arrow" />
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex-1 max-w-[748px]">
                    <Image src={img} 
                    width={748} 
                    height={547} 
                    alt="img" 
                    className="object-cover" />
                </div>
            </div>

            {/* Second Card */}
            <div className="flex flex-col sm:flex-row w-full items-center justify-between py-8 gap-8 " >
                {/* Left Section */}
                <div className="flex-1 max-w-[710px]">
                    <Image src={w} 
                    width={710} 
                    height={661}
                    alt="img" 
                    className="object-cover
                     text-[#A7CEFC]" />
                </div>

                {/* Right Section */}
                <div className="flex-1 max-w-[670px] px-8 py-6">
                    <h2 className="font-[700] text-[#212529] text-[72px] leading-[87.14px] tracking-[-2%]">
                        Work together
                    </h2>
                    <p className="font-[400] text-[18px] leading-[30px] text-[#212529] mt-4">
                        With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p>
                    <button className="flex justify-center items-center w-[201px] h-[63px] bg-[#4F9CF9] text-[#FFFFFF] rounded-lg gap-[10px] mt-10 border-[1px] outline-[#FFFFFF] px-[40px] py-[20px]">
                        Try it now
                        <Image src={arrow} 
                        width={14} 
                        height={14} 
                        alt="work" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
