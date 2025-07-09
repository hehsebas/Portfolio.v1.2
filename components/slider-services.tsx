"use client";
import { serviceData } from "@/data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

function SlideServices() {
  return (
    <div className="flex flex-col items-center">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-auto min-h-[320px] md:min-h-[420px] w-[270px] md:w-[550px] mb-8 swiper-services"
        style={{
          '--swiper-pagination-color': '#3b82f6',
          '--swiper-pagination-bullet-inactive-color': '#6b7280',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
        } as React.CSSProperties}
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex px-6 py-8 mt-10 h-auto rounded-lg cursor-pointer bg-transparent sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-blue-600/10 transition-all duration-300 hover:border-blue-600 border-2 border-gray-700 mb-4">
              <div className="text-4xl text-white-600 flex justify-center items-center">{item.icon}</div>
              <div className="flex-1 min-w-0">
                  <h3 className="mb-4 mt-4 text-lg text-left font-bold">
                      {item.title}
                  </h3>
                  <p className="text-sm font-normal text-left leading-relaxed">
                      {item.description}
                  </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SlideServices;
