"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle } from "lucide-react"

type BuyerFormData = {
  name: string
  email: string
  phone: string
  productId: string
  productName: string
  message: string
}

export default function BuyerInterestForm() {
  const searchParams = useSearchParams()

  const productIdFromUrl = searchParams.get("productId") || ""
  const productNameFromUrl = searchParams.get("productName") || ""

  const [formData, setFormData] = useState<BuyerFormData>({
    name: "",
    email: "",
    phone: "",
    productId: "",
    productName: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      productId: productIdFromUrl,
      productName: productNameFromUrl ? decodeURIComponent(productNameFromUrl) : "",
    }))
  }, [productIdFromUrl, productNameFromUrl])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/buyer-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to submit request")

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        productId: productIdFromUrl,
        productName: productNameFromUrl ? decodeURIComponent(productNameFromUrl) : "",
        message: "",
      })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <section className="pt-40 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded-2xl p-12 text-center shadow-lg">
          <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
            Interest Submitted Successfully!
          </h2>
          <p className="text-green-600 dark:text-green-400">
            Thank you for your interest. We will contact you shortly regarding this product.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8 sm:p-12 space-y-6 border border-gray-200 dark:border-slate-700"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in Buying
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Fill in your details and the product information below. We will contact you soon.
        </p>

        {/* PRODUCT INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="productId"
            placeholder="Product ID (e.g., PID-1001)"
            required
            value={formData.productId}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
          />
          <input
            name="productName"
            placeholder="Product Name"
            required
            value={formData.productName}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* BUYER DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
          />
        </div>

        <input
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
        />

        <textarea
          name="message"
          placeholder="Additional message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
        />

        {/* BUTTON & MESSAGES */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
        >
          {loading ? "Submitting..." : "Submit Interest"}
        </button>

        {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
      </form>
    </section>
  )
}
