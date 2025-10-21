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
        size,
        sauce,
        toppings,
        sides
    };
    console.log("Added to cart:", orderItem);
  };

  return (
      <div className="root font-germania min-h-screen flex flex-col">
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

          <main>
              {/* Title + Quantity */}
              <div className="flex-1 flex flex-wrap items-start p-8 md:p-16 mb-0">
                  <h1 className="text-6xl font-outfit font-bold m-0 leading-tight">Build Your Pizza</h1>
                  <div
                      className="flex items-center gap-12 border border-gray-300 rounded-2xl px-12 py-3 bg-white shadow-sm ml-auto">
                      <span className="text-2xl text-center font-medium">Quantity</span>
                      <button onClick={handleDecrease}
                              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-[#671835] hover:text-[#FFF7EB]">-
                      </button>
                      <span className="text-xl text-center font-medium ">[{quantity}]</span>
                      <button onClick={handleIncrease}
                              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-[#671835] hover:text-[#FFF7EB]">+
                      </button>
                  </div>
              </div>
              <div className="pl-0 md:pl-16 mt-0">
                  <div className="w-24 h-1 bg-[#671835] mb-0"></div>
              </div>
              <div className=" flex-col flex-wrap items-start md:p-16 gap-12">

                  {/* Size Selection */}
                  <h1 className="text-4xl">SIZE</h1>
                  <div className="flex items-center gap-12 mt-6 mb-16">
                      {sizes.map((s, index) => (
                          <button key={s} onClick={() => setSize(s)} title={sizeMeaning[index]}
                              className={`text-2xl px-6 py-3 rounded-lg transition ${size === s 
                                  ? "bg-[#671835] text-[#FFF7EB]"
                                  : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`}>{s}
                          </button>
                      ))}
                  </div>

                  {/* Sauce Selection */}
                  <h1 className="text-4xl">SAUCE</h1>
                  <div className="flex items-center gap-12 mt-6 mb-16">
                      {sauces.map((s, index) => (
                            <button key={s} onClick={() => setSauce(s)} title={sauceMeaning[index]}
                                    className={`flex flex-col items-center rounded-lg w-64  ${sauce === s 
                                        ? "bg-[#671835] text-[#FFF7EB]" 
                                        : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`} >
                                <span className="text-2xl font-medium w-full">{s}</span>
                                <Image
                                  src={`/${s.replace(/\s+/g, '')}.png`}
                                  alt={s}
                                  width={400}
                                  height={200}
                                  className="w-full h-auto "
                                />
                            </button>
                      ))}
                  </div>

                  {/* Toppings Selection */}
                  <h1 className="text-4xl">TOPPINGS</h1>
                  <div className="flex items-center gap-12 mt-6">
                       {toppingsOpt.slice(0, 4).map((t, index) => (
                           <button key={t} onClick={() => handleToppingToggle(t)} title={toppingsMeaning[index]}
                                   className={`text-2xl px-6 py-3 rounded-lg transition ${toppings.includes(t) 
                                       ? "bg-[#671835] text-[#FFF7EB]" 
                                       : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`}>{t}
                           </button>
                       ))}
                  </div>
                  <div className="flex items-center gap-12 mt-6 mb-16">
                      {toppingsOpt.slice(4).map((t, index) => (
                          <button key={t} onClick={() => handleToppingToggle(t)} title={toppingsMeaning[index+4]}
                              className={`text-2xl px-6 py-3 rounded-lg transition ${toppings.includes(t) 
                                  ? "bg-[#671835] text-[#FFF7EB]" 
                                  : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`}>{t}
                          </button>
                      ))}
                  </div>

                  {/* Sides Selection */}
                  <h1 className="text-4xl">SIDES</h1>
                  <div className="flex items-center gap-12 mt-6 mb-0">
                      {sides.map((s, index) => (
                          <button key={s} onClick={() => setSide(s)} title={sidesMeaning[index]}
                                  className={`text-2xl px-6 py-3 rounded-lg transition ${side === s 
                                      ? "bg-[#671835] text-[#FFF7EB]" 
                                      : "bg-gray-200 hover:bg-[#671835] hover:text-[#FFF7EB]"}`}>{s}
                          </button>
                      ))}
                  </div>
              </div>

              <div className="justify-center flex mb-16">
                  <Link href="/cart" passHref>
                  <button className="bg-[#671835] hover:bg-[#55112A] text-[#FFF7EB] md:text-4xl font-bold shadow-xl md:p-16
                      md:py-5 rounded-full transition-all hover:scale-105 items-center ">Add to Cart
                  </button></Link>
              </div>

          </main>
      </div>
  );
}