"use client";
import ph from "../../public/assets/rambg.png"
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';


const Photo = () => {
    return (
        <div className='w-full h-full relative flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
            className="relative flex items-center justify-center"
          >
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
              className="absolute flex items-center justify-center"
            >
              <Image
                src={ph}
                alt="Ram's Profile Picture"
                priority
                quality={100}
                className="object-contain rounded-full w-[298px] h-[298px] xl:w-[390px] xl:h-[390px]"
                 // Set these to match the circle size
                 // Set these to match the circle size
              />
            </motion.div>
      
            {/* Circle */}
            <motion.svg
              className="w-[355px] xl:w-[450px] h-[355px] xl:h-[450px]"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0 " }}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16,25,92,72", "4 250 22 22"],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      );
}

export default Photo;
