"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, TrendingUp, LineChart, Target } from 'lucide-react'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '2rem' }}
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
      </motion.div>

      <div className="container px-4 md:px-6 pt-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                style={{ y: y2 }}
              >
                Empowering Indian Startups with
                <span className="text-primary"> Innovative Solutions</span>
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                style={{ opacity }}
              >
                Transform your startup journey with our comprehensive suite of services. From ideation to execution, we're your trusted partner in success.
              </motion.p>
            </div>

            {/* Business Infographic */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             
            </motion.div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="inline-flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ y: y2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[500px] max-h-[500px] overflow-hidden rounded-xl border p-8">
              <img
                alt="Hero Image"
                className="w-full h-full object-contain"
                src="/hero_section_img.svg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero