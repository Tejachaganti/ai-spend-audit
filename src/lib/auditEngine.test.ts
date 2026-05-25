import { describe, it, expect } from "vitest";

import { generateAudit } from "./auditEngine";

describe("audit engine", () => {
  it("calculates savings correctly", () => {
    const result = generateAudit(
      "chatgpt",
      500,
      2
    );

    expect(result.monthlySavings).toBe(150);

    expect(result.yearlySavings).toBe(1800);
  });

  it("returns optimized message when no savings", () => {
    const result = generateAudit(
      "chatgpt",
      50,
      5
    );

    expect(result.monthlySavings).toBe(0);
  });
});