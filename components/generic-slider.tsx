"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css/pagination";
import { ReactNode } from "react";

interface GenericSliderProps {
  children: ReactNode[];
  breakpoints?: {
    [key: number]: {
      slidesPerView: number | 'auto';
      spaceBetween: number;
    };
  };
  autoplayDelay?: number;
}

function GenericSlider({ children, breakpoints, autoplayDelay = 3500 }: GenericSliderProps) {
  const defaultBreakpoints = {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  return (
    <div className="flex flex-col items-center w-full overflow-visible px-4 md:px-0">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={15}
        breakpoints={breakpoints || defaultBreakpoints}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="swiper-services"
      >
        {children}
      </Swiper>
    </div>
  );
}

export default GenericSlider;

