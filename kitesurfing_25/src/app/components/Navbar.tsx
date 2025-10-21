'use client';
import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav className={`bg-primary relative p-4`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between`}>
        <Link href={`/`}>
          <Image src="/logo_dark.png" width="90" height="90" alt="logo-img" />
        </Link>

        <ul className={'hidden items-center space-x-4 md:flex'}>
          <li className={'hover:bg-accent text-default rounded p-2'}>
            <Link href={'/'} className={'text-default'}>
              Home
            </Link>
          </li>
          <li className={'hover:bg-accent text-default rounded p-2'}>
            <a href="#lesson">price</a>
          </li>
          <li className={'hover:bg-accent text-default rounded p-2'}>
            <a href="#about">About</a>
          </li>
          <li className={'hover:bg-accent text-default rounded p-2'}>
            <a href="#location">location</a>
          </li>
          <li className={'hover:bg-accent text-default rounded p-2'}>
            <a href="#contacts">contacts</a>
          </li>
        </ul>

        <div className={'md:hidden'}>
          <Menu>
            {({ open }) => (
              <>
                <MenuButton className="text-default cursor-pointer">
                  {open ? (
                    <AiOutlineClose size={`1.5em`} />
                  ) : (
                    <RiMenu3Fill size={`1.5em`} />
                  )}
                </MenuButton>
                <MenuItems className="bg-primary/10 absolute top-22 left-0 flex w-screen flex-col space-y-3 p-3">
                  <MenuItem>
                    <Link
                      href="/"
                      className="data-focus:bg-accent data-focus:text-default text-secondary block rounded-md p-2 text-center font-bold"
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#price"
                      className="data-focus:bg-accent data-focus:text-default text-secondary block rounded-md p-2 text-center font-bold"
                    >
                      price
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#about"
                      className="data-focus:bg-accent data-focus:text-default text-secondary block rounded-md p-2 text-center font-bold"
                    >
                      About
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#location"
                      className="data-focus:bg-accent data-focus:text-default text-secondary block rounded-md p-2 text-center font-bold"
                    >
                      location
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#contacts"
                      className="data-focus:bg-accent data-focus:text-default text-secondary block rounded-md p-2 text-center font-bold"
                    >
                      contacts
                    </a>
                  </MenuItem>
                </MenuItems>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
