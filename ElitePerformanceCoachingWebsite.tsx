"use client";

import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  HeartPulse,
  LineChart,
  Menu,
  Target,
  Timer,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  HeartPulse,
  LineChart,
  Menu,
  Target,
  Timer,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

export default function ElitePerformanceCoachingWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const brandName = "Elias Polion";
  const brandTitle = "Performance Coach";
  const typeformLink = "https://form.typeform.com/to/YOURFORMID";
  const calendlyLink = "https://calendly.com/YOURNAME/performance-strategy-call";

  const expertise = useMemo(
    () => [
      {
        icon: <BarChart3 className="h-5 w-5" />,
        title: "Performance Monitoring",
        text: "Use structured monitoring to guide training decisions, recovery management, and long-term progress.",
      },
      {
        icon: <Brain className="h-5 w-5" />,
        title: "Human Factors",
        text: "Integrate behavior, stress, routine, motivation, and real-life constraints into the coaching process.",
      },
      {
        icon: <Dumbbell className="h-5 w-5" />,
        title: "Applied Sports Science",
        text: "Design structured, evidence-based programs focused on performance, progression, and measurable results.",
      },
    ],
    []
  );

  const pillars = [
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Assess",
      text: "Understand your current level, habits, goals, and constraints before building the plan.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Plan",
      text: "Create a personalized coaching structure adapted to performance, health, and lifestyle realities.",
    },
    {
      icon: <HeartPulse className="h-5 w-5" />,
      title: "Monitor",
      text: "Track recovery, consistency, workload, and behavior to make smarter adjustments over time.",
    },
  ];

  const audience = [
    "Competitive athletes",
    "Recreational athletes",
    "People returning to training",
    "Adults seeking fitness, health, and performance improvement",
  ];

  const process = [
    {
      step: "01",
      title: "Complete the Application",
      text: "Fill out the Typeform so I can understand your profile, objective, training background, and current challenges.",
    },
    {
      step: "02",
      title: "Book Your Strategy Call",
      text: "Choose a time in Calendly to discuss your situation and identify the best coaching path for you.",
    },
    {
      step: "03",
      title: "Start a Tailored Program",
      text: "Receive a coaching framework adapted to your sport, level, schedule, recovery, and performance needs.",
    },
  ];

  const benefits = [
    "More structure and accountability",
    "Better visibility on progress",
    "Smarter recovery and load management",
    "A coaching process built around real life",
    "Clearer performance direction",
    "Professional support from assessment to execution",
  ];

  const navItems = [
    { label: "Approach", href: "#approach" },
    { label: "Who It Is For", href: "#who-its-for" },
    { label: "Process", href: "#process" },
    { label: "Apply", href: "#apply" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight">{brandName}</div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/45">{brandTitle}</div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.01]"
            >
              Book a Call
            </a>
          </div>

          <button
            type="button"
            className="rounded-xl border border-white/10 p-2 md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-2xl bg-white px-5 py-3 text-center text-sm font-medium text-neutral-950"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Performance coaching by {brandName}, built on sports science, monitoring, and human factors.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              A premium coaching experience for people who want structure, measurable progress, and a more intelligent approach to training, recovery, and performance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={typeformLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-medium text-neutral-950 transition hover:scale-[1.01]"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10"
              >
                Book a Strategy Call
                <Calendar className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">Coaching framework</div>
              <div className="mt-6 grid gap-4">
                {pillars.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3 text-white/85">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2">{item.icon}</div>
                      <div className="text-lg font-medium">{item.title}</div>
                    </div>
                    <p className="mt-3 leading-7 text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-white/45">Approach</div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            A coaching method that goes beyond generic plans.
          </h2>
          <p className="mt-5 leading-8 text-white/70">
            My work combines training structure, objective monitoring, and human factors to create coaching that is both high-level and realistic. The objective is not only to improve performance, but to build a system you can actually sustain.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-lg"
            >
              <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who-its-for" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">Who it is for</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Designed for committed people who want a professional process.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-white/70">
                Whether you compete, train for personal progress, or want to rebuild your physical foundation, the coaching is adapted to your level, goals, schedule, and constraints.
              </p>
              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-neutral-900/70 p-6">
                <div className="text-lg font-medium">What makes this different</div>
                <p className="mt-3 leading-7 text-white/65">
                  Instead of using a one-size-fits-all model, the process takes into account performance data, recovery capacity, stress, consistency, and lifestyle variables.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audience.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5 text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-white/45">Process</div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            A clear path from application to coaching.
          </h2>
          <p className="mt-5 leading-8 text-white/70">
            The journey is designed to feel professional from the start. You apply, we review your profile, and we use a strategy call to determine the right fit.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {process.map((item) => (
            <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="text-sm font-medium tracking-[0.22em] text-white/40">{item.step}</div>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">Outcomes</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What clients are really building.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                Coaching is not just about pushing harder. It is about developing better decisions, clearer progression, and a durable system for training and recovery.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-neutral-900/70 p-5 text-white/85"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/45">Apply now</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Start with a professional coaching application.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                Complete the intake form, then book your strategy call. This application flow helps ensure that every coaching relationship starts with clarity, seriousness, and the right expectations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={typeformLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-medium text-neutral-950 transition hover:scale-[1.01]"
                >
                  Open Typeform
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={calendlyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10"
                >
                  Open Calendly
                  <Calendar className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/70 p-6">
              <div className="text-lg font-medium">What to expect</div>
              <div className="mt-5 grid gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Activity className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-medium">Application review</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">
                      Your goals, background, and constraints are reviewed before the call.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Timer className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-medium">Strategy call</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">
                      A focused discussion to evaluate fit, direction, and next steps.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Target className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-medium">Tailored coaching path</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">
                      A plan adapted to your performance goals, health profile, and routine.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            {brandName} — {brandTitle}
          </div>
          <div>Personalized coaching for athletes and active adults</div>
        </div>
      </footer>
    </div>
  );
}
