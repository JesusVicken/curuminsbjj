"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SlideInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "left",
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default SlideIn;
