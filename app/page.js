"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideMenu from "./components/SideMenu";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    <div className="font-germania min-h-screen flex flex-col">
      <header className="bg-[#671835] text-[#FFF7EB] px-6 py-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-germania text-5xl md:text-5xl">Angel</h1>
            <h1 className="font-germania text-5xl md:text-5xl">Slice</h1>
          </div>
          <Link href="/cart" className="cursor-pointer hover:opacity-80 transition-opacity mr-4 md:mr-8">
            <Image
              src="/checkout.png"
              alt="Shopping cart"
              width={32}
              height={32}
              className="w-10 h-10 md:w-10 md:h-10"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pizza_homepage.jpg"
            alt="Delicious pizza background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#671835]/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] px-6 text-center">
          <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold text-[#FFF7EB] mb-8 md:mb-12 drop-shadow-lg leading-tight">
            Hot and Fresh
            <br />
            Pizza in an
            <br />
            Instant!
          </h1>
        </div>
      </main>

      <section className="font-outfit bg-[#FFF7EB] py-12 md:py-16 flex items-center justify-center">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="bg-[#671835] hover:bg-[#55112A] text-[#FFF7EB] font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl transition-all hover:scale-105 flex items-center gap-3 shadow-xl"
        >
          Order Delivery
          <svg
            className="w-6 h-6 text-[#FFF7EB]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </section>

    </div>
    </>
    );
}
