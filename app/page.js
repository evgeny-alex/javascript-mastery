import { Suspense } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeaturesListicle from "@/components/FeaturesListicle";
import Demo from "@/components/Demo";

export default function Page() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <FeaturesListicle />
        <Demo />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
