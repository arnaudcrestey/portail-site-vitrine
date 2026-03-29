import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef0f7] text-[#1f2740]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.97)_0%,rgba(244,246,252,0.95)_42%,rgba(234,237,247,0.96)_72%,rgba(226,230,242,0.98)_100%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="w-full max-w-[1180px]">
          <div className="mx-auto flex min-h-[92vh] w-full items-center justify-center rounded-none bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.18)_100%)] shadow-[0_24px_70px_rgba(31,39,64,0.05),inset_0_1px_0_rgba(255,255,255,0.58)] ring-1 ring-white/55 sm:min-h-[90vh] sm:rounded-[20px] lg:min-h-[860px] lg:rounded-[28px]">
            <div className="flex w-full max-w-[760px] flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-20 md:px-14 lg:px-16 lg:py-24">
              <div className="font-serif text-[4.8rem] leading-none tracking-[-0.07em] text-[#24345c] sm:text-[6.4rem] md:text-[8rem] lg:text-[8.7rem]">
                AC
              </div>

              <div className="mt-4 font-serif text-[2.1rem] leading-none tracking-[-0.045em] text-[#4c5f8b] sm:mt-5 sm:text-[2.8rem] md:text-[3.55rem] lg:text-[4.2rem]">
                arnaudcrestey.com
              </div>

              <div className="mt-7 h-px w-20 bg-[#cfd7ea] sm:mt-8 sm:w-24 md:w-28" />

              <Link
                href="/home"
                className="mt-10 inline-flex min-w-[200px] items-center justify-center rounded-[22px] border border-[#d6dff1] bg-[linear-gradient(180deg,#fafcff_0%,#eef2fb_100%)] px-10 py-4 font-serif text-[1.95rem] leading-none tracking-[-0.03em] text-[#23345c] shadow-[0_16px_28px_rgba(93,108,150,0.13),0_30px_55px_rgba(173,181,209,0.18),inset_0_1px_0_rgba(255,255,255,0.98)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c8d4ee] hover:shadow-[0_20px_34px_rgba(93,108,150,0.17),0_36px_62px_rgba(173,181,209,0.22),inset_0_1px_0_rgba(255,255,255,1)] focus:outline-none focus:ring-2 focus:ring-[#cad5ef] focus:ring-offset-2 focus:ring-offset-[#eef0f7] sm:mt-12 sm:min-w-[240px] sm:px-14 sm:py-5 sm:text-[2.45rem] md:min-w-[280px] md:text-[2.9rem]"
              >
                Entrer
              </Link>

              <p className="mt-14 max-w-[720px] font-serif text-[1.24rem] leading-[1.85] tracking-[-0.01em] text-[#2d426d] sm:mt-16 sm:max-w-[620px] sm:text-[1.55rem] md:text-[1.9rem] lg:mt-20 lg:max-w-[760px] lg:text-[2.15rem]">
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
