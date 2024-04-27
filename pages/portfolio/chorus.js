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
            src="/chorus/choruslist.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"Healthcare software"}
          tools={"Html, CSS, Javascript, Php, WordPress CMS"}
          url={"https://www.chorus.cloud/"}
          urlName={"www.chorus.cloud"}
          description={
            "Chorus is a user-friendly healthcare management software. Chorus brings billions of dollars in infrastructure and tech to the healthcare sector, building on Microsoft technologies including Azure, Dynamics 365, Microsoft Flow, and PowerBI. In preparation for our client to be one of Microsoft’s “Cloud for Healthcare” partners, We took their existing website and fixed a number of critical issues. We migrated the website from Godaddy to a Digital Ocean server to vastly improve server response time, fixed-mobile responsive issues to make elements fit in a mobile view, and fixed a number of cross-browser issues to make the user experience consistent across Chrome, Safari, and Firefox. We further optimize the website’s assets and added a customized sticky video component on the AutismCare page, optimized the dynamic phone mockups, and made the image component switch correctly to highlight each section the user has scrolled to."
          }
        />

        <ThreeMobileImage
          img1={"/chorus/chorusm1.png"}
          alt1={"chorus home"}
          desc1={"Home"}
          //   Second
          img2={"/chorus/chorusm2.png"}
          alt2={"chorus notes page"}
          desc2={"All User Notes"}
          //   Third
          img3={"/chorus/chorusm3.png"}
          alt3={"Autism care page"}
          desc3={"Care Plan for Autistic Child"}
        />

        {/* First  */}
        <ShowcaseImage src={"/chorus/chorus1.jpg"} alt={"Homepage"} />

        {/* Second  */}
        <ShowcaseImage src={"/chorus/chorus2.jpg"} alt={"Notes page"} />

        {/* Third  */}
        <ShowcaseImage src={"/chorus/chorus3.jpg"} alt={"Autism Care page"} />
      </main>
    </>
  );
}
