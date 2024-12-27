
import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-16 mx-auto">
          {/* Section Heading */}
          <h1 className="text-center text-3xl font-bold text-[#4D4D4D] mb-4">
            Our Clients
          </h1>
          <p className="text-center text-[#717171] mb-8">
            Building long-lasting relationships with our trusted clients
          </p>

          {/* Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <div>
              <Image
                className="w-16 h-16 mx-auto"
                src="/images/1.png"
                width={100}
                height={100}
                alt="Client 1"
              />
            </div>
            <div>
              <Image
                className="w-16 h-16 mx-auto"
                src="/images/2.png"
                alt="Client 2"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                className="w-16 h-16 mx-auto"
                src="/images/3.png"
                alt="Client 3"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                className="w-16 h-16 mx-auto"
                src="/images/4.png"
                alt="Client 4"
                height={100}
                width={100}
              />
            </div>
            <div>
              <Image
                className="w-16 h-16 mx-auto"
                src="/images/5.png"
                alt="Client 5"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                className="w-16 h-16 mx-auto"
                src="/images/7.png"
                alt="Client 6"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
