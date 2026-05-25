import { describe, it, expect } from "vitest";

import {
  calculateSavings,
  yearlySavings,
  isOverspending,
} from "./auditEngine";

describe("audit engine", () => {
  it("calculates monthly savings", () => {
    expect(calculateSavings(100, 40)).toBe(60);
  });

  it("calculates yearly savings", () => {
    expect(yearlySavings(50)).toBe(600);
  });

  it("detects overspending", () => {
    expect(isOverspending(100, 50)).toBe(true);
  });
});