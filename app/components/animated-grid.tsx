"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const items = [
    {
      title: "Magical Community",
      description: "Join thousands of believers in the power of memes",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.19.30.jpg-HwlwvoYqXYY3mzA9UFpWI311YIKo8o.jpeg"
    },
    {
      title: "Exclusive Rewards",
      description: "Earn magical tokens through community participation",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.32.jpg-IrrSCpnNkzirRFUikESb1PhEkhFdDK.jpeg"
    },
    {
      title: "Unique Artwork",
      description: "Access to exclusive magical NFT collections",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.29.jpg-ypnDgqrtD9mjY2VzDFDbzPDVugcm03.jpeg"
    },
    {
      title: "Join The Magic",
      description: "Be part of something truly special",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.44.jpg-CU4b5Nxhf1aR66vjKYIsyQpI6wjOqh.jpeg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group h-[400px] overflow-hidden rounded-xl"
          onHoverStart={() => setHoveredIndex(idx)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/50 z-10"
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          />
          <motion.img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 z-20 p-6 flex flex-col justify-end"
            variants={{
              initial: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

