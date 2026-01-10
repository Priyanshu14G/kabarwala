import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata = {
  title: "Terms and Conditions | Bascone Foundation",
  description:
    "Read the Terms and Conditions governing the use of the Bascone Foundation platform and services.",
}

export default function TermsAndConditionsPage() {
  return (
    <div>
        <Navbar/>
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-4xl bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shipping Policy
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Processing Time</strong><br />
            All orders are processed within 2-3 business days. Please note that orders 
            are not shipped or delivered on weekends or holidays. In cases of high order
             volume, shipments may be delayed by a few days. Additional days should be 
             allowed for transit and delivery. If a significant delay is expected in the
              shipment of your order, we will notify you via email or phone.
          </p>

          <p>
            <strong>Shipping Time</strong><br />
            <strong>Domestic Shipping</strong><br/>
            Orders will be delivered within 3 to 7 days from the date of order confirmation. 
            Please be aware that delivery times may be affected by factors beyond our control, 
            such as weather conditions, customs delays, and other unforeseen circumstances.
          </p>
        </section>
      </div>
    </main>
    <Footer/>
    </div>
  )
}
