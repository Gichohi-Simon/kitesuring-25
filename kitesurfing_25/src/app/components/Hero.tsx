'use client';
import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div
      id="hero"
      className="flex min-h-[90vh] items-center justify-center bg-[url('/ocean.jpg')] bg-cover bg-center"
    >
      <Image src={'/logo_light.png'} alt="hero-img" width={300} height={300} />
    </div>
  );
};

export default Hero;
