"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Smartphone,
  Palette,
  PenTool,
  Calculator,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Memorable brand identities that make lasting impressions.",
  },
  {
    icon: Calculator,
    title: "Numerology",
    description: "Ancient wisdom applied to modern business decisions.",
  },
  {
    icon: Briefcase,
    title: "Startup Consulting",
    description: "Strategic guidance to help your startup succeed.",
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-lg hover:bg-primary"
    >
      <div className="relative z-10">
        <Icon className="h-10 w-10 mb-4 transition-colors text-primary group-hover:text-white" />
        <h3 className="text-lg font-semibold mb-2 transition-colors text-foreground group-hover:text-white">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 transition-colors group-hover:text-white">
          {description}
        </p>
        <Button
          variant="ghost"
          className="group/button text-primary group-hover:text-black bg-white"
          onClick={() => scrollToSection("contact")}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Comprehensive solutions to help your startup thrive in the digital
            age
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
