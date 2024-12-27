
import React from "react";
import Image from "next/image";

const Lessons = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="container mx-auto flex md:flex-row flex-col items-center px-6 md:px-24 py-16 gap-12">
          {/* Left Section */}
          <div className="flex flex-col md:items-start text-center md:text-left items-center md:w-1/2 gap-6">
            <h1 className="text-4xl font-bold md:text-4xl  text-[#4D4D4D] leading-snug">
              Lessons and insights <br />
              <span className="text-[#4CAF4F] font-bold">
                from 8 years
              </span>
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="mt-4">
              <button className="inline-flex w-[128px] h-[52px] items-center justify-center text-white bg-[#4CAF4F] border-0 focus:outline-none rounded text-lg hover:bg-[#45A049]">
                Register
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/lesson.png"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Dot Image */}
        <div className="flex justify-center mt-4">
          <Image
            className="" // Adjust size as needed
            alt="dot"
            width={50}
            height={50}
            src="/images/Dot.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Lessons;
