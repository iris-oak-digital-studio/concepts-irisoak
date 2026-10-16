import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MenuPreview from "@/components/MenuPreview";
import Whisky from "@/components/Whiskey";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Willow & Gray — Iris & Oak Concepts",
};

export default function WillowAndGrayPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <MenuPreview />
      <Whisky />
      <Visit />
      <Footer />
    </main>
  );
}