import React from "react";
import Img from "./../../assets/photo-1605405748313-a416a1b84491.jpg"
import Image from "next/image";

// import { useRef } from "react";
// import { useDraggable } from "react-use-draggable-scroll";

export default function CategoriesPanel() {
  // const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  // const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <>
      <div
        className="flex lg:space-x-8 space-x-3 overflow-x-auto scrollbar-hide py-6 w-full"
        // {...events}
        // ref={ref} // add reference and events to the wrapping div
      >
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-20 w-20 ml-0 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full  lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          <Image
            src={Img}
            width={500}
            height={500}
            alt="Picture of the author"
          />{" "}
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex ml-0 justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
        <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
          lkmsf
        </div>
      </div>
      {/* <div className="my-6 grid grid-cols-8 grid-flow-col gap-7 place-items-center">
          <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
          <div className="bg-white rounded-full  lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
          <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
          <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
          <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
          <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
          <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
          <div className="bg-white rounded-full lg:h-24 lg:w-24 h-16 w-16 flex justify-center items-center text-black">
            lkmsf
          </div>
        </div> */}
    </>
  );
}
