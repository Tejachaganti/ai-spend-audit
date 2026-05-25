"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const { error } = await supabase
      .from("leads")
      .insert([
        {
          email,
          company,
          role,
        },
      ]);

    if (!error) {
      setSuccess(true);

      setEmail("");
      setCompany("");
      setRole("");
    }
  };

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Get Full Audit Report
      </h2>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Role"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-green-500 py-3 font-semibold text-black"
        >
          Save Report
        </button>

        {success && (
          <p className="text-green-400">
            Report saved successfully.
          </p>
        )}
      </div>
    </div>
  );
}