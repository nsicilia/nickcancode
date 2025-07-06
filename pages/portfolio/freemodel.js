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
            src="/freemodel/nccfree.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"Full-Stack Developer"}
          tools={"Next.js, Tailwindcss, Javascript, GraphQL, Sanity"}
          url={"https://www.freemodel.com/"}
          urlName={"freemodel.com"}
          description={
            "I led the development of the marketing website for Freemodel, a Series A startup in the real estate space that helps homeowners maximize home value before selling. Built from the ground up using Next.js and Tailwind CSS, the site was designed to be fast, scalable, and easy to update by non-technical team members. I integrated a custom content management workflow using Sanity, giving the team a flexible editing experience and structured content model. Data was fetched using GraphQL, enabling dynamic, SEO-friendly pages and efficient client-server communication. The project required close collaboration with design and marketing teams to deliver a responsive, high-performance website that clearly communicates Freemodel’s value to customers and investors."
          }
        />

        <ThreeMobileImage
          img1={"/freemodel/IMG_0505-portrait.png"}
          alt1={"Crunch Systems homepage"}
          desc1={"Homepage"}
          //   Second
          img2={"/freemodel/IMG_0503-portrait.png"}
          alt2={"Projects page"}
          desc2={"Projects"}
          //   Third
          img3={"/freemodel/IMG_0504-portrait.png"}
          alt3={"About Us page"}
          desc3={"About Us"}
        />

        {/* First Gif */}
        <ShowcaseImage
          src={"/freemodel/www.freemodel.com_(Macbook Air).png"}
          alt={"Homepage"}
        />

        {/* Second Gif */}
        <ShowcaseImage
          src={"/freemodel/www.freemodel.com_projects(Macbook Air).png"}
          alt={"Projects"}
        />

        {/* Third Gif */}
        <ShowcaseImage
          src={"/freemodel/www.freemodel.com_projects(Macbook Air) (1).png"}
          alt={"Individual Project"}
        />
      </main>
    </>
  );
}
