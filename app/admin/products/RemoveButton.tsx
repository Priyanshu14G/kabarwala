"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RemoveButton({
  productId,
}: {
  productId: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRemove = async () => {
    const confirmed = confirm(
      "Are you sure you want to permanently remove this product?"
    );

    if (!confirmed) return;

    setLoading(true);

    const res = await fetch(
      `/api/products/${productId}/delete`,
      { method: "POST" }
    );

    if (!res.ok) {
      alert("Failed to delete product");
      setLoading(false);
      return;
    }

    router.refresh(); // 🔄 refresh list
  };

  return (
    <button
      onClick={handleRemove}
      disabled={loading}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
    >
      {loading ? "Removing..." : "Remove"}
    </button>
  );
}
