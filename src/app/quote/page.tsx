import QuoteForm from "@/components/QuoteForm";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your production. We'll come back to you within one business day with a quote and a plan.",
};

export default function QuotePage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Request a Quote</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-7xl">
              Tell us about <span className="italic text-clay">the show.</span>
            </h1>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-smoke">
              The more detail you can share - venue, dates, audience size,
              what the production looks like - the faster we can come back
              with a real number and a plan.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="border border-line/70 p-8">
              <p className="eyebrow">Or reach out directly</p>
              <ul className="mt-6 space-y-3 text-smoke">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="link-clay"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                    className="link-clay"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li className="pt-3 font-mono text-xs uppercase tracking-widest text-dust">
                  {site.contact.serviceArea}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <div className="container-page">
        <div className="hairline" />
      </div>

      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
