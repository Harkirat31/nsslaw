import Image from "next/image"
import NavMenu from "./nav-menu"

const NavBar = () => {
  return <div className="z-50 fixed w-full h-24 lg:h-28 py-4 px-4 md:px-10 lg:px-20 bg-black text-white/80">
    <div className="flex flex-row items-center w-full relative">
      <Image
        className="w-16 lg:w-24"
        src="/nss-logo.png"
        width={240}
        height={240}
        alt="logo"
      />
      <div className="ml-4 flex flex-col justify-start ">
        <h1 className="whitespace-nowrap text-lg lg:text-3xl  font-bold">
          {" "}
          NSS Law Office{" "}
        </h1>
        <h1 className="text-xs lg:text-sm font-bold">
          Barrister, Solicitor & Notary Public
        </h1>
      </div>
      <NavMenu></NavMenu>
      

    </div>
  </div>
}

export default NavBar