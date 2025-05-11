'use client'
import { useState } from "react";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative text-black">
            {/* Hamburger Button - Mobile Only */}
            {!isOpen && <button
                className=" text-white fixed top-4 right-4 z-50 block md:hidden text-3xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>}

            {/* Slide-in Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>
                <ul className="flex flex-col items-center justify-center h-full gap-8 font-bold">
                    <li onClick={()=>setIsOpen(false)}><a href="/">Home</a></li>
                    <li onClick={()=>setIsOpen(false)}><a href="#about">About Us</a></li>
                    <li onClick={()=>setIsOpen(false)}><a href="#services">Services</a></li>
                    <li onClick={()=>setIsOpen(false)}><a href="#contact">Contat Us</a></li>
                </ul>
            </div>
        </nav>
    );
}
