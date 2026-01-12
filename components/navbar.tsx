"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import DrawerNav from "./drawer-nav";
import ThemeToggle from "./theme-toggle";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();

  // Determine role
  const role =
    user?.publicMetadata?.role === "admin"
      ? "admin"
      : user
      ? "seller"
      : "guest";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md"
          : "bg-white/50 dark:bg-slate-950/50 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <img src="/LOGO_6.png" className="w-11 h-11" /><span><img src="/logo5.png" className="w-10 h-10" /></span>
            <span className="hidden sm:inline text-foreground">Kabarwala</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            {/* Seller Link */}
            {/* {role === "seller" && (
              <Link
                href="/seller/add-product"
                className="text-sm font-medium text-primary hover:underline"
              >
                Add Product
              </Link>
            )} */}

            {/* Admin Approve Products Link */}
            {role === "admin" && (
              <Link
                href="/admin/products"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
              >
                Approve Products
              </Link>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <ThemeToggle  />

            <Link
              href="/book-waste"
              className="hidden sm:inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
            >
              Book Waste
            </Link>

            {/* 🔐 AUTH SWITCH */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 cursor-pointer text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
              />
            </SignedIn>

            {/* MOBILE MENU */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU CONTENT */}
        {isOpen && (
          <div className="md:hidden px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Seller Link */}
            {role === "seller" && (
              <Link
                href="/seller/add-product"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-primary"
              >
                Add Product
              </Link>
            )}

            {/* Mobile Admin Link */}
            {role === "admin" && (
              <Link
                href="/admin/products"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-red-600"
              >
                Approve Products
              </Link>
            )}

            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full px-4 py-2 border cursor-pointer border-primary text-primary rounded-lg">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
