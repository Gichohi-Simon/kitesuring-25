'use client';
import React, { useState, Fragment } from 'react';
import { CardData } from '../utils/types';
import { Dialog, Transition } from '@headlessui/react';

const Card = ({ data }: { data: CardData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div key={data.id} className="flex flex-col space-y-2">
        <div
          className={`h-52 w-full rounded-md bg-cover bg-center`}
          style={{ backgroundImage: `url(${data.bg_img})` }}
        ></div>
        <div className="flex flex-col space-y-2">
          <p className="text-center font-bold">{data.title}</p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-primary text-default cursor-pointer rounded-md p-2 text-xs"
            >
              View {data.package_name}
            </button>
            <p className="text-sm font-bold">{data.description}</p>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-primary text-center text-lg leading-6 font-bold"
                  >
                    {data.package_name}
                  </Dialog.Title>
                  <div className="mt-2 text-center">
                    {data.explainer.details.map((detail) => (
                      <p key={detail} className="text-secondary text-xs">
                        {detail}
                      </p>
                    ))}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-primary text-default hover:bg-primary/30 focus-visible:ring-primary inline-flex cursor-pointer justify-center rounded-md border border-transparent px-4 py-2 text-sm text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Card;
