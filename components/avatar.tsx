"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MotionTransition2 from "./transition-components";
import DelayedVisibility from "./visibility";
function Avatar() {
  return (
    <div>
      <DelayedVisibility>
        <MotionTransition2
          position="right"
          className="bottom-0 right-0 hidden md:inline-block md:absolute"
        >
          <Image
            src="/avatar-1.png"
            width={300}
            height={300}
            alt="Avatar"
            className="w-full h-full"
          />
        </MotionTransition2>
      </DelayedVisibility>
    </div>
  );
}
export default Avatar;
