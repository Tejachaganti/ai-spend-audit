interface Props {
  monthlySavings: number;
  yearlySavings: number;
}

export default function AISummary({
  monthlySavings,
  yearlySavings,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-700 bg-black p-6">
      <h3 className="text-lg font-semibold">
        AI-Generated Summary
      </h3>

      <p className="mt-3 text-zinc-300 leading-7">
        Based on your current AI tooling spend,
        your organization may be able to save
        approximately ${monthlySavings} per month
        and ${yearlySavings} annually through
        optimized pricing plans, reduced unused
        seats, and more cost-effective AI tooling
        alternatives.
      </p>
    </div>
  );
}