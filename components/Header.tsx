import { practitioners } from "@/lib/practitioners";
import { ArrowRightIcon } from "./icons";

export function Header() {
  const premiumCount = practitioners.filter((p) => p.tier === "premium").length;

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#1c1a16] text-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-2 text-center text-xs">
          <span className="hidden sm:inline">
            Practitioners pay to be listed —
          </span>
          <span className="text-taupe-300">Standard £150/mo</span>
          <span className="text-white/30">·</span>
          <span className="text-gold-300">Premium £249/mo</span>
        </div>
      </div>

      <header className="border-b border-border bg-cream shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-baseline gap-3">
            <div>
              <p className="font-serif text-2xl leading-none text-ink">
                Aesthetic
              </p>
              <p className="text-[10px] tracking-wide-lg uppercase text-taupe-700">
                Training Hub
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-border bg-white px-4 py-1.5 text-xs tracking-wide-sm uppercase text-ink-soft sm:inline-flex">
              {practitioners.length} trainers · {premiumCount} premium
            </span>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium tracking-wide-sm uppercase text-cream transition-colors hover:bg-gold-600"
            >
              List your practice
              <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
