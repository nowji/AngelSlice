
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

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
                            <h1 className="font-germania text-5xl md:text-5xl">Angel</h1>
                            <h1 className="font-germania text-5xl md:text-5xl">Slice</h1>
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
                <div className="flex-1 flex flex-col items-start p-8 md:p-16 mb-0 text-black">
                    <h1 className="text-6xl font-outfit font-bold m-0 leading-tight">Checkout</h1>
                    <div className="w-full mt-8">
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4 font-outfit">
                                    <h2 className="text-2xl font-bold mb-2">Order #{index + 1}</h2>
                                    <p><strong>Quantity:</strong> {item.quantity}</p>
                                    <p><strong>Size:</strong> {item.size}</p>
                                    <p><strong>Sauce:</strong> {item.sauce}</p>
                                    <p><strong>Toppings:</strong> {item.toppings.join(', ')}</p>
                                    <p><strong>Side:</strong> {item.side}</p>
                                </div>
                            ))
                        ) : (
                            <p className="font-outfit">Your cart is empty.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
