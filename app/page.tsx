import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#eef0f7] text-[#1f2740] px-4">
      
      {/* Background doux */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.98)_0%,rgba(241,243,250,0.96)_50%,rgba(232,235,246,0.98)_100%)]" />

      <div className="relative z-10 w-full max-w-[700px] text-center">
        
        {/* AC */}
        <div className="font-serif text-[3.2rem] tracking-[-0.06em] text-[#1f2740] sm:text-[4.8rem] md:text-[6.5rem]">
          AC
        </div>

        {/* Domaine */}
        <div className="mt-3 font-serif text-[1.4rem] text-[#4b5e87] sm:text-[1.9rem] md:text-[2.3rem]">
          arnaudcrestey.com
        </div>

        {/* Ligne */}
        <div className="mx-auto mt-5 h-px w-14 bg-[#cfd7ea]" />

        {/* Bouton discret (clé ici) */}
        <Link
          href="/home"
          className="mt-8 inline-flex items-center justify-center rounded-[14px] border border-[#d9e1f2] bg-white/60 px-8 py-3 font-serif text-[1.2rem] text-[#1f2740] shadow-[0_6px_16px_rgba(31,39,64,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_24px_rgba(31,39,64,0.12)] sm:text-[1.35rem] md:text-[1.5rem]"
        >
          Entrer
        </Link>

        {/* Baseline */}
        <p className="mt-10 font-serif text-[0.95rem] leading-[1.7] text-[#2d426d] sm:text-[1.1rem] md:text-[1.25rem]">
          Des systèmes numériques qui attirent,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          engagent et transforment des visiteurs en clients.
        </p>

      </div>
    </main>
  );
}
