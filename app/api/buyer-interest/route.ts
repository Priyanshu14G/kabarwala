import { NextResponse } from "next/server"
import { sendBuyerInterestMail } from "@/lib/mail"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      productId,
      productName,
      message = "",
    } = body || {}

    // ✅ Validate all required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !productId?.trim() ||
      !productName?.trim()
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // ✅ Send mail to admin
    await sendBuyerInterestMail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      productId: productId.trim(),
      productName: productName.trim(),
      message: message?.trim() || "No additional message",
    })

    return NextResponse.json(
      { success: true, message: "Interest submitted successfully" },
      { status: 200 }
    )
  } catch (err) {
    console.error("BUYER_INTEREST_API_ERROR:", err)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
