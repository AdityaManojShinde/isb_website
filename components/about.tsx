"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, TrendingUp, Award } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Startups Helped',
  },
  {
    icon: Target,
    value: '95%',
    label: 'Success Rate',
  },
  {
    icon: TrendingUp,
    value: '₹100Cr+',
    label: 'Funding Raised',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Awards Won',
  },
]

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empowering the Indian Startup Ecosystem
            </h2>
            <p className="text-muted-foreground md:text-lg">
              At ISB, we're passionate about nurturing and growing Indian startups. Our mission is to provide comprehensive support and innovative solutions that help entrepreneurs turn their visions into successful businesses.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the catalyst that transforms India's startup landscape, making it a global hub for innovation and entrepreneurship.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide startups with the tools, knowledge, and support they need to scale their businesses and make a lasting impact on the Indian economy.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg border bg-background p-8"
              >
                <div className="absolute inset-0 " />
                <stat.icon className="h-10 w-10 text-primary mb-4" />
                <div className="relative">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About