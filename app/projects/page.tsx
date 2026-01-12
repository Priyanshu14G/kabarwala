"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Zap, AlertCircle, Rocket, BookOpen, Smartphone, Leaf, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ANIMATION_VARIANTS } from "@/lib/animations"

const containerVariants = ANIMATION_VARIANTS.containerStagger
const itemVariants = ANIMATION_VARIANTS.fadeInUp

export default function Projects() {
  const projects = [
    {
      id: "smart-dustbin",
      icon: Zap,
      title: "Smart Dustbin IoT Deployment",
      status: "Pilot",
      description: "Deploy 5,000 IoT-enabled dustbins across major cities with real-time monitoring.",
      image: "/smart-waste-bin-iot-technology.jpg",
      impact: "Reduce waste pickup costs by 40%",
    },
    {
      id: "waste-to-energy",
      icon: Rocket,
      title: "Waste-to-Energy Conversion",
      status: "Early Stage",
      description: "Convert segregated waste into renewable energy for community use.",
      image: "/waste-to-energy-conversion-facility.jpg",
      impact: "Generate 500kW renewable energy",
    },
    {
      id: "ewaste-collection",
      icon: AlertCircle,
      title: "City-Wide E-Waste Collection",
      status: "Planning",
      description: "Establish e-waste collection drives to prevent environmental contamination.",
      image: "/electronic-waste-recycling.png",
      impact: "Prevent 1000 tons e-waste annually",
    },
    {
      id: "school-programs",
      icon: BookOpen,
      title: "School Sustainability Programs",
      status: "Pilot",
      description: "Educate 100,000 students on waste management and circular economy principles.",
      image: "/students-learning-about-sustainability.jpg",
      impact: "Impact 100K+ students",
    },
    {
      id: "waste-tracking-app",
      icon: Smartphone,
      title: "Digital Waste Tracking App",
      status: "Development",
      description: "Mobile app for users to track their waste and environmental impact.",
      image: "/mobile-app-interface.png",
      impact: "Empower community engagement",
    },
    {
      id: "green-spaces",
      icon: Leaf,
      title: "Community Green Spaces",
      status: "Early Stage",
      description: "Transform waste collection sites into community gardens and green spaces.",
      image: "/community-garden-green-space.jpg",
      impact: "Create 50 green spaces",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Planning":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
      case "Early Stage":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
      case "Pilot":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
      case "Development":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
      default:
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
        </div>

        <motion.h1 variants={itemVariants} className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 text-foreground">
          Upcoming <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Future Vision & Initiatives for Sustainable Change
        </motion.p>
      </motion.section>

      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative rounded-2xl overflow-hidden h-full cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent dark:from-primary/20 dark:via-secondary/10 rounded-2xl"></div>

                  <div className="relative z-10 h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image || "/placeholder.svg?height=300&width=300&query=project"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 transition-colors"></div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-4 right-4"
                    >
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                    </motion.div>
                  </div>

                  <div className="relative z-10 p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-b-2xl border-t border-white/20 dark:border-slate-700/30">
                    <div className="flex items-start gap-3 mb-3">
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                        <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-foreground line-clamp-2">{project.title}</h3>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"
                    ></motion.div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-primary">{project.impact}</span>
                      <motion.div whileHover={{ x: 5 }}>
                        <ArrowRight size={16} className="text-primary" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Roadmap for Future Initiatives
        </motion.h2>
        <motion.div variants={itemVariants} className="glass-card border-0">
          <div className="space-y-8">
            {[
              { quarter: "Q1 2024", milestone: "Complete IoT deployment to 2,000 bins" },
              { quarter: "Q2 2024", milestone: "Launch digital tracking app for users" },
              { quarter: "Q3 2024", milestone: "Establish waste-to-energy pilot facility" },
              { quarter: "Q4 2024", milestone: "Reach 100,000 students through school programs" },
              { quarter: "Q1 2025", milestone: "Expand services to 3 new cities" },
              { quarter: "Q2 2025", milestone: "Achieve carbon-neutral operations" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-24 font-semibold text-primary group-hover:text-secondary transition-colors">
                  {item.quarter}
                </div>
                <motion.div className="flex-grow pb-6 border-b border-border last:border-b-0" whileHover={{ x: 10 }}>
                  <p className="text-foreground/80 group-hover:text-foreground transition-colors">{item.milestone}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.1) 50%)",
              backgroundSize: "200% 200%",
            }}
          ></motion.div>

          <motion.div variants={itemVariants} className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in Partnering?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in creating sustainable waste management solutions. We're seeking partners, sponsors, and
              collaborators.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
}
