"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Shield, Leaf, Zap, Users } from "lucide-react"

export default function About() {
  const values = [
    { icon: Leaf, title: "Sustainability", description: "Committed to eco-friendly practices in all operations." },
    { icon: Shield, title: "Transparency", description: "Open and honest communication with all stakeholders." },
    { icon: Users, title: "Community", description: "Empowering communities through education and engagement." },
    { icon: Zap, title: "Innovation", description: "Leveraging technology for better waste management." },
  ]

  const team = [
    { name: "RAJKISHOR GUPTA", role: "Founder & CEO", image: "/team_01.jpg" },
    { name: "ATUL SHANKAR", role: "Data Analyst", image: "/team_02.jpg" },
    { name: "MUKESH KUMAR", role: "Legal Advisor", image: "/team_03.jpg" },
    { name: "ABHISHEK ANAND", role: "Project Manager", image: "/team_04.jpg" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">About Kabarwala</h1>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Our Mission & Vision for Sustainable Urban Futures
        </p>
      </section>

      {/* Story */}
      <section className="py-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We are an NGO based in Bhagalpur, Bihar, dedicated to improving livelihoods and creating smart cities. 
              Our primary focus is to uplift the community by providing various opportunities and initiatives that 
              promote sustainable development. Through our projects, we aim to enhance the standard of living for the 
              residents of Bhagalpur and contribute towards the overall progress of the city. We work tirelessly to 
              empower individuals, particularly those from marginalized backgrounds, by offering skill development 
              programs, job placement assistance and entrepreneurship training. Additionally, we strive to make Bhagalpur
              a smarter and more technologically advanced city by implementing innovative solutions and leveraging 
              digital technologies. Our dedicated team of professionals and volunteers are committed to making a positive
              impact and fostering a thriving community in Bhagalpur.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Founded in 2015, Kabarwala – Bascone Foundation emerged from a simple yet powerful vision: to transform
              how cities manage waste. What started as a small community initiative has evolved into a comprehensive
              waste management ecosystem.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Today, we serve over 50,000 households, manage thousands of tons of waste annually, and continue
              innovating with smart technology and community partnerships to build cleaner, healthier cities.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img src="/ngo-team-working-sustainability.jpg" alt="Our story" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary/40 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-foreground/80 leading-relaxed">
              To revolutionize waste management through sustainable practices, innovative technology, and community
              empowerment, creating a circular economy that transforms waste into valuable resources for cleaner cities
              and healthier futures.
            </p>
          </div>
          <div className="bg-secondary/40 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              A world where waste is eliminated as a concept, resources are infinitely recycled, and every community is
              empowered to live sustainably. Smart cities where technology and human values align for environmental
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="bg-card rounded-xl p-8 text-center border border-border hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Timeline of Growth</h2>
        <div className="relative">
          {[
            { year: "2015", event: "Foundation established with 100 households" },
            { year: "2017", event: "Expanded to 10,000 households across Delhi" },
            { year: "2019", event: "Launched Smart Bins with IoT tracking" },
            { year: "2022", event: "Reached 50,000 households milestone" },
            { year: "2024", event: "Expanding to 5 major Indian cities" },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full" />
                {idx < 4 && <div className="w-1 h-16 bg-border mt-2" />}
              </div>
              <div className="pt-1">
                <p className="text-sm font-semibold text-primary">{item.year}</p>
                <p className="text-foreground/70">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Section-8 NGO", description: "Registered as a non-profit organization" },
            { title: "ISO 14001", description: "Environmental management certification" },
            { title: "UN SDG Partner", description: "Aligned with UN Sustainable Development Goals" },
          ].map((cert, idx) => (
            <div key={idx} className="bg-card rounded-xl p-8 text-center border border-border">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-foreground/70 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
