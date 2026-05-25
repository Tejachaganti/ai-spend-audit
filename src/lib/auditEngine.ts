export function calculateSavings(
  currentSpend: number,
  recommendedSpend: number
) {
  return currentSpend - recommendedSpend;
}

export function yearlySavings(monthlySavings: number) {
  return monthlySavings * 12;
}

export function isOverspending(
  currentSpend: number,
  recommendedSpend: number
) {
  return currentSpend > recommendedSpend;
}