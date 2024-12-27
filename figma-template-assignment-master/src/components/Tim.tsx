

import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Tim = () => {
  
  const logos = [
    "/images/tim1.png",
    "/images/tim2.png",
    "/images/tim3.png",
    "/images/tim4.png",
    "/images/tim5.png",
    "/images/tim6.png"
  ];

  return (
    <div>
      <section className="text-gray-600 bg-[#F5F7FA] body-font overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image Section */}
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded"
              src="/images/tim.png"
            />

            {/* Text Section */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <p className="text-[#717171] mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Nisi
                repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa doloremque distinctio delectus
                minima amet aliquam culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id? Lorem ipsum dolor sit amet consectetur adipisicing elit Excepturi amet facilis reprehenderit corporis nulla Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              </p>

              {/* Tim Smith aur Additional Text */}
              <div className="mt-4">
                <span className='text-[#45a043] font-bold'>Tim Smith</span> <br />
                <p className="text-[#89939E]">British Lorem ipsum dolor sit amet</p>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-start space-x-4">
                  {logos.map((logo, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={logo}
                        alt={`logo ${index + 1}`}
                        className="w-8 h-8 object-contain" 
                      />
                    </div>
                  ))}

            <div className="flex items-center text-sm text-[#4CAF4F]">
            <p className="mr-2">Meet all customers</p> 
          <FaLongArrowAltRight className="text-[#4CAF4F] text-xs" /> 
               </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tim;








