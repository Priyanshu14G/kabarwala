import Link from "next/link"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kabarwala</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Transforming waste into resources through innovative, sustainable solutions for smarter cities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Projects", "Products", "Contact", "Blog"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Waste Pickup", "Recycling", "Buy Products", "Sell Products"].map((service) => (
                <li key={service}>
                  <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Instagram size={16} /> Instagram
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone size={16} /> +91-9135422890, +91-8987262570
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail size={16} /> bgpkabarwala@gmail.com

              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPin size={16} /> Bhagalpur, Bihar-812001, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-70">
          <p>&copy; 2025 Kabarwala – Bascone Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
