

import React from 'react';
import Image from 'next/image';

const Helping = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#F5F7FA]">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center justify-center">
          {/* Left Side: Heading and Paragraph */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:pr-6">
            <h1 className="text-4xl font-bold mb-2 text-[#4D4D4D]">
              Helping a local
              <br />
              <span className="text-4xl font-bold text-[#4CAF4F] mb-4">
                business reinvent itself
              </span>
            </h1>
            <p className="leading-relaxed text-base text-[#18191F]">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Side: Logos with Numbers */}
          <div className="flex flex-col md:w-1/2 items-center md:pl-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Logo-Number Pairs */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <Image
                  src="/images/h1.png"
                  alt="Logo 1"
                  height={100}
                  width={100}
                  className="h-16 w-16 object-contain mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <p className="text-3xl font-bold text-[#4D4D4D]">2,245,341</p>
                  <p className="text-sm text-[#717171] mt-1 ">Members</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <Image
                  src="/images/h2.png"
                  alt="Logo 2"
                  height={100}
                  width={100}
                  className="h-16 w-16 object-contain mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <p className="text-3xl font-bold text-[#4D4D4D]">46,328</p>
                  <p className="text-sm text-[#717171] mt-1">Clubs</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <Image
                  src="/images/h3.png"
                  alt="Logo 3"
                  height={100}
                  width={100}
                  className="h-16 w-16 object-contain mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <p className="text-3xl font-bold text-[#4D4D4D]">828,867</p>
                  <p className="text-sm text-[#717171] mt-1">Event Bookings</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <Image
                  src="/images/h4.png"
                  alt="Logo 4"
                  height={100}
                  width={100}
                  className="h-16 w-16 object-contain mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <p className="text-3xl font-bold text-[#4D4D4D]">1,926,436</p>
                  <p className="text-sm text-[#717171] mt-1">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Helping;
