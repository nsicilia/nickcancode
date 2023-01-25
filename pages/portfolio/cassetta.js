import React from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/header";
import ProjectTable from "../../components/projecttable";
import ShowcaseImage from "../../components/showcaseimage";

export default function cassetta() {
  return (
    <>
      <Head>
        <title>nickcancode</title>
        <meta name="description" content="Nick Siciliano Salazar's Portfolio" />
        <link rel="icon" href="/nickcancodeicon.svg" />
      </Head>
      <main className="bg-ncc-dark pb-10">
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
          role={"User Experience Engineer"}
          tools={"Swift, SwiftUI, Firebase, Adobe XD"}
          url={"https://cassetta.fm"}
          urlName={"cassetta.fm"}
          description={
            "Now more than ever, people are looking for new ways to share their stories and connect with others around the world. But creating a podcast is not as easy as making a Tik Tok or uploading a video on Youtube. There are many barriers including equipment costs, editing, production, and creating a community. Sharing stories shouldn’t be hard and it shouldn’t take thousands of dollars worth of equipment in a world where smartphones exist." +
            "Cassetta is an iPhone app that will bring down these barriers by doing two things:"
          }
        />

        <ShowcaseImage src={"/cassetta/cassettahero.jpg"} alt={"Cassetta"} />

        <ShowcaseImage src={"/cassetta/cassettawebsite.jpg"} alt={"Cassetta"} />
      </main>
    </>
  );
}
