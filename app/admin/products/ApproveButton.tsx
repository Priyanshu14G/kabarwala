"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ApproveButton({ productId }: { productId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function approve() {
    setLoading(true);

    const res = await fetch(`/api/products/${productId}/approve`, {
      method: "POST",
    });

    const data = await res.json();
    console.log("Approve response:", data);

    setLoading(false);

    if (!res.ok) {
      alert(data.error || "Failed to approve product");
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={approve}
      disabled={loading}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
    >
      {loading ? "Approving..." : "Approve"}
    </button>
  );
}
