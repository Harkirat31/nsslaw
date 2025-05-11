import Link from "next/link";
import MobileNav from "./mobile-nav";

export default function NavMenu() {
  return (
    <div>
    <div className="absolute right-0 hidden md:block">
    <ul className="flex flex-row gap-10 justify-between font-bold">
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><a href="/">Home</a></li>
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><a href="#about">About Us</a></li>
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><a href="#services">Services</a></li>
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><a href="#contact">Contat Us</a></li>
    </ul>
  </div>
  <div className="block md:hidden">
    <MobileNav></MobileNav>
  </div>
  </div>
  
  );
}
