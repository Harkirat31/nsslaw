import Image from "next/image"
import { BiLocationPlus, BiPhone } from "react-icons/bi"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const Home = () => {
  return <>
    <header className="z-50 fixed w-full h-28 py-4 px-20 bg-black text-white">
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
    </header>

    <section className="bg-gray-600">
      <div className="relative w-full h-lvh opacity-20 ">
        <Image
          src={`/home-bg.webp`}
          fill={true}
          alt="slider_bg"
          objectFit="cover"
        ></Image>


      </div>
      <div className="text-white absolute top-0 px-20 w-full h-lvh">
        <div className="flex flex-row items-center justify-center h-full">
          <div className="">
            <h1 className="text-yellow-500">Welcome to our Site</h1>
            <h1 className=" mt-2 w-[500px]  font-extrabold text-5xl">Protecting Your Legal Interests in GTA</h1>
            <button className="border-yellow-500 border-2 p-2 mt-4">Practice Area</button>
          </div>
        </div>


      </div>
    </section>
    <section className="px-20 mt-10">
      <div className="flex flex-row ">

        <div className="flex flex-col min-w-[50%] z-10">
          <h1 className="text-yellow-500">About Us</h1>
          <h1 className="text-3xl mt-1 font-bold">NSS Law Office</h1>
          <p className="border-yellow-500 border-4  p-16 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id condimentum tortor. Donec mollis lorem vel nisi dignissim sodales. Vivamus porttitor pretium massa in feugiat. Morbi blandit metus in diam tempus ultricies. Praesent non ligula facilisis, sollicitudin nulla vel, fringilla sem. Pellentesque efficitur elit risus, a sodales nunc tempor quis. Cras vitae dictum augue.
          </p>
        </div>
        <div className="relative -left-[3%] top-8 min-w-[53%]">
          <Image
            src="/about-us.jpg"
            fill={true}
            alt="slider_bg"
            objectFit="cover"
          />


        </div>
      </div>
    </section>

    <section className="px-20 mt-40">
      <h1 className="font-bold text-3xl mb-10">List of Services</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold">Barrister</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id</p>
        </div>
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold">Solicitor</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id</p>
        </div>
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold">Notary Public</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id</p>
        </div>
      </div>
    </section>

    <section className="px-20 py-10 mt-32 ">
      <h1 className="font-bold text-3xl">Contact us</h1>
      <div className="flex flex-row items-center mt-4">
        <p><BiPhone></BiPhone></p>
        <p className="ml-2">647-649-0264</p>
      </div>
      <div className="flex flex-row items-center mt-1">
        <p><MdEmail></MdEmail></p>
        <p className="ml-2">info@nsslawoffice.com</p>
      </div>
      <div className="flex flex-row items-start mt-1">
        <p className="mt-1"><FaLocationDot /></p>
        <div className="flex flex-col items-center">
          <p className="ml-2">808 Britannia Road W, Suite 215A, Missisauga, ON , L5VOA7</p>
          {/* <p className="ml-2">(Located in Heartland Town Centre)</p> */}
        </div>
      </div>
     
    </section>
  </>
}

export default Home