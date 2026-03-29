import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#edf0f7] text-[#1f2740]">
      {/* Fond général */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.985)_0%,rgba(246,247,251,0.965)_34%,rgba(236,239,247,0.975)_68%,rgba(229,233,244,0.995)_100%)]" />

      {/* Halo central doux */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0.18)_38%,rgba(255,255,255,0)_72%)]" />

      {/* Brume basse */}
      <div className="absolute inset-x-0 bottom-[-10%] h-[34vh] bg-[radial-gradient(ellipse_at_center,rgba(196,204,230,0.34)_0%,rgba(220,226,242,0.16)_44%,rgba(237,240,247,0)_78%)] blur-3xl" />

      {/* Halo latéraux subtils */}
      <div className="absolute left-[-10%] top-0 h-full w-[24%] bg-[linear-gradient(90deg,rgba(207,213,232,0.18)_0%,rgba(235,239,247,0.06)_45%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute right-[-10%] top-0 h-full w-[24%] bg-[linear-gradient(270deg,rgba(207,213,232,0.18)_0%,rgba(235,239,247,0.06)_45%,rgba(255,255,255,0)_100%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="relative w-full max-w-[1560px]">
          {/* Cadre premium desktop */}
          <div className="relative mx-auto w-full max-w-[1020px] lg:rounded-[38px] lg:border lg:border-white/60 lg:bg-[linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(247,249,253,0.28)_100%)] lg:px-16 lg:py-16 lg:shadow-[0_42px_120px_rgba(82,96,138,0.11),0_18px_38px_rgba(82,96,138,0.07),inset_0_1px_0_rgba(255,255,255,0.78)] lg:backdrop-blur-[3px] xl:max-w-[1080px] xl:px-20 xl:py-20">
            
            {/* voile interne haut */}
            <div className="pointer-events-none absolute inset-0 hidden rounded-[38px] lg:block lg:bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.12)_38%,rgba(255,255,255,0)_74%)]" />

            {/* reflet très subtil côté haut gauche */}
            <div className="pointer-events-none absolute left-[7%] top-[5%] hidden h-[18%] w-[26%] rounded-full bg-white/20 blur-3xl lg:block" />

            {/* ombre portée du panneau */}
            <div className="pointer-events-none absolute inset-x-[8%] bottom-[-5%] hidden h-16 rounded-full bg-[rgba(114,126,164,0.16)] blur-3xl lg:block" />

            <div className="relative mx-auto flex min-h-[78vh] max-w-[760px] flex-col items-center justify-center text-center lg:min-h-[720px]">
              {/* Monogramme */}
              <div
                className={`${serif.className} text-[#22345b] text-[clamp(4.6rem,10vw,8.8rem)] font-medium leading-none tracking-[-0.082em]`}
              >
                AC
              </div>

              {/* Domaine */}
              <p
                className={`${serif.className} mt-2 text-[clamp(1.95rem,4vw,3.18rem)] font-normal leading-none tracking-[-0.032em] text-[#4c5f89]`}
              >
                arnaudcrestey.com
              </p>

              {/* Ligne */}
              <div className="mx-auto mt-8 h-px w-[126px] bg-[linear-gradient(90deg,rgba(200,208,226,0)_0%,rgba(200,208,226,0.95)_50%,rgba(200,208,226,0)_100%)] sm:mt-9 sm:w-[156px]" />

              {/* Bouton premium */}
              <div className="mt-10 sm:mt-12">
                <Link
                  href="/home"
                  className={`${serif.className} group relative inline-flex min-w-[228px] items-center justify-center rounded-[24px] border border-[#d8deee] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(244,246,252,0.9)_100%)] px-10 py-4 text-[clamp(2rem,3vw,2.55rem)] font-medium leading-none tracking-[-0.028em] text-[#25365c] shadow-[0_26px_52px_rgba(86,98,140,0.14),0_10px_22px_rgba(86,98,140,0.08),inset_0_1px_0_rgba(255,255,255,0.96)] backdrop-blur-[6px] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_34px_64px_rgba(86,98,140,0.16),0_14px_28px_rgba(86,98,140,0.10),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cad3eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef0f7]`}
                >
                  <span className="absolute inset-[1px] rounded-[23px] bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.16)_100%)] opacity-90" />
                  <span className="absolute -bottom-5 left-1/2 h-8 w-[74%] -translate-x-1/2 rounded-full bg-[rgba(145,156,194,0.22)] blur-xl transition-all duration-500 group-hover:w-[78%] group-hover:opacity-90" />
                  <span className="relative z-10">Entrer</span>
                </Link>
              </div>

              {/* Baseline */}
              <div className="mt-16 w-full sm:mt-20 md:mt-24">
                <p
                  className={`${serif.className} mx-auto max-w-[860px] text-balance text-[clamp(1.12rem,2.15vw,1.95rem)] leading-[1.68] tracking-[-0.015em] text-[#2a3d66]/95`}
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
