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
          <Link href="/" className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Angel Slice logo"
              width={100}
              height={100}
              className="w-24 h-24"
            />
            <div>
              <h1 className="font-germania text-5xl md:text-5xl">Angel</h1>
              <h1 className="font-germania text-5xl md:text-5xl">Slice</h1>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <button 
            onClick={() => setIsMenuOpen(true)}
            className="font-outfit bg-[#FFF7EB] hover:opacity-85 text-[#671835] font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl transition-all hover:scale-105 flex items-center gap-3 shadow-xl"
            >
              Order Delivery
              <svg
                className="w-6 h-6 text-[#671835]"
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

      

        <section className="bg-[#FFF7EB] py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-bold text-[#671835] mb-12 text-center md:text-left">
              Weekly Deals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Weekly Deal 1 */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-64 md:h-72">
                  <Image
                    src="/pizza_deal_1.jpg"
                    alt="Friday pizza deal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#671835]/40"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h3 className="font-outfit text-6xl md:text-7xl font-bold text-[#FFF7EB] drop-shadow-lg">
                      10.99 Pizzas
                    </h3>
                    <p className="font-outfit text-5xl md:text-6xl font-bold text-[#FFF7EB] drop-shadow-lg">
                      on Fridays
                    </p>
                  </div>
                </div>

                <div className="bg-[#A45471] p-6 flex justify-between items-center">
                  <p className="font-outfit text-1xl md:text-1xl text-[#FFF7EB] max-w-[60%]">
                    Only available at select locations. May include extra charges for toppings and crust choices.
                  </p>
                  <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="bg-[#671835] hover:bg-[#4d1228] text-[#FFF7EB] font-outfit font-semibold px-8 py-4 rounded-full text-2xl transition-all hover:scale-105">
                    REDEEM NOW
                  </button>
                </div>
              </div>

              {/* Weekly Deal 2 */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-64 md:h-72">
                  <Image
                    src="/pizza_deal_2.webp"
                    alt="Friday pizza deal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#671835]/40"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h3 className="font-outfit text-6xl md:text-7xl font-bold text-[#FFF7EB] drop-shadow-lg">
                      BOGO Sides
                    </h3>
                    <p className="font-outfit text-5xl md:text-6xl font-bold text-[#FFF7EB] drop-shadow-lg">
                      on Tuesdays
                    </p>
                  </div>
                </div>

                <div className="bg-[#A45471] p-6 flex justify-between items-center">
                  <p className="font-outfit text-1xl md:text-1xl text-[#FFF7EB] max-w-[60%]">
                    Only available at select locations. May include extra charges for toppings and crust choices.
                  </p>
                  <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="bg-[#671835] hover:bg-[#4d1228] text-[#FFF7EB] font-outfit font-semibold px-8 py-4 rounded-full text-2xl transition-all hover:scale-105">
                    REDEEM NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
    </>
    );
}
