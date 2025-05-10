"use client";
import { serviceData } from "@/data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
function SlideServices() {
  return (
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
      }}
      modules={[Autoplay, Pagination]}
      className="h-[280px] md:h-[380px] w-[270px] md:w-[550px] "
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" flex px-6 py-8 h-auto mt-10 md:h-[290px] rounded-lg cursor-pointer bg-transparent sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-blue-600/10 transition-all duration-300 hover:border-blue-600 border-2 border-gray-700 ">
            <div className="text-4xl text-white-600">{item.icon}</div>
            <div>
                <h3 className="mb-4 mt-4 text-lg text-left font-bold">
                    {item.title}
                    <p className="text-sm font-normal">
                        {item.description}
                    </p>
                </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default SlideServices;
