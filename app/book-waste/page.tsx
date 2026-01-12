"use client";

import type React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BookWaste() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    ward: "",
    landmark: "",
    wasteType: "",
    date: "",

    donationType: "", // NEW
    segregated: "", // NEW
    collectionTime: "", // NEW
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const wasteTypes = [
    "Dry Waste",
    "Wet Waste",
    "Mixed Waste",
    "Bulk Waste",
    "E-Waste",
    "Paper Waste",
    "Plastic Waste",
    "Metal Waste",
    "Glass Waste",
    "Cloth Waste",
    "Other",
  ];

  const collectionTimes = [
    "6AM-9AM",
    "9AM-12PM",
    "12PM-3PM",
    "3PM-6PM",
    "Any Time",
  ];

  const donatesellOptions = ["Donate", "Sell", "Both"];



  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_WASTE!,
        {
          ...formData,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        ward: "",
        landmark: "",
        wasteType: "",
        date: "",
        donationType: "",
        segregated: "",
        collectionTime: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-4 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Book Your Waste Pickup</h1>
        <p className="text-xl text-foreground/70">
          Easy, convenient, and eco-friendly waste collection at your doorstep
        </p>
      </section>

      {/* Form Section */}
      <section className="py-2 px-4 max-w-2xl mx-auto">
        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Request Confirmed!
            </h2>
            <p className="text-green-600">Our team will contact you shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 space-y-6"
          >
            {error && (
              <div className="bg-red-50 border border-red-500 rounded-lg p-4 text-red-700">
                {error}
              </div>
            )}

            {/* EXISTING FIELDS (UNCHANGED) */}
            <div>
              <p className="block text-sm font-semibold mb-2">Click on the following button to check the price list</p>
              <Button><Link href={"https://drive.google.com/file/d/1Y1ka6qXKorYHrXysEoGtOPYCEfpXxMaT/view?usp=drive_link"}>Check Price List</Link></Button>
            </div>
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Full Name <span className="text-red-600">*</span>
              </label>{" "}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              />{" "}
            </div>
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Mobile Number<span className="text-red-600">*</span>{" "}
              </label>{" "}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              />{" "}
            </div>
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Email ID{" "}
              </label>{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              />{" "}
            </div>
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Ward Number<span className="text-red-600">*</span>{" "}
              </label>{" "}
              <input
                type="text"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
              />{" "}
            </div>
            
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Address<span className="text-red-600">*</span>{" "}
              </label>{" "}
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input min-h-24"
                required
              />{" "}
            </div>
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Nearest Landmark<span className="text-red-600">*</span>{" "}
              </label>{" "}
              <input
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              />{" "}
            </div>
            {/* NEW: DONATE / SELL */}
           
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                You want to donate or sell<span className="text-red-600">*</span>{" "}
              </label>{" "}
              <select
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              >
                {" "}
                <option value="">Select donation type</option>{" "}
                {donatesellOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            

            {/* <select
              name="donationType"
              value={formData.donationType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            >
              Donation Type
              <option value="">You want to donate or sell*</option>
              <option value="Donate">Donate</option>
              <option value="Sell">Sell</option>
              <option value="Both">Both (Some donate & some sell)</option>
            </select> */}

            {/* NEW: SEGREGATED */}
            
              <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Your waste is segregated ?<span className="text-red-600">*</span>
              </label>{" "}
              <select
                name="segregated"
                value={formData.segregated}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              >
                {" "}
                <option value="">Select segregation status</option>{" "}
                  <option >
                    Yes
                  </option>
                  <option >
                    No
                  </option>
                
              </select>
            </div>
{/* 
            <select
              name="segregated"
              value={formData.segregated}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="">Your waste is segregated?*</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select> */}

            {/* EXISTING */}
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Type of waste<span className="text-red-600">*</span>{" "}
              </label>{" "}
              <select
                name="wasteType"
                value={formData.wasteType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              >
                {" "}
                <option value="">Select waste type</option>{" "}
                {wasteTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* NEW: COLLECTION TIME */}
            <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Time of Collection<span className="text-red-600">*</span>{" "}
              </label>{" "}
              <select
                name="collectionTime"
                value={formData.collectionTime}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              >
                {" "}
                <option value="">Select collection time</option>{" "}
                {collectionTimes.map((time) => (
                  <option key={time} value={time}>
                    {" "}
                    {time}{" "}
                  </option>
                ))}{" "}
              </select>{" "}
            </div>

            {/* <div>
              {" "}
              <label className="block text-sm font-semibold mb-2">
                {" "}
                Preferred Pickup Date{" "}
              </label>{" "}
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary bg-input"
                required
              />{" "}
            </div> */}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-primary text-white rounded-lg font-semibold"
            >
              {loading ? "Confirming..." : "Confirm Waste Pickup"}
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
