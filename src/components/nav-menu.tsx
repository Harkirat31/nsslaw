import Link from "next/link";
import MobileNav from "./mobile-nav";

export default function NavMenu() {
  return (
    <div>
    <div className="absolute right-0 hidden md:block">
    <ul className="flex flex-row gap-10 justify-between font-bold">
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><Link href="/">Home</Link></li>
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><Link href="#about">About Us</Link></li>
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><Link href="#services">Services</Link></li>
      <li className="hover:underline decoration-yellow-500 underline-offset-4"><Link href="#contact">Contat Us</Link></li>
    </ul>
  </div>
  <div className="block md:hidden">
    <MobileNav></MobileNav>
  </div>
  </div>
  
  );
}
