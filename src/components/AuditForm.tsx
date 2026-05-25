"use client";

import { useState } from "react";

import AISummary from "./AISummary";
import { generateAudit } from "@/lib/auditEngine";

export default function AuditForm() {
  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const [audit, setAudit] = useState<any>(null);

  const handleAudit = () => {
    const result = generateAudit(
      tool,
      Number(monthlySpend),
      Number(teamSize)
    );

    setAudit(result);
  };

  return (
    <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Free AI Spend Audit
      </h2>

      <div className="space-y-4">
        <select
          className="w-full rounded-lg border border-zinc-700 bg-black p-3"
          value={tool}
          onChange={(e) => setTool(e.target.value)}
        >
          <option value="">Select AI Tool</option>
          <option value="chatgpt">ChatGPT</option>
          <option value="claude">Claude</option>
          <option value="cursor">Cursor</option>
          <option value="copilot">GitHub Copilot</option>
          <option value="gemini">Gemini</option>
        </select>

        <input
          type="number"
          placeholder="Monthly Spend ($)"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3"
          value={monthlySpend}
          onChange={(e) => setMonthlySpend(e.target.value)}
        />

        <input
          type="number"
          placeholder="Team Size"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
        />

        <button
          onClick={handleAudit}
          className="w-full rounded-lg bg-white py-3 font-semibold text-black"
        >
          Generate Audit
        </button>

        {audit && (
          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-zinc-700 bg-black p-6">
              <h3 className="text-lg font-semibold">
                Estimated Monthly Savings
              </h3>

              <p className="mt-2 text-4xl font-bold text-green-400">
                ${audit.monthlySavings}
              </p>
            </div>

            <div className="rounded-xl border border-zinc-700 bg-black p-6">
              <h3 className="text-lg font-semibold">
                Estimated Yearly Savings
              </h3>

              <p className="mt-2 text-4xl font-bold text-green-400">
                ${audit.yearlySavings}
              </p>
            </div>

            <div className="rounded-xl border border-zinc-700 bg-black p-6">
              <h3 className="text-lg font-semibold">
                Recommendation
              </h3>

              <p className="mt-3 text-zinc-300">
                {audit.recommendation}
              </p>
            </div>

            <AISummary
              monthlySavings={audit.monthlySavings}
              yearlySavings={audit.yearlySavings}
            />
          </div>
        )}
      </div>
    </div>
  );
}