'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav ref={navRef}>
      <div className={`bg-primary relative px-6 py-4`}>
        <div className={`mx-auto flex items-center justify-between`}>
          <Link href={`/`}>
            <Image src="/logo_dark.png" width="90" height="90" alt="logo-img" />
          </Link>
          {isOpen ? (
            <IoMdClose
              size={`1.5em`}
              className="cursor-pointer sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <IoMdMenu
              size={`1.5em`}
              className="cursor-pointer sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <ul
            className={
              'semi-bold hidden items-center space-x-8 text-sm sm:flex'
            }
          >
            <li
              className={
                'hover:bg-accent text-default cursor-pointer rounded p-2'
              }
            >
              <Link href={'/'} className={'text-default text-lg'}>
                Home
              </Link>
            </li>
            <li
              className={
                'hover:bg-accent text-default cursor-pointer rounded p-2'
              }
            >
              <a href="#lesson" className="text-lg">
                price
              </a>
            </li>
            <li
              className={
                'hover:bg-accent text-default cursor-pointer rounded p-2'
              }
            >
              <a href="#about" className="text-lg">
                About
              </a>
            </li>
            <li
              className={
                'hover:bg-accent text-default cursor-pointer rounded p-2'
              }
            >
              <a href="#location" className="text-lg">
                location
              </a>
            </li>
            <li
              className={
                'hover:bg-accent text-default cursor-pointer rounded p-2'
              }
            >
              <a href="#contacts" className="text-lg">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className={
            'bg-primary fixed flex w-full flex-col space-y-2 p-4 md:hidden'
          }
        >
          <Link
            href={'/'}
            onClick={() => setIsOpen(!isOpen)}
            className={
              'hover:bg-accent text-default cursor-pointer rounded p-2 text-lg'
            }
          >
            Home
          </Link>

          <a
            href="#lesson"
            onClick={() => setIsOpen(!isOpen)}
            className={
              'hover:bg-accent text-default cursor-pointer rounded p-2 text-lg'
            }
          >
            price
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(!isOpen)}
            className={
              'hover:bg-accent text-default cursor-pointer rounded p-2 text-lg'
            }
          >
            About
          </a>

          <a
            href="#location"
            onClick={() => setIsOpen(!isOpen)}
            className={
              'hover:bg-accent text-default cursor-pointer rounded p-2 text-lg'
            }
          >
            location
          </a>

          <a
            href="#contacts"
            onClick={() => setIsOpen(!isOpen)}
            className={
              'hover:bg-accent text-default cursor-pointer rounded p-2 text-lg'
            }
          >
            contacts
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
