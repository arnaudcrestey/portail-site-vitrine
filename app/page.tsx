"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EntryPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef0f7] text-[#1f2740]">
      {/* Background premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.98)_0%,rgba(243,245,252,0.96)_45%,rgba(232,236,247,0.97)_75%,rgba(224,228,242,1)_100%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-[1200px]">
          
          <div className="mx-auto flex min-h-[88vh] items-center justify-center rounded-[22px] bg-white/30 backdrop-blur-[8px] shadow-[0_40px_100px_rgba(31,39,64,0.08)] ring-1 ring-white/60">
            
            <div
              className={`flex w-full max-w-[720px] flex-col items-center px-6 py-16 text-center transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* AC */}
              <div className="font-serif text-[3.6rem] tracking-[-0.06em] text-[#1f2d4d] sm:text-[5.2rem] md:text-[6.8rem] lg:text-[7.8rem]">
                AC
              </div>

              {/* Domaine */}
              <div className="mt-4 font-serif text-[1.5rem] text-[#4b5e87] sm:text-[2.1rem] md:text-[2.6rem] lg:text-[3rem]">
                arnaudcrestey.com
              </div>

              {/* Ligne */}
              <div className="mt-6 h-px w-16 bg-[#cfd7ea] sm:w-20" />

              {/* CTA ULTRA */}
              <Link
                href="/home"
                className="group relative mt-10 inline-flex items-center justify-center rounded-[18px] border border-[#d6dff1] bg-gradient-to-b from-white to-[#eef2fb] px-10 py-4 font-serif text-[1.5rem] text-[#1f2d4d] shadow-[0_12px_30px_rgba(90,110,150,0.18)] transition-all duration-300 sm:text-[1.8rem] md:text-[2rem]"
              >
                {/* Glow */}
                <span className="absolute inset-0 rounded-[18px] opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(120,140,255,0.15)_0%,transparent_70%)]" />

                {/* Texte */}
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[1px] group-active:translate-y-[1px]">
                  Entrer
                </span>

                {/* Hover lift */}
                <span className="absolute inset-0 rounded-[18px] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(90,110,150,0.28)]" />
              </Link>

              {/* Baseline */}
              <p className="mt-12 max-w-[620px] font-serif text-[1rem] leading-[1.7] text-[#2d426d] transition-opacity duration-1000 delay-300 sm:text-[1.25rem] md:text-[1.45rem]">
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
