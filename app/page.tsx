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
      {/* Fond général */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.98)_0%,rgba(245,247,251,0.98)_42%,rgba(238,241,250,1)_100%)]" />

      {/* halos latéraux */}
      <div className="absolute left-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(90deg,rgba(223,228,241,0.42)_0%,rgba(245,247,251,0)_100%)]" />
      <div className="absolute right-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(270deg,rgba(223,228,241,0.42)_0%,rgba(245,247,251,0)_100%)]" />

      {/* brume basse */}
      <div className="absolute inset-x-0 bottom-[-10%] h-[28vh] bg-[radial-gradient(ellipse_at_center,rgba(220,225,241,0.34)_0%,rgba(245,247,251,0)_74%)] blur-3xl" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="w-full max-w-[1500px]">
          <div
            className="
              relative mx-auto w-full max-w-[860px]
              lg:max-w-[1240px]
              lg:rounded-[34px]
              lg:border lg:border-[rgba(255,255,255,0.72)]
              lg:px-12 lg:py-12
              lg:shadow-[0_34px_90px_rgba(110,121,156,0.12),0_14px_34px_rgba(110,121,156,0.08),inset_0_1px_0_rgba(255,255,255,0.92)]
              xl:px-16 xl:py-14
            "
          >
            {/* intérieur du cadre desktop uniquement */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[linear-gradient(180deg,#f3f2f8_0%,#f7f7fb_46%,#f1f2f8_100%)]" />
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_22%_14%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.18)_30%,rgba(255,255,255,0)_58%)]" />
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_84%_18%,rgba(232,235,248,0.55)_0%,rgba(232,235,248,0.12)_26%,rgba(255,255,255,0)_56%)]" />
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[linear-gradient(135deg,rgba(228,231,244,0.35)_0%,rgba(255,255,255,0)_34%,rgba(230,233,247,0.28)_100%)]" />

            {/* voile doux pour la sensation premium du cadre */}
            <div className="pointer-events-none absolute inset-[1px] hidden rounded-[33px] lg:block lg:bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_100%)]" />

            {/* reflet supérieur */}
            <div className="pointer-events-none absolute left-[10%] top-[7%] hidden h-[14%] w-[24%] rounded-full bg-white/28 blur-3xl lg:block" />

            {/* ombre du panneau */}
            <div className="pointer-events-none absolute inset-x-[12%] bottom-[-5%] hidden h-16 rounded-full bg-[rgba(123,134,171,0.14)] blur-3xl lg:block" />

            <div
              className="
                relative mx-auto flex max-w-[650px] flex-col items-center justify-center text-center
                min-h-[78vh]
                lg:min-h-[560px]
              "
            >
              {/* Monogramme */}
              <div
                className={`
                  ${serif.className}
                  text-[clamp(4.2rem,9vw,7.4rem)] font-medium leading-none tracking-[-0.08em] text-[#1f315a]
                  lg:text-[4.9rem] lg:tracking-[-0.07em] lg:text-[#18264a]
                `}
              >
                AC
              </div>

              {/* Domaine */}
              <p
                className={`
                  ${serif.className}
                  mt-2 text-[clamp(1.75rem,3.6vw,2.95rem)] font-normal leading-none tracking-[-0.03em] text-[#556b96]
                  lg:mt-1 lg:text-[3rem] lg:tracking-[-0.045em] lg:text-[#1f315a]
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
                  lg:bg-[linear-gradient(90deg,rgba(190,199,223,0)_0%,rgba(193,202,226,0.88)_50%,rgba(190,199,223,0)_100%)]
                "
              />

              {/* Bouton - identique mobile, un peu plus raffiné sur desktop */}
              <div className="mt-9 sm:mt-10 lg:mt-10">
                <Link
                  href="/home"
                  className={`
                    ${serif.className}
                    group relative inline-flex min-w-[220px] items-center justify-center rounded-[22px]
                    border border-[#d6dcef]
                    bg-[linear-gradient(180deg,#ffffff_0%,#eef2fa_100%)]
                    px-10 py-4 text-[clamp(1.9rem,2.8vw,2.35rem)] font-medium leading-none tracking-[-0.028em] text-[#243765]
                    shadow-[0_18px_36px_rgba(101,114,153,0.12),0_8px_18px_rgba(101,114,153,0.06),inset_0_1px_0_rgba(255,255,255,0.98)]
                    transition-all duration-500
                    hover:-translate-y-[2px]
                    hover:shadow-[0_24px_44px_rgba(101,114,153,0.14),0_12px_22px_rgba(101,114,153,0.08),inset_0_1px_0_rgba(255,255,255,1)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cad3eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fb]
                    lg:min-w-[220px] lg:border-[#d8ddef] lg:bg-[linear-gradient(180deg,#ffffff_0%,#eef1f8_100%)] lg:text-[2.15rem] lg:text-[#1f315a]
                    lg:shadow-[0_20px_40px_rgba(104,116,154,0.11),0_10px_22px_rgba(104,116,154,0.06),inset_0_1px_0_rgba(255,255,255,0.98)]
                  `}
                >
                  <span className="absolute inset-[1px] rounded-[21px] bg-[linear-gradient(180deg,rgba(255,255,255,0.66)_0%,rgba(255,255,255,0.18)_100%)] opacity-90" />
                  <span className="absolute -bottom-4 left-1/2 h-7 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(145,156,194,0.18)] blur-xl transition-all duration-500 group-hover:w-[76%]" />
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
