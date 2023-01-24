import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/header";
import Picker from "../components/projectpicker";

export default function index() {
  return (
    <main className=" h-screen w-screen bg-ncc-dark">
      <Navbar />
      <Picker />
    </main>
  );
}
