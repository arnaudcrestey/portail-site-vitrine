"use client";

import { usePathname } from "next/navigation";

// Remplace ces imports par les tiens
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEntryPage = pathname === "/";

  return (
    <>
      {!isEntryPage && <SiteHeader />}
      {children}
      {!isEntryPage && <SiteFooter />}
    </>
  );
}
