import Image from "next/image";
import React from "react";
import Logo from "../assets/photo-1605405748313-a416a1b84491.jpg"

export const Footer = () => {
  return (
    <>
      <footer className=" px-10 py-10 rounded-xl bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="mt-8 lg:mt-0 flex items-center">
            <div className="pr-6">
              <Image className="rounded-full" src={Logo} />
            </div>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-gray-700 dark:text-black mb-6">
              Company
            </p>
            <ul className="flex flex-col space-y-4 font-medium text-[14px] text-gray-500 dark:text-gray-400">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
              <li>Press Release</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-gray-700 dark:text-black mb-6">
              Our Stores
            </p>
            <ul className="flex flex-col space-y-4 font-medium text-[14px] text-gray-500 dark:text-gray-400">
              <li>Washington</li>
              <li>New Hampshire</li>
              <li>Maine</li>
              <li>Texas</li>
              <li>Indiana</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-gray-700 dark:text-black mb-6">
              Services
            </p>
            <ul className="flex flex-col space-y-4 font-medium text-[14px] text-gray-500 dark:text-gray-400">
              <li>UI / UX Design</li>
              <li>App Development</li>
              <li>API reference</li>
              <li>API status</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-gray-700 dark:text-black mb-6">
              Legal
            </p>
            <ul className="flex flex-col space-y-4 font-medium text-[14px] text-gray-500 dark:text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Media Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
