import React from 'react';
import Image from 'next/image';
import Group from '@/app/assets/Group.png';
import logo from '@/app/assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#043873] text-[#FFFFFF] pt-[140px] pb-[32px] w-full px-[220px]">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Main Content */}
                <div className=" grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-y-16  gap-[15px]">
                    {/* Col-1 logo and Description */}
                    <div>
                        <div className="flex items-center gap-2 mb-4  ">
                            <Image src={Group} width={37} height={26.46} alt="Group" />
                            <Image src={logo} width={144} height={34} alt="Logo" />
                        </div>
                        <p className="max-w-[300px] text-[18px] leading-[30px] text-[#F7F7EE] tracking-[-2%]">
                            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
                        </p>
                    </div>

                    {/* Col-2 Product */}
                    <div>
                        <p className="font-bold mb-4 tracking-[-2%] leading-[22px]">Product</p>
                        <ul className="space-y-4">
                            <li className="text-[#FFE492] text-[16px] font-[400] leading-[20px] tracking-[-2%]">Overview</li>
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Pricing</li>
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Customer Stories</li>
                        </ul>
                    </div>

                    {/* Col-3 Resources */}
                    <div>
                        <p className="font-bold mb-4 text-lg tracking-[-2%] leading-[22px]">Resources</p>
                        <ul className="space-y-4">
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Blog</li>
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Guides & Tutorials</li>
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Help Center</li>
                        </ul>
                    </div>

                    {/* Col-4 Company */}
                    <div>
                        <p className="font-bold mb-4 text-lg tracking-[-2%] leading-[22px]">Company</p>
                        <ul className="space-y-4">
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">About Us</li>
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Careers</li>
                            <li className="text-[16px] font-[400] leading-[20px] tracking-[-2%] text-[#FFFFFF]">Media Kit</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 border-t border-[#FFFFFF]/30 pt-4 text-center">
                    <p>©2024 Created by Shafaque Anees</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
