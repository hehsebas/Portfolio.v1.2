"use client";
import SlideServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import CircleImage from "@/components/circle-bg";
import MotionTransition1 from "@/components/transition-components";
import DelayedVisibility from "@/components/visibility";
import Link from "next/link";
function ServicesPage() {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <ContainerPage>
        <DelayedVisibility>
          <MotionTransition1 position="top">
            <div className="text-center max-w-5xl gap-6 mx-auto ">
              <h1 className="text-2xl text-center text-slate-300 font-bold md:text-4-xl ">
                My Services.
              </h1>
              <p className="mb-3 text-xl text-slate-300 md:text-2xl mt-10">
                I offer a range of services to help you achieve your goals.
                Whether you need assistance with web development, design, or
                digital marketing, I am here to help.
                <br/><br/> My services include:
              </p>
              <div>
                <SlideServices />
              </div>
              <Link href="https://www.linkedin.com/in/sebasti%C3%A1n-r-521163106/">
                <button className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-blue-700 text-white-100 font-bold text-xl mt-10 transition duration-300 ease-in-out border-2 cursor-pointer border-blue-600/50">
                  ¡Contact me!
                </button>
              </Link>
            </div>

          </MotionTransition1>
        </DelayedVisibility>
      </ContainerPage>
    </>
  );
}
export default ServicesPage;
