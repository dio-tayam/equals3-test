import { Practitioner } from "@/lib/types";
import { ArrowRightIcon, PinIcon, StarIcon } from "./icons";

export function PractitionerCard({
  practitioner,
  onViewProfile,
}: {
  practitioner: Practitioner;
  onViewProfile: (practitioner: Practitioner) => void;
}) {
  const isPremium = practitioner.tier === "premium";

  return (
    <article
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 " +
        (isPremium
          ? "border-gold-400/70 bg-linear-to-b from-[#fbf5e8] to-white shadow-[0_6px_28px_-6px_rgba(182,134,63,0.4)] hover:shadow-[0_14px_36px_-8px_rgba(182,134,63,0.5)]"
          : "border-border bg-card shadow-sm hover:border-taupe-300 hover:shadow-lg")
      }
    >
      <span
        className={
          "absolute top-0 z-10 flex items-center gap-1 px-3 py-1.5 text-[10px] font-semibold tracking-wide-sm uppercase text-white " +
          (isPremium
            ? "right-0 rounded-bl-xl bg-gold-500"
            : "left-0 rounded-br-xl bg-taupe-500")
        }
      >
        {isPremium && <StarIcon className="size-3" />}
        {practitioner.tier}
      </span>

      <div className="flex flex-1 flex-col p-6 pb-0 pt-9">
        <div className="flex items-start gap-4">
          <div
            className={
              "flex size-13 shrink-0 items-center justify-center rounded-full font-serif text-lg ring-2 ring-offset-2 ring-offset-white " +
              (isPremium
                ? "bg-gold-500 text-white ring-gold-300"
                : "bg-taupe-100 text-taupe-700 ring-taupe-100")
            }
          >
            {practitioner.initials}
          </div>
          <div className="min-w-0 pt-0.5">
            <h3 className="font-serif text-xl leading-tight text-ink truncate">
              {practitioner.name}
            </h3>
            <p className="text-sm text-ink-faint">{practitioner.title}</p>
          </div>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {practitioner.bio.split("\n\n")[0]}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
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
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border px-6 py-4 text-sm text-ink-faint">
        <span className="flex items-center gap-1.5">
          <PinIcon className="size-3.5 text-taupe-500" />
          {practitioner.location}
          <span className="text-ink-faint/70">· {practitioner.region}</span>
        </span>
        <span>{practitioner.yearsExperience} yrs exp.</span>
      </div>

      <button
        type="button"
        onClick={() => onViewProfile(practitioner)}
        className={
          "flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-medium transition-colors " +
          (isPremium
            ? "bg-gold-500 text-white hover:bg-gold-600"
            : "bg-cream text-ink-soft hover:bg-taupe-50 hover:text-ink")
        }
      >
        View profile
        <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </button>
    </article>
  );
}
