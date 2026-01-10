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
    <main className="min-h-screen bg-gray-50 py-12 px-4 mt-8">
      <div className="mx-auto max-w-4xl bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Return & Refund Policy
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
We have a 5 to 7 days return and exchange policy, which means you have 5 days after receiving your item to request a exchange. Once the returned product is received, it will be inspected, and the exchange will be approved within 2 days.


          </p>

          <p>
            <strong>Exchange</strong><br/>
           We will notify you once we’ve received and inspected your return, and let you know if the exchange was approved or not. If approved, you’ll be exchange for new items and delivered on your address within 10 business days.


          </p>
          <p>
            Please remember that it may take some time in the process by our team. If more than 15 business days have passed since we’ve approved your exchange, please contact us at:
          </p>
          <p><b>Email: </b> sampurninfo@gmail.com</p>
            <p><b>Phone: </b> +91-9135422890, +91-8987262570</p>
        </section>
      </div>
    </main>
    <Footer/>
    </div>
  )
}
