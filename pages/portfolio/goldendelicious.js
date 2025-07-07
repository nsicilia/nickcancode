import React from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/header";
import ProjectTable from "../../components/projecttable";
import ShowcaseImage from "../../components/showcaseimage";
import ThreeMobileImage from "../../components/threemobileimage";
import TwoMobileImage from "../../components/twomobileimage";

export default function goldendelicious() {
  return (
    <>
      <Head>
        <title>nickcancode</title>
        <meta name="description" content="Nick Siciliano Salazar's Portfolio" />
        <link rel="icon" href="/nickcancodeicon.svg" />
      </Head>
      <main className="bg-black pb-10">
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
            src="/gd/nccGD.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"Personal Project"}
          tools={"Swift, SwiftUI, 3D LUTS, Core Image"}
          url={
            "https://apps.apple.com/in/app/golden-delicious/id6740438863?uo=2"
          }
          urlName={"App Store"}
          description={
            "Golden Delicious is an iOS app that emulates the timeless look of 35mm film photography. Built using Swift and SwiftUI, the app leverages 3D LUTs and Core Image to deliver rich, analog-style filters that feel true to real film stocks. Designed for simplicity and aesthetic appeal, Golden Delicious offers an intuitive photo editing experience that resonates with both casual users and photography enthusiasts. Since launch, it has earned a 4.8-star rating and achieved hundreds of downloads across the US, UK, India, Australia, and Canada. This project reflects my passion for blending technical precision with visual storytelling, and it continues to evolve with user feedback and new creative features."
          }
        />

        <TwoMobileImage
          img1={"/gd/gdhp.png"}
          alt1={"Camera page"}
          desc1={"Camera"}
          //   Second
          img2={"/gd/gdfilter.png"}
          alt2={"Filters page"}
          desc2={"Filters"}
        />

        <ThreeMobileImage
          img1={"/gd/IMG_0508-portrait.png"}
          alt1={"Gallery page"}
          desc1={"Gallery"}
          //   Second
          img2={"/gd/IMG_0509-portrait.png"}
          alt2={"Details page"}
          desc2={"Photo Details"}
          //   Third
          img3={"/gd/IMG_0511-portrait.png"}
          alt3={"Settings page"}
          desc3={"Settings page"}
        />

        {/* <TwoMobileImage
          img1={"/cassetta/cassettaplayer.png"}
          alt1={"Cassetta Audio player"}
          desc1={"Player"}
          //   Second
          img2={"/cassetta/cassettacomments.png"}
          alt2={"Cassetta comments"}
          desc2={"Comments"}
        /> */}

        <ShowcaseImage
          src={"/gd/Screenshot 2025-07-07 at 1.17.12 AM.jpg"}
          alt={"App Store page"}
        />
      </main>
    </>
  );
}
