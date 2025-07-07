import React from "react";
import Navbar from "../components/header";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import HomeBackground from "../components/HomeBG/HomeBG";

export default function about() {
  return (
    <main className=" h-screen w-screen bg-transparent">
      <div className="absolute bg-transparent w-screen">
        <Navbar />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10  rounded-3xl p-4">
              <h5 className="text-white mb-4 text-4xl font-serif leading-none">
                Hi, I&apos;m Nick
              </h5>
              <p className="mb-6 text-white font-medium">
                I’m a Senior Engineer at Deutsche Bank AG. I manage and support
                a diverse team of product and full stack engineers to build and
                ship products that are integral to the bank’s internal and
                external data systems. I play a key role in developing strategy
                and working with cross functional teams to drive implementation.
                I have an M.A. in Human-Computer Interaction (HCI) and a B.S. in
                Cognitive Science from the State University of New York at
                Oswego. As a SUNY Oswego student, I played Division I rugby for
                five years and won three state championships with my team. I was
                also the graduate assistant for First Year programs and the
                assistant director of finance for the Student Association,
                holding both positions for two years. I was born and raised in
                New York (the greatest city in the world!) and am an avid Knicks
                fan. In my free time when I am not designing or playing rugby, I
                like working on my photography and learning new languages.
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/nicholassiciliano/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/nsicilia"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="hidden md:inline">
              <img
                className="object-contain bg-gray-800 bg-opacity-25 w-full h-56 rounded-3xl shadow-lg sm:h-96"
                src="/me_grey.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <HomeBackground />
    </main>
  );
}
