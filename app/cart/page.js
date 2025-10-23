"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            try {
                setCart(JSON.parse(cartData));
            } catch {
                setCart([]);
            }
        }
    }, []);

    const SIZE = {
        'Small - 10"': 10.99,
        'Medium - 12"': 12.99,
        'Large - 14"': 14.99,
        'XLarge - 16"': 16.99,
    };

    const SAUCE = { "Classic Red": 0, "Alfredo": 1.0, "BBQ": 0.75 };
    const SIDES = { None: 0, "Small Tater Tots": 3.49, "Large Tater Tots": 4.99 };

    const price = (item) => {
        const base = SIZE[item.size] ?? 0;
        const sauce = SAUCE[item.sauce] ?? 0;
        const topping = (item.toppings?.length ?? 0) * 1.00;
        const side = SIDES[item.side] ?? 0;
        const unit = +(base + sauce + topping + side).toFixed(2);
        const qty = item.quantity ?? 1;
        return +(unit * qty).toFixed(2);
    };

    const totals = useMemo(() => {
        const subtotal = cart.reduce((sum, it) => sum + price(it), 0);
        // .07 is the tax idk if we wanna change it or omit it
        const tax = +(subtotal * .07).toFixed(2);
        const total = +(subtotal + tax).toFixed(2);
        return { subtotal: +subtotal.toFixed(2), tax, total };
    }, [cart]);

    const submitOrder = () => {
        // will add backend logic here later
    };

    return (
        <div className="root font-germania min-h-screen flex flex-col">
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
                            <h1 className="font-germania text-5xl md:text-5x select-none caret-transparent">Angel</h1>
                            <h1 className="font-germania text-5xl md:text-5xl select-none caret-transparent">Slice</h1>
                        </div>
                    </Link>
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
                <div className="flex-1 flex flex-col lg:flex-row gap-8 p-8 md:p-16 mb-0 text-black">
                    <div className="flex-1">
                        <h1 className="text-6xl md:text-7xl font-outfit font-bold m-0 leading-tight caret-transparent">Checkout</h1>
                        <div className="w-full mt-8 font-outfit">
                            {cart.length > 0 ? (
                                cart.map((item, index) => (
                                    <div key={index} className="bg-white shadow-md rounded-2xl p-6 md:p-8 mb-6 caret-transparent">
                                        <div className="flex items-center justify-between mb-2">
                                            <h2 className="text-3xl md:text-4xl font-bold">Order #{index + 1}</h2>
                                            <span className="text-xl md:text-2xl font-semibold text-[#671835]">${price(item).toFixed(2)}</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-xl md:text-2xl">
                                            <p><strong className="font-semibold">Quantity:</strong> {item.quantity}</p>
                                            <p><strong className="font-semibold">Size:</strong> {item.size}</p>
                                            <p><strong className="font-semibold">Sauce:</strong> {item.sauce}</p>
                                            <p><strong className="font-semibold">Side:</strong> {item.side}</p>
                                            <p className="sm:col-span-2"><strong className="font-semibold">Toppings:</strong> {Array.isArray(item.toppings) && item.toppings.length ? item.toppings.join(", ") : "None"}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="font-outfit text-2xl">Your cart is empty.</p>
                            )}
                        </div>
                    </div>
                    {cart.length > 0 && (
                        <aside className="w-full lg:w-[460px] caret-transparent">
                            <div className="bg-[#FFF7EB] rounded-3xl shadow-xl p-6 md:p-8 sticky top-8 font-outfit">
                                <h3 className="text-3xl md:text-4xl font-bold text-[#671835] mb-4">Order Summary</h3>
                                <div className="space-y-3 text-2xl">
                                    <div className="flex items-center justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-semibold">${totals.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Tax</span>
                                        <span className="font-semibold">${totals.tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-[#671835]/20 my-4" />
                                    <div className="flex items-center justify-between text-3xl md:text-4xl font-extrabold">
                                        <span>Total</span>
                                        <span>${totals.total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    className="w-full mt-6 bg-[#671835] hover:bg-[#4d1228] text-[#FFF7EB] font-semibold px-8 py-5 rounded-full text-3xl transition-all hover:scale-[1.03] shadow-xl"
                                    onClick={submitOrder}
                                >
                                    Submit Order
                                </button>
                            </div>
                        </aside>
                    )}
                </div>
            </main>
        </div>
    );
};
