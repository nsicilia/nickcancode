import React from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/header";
import ProjectTable from "../../components/projecttable";
import ShowcaseImage from "../../components/showcaseimage";
import ThreeMobileImage from "../../components/threemobileimage";

export default function crunch() {
  return (
    <>
      <Head>
        <title>nickcancode</title>
        <meta name="description" content="Nick Siciliano Salazar's Portfolio" />
        <link rel="icon" href="/nickcancodeicon.svg" />
      </Head>
      <main className="bg-pl_background pb-10">
        <Navbar />

        {/* Hero image */}
        {/* <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-center text-6xl font-serif">
              Cassetta
            </h1>
          </div>
        </div> */}

        {/* Image */}
        <div className="h-[30vh] md:h-[80vh] w-11/12 md:w-3/4 relative m-auto mb-10 mt-6">
          <Image
            src="/crunch/CrunchPortfolioDesktop.jpeg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"FinTech"}
          tools={"Html, CSS, Javascript, Php, WordPress CMS"}
          url={"https://www.crunchsystems.com/"}
          urlName={"crunchsystems.com"}
          description={
            "The client came to us for help creating a website that would allow businesses to streamline their restaurant ordering systems and boost their sales. Working closely with the client to meet their needs and expectations, We created a project management tool to layout timelines and set due dates for client deliverables. Following that timeline, We built the entire website from the ground up using the WordPress platform with custom HTML/CSS, PHP, and JavaScript. We used Adobe XD, Photoshop, and Illustrator to edit and optimize photos, icons, call to action buttons, and other design assets as needed. "
          }
        />

        <ThreeMobileImage
          img1={"/crunch/mctest4_iphone12promaxsilver_portrait.png"}
          alt1={"Crunch Systems homepage"}
          desc1={"Homepage"}
          //   Second
          img2={"/crunch/mcapppage.png"}
          alt2={"Single Guide"}
          desc2={"Mobile food ordering"}
          //   Third
          img3={"/crunch/mcorderpage.png"}
          alt3={"Business page for online ordering"}
          desc3={"B2B service"}
        />

        {/* First Gif */}
        <ShowcaseImage src={"/crunch/crunchdesktophome.png"} alt={"Homepage"} />

        {/* Second Gif */}
        <ShowcaseImage src={"/crunch/crunchapppage.png"} alt={"App page"} />

        {/* Third Gif */}
        <ShowcaseImage
          src={"/crunch/onlineorderpage.jpg"}
          alt={"Online order page"}
        />
      </main>
    </>
  );
}
