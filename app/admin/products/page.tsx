import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ApproveButton from "./ApproveButton";
import RemoveButton from "./RemoveButton";

export default async function AdminProductsPage() {
  const { userId } = await auth();

  // 🔐 Admin check
  if (!userId || userId !== process.env.ADMIN_USER_ID) {
    redirect("/");
  }

  const pendingProducts = await prisma.product.findMany({
    where: { status: "PENDING" },
    orderBy: { createdAt: "desc" },
  });

  const approvedProducts = await prisma.product.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <Navbar />

      <div className="min-h-screen p-10 max-w-6xl mx-auto space-y-16">
        {/* ================= PENDING ================= */}
        <section>
          <h1 className="text-3xl font-bold mt-6 mb-6">
            Pending Product Approvals
          </h1>

          {pendingProducts.length === 0 && (
            <p className="text-gray-500">No pending products 🎉</p>
          )}

          <div className="space-y-6">
            {pendingProducts.map((product) => (
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

                  <p className="text-sm text-gray-600">
                    Seller Email: {product.sellerEmail}
                  </p>

                  <p className="text-sm text-gray-600">
                    Seller Phone: {product.sellerPhone}
                  </p>

                  {product.description && (
                    <p className="mt-2 text-gray-700">
                      {product.description}
                    </p>
                  )}

                  <div className="flex gap-3 mt-4">
                    <ApproveButton productId={product.id} />
                    <RemoveButton productId={product.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= APPROVED ================= */}
        <section>
          <h1 className="text-3xl font-bold mb-6">
            Approved Products
          </h1>

          {approvedProducts.length === 0 && (
            <p className="text-gray-500">No approved products yet</p>
          )}

          <div className="space-y-6">
            {approvedProducts.map((product) => (
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

                  <p className="text-sm text-gray-600">
                    Seller Email: {product.sellerEmail}
                  </p>

                  <p className="text-sm text-gray-600">
                    Seller Phone: {product.sellerPhone}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <RemoveButton productId={product.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
