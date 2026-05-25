"use client";

import { useState } from "react";

export default function AuditForm() {
  const [tool, setTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [result, setResult] = useState("");

  const generateAudit = () => {
    const spend = Number(monthlySpend);

    if (spend > 100) {
      const savings = Math.floor(spend * 0.3);

      setResult(
        `Potential savings detected: approximately $${savings}/month or $${
          savings * 12
        }/year by optimizing your AI tooling stack.`
      );
    } else {
      setResult(
        "Your current AI spend appears reasonably optimized."
      );
    }
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
          onClick={generateAudit}
          className="w-full rounded-lg bg-white py-3 font-semibold text-black"
        >
          Generate Audit
        </button>

        {result && (
          <div className="mt-6 rounded-xl border border-green-700 bg-green-900/20 p-4">
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}