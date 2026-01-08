import AddProductForm from "@/app/seller/add-product/product-form"// adjust path if needed
// import AddProductForm from "@/components/add-product/AddProductForm";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default async function AddProductPage() {
  const user = await currentUser(); // server-side

  // Redirect if user is not logged in
  if (!user) {
    redirect("/sign-in"); // Clerk sign-in page
  }

  return (
    <>
            <Navbar />
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-10">
      
      {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Add New Product
      </h1> */}

      <AddProductForm />
      
    </div>
            <Footer />
    </>
  );
}
