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
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

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

  // if innerwidth is < 1024 do not do the effect here

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.to(".content", {
      x: "-190vw",
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
        start: "top top",
      },
      onComplete: () => {
        about.revert();
        AboutDel.scrollTrigger?.kill();
      },
    });
  }, []);

// if innerwidth is < 1024 do not do the effect here
  return (
    <ReactLenis
      root
      options={{ autoRaf: false, duration: 3 }}
      smoothWheel={true}
      ref={lenisRef}
    >
      <div className={`${poppins.variable} ${urbanist.variable}`}>
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
            className="h-screen bg-[#0F1E59] w-auto relative -z-10 flex font-semibold overflow-hidden"
          >
            <div className="content bg-[#0F1E59] h-screen w-[250vw] shrink-0 flex justify-center items-center border-none">
              <p className="about text-white text-[200px]">
                About what YOU can do.
              </p>
              <svg
                width="2604"
                height="500"
                viewBox="0 0 2604 553"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute shrink-0"
              >
                <path
                  d="M0 203.5C300.287 203.5 404.624 1.5 611.58 1.5C832.104 1.5 739.06 551.5 973.659 551.5C1208.26 551.5 1214.84 1.5 1411.9 1.5C1608.97 1.5 1620.69 551.5 1813.06 551.5C2005.43 551.5 1976.74 1.5 2282.69 1.5C2588.64 1.5 2580.69 476.939 2602 551.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
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

        <div className="h-[150vh] bg-white relative -z-10 flex justify-between items-center">
          <div className="h-[120vh] bg-[#0F1E59] w-[45vw]  flex justify-center items-center p-10">
            <p className="font-urbanist text-white text-5xl font-semibold">
              Protecting your local coastline by submitting a report to us to
              provide cleanup services from the LGU of your municipality
            </p>
          </div>
          <div className="h-full  flex-1 font-poppins text-[200px] font-bold flex flex-col justify-start py-22">
            <p className="h-auto w-auto leading-none">HELP</p>
            <p className="h-auto w-auto leading-none">US</p>
            <p className="h-auto w-auto leading-none">BY</p>
          </div>
        </div>

        <div className="h-screen bg-[#000000] "></div>
        <div className="h-screen bg-[#ffffff] flex justify-center items-center"></div>
        <div className="h-screen bg-[#000000]  flex justify-center items-center text-white">
          <svg
            width="1306"
            height="554"
            viewBox="0 0 1306 554"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 160.545C145.582 160.545 157.311 1.5 256.611 1.5C362.422 1.5 348.914 262.963 461.478 262.963C574.042 262.963 614.565 1.5 709.119 1.5C803.672 1.5 846.447 262.963 938.749 262.963C1031.05 262.963 1037.28 1.5 1184.08 1.5C1330.88 1.5 1302 570.238 1302 551.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </ReactLenis>
  );
}
