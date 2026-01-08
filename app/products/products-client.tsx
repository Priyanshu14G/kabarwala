"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MapPin, Filter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

type Product = {
  id: string
  productCode: string          // ✅ simple readable ID
  name: string
  price: number
  imageUrl: string
  category: string
  description: string
  location: string
  inStock: boolean
  sellerName: string
}

export default function ProductsClient({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const router = useRouter()

  const categories = [
    "All",
    "Plastic Products",
    "Metal Items",
    "E-Waste",
    "Paper Products",
    "Textiles",
  ]

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-16 px-4 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Sustainable Marketplace
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Buy & sell products made from recycled and upcycled materials.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/seller/add-product"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold"
              >
                Become a Seller
              </Link>

              <Link
                href="/buyer/interest"
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold"
              >
                Interested to Buy
              </Link>
            </div>
          </div>

          <div className="h-96 rounded-2xl overflow-hidden">
            <img
              src="/sustainable-marketplace.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="py-8 max-w-7xl mx-auto px-4">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Filter size={20} /> Categories
        </h3>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No products found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  className="h-48 w-full object-cover"
                  alt={product.name}
                />

                <div className="p-4 space-y-2">
                  {/* PRODUCT ID */}
                  <p className="text-xs font-medium text-gray-500">
                    Product ID: {product.productCode}
                  </p>

                  <h3 className="font-semibold text-xl">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>

                  <p className="text-sm text-green-600">
                    ✅ {product.sellerName}
                  </p>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={14} />
                    {product.location}
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <span className="text-xl font-bold">
                      ₹{product.price}
                    </span>

                    {/* INTEREST BUTTON */}
                    <button
                      onClick={() =>
                        router.push(
                          `/buyer/interest?productId=${product.productCode}&name=${encodeURIComponent(
                            product.name
                          )}`
                        )
                      }
                      className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium"
                    >
                      Interested
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
