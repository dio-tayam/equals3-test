"use client";

import { useEffect } from "react";
import { Practitioner } from "@/lib/types";
import { ArrowRightIcon, PinIcon, StarIcon, XIcon } from "./icons";

export function ProfileModal({
  practitioner,
  onClose,
}: {
  practitioner: Practitioner;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const isPremium = practitioner.tier === "premium";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${practitioner.name} profile`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl animate-fade-up"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-white/80 text-ink-soft shadow-sm hover:bg-taupe-100"
        >
          <XIcon className="size-3.5" />
        </button>

        <div
          className={
            "px-7 pb-6 pt-8 " +
            (isPremium ? "bg-linear-to-b from-[#fbf5e8] to-white" : "")
          }
        >
          <div className="flex items-start gap-4 pr-8">
            <div
              className={
                "flex size-16 shrink-0 items-center justify-center rounded-full font-serif text-2xl ring-2 ring-offset-2 ring-offset-white " +
                (isPremium
                  ? "bg-gold-500 text-white ring-gold-300"
                  : "bg-taupe-100 text-taupe-700 ring-taupe-100")
              }
            >
              {practitioner.initials}
            </div>
            <div>
              <span
                className={
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide-sm uppercase text-white " +
                  (isPremium ? "bg-gold-500" : "bg-taupe-500")
                }
              >
                {isPremium && <StarIcon className="size-3" />}
                {practitioner.tier}
              </span>
              <h2 className="mt-1.5 font-serif text-2xl leading-tight text-ink">
                {practitioner.name}
              </h2>
              <p className="text-sm text-ink-faint">{practitioner.title}</p>
            </div>
          </div>

          <div className="mt-5 max-h-64 space-y-3 overflow-y-auto pr-1 text-sm leading-relaxed text-ink-soft">
            {practitioner.bio.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {practitioner.specialisms.map((s) => (
              <span
                key={s}
                className={
                  "rounded-full px-2.5 py-1 text-xs " +
                  (isPremium
                    ? "bg-gold-400/15 text-gold-600"
                    : "bg-taupe-50 text-taupe-700")
                }
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-border pt-5 text-sm text-ink-faint">
            <span className="flex items-center gap-1.5">
              <PinIcon className="size-3.5 text-taupe-500" />
              {practitioner.location}
              <span className="text-ink-faint/70">· {practitioner.region}</span>
            </span>
            <span>{practitioner.yearsExperience} yrs experience</span>
          </div>
        </div>

        <button
          type="button"
          className={
            "flex w-full items-center justify-center gap-1.5 px-6 py-3.5 text-sm font-medium text-white transition-colors " +
            (isPremium ? "bg-gold-500 hover:bg-gold-600" : "bg-ink hover:bg-ink-soft")
          }
        >
          Enquire about training
          <ArrowRightIcon className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
