import React from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/header";
import ProjectTable from "../../components/projecttable";
import ShowcaseImage from "../../components/showcaseimage";
import ThreeMobileImage from "../../components/threemobileimage";
import TabsRender from "../../components/tabview";

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
            src="/rdcnews/newshero.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"User Experience Engineer"}
          tools={
            "Next.js, React, AWS, Styled Components, Wordpress, PHP, Adobe XD"
          }
          url={
            "https://xd.adobe.com/view/78c024fc-500c-4c4d-a198-259e748b577a-2d93/"
          }
          urlName={"Adobe XD Mockup"}
          description={
            "Upon joining Realtor.com in 2021, I identified the need for a redesign of the News and Insights platform's article pages, which had a high bounce rate of over 80% and a low click-through rate of 15%. In collaboration with the senior editorial director, I led the development of highly modular components using React and the Styled Components library on a large-scale enterprise platform. This included cutting down mobile load times by 70%, resulting in over 8 million monthly visitors. Additionally, I implemented systems for cross-functional collaboration between engineering, marketing, and editorial departments for long-term planning and product roadmaps. Furthermore, I developed a Next.js MVP for Realtor.com's transition to a headless WordPress, resulting in a threefold increase in front-end speed."
          }
        />

        <TabsRender
          src1={"/rdcnews/rdcnewsold.png"}
          alt1={"Old page"}
          src2={"/rdcnews/rdcnewsnew.jpg"}
          alt2={"New page"}
        />

        <ThreeMobileImage
          img1={"/rdcnews/rdcnewsimac.png"}
          alt1={"Cassetta home page"}
          desc1={"Desktop"}
          //   Second
          img2={"/rdcnews/rdcnewsiphone.png"}
          alt2={"Cassetta search page"}
          desc2={"Phone"}
          //   Third
          img3={"/rdcnews/rdcnewsipad.png"}
          alt3={"Profile page"}
          desc3={"Tablet"}
        />

        {/* First Gif */}
        <div className="w-11/12 mx-auto">
          <ShowcaseImage src={"/rdcnews/rdcnewsshow.gif"} alt={"Guides Hub"} />
        </div>
      </main>
    </>
  );
}
