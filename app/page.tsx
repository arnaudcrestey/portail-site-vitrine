import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef0f7] text-[#1d2740]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.96)_0%,rgba(243,245,251,0.95)_44%,rgba(235,238,247,0.96)_72%,rgba(228,232,243,0.98)_100%)]" />

      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:140px_140px]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="w-full max-w-[760px]">
          <div className="mx-auto flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-12 sm:px-10 sm:py-16">
            <div className="font-serif text-[4.4rem] leading-none tracking-[-0.065em] text-[#223153] sm:text-[5.8rem] md:text-[7.4rem]">
              AC
            </div>

            <div className="mt-4 font-serif text-[2rem] leading-none tracking-[-0.04em] text-[#4f628f] sm:text-[2.55rem] md:text-[3.25rem]">
              arnaudcrestey.com
            </div>

            <div className="mt-7 h-px w-20 bg-[#cfd8ef] sm:mt-8 sm:w-24" />

            <Link
              href="/home"
              className="mt-9 inline-flex min-w-[190px] items-center justify-center rounded-[20px] border border-[#d7def1] bg-[linear-gradient(180deg,#f9fbff_0%,#eef2fb_100%)] px-10 py-4 font-serif text-[1.95rem] leading-none tracking-[-0.03em] text-[#223153] shadow-[0_16px_30px_rgba(79,98,143,0.12),0_24px_54px_rgba(120,136,176,0.14),inset_0_1px_0_rgba(255,255,255,0.96)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9d5ef] hover:shadow-[0_20px_36px_rgba(79,98,143,0.16),0_30px_60px_rgba(120,136,176,0.18),inset_0_1px_0_rgba(255,255,255,1)] focus:outline-none focus:ring-2 focus:ring-[#c5d2f0] focus:ring-offset-2 focus:ring-offset-[#eef0f7] sm:mt-11 sm:min-w-[230px] sm:px-14 sm:py-5 sm:text-[2.45rem]"
            >
              Entrer
            </Link>

            <p className="mt-14 max-w-[560px] text-center font-serif text-[1.18rem] leading-[1.8] tracking-[-0.01em] text-[#31446e] sm:mt-16 sm:text-[1.45rem] md:text-[1.75rem]">
              Des systèmes numériques qui attirent, engagent
              <br className="hidden sm:block" />
              {" "}et transforment des visiteurs en clients.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
