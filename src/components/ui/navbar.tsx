// components/ui/Navbar.tsx
"use client";

import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white">
      <Link href="/" className={`${geistSans.className} ${geistMono.className} text-xl text-green-800 font-bold font-[family-name:var(--font-geist-sans)]`}>
        FootGPT ⚽
      </Link>

      <div className="space-x-2">
        <Link href="/auth/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/auth/signup">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </header>
  );
}
