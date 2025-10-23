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
            <div className="service-icon-container">
              <div className="service-icon">
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
