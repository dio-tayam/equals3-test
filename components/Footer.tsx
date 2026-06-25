import { StarIcon } from "./icons";

const quickLinks = ["About Us", "Testimonials", "Practitioners", "FAQs"];

export function Footer() {
  return (
    <footer className="bg-[#1c1a16] text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-cream">Aesthetic</p>
            <p className="text-[10px] tracking-wide-lg uppercase text-taupe-300">
              Training Hub
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Connecting practitioners of all levels with vetted, experienced
              aesthetics educators across the UK.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-wide-sm uppercase text-cream/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/70 hover:text-gold-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-wide-sm uppercase text-cream/40">
              Listing tiers
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between gap-3 rounded-lg border border-white/10 px-3 py-2">
                <span className="text-cream/80">Standard</span>
                <span className="text-cream/50">£150/mo</span>
              </li>
              <li className="flex items-center justify-between gap-3 rounded-lg border border-gold-500/40 bg-gold-500/10 px-3 py-2">
                <span className="flex items-center gap-1.5 text-gold-300">
                  <StarIcon className="size-3" />
                  Premium
                </span>
                <span className="text-gold-300/80">£249/mo</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-wide-sm uppercase text-cream/40">
              Contact
            </p>
            <p className="mt-4 text-sm text-cream/70">
              hello@aestheticstraininghub.co.uk
            </p>
            <p className="mt-1 text-sm text-cream/70">United Kingdom</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Aesthetics Training Hub.</span>
          <span>Practitioner directory — product test build.</span>
        </div>
      </div>
    </footer>
  );
}
