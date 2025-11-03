'use client';

import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div id="about" className="mx-auto max-w-7xl px-4 py-10">
      <div className="">
        <h3 className="text-primary py-2 text-center text-2xl font-bold">
          About Us
        </h3>
        <h5 className="py-1 text-center text-xl font-bold">
          we are open daily from 9:00am to 5:00pm
        </h5>
      </div>
      <p className="py-2 text-center text-lg sm:text-left">
        Kenya Kitesurfing school was established in 2013 with the aim of
        providing an affordable kiteboarding and surfing holiday for kitesurfers
        of all ages who are keen to learn the exhilarating sport. Our schools
        has a team of friendly professional instructors who are always on hand
        to give you the best possible holiday by teaching you the sport in the
        safest way possible whilst making sure you have fun along the way
      </p>
      <div className="mx-auto grid w-fit gap-10 py-10 lg:grid-cols-3">
        <Image
          src={'/images/gallery/clients.jpeg'}
          width={300}
          height={300}
          alt="about-img"
          className="w-fit rounded-md"
        />
        <Image
          src={'/images/instructions.jpeg'}
          width={300}
          height={300}
          alt="about-img"
          className="w-fit rounded-md"
        />
        <Image
          src={'/images/lesson_on_show.jpeg'}
          width={300}
          height={300}
          alt="about-img"
          className="w-fit rounded-md"
        />
        <Image
          src={'/images/gallery/client_show.jpeg'}
          width={300}
          height={300}
          alt="about-img"
          className="w-fit rounded-md"
        />
        <Image
          src={'/images/gallery/instructor_walking.jpeg'}
          width={300}
          height={300}
          alt="about-img"
          className="w-fit rounded-md"
        />
        <Image
          src={'/images/gallery/banner.jpeg'}
          width={300}
          height={300}
          alt="about-img"
          className="w-fit rounded-md"
        />
      </div>
    </div>
  );
};

export default About;
