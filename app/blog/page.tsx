"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Waste Management", "Sustainability", "Recycling Tips", "Projects", "Updates"]

  const posts = [
    {
      title: "5 Ways to Reduce Your Household Waste",
      category: "Recycling Tips",
      date: "Dec 1, 2024",
      author: "Priya Sharma",
      excerpt: "Learn practical strategies to minimize waste generation in your daily life.",
      image: "/reduce-reuse-recycle-household-waste.jpg",
      slug: "reduce-household-waste",
    },
    {
      title: "The Future of Smart City Waste Management",
      category: "Waste Management",
      date: "Nov 28, 2024",
      author: "Amit Desai",
      excerpt: "Exploring IoT and AI technologies revolutionizing urban waste systems.",
      image: "/smart-city-technology-waste-management.jpg",
      slug: "smart-city-waste",
    },
    {
      title: "Success Stories: From Waste to Wealth",
      category: "Projects",
      date: "Nov 25, 2024",
      author: "Rajesh Kumar",
      excerpt: "Meet the entrepreneurs transforming waste into sustainable products.",
      image: "/recycled-products-success-story.jpg",
      slug: "waste-to-wealth",
    },
    {
      title: "Understanding Circular Economy Principles",
      category: "Sustainability",
      date: "Nov 22, 2024",
      author: "Neha Gupta",
      excerpt: "Deep dive into how circular economy creates sustainable businesses.",
      image: "/circular-economy-infographic.jpg",
      slug: "circular-economy",
    },
    {
      title: "Kabarwala Expands to Mumbai and Bangalore",
      category: "Updates",
      date: "Nov 20, 2024",
      author: "Team Kabarwala",
      excerpt: "We are thrilled to announce our expansion into two major metropolitan areas.",
      image: "/city-expansion-announcement.jpg",
      slug: "expansion-announcement",
    },
    {
      title: "The Impact of E-Waste on Our Environment",
      category: "Waste Management",
      date: "Nov 18, 2024",
      author: "Dr. Rajesh Bhat",
      excerpt: "Understanding the challenges and solutions for electronic waste management.",
      image: "/placeholder.svg?height=300&width=400",
      slug: "ewaste-impact",
    },
  ]

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Blog & Insights</h1>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Latest news, tips, and stories on waste management and sustainability
        </p>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <Link key={idx} href={`/blog/${post.slug}`} className="group">
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
