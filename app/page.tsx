"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar/navbar";
import Hero from "@/components/sections/Hero/hero";
import Services from "@/components/sections/Services/services";
import About from "@/components/sections/About/about";
import Testimonials from "@/components/sections/Testimonials/testimonials";
import Contact from "@/components/sections/Contact/contact";
import Footer from "@/components/sections/Footer/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
