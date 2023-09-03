import React from "react";
import { motion } from "framer-motion";

export const SplashText = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { duration: 0.5, delay: 1 },
      }}
      className="flex flex-col items-center justify-center text-white"
    >
      <img src="/splash.png" alt="codematic" />
      <h1 className="xl:text-8xl 2xl:text-[140px] lg:text-7xl md:text-6xl text-[50px] font-semibold">
        Quizzer
      </h1>
    </motion.div>
  );
};
