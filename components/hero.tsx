<dl className="mt-6 grid overflow-hidden rounded-[26px] border border-[#d9def8] bg-[linear-gradient(180deg,rgba(247,248,254,0.96)_0%,rgba(243,245,252,0.98)_100%)] shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:grid-cols-3">
  {[
    [
      siteMetrics.visitors30d.toLocaleString('fr-FR'),
      'Visiteurs',
      'sur les 30 derniers jours',
    ],
    [
      siteMetrics.leadsGenerated.toLocaleString('fr-FR'),
      'Prises de contact',
      'générées',
    ],
    [
      siteMetrics.activeEntryPoints.toLocaleString('fr-FR'),
      'Points d’entrée',
      'actifs',
    ],
  ].map(([value, label, detail], index) => (
    <div
      key={label}
      className={`px-5 py-5 sm:px-6 sm:py-6 ${
        index < 2 ? 'border-b border-[#e6eafb] sm:border-b-0 sm:border-r' : ''
      }`}
    >
      <dt className="text-[1.55rem] font-semibold leading-none tracking-tight text-[#20335f] sm:text-[1.7rem]">
        {value}
      </dt>
      <dd className="mt-2 text-[13px] leading-5 text-slate sm:text-sm sm:leading-6">
        <span className="block font-medium text-[#31456f]">{label}</span>
        <span className="block text-slate/80">{detail}</span>
      </dd>
    </div>
  ))}
</dl>
