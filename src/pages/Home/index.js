import React from "react";
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiCsharp,
  SiUpwork,
  SiFreelancer,
  SiLinkedin,
  SiFacebook,
  SiRedux,
} from "react-icons/si";
import {FaReact, FaNodeJs} from "react-icons/fa";
import {DiCss3Full} from "react-icons/di";
import {IoLogoFirebase} from "react-icons/io5";
import {GoLocation} from "react-icons/go";
import {HiOutlineMail} from "react-icons/hi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import PortfolioPage from "../Portfolio/index";
import CertificatesPage from "../Certificates";
import {NavLink} from "react-router-dom";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 items-center pb-20 w-[100%]">
      <div className="flex flex-col text-center w-[100%] text-3xl">
        <h1>Mahmoud Al Mokhtar</h1>
        <h1>Frontend Developer</h1>
        <h1>Based in Syria</h1>
      </div>
      <div className="flex flex-col lg:flex-row md:justify-center md:gap-20 lg:justify-between items-center w-[100%] gap-40">
        <div
          id="About"
          className="flex flex-col items-center sm:items-start sm:flex-row lg:flex-col w-full justify-between text-center  gap-16 lg:w-1/3 lg:justify-start lg:text-start"
        >
          <div className="w-60 flex flex-col gap-6">
            <h1 className="text-sm text-gray-400">BIOGRAPHY</h1>
            <p className="flex flex-col gap-4">
              I'm Mahmoud, a Web Developer with experience in creating and
              development websites, Who is passionate about programming and
              works with Frontend Development, I'm on my way to becoming a MEARN
              Stack developer
            </p>
          </div>
          <div className="w-60 flex flex-col gap-6">
            <h1 className="text-sm text-gray-400">CONTACT</h1>
            <div className="flex flex-col gap-4 lg:items-start justify-center items-center">
              <div className="flex gap-2 items-center">
                <GoLocation /> <p>Syria, Damascus</p>
              </div>
              <div className="flex gap-2 items-center">
                <HiOutlineMail />
                <p className="text-xs">mahmoudalmoukhtar10@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <HiDevicePhoneMobile />
                <p>+963 936464820</p>
              </div>
            </div>
          </div>
          <div className="w-60 flex flex-col gap-6">
            <h1 className="text-sm text-gray-400">SERVICES</h1>
            <div className="">
              <p>Web Design</p>
              <p>Web Development</p>
            </div>
          </div>
        </div>
        <div id="Image" className="p-6 min-w-[250px]  z-40 drop bg-slate-900">
          <img
            src="/IMG_20220917_142002_553-3.jpg"
            className="imgDrop min-w-[250px]"
            width={500}
            alt=""
          />
        </div>
        <div
          id="Skils"
          className="lg:w-1/3 w-[100%] flex-wrap sm:flex-row sm:items-start lg:items-end sm:jsutify-between lg:justify-center lg:flex-col text-lg md:text-xl lg:text-2xl flex flex-col gap-4 justify-center items-center"
        >
          <div>
            <h1 className="text-center text-black bg-gray-400 p-2 rounded-lg w-60 mb-2">
              -Have-
            </h1>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <SiHtml5 />
              <p>Html</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <DiCss3Full />
              <p>Css</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <SiJavascript />
              <p>JavaScript</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <FaReact />
              <p>React.Js</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <SiRedux />
              <p>Redux</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <SiTailwindcss />
              <p>Tailwindcss</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <IoLogoFirebase />
              <p>Firebase</p>
            </button>
          </div>
          <div>
            <h1 className="text-center text-black bg-gray-400 p-2 rounded-lg w-60 mb-2">
              -Learning-
            </h1>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <FaNodeJs />
              <p>Node.js</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <SiExpress />
              <p>Express</p>
            </button>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <SiMongodb />
              <p>Mongodb</p>
            </button>
          </div>
          <div>
            <h1 className="text-center text-black bg-gray-400 p-2 rounded-lg w-60 mb-2">
              -Can UnderStand-
            </h1>
            <button className="flex gap-2 items-center justify-between w-60 focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg">
              <SiCsharp />
              <p>C#</p>
            </button>
          </div>
        </div>
      </div>
      <div className="text-2xl text-center font-semibold z-40 bg-slate-900 p-6 w-full">
        <h2>You can find me on</h2>
      </div>
      <div className="flex justify-between w-full px-4 sm:px-16 lg:px-40">
        <SiUpwork
          size={50}
          className="hover:scale-110 transition duration-100 cursor-pointer"
        />

        <SiFreelancer
          size={50}
          className="hover:scale-110 transition duration-100 cursor-pointer"
        />

        <SiLinkedin
          size={50}
          className="hover:scale-110 transition duration-100 cursor-pointer"
        />

        <SiFacebook
          size={50}
          className="hover:scale-110 transition duration-100 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 mt-40">
        <PortfolioPage numSlice={3} />
        <NavLink
          className="text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
          to="/portfolio"
        >
          View more
        </NavLink>
      </div>
      <div className="mt-40">
        <CertificatesPage />
      </div>
    </div>
  );
};

export default HomePage;
