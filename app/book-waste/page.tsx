"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import { CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function BookWaste() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    ward: "",
    wasteType: "",
    date: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const wasteTypes = [
    "Dry Waste",
    "Wet Waste",
    "Mixed Waste",
    "Bulk Waste",
    "E-Waste",
  ]

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_WASTE!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          ward: formData.ward || "N/A",
          waste_type: formData.wasteType,
          preferred_date: formData.date,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitted(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        ward: "",
        wasteType: "",
        date: "",
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Failed to submit request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Book Your Waste Pickup
        </h1>
        <p className="text-xl text-foreground/70">
          Easy, convenient, and eco-friendly waste collection at your doorstep
        </p>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {submitted ? (
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded-xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
              Request Confirmed!
            </h2>
            <p className="text-green-600 dark:text-green-400 mb-4">
              Our team will contact you shortly to confirm your pickup schedule.
            </p>
            <p className="text-foreground/70">
              Thank you for choosing Kabarwala for sustainable waste management.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 md:p-12 space-y-6"
          >
            {error && (
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-500 rounded-lg p-4 text-red-700 dark:text-red-400">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Ward Number
                </label>
                <input
                  type="text"
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input min-h-24"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Waste Type
                </label>
                <select
                  name="wasteType"
                  value={formData.wasteType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                  required
                >
                  <option value="">Select waste type</option>
                  {wasteTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Preferred Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Confirming..." : "Confirm Waste Pickup"}
            </button>

            <p className="text-center text-sm text-foreground/60">
              By submitting, you agree to our terms and privacy policy.
            </p>
          </form>
        )}
      </section>

      <Footer />
    </div>
  )
}
