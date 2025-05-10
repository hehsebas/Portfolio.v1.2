"use client";
import Image from "next/image";
import MotionTransition2 from "./transition-components";
import DelayedVisibility from "./visibility";
function CircleImage() {

    return (
        <div>
            <DelayedVisibility>
                <MotionTransition2
                    position="right"
                    className="bottom-0 right-0 hidden md:inline-block md:absolute"
                >
                    <div className="bottom-0 right-0">
                        <Image
                            src="/circles.png"
                            width={200}
                            height={200}
                            alt="Circle"
                            className="w-full h-full"
                        />
                    </div>
                </MotionTransition2>
            </DelayedVisibility>
        </div>
    );
}
export default CircleImage;
