"use client";
import MotionTransition from "@/components/transition-components";
import DelayedVisibility from "@/components/visibility";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import GenericSlider from "@/components/generic-slider";
import PortfolioBox from "@/components/PortfolioBox";
import { dataPortfolio } from "@/data";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";

function PortfolioPage() {
  return (
    <div>
      <TransitionPage />
      <ContainerPage>
        <DelayedVisibility>
          <MotionTransition position="top">
            <div className="flex flex-col justify-center h-full text-center">
              <h1 className="text-2xl font-bold leading-tight text-center md:text-4xl md:mb-5">
                My projects and works.
              </h1>
              <div className="relative z-10 max-w-7xl mx-auto mt-8 w-full">
                <GenericSlider autoplayDelay={4000}>
                  {dataPortfolio.map((data) => (
                    <SwiperSlide key={data.id} className="h-auto">
                      <PortfolioBox data={data} />
                    </SwiperSlide>
                  ))}
                </GenericSlider>
              </div>
              <div className="flex justify-center">
                <Link href="https://github.com/hehsebas" target="_blank">
                  <button className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-blue-700 text-white-100 font-semibold text-xl transition duration-300 ease-in-out border-2 cursor-pointer border-blue-600/50">
                    See more projects
                  </button>
                </Link>
              </div>
            </div>
          </MotionTransition>
        </DelayedVisibility>
      </ContainerPage>
    </div>
  );
}
export default PortfolioPage;
