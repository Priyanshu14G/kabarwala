"use client"

import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowLeft, Target, Users, TrendingUp, Leaf, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ANIMATION_VARIANTS } from "@/lib/animations"

const containerVariants = ANIMATION_VARIANTS.containerStagger
const itemVariants = ANIMATION_VARIANTS.fadeInUp

const projectDetails: Record<string, any> = {
  "smart-dustbin": {
    title: "Smart Dustbin IoT Deployment",
    image: "/smart-waste-bin-iot-technology.jpg",
    status: "Pilot",
    overview:
      "Our flagship Smart Dustbin IoT deployment initiative aims to revolutionize waste collection by deploying 5,000 IoT-enabled dustbins across major metropolitan areas with real-time monitoring and analytics.",
    problem:
      "Traditional waste collection is inefficient, leading to overflowing bins, missed pickups, and poor resource allocation. Manual collection processes waste time and increases carbon emissions.",
    solution:
      "Smart bins equipped with sensors send real-time fill-level data to our cloud platform. Collection vehicles optimize routes based on actual bin capacity, reducing fuel consumption and improving service.",
    metrics: [
      { label: "Bins to Deploy", value: "5,000", icon: Target },
      { label: "Cost Reduction", value: "40%", icon: TrendingUp },
      { label: "Communities", value: "15+", icon: Users },
      { label: "CO2 Saved", value: "2,000 tons/yr", icon: Leaf },
    ],
    timeline: [
      { phase: "Phase 1", description: "Development & Testing (Q1 2024)" },
      { phase: "Phase 2", description: "Pilot Deployment (Q2 2024)" },
      { phase: "Phase 3", description: "Scale to 2,000 bins (Q3 2024)" },
      { phase: "Phase 4", description: "Full Rollout 5,000 bins (Q4 2024)" },
    ],
    technologies: ["IoT Sensors", "Cloud Platform", "AI Analytics", "Mobile App", "Real-time Dashboard"],
    impact:
      "This project will reduce waste collection costs by 40%, decrease carbon emissions, and provide data-driven insights for sustainable city planning.",
  },
  "waste-to-energy": {
    title: "Waste-to-Energy Conversion",
    image: "/waste-to-energy-conversion-facility.jpg",
    status: "Early Stage",
    overview:
      "Convert segregated waste into renewable energy for community use, creating a sustainable energy source while solving waste management challenges.",
    problem:
      "Landfills emit methane, a potent greenhouse gas. Current waste disposal methods waste valuable energy potential and contribute to climate change.",
    solution:
      "We're building a waste-to-energy facility that converts segregated organic and combustible waste into biogas and electricity through anaerobic digestion and gasification.",
    metrics: [
      { label: "Energy Output", value: "500kW", icon: Target },
      { label: "Waste Processed", value: "50 tons/day", icon: TrendingUp },
      { label: "Families Served", value: "10K+", icon: Users },
      { label: "Emissions Avoided", value: "5K tons CO2", icon: Leaf },
    ],
    timeline: [
      { phase: "Phase 1", description: "Site Selection & Planning (Q1 2024)" },
      { phase: "Phase 2", description: "Infrastructure Development (Q2-Q3 2024)" },
      { phase: "Phase 3", description: "Facility Commissioning (Q4 2024)" },
      { phase: "Phase 4", description: "Full Operations (2025)" },
    ],
    technologies: ["Anaerobic Digestion", "Biogas Processing", "Power Generation", "Environmental Monitoring"],
    impact:
      "Generate 500kW of renewable energy, process 50 tons of waste daily, and power homes while eliminating methane emissions from landfills.",
  },
  "ewaste-collection": {
    title: "City-Wide E-Waste Collection",
    image: "/electronic-waste-recycling.png",
    status: "Planning",
    overview:
      "Establish comprehensive e-waste collection drives across cities to prevent environmental contamination and recover valuable materials from electronic waste.",
    problem:
      "E-waste contains toxic materials like lead and mercury. Improper disposal pollutes soil and water. Currently, only 20% of e-waste is properly recycled.",
    solution:
      "We're setting up collection centers, mobile collection drives, and partnerships with businesses to ensure safe e-waste handling and recycling of valuable materials.",
    metrics: [
      { label: "E-Waste Prevented", value: "1,000 tons/yr", icon: Target },
      { label: "Collection Points", value: "50+", icon: TrendingUp },
      { label: "Materials Recovered", value: "95%", icon: Users },
      { label: "Communities", value: "20+", icon: Leaf },
    ],
    timeline: [
      { phase: "Phase 1", description: "Infrastructure Setup (Q1 2024)" },
      { phase: "Phase 2", description: "Collection Center Launch (Q2 2024)" },
      { phase: "Phase 3", description: "Mobile Drives (Q3 2024)" },
      { phase: "Phase 4", description: "Full Network (Q4 2024)" },
    ],
    technologies: ["Recycling Equipment", "Material Sorting", "Logistics Network", "Tracking System"],
    impact:
      "Prevent 1,000 tons of e-waste annually, recover 95% of valuable materials, and eliminate toxic contamination in communities.",
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectDetails[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                {project.status}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              {project.title}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-foreground/70 leading-relaxed">
              {project.overview}
            </motion.p>

            <motion.div variants={itemVariants} className="pt-6 border-t border-border">
              <p className="text-sm font-semibold text-primary mb-3">Key Metrics</p>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric: any, idx: number) => {
                  const Icon = metric.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-lg text-foreground">{metric.value}</p>
                        <p className="text-sm text-foreground/60">{metric.label}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-full min-h-96 rounded-3xl overflow-hidden group"
          >
            <img
              src={project.image || "/placeholder.svg?height=500&width=500&query=project"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem & Solution */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants} className="glass-card border-0">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> The Problem
          </h3>
          <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card border-0">
          <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
            <CheckCircle className="text-primary" size={24} /> Our Solution
          </h3>
          <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
        </motion.div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Implementation Timeline
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.timeline.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card border-0 relative"
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full m-6"></div>
              <h4 className="text-lg font-bold text-primary mb-3">{item.phase}</h4>
              <p className="text-sm text-foreground/70">{item.description}</p>

              {idx < project.timeline.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Technologies & Approach
        </motion.h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {project.technologies.map((tech: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-foreground font-medium hover:glow-green transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="relative bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>

          <motion.div variants={containerVariants} className="relative z-10">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Expected Impact
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg opacity-90 max-w-2xl mx-auto">
              {project.impact}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
}
