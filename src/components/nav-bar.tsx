import Image from "next/image"

const NavBar = ()=>{
    return   <div className="z-50 fixed w-full h-28 py-4 px-20 bg-black text-white">
          <div className="flex flex-row items-center w-full relative">
            <Image
              className="w-24"
              src="/nss-logo.png"
              width={240}
              height={240}
              alt="logo"
            />
            <div className="ml-4 flex flex-col justify-start">
              <h1 className="whitespace-nowrap text-3xl  font-bold">
                {" "}
                NSS Law Office{" "}
              </h1>
              <h1 className="text-xs  font-bold">
                Barrister, Solicitor & Notary Public
              </h1>
            </div>
            <div className="absolute right-0 ">
              <ul className="flex flex-row gap-10 justify-between font-bold">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
    
          </div>
        </div>
}

export default NavBar