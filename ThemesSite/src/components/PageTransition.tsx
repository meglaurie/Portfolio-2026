// components/PageTransition.tsx
import { motion, type Transition } from "framer-motion";

const variants = {
  initial:  { x: "-100%", opacity: 0 },
  animate:  { x: 0, opacity: 1 },
  exit:     { x: "100%", opacity: 0 },
};

const transition: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 28,
};

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;