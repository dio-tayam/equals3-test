"use client";

import { useMemo, useState } from "react";
import { Practitioner } from "@/lib/types";
import { PractitionerCard } from "./PractitionerCard";
import { ProfileModal } from "./ProfileModal";
import { CheckIcon, ChevronDownIcon, PinIcon, SearchIcon, XIcon } from "./icons";

const ALL_LOCATIONS = "All locations";

type SortOption = "premium" | "name" | "experience";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "premium", label: "Premium first" },
  { value: "experience", label: "Most experienced" },
  { value: "name", label: "Name A–Z" },
];

export function PractitionerDirectory({
  practitioners,
  specialisms,
  locations,
}: {
  practitioners: Practitioner[];
  specialisms: string[];
  locations: string[];
}) {
  const [activeSpecialisms, setActiveSpecialisms] = useState<Set<string>>(
    new Set()
  );
  const [location, setLocation] = useState<string>(ALL_LOCATIONS);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("premium");
  const [selected, setSelected] = useState<Practitioner | null>(null);

  const specialismCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const specialism of specialisms) {
      counts.set(
        specialism,
        practitioners.filter((p) => p.specialisms.includes(specialism)).length
      );
    }
    return counts;
  }, [practitioners, specialisms]);

  function toggleSpecialism(specialism: string) {
    setActiveSpecialisms((prev) => {
      const next = new Set(prev);
      if (next.has(specialism)) {
        next.delete(specialism);
      } else {
        next.add(specialism);
      }
      return next;
    });
  }

  function clearFilters() {
    setActiveSpecialisms(new Set());
    setLocation(ALL_LOCATIONS);
    setQuery("");
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return practitioners
      .filter((p) => {
        const matchesSpecialism =
          activeSpecialisms.size === 0 ||
          p.specialisms.some((s) => activeSpecialisms.has(s));
        const matchesLocation =
          location === ALL_LOCATIONS || p.location === location;
        const matchesQuery =
          q.length === 0 ||
          p.name.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.specialisms.some((s) => s.toLowerCase().includes(q));
        return matchesSpecialism && matchesLocation && matchesQuery;
      })
      .sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "experience") return b.yearsExperience - a.yearsExperience;
        if (a.tier !== b.tier) return a.tier === "premium" ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
  }, [practitioners, activeSpecialisms, location, query, sort]);

  const hasActiveFilters =
    activeSpecialisms.size > 0 || location !== ALL_LOCATIONS || query.length > 0;

  return (
    <div>
      <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex-1">
            <label
              htmlFor="search"
              className="mb-1.5 block text-xs tracking-wide-sm uppercase text-ink-faint"
            >
              Search
            </label>
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-taupe-500" />
              <input
                id="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, title, or specialism…"
                className="w-full rounded-lg border border-border bg-cream/50 py-2.5 pl-10 pr-3.5 text-sm text-ink placeholder:text-ink-faint focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
            </div>
          </div>

          <div className="sm:w-52">
            <label
              htmlFor="location"
              className="mb-1.5 block text-xs tracking-wide-sm uppercase text-ink-faint"
            >
              Location
            </label>
            <div className="relative">
              <PinIcon className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-taupe-500" />
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none rounded-lg border border-border bg-cream/50 py-2.5 pl-9 pr-9 text-sm text-ink focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
              >
                <option>{ALL_LOCATIONS}</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
            </div>
          </div>

          <div className="sm:w-48">
            <label
              htmlFor="sort"
              className="mb-1.5 block text-xs tracking-wide-sm uppercase text-ink-faint"
            >
              Sort by
            </label>
            <div className="relative">
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="w-full appearance-none rounded-lg border border-border bg-cream/50 py-2.5 pl-3.5 pr-9 text-sm text-ink focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs tracking-wide-sm uppercase text-ink-faint">
            Specialism
          </p>
          <div className="flex flex-wrap gap-2">
            {specialisms.map((specialism) => {
              const active = activeSpecialisms.has(specialism);
              return (
                <button
                  key={specialism}
                  type="button"
                  onClick={() => toggleSpecialism(specialism)}
                  aria-pressed={active}
                  className={
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors " +
                    (active
                      ? "border-gold-500 bg-gold-500 text-white"
                      : "border-border bg-cream/50 text-ink-soft hover:border-gold-400 hover:text-ink")
                  }
                >
                  {active && <CheckIcon className="size-3" />}
                  {specialism}
                  <span
                    className={
                      "text-xs " + (active ? "text-white/70" : "text-ink-faint")
                    }
                  >
                    {specialismCounts.get(specialism)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
            {Array.from(activeSpecialisms).map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1 rounded-full bg-taupe-50 px-2.5 py-1 text-xs text-taupe-700"
              >
                {s}
                <button
                  type="button"
                  onClick={() => toggleSpecialism(s)}
                  aria-label={`Remove ${s} filter`}
                >
                  <XIcon className="size-3" />
                </button>
              </span>
            ))}
            {location !== ALL_LOCATIONS && (
              <span className="inline-flex items-center gap-1 rounded-full bg-taupe-50 px-2.5 py-1 text-xs text-taupe-700">
                {location}
                <button
                  type="button"
                  onClick={() => setLocation(ALL_LOCATIONS)}
                  aria-label="Remove location filter"
                >
                  <XIcon className="size-3" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm text-taupe-700 underline-offset-2 hover:underline"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-ink-faint">
          {filtered.length} practitioner{filtered.length === 1 ? "" : "s"} found
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PractitionerCard
              key={p.id}
              practitioner={p}
              onViewProfile={setSelected}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-white py-16 text-center">
          <p className="font-serif text-lg text-ink">No practitioners match those filters</p>
          <p className="mt-1 text-sm text-ink-faint">
            Try removing a specialism or choosing a different location.
          </p>
        </div>
      )}

      {selected && (
        <ProfileModal practitioner={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
