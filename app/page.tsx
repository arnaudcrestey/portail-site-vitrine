import { DeviceCard } from '@/components/cards';
import { HomeHero } from '@/components/hero';
import { Surface } from '@/components/ui';
import { deviceExamples } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-spacing pt-4 pb-6">
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-[36px] border border-primary/10 bg-gradient-to-br from-white to-primary/5 px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
            <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl opacity-70" />

            <div className="relative max-w-3xl">
              <span className="section-eyebrow">Constat</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Votre expertise est là. Mais aujourd’hui, elle ne donne pas encore toute sa valeur.
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                Mon travail consiste à structurer cette expertise pour en faire un dispositif
                lisible, engageant et capable de déclencher une prise de contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Expertise</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Des dispositifs digitaux conçus pour attirer, guider et déclencher des prises de
                contact.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate">
                Chaque dispositif est conçu pour rendre votre message plus clair, guider vos
                visiteurs et faciliter la prise de contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 pt-2">
  <div className="container-layout">
    <div className="max-w-3xl">
      <span className="section-eyebrow">Exemples concrets</span>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Des dispositifs concrets, conçus pour attirer et convertir.
      </h2>
    </div>

    <Surface className="relative mt-8 overflow-hidden rounded-[32px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="absolute inset-0 bg-hero-radial opacity-90" />

      <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {deviceExamples.map((item) => (
          <DeviceCard key={item.title} item={item} />
        ))}
      </div>
    </Surface>
  </div>
</section>
     </>
  );
}
