
import React from "react";
import Image from "next/image";

const Community = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center ">
          {/* Heading */}
          <h1 className="text-4xl text-[#4D4D4D] font-bold ">
            Manage Your Entire Community 
          </h1>
          {/* Subheading */}
          <p className="text-4xl font-bold text-[#4D4D4D] mb-2">
            In a single system
          </p> <br />
          <p className="text-lg  text-[#717171] mb-12">
            Who is Nextent suitable for?
          </p>

          {/* Testimonial Section */}
          <div className="flex flex-wrap justify-center -m-4">
            <div className="lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="h-full text-center">
                <Image
                  alt="Client Logo"
                  className="w-16 h-16 mb-4 mx-auto rounded  "
                  src="/images/icon1.png"
                  height={500}
                  width={500}
                />
                <p className=" text-xl font-bold text-[#4D4D4D]">
                  Membership
                </p>
                <p className=" text-xl font-bold text-[#4D4D4D]">
                  Organizations
                </p>
                <p className="text-[#717171] text-xs mt-3"> Lorem ipsum dolor constractor</p>
                <p className="text-[#717171] text-xs">Lorem ipsum dolor Lorem ipsum dolor</p>
                <p className="text-[#717171] text-xs">Lorem ipsum dolor  Lorem ipsum dolor Lorem</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="h-full text-center">
                <Image
                  alt="Client Logo"
                  className="w-16 h-16 mb-4 mx-auto"
                  width={500}
                  height={500}
                  src="/images/icon2.png"
                />
                <h1 className=" text-xl font-bold text-[#4D4D4D]">
                  National
                </h1>
                <p className=" text-xl font-bold text-[#4D4D4D]">
                  Associations
                </p>
                <p className="text-[#717171] text-xs mt-3">
                  Lorem ipsum dolor constetur
                </p>
                <p className="text-[#717171] text-xs">Lorem ipsum dolor Lorem ipsum dolor</p>
                <p className="text-[#717171] text-xs">Lorem ipsum dolor  Lorem</p>
                <p className="text-[#717171] text-xs">Lorem sit</p>
                    
                    
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="h-full text-center">
                <img
                  alt="Client Logo"
                  className="w-16 h-16 mb-4 mx-auto "
                  src="/images/icon3.png"
                />
                 <h1 className=" text-xl font-bold text-[#4D4D4D]">
                  Clubs And
                </h1>
                <p className=" text-xl font-bold text-[#4D4D4D]">
                  Groups
                </p>
                <p className="text-[#717171] text-xs mt-3"> Lorem ipsum dolor constractor</p>
                <p className="text-[#717171] text-xs">Lorem ipsum dolor Lorem ipsum dolor</p>
                <p className="text-[#717171] text-xs">Lorem ipsum dolor  Lorem ipsum dolor Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
