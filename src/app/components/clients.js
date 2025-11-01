"use client";

// image imports
import awd from "../../../public/awdawdawd.jpg";
// image imports

// component imports
import { ReactLenis } from "lenis/react";
import * as motion from "motion/react-client";

//gsap imports {
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
//gsap imports }
// component imports

// react imports
import { useEffect, useRef } from "react";
import Image from "next/image";
// react imports

//font imports
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-urbanist",
});

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-poppins",
});
//font imports

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};

export default function Clients() {
  const lenisRef = useRef(null);
  useEffect(() => {
    let rafId;

    const loop = (time) => {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, []);




  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);


    gsap.to(".content", {
      x: "-100vw",
      scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 3,

      },
    });
    const about = new SplitText(".about", { type: "words" });
    const About = about.words;

    const AboutDel = gsap.from(About, {
      yPercent: 200,
      stagger: 0.4,
      ease: "power1.out",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".content",
        scrub: true,
        start: "top top"
      },
      onComplete: () => { about.revert(); AboutDel.scrollTrigger?.kill();}
    });
  }, [])
  return (
    <ReactLenis
      root
      options={{ autoRaf: false, duration: 3 }}
      smoothWheel={true}
      ref={lenisRef}
    >
      <div className={`${poppins.variable}`}>
        <div className="relative -z-10 h-screen bg-black  flex justify-center items-center">
          <Image
            src={awd}
            alt="whatever is this"
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
            className="absolute"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}
            className="square absolute h-50 w-50 rounded-lg bg-green-500 flex justify-center items-center"
          >
            <p>awdhadwadadw</p>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <section
            id="horizontal"
            className="h-screen bg-[#0F1E59] w-auto relative -z-10 flex overflow-hidden  font-semibold"
          >
            <div className="content bg-[#0F1E59] h-screen w-[200vw] shrink-0 flex justify-center items-center border-none">
              <p className="about text-white text-[200px]">
                About what YOU can do.
              </p>
            </div>
          </section>
        </div>

        {/* for mobile about section */}
        <div className=" block lg:hidden xl:hidden">
          <section className="relative -z-10 bg-[#0F1E59] h-screen text-white flex justify-center items-center ">
            <div className="text-8xl font-poppins font-semibold gap-6 flex flex-col">
              <p>About</p>
              <p>what</p> <p>YOU</p> <p>can</p> <p>do.</p>
            </div>
          </section>
        </div>

        <div className="h-screen bg-[#000000] "></div>
        <div className="h-screen bg-[#ffffff] "></div>
        <div className="h-screen bg-[#000000]  flex justify-center items-center text-white"></div>
      </div>

      {/* <svg
        width="293"
        height="37"
        viewBox="0 0 293 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
         <path
          d="M0.5 36C32.5 36 35.4457 0.5 57.5 0.5C81 0.5 78 36 103 36C128 36 137 0.5 158 0.5C179 0.5 188.5 36 209 36C229.5 36 245.5 0.499995 259.5 0.5C273.5 0.500005 287.5 38.5 292 36"
          stroke="black"
          stroke-linecap="round"
        />
      </svg>  */}
    </ReactLenis>
  );
}
