"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Plus, Edit2, Trash2, TrendingUp, Package } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function SellerDashboard() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Recycled Plastic Planters",
      category: "Plastic Products",
      price: 299,
      quantity: 45,
      status: "Approved",
      image: "/recycled-plastic-products.jpg",
    },
    {
      id: 2,
      name: "Upcycled Metal Art",
      category: "Metal Items",
      price: 899,
      quantity: 12,
      status: "Pending",
      image: "/metal-recycled-art.jpg",
    },
  ])

  const stats = [
    { label: "Total Products", value: products.length, icon: Package },
    { label: "Total Sales", value: "₹45,000", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-2">Seller Dashboard</h1>
            <p className="text-foreground/70">Manage your products and track your sales</p>
          </div>
          <Link
            href="/seller/add-product"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Plus size={20} /> Add Product
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-6"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <p className="text-foreground/70 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Products Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-6 overflow-hidden"
        >
          <h2 className="text-2xl font-bold mb-6">Your Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Product Name</th>
                  <th className="text-left py-4 px-4 font-semibold">Category</th>
                  <th className="text-left py-4 px-4 font-semibold">Price</th>
                  <th className="text-left py-4 px-4 font-semibold">Stock</th>
                  <th className="text-left py-4 px-4 font-semibold">Status</th>
                  <th className="text-left py-4 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-border hover:bg-primary/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-foreground/70">{product.category}</td>
                    <td className="py-4 px-4 font-semibold">₹{product.price}</td>
                    <td className="py-4 px-4">{product.quantity} units</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                          <Edit2 size={16} className="text-primary" />
                        </button>
                        <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                          <Trash2 size={16} className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  )
}
