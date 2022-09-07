import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Curtain = ({ children }) => {

  return (
    <AnimatePresence mode="wait"  initial={false}>
      <motion.div
      key={children}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { Curtain };
