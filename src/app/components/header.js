"use client";

// react imports
import { useState } from "react";
// react imports

import LoginModal from "./loginmodal.js"


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
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      className={`${urbanist.variable} text-[#3C3535] md:text-xl antialiased font-[32]  fixed top-0 left-0 w-full bg-transparent h-[3rem] md:h-[5rem] text-3xl pt-7 flex px-4 md:px-7 lg:px-25 z-40`}
    >
      <div className="flex justify-end w-full ">
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer active:opacity-80 active:scale-95 active:brightness-110 transition-all duration-300 ease-in-out px-2 relative focus:outline-none  after:bg-[#0F1E59] after:absolute after:h-[2px] after:w-0 after:content-[''] after:bottom-0 after:left-0 after:transition-all after:delay-150 after:duration-300 after:ease-in-out hover:after:w-[100%] select-none leading-none font-urbanist "
        >
          Admin
        </button>
        <LoginModal isOpen={isOpen} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
