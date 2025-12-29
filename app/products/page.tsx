"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ShoppingCart, MapPin, Star, Filter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")

  const categories = ["All", "Plastic Products", "Metal Items", "E-Waste", "Paper Products", "Textiles"]

  const products = [
    {
      id: 1,
      name: "Recycled Plastic Planters",
      seller: "Green Crafts Co.",
      price: 299,
      rating: 4.8,
      reviews: 124,
      location: "Delhi",
      category: "Plastic Products",
      image: "/recycled-plastic-products.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "Upcycled Metal Wall Art",
      seller: "Metallic Dreams",
      price: 899,
      rating: 4.9,
      reviews: 87,
      location: "Mumbai",
      category: "Metal Items",
      image: "/metal-recycled-art.jpg",
      inStock: true,
    },
    {
      id: 3,
      name: "Refurbished Laptop (Dell)",
      seller: "Tech Renewal",
      price: 15999,
      rating: 4.7,
      reviews: 156,
      location: "Bangalore",
      category: "E-Waste",
      image: "/refurbished-electronics.jpg",
      inStock: true,
    },
    {
      id: 4,
      name: "Handmade Paper Notebooks",
      seller: "Paper Stories",
      price: 199,
      rating: 4.6,
      reviews: 98,
      location: "Delhi",
      category: "Paper Products",
      image: "/recycled-paper-notebook.jpg",
      inStock: true,
    },
    {
      id: 5,
      name: "Organic Cotton Tote Bags",
      seller: "Textile Revival",
      price: 449,
      rating: 4.8,
      reviews: 201,
      location: "Bangalore",
      category: "Textiles",
      image: "/sustainable-tote-bags.jpg",
      inStock: true,
    },
    {
      id: 6,
      name: "Recycled Plastic Storage Box",
      seller: "Green Crafts Co.",
      price: 549,
      rating: 4.5,
      reviews: 67,
      location: "Delhi",
      category: "Plastic Products",
      image: "/plastic-storage-container.jpg",
      inStock: false,
    },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sustainable Marketplace</h1>
            <p className="text-xl text-foreground/70 mb-8">
              Discover high-quality products made from recycled and upcycled materials. Support sustainable sellers and
              make a difference.
            </p>
            <Link
              href="/seller"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Become a Seller
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-96 rounded-2xl overflow-hidden"
          >
            <img src="/sustainable-marketplace.jpg" alt="Marketplace" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </motion.section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Filter size={20} /> Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card border border-border text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <label className="font-semibold">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="mt-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-0 overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      product.inStock ? "bg-green-500/80 text-white" : "bg-red-500/80 text-white"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">{product.seller}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-foreground/60">({product.reviews})</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-xs text-foreground/60 mb-4">
                    <MapPin size={14} /> {product.location}
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!product.inStock}
                        className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        <ShoppingCart size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
