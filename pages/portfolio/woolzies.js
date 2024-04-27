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
            src="/woolzies/woolzieshero.jpeg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"Ecommerce"}
          tools={"Html, CSS, Shopify"}
          url={"https://woolzies.com/"}
          urlName={"woolzies.com"}
          description={
            "Woolzies is a family-owned business in Hudson Valley, NY that sells all-natural wellness and household products. We was responsible for keeping their website up to date with their monthly product rollouts and marketing campaigns, which included updating their Shopify site, homepage, landing page, and navigation as needed. We also maintained and updated their website’s call to action buttons, hero image assets, and navigations menu layouts."
          }
        />

        <ThreeMobileImage
          img1={"/woolzies/mw1.png"}
          alt1={"Woolzies winter page"}
          desc1={"Winter"}
          //   Second
          img2={"/woolzies/mw2.png"}
          alt2={"Woolzies fall page"}
          desc2={"Fall"}
          //   Third
          img3={"/woolzies/mw3.png"}
          alt3={"Woolzies spring page"}
          desc3={"Spring"}
        />

        {/* First  */}
        <ShowcaseImage src={"/woolzies/w1.jpg"} alt={"Woolzies winter page"} />

        {/* Second  */}
        <ShowcaseImage src={"/woolzies/w2.jpg"} alt={"Woolzies fall page"} />

        {/* Third  */}
        <ShowcaseImage src={"/woolzies/w3.jpg"} alt={"Woolzies spring page"} />
      </main>
    </>
  );
}
