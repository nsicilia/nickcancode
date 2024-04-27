import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

//Test
import HomeBackground from "../components/HomeBG/HomeBG";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Purple Lantern</title>
        <meta name="description" content="Personal Portfolio Website" />
        <meta
          name="image"
          property="og:image"
          content="https://www.nickcancode.com/placeholder.svg"
        />
        <link rel="icon" href="/pl_logo.svg" />
      </Head>

      <main className={styles.main}>
        {/* <Navbar />*/}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/PL_FullLogo.svg"
              alt="Purple Lantern Logo"
              className="w-[20rem] h-44"
            />
            <h2 className="text-black text-center text-5xl font-semibold">
              Designing for Progress, Building for Impact.
            </h2>
            <div className="flex flex-row space-x-4 mt-8">
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-ncc-bakermiller"
              >
                Portfolio
              </Link>
              {/* <Link
                href="https://drive.google.com/file/d/1nwcHY1WyIcEXk1XkIxfi0OTtFwrtcc-r/view?usp=sharing"
                target={"_blank"}
                className="text-gray-700 hover:text-ncc-bakermiller"
              >
                Resume
              </Link> */}
              <Link
                href="/about"
                className="text-gray-700 hover:text-ncc-bakermiller"
              >
                About
              </Link>
            </div>
            {/* External */}
            <div className="flex flex-row space-x-4 mt-4">
              {/* <a
                href="https://www.linkedin.com/in/nicholassiciliano/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaLinkedinIn />
              </a> */}
              <a
                href="mailto:hello@purplelantern.co"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaEnvelope />
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
