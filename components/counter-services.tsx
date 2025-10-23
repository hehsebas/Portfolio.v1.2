"use client";
import CountUp from "react-countup";
import { dataCounter } from "@/data";
import MotionTransition from "./transition-components";
import DelayedVisibility from "./visibility";
function CounterServices() {

  return (
    <div>
      <DelayedVisibility>
        <MotionTransition position="top">
          <div className="grid max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6 justify-items-center">
            {dataCounter.map(
              ({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`${lineRight && "ltr"}`}>
                  <div
                    className={`${lineRight &&
                      "border-2 border-transparent text-center"
                      } ${lineRightMobile}`}
                  >
                    <p className="flex mb-2 text-4-xl md:text-4xl text-blue-600/90 font-extrabold justify-center ">
                      + <CountUp end={endCounter} delay={1.5} duration={5} />
                    </p>
                    <p className="text-m uppercase max-w-[100px]">{text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </MotionTransition>
      </DelayedVisibility>
    </div>
  );
}
export default CounterServices;
