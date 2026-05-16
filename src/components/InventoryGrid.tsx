"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InventoryCard from "./InventoryCard";
import {
  inventory,
  categories,
  type Category,
  type InventoryItem,
} from "@/data/inventory";

type FilterValue = "All" | Category;

export default function InventoryGrid() {
  const [filter, setFilter] = useState<FilterValue>("All");

  const items = useMemo<InventoryItem[]>(
    () =>
      filter === "All"
        ? inventory
        : inventory.filter((i) => i.category === filter),
    [filter]
  );

  const tabs: FilterValue[] = ["All", ...categories];

  return (
    <>
      <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
        <ul className="flex min-w-max gap-1 border-b border-line/70 pb-0">
          {tabs.map((t) => {
            const active = t === filter;
            return (
              <li key={t}>
                <button
                  type="button"
                  onClick={() => setFilter(t)}
                  className={[
                    "relative px-4 py-3 font-body text-xs uppercase tracking-widest transition-colors",
                    active
                      ? "text-ink after:absolute after:inset-x-4 after:-bottom-px after:h-0.5 after:bg-ink"
                      : "text-dust hover:text-ink",
                  ].join(" ")}
                >
                  {t}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {items.length === 0 ? (
        <p className="mt-12 text-smoke">
          Nothing in that category yet — get in touch and we&rsquo;ll see what
          we can source.
        </p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <InventoryCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <div className="mt-20 border-t border-line/70 pt-12">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Don&rsquo;t see something?</p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              We sub-rent. Ask us.
            </h3>
            <p className="mt-4 max-w-prose text-smoke">
              The catalog above is a snapshot of what we own. For specialty
              gear, redundancy, or large festival packages we work with
              trusted partners and source the rest of the kit you need.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/quote" className="btn-primary">
              Request a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
