'use client';

import { motion } from 'framer-motion';
import { VortexBackground } from '@/components/vortext-background';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import XIcon from '@/icons/twitter-x.svg';
import DexIcon from '@/icons/dex.svg';
import TelegramIcon from '@/icons/telegram.svg';

const MagicButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.button
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl',
          className
        )}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default function LandingPage() {
  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.19.30.jpg-HwlwvoYqXYY3mzA9UFpWI311YIKo8o.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.32.jpg-IrrSCpnNkzirRFUikESb1PhEkhFdDK.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.29.jpg-ypnDgqrtD9mjY2VzDFDbzPDVugcm03.jpeg',
    // 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.44.jpg-CU4b5Nxhf1aR66vjKYIsyQpI6wjOqh.jpeg',
  ];

  const bannerImage =
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.46.jpg-s5GXXFaOKPKACYlK0foh3qXkDtCjJy.jpeg';
  const endBannerImage =
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26%2018.20.40.jpg-BSf9uDpF2Bayhs4529RdfFv8px8y5E.jpeg';

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle, rgba(31,70,161,1) 0%, rgba(0,18,38,1) 100%)',
      }}
    >
      <div className="fixed top-0 left-0 w-full h-20 flex justify-start gap-4 p-10 z-50">
        <MagicButton className="bg-white">
          <XIcon className="w-10 h-10" />
        </MagicButton>
        <MagicButton>
          <DexIcon className="w-10 h-10" />
        </MagicButton>
        <MagicButton className="bg-white">
          <TelegramIcon className="w-10 h-10" />
        </MagicButton>
      </div>
      {/* Vortex effect */}
      <VortexBackground />

      {/* Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center">
          {/* Floating Jelly Character */}
          <motion.div
            className="w-64 h-64 scale-125"
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-11-26_18.20.32-removebg-preview%20(1)-ROpJBvv2aB0W9jr8d5364gD05LvH7t.png"
              alt="Jelly Character"
              className="w-full h-full object-contain scale-125"
            />
          </motion.div>
          <motion.h1
            className="text-8xl md:text-[12rem] mb-12 font-lobster text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jelly
          </motion.h1>
          <motion.h1
            className="text-3xl mb-12 font-lobster text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            0x000000
          </motion.h1>
        </section>

        {/* Image Grid Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            {/* <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-lobster"
              style={{
                textShadow: "0 0 5px #1E40AF, 0 0 10px #1E40AF, 0 0 15px #1E40AF"
              }}
            >
              Jelly Gallery
            </h2> */}

            {/* Banner Image */}
            <motion.div
              className="relative w-full h-48 md:h-64 mb-8 overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={bannerImage}
                alt="Jelly in a magical night scene"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110 rounded-lg"
              />
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={src}
                    alt={`Jelly image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110 rounded-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* Banner Image */}
            <motion.div
              className="relative w-full h-48 md:h-64 mt-8 overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={endBannerImage}
                alt="Jelly in a magical night scene"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
