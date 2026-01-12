"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, Leaf, Recycle, TrendingUp, Users, Package, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ANIMATION_VARIANTS } from "@/lib/animations"

const containerVariants = ANIMATION_VARIANTS.containerStagger
const itemVariants = ANIMATION_VARIANTS.fadeInUp

export default function Home() {
  const stats = [
    { label: "Households Served", value: "50K+", icon: Users },
    { label: "Waste Collected (Tons)", value: "2.5K+", icon: Package },
    { label: "Projects Completed", value: "150+", icon: TrendingUp },
    { label: "Trees Saved", value: "100K+", icon: Leaf },
  ]

  const services = [
    {
      icon: Recycle,
      title: "Waste Pickup & Recycling",
      description: "Convenient doorstep waste collection with proper segregation and recycling.",
    },
    {
      icon: TrendingUp,
      title: "Buy/Sell Old Products",
      description: "Give your old items a second life in our sustainable marketplace.",
    },
    {
      icon: Zap,
      title: "Smart City Solutions",
      description: "IoT-enabled waste management for intelligent urban systems.",
    },
    {
      icon: Leaf,
      title: "Sustainable Bins",
      description: "Eco-friendly waste bins with digital tracking capabilities.",
    },
    {
      icon: Package,
      title: "Digital Tracking",
      description: "Real-time monitoring of waste collection and recycling process.",
    },
    {
      icon: Users,
      title: "Community Awareness",
      description: "Education and engagement programs for sustainable living.",
    },
  ]

  const projects = [
    { title: "Smart Waste Collection", image: "/smart-waste-bin-technology.jpg" },
    { title: "Recycling Hub Initiative", image: "/recycling-center-facility.jpg" },
    { title: "School Programs", image: "/students-learning-sustainability.jpg" },
    { title: "Community Outreach", image: "/community-engagement-event.jpg" },
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center items-center w-full"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 text-primary font-semibold"
            >
              <Sparkles size={20} />
              <span>Transform Waste, Build Future</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl text-primary font-bold text-foreground leading-tight">
              <motion.span
                className="text-gradient"
                initial={{ backgroundPosition: "200% center" }}
                animate={{ backgroundPosition: "0% center" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                style={{
                  // backgroundImage: "linear-gradient(90deg, #1a7c3f, #2d9951, #1a7c3f)",
                  backgroundSize: "200% center",
                }}
              >
                Transforming Waste,
              </motion.span>
              <br />
              Transforming Lives
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg"
            >
              Smart waste management and sustainable recycling solutions powered by innovation and community commitment
              for a cleaner, smarter future.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/book-waste"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  Book Your Waste <ArrowRight size={20} />
                </span>
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
              >
                Know More <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden group"
          >
            <img
              src="/sustainable-waste-management-city.jpg"
              alt="Sustainable waste management"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl"></div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card bg-gradient-to-br from-primary/10 to-secondary/5 dark:from-primary/20 dark:to-secondary/10 border-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-foreground">Our Mission</h2>
          <p className="text-lg text-foreground/80 text-center leading-relaxed max-w-3xl mx-auto">
            Kabarwala – Bascone Foundation is committed to revolutionizing waste management through innovative
            technology, community engagement, and sustainable practices. We aim to transform waste from a problem into a
            resource while building cleaner, healthier communities.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group glass-card hover:glow-green"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Icon className="w-12 h-12 text-primary" />
                  </motion.div>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2 text-center">{stat.value}</h3>
                <p className="text-foreground/70 text-center">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Core Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group glass-card hover:glow-primary relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10">
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-125 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden h-64 cursor-pointer"
            >
              <img
                src={project.image || "/placeholder.svg?height=300&width=300&query=project"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-colors flex items-end p-8">
                <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} className="w-full">
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            Explore All Projects{" "}
            <motion.div whileHover={{ x: 5 }}>
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Community Voices
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "Kabarwala made waste management effortless and eco-friendly.", author: "Rajesh Kumar" },
            { quote: "Their smart bins have transformed how our community handles waste.", author: "Priya Sharma" },
            { quote: "A game-changer for sustainable urban living.", author: "Amit Desai" },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ rotateY: 5, scale: 1.02 }}
              className="glass-card border-0"
            >
              <p className="text-foreground/80 mb-4 italic text-lg">"{testimonial.quote}"</p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-semibold text-primary"
              >
                — {testimonial.author}
              </motion.p>
            </motion.div>
          ))}
        </div>
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
          className="relative bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            style={{
              backgroundImage: "url('/noise.png')",
              backgroundSize: "200px 200px",
            }}
          ></motion.div>

          <motion.div variants={itemVariants} className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join the Change?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Start your waste management journey with Kabarwala today. Together, we can build a sustainable future.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/book-waste"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Book Your Waste Now <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
}
