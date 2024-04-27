import "../styles/globals.css";
import { Shrikhand } from "@next/font/google";

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shrikhand",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${shrikhand.variable} font-sans`}>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Shrikhand", cursive;
        }
      `}</style>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
