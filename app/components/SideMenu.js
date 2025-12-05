"use client";

import { useRouter } from 'next/navigation';
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function SideMenu({ isOpen, onClose }) {
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (!localStorage.getItem("linkKey")) {
       const generateId = () =>
          (crypto?.randomUUID?.() || Math.random().toString(36).substring(2, 15));
       localStorage.setItem("linkKey", generateId());
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim() || "";
    const phone = form.get("phone")?.toString().trim() || "";
    const birthday = form.get("birthday")?.toString().trim() || "";
    const address = form.get("address")?.toString().trim() || "";
    const linkKey = typeof window !== "undefined" ? localStorage.getItem("linkKey") : null;
    const docData = {
      createdAt: serverTimestamp(),
      name,
      phone,
      birthday,
      address,
      linkKey,
    };
    try {
      await addDoc(collection(db, "rewards"), docData);
      onClose();
      router.push('/order');
    } catch (err) {
      alert("Submission failed. Please try again.");
    }
  };
  return (
    <main
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "" : "translate-x-full"
        }`}
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      <div className="relative ml-auto h-full w-full max-w-sm bg-[#FFF7EB] p-6 shadow-xl font-outfit">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-germania text-3xl text-[#671835]">Sign up for rewards!</h2>
          <button onClick={onClose} className="text-4xl text-[#671835] hover:opacity-70">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-[#671835] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-md border-2 border-[#671835]/30 focus:ring-[#671835] focus:border-[#671835] text-black placeholder:text-gray-600"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-[#671835] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-md border-2 border-[#671835]/30 focus:ring-[#671835] focus:border-[#671835] text-black placeholder:text-gray-600"
            />
          </div>
          <div>
            <label htmlFor="birthday" className="block text-lg font-medium text-[#671835] mb-2">
              Birthday
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              required
              className="w-full p-3 rounded-md border-2 border-[#671835]/30 focus:ring-[#671835] focus:border-[#671835] text-black placeholder:text-gray-600"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-[#671835] mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              required
              placeholder="Enter your delivery address"
              className="w-full p-3 rounded-md border-2 border-[#671835]/30 focus:ring-[#671835] focus:border-[#671835] text-black placeholder:text-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#671835] hover:bg-[#55112A] text-[#FFF7EB] font-semibold w-full py-3 rounded-full text-lg transition-all hover:scale-105 shadow-lg mt-4"
          >
            Continue for Delivery
          </button>
        </form>
      </div>
    </main>
  );
}