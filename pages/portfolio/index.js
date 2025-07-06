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
      name: "Freemodel",
      sub: "Full-service home renovations",
      link: "/portfolio/freemodel",
      image: "/freemodel/nccfree.jpg",
    },
    {
      name: "Cassetta",
      sub: "Audio Social Platform",
      link: "/portfolio/cassetta",
      image: "/cassetta/cassettalist.jpeg",
    },
    {
      name: "Guides Hub",
      sub: "Hub for first-time home buyers",
      link: "/portfolio/guideshub",
      image: "/rdcguides/guideshublist.jpg",
    },
    {
      name: "News & Insights",
      sub: "Realtor.com's News Platform",
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
      link: "/portfolio/woolzies",
      image: "/woolzies/woolzieslist.jpeg",
    },
    {
      name: "Chorus",
      sub: "Medical Software",
      link: "/portfolio/chorus",
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
