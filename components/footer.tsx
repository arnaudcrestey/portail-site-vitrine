import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="min-h-screen bg-[#eef0f7] flex items-center justify-center px-4">
      
      <div className="w-full max-w-[1200px]">
        
        {/* CARD IDENTIQUE À TON HERO */}
        <div className="rounded-[28px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.35)_100%)] backdrop-blur-md px-6 py-20 shadow-[0_30px_80px_rgba(15,23,42,0.06)] sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          
          <div className="mx-auto max-w-[760px] text-center">
            
            {/* AC */}
            <div className="font-[var(--font-lora)] text-[3.5rem] tracking-[-0.05em] text-[#1f2740] sm:text-[5rem] md:text-[6.5rem]">
              AC
            </div>

            {/* Domaine */}
            <div className="mt-4 font-[var(--font-lora)] text-[1.5rem] text-[#4c5f8b] sm:text-[2rem] md:text-[2.4rem]">
              arnaudcrestey.com
            </div>

            {/* Ligne */}
            <div className="mx-auto mt-6 h-px w-16 bg-[#d8e0f2]" />

            {/* Bouton (aligné avec ton style actuel) */}
            <Link
              href="/home"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2f5bd3] to-[#3f6ee8] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(63,110,232,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(63,110,232,0.45)] sm:px-8 sm:py-4 sm:text-base"
            >
              Entrer
            </Link>

            {/* Baseline */}
            <p className="mt-12 text-[1rem] leading-[1.7] text-[#5c6f92] sm:text-[1.15rem] md:text-[1.25rem]">
              Des systèmes numériques qui attirent,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              engagent et transforment des visiteurs en clients.
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}
