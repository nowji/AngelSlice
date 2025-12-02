"use client";
import Link from "next/link";
import Image from "next/image"

import { useState } from "react";

export default function Order() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [sauce, setSauce] = useState("");
  const [toppings, setToppings] = useState([]);
  const [side, setSide] = useState("None"); // default selection

  const sizes = ['Small - 10"', 'Medium - 12"', 'Large - 14"', 'XLarge - 16"'];
  const sizeMeaning = ['Standby', 'Threat', 'Urgent', 'Extremely Urgent'];

  const sauces = ['Classic Red', 'Alfredo', 'BBQ'];
  const sauceMeaning = ['No Lights/Sirens', 'Ambulance Needed', 'Full Lights/Sirens'];

  const toppingsOpt = ['Pepperoni', 'Sausage', 'Chicken', 'Bacon', 'Mushrooms', 'Green Peppers', 'Onions'];
  const toppingsMeaning = ['Unarmed', 'Gun', 'Knife', 'Other Weapon', 'Physical Abuse', 'Sexual Assault',
      'Emotional Manipulation'];

  const sides = ['None', 'Small Tater Tots', 'Large Tater Tots'];
  const sidesMeaning = ['No Children Involved', 'One Child Involved', 'Multiple Children Involved'];

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Prevents going below 1
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleToppingToggle = (topping) => {
    setToppings((prevToppings) => prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping) : [...prevToppings, topping]);
  };

  const handleAddToCart = () => {
    const orderItem = {
        quantity,
        size,
        sauce,
        toppings,
        side
    };
    localStorage.setItem('cart', JSON.stringify([orderItem]));
  };

  return (
      <div className="root font-germania min-h-screen flex flex-col">
          <header className="bg-[#671835] text-[#FFF7EB] px-4 py-3">
              <div className="flex items-center justify-between gap-4">

                  <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                      <Image
                          src="/logo.png"
                          alt="Angel Slice logo"
                          width={100}
                          height={100}
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                      />

                      <div>
                          <h1 className="font-germania text-3xl sm:text-4xl md:text-5xl">Angel</h1>
                          <h1 className="font-germania text-3xl sm:text-4xl md:text-5xl">Slice</h1>
                      </div>
                  </Link>

                  <Link href="/cart" className="hover:opacity-80 transition-opacity mr-2">
                      <Image
                          src="/checkout.png"
                          alt="Shopping cart"
                          width={32}
                          height={32}
                          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                      />
                  </Link>

              </div>
          </header>

          <main>
              {/* Title + Quantity */}
              <div className="flex-1 flex flex-col md:flex-row items-start p-4 sm:p-6 md:p-12 gap-6">

                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-outfit font-bold leading-tight">
                      Build Your Pizza
                  </h1>
                  {/* info icon */}
                  <div className="group relative">
                    <div className="w-6 h-6 rounded-full border-2 border-[#671835] text-[#671835] flex items-center justify-center font-serif font-bold hover:bg-[#671835] hover:text-[#FFFFFF] transition-colors">
                        i
                    </div>
                          
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-48 bg-gray-200 text-black text-xs font-outfit px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        Hover over each option for more details.
                    </div>
                  </div>


                  <div className="flex items-center gap-4 sm:gap-8 md:gap-12 border border-gray-300 rounded-2xl
                        px-4 sm:px-6 md:px-12 py-2 sm:py-3 bg-white shadow-sm self-start md:ml-auto">

                      <span title="Number of Perpetrators" className="text-xl sm:text-2xl font-outfit font-medium">Quantity</span>

                      <button onClick={handleDecrease}
                              className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 rounded-lg hover:bg-[#671835] hover:text-[#FFF7EB]">
                          -
                      </button>

                      <span className="text-lg sm:text-xl font-outfit font-medium">[{quantity}]</span>

                      <button onClick={handleIncrease}
                              className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 rounded-lg hover:bg-[#671835] hover:text-[#FFF7EB]">
                          +
                      </button>

                  </div>
              </div>
              <div className="pl-4 sm:pl-8 md:pl-16 mt-0">
                  <div className="w-24 h-1 bg-[#671835] mb-0"></div>
              </div>

              {/* MAIN WRAPPER FOR SELECTIONS*/}
              <div className=" flex-col flex-wrap items-start px-4 sm:px-6 md:px-16 mt-0 gap-12">

                  {/* Size Selection */}
                  <h1 className="font-outfit text-4xl text-[#671835] mt-6" title="Severity">
                      SIZE
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-12 mt-6 mb-16">
                      {sizes.map((s, index) => (
                          <button
                              key={s}
                              onClick={() => setSize(s)}
                              title={sizeMeaning[index]}
                              className={`font-outfit text-2xl px-6 py-3 rounded-lg transition ${size === s
                                  ? "bg-[#671835] text-[#FFF7EB]"
                                  : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}
                                  `}>{s}
                          </button>
                      ))}
                  </div>

                  {/* Sauce Selection */}
                  <h1 className="font-outfit text-4xl text-[#671835] mt-6" title="Emergency Discretion">
                      SAUCE
                  </h1>

                  <div className="flex flex-wrap items-start gap-4 sm:gap-6 md:gap-12 mt-6 mb-16">

                      {sauces.map((s, index) => (
                          <button
                              key={s}
                              onClick={() => setSauce(s)}
                              title={sauceMeaning[index]}
                              className={`flex flex-col items-center rounded-lg w-40 sm:w-52 md:w-64 bg-gray-200 
                                  hover:bg-[#671835] hover:text-[#FFF7EB] transition ${sauce === s 
                                  ? "bg-[#671835] text-[#FFF7EB]" : ""}
                                  `}>
                        <span className="font-outfit text-2xl font-medium w-full">{s}</span>

                              <Image
                                  src={`/${s.replace(/\s+/g, '')}.png`}
                                  alt={s}
                                  width={400}
                                  height={200}
                                  className="w-full h-auto"
                              />
                          </button>
                      ))}

                  </div>

                  {/* Toppings Selection */}
                  <h1 className="font-outfit text-4xl text-[#671835] mt-6" title="Weapons">TOPPINGS</h1>
                  <div className="flex flex-wrap font-outfit items-center gap-4 sm:gap-6 md:gap-12 mt-6">
                      {toppingsOpt.slice(0, 4).map((t, index) => (
                          <button key={t} onClick={() => handleToppingToggle(t)} title={toppingsMeaning[index]}
                                  className={`font-outfit text-2xl px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition 
                                  ${toppings.includes(t)
                                      ? "bg-[#671835] text-[#FFF7EB]"
                                      : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`}>{t}
                          </button>
                      ))}
                  </div>
                  <div className="flex flex-wrap font-outfit items-center gap-4 sm:gap-6 md:gap-12 mt-6 mb-16">
                      {toppingsOpt.slice(4).map((t, index) => (
                          <button key={t} onClick={() => handleToppingToggle(t)} title={toppingsMeaning[index + 4]}
                                  className={`font-outfit text-2xl px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition whitespace-nowrap
                                  ${toppings.includes(t)
                                      ? "bg-[#671835] text-[#FFF7EB]"
                                      : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`}>{t}
                          </button>
                      ))}
                  </div>

                  {/* Sides Selection */}
                  <h1 className="font-outfit text-4xl text-[#671835] mt-6" title="Children Involvement">SIDES</h1>
                  <div className="flex flex-wrap font-outfit items-center gap-4 sm:gap-6 md:gap-12 mt-6 mb-0">
                      {sides.map((s, index) => (
                          <button key={s} onClick={() => setSide(s)} title={sidesMeaning[index]}
                                  className={`font-outfit text-2xl whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3 
                                  rounded-lg transition ${side === s 
                                      ? "bg-[#671835] text-[#FFF7EB]" 
                                      : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`}>{s}
                          </button>
                      ))}
                  </div>
              </div>

              <div className="justify-center flex mt-12 sm:mt-16 mb-16 px-4 sm:px-6 md:px-16">
                  <Link href="/cart" passHref>
                      <button onClick={handleAddToCart} className="bg-[#671835] hover:bg-[#55112A] text-[#FFF7EB]
                      md:text-4xl font-bold shadow-xl px-8 py-4 md:px-16 md:py-5 rounded-full transition-all
                      hover:scale-105 font-outfit cursor-pointer">Add to Cart
                      </button>
                  </Link>
              </div>

          </main>
      </div>
  );
}