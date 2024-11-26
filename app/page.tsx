'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
  const images = ['/point.jpg', '/fly.jpg', '/sol.jpg'];
  const endBannerImage = '/go-to-sol.jpg';
  const bannerImage = '/door.jpg';

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle, rgba(31,70,161,1) 0%, rgba(0,18,38,1) 100%)',
      }}
    >
      <div className="fixed top-0 left-0 w-full h-20 flex justify-start gap-4 px-8 md:px-24 py-10 z-50">
        <Link
          href="https://twitter.com/jellysolanaa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-300"
        >
          <MagicButton>
            <XIcon className="w-6 h-6" />
          </MagicButton>
        </Link>

        <Link
          href="https://t.me/jellyportal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-300"
        >
          <MagicButton>
            <TelegramIcon className="w-6 h-6" />
          </MagicButton>
        </Link>

        <Link
          href="https://dexscreener.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-300"
        >
          <MagicButton>
            <DexIcon className="w-6 h-6" />
          </MagicButton>
        </Link>
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
            <Image
              src="/floating.png"
              alt="Jelly Character"
              className="w-full h-full object-contain scale-125"
              layout="fill"
              objectFit="cover"
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
          <div className="px-5 md:px-20">
            <motion.div
              className="relative w-full h-72 md:h-[400px] mb-8 overflow-hidden rounded-[12px]"
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
                className="transition-transform duration-300 hover:scale-110 rounded-[12px]"
              />
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-[12px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                    <Image
                      src={src}
                      alt={`Jelly image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110 rounded-[12px]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Banner Image */}
            <motion.div
              className="relative w-full h-72 md:h-[400px] mt-8 overflow-hidden rounded-[12px]"
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
