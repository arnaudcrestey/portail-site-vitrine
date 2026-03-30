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
      {/* fond global */}
      <div className="absolute inset-0 bg-[#f5f7fb]" />

      {/* halos latéraux doux */}
      <div className="pointer-events-none absolute left-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(90deg,rgba(223,228,241,0.24)_0%,rgba(245,247,251,0)_100%)]" />
      <div className="pointer-events-none absolute right-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(270deg,rgba(223,228,241,0.24)_0%,rgba(245,247,251,0)_100%)]" />

      {/* brume basse */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-8%] h-[22vh] bg-[radial-gradient(ellipse_at_center,rgba(220,225,241,0.16)_0%,rgba(245,247,251,0)_74%)] blur-3xl" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="w-full max-w-[1500px]">
          <div
            className="
              relative mx-auto w-full max-w-[860px]
              lg:max-w-[1080px]
              lg:rounded-[34px]
              lg:border lg:border-[#d9def8]
              lg:px-10 lg:py-10
              lg:shadow-[0_14px_44px_rgba(15,23,42,0.045),inset_0_1px_0_rgba(255,255,255,0.92)]
              xl:px-12 xl:py-12
            "
          >
            {/* base hero plus claire */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[#f7f8fe]" />

            {/* brillance principale plus forte */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.46)_20%,rgba(255,255,255,0.14)_38%,rgba(255,255,255,0)_62%)]" />

            {/* lumière centrale douce */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.16)_18%,rgba(247,248,254,0)_44%)]" />

            {/* teinte interne hero */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(247,248,254,0.12)_30%,rgba(243,244,251,0.18)_100%)]" />

            {/* contour interne */}
            <div className="pointer-events-none absolute inset-[1px] hidden rounded-[33px] lg:block lg:border lg:border-[#edf0fd]" />

            {/* reflet haut gauche */}
            <div className="pointer-events-none absolute left-[14%] top-[7%] hidden h-[12%] w-[18%] rounded-full bg-white/26 blur-3xl lg:block" />

            {/* glow haut centre */}
            <div className="pointer-events-none absolute left-1/2 top-[10%] hidden h-[20%] w-[34%] -translate-x-1/2 rounded-full bg-white/24 blur-3xl lg:block" />

            {/* ombre basse */}
            <div className="pointer-events-none absolute inset-x-[18%] bottom-[-4%] hidden h-12 rounded-full bg-[rgba(15,23,42,0.04)] blur-3xl lg:block" />

            <div
              className="
                relative mx-auto flex max-w-[650px] flex-col items-center justify-center text-center
                min-h-[78vh]
                lg:min-h-[500px]
              "
            >
              {/* Monogramme */}
              <div
                className={`
                  ${serif.className}
                  text-[clamp(4.2rem,9vw,7.4rem)] font-medium leading-none tracking-[-0.13em] text-[#1f315a]
                  lg:text-[4.75rem] lg:tracking-[-0.15em] lg:text-[#18264a]
                `}
              >
                AC
              </div>

              {/* Domaine */}
              <p
                className={`
                  ${serif.className}
                  mt-2 text-[clamp(1.75rem,3.6vw,2.95rem)] font-normal leading-none tracking-[-0.045em] text-[#1f315a]
                  lg:mt-1 lg:text-[2.85rem] lg:tracking-[-0.055em] lg:text-[#1f315a]
                `}
              >
                arnaudcrestey.com
              </p>

              {/* Ligne */}
              <div
                className="
                  mx-auto mt-7 h-px w-[118px]
                  bg-[linear-gradient(90deg,rgba(231,234,251,0)_0%,rgba(217,222,248,0.92)_50%,rgba(231,234,251,0)_100%)]
                  sm:mt-8 sm:w-[148px]
                  lg:mt-8 lg:w-[120px]
                "
              />

              {/* Bouton */}
              <div className="mt-9 sm:mt-10 lg:mt-9">
                <Link
                  href="/home"
                  className={`
                    ${serif.className}
                    group relative inline-flex min-w-[220px] items-center justify-center rounded-[22px]
                    border border-[#d9def8]
                    bg-[linear-gradient(180deg,#ffffff_0%,#f3f4fb_100%)]
                    px-10 py-4 text-[clamp(1.9rem,2.8vw,2.35rem)] font-medium leading-none tracking-[-0.028em] text-[#243765]
                    shadow-[0_18px_36px_rgba(15,23,42,0.05),0_8px_18px_rgba(15,23,42,0.025),inset_0_1px_0_rgba(255,255,255,0.98)]
                    transition-all duration-500
                    hover:-translate-y-[2px]
                    hover:shadow-[0_24px_44px_rgba(15,23,42,0.07),0_12px_22px_rgba(15,23,42,0.03),inset_0_1px_0_rgba(255,255,255,1)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cad3eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fb]
                    lg:min-w-[220px] lg:text-[2.05rem] lg:text-[#1f315a]
                  `}
                >
                  <span className="absolute inset-[1px] rounded-[21px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.26)_100%)] opacity-90" />
                  <span className="absolute -bottom-4 left-1/2 h-7 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(145,156,194,0.12)] blur-xl transition-all duration-500 group-hover:w-[76%]" />
                  <span className="relative z-10">Entrer</span>
                </Link>
              </div>

              {/* Baseline */}
              <div className="mt-14 w-full sm:mt-16 md:mt-20 lg:mt-16">
                <p
                  className={`
                    ${serif.className}
                    mx-auto max-w-[760px] text-balance
                    text-[clamp(1.02rem,1.85vw,1.6rem)] leading-[1.72] tracking-[-0.015em] text-[#5a6d96]
                    lg:max-w-[720px] lg:text-[1.14rem] lg:leading-[1.9] lg:tracking-[-0.018em] lg:text-[#5a6d96]
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
