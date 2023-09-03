import React from "react";
import { motion } from "framer-motion";
import { SplashText } from "./SplashText";

// exporting unit test-id for Jest test run
export const SPLASH_TEST_ID = "SPLASH_TEST_ID";
export const SPLASHTEXT_TEST_ID = "SPLASHTEXT_TEST_ID";

export const Splash = () => {
  return (
    <motion.div
      data-testid={SPLASH_TEST_ID}
      animate={{
        height: 0,
        transition: { duration: 0.5, delay: 1.5 },
      }}
      className="absolute top-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden bg-black"
    >
      <div data-testid={SPLASHTEXT_TEST_ID}>
        <SplashText />
      </div>
    </motion.div>
  );
};
