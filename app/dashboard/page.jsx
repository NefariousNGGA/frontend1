"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export default function Dashboard() {
  const [pending, setPending] = useState([]);

  async function load() {
    setPending(await api("/admin/pending"));
  }

  async function approve(id) {
    await api("/admin/approve/" + id, { method: "POST" });
    load();
  }

  async function reject(id) {
    await api("/admin/reject/" + id, { method: "POST" });
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl mb-6">Pending Thoughts</h1>

      {pending.map(t => (
        <div
          key={t.id}
          className="border border-zinc-700 p-4 rounded mb-4"
        >
          <p className="whitespace-pre-wrap mb-4">{t.content}</p>

          <div className="flex gap-2">
            <button
              onClick={() => approve(t.id)}
              className="px-3 py-1 bg-green-600 rounded"
            >
              Approve
            </button>

            <button
              onClick={() => reject(t.id)}
              className="px-3 py-1 bg-red-600 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
