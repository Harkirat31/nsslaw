import Image from "next/image"
import {  BiPhone } from "react-icons/bi"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const Home = () => {
  return <div className="pt-24 lg:pt-28">
    <section className="bg-gray-600">
      <div className="relative w-full h-[80vh] lg:h-lvh opacity-20 ">
        <Image
          src={`/home-bg.webp`}
          fill={true}
          alt="slider_bg"
          objectFit="cover"
        ></Image>


      </div>
      <div className="text-white absolute top-0 lg:px-20 w-full h-[80vh] lg:h-lvh">
        <div className="flex flex-row items-center justify-center h-full">
          <div className="flex flex-col p-4 lg:p-1">
            <h1 className="text-yellow-500">Welcome to our Site</h1>
            <h1 className=" mt-2 md:w-[500px]  font-extrabold text-2xl lg:text-5xl">Protecting Your Legal Interests in GTA</h1>
            <button className="border-yellow-500 border-2 p-2 mt-4 w-fit">Practice Area</button>
          </div>
        </div>


      </div>
      
    </section>
    <section id="about" className="scroll-mt-24 lg:scroll-mt-28 px-4 md:px-10 lg:px-20 mt-10">
      <div className="flex flex-col lg:flex-row ">

        <div className="flex flex-col w-full lg:min-w-[50%] z-10">
          <h1 className="text-yellow-500">About Us</h1>
          <h1 className="text-3xl mt-1 font-bold">NSS Law Office</h1>
          <p className="border-yellow-500 border-4  p-8 lg:p-10 mt-4">
          {`With years of experience in Canadian law, we offer personalized legal solutions across a range of practice areas. Our mission is to protect your rights and help you make informed legal decisions with confidence. At NSS Law Office, we provide reliable and results-driven legal services tailored to your needs. Whether you're facing a legal challenge or planning for the future, we are here to guide you every step of the way with integrity, professionalism, and care.`}
          </p>
        </div>
        <div className="relative hidden lg:block lg:-left-[3%] lg:top-8 lg:min-w-[53%]">
          <Image
            src="/about-us.jpg"
            fill={true}
            alt="slider_bg"
            objectFit="cover"
          />


        </div>
      </div>

    </section>

    <div className="h-2  bg-black w-full mt-20  my-2"></div>

    <section id="services" className="scroll-mt-24 lg:scroll-mt-28 px-4 md:px-10 lg:px-20 mt-20">
      <h1 className="font-bold text-3xl mb-10">Practice Areas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold mt-2 mb-1">Immigration Law</h1>
          <p>{`We provide comprehensive immigration services, including work permits, study permits, permanent residency, and citizenship applications. If your application has been refused, we can represent you in Judicial Review before the Federal Court, challenging unfair or unreasonable immigration decisions. We are committed to helping you navigate the Canadian immigration system with clarity and confidence`}</p>
        </div>
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold mt-2 mb-1">Family Law</h1>
          <p>{`We provide compassionate and knowledgeable guidance in areas such as divorce, child custody, support, and property division. Whether you're facing separation or need help drafting a domestic agreement, we’re here to protect your rights and prioritize your family's well-being.`}</p>
        </div>
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold mt-2 mb-1">Criminal Defence</h1>
          <p>{`A criminal charge can have serious consequences for your future. We defend your rights at every stage. With a focus on discretion, strategy, and strong advocacy, we work to reduce penalties, protect your record, and pursue the best possible result.`}</p>
        </div>
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold mt-2 mb-1">Provincial Offences</h1>
          <p>{`Provincial offences include traffic violations, by-law infractions, and regulatory charges under statutes such as the Highway Traffic Act or the Liquor Licence and Control Act. While often considered minor, these charges can still result in fines, license suspensions, or a permanent record. We provide effective representation to protect your rights and minimize consequences`}</p>
        </div>
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold mt-2 mb-1">Civil Matters</h1>
          <p>{`We handle a wide range of civil disputes with a focus on practical, cost-effective solutions. Whether it’s a contract disagreement, property issue, or small claims case, we help you understand your legal options and advocate for your interests—through negotiation, mediation, or litigation when necessary`}</p>
        </div>
        <div>
          <div className="w-full bg-yellow-500 h-1"></div>
          <h1 className="text-lg font-bold mt-2 mb-1">Wills & Estates</h1>
          <p>{`Planning for the future ensures your loved ones are protected and your wishes are respected. We assist with will drafting, powers of attorney, and estate planning to give you peace of mind. We also guide executors and families through estate administration and probate with clarity and compassion.`}</p>
        </div>

      </div>
    </section>

    <div className="h-2  bg-black w-full mt-20  my-2"></div>

    <section id="contact" className="scroll-mt-24 lg:scroll-mt-28 px-4 md:px-10 lg:px-20 py-10 mt-10  ">
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
  </div>
}

export default Home