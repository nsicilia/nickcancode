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

        {/* Hero Image */}
        <div className="h-[30vh] md:h-[80vh] w-11/12 md:w-3/4 relative m-auto mb-10 mt-6">
          <Image
            src="/centers/testcenters.jpg"
            alt="Cassetta"
            className=" object-cover rounded-3xl"
            fill
          />
        </div>

        <ProjectTable
          role={"Lead Developer"}
          tools={"Html, CSS, Javascript, Php,Bootstrap, WordPress CMS"}
          url={"https://www.centerschoice.com/"}
          urlName={"centerschoice.com"}
          description={
            "Centers Health Care provides senior care services through a network of Centers Health Care companies in New York, New Jersey, and Rhode Island. As part of ongoing work with Centers, I was responsible for updating and refreshing their website as needed, including adding three new sections: a skilled nursing page, a telemedicine page, and a blog. The skilled nursing and telemedicine pages were designed in photoshop and were built using HTML/CSS and PHP. To create a mobile responsive blog section that both Centers and agency writers can contribute to, I used HTML/CSS, PHP, and Ajax. I also created a search bar, search page, a custom post page that shows other recent posts, and a categories filter dropdown to allow users to navigate the growing number of posts. Lastly, I moved the website from Godaddy to a Digital Ocean server to vastly improve server response time and enhance the user experience."
          }
        />

        {/* <ThreeMobileImage
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
        /> */}

        {/* First Image */}
        <ShowcaseImage src={"/centers/centersone.jpg"} alt={"Homepage"} />

        {/* Second Image */}
        <ShowcaseImage
          src={"/centers/centerstwo.jpg"}
          alt={"Skilled Nursing"}
        />

        {/* Third Image */}
        <ShowcaseImage
          src={"/centers/centersthree.jpg"}
          alt={"Skilled Nursing"}
        />

        {/* Third Image */}
        <ShowcaseImage
          src={"/centers/centersfour.jpg"}
          alt={"Skilled Nursing"}
        />
      </main>
    </>
  );
}
