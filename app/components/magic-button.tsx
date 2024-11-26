"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MagicButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      className={cn(
        "relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold overflow-hidden",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div className="relative z-10">{children}</motion.div>
    </motion.button>
  );
}

