import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google"
import "./globals.css";

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Jelly",
  description: "Welcome to the world of Jelly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${permanentMarker.className}`}>
      <body className={`dark ${permanentMarker.className}`}>{children}</body>
    </html>
  );
}

