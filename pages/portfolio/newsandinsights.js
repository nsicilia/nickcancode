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
            src="/rdcnews/newshero.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"Realtor News"}
          tools={
            "Next.js, React, AWS, Styled Components, Wordpress, PHP, Adobe XD"
          }
          url={
            "https://xd.adobe.com/view/78c024fc-500c-4c4d-a198-259e748b577a-2d93/"
          }
          urlName={"Adobe XD Mockup"}
          description={
            "Whe noticed that the article pages on the News and Insights platform was out of date and in need of redesign. After discussing the issue with the senior editorial director, we found that the bounce rate was considerably high at over 80% and the click through rate from related articles was 15%. We worked on redesigning the pages, keeping in mind that a majority of the website visitors clicked on the article from a search engine. Therefore, it was important for the top of the fold to be visually appealing and user friendly to keep visitors engaged on the site. We developed a series of mock ups with different designs and presented them to the editorial team. After several rounds of edits and revisions, we launched parts of the new design and saw that the click through rate doubled and the bounce rate decreased. On the technical side, We led the design and development of highly modular components using react and the styled components library. This, in addition to migrating images from Wordpress to AWS for better image compression and delivery speeds led to a 70% decrease in mobile load times on on News and Insights which generates over 8 million monthly visitors."
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
