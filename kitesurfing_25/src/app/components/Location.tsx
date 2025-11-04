'use client';

import React from 'react';

const Location = () => {
  return (
    <div id="location" className="min-h-screen py-10">
      <h3 className="text-primary text-center text-lg font-extrabold">
        Come surf with us
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5165.378077284496!2d39.55654197665545!3d-4.3621172126795775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18404c027c766b13%3A0xd8dba60878c0f449!2sKenya%20Kitesurfing%20School!5e0!3m2!1sen!2ske!4v1596204395022!5m2!1sen!2ske"
        width="700"
        height="700"
        className="w-full rounded-md py-6"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
