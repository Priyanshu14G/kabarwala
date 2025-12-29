"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
  })

  const categories = ["Plastic Products", "Metal Items", "E-Waste", "Paper Products", "Textiles", "Other"]

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Product submitted:", formData)
    // Handle form submission to Supabase
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
      >
        <Link href="/seller" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-6"
        >
          <h1 className="text-4xl font-bold mb-8">Add New Product</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block font-semibold mb-2">Product Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Recycled Plastic Planters"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold mb-2">Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div>
                <label className="block font-semibold mb-2">Price (₹)*</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="299"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                  required
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block font-semibold mb-2">Quantity Available*</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="50"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your product..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block font-semibold mb-2">Product Images</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto mb-4 text-foreground/60" />
                <p className="font-medium">Drag images here or click to upload</p>
                <p className="text-sm text-foreground/60">PNG, JPG up to 5MB each</p>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Add Product
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  )
}
