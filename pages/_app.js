import "../styles/globals.css";
import { Maven_Pro } from "@next/font/google";

const mavenpro = Maven_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${mavenpro.variable} font-sans`}>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Maven Pro", cursive;
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
