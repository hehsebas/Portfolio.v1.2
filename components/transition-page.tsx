"use client";
import { transitionVariantsPage } from "@/utils/motion.transitions";
import { AnimatePresence, motion } from "motion/react";   
function TransitionPage(){
    return(
        <AnimatePresence mode="wait" >
            <div>
                <motion.div
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-black/10 backdrop-blur-sm"
                    transition= {{delay: 0.5, duration: 1.5, ease:"easeInOut"}}
                >
                    {/* Your content goes here */}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
export default TransitionPage;