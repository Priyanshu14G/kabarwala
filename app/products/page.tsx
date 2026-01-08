import prisma from "@/lib/prisma"
import ProductsClient from "./products-client"

export const dynamic = "force-dynamic" // always fetch fresh approved products

export default async function ProductsPage() {
  // 🔒 Fetch ONLY approved products
  const products = await prisma.product.findMany({
    where: {
      status: "APPROVED",
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      price: true,
      imageUrl: true,
      category: true,
      description: true,
      createdAt: true,
    },
  })

  // 🧼 Format data for frontend UI
  const formattedProducts = products.map((p, index) => ({
    id: p.id,
    productCode: `PID-${index + 1001}`, // ✅ simple buyer-friendly product ID
    name: p.name,
    price: p.price,
    imageUrl: p.imageUrl,
    category: p.category,
    description: p.description ?? "",
    location: "India",              // placeholder (can be dynamic later)
    inStock: true,                   // placeholder
    sellerName: "Verified Seller",   // placeholder
  }))

  return <ProductsClient products={formattedProducts} />
}
