import React from "react";
import {SiPluralsight, SiLinkedin, SiUdemy} from "react-icons/si";
import {TbCertificate} from "react-icons/tb";
const Certificate = ({children, link}) => {
  return (
    <a
      href={link}
      className="flex gap-2 items-center text-md focus:bg-gray-400 focus:text-black focus:translate-x-[-40px] hover:text-black hover:bg-gray-400 p-2 rounded-lg"
      target="_blank"
    >
      <TbCertificate />
      {children}
    </a>
  );
};
const CertificatesPage = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-8 h-screen w-full">
      <h1 className="text-5xl">Certificates</h1>
      <div className="flex flex-col justify-center items-center sm:items-start flex-wrap gap-8 lg:gap-4 sm:flex-row  text-md md:text-xl w-full">
        <div className="w-80">
          <li className="w-full flex gap-2 items-center justify-between font-bold text-center text-black bg-gray-400 p-2 rounded-lg mb-2">
            <SiPluralsight />
            PluralSight
          </li>
          <div className="text-[15px] w-full flex flex-col gap-2">
            <Certificate link="https://app.pluralsight.com/achievements/share/c2deb8a3-510d-46af-9838-d5a32dcb9d10">
              React: The Big Picture
            </Certificate>
            <Certificate link="https://app.pluralsight.com/achievements/share/5c3cfe3a-8ec7-4598-bbaa-33bcd4fd27e3">
              React 17: Getting Started
            </Certificate>
            <Certificate link="https://app.pluralsight.com/achievements/share/1b6600f7-24fa-4cc8-8b8b-d71cfdce0398">
              Managing React State
            </Certificate>
            <Certificate link="https://app.pluralsight.com/achievements/share/928245d4-8d80-48ae-a734-97858a20b259">
              Designing React 17 Components
            </Certificate>
            <Certificate link="https://app.pluralsight.com/achievements/share/56823e99-b501-49db-a984-72a26fbbcab7">
              Server Rendering React 16 Components
            </Certificate>
            <Certificate link="https://app.pluralsight.com/achievements/share/4fe30114-b23a-42a7-998d-89a767e91e82">
              Git: The Big Picture
            </Certificate>
          </div>
        </div>

        <div className="w-80">
          <li className="w-full flex gap-2 items-center justify-between font-bold text-center text-black bg-gray-400 p-2 rounded-lg mb-2">
            <SiLinkedin />
            Linkedin learning
          </li>
          <div className="w-full text-[15px] flex flex-col gap-2">
            <Certificate link="https://www.linkedin.com/learning/programming-foundations-fundamentals-3">
              Programming Foundations: Fundamentals
            </Certificate>
            <Certificate link="https://www.linkedin.com/learning/html-essential-training-4">
              HTML Essential Training
            </Certificate>
            <Certificate link="https://www.linkedin.com/learning/programming-foundations-databases-2">
              Programming Foundations: Databases
            </Certificate>
            <Certificate link="https://www.linkedin.com/learning/succeeding-in-web-development-full-stack-and-front-end">
              Succeeding in Web Development
            </Certificate>
          </div>
        </div>
        <div className="w-80">
          <li className="w-full flex gap-2 items-center justify-between font-bold text-center text-black bg-gray-400 p-2 rounded-lg mb-2">
            <SiUdemy />
            Udemy
          </li>
          <div className="w-full text-[15px] flex flex-col gap-2">
            <Certificate link="https://www.udemy.com/certificate/UC-898Ode68-f0be-41b6-adf5-b29098985f0f/">
              The Modern JavaScript Bootcamp
            </Certificate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
