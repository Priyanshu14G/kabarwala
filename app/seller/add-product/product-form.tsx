"use client";

import { Upload, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    location: "",
    email: "",
    phone: "",
  });

  const categories = [
    "Plastic Products",
    "Metal Items",
    "E-Waste",
    "Paper Products",
    "Textiles",
    "Other",
  ];

  /* ---------------- DROPZONE ---------------- */
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0];
      setFile(image);
      setPreview(URL.createObjectURL(image));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  /* ---------------- FORM HANDLERS ---------------- */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a product image");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("location", formData.location);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("image", file);

      const res = await fetch("/api/products/create", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit product");
      }

      alert("✅ Product submitted for admin approval");

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        location: "",
        email: "",
        phone: "",
      });
      setFile(null);
      setPreview("");
    } catch (err: any) {
      alert("❌ " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-16 px-4 max-w-3xl mx-auto"
      >
        <Link href="/seller" className="inline-flex items-center gap-2 text-primary mb-8">
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border rounded-2xl p-6"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Add New Product
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PRODUCT NAME */}
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product name"
              required
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seller email"
              required
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              required
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
            />

            {/* CATEGORY */}
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* LOCATION */}
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City / Location"
              required
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
            />

            {/* PRICE */}
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price (₹)"
              required
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none"
            />

            {/* DESCRIPTION */}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Product description"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none resize-none"
            />

            {/* IMAGE UPLOAD */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
                isDragActive ? "border-primary bg-primary/10" : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} name="image" />
              <Upload className="mx-auto mb-4 opacity-70" size={32} />
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="mx-auto max-h-48 rounded"
                />
              ) : (
                <p>Drag & drop image or click to upload</p>
              )}
            </div>

            {/* SUBMIT */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-lg font-semibold"
            >
              {loading ? "Submitting..." : "Add Product"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
