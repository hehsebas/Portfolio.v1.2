"use client";
import { serviceData } from "@/data";
import GenericSlider from "./generic-slider";
import { SwiperSlide } from "swiper/react";

function SlideServices() {
  return (
    <GenericSlider autoplayDelay={3500}>
      {serviceData.map((item, index) => (
        <SwiperSlide key={index} className="h-auto">
          <div className="service-card">
            <div className="service-icon-container !w-full h-[4rem] !bg-transparent">
              <div className="service-icon !bg-[#2563eb1a] p-4 !rounded-2xl">
                {item.icon}
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-title">
                {item.title}
              </h3>
              <p className="service-description">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </GenericSlider>
  );
}

export default SlideServices;
