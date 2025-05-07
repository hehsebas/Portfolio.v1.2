"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MotionTransition2 from "./transition-components";
function Avatar() {
     const [isVisible, setIsVisible] = useState(false);
        useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer); 
        },[]);
    return (
        <div>

        {isVisible && (
            <MotionTransition2 position="right" className="bottom-0 right-20 hidden md:inline-block md:absolute">
                <Image src="/avatar-1.png" width={300} height={300} alt="Avatar" className="w-full h-full}"/>
            </MotionTransition2>
            )}
        </div>
    );
}
export default Avatar;