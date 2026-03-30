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
      {/* Fond global */}
      <div className="absolute inset-0 bg-[#f5f7fb]" />

      {/* halos latéraux extérieurs */}
      <div className="pointer-events-none absolute left-[-10%] top-0 h-full w-[22%] bg-[linear-gradient(90deg,rgba(223,228,241,0.26)_0%,rgba(245,247,251,0)_100%)]" />
      <div className="pointer-events-none absolute right-[-10%] top-0 h-full w-[22%] bg-[linear-gradient(270deg,rgba(223,228,241,0.26)_0%,rgba(245,247,251,0)_100%)]" />

      {/* brume haute */}
      <div className="pointer-events-none absolute inset-x-0 top-[-8%] h-[26vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.50)_0%,rgba(245,247,251,0)_72%)] blur-3xl" />

      {/* brume basse */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[28vh] bg-[radial-gradient(ellipse_at_center,rgba(220,225,241,0.18)_0%,rgba(245,247,251,0)_74%)] blur-3xl" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="w-full max-w-[1440px]">
          <div
            className="
              relative mx-auto w-full max-w-[760px] overflow-hidden rounded-[28px]
              border border-[#e3e8fb]
              px-6 py-10
              shadow-[0_14px_40px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.88)]
              sm:max-w-[820px] sm:rounded-[30px] sm:px-8 sm:py-12
              lg:max-w-[1080px] lg:rounded-[34px] lg:px-12 lg:py-12
              xl:px-14 xl:py-14
            "
          >
            {/* base du cadre */}
            <div className="absolute inset-0 bg-[#f7f8fe]" />

            {/* voile coloré bleu-violet */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(124,108,242,0.12)_0%,rgba(124,108,242,0.06)_18%,rgba(124,108,242,0)_42%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(59,99,243,0.10)_0%,rgba(59,99,243,0.04)_20%,rgba(59,99,243,0)_44%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,108,242,0.04)_0%,rgba(255,255,255,0)_36%,rgba(59,99,243,0.035)_100%)]" />

            {/* lumière générale */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(247,248,254,0.10)_34%,rgba(243,244,251,0.16)_100%)]" />

            {/* glow haut centre */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.42)_20%,rgba(255,255,255,0.14)_36%,rgba(255,255,255,0)_60%)]" />

            {/* glow central doux */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.14)_18%,rgba(247,248,254,0)_42%)]" />

            {/* nuance interne */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(243,244,251,0.42)_0%,rgba(247,248,254,0)_36%)]" />

            {/* reflets subtils */}
            <div className="pointer-events-none absolute left-[10%] top-[8%] h-[12%] w-[18%] rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute right-[12%] bottom-[16%] h-[14%] w-[20%] rounded-full bg-white/10 blur-3xl" />

            {/* contour interne */}
            <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-[#eef1fd] sm:rounded-[29px] lg:rounded-[33px]" />

            {/* ombre basse */}
            <div className="pointer-events-none absolute inset-x-[18%] bottom-[-4%] h-12 rounded-full bg-[rgba(15,23,42,0.035)] blur-3xl" />

            <div
              className="
                relative mx-auto flex flex-col items-center justify-center text-center
                min-h-[72vh] max-w-[620px]
                sm:min-h-[70vh] sm:max-w-[660px]
                lg:min-h-[490px] lg:max-w-[700px]
              "
            >
              {/* Monogramme */}
              <div
                className={`
                  ${serif.className}
                  text-[clamp(4rem,16vw,5.6rem)] font-medium leading-none tracking-[-0.14em] text-[#16264d]
                  sm:text-[clamp(4.6rem,11vw,6.4rem)] sm:tracking-[-0.15em]
                  lg:text-[5.15rem] lg:tracking-[-0.17em]
                `}
              >
                AC
              </div>

              {/* Domaine */}
              <p
                className={`
                  ${serif.className}
                  mt-2 text-[clamp(2rem,7.4vw,2.9rem)] font-normal leading-none tracking-[-0.05em] text-[#1f315a]
                  sm:mt-1 sm:text-[clamp(2.2rem,6vw,3.2rem)] sm:tracking-[-0.055em]
                  lg:text-[3rem] lg:tracking-[-0.06em]
                `}
              >
                arnaudcrestey.com
              </p>

              {/* Ligne */}
              <div className="mx-auto mt-7 h-px w-[108px] bg-[linear-gradient(90deg,rgba(231,234,251,0)_0%,rgba(217,222,248,0.96)_50%,rgba(231,234,251,0)_100%)] sm:mt-8 sm:w-[132px] lg:mt-8 lg:w-[122px]" />

              {/* Bouton */}
              <div className="mt-9 sm:mt-10 lg:mt-9">
                <Link
                  href="/home"
                  className={`
                    ${serif.className}
                    group relative inline-flex min-w-[190px] items-center justify-center overflow-hidden rounded-[20px]
                    border border-[#dce2f7]
                    bg-[linear-gradient(180deg,#ffffff_0%,#f3f4fb_100%)]
                    px-8 py-3.5 text-[clamp(1.8rem,6.2vw,2.2rem)] font-medium leading-none tracking-[-0.03em] text-[#20335f]
                    shadow-[0_22px_44px_rgba(15,23,42,0.05),0_10px_22px_rgba(15,23,42,0.025),inset_0_1px_0_rgba(255,255,255,1)]
                    transition-all duration-500
                    hover:-translate-y-[2px]
                    hover:shadow-[0_28px_50px_rgba(15,23,42,0.065),0_12px_24px_rgba(15,23,42,0.03),inset_0_1px_0_rgba(255,255,255,1)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cad3eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fb]
                    sm:min-w-[210px] sm:px-10 sm:py-4
                    lg:min-w-[212px] lg:text-[2.1rem]
                  `}
                >
                  <span className="absolute inset-[1px] rounded-[19px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.24)_100%)] opacity-95" />
                  <span className="absolute -bottom-4 left-1/2 h-7 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(145,156,194,0.12)] blur-xl transition-all duration-500 group-hover:w-[76%]" />
                  <span className="relative z-10">Entrer</span>
                </Link>
              </div>

              {/* Baseline */}
              <div className="mt-14 w-full sm:mt-16 lg:mt-16">
                <p
                  className={`
                    ${serif.className}
                    mx-auto max-w-[340px] text-balance text-[1.02rem] leading-[1.72] tracking-[-0.015em] text-[#5a6d96]
                    sm:max-w-[520px] sm:text-[1.12rem] sm:leading-[1.86]
                    lg:max-w-[700px] lg:text-[1.16rem] lg:leading-[1.92]
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
