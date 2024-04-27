import React from "react";
import Navbar from "../components/header";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import HomeBackground from "../components/HomeBG/HomeBG";

export default function about() {
  return (
    <main className=" h-screen w-screen bg-transparent">
      <div className="absolute bg-transparent w-screen">
        <Navbar />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10  rounded-3xl p-4">
              <h5 className="text-white mb-4 text-4xl font-bold leading-none">
                About Us
              </h5>
              <p className="mb-6 text-gray-800 font-medium md:text-lg">
                Welcome to Purle Lantern, a forward-thinking design agency
                dedicated to creating innovative and impactful design solutions.
                We believe in the power of design to shape a better future, and
                our team is committed to pushing the boundaries of creativity,
                sustainability, and technology.
              </p>

              <h5 className="text-white mb-4 text-xl font-serif leading-none">
                Our Mission
              </h5>
              <p className="mb-6 text-gray-800 font-medium md:text-lg">
                Our mission is to design with purpose, ensuring that every
                project we undertake contributes to a more sustainable,
                inclusive, and beautiful world. We work with clients across a
                range of industries to develop unique and effective designs that
                not only meet their needs but also inspire and engage their
                audiences.
              </p>

              <h5 className="text-white mb-4 text-xl font-serif leading-none">
                Let's Work Together
              </h5>
              <p className="mb-6 text-gray-800 font-medium md:text-lg">
                We'd love to hear about your project and discuss how we can
                bring your vision to life. Whether you're looking to rebrand,
                redesign, or launch a new product, we're here to help. Contact
                us today to start your journey with Purple Lantern.
              </p>

              <div className="flex items-center space-x-4">
                {/* <a
                  href="https://www.linkedin.com/in/nicholassiciliano/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedinIn />
                </a> */}
                <a
                  href="mailto:hello@purplelantern.co"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
            <div className="hidden md:inline lg:my-auto">
              <img
                className="object-cover bg-gray-800 bg-opacity-25 w-full h-56 rounded-3xl shadow-lg sm:h-96"
                src="/skyline.png"
                alt=""
                style={{ filter: "brightness(70%)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <HomeBackground />
    </main>
  );
}
