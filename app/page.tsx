import React from "react";

// Simple placeholder chart components (replace later with real charts libs like Recharts, d3, or nivo)
const BarPreview = () => (
  <div className="flex h-32 items-end gap-1">
    {[30, 55, 80, 45, 65, 50].map((v, i) => (
      <div
        key={i}
        style={{ height: `${v}%` }}
        className="flex-1 rounded bg-gradient-to-t from-indigo-500 to-cyan-400 shadow-sm"
      />
    ))}
  </div>
);

const LinePreview = () => (
  <svg viewBox="0 0 100 40" className="w-full h-32">
    <polyline
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="text-emerald-500"
      points="0,30 15,22 30,28 45,12 60,18 75,5 90,14 100,4"
    />
  </svg>
);

const StatCard = ({ label, value, delta }: { label: string; value: string; delta?: string }) => (
  <div className="rounded-lg border border-white/10 bg-white/5 dark:bg-black/30 p-4 backdrop-blur-sm flex flex-col gap-1">
    <span className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{label}</span>
    <span className="text-2xl font-semibold">{value}</span>
    {delta && <span className="text-xs text-emerald-500">{delta}</span>}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col gap-20">
        {/* Hero */}
        <section className="flex flex-col gap-8 items-start">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400">
            Dataviz Dashboard Sandbox
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed text-neutral-700 dark:text-neutral-300">
            A lightweight starting point for interactive data visualization experiments. Replace these
            placeholder components with real-time charts, connect APIs, and iterate quickly.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://nextjs.org/docs" target="_blank" rel="noreferrer"
              className="rounded-md bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 px-5 py-2.5 text-sm font-medium shadow hover:opacity-90 transition"
            >
              Next.js Docs
            </a>
            <a
              href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm font-medium hover:bg-neutral-800/5 dark:hover:bg-neutral-50/10 transition"
            >
              Tailwind Docs
            </a>
          </div>
        </section>

        {/* KPI / Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard label="Sessions" value="12.4k" delta="+4.1%" />
          <StatCard label="Conversion" value="2.8%" delta="+0.3%" />
            <StatCard label="Revenue" value="$34.2k" delta="+8.5%" />
          <StatCard label="Churn" value="3.1%" delta="-0.4%" />
        </section>

        {/* Preview Charts */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold tracking-tight">Bar Distribution</h2>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-4 backdrop-blur">
              <BarPreview />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold tracking-tight">Trend (Line)</h2>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-4 backdrop-blur">
              <LinePreview />
            </div>
          </div>
        </section>

        {/* Developer Notes */}
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold tracking-tight">Next Steps</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            <li>Install a charting library: <code>npm i recharts</code> or <code>npm i @nivo/core @nivo/bar</code></li>
            <li>Create reusable chart wrapper components in <code>components/</code>.</li>
            <li>Add API routes in <code>app/api/</code> to serve dynamic data.</li>
            <li>Configure caching or ISR for hybrid dynamic/static rendering.</li>
            <li>Hook up analytics or real-time data streams (e.g. WebSockets).</li>
          </ul>
        </section>

        <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
          <span>© {new Date().getFullYear()} Dataviz Sandbox</span>
          <span>Built with Next.js 15 + Tailwind CSS 4</span>
        </footer>
      </div>
    </div>
  );
}
