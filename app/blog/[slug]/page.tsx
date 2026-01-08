"use client"

import { use } from "react";

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const blogContent: Record<string, any> = {
  "reduce-household-waste": {
    title: "5 Ways to Reduce Your Household Waste",
    author: "Priya Sharma",
    date: "Dec 1, 2024",
    category: "Recycling Tips",
    image: "/reduce-reuse-recycle-household-waste.jpg",
    content: `
    Reducing household waste is one of the most impactful steps you can take toward environmental sustainability. Here are five practical strategies to minimize waste generation in your daily life.

    1. Start with Mindful Consumption
    Before bringing anything home, ask yourself if you really need it. This simple practice can dramatically reduce the amount of waste you generate. Plan your purchases carefully and buy only what you need.

    2. Embrace the 3 Rs: Reduce, Reuse, Recycle
    Reduce consumption first, then reuse items creatively, and finally recycle when possible. Many items can be repurposed - old containers, clothing, and furniture can have new life.

    3. Compost Organic Waste
    Organic waste makes up a significant portion of household trash. Start composting to create nutrient-rich soil for your garden while diverting waste from landfills.

    4. Choose Sustainable Products
    Select products with minimal packaging, use refillable containers, and choose eco-friendly alternatives to single-use items.

    5. Engage Your Family
    Make waste reduction a family activity. Educate children about sustainability and involve them in sorting, composting, and creative reuse projects.
    `,
    readTime: "5 min read",
  },
  "smart-city-waste": {
    title: "The Future of Smart City Waste Management",
    author: "Amit Desai",
    date: "Nov 28, 2024",
    category: "Waste Management",
    image: "/smart-city-technology-waste-management.jpg",
    content: `
    Smart cities are revolutionizing urban waste management through cutting-edge IoT and AI technologies. This transformation is creating more efficient, sustainable, and responsive waste systems.

    ## IoT-Enabled Smart Bins
    Smart bins equipped with sensors can detect fill levels, optimize collection routes, and reduce unnecessary pickups, saving fuel and emissions.

    ## AI-Powered Route Optimization
    Artificial intelligence analyzes collection patterns and optimizes truck routes in real-time, reducing time, cost, and carbon footprint.

    ## Real-Time Monitoring
    Residents and municipalities can track waste collection in real-time, improving transparency and accountability in waste management processes.

    ## Predictive Analytics
    Machine learning models predict waste generation patterns, helping authorities better plan resources and infrastructure.

    ## Community Engagement
    Digital platforms allow citizens to participate actively in waste management, report issues, and contribute to sustainability goals.
    `,
    readTime: "7 min read",
  },
  "waste-to-wealth": {
    title: "Success Stories: From Waste to Wealth",
    author: "Rajesh Kumar",
    date: "Nov 25, 2024",
    category: "Projects",
    image: "/recycled-products-success-story.jpg",
    content: `
    Kabarwala's marketplace has empowered dozens of entrepreneurs to turn waste into valuable products. Here are some inspiring success stories.

    ## The Plastic Innovators
    A group of young entrepreneurs now produces high-quality handicrafts and household items from recycled plastic. Their business has grown 300% in the last year.

    ## E-Waste Electronics
    Skilled technicians have started refurbishing electronic devices, extending product lifecycles and creating affordable electronics for budget-conscious consumers.

    ## Textile Revival
    Old textiles are being transformed into trendy fashion items and home décor products, creating jobs and reducing textile waste.

    ## Impact Metrics
    These entrepreneurs collectively have diverted over 500 tons of waste from landfills while creating 200+ employment opportunities.
    `,
    readTime: "6 min read",
  },
}

export default function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // ✅ unwrap

  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar />
        <div className="pt-32 pb-16 px-4 text-center max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Reading Progress */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-16 left-0 h-1 bg-primary origin-left z-40"
      />

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-96 overflow-hidden pt-16"
      >
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-foreground/60 text-sm mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User size={16} /> {post.author}
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
            <span>{post.readTime}</span>
          </div>

          <button className="flex items-center gap-2 text-primary hover:underline">
            <Share2 size={18} /> Share
          </button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph: string, idx: number) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={idx} className="text-3xl font-bold mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            return (
              <p key={idx} className="text-foreground/80 leading-relaxed mb-4">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Related Articles */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-8">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, idx) => (
              <Link key={idx} href="/blog" className="group">
                <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">Explore More Insights</h4>
                  <p className="text-sm text-foreground/70 mt-2">Discover more articles on waste management</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.article>

      <Footer />
    </div>
  )
}
