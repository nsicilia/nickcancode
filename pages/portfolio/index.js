import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/header";
import Picker from "../components/projectpicker";
import HomeBackground from "../components/HomeBG/HomeBG";

export default function index() {
  return (
    <main className=" h-screen w-screen bg-transparent">
      <div className="absolute bg-transparent w-screen">
        <Navbar />
        <Picker />
      </div>
      <HomeBackground />
    </main>
  );
}
