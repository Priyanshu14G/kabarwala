import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// ✅ Force TypeScript-safe env values
const ADMIN_EMAIL: string = (() => {
  if (!process.env.ADMIN_EMAIL) {
    throw new Error("ADMIN_EMAIL is not configured")
  }
  return process.env.ADMIN_EMAIL
})()

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

/* =========================================================
   📩 PRODUCT APPROVAL MAIL (Admin)
========================================================= */
export async function sendApprovalMail(productId: string) {
  await resend.emails.send({
    from: "Kabarwala <onboarding@resend.dev>",
    to: ADMIN_EMAIL,
    subject: "🛒 New Product Pending Approval",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6">
        <h2>New Product Submitted</h2>
        <p>A new product has been submitted and is waiting for approval.</p>

        <p>
          <strong>Product ID:</strong>
          <code>${productId}</code>
        </p>

        <a
          href="${APP_URL}/admin/products"
          style="
            display: inline-block;
            margin-top: 16px;
            padding: 12px 18px;
            background-color: #16a34a;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
          "
        >
          👉 Review Product
        </a>

        <p style="margin-top: 24px; color: #666">
          Kabarwala Admin Panel
        </p>
      </div>
    `,
  })
}

/* =========================================================
   📩 BUYER INTEREST MAIL (Admin)
   ✅ Updated to include productId and productName
========================================================= */
export async function sendBuyerInterestMail(data: {
  name: string
  email: string
  phone: string
  productId: string
  productName: string
  message?: string
}) {
  const { name, email, phone, productId, productName, message } = data

  await resend.emails.send({
    from: "Kabarwala <onboarding@resend.dev>",
    to: ADMIN_EMAIL,
    subject: "📩 New Buyer Interest Received",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6">
        <h2>Buyer Interest Request</h2>

        <p><strong>Product ID:</strong> ${productId}</p>
        <p><strong>Product Name:</strong> ${productName}</p>

        <hr />

        <p><strong>Buyer Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Message:</strong></p>
        <p>${message || "No additional message"}</p>

        <p style="margin-top: 24px; color: #666">
          Sent via Kabarwala Marketplace
        </p>
      </div>
    `,
  })
}
