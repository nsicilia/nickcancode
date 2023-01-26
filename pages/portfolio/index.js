import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/header";
import Picker from "../../components/projectpicker";
import HomeBackground from "../../components/HomeBG/HomeBG";
import cassetta from "./cassetta";
import guideshub from "./guideshub";

export default function index() {
  const data = [
    {
      name: "Cassetta",
      sub: "Audio Social Platform",
      link: "/portfolio/cassetta",
      image: "/cassetta/cassettalist.jpeg",
    },
    {
      name: "Realtor.com",
      sub: "Guides Hub",
      link: "/portfolio/guideshub",
      image: "/rdcguides/guideshublist.jpg",
    },
    {
      name: "Realtor.com",
      sub: "News & Insights Platform",
      link: "/portfolio/newsandinsights",
      image: "/rdcnews/newslist.jpg",
    },
    {
      name: "Crunch",
      sub: "On-Demand Food Ordering",
      link: "/portfolio/crunch",
      image: "/crunch/crunchlist.jpeg",
    },
    {
      name: "Centers",
      sub: "Health Care Services",
      link: "/portfolio/centers",
      image: "/centers/cntrslist.jpg",
    },
    {
      name: "Woolzies",
      sub: "Beauty & Cosmetics",
      link: "javascript:void(0)",
      image: "/woolzies/woolzieslist.jpeg",
    },
    {
      name: "Chorus",
      sub: "Medical Software",
      link: "javascript:void(0)",
      image: "/chorus/choruslist.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>nickcancode</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/nickcancodeicon.svg" />
      </Head>
      <main className=" h-screen w-screen bg-transparent">
        <div className="absolute bg-transparent w-screen">
          <Navbar />
          <Picker data={data} />
        </div>
        <HomeBackground />
      </main>
    </>
  );
}
