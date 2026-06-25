import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PractitionerDirectory } from "@/components/PractitionerDirectory";
import { SparkleIcon, StarIcon, UsersIcon } from "@/components/icons";
import {
  allLocations,
  allSpecialisms,
  practitioners,
} from "@/lib/practitioners";

export default function Home() {
  const premiumCount = practitioners.filter((p) => p.tier === "premium").length;

  const stats = [
    { label: "vetted trainers", value: practitioners.length, icon: UsersIcon },
    { label: "specialisms covered", value: allSpecialisms.length, icon: SparkleIcon },
    { label: "premium trainers", value: premiumCount, icon: StarIcon },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        <section className="relative overflow-hidden border-b border-border bg-linear-to-br from-taupe-100 via-cream to-cream">
          <p
            aria-hidden
            className="watermark-letter pointer-events-none absolute -right-10 -top-16 select-none text-[22rem] text-taupe-300/30"
          >
            A
          </p>
          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-taupe-300 bg-white/70 px-3 py-1 text-xs tracking-wide-sm uppercase text-taupe-700">
              Expert-led learning
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.1] text-ink sm:text-6xl">
              Find your aesthetics trainer
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Browse vetted UK practitioners offering hands-on aesthetics
              training near you. Filter by specialism or location to find the
              right educator.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 sm:gap-10">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm">
                    <Icon className="size-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-serif text-xl text-ink">{value}</p>
                    <p className="text-xs text-ink-faint">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 py-12">
          <PractitionerDirectory
            practitioners={practitioners}
            specialisms={allSpecialisms}
            locations={allLocations}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
