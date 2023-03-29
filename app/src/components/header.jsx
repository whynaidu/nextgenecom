import Image from "next/image";
import React, { useEffect, useState } from "react";
import Profile from "../assets/photo-1605405748313-a416a1b84491.jpg"

export default function Header() {


  return (
    <div>
      <div className="bg-gray-600 dark:bg-white dark:text-black text-red-700 w-full rounded-full lg:h-20 h-10 flex items-center">
        <div className="flex w-full items-center">
          <div className="logo flex w-full h-fit ">
            <div className=" rounded-full lg:h-16 lg:w-16 h-8 w-8 ml-2">
              <Image className="rounded-full overflow-hidden" src={Profile} />
            </div>
          </div>
          <div className="menu w-fit">
            <ul className="flex justify-end space-x-5 lg:text-xl ">
              <li className="hover:text-red-600">Home</li>
              <li className="hover:text-red-600">Shop</li>
              <li className="hover:text-red-600">Contacts</li>
              <li className="hover:text-red-600">Categories</li>
              <li className="hover:text-red-600">About</li>
            </ul>
          </div>

          <div className=" rounded-full flex items-center  lg:h-16 lg:w-16 h-8 w-8 mx-3">
            <Image className="rounded-full overflow-hidden" src={Profile} />
          </div>
        </div>
      </div>
    </div>
  );
}
