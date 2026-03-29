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
      <style jsx global>{`
        @keyframes entryFade {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.992);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floatHalo {
          0%,
          100% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.92;
            transform: translateX(-50%) scale(1.04);
          }
        }

        @keyframes softLift {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Fond extérieur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.98)_0%,rgba(245,247,251,0.98)_42%,rgba(238,241,250,1)_100%)]" />

      {/* halos latéraux */}
      <div className="absolute left-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(90deg,rgba(223,228,241,0.42)_0%,rgba(245,247,251,0)_100%)]" />
      <div className="absolute right-[-8%] top-0 h-full w-[20%] bg-[linear-gradient(270deg,rgba(223,228,241,0.42)_0%,rgba(245,247,251,0)_100%)]" />

      {/* brume basse */}
      <div className="absolute inset-x-0 bottom-[-10%] h-[28vh] bg-[radial-gradient(ellipse_at_center,rgba(220,225,241,0.34)_0%,rgba(245,247,251,0)_74%)] blur-3xl" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="w-full max-w-[1500px]">
          <div
            className="relative mx-auto w-full max-w-[860px] lg:rounded-[34px] lg:border lg:border-white/75 lg:px-12 lg:py-12 lg:shadow-[0_28px_80px_rgba(95,108,145,0.10),0_10px_28px_rgba(95,108,145,0.06),inset_0_1px_0_rgba(255,255,255,0.88)] xl:max-w-[900px] xl:px-14 xl:py-14"
            style={{ animation: "entryFade 900ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
          >
            {/* intérieur du cadre */}
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[linear-gradient(135deg,#eceafe_0%,#ffffff_38%,#eaeefe_100%)]" />
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(circle_at_32%_20%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.35)_35%,rgba(255,255,255,0)_70%)]" />
            <div className="absolute inset-0 hidden rounded-[34px] lg:block lg:bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,243,254,0.95)_0%,rgba(245,243,254,0.35)_28%,rgba(255,255,255,0)_70%)]" />

            {/* reflet supérieur */}
            <div className="pointer-events-none absolute left-[9%] top-[6%] hidden h-[16%] w-[24%] rounded-full bg-white/30 blur-3xl lg:block" />

            {/* ombre sous panneau */}
            <div className="pointer-events-none absolute inset-x-[10%] bottom-[-5%] hidden h-14 rounded-full bg-[rgba(120,132,170,0.14)] blur-3xl lg:block" />

            <div className="relative mx-auto flex min-h-[78vh] max-w-[650px] flex-col items-center justify-center text-center lg:min-h-[560px]">
              {/* Monogramme */}
              <div
                className={`${serif.className} text-[#1f315a] text-[clamp(4.2rem,9vw,7.4rem)] font-medium leading-none tracking-[-0.08em]`}
                style={{ animation: "softLift 850ms ease-out 120ms both" }}
              >
                AC
              </div>

              {/* Domaine */}
              <p
                className={`${serif.className} mt-2 text-[clamp(1.75rem,3.6vw,2.95rem)] font-normal leading-none tracking-[-0.03em] text-[#556b96]`}
                style={{ animation: "softLift 850ms ease-out 220ms both" }}
              >
                arnaudcrestey.com
              </p>

              {/* Ligne */}
              <div
                className="mx-auto mt-7 h-px w-[118px] bg-[linear-gradient(90deg,rgba(209,214,229,0)_0%,rgba(209,214,229,0.95)_50%,rgba(209,214,229,0)_100%)] sm:mt-8 sm:w-[148px]"
                style={{ animation: "softLift 850ms ease-out 300ms both" }}
              />

              {/* Bouton */}
              <div
                className="mt-9 sm:mt-10"
                style={{ animation: "softLift 850ms ease-out 380ms both" }}
              >
                <Link
                  href="/home"
                  className={`${serif.className} group relative inline-flex min-w-[220px] items-center justify-center rounded-[22px] border border-[#d6dcef] bg-[linear-gradient(180deg,#ffffff_0%,#eef2fa_100%)] px-10 py-4 text-[clamp(1.9rem,2.8vw,2.35rem)] font-medium leading-none tracking-[-0.028em] text-[#243765] shadow-[0_18px_36px_rgba(101,114,153,0.12),0_8px_18px_rgba(101,114,153,0.06),inset_0_1px_0_rgba(255,255,255,0.98)] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_24px_44px_rgba(101,114,153,0.14),0_12px_22px_rgba(101,114,153,0.08),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cad3eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fb]`}
                >
                  <span className="absolute inset-[1px] rounded-[21px] bg-[linear-gradient(180deg,rgba(255,255,255,0.66)_0%,rgba(255,255,255,0.18)_100%)] opacity-90" />
                  <span
                    className="absolute -bottom-4 left-1/2 h-7 w-[72%] rounded-full bg-[rgba(145,156,194,0.18)] blur-xl transition-all duration-500 group-hover:w-[76%]"
                    style={{ animation: "floatHalo 4.2s ease-in-out infinite" }}
                  />
                  <span className="relative z-10">Entrer</span>
                </Link>
              </div>

              {/* Baseline */}
              <div
                className="mt-14 w-full sm:mt-16 md:mt-20"
                style={{ animation: "softLift 850ms ease-out 500ms both" }}
              >
                <p
                  className={`${serif.className} mx-auto max-w-[760px] text-balance text-[clamp(1.02rem,1.85vw,1.6rem)] leading-[1.72] tracking-[-0.012em] text-[#4f638f]/90`}
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
