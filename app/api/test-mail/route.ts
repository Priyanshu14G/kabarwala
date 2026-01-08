import { sendApprovalMail } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function GET() {
  await sendApprovalMail("TEST_PRODUCT_ID");
  return NextResponse.json({ success: true });
}
