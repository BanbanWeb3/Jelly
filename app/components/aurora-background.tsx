"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full items-center justify-center bg-slate-900 text-slate-50 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora:repeating-linear-gradient(100deg,var(--tw-colors-blue-500)_10%,var(--tw-colors-indigo-300)_15%,var(--tw-colors-blue-300)_20%,var(--tw-colors-violet-200)_25%,var(--tw-colors-blue-400)_30%)]
            [background-image:var(--aurora)]
            [background-size:300%_300%]
            [background-position:50%_50%]
            filter blur-[50px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)]
            after:[background-size:200%_200%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-30`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};

