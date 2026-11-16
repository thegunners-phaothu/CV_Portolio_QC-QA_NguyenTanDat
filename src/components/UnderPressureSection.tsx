"use client";

import { useEffect, useRef, useState } from "react";

interface MetricBarProps {
  label: string;
  value: number;
  maxValue: number;
  unit: string;
  color: string;
  delay?: number;
}

function MetricBar({ label, value, maxValue, unit, color, delay = 0 }: MetricBarProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const pct = Math.min((value / maxValue) * 100, 100);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-slate-300">{label}</span>
        <span style={{ color }} className="font-bold">
          {value.toLocaleString()}
          {unit}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${pct}%` : "0%",
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  sub: string;
  accent: string;
  index: number;
}

function StatCard({ value, label, sub, accent, index }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border bg-[#0b1219]/80 p-5 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ borderColor: `${accent}40` }}
    >
      <div className="font-mono text-2xl sm:text-3xl font-extrabold" style={{ color: accent }}>
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{label}</div>
      <div className="mt-0.5 font-mono text-xs text-slate-400">{sub}</div>
    </div>
  );
}

export default function UnderPressureSection() {
  return (
    <section
      id="under-pressure"
      aria-labelledby="pressure-title"
      className="section relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(45,212,191,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(6,182,212,0.04),transparent_60%)]" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <p className="eyebrow">
          <span className="text-teal-400 font-mono">04 //</span>
          QA Under Stress &middot; Performance Benchmarks
        </p>
        <h2 id="pressure-title" className="section-title">
          Under <span className="text-teal-400">Pressure.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed">
          Real-world load test results from production-grade systems. Each metric reflects actual
          JMeter executions against live or staging environments — not estimates.
        </p>

        {/* Top Stats Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard value="2,500" label="Concurrent VUs" sub="E-Commerce Flash Sale · JMeter" accent="#2dd4bf" index={0} />
          <StatCard value="1,000" label="Peak VUs" sub="Feng Shui PWA · Stress Test" accent="#06b6d4" index={1} />
          <StatCard value="0.12s" label="Avg. Response" sub="PWA API · Stable under load" accent="#10b981" index={2} />
          <StatCard value="99.9%" label="Uptime SLA" sub="DMS Phase 1 & 2 · 22 months" accent="#f59e0b" index={3} />
        </div>

        {/* Main Content: Test Scenarios + Metric Bars */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* LEFT: Test Scenario Cards */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400/80 flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Test Execution Log
            </h3>

            {[
              {
                project: "E-Commerce Platform",
                company: "DigiTech Solutions",
                scenario: "Flash Sale Simulation",
                vus: "2,500 concurrent users",
                result: "PASSED",
                rps: "340 req/s",
                p95: "820ms",
                error: "0.00%",
                accent: "#f43f5e",
                tool: "Apache JMeter",
              },
              {
                project: "Feng Shui PWA",
                company: "DigiTech Solutions",
                scenario: "Astrology Engine Load Test",
                vus: "500–1,000 concurrent users",
                result: "PASSED",
                rps: "180 req/s",
                p95: "450ms",
                error: "0.12%",
                accent: "#eab308",
                tool: "Apache JMeter",
              },
              {
                project: "DMS Phase 1 & 2",
                company: "DigiTech Solutions",
                scenario: "Field Sales Sync Stress",
                vus: "300 concurrent agents",
                result: "PASSED",
                rps: "95 req/s",
                p95: "390ms",
                error: "0.00%",
                accent: "#10b981",
                tool: "Apache JMeter",
              },
              {
                project: "IMAN Warranty",
                company: "DigiTech Solutions",
                scenario: "ZNS Activation Burst",
                vus: "500 concurrent requests",
                result: "PASSED",
                rps: "120 req/s",
                p95: "510ms",
                error: "0.08%",
                accent: "#a855f7",
                tool: "Apache JMeter",
              },
            ].map((test, i) => (
              <div
                key={i}
                className="rounded-2xl border border-teal-500/15 bg-[#0b1219]/70 p-5 hover:border-teal-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full flex-none"
                        style={{ backgroundColor: test.accent }}
                      />
                      <span className="font-semibold text-white text-sm">{test.project}</span>
                    </div>
                    <p className="font-mono text-[11px] text-slate-400 mt-0.5 pl-4">
                      {test.company} &middot; {test.scenario}
                    </p>
                  </div>
                  <span
                    className="flex-none rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold"
                    style={{
                      color: test.result === "PASSED" ? "#2dd4bf" : "#f43f5e",
                      backgroundColor:
                        test.result === "PASSED" ? "rgba(45,212,191,0.1)" : "rgba(244,63,94,0.1)",
                      border: `1px solid ${test.result === "PASSED" ? "rgba(45,212,191,0.3)" : "rgba(244,63,94,0.3)"}`,
                    }}
                  >
                    {test.result}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { l: "VUs", v: test.vus.split(" ")[0] },
                    { l: "RPS", v: test.rps },
                    { l: "P95", v: test.p95 },
                    { l: "Error%", v: test.error },
                  ].map((m) => (
                    <div key={m.l} className="text-center">
                      <div className="font-mono text-xs font-bold text-teal-300">{m.v}</div>
                      <div className="font-mono text-[10px] text-slate-500">{m.l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-2 pt-2 border-t border-teal-500/10">
                  <svg className="h-3.5 w-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  <span className="font-mono text-[10px] text-slate-500">{test.tool} &middot; {test.vus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Metric Bars + Terminal Output */}
          <div className="space-y-8">
            {/* Response Time Benchmarks */}
            <div className="rounded-2xl border border-teal-500/20 bg-[#0b1219]/80 p-6 space-y-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                P95 Response Time (ms)
              </h3>
              <MetricBar label="E-Commerce Flash Sale" value={820} maxValue={2000} unit="ms" color="#f43f5e" delay={0} />
              <MetricBar label="IMAN Warranty ZNS Burst" value={510} maxValue={2000} unit="ms" color="#a855f7" delay={100} />
              <MetricBar label="Feng Shui PWA Load" value={450} maxValue={2000} unit="ms" color="#eab308" delay={200} />
              <MetricBar label="DMS Field Sync" value={390} maxValue={2000} unit="ms" color="#10b981" delay={300} />
              <MetricBar label="PWA Avg Response" value={120} maxValue={2000} unit="ms" color="#2dd4bf" delay={400} />
            </div>

            {/* Concurrency Handled */}
            <div className="rounded-2xl border border-teal-500/20 bg-[#0b1219]/80 p-6 space-y-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Peak Concurrent Users (VUs)
              </h3>
              <MetricBar label="E-Commerce Flash Sale" value={2500} maxValue={3000} unit=" VUs" color="#f43f5e" delay={0} />
              <MetricBar label="Feng Shui PWA" value={1000} maxValue={3000} unit=" VUs" color="#eab308" delay={100} />
              <MetricBar label="IMAN ZNS Burst" value={500} maxValue={3000} unit=" VUs" color="#a855f7" delay={200} />
              <MetricBar label="DMS Field Sync" value={300} maxValue={3000} unit=" VUs" color="#10b981" delay={300} />
            </div>

            {/* JMeter Terminal Log */}
            <div className="rounded-2xl border border-teal-500/15 bg-[#060a10] p-5 font-mono text-xs overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-teal-500/15">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-500">jmeter &mdash; aggregate_results.jtl</span>
              </div>
              <div className="space-y-1 text-[11px] leading-relaxed">
                <p className="text-slate-500"># Flash Sale — 2500 VUs · 10min steady state</p>
                <p className="text-teal-300">
                  <span className="text-slate-600">{">"} </span>Throughput:{" "}
                  <span className="text-teal-400 font-bold">340.2 req/s</span>
                </p>
                <p className="text-teal-300">
                  <span className="text-slate-600">{">"} </span>Avg Latency:{" "}
                  <span className="text-green-400 font-bold">512ms</span>
                </p>
                <p className="text-teal-300">
                  <span className="text-slate-600">{">"} </span>P95 Latency:{" "}
                  <span className="text-green-400 font-bold">820ms</span>
                </p>
                <p className="text-teal-300">
                  <span className="text-slate-600">{">"} </span>Error Rate:{" "}
                  <span className="text-teal-400 font-bold">0.00%</span>
                </p>
                <p className="text-slate-500 mt-2"># Feng Shui PWA — 1000 VUs ramp-up</p>
                <p className="text-teal-300">
                  <span className="text-slate-600">{">"} </span>Throughput:{" "}
                  <span className="text-teal-400 font-bold">180.4 req/s</span>
                </p>
                <p className="text-teal-300">
                  <span className="text-slate-600">{">"} </span>P95 Latency:{" "}
                  <span className="text-green-400 font-bold">450ms</span>
                </p>
                <p className="text-teal-300">
                  <span className="text-slate-600">{">"} </span>Error Rate:{" "}
                  <span className="text-yellow-400 font-bold">0.12%</span>
                </p>
                <p className="text-teal-400 mt-3 flex items-center gap-1">
                  <span className="animate-pulse">▌</span>
                  <span>All tests PASSED threshold criteria.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

