"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Function to scroll to a section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const herodata = {
    title: "Empowering Indian Startups",
    description:
      "Your gateway to India's vibrant startup ecosystem. Discover opportunities, connect with innovators, and grow your business.",
    buttonText1: "Contact",
    buttonText2: "Learn More",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "1.5rem" }}
    >
      <motion.div className="absolute inset-0 -z-10" style={{ y: y1 }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
      </motion.div>

      <div className="container px-4 md:px-6 pt-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <motion.div
              animate={{
                y: [0, -20, 0], // Keyframes for up and down animation
              }}
              transition={{
                duration: 3, // Duration of one complete cycle
                repeat: Infinity, // Loop the animation infinitely
                ease: "easeInOut", // Smooth easing
              }}
              className="relative w-full h-[400px] lg:h-[400px]"
            >
              <Image
                src="/hero/light.svg"
                alt="Indian Startup Business"
                fill
                className="shadow object-contain rounded-3xl dark:hidden"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                src="/hero/dark.svg"
                alt="Indian Startup Business"
                fill
                className="object-contain rounded-3xl hidden dark:block"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {herodata.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    style={{
                      color:
                        index % 3 === 0
                          ? "#FF9933" // Saffron
                          : index % 3 === 1
                          ? "#87CEEB" // Light Blue (Ashoka Chakra color)
                          : "#16C47F", // Green
                    }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {herodata.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 pb-6 min-[400px]:flex-row">
              <Button
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white hover:bg-primary/90 dark:text-black"
                onClick={() => scrollToSection("contact")}
              >
                {herodata.buttonText1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="inline-flex items-center rounded-lg px-6 py-3 text-lg font-medium"
                onClick={() => scrollToSection("about")}
              >
                {herodata.buttonText2}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
