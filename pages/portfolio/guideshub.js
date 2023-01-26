import React from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/header";
import ProjectTable from "../../components/projecttable";
import ShowcaseImage from "../../components/showcaseimage";
import ThreeMobileImage from "../../components/threemobileimage";

export default function guideshub() {
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
            src="/rdcguides/guideshublist.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"User Experience Engineer"}
          tools={"Html, CSS, Javascript, JQuery, Php, WordPress CMS"}
          url={"https://www.realtor.com/guides/"}
          urlName={"realtor.com/guides"}
          description={
            "The goal of this project was to create a hub for all the resources a first time home buyer might need at every point in their journey. From looking for a mortgage, to buying, to eventually renovating their first house. It was important that the guides be easy to navigate and easy to read. I designed the Realtor.com/guides to fall into three distinct sections, the hub, the guide, and the articles. The hub holds all the guides, and can be filtered by a number of categories including sell, rent, buy, and home improvement . The guides are the specific topics like “how to find a mortgage” that hold all of the articles on the subject. The articles are a step-by-step process that teaches the reader about the subject matter. Each article has a “previous” and “next” at the bottom so users can easy navigate between articles in the process. Every page also has a dedicated back button that we found alleviated confusion and helped people easily return to the parent directory. I used Adobe XD to create mobile, tablet, and desktop mocks and illustrator to create icons and assets. I built the pages with HTMLS/CSS, PHP, and Vanilla JS."
          }
        />

        <ThreeMobileImage
          img1={"/rdcguides/mobilehub.png"}
          alt1={"Guides Hub"}
          desc1={"The guides hub"}
          //   Second
          img2={"/rdcguides/mobilesingleguide.png"}
          alt2={"Single Guide"}
          desc2={"A single guide"}
          //   Third
          img3={"/rdcguides/mobilesinglearticle.png"}
          alt3={"Single Article"}
          desc3={"An article in the guide"}
        />

        {/* First Gif */}
        <ShowcaseImage src={"/rdcguides/guiderec1.gif"} alt={"Guides Hub"} />

        {/* Second Gif */}
        <ShowcaseImage
          src={"/rdcguides/guidessingleguide.gif"}
          alt={"Single Guide"}
        />

        {/* Third Gif */}
        <ShowcaseImage
          src={"/rdcguides/guidearticle.gif"}
          alt={"Single Article"}
        />
      </main>
    </>
  );
}
