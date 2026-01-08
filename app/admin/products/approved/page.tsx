import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RemoveButton from "../RemoveButton";

export default async function ApprovedProductsPage() {
  const { userId } = await auth();

  if (!userId || userId !== process.env.ADMIN_USER_ID) {
    redirect("/");
  }

  const products = await prisma.product.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Navbar />

      <div className="min-h-screen p-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Approved Products
        </h1>

        {products.length === 0 && (
          <p className="text-gray-500">
            No approved products yet
          </p>
        )}

        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-6 flex gap-6 items-start"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-lg"
              />

              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>

                <p className="text-sm text-gray-600">
                  Category: {product.category}
                </p>

                <p className="text-sm text-gray-600">
                  Price: ₹{product.price}
                </p>

                <p className="text-sm text-gray-600">
                  Location: {product.location}
                </p>

                <div className="mt-4">
                  <RemoveButton productId={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
