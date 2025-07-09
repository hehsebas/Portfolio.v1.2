"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import MotionTransition from "./transition-components";
import MotionTransition2 from "./transition-component-home";
import Link from "next/link";
import DelayedVisibility from "./visibility";
function Introduction() {
  return (
    <div className="z-20 w-full min-h-screen bg-darkBg/60">
      <div className="z-20 grid items-center min-h-screen p-6 py-20 md:py-20 md:grid-cols-2">
        <DelayedVisibility>
          <MotionTransition position="bottom">
            <div className="mt-10 flex justify-center">
              <Image
                src="/dev2.gif"
                priority
                width="300"
                height="300"
                alt="Profile Picture"
              />
            </div>
          </MotionTransition>
        </DelayedVisibility>
        <DelayedVisibility>
          <MotionTransition2 position="right">
            <div className="flex flex-col justify-center mt-10">
              <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md-text-4xl md:mb-10">
                If u can imagine,
                <br />
                <TypeAnimation
                  sequence={[
                    "U can make it.",
                    2000,
                    "U can develop it.",
                    2000,
                    "U can optimize it.",
                    2000,
                    "U can program it.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="font-bold text-gray-400/100"
                />
              </h1>
              <p className="block mx-auto mb-2 text-m md:mx-0 md:mb-8 py-4 text-center md:text-left">
                I am a web developer with experience in creating modern and
                efficient web applications.
              </p>
              <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                <Link
                  href="/portfolio"
                  className="px-3 py-2 transition-all border-2 cursor-pointer  border-blue-600/50 text-md w-fit rounded-xl hover:shadow-md hover:shadow-blue-600/50"
                >
                  See projects
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sebasti%C3%A1n-r-521163106/"
                  className="inline-block px-3 py-2 transition-transform border-2 cursor-pointer border-blue-600/50 text-md rounded-xl bg-blue-600/50 hover:shadow-md hover:shadow-blue-600/50"
                >
                  Contact me
                </Link>

              </div>
            </div>
          </MotionTransition2>
        </DelayedVisibility>
      </div>
    </div>
  );
}
export default Introduction ;
