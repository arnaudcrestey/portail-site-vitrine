import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef0f7] text-[#1f2740]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.96)_0%,rgba(244,245,251,0.95)_42%,rgba(233,236,246,0.96)_72%,rgba(225,229,242,0.98)_100%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="w-full max-w-[900px]">
          <div className="mx-auto flex min-h-[720px] w-full flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.18)_100%)] px-6 py-14 shadow-[0_24px_80px_rgba(31,39,64,0.07),inset_0_1px_0_rgba(255,255,255,0.62)] ring-1 ring-white/50 backdrop-blur-[2px] sm:px-10 sm:py-16 md:min-h-[820px] md:px-14">
            <div className="font-serif text-[5rem] leading-none tracking-[-0.06em] text-[#223153] sm:text-[6.8rem] md:text-[8.6rem]">
              AC
            </div>

            <div className="mt-5 font-serif text-[2rem] leading-none tracking-[-0.03em] text-[#4b5b82] sm:text-[2.8rem] md:text-[3.8rem]">
              arnaudcrestey.com
            </div>

            <div className="mt-8 h-px w-24 bg-[#cfd5e4] sm:mt-10 sm:w-32" />

            <Link
              href="/home"
              className="mt-10 inline-flex min-w-[220px] items-center justify-center rounded-[22px] border border-[#d8dff0] bg-[linear-gradient(180deg,#fbfcff_0%,#eef1fa_100%)] px-10 py-5 font-serif text-[2.15rem] leading-none tracking-[-0.02em] text-[#223153] shadow-[0_18px_34px_rgba(108,120,164,0.18),0_28px_54px_rgba(170,177,210,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(108,120,164,0.2),0_34px_60px_rgba(170,177,210,0.22),inset_0_1px_0_rgba(255,255,255,1)] focus:outline-none focus:ring-2 focus:ring-[#c9d3ee] focus:ring-offset-2 focus:ring-offset-[#eef0f7] sm:mt-12 sm:min-w-[280px] sm:px-14 sm:py-6 sm:text-[2.9rem]"
            >
              Entrer
            </Link>

            <p className="mt-16 max-w-[760px] text-center font-serif text-[1.4rem] leading-[1.7] tracking-[-0.01em] text-[#25365e] sm:mt-20 sm:text-[1.9rem] md:text-[2.25rem]">
              Des systèmes numériques qui attirent,
              <br />
              engagent et transforment des visiteurs en clients.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
