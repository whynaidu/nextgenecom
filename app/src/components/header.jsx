import Image from "next/image";
import React, { useEffect, useState } from "react";
import Profile from "../assets/photo-1605405748313-a416a1b84491.jpg"

export default function Header() {


  return (
    <div>
      <div className="bg-gray-600 dark:bg-white dark:text-black text-red-700 w-full rounded-full lg:h-20 h-10 flex justify-end items-center">
        <div className="bg-red-700 rounded-full h-16 w-16 mx-3">  
          <Image
            className="rounded-full overflow-hidden"
          src={Profile}/>
        </div>
      </div>
    </div>
  );
}
