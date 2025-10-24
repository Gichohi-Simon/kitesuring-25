'use client';
import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-primary py-10">
      <div className="text-default mx-auto grid max-w-7xl justify-items-center gap-10 p-4 py-10 sm:grid-cols-2 md:grid-cols-3">
        <Image
          src={'/logo_light.png'}
          width={200}
          height={200}
          alt="logo-img"
          className="mx-auto w-fit"
        />
        <div
          className="flex flex-col space-y-3 py-4 text-center sm:text-left"
          id="contacts"
        >
          <h3 className="text-secondary text-xl font-extrabold underline">
            Contacts
          </h3>
          <a
            href="mailto:hello@kenyakitesurfingschools.com"
            className="hover:text-accent"
          >
            hello@kenyakitesurfingschools.com
          </a>
          <a href="tel:+254 729 173 699" className="hover:text-accent">
            +254 729 173 699
          </a>
        </div>
        <div className="flex flex-col space-y-3 py-4 text-center sm:col-span-2 sm:text-left md:col-span-1">
          <h3 className="text-secondary text-xl font-extrabold underline">
            Get socials
          </h3>
          <a
            href="https://web.facebook.com/kenyakitesurfingschools"
            className="hover:text-accent"
          >
            facebook
          </a>
          <a
            href="https://www.google.com/maps?ll=-4.35865,39.561905&amp;z=16&amp;t=m&amp;hl=en&amp;gl=KE&amp;mapclient=embed&amp;cid=15626265887407928393"
            className="hover:text-accent"
          >
            google
          </a>
          <a
            href="https://www.instagram.com/kenyakitesurfingschool/?hl=en"
            className="hover:text-accent"
          >
            instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
