import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef0f7] text-[#1f2740]">
      {/* Fond global */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.98)_0%,rgba(245,246,251,0.96)_34%,rgba(236,239,248,0.97)_68%,rgba(230,234,245,0.99)_100%)]" />

      {/* Halo central */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.18)_36%,rgba(255,255,255,0)_68%)]" />

      {/* Brume basse */}
      <div className="absolute inset-x-0 bottom-[-8%] h-[34vh] bg-[radial-gradient(ellipse_at_center,rgba(198,206,234,0.34)_0%,rgba(220,225,243,0.14)_42%,rgba(238,241,248,0)_78%)] blur-2xl" />

      {/* Halo latéral */}
      <div className="absolute right-[-8%] top-0 h-full w-[30%] bg-[linear-gradient(270deg,rgba(206,212,232,0.2)_0%,rgba(220,225,241,0.07)_38%,rgba(255,255,255,0)_100%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Cadre desktop uniquement */}
        <div className="relative w-full max-w-[1400px]">
          <div className="mx-auto w-full max-w-[920px] lg:rounded-[34px] lg:border lg:border-white/55 lg:bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(246,248,253,0.30)_100%)] lg:px-12 lg:py-14 lg:shadow-[0_30px_90px_rgba(94,107,145,0.10),0_10px_30px_rgba(94,107,145,0.07),inset_0_1px_0_rgba(255,255,255,0.72)] lg:backdrop-blur-[2px] xl:px-16 xl:py-16">
            
            {/* léger voile interne desktop */}
            <div className="pointer-events-none absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.10)_36%,rgba(255,255,255,0)_72%)]" />

            <div className="relative mx-auto flex min-h-[78vh] max-w-[760px] flex-col items-center justify-center text-center lg:min-h-[700px]">
              {/* Monogramme */}
              <div
                className={`${serif.className} text-[#223256] text-[clamp(4.7rem,10vw,8.6rem)] font-medium leading-none tracking-[-0.075em]`}
              >
                AC
              </div>

              {/* Domaine */}
              <p
                className={`${serif.className} mt-2 text-[clamp(1.95rem,4vw,3.25rem)] font-normal leading-none tracking-[-0.03em] text-[#4b5d86]`}
              >
                arnaudcrestey.com
              </p>

              {/* Ligne */}
              <div className="mx-auto mt-8 h-px w-[120px] bg-[linear-gradient(90deg,rgba(198,207,228,0)_0%,rgba(198,207,228,0.95)_50%,rgba(198,207,228,0)_100%)] sm:mt-9 sm:w-[152px]" />

              {/* Bouton */}
              <div className="mt-10 sm:mt-12">
                <Link
                  href="/home"
                  className={`${serif.className} group relative inline-flex min-w-[220px] items-center justify-center rounded-[22px] border border-[#d7ddef] bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(244,246,252,0.88)_100%)] px-10 py-4 text-[clamp(2rem,3.2vw,2.6rem)] font-medium leading-none tracking-[-0.025em] text-[#25345b] shadow-[0_24px_46px_rgba(86,98,140,0.14),0_8px_18px_rgba(86,98,140,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-[6px] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_28px_56px_rgba(86,98,140,0.16),0_12px_24px_rgba(86,98,140,0.11),inset_0_1px_0_rgba(255,255,255,0.96)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9d2eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef0f7]`}
                >
                  <span className="absolute inset-[1px] rounded-[21px] bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_100%)] opacity-80" />
                  <span className="absolute -bottom-5 left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(142,154,193,0.24)] blur-xl transition-all duration-500 group-hover:w-[76%] group-hover:opacity-90" />
                  <span className="relative z-10">Entrer</span>
                </Link>
              </div>

              {/* Baseline */}
              <div className="mt-16 w-full sm:mt-20 md:mt-24">
                <p
                  className={`${serif.className} mx-auto max-w-[820px] text-balance text-[clamp(1.15rem,2.25vw,2rem)] leading-[1.6] tracking-[-0.015em] text-[#2b3d66]/95`}
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
