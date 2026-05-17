import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import HybridSystemDiagram from "@/components/illustrations/HybridSystemDiagram";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How EcoBoom's hybrid event power systems cut diesel fuel use by ~90% - battery banks piggybacked onto smart generators. Same uptime, far less waste.",
};

const steps = [
  {
    n: "01",
    title: "Battery bank runs the show",
    body: "Our deployments start fully charged. Audio, lighting, and distro pull power from a large mobile battery - silently and emissions-free.",
  },
  {
    n: "02",
    title: "Diesel only fires to top up",
    body: "When the battery reaches a configurable threshold, a smart diesel generator kicks on, recharges the battery efficiently at peak load, then shuts down.",
  },
  {
    n: "03",
    title: "Cycle repeats",
    body: "The diesel runs in short, optimized bursts - never idling, never overproducing. The show keeps running off stored energy in between.",
  },
];

const comparison = [
  {
    label: "Fuel burn",
    legacy: "Diesel runs continuously, often at low load (least efficient mode).",
    hybrid: "Diesel runs only at peak efficiency for short top-ups. ~90% less fuel.",
  },
  {
    label: "Noise on set",
    legacy: "Constant generator hum, audible across the location.",
    hybrid: "Battery is silent. Diesel only fires briefly when needed.",
  },
  {
    label: "Emissions",
    legacy: "24/7 NOx and particulate emissions at the venue.",
    hybrid: "Dramatic reduction. Cleaner air for crew and audience.",
  },
  {
    label: "Reliability",
    legacy: "Single point of failure - generator dies, show stops.",
    hybrid: "Battery is a constant buffer. Diesel can be hot-swapped without downtime.",
  },
];

const faqs = [
  {
    q: "Does this actually save money?",
    a: "Yes - fuel is the largest variable cost on a long deployment. A 90% reduction in diesel translates directly to budget savings, especially on multi-day festival runs or extended shoots.",
  },
  {
    q: "What happens if the battery runs low?",
    a: "The diesel kicks on automatically and recharges the battery at peak efficiency. The show never sees the transition. You have continuous power.",
  },
  {
    q: "Can it scale to a main-stage festival?",
    a: "Yes. Our largest battery system - the Moxion 600 kWh - outputs 300 amps at 480V and parallels with additional units. We've supplied festival-grade hybrid packages.",
  },
  {
    q: "What about film sets - are these systems quiet enough?",
    a: "The battery is effectively silent. When the diesel runs, it runs briefly and at distance. For sound-critical shoots we can configure all-battery deployments with no diesel on site.",
  },
  {
    q: "Is this just for outdoor events?",
    a: "No - hybrid systems are ideal indoors too, because there's no continuous combustion engine running near crew. Particularly useful for brand activations in indoor spaces and warehouse shoots.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-20 pb-12 sm:pt-28 sm:pb-16">
        <p className="eyebrow">Sustainability</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-7xl">
          The same show.
          <br />
          <span className="text-ecoGreenDeep">~90% less fuel.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
          EcoBoom is built around hybrid event power. We pair massive battery
          banks with smart diesel generators - the show runs almost entirely
          off stored energy, and the diesel only fires briefly when the
          batteries need a top-up. Quieter sets. Cleaner air. Lower cost.
          Same uptime.
        </p>
      </section>

      {/* DIAGRAM */}
      <section className="border-y border-line/60 bg-moonlight">
        <div className="container-page py-12 sm:py-20">
          <p className="eyebrow">How the hybrid system works</p>
          <div className="mt-8">
            <HybridSystemDiagram className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Three steps, on loop</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Battery up front. Diesel only when needed.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-line/60 bg-line/60 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="bg-bone p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-ecoGreenDeep">
                Step {step.n}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-smoke">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-ink text-bone">
        <div className="container-page py-20 sm:py-28">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-eyebrow uppercase tracking-widest text-ecoGreen">
                Side by side
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Legacy diesel vs. hybrid.
              </h2>
            </div>
          </div>
          <div className="mt-12 overflow-hidden border border-bone/15">
            <div className="grid grid-cols-1 border-b border-bone/15 bg-ink/40 md:grid-cols-12">
              <div className="border-b border-bone/15 p-4 md:col-span-3 md:border-b-0 md:border-r md:border-bone/15">
                <p className="text-xs uppercase tracking-widest text-stone/70">
                  Compared
                </p>
              </div>
              <div className="border-b border-bone/15 p-4 md:col-span-5 md:border-b-0 md:border-r md:border-bone/15">
                <p className="text-xs uppercase tracking-widest text-stone/70">
                  Legacy diesel
                </p>
              </div>
              <div className="p-4 md:col-span-4">
                <p className="text-xs uppercase tracking-widest text-ecoGreen">
                  EcoBoom hybrid
                </p>
              </div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.label}
                className={[
                  "grid grid-cols-1 md:grid-cols-12",
                  i < comparison.length - 1 ? "border-b border-bone/15" : "",
                ].join(" ")}
              >
                <div className="border-b border-bone/15 p-5 md:col-span-3 md:border-b-0 md:border-r md:border-bone/15">
                  <p className="font-display text-lg leading-tight text-bone">
                    {row.label}
                  </p>
                </div>
                <div className="border-b border-bone/15 p-5 text-stone/85 md:col-span-5 md:border-b-0 md:border-r md:border-bone/15">
                  {row.legacy}
                </div>
                <div className="p-5 text-bone md:col-span-4">
                  <Check
                    size={16}
                    className="mb-2 inline-block text-ecoGreen"
                  />{" "}
                  <span>{row.hybrid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-narrow">
          <p className="eyebrow">Why it matters</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            This isn&rsquo;t a marketing angle.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-smoke">
            <p>
              The film and live event industries run on portable power. Most
              of that power, historically, has been diesel generators running
              continuously - often at low load, which is the least
              fuel-efficient operating mode.
            </p>
            <p>
              The math on hybrid is straightforward: charge a battery off the
              grid (or a diesel running at peak efficiency for a short
              window), then run the show off stored energy. The diesel does
              less work, burns far less fuel, and the air around your set is
              dramatically cleaner.
            </p>
            <p>
              We&rsquo;re production people. We didn&rsquo;t come at this
              from a sustainability marketing brief - we came at it from
              spending years on sets, paying for fuel, and listening to
              generators rumble through every take. Hybrid is the answer
              that works.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line/60 bg-moonlight">
        <div className="container-page py-20 sm:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Questions, answered</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                Common questions about hybrid power.
              </h2>
            </div>
            <div className="md:col-span-8">
              <dl className="divide-y divide-line/70">
                {faqs.map((faq) => (
                  <div key={faq.q} className="py-6 first:pt-0">
                    <dt className="font-display text-xl leading-snug text-ink">
                      {faq.q}
                    </dt>
                    <dd className="mt-3 leading-relaxed text-smoke">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Build a hybrid package</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-6xl">
              Tell us about your show.{" "}
              <span className="text-ecoGreenDeep">
                We&rsquo;ll size the system.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-wordmark text-sm font-semibold text-bone transition-colors hover:bg-ecoGreenDeep"
            >
              Request a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
