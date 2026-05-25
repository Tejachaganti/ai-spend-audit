import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold leading-tight">
            Stop Overspending on AI Tools
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            Instant AI spend audit for startups.
            Find cheaper plans, better alternatives,
            and hidden monthly savings.
          </p>

          <AuditForm />
        </div>
      </section>
    </main>
  );
}