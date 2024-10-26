"use client";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedNumber = ({
  number,
  width,
  height,
  textSize,
}: {
  number: number;
  width?: number;
  height?: number;
  textSize?: string;
}) => (
  <div
    className={`relative h-${height ?? "10"} w-${width ?? "10"} bg-primary rounded-lg flex items-center justify-center overflow-hidden`}
  >
    <AnimatePresence mode="popLayout">
      <motion.span
        key={number}
        className={`absolute ${textSize ?? "text-xl"} font-bold text-primary-foreground`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        {number}
      </motion.span>
    </AnimatePresence>
  </div>
);

export default function CounterComponent(props: {
  number: number;
  width?: number;
  height?: number;
  textSize?: string;
}) {
  return (
    <div className="w-auto flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <AnimatedNumber {...props} />
      </div>
    </div>
  );
}
