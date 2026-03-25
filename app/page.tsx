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
          <div className="relative overflow-hidden rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
            <div className="relative max-w-3xl">
              <span className="section-eyebrow">Constat</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Votre expertise existe déjà. Mais elle ne travaille pas encore pour vous.
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                Mon travail consiste à structurer cette expertise pour la rendre lisible, visible et capable de créer un mouvement naturel vers vous.
              </p>
            </div>
          </div>
        </div>
      </section>      

      <section className="pb-8 pt-2">
        <div className="container-layout">
          <div className="mx-auto flex max-w-6xl flex-col items-center">
            <div className="max-w-3xl text-center">
              <span className="section-eyebrow">Exemples concrets</span>

             <h2 className="...">
  Des dispositifs concrets,<br />
  pensés pour générer des résultats.
</h2>
            </div>

            <Surface className="relative mt-8 w-full overflow-hidden rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
              <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {deviceExamples.map((item) => (
                  <DeviceCard key={item.title} item={item} />
                ))}
              </div>
            </Surface>
          </div>
        </div>
      </section>
    </>
  );
}
