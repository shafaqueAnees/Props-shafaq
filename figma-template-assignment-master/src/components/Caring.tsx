




import React from "react";
import Image from "next/image";

const Caring = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        {/* Heading and Paragraph */}
        <div className="container px-4 py-12 mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#4D4D4D] mb-4">
            Caring is the new marketing
          </h1>
          <p className="text-[#717171] leading-relaxed max-w-xl mx-auto">
            The Nextent blog designed to meet your needs with precision and care
            Lorem ipsum dolor sit amet consectetur adipisicing elit Quae dignissimos dicta incidunt mollitia hic nemo Lorem ipsum dolor sit Lorem ipsum dolor
          </p>
        </div>

        {/* Cards Section */}
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/c1.png"
                  alt="Service 1"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/c2.png"
                  alt="Service 2"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/c3.png"
                  alt="Service 3"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caring;
