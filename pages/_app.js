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
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
