import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f7fb] text-[#1f2740]">
      {/* fond général proche du hero */}
      <div className="absolute inset-0 bg-[#f5f7fb]" />

      {/* halos latéraux très doux */}
      <div className="pointer-events-none absolute left-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(90deg,rgba(223,228,241,0.32)_0%,rgba(245,247,251,0)_100%)]" />
      <div className="pointer-events-none absolute right-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(270deg,rgba(223,228,241,0.32)_0%,rgba(245,247,251,0)_100%)]" />

      {/* légère brume basse */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-8%] h-[24vh] bg-[radial-gradient(ellipse_at_center,rgba(220,225,241,0.22)_0%,rgba(245,247,251,0)_74%)] blur-3xl" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="w-full max-w-[1500px]">
          <div
            className="
              relative mx-auto w-full max-w-[860px]
              lg:max-w-[1240px]
              lg:rounded-[34px]
              lg:border lg:border-[#d9def8]
              lg:px-12 lg:py-12
              lg:shadow-[0_12px_40px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,0.82)]
              xl:px-16 xl:py-14
            "
          >
            {/* base couleur IDENTIQUE à l’esprit du hero */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[#f7f8fe]" />

            {/* nuances internes hero */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.18)_28%,rgba(255,255,255,0)_55%)]" />
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_50%_50%,rgba(243,244,251,0.92)_0%,rgba(243,244,251,0.5)_22%,rgba(247,248,254,0)_48%)]" />
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(247,248,254,0)_34%,rgba(243,244,251,0.24)_100%)]" />

            {/* voile interne discret */}
            <div className="pointer-events-none absolute inset-[1px] hidden rounded-[33px] lg:block lg:border lg:border-[#e7eafb]" />

            {/* reflet supérieur doux */}
            <div className="pointer-events-none absolute left-[18%] top-[8%] hidden h-[14%] w-[22%] rounded-full bg-white/22 blur-3xl lg:block" />

            {/* ombre au sol */}
            <div className="pointer-events-none absolute inset-x-[12%] bottom-[-5%] hidden h-14 rounded-full bg-[rgba(15,23,42,0.05)] blur-3xl lg:block" />

            <div
              className="
                relative mx-auto flex max-w-[650px] flex-col items-center justify-center text-center
                min-h-[78vh]
                lg:min-h-[560px]
              "
            >
              {/* Monogramme resserré */}
              <div
                className={`
                  ${serif.className}
                  text-[clamp(4.2rem,9vw,7.4rem)] font-medium leading-none tracking-[-0.08em] text-[#1f315a]
                  lg:text-[4.9rem] lg:tracking-[-0.13em] lg:text-[#18264a]
                `}
              >
                AC
              </div>

              {/* Domaine */}
              <p
                className={`
                  ${serif.className}
                  mt-2 text-[clamp(1.75rem,3.6vw,2.95rem)] font-normal leading-none tracking-[-0.03em] text-[#556b96]
                  lg:mt-1 lg:text-[3rem] lg:tracking-[-0.05em] lg:text-[#1f315a]
                `}
              >
                arnaudcrestey.com
              </p>

              {/* Ligne */}
              <div
                className="
                  mx-auto mt-7 h-px w-[118px]
                  bg-[linear-gradient(90deg,rgba(209,214,229,0)_0%,rgba(209,214,229,0.95)_50%,rgba(209,214,229,0)_100%)]
                  sm:mt-8 sm:w-[148px]
                  lg:mt-8 lg:w-[132px]
                  lg:bg-[linear-gradient(90deg,rgba(231,234,251,0)_0%,rgba(217,222,248,1)_50%,rgba(231,234,251,0)_100%)]
                "
              />

              {/* Bouton */}
              <div className="mt-9 sm:mt-10 lg:mt-10">
                <Link
                  href="/home"
                  className={`
                    ${serif.className}
                    group relative inline-flex min-w-[220px] items-center justify-center rounded-[22px]
                    border border-[#d9def8]
                    bg-[linear-gradient(180deg,#ffffff_0%,#f3f4fb_100%)]
                    px-10 py-4 text-[clamp(1.9rem,2.8vw,2.35rem)] font-medium leading-none tracking-[-0.028em] text-[#243765]
                    shadow-[0_18px_36px_rgba(15,23,42,0.06),0_8px_18px_rgba(15,23,42,0.03),inset_0_1px_0_rgba(255,255,255,0.98)]
                    transition-all duration-500
                    hover:-translate-y-[2px]
                    hover:shadow-[0_24px_44px_rgba(15,23,42,0.08),0_12px_22px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,1)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cad3eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fb]
                    lg:min-w-[220px] lg:text-[2.15rem] lg:text-[#1f315a]
                  `}
                >
                  <span className="absolute inset-[1px] rounded-[21px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.22)_100%)] opacity-90" />
                  <span className="absolute -bottom-4 left-1/2 h-7 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(145,156,194,0.14)] blur-xl transition-all duration-500 group-hover:w-[76%]" />
                  <span className="relative z-10">Entrer</span>
                </Link>
              </div>

              {/* Baseline */}
              <div className="mt-14 w-full sm:mt-16 md:mt-20 lg:mt-20">
                <p
                  className={`
                    ${serif.className}
                    mx-auto max-w-[760px] text-balance
                    text-[clamp(1.02rem,1.85vw,1.6rem)] leading-[1.72] tracking-[-0.012em] text-[#4f638f]/90
                    lg:max-w-[780px] lg:text-[1.2rem] lg:leading-[1.95] lg:tracking-[-0.015em] lg:text-[#5a6d96]
                  `}
                >
                  Des systèmes numériques qui attirent,
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  engagent et transforment des visiteurs en clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
