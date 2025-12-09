"use client";

// react imports

// react imports


//nextimports
import Link from "next/link";
//nextimports


//font imports
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200",],
  variable: "--font-urbanist",
});
//font imports

export default function Header() {
  return (
    <header
      className={`${urbanist.variable} fixed top-0 left-0 w-full bg-transparent h-[3rem] md:h-[5rem] text-3xl pt-7 flex px-4 md:px-7 lg:px-25 mix-blend-difference text-white md:text-xl md:p-0 antialiased font-[32]  select-none`}
    >
      <div className="flex justify-end font-urbanist w-full ">
        {/* <div className="flex justify-center items-center">
          <button className=" cursor-pointer p-2 relative focus:outline-none  after:bg-amber-500 after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-0 after:left-0 after:transition-all after:delay-150 after:duration-300 after:ease-in-out hover:after:w-[100%]">
            <Link href=""> Home</Link>
          </button>
        </div> */}
        <div className="flex justify-center items-center gap-3 md:gap-10">
          {/* <button className="cursor-pointer p-2 relative focus:outline-none  after:bg-amber-500 after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-0 after:left-0 after:transition-all after:delay-150 after:duration-300 after:ease-in-out hover:after:w-[100%]">
            Report
          </button> */}
          <button className="cursor-pointer  p-2 relative focus:outline-none  after:bg-amber-500 after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-0 after:left-0 after:transition-all after:delay-150 after:duration-300 after:ease-in-out hover:after:w-[100%]">
            <Link href="">Admin</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
