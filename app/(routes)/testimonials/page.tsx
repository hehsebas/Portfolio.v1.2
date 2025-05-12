"use client";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import MotionTransition from "@/components/transition-components";
import DelayedVisibility from "@/components/visibility";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "@/data";
function TestimonialsPage() {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <DelayedVisibility>
          <MotionTransition position="top">
            <div className="flex flex-col justify-center">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Some testimonials from my clients.
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                        <Swiper 
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                        }}
                        freeMode={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Autoplay, Pagination]}
                        className="h-[540px] md:h-[400px] w-[270px] md:w-[550px]"
                    >
                        {dataTestimonials.map(({id,name,description, imageUrl})=>(
                            <SwiperSlide key={id} >
                                <Image src={imageUrl} alt={name} width={200} height={200} className="mt-10 md:mt-0 mx-auto rounded-full"/>
                                <h4 className="text-center mt-10">
                                    {name}
                                </h4>
                                <p className="mt-5 text-center">
                                    {description}
                                </p>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>

                </div>
            </div>
          </MotionTransition>
        </DelayedVisibility>
      </ContainerPage>
    </>
  );
}
export default TestimonialsPage;
