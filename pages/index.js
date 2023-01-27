import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

//Test
import HomeBackground from "../components/HomeBG/HomeBG";
import Link from "next/link";

import Placeholder from "../public/placeholder.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nickcancode</title>
        <meta name="description" content="Personal Portfolio Website" />
        <meta name="image" content="/placeholder.svg" />
        <link rel="icon" href={Placeholder} />
      </Head>

      <main className={styles.main}>
        {/* <Navbar />*/}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-center text-6xl font-serif">
              Nick Siciliano-Salazar
            </h1>
            <h2 className="text-white text-center text-3xl font-mono font-semibold">
              User Experience Engineer
            </h2>
            <div className="flex flex-row space-x-4 mt-4">
              <Link
                href="/portfolio"
                className="text-white hover:text-ncc-bakermiller"
              >
                Portfolio
              </Link>
              <Link
                href="https://drive.google.com/file/d/1DwOadLCVewGCcUUPo5rgEkdIS11y4OKw/view?usp=sharing"
                target={"_blank"}
                className="text-white hover:text-ncc-bakermiller"
              >
                Resume
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-ncc-bakermiller"
              >
                About
              </Link>
            </div>
            {/* External */}
            <div className="flex flex-row space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/nicholassiciliano/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/nsicilia"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <HomeBackground />
      </main>

      {/* <footer className={styles.footer}>
        <p>Made with ❤️ in NYC</p>
      </footer> */}
    </div>
  );
}
