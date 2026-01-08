import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { sendApprovalMail } from "@/lib/mail";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    // ✅ Authenticate user
    const { userId } = await auth();
    if (!userId) return new Response("Unauthorized", { status: 401 });

    const formData = await req.formData();

    // ✅ Extract fields from the form
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString() || "";
    const price = Number(formData.get("price"));
    const category = formData.get("category")?.toString();
    const location = formData.get("location")?.toString();
    const sellerEmail = formData.get("email")?.toString();
    const sellerPhone = formData.get("phone")?.toString();
    const image = formData.get("image") as File;

    // ✅ Validate required fields
    if (!name || !price || !category || !location || !sellerEmail || !sellerPhone || !image) {
      return new Response("Missing required fields", { status: 400 });
    }

    // ✅ Convert image to buffer
    const buffer = Buffer.from(await image.arrayBuffer());

    // ✅ Upload image to Cloudinary
    const upload: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "products" }, (err, result) => {
          if (err) return reject(err);
          resolve(result);
        })
        .end(buffer);
    });

    // ✅ Create product in database
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
        location,
        imageUrl: upload.secure_url,
        // sellerId: userId,
        sellerEmail,   // ✅ Save seller email
        sellerPhone,   // ✅ Save seller phone
        status: "PENDING",
      },
    });

    // ✅ Send approval email to admin
    console.log("Before sending approval mail...");
    await sendApprovalMail(product.id);
    console.log("After sending approval mail...");

    return NextResponse.json({ success: true, productId: product.id });
  } catch (err: any) {
    console.error("PRODUCT CREATE ERROR:", err);
    return new Response(err.message || "Internal Server Error", { status: 500 });
  }
}
