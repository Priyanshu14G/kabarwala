import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    if (userId !== process.env.ADMIN_USER_ID) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }

    // ✅ THIS IS THE FIX
    const { id: productId } = await params;

    if (!productId) {
      return NextResponse.json(
        { error: "Missing product ID" },
        { status: 400 }
      );
    }

    await prisma.product.update({
      where: { id: productId },
      data: { status: "APPROVED" },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("APPROVE ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
