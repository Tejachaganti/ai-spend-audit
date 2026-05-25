export interface AuditResult {
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  yearlySavings: number;
  recommendation: string;
}

export function generateAudit(
  tool: string,
  spend: number,
  teamSize: number
): AuditResult {
  let recommendedSpend = spend;

  if (teamSize <= 2 && spend > 100) {
    recommendedSpend = spend * 0.7;
  }

  const monthlySavings = Math.floor(
    spend - recommendedSpend
  );

  const yearlySavings = monthlySavings * 12;

  let recommendation =
    "Your current setup appears optimized.";

  if (monthlySavings > 0) {
    recommendation =
      "Switching to lower-cost plans or optimized seat allocation could significantly reduce your AI tooling costs.";
  }

  return {
    currentSpend: spend,
    recommendedSpend,
    monthlySavings,
    yearlySavings,
    recommendation,
  };
}