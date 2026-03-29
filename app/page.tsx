import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef0f7] text-[#1f2740]">
      {/* Background subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.98)_0%,rgba(243,245,252,0.96)_45%,rgba(232,236,247,0.97)_75%,rgba(224,228,242,1)_100%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-[1200px]">
          
          {/* Card */}
          <div className="mx-auto flex min-h-[88vh] items-center justify-center rounded-[22px] bg-white/30 backdrop-blur-[6px] shadow-[0_30px_80px_rgba(31,39,64,0.08)] ring-1 ring-white/60 sm:min-h-[85vh] lg:min-h-[820px]">
            
            <div className="flex w-full max-w-[720px] flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-14 lg:py-24">

              {/* AC */}
              <div className="font-serif text-[3.8rem] leading-none tracking-[-0.06em] text-[#1f2d4d] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]">
                AC
              </div>

              {/* Domaine */}
              <div className="mt-4 font-serif text-[1.6rem] tracking-[-0.03em] text-[#4b5e87] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem]">
                arnaudcrestey.com
              </div>

              {/* Séparateur */}
              <div className="mt-6 h-px w-16 bg-[#cfd7ea] sm:w-20" />

              {/* CTA */}
              <Link
                href="/home"
                className="group mt-10 inline-flex items-center justify-center rounded-[18px] border border-[#d6dff1] bg-gradient-to-b from-[#ffffff] to-[#eef2fb] px-8 py-3 font-serif text-[1.4rem] text-[#1f2d4d] shadow-[0_10px_25px_rgba(90,110,150,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(90,110,150,0.22)] sm:px-10 sm:py-4 sm:text-[1.7rem] md:text-[2rem]"
              >
                Entrer
              </Link>

              {/* Baseline */}
              <p className="mt-12 max-w-[620px] font-serif text-[1rem] leading-[1.7] text-[#2d426d] sm:text-[1.25rem] md:text-[1.45rem] lg:mt-16">
                Des systèmes numériques qui attirent,
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                engagent et transforment des visiteurs en clients.
              </p>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
