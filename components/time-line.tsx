"use client";
import { dataAboutPage } from "@/data";
import { data } from "autoprefixer";
import React, {useEffect} from "react";
import MotionTransition from "./transition-components";

function TimeLane() {
    const [isVisible, setIsVisible] = React.useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer); 
    }, []);
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            {isVisible && (
            <MotionTransition position="top">
                <div className="w-full text-center mt-5max-w-3xl mx-auto md:pb-40 md:pt-20">
                    <div className="-my-6">
                        {dataAboutPage.map((data) => (
                            <div key={data.id} className="ml-10 relative py-6 pl-8 sm:pl-32 group md:ml-24">
                                <div className="flex flex-col sm:flex-row items-start mb-1 
                                            group-last:before:hidden before:absolute 
                                            before:left-2 sm:before:left-0 before:h-full
                                            before:px-px before:bg-gray-600 sm:before:ml-[12.5rem] 
                                            before:self-start before:-translate-x-1/2 
                                            before:translate-y-3 after:absolute after:left-2 
                                            sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 
                                            after:border-4 after:box-content after:border-white-300 
                                            after:rounded-full sm:after:ml-[12.5rem] after:-translate-x-1/2 
                                            after:translate-y-1.5">
                                                <time className="sm:absolute left-5 translate-y-0.5 inline-flex items-center 
                                                justify-center text-xs font-bold uppercase w-20 h-8 mb-3 sm:mb-0 
                                                text-gray-600 bg-blue-200 rounded-full "> 
                                                    {data.date}
                                                </time>

                                </div>
                                <h3 className="mb-1 text-2xl font-bold sm:mb-0">
                                    {data.title}
                                </h3>
                                <p className="text-xl font-bold text-slate-400 ">
                                    {data.subtitle}
                                </p>
                                <p className="whitespace-pre-line sm:ml-24 md:ml-24 text-left text-slate-400">
                                  {data.description}  
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
                </MotionTransition>
            )}
            </div>
    );
}
export default TimeLane;