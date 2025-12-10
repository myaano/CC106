"use client";

// image imports
import awd from "../../../public/awdawdawd.jpg";
import wd from "../../../public/wd.jpg";
import wdw from "../../../public/wdw.jpg";
// image imports

// component imports
import { ReactLenis } from "lenis/react";
import ReportModal from "./reportmodal";

//motion improts
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
//motion improts

//imports {
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// imports
// component imports

// react imports
import { useEffect, useRef, useState } from "react";
// react imports

//next imports
import Image from "next/image";
//next imports

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
  weight: ["300", "500"],
  variable: "--font-poppins",
});
//font imports

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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.to(".content", {
      x: "-150vw",
      scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 3,
      },
    });
    const about = new SplitText(".about", { type: "words" });
    const About = about.words;
    gsap.from(About, {
      yPercent: 200,
      stagger: 0.4,
      ease: "power1.out",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".content",
        scrub: true,
        start: "top top",
        once: true,
      },
      onComplete: () => {
        about.revert();
      },
    });

    const report = new SplitText(".report", { type: "chars" });
    const reportTxt = report.chars.reverse();

    gsap.from(reportTxt, {
      yPercent: -130,
      stagger: 0.2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".about",
        start: "bottom top",
      },
    });

    gsap.from(".a", {
      x: "-200",
      scrollTrigger: {
        trigger: ".about2",
        start: "top center",
      },
    });

    gsap.from(".problem", {
      y: "200",
      scrollTrigger: {
        trigger: ".about2",
        start: "top center",
      },
    });

    const submitrep = new SplitText(".submitrep", { type: "words" });
    const submitrepTxt = submitrep.words;

    gsap.from(submitrepTxt, {
      yPercent: -450,
      stagger: 0.1,
      ease: "back.inOut(1.7)",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".about2",
        start: "top center",
      },
    });

    const submitrep2 = new SplitText(".submitrep2", { type: "words" });
    const submitrep2Txt = submitrep2.words;

    gsap.from(submitrep2Txt, {
      yPercent: -450,
      stagger: 0.1,
      ease: "back.inOut(2)",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".about2",
        start: "top center",
      },
    });

    const ddesc = new SplitText(".ddesc", { type: "words" });
    const ddescTxt = ddesc.words;

    gsap.from(ddescTxt, {
      yPercent: -450,
      stagger: 0.1,
      ease: "back.inOut(1.7)",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".about2",
        start: "top center",
      },
    });


    gsap.from(".bttn", {
      x: "250",
      scrollTrigger: {
        trigger: ".about2",
        start: "top center"
      }
    })
  });

  const [isOpen, setOpen] = useState(false);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, duration: 3 }}
      smoothWheel={true}
      ref={lenisRef}
    >
      <div className={`${poppins.variable} ${urbanist.variable} antialiased`}>
        {/* <div className="h-screen bg-white flex  justify-center items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileInView={{ opacity: 1 }}
            className=" absolute h-50 w-50 rounded-lg bg-green-500 flex justify-center items-center"
          >
            <Image
              src={awd}
              alt="sorimg1"
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority={true}
            />
          </motion.div>
        </div> */}
        <div className="hidden lg:block select-none">
          <div className="h-screen bg-white flex px-[4rem]  text-[#3C3535]">
            <div className="w-[45vw]  flex flex-col">
              <div className=" text-[100px] font-poppins  flex-1 flex justify-center items-center">
                <p className="inline-block align-middle leading-none">
                  Protecting <br /> Coastal <br /> Sorsogon
                </p>
              </div>
              <div className=" flex flex-col items-end h-[30vh]">
                <div className="flex flex-col gap-4 font-urbanist font-medium text-lg">
                  <div className="  flex gap-3 leading-5">
                    <div className="w-[4px] bg-[#0F1E59]"></div>
                    <p>
                      Ensuring Cleanliness, and Safety <br />
                      across the Province of Sorsogon
                    </p>
                  </div>
                  <div className="flex gap-3 leading-5">
                    <div className="w-[4px] bg-[#0F1E59]"></div>
                    <p>
                      While protecting coastal Livelihood, <br />
                      and Tourism around Sorsogon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen  flex-1">
              <div className="flex h-full relative ">
                <div className="bg-[#0F1E59] h-[50vh] w-[6px]"></div>
                <div className=" w-[28rem]"></div>
                <div className="bg-[#0F1E59] h-[75vh] w-[6px]"></div>
                <div className=" h-full  flex absolute">
                  <div className=" pr-2 pl-4 flex flex-col justify-start items-end gap-4 py-10">
                    <div className=" h-auto w-[20rem]">
                      <Image
                        src={awd}
                        alt="sorimg1"
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                        priority={true}
                      />
                    </div>
                    <div className=" h-auto w-[13rem]">
                      <Image
                        src={wd}
                        alt="sorimg2"
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                        priority={true}
                      />
                    </div>
                  </div>
                  <div className=" flex justify-center items-center">
                    <div className=" h-auto w-[12rem]">
                      <Image
                        src={wdw}
                        alt="sorimg3"
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile landing page here */}
        <section className="block lg:hidden">
          <div className="h-[100vh]  px-4 pt-40 pb-20 font-poppins  flex flex-col text-[#3C3535]  justify-center items-center">
            <div className=" text-[100px] md:text-[150px] h-full w-full">
              <p className="leading-none">Protec-</p>
              <p className="flex justify-end items-end leading-none ">ting</p>
              <p className="text-[#D3001C]">Coastal</p>
              <p className="flex justify-start items-start leading-none ">
                Sor-
              </p>
              <p className="flex justify-end items-end leading-none">sogon</p>
            </div>
            <div className=" flex justify-start items-center w-full h-full font-medium text-xl">
              <div className="flex gap-2">
                <div className="w-[5px] bg-[#0F1E59]"></div>
                <p className="leading-6">
                  Protecting Sorsogon's <br /> Coast and our livelihood
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* mobile landing page here  END*/}

        {/* horizontal scroll pc */}
        <section className="hidden lg:block">
          <div
            id="horizontal"
            className="h-screen w-auto flex font-semibold overflow-hidden  "
          >
            <div className="content  h-screen w-[250vw] shrink-0 flex justify-center items-center border-none  select-none">
              <p className="about text-[#3C3535] text-[200px]">
                About what <span className="text-[#D3001C]">YOU</span> can do.
              </p>
              <svg
                width="2604"
                height="500"
                viewBox="0 0 2604 553"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -z-10 shrink-0 hidden md:block"
              >
                <path
                  d="M0 203.5C300.287 203.5 404.624 1.5 611.58 1.5C832.104 1.5 739.06 551.5 973.659 551.5C1208.26 551.5 1214.84 1.5 1411.9 1.5C1608.97 1.5 1620.69 551.5 1813.06 551.5C2005.43 551.5 1976.74 1.5 2282.69 1.5C2588.64 1.5 2580.69 476.939 2602 551.5"
                  stroke="#0F1E59"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </section>
        {/* horizontal scroll pc END */}

        {/* about part 2 pc*/}
        <section className="hidden lg:block ">
          <div className="about2 h-screen px-20 py-13 flex flex-col ">
            <div className="h-10 text-[10px] font-urbanist text-[#3C3535] ">
              <div className="marquee flex justify-evenly ">
                <p>Improper Waste Management</p>
                <p>Livestock Littering</p>
                <p>Coral Reef Destruction</p>
                <p>Coastal Landslides</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-poppins text-[100px] bg-amber-500 leading-none text-[#3C3535]  relative -z-10">
                <p className="report overflow-hidden">Report</p>
                <p className="a">a</p>
                <p className="problem text-[#D3001C] ">Problem</p>
              </div>
              <div className="flex">
                <div className="flex justify-end items-end">
                  <p className=" font-urbanist text-[34px] overflow-hidden bg-blue-600  h-auto min-w-90 w-90 text-[#3C3535] ddesc ">
                    Submit a report to us and we will provide cleanup and
                    restoration services from your LGU
                  </p>
                </div>
                <div className="flex justify-end items-end bg-red-500 w-40">
                  <p className="text-[10px] [writing-mode:vertical-lr] font-urbanist">
                    “the sea can both produce and destroy life”
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end flex-1 ">
              <div className="flex flex-1 justify-between items-start">
                <div className="flex  text-[12px] font-poppins gap-16 font-[300]">
                  <p className="submitrep overflow-hidden w-40 leading-none">
                    Help Sorsogon by keeping you coastal areas safe and clean
                    for local tourism and local livelihood
                  </p>
                  <p className="submitrep2 overflow-hidden w-40 leading-none ">
                    Serve yourself and others by keeping Sorsogon's coasts clean
                    and safe
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="bttn text-white flex bg-[#0F1E59] cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0F1E59] active:opacity-80 active:scale-95 active:brightness-110 border-2 border-[#0F1E59] px-4 py-2 justify-center items-center gap-4 w-55 h-13 "
                  >
                    <span className="font-poppins text-[20px]">Report</span>
                    <svg
                      width="42"
                      height="8"
                      viewBox="0 0 42 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41.3536 4.03556C41.5488 3.8403 41.5488 3.52372 41.3536 3.32845L38.1716 0.146473C37.9763 -0.0487892 37.6597 -0.0487892 37.4645 0.146473C37.2692 0.341735 37.2692 0.658318 37.4645 0.85358L40.2929 3.68201L37.4645 6.51043C37.2692 6.7057 37.2692 7.02228 37.4645 7.21754C37.6597 7.4128 37.9763 7.4128 38.1716 7.21754L41.3536 4.03556ZM0 3.68201L0 4.18201L41 4.18201V3.68201V3.18201L0 3.18201L0 3.68201Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <ReportModal isOpen={isOpen} onClose={() => setOpen(false)} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about part 2 end */}

        {/* for mobile to tablet about section 2 */}
        <section className="block lg:hidden">
          <div className="h-screen p-[20px] flex flex-col font-poppins">
            <div className=" flex-1">
              <div className=" text-[10px] md:text-[14px] h-10 grid grid-cols-2">
                <p>Improper Waste Management</p>
                <p>Coral Reef Destruction</p>
              </div>
              <div className="flex justify-end items-center h-auto">
                <p className="text-[10px] md:text-[14px] [writing-mode:vertical-lr]">
                  "the sea can both produce and destroy life"
                </p>
              </div>
              <div className="leading-none mobtitle text-[64px] md:text-[100px] text-[#3C3535] [text-trim-none] ">
                <p>Report</p>
                <p>your</p>
                <p className="text-[#D3001C]">Problem</p>
              </div>
            </div>
            <div className=" flex-1 flex flex-col ">
              <article className="flex justify-center items-center flex-1">
                <p className="font-[300] text-balance text-[20px] md:text-[30px]">
                  Submit a report to us and we will provide cleanup and
                  restoration services from your LGU
                </p>
              </article>
              <div className="flex justify-end items-center mb-10">
                <button
                  className="flex justify-center items-center gap-4 bg-[#0F1E59] font-poppins text-24 px-8 py-3  text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#0F1E59] active:opacity-80 active:scale-95 active:brightness-110 "
                  onClick={() => setOpen(true)}
                >
                  Report
                  <svg
                    width="42"
                    height="8"
                    viewBox="0 0 42 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.3536 4.03556C41.5488 3.8403 41.5488 3.52372 41.3536 3.32845L38.1716 0.146473C37.9763 -0.0487892 37.6597 -0.0487892 37.4645 0.146473C37.2692 0.341735 37.2692 0.658318 37.4645 0.85358L40.2929 3.68201L37.4645 6.51043C37.2692 6.7057 37.2692 7.02228 37.4645 7.21754C37.6597 7.4128 37.9763 7.4128 38.1716 7.21754L41.3536 4.03556ZM0 3.68201L0 4.18201L41 4.18201V3.68201V3.18201L0 3.18201L0 3.68201Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <ReportModal isOpen={isOpen} onClose={() => setOpen(false)} />
              </div>
              <div className="grid text-[10px] md:text-[14px] grid-cols-2  ">
                <p>Livestock Littering</p>
                <p>Coastal Landslides</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-screen bg-[#000000]">
          <div className=" w-[20rem] h-[20rem] absolute"></div>
          <div className="bg-red-500 w-[20rem] h-[20rem] absolute right"></div>
        </div>
        <div className="h-screen bg-[#ffffff] flex justify-center items-center"></div>
        <div className="h-screen bg-[#000000]  flex justify-center items-center text-white ">
          {/* <svg
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
          </svg> */}
        </div>
      </div>
    </ReactLenis>
  );
}
