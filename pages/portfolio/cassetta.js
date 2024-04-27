import React from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/header";
import ProjectTable from "../../components/projecttable";
import ShowcaseImage from "../../components/showcaseimage";
import ThreeMobileImage from "../../components/threemobileimage";
import TwoMobileImage from "../../components/twomobileimage";

export default function cassetta() {
  return (
    <>
      <Head>
        <title>Purple Lantern</title>
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
            src="/cassetta/cassettahero.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"Startup"}
          tools={"Swift, SwiftUI, Firebase, Adobe XD, Illustrator"}
          url={"https://cassetta.fm"}
          urlName={"cassetta.fm"}
          description={
            "Now more than ever, people are looking for new ways to share their stories and connect with others around the world. But creating a podcast is not as easy as making a Tik Tok or uploading a video on Youtube. There are many barriers including equipment costs, editing, production, and creating a community. Sharing stories shouldn’t be hard and it shouldn’t take thousands of dollars worth of equipment in a world where smartphones exist. Cassetta is an iPhone app that will bring down these barriers by doing two things. First, give users an easy and straightforward tool for recording, editing, and attaching relevant images to the stories they want to tell, and Second, make the process of sharing what they have recorded, and engaging with the community they build significantly easier. The long-term vision for Cassetta is to be the de-facto platform for people to tell stories and build digital communities around podcasts."
          }
        />

        <TwoMobileImage
          img1={"/cassetta/cassettalogin.png"}
          alt1={"Cassetta login"}
          desc1={"Login page"}
          //   Second
          img2={"/cassetta/cassettasignup.png"}
          alt2={"Cassetta sign up"}
          desc2={"Sign Up Page"}
        />

        <ThreeMobileImage
          img1={"/cassetta/cassettahome.png"}
          alt1={"Cassetta home page"}
          desc1={"Homepage"}
          //   Second
          img2={"/cassetta/cassettarecord.png"}
          alt2={"Cassetta search page"}
          desc2={"Record Audio page"}
          //   Third
          img3={"/cassetta/cassettaupload.png"}
          alt3={"Profile page"}
          desc3={"Upload page"}
        />

        <TwoMobileImage
          img1={"/cassetta/cassettaplayer.png"}
          alt1={"Cassetta Audio player"}
          desc1={"Player"}
          //   Second
          img2={"/cassetta/cassettacomments.png"}
          alt2={"Cassetta comments"}
          desc2={"Comments"}
        />

        <ShowcaseImage src={"/cassetta/cassettawebsite.jpg"} alt={"Cassetta"} />
      </main>
    </>
  );
}
