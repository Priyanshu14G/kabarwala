import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Suspense } from "react"
import BuyerInterestForm from "./buyer-interest-form"

export default function BuyerInterestPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <Suspense fallback={<p className="pt-40 text-center">Loading...</p>}>
        <BuyerInterestForm />
      </Suspense>

      <Footer />
    </div>
  )
}
