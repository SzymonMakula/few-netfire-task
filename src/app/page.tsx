"use client";

import DiscountBanner, {
  Discount,
} from "@/components/organisms/DiscountBanner";
import Navbar from "@/app/Navbar";
import ExampleSection from "@/app/ExampleSection";
import Footer from "@/components/organisms/Footer";
import Hero from "@/app/Hero";

const MAIN_DISCOUNT: Discount = {
  value: 15,
  code: "welcome15",
  url: new URL("http://localhost"),
};

export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <DiscountBanner discount={MAIN_DISCOUNT} />
      <Navbar />
      <Hero />
      <ExampleSection />
      <Footer />
    </main>
  );
}
