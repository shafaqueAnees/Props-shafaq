import React from 'react';
import Image from 'next/image';
import Apple from '@/app/assets/Apple.png';
import Microsoft from '@/app/assets/Microsoft.png';
import Slack from '@/app/assets/Slack.png';
import Google from '@/app/assets/Google.png';

const Card = () => {
  return (
    <div className="w-full bg-gray-50 py-[140px]">
      {/* Container for overall alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-20">
          <h1 className="font-bold text-4xl md:text-6xl text-center tracking-tight text-gray-800">
            Our sponsors
          </h1>
        </div>

        {/* Sponsor Logos */}
        <div className="flex flex-wrap justify-center items-center gap-28">
          {/* Apple Logo */}
          <div className="flex justify-center">
            <Image
              src={Apple}
              width={55}
              height={68}
              alt="Apple"
              className="object-contain"
            />
          </div>

          {/* Microsoft Logo */}
          <div className="flex justify-center">
            <Image
              src={Microsoft}
              width={287}
              height={62}
              alt="Microsoft"
              className="object-contain"
            />
          </div>

          {/* Slack Logo */}
          <div className="flex justify-center">
            <Image
              src={Slack}
              width={279}
              height={70}
              alt="Slack"
              className="object-contain"
            />
          </div>

          {/* Google Logo */}
          <div className="flex justify-center">
            <Image
              src={Google}
              width={211}
              height={70}
              alt="Google"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
