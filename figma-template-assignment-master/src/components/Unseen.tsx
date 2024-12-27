
import React from 'react';
import Image from 'next/image';

const Unseen = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <Image
                alt="ecommerce"
                className="rounded object-cover object-center w-full h-64 sm:h-80 lg:h-auto"
                src="/images/f.png"
                height={500}
                width={500}
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#4D4D4D] font-bold text-2xl sm:text-3xl lg:text-4xl mt-4 lg:mt-0">
                The unseen of spending three years at pixelgrade
              </h1>
              
              <p className="text-[#717171] mt-4 leading-relaxed text-sm sm:text-base">
                Fam locavore kickstarter distillery Mixtape chillwave turmeric
                Lorem ipsum dolor sit amet consectetur adipisicing elit Quam Lorem ipsum dolor sit amet consectetur adipisicing elit Excepturi quasi
                minus eum iste sed eveniet placeat! Lorem ipsum dolor sit amet
              </p>

              {/* Button */}
              <div className="mt-6 sm:mt-8">
                <button className="flex items-center justify-center text-white bg-[#4CAF4F] px-6 py-3 w-5/12 sm:w-5/12 lg:w-auto mx-auto lg:mx-0 hover:bg-[#45a043] rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unseen;