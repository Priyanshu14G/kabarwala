"use client"

import type React from "react"
import { useState, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 🔒 Prevent double submission
  const isSubmitting = useRef(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🔐 Hard stop for double submit
    if (isSubmitting.current) return
    isSubmitting.current = true

    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error(err)
      setError("Failed to send message. Please try again later.")
    } finally {
      setLoading(false)
      isSubmitting.current = false
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-8 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-foreground/70">
          We'd love to hear from you. Reach out anytime.
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-2 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard icon={Phone} title="Phone" value="+91-9135422890, +91-8987262570" />
          <InfoCard icon={Mail} title="Email" value=" bgpkabarwala@gmail.com" />
          <InfoCard icon={MapPin} title="Address" value="Bascone Sampurn Suvidha Kendra,
Bascone Foundation (A section 8 NGO),
Jail Road Tilka Manjhi, Jawaripur,
PO - Tilka Manjhi, Dist. - Bhagalpur,
Bihar, PIN - 812001, INDIA
(Opposite SBI Barari Branch and Corner of Hanuman Path)" />
        </div>
      </section>

      {/* Form */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold">Send us a Message</h2>

            {submitted && (
              <div className="bg-green-100 border border-green-500 p-4 rounded-lg text-green-700">
                Message sent successfully!
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-500 p-4 rounded-lg text-red-700">
                {error}
              </div>
            )}

            <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} />

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg min-h-[140px]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Map & Social */}
          <div className="space-y-6">
            <iframe
              className="w-full h-110 mt-16 rounded-xl border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4935368075908!2d87.000301!3d25.253978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0361fd177aca9%3A0xc0d15a7f376adbff!2sTilka%20Manjhi%20Chowk%2C%20Katahalbari%2C%20Khanjarpur%2C%20Bhagalpur%2C%20Bihar%20812001!5e0!3m2!1sen!2sin!4v1768628520974!5m2!1sen!2sin"
              loading="lazy"
            />

            <div className="flex gap-4">
              <Social icon={Facebook} />
              <Social icon={Twitter} />
              <Social icon={Linkedin} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

/* ---------- Helpers ---------- */

function Input({
  label,
  ...props
}: {
  label: string
  name: string
  value: string
  onChange: any
  type?: string
}) {
  return (
    <div>
      <label className="block font-semibold mb-2">{label}</label>
      <input
        {...props}
        required
        className="w-full px-4 py-3 border rounded-lg"
      />
    </div>
  )
}

function InfoCard({ icon: Icon, title, value }: any) {
  return (
    <div className="bg-card border rounded-xl p-8 text-center">
      <Icon className="w-10 h-10 mx-auto mb-4 text-primary" />
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{value}</p>
    </div>
  )
}

function Social({ icon: Icon }: any) {
  return (
    <a className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
      <Icon />
    </a>
  )
}
