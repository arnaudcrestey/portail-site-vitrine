import { PageHero } from '@/components/page-hero';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'À propos',
  description:
    'Présentation d’Arnaud Crestey, de son positionnement et de sa manière de concevoir des systèmes numériques premium au service de l’humain.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une approche à la croisée de la clarté, de l’expérience et de l’utilité réelle."
        description="Cette page introduit votre posture, votre parcours et votre manière de relier finesse humaine, structuration digitale et crédibilité de marque. Elle est prête à être enrichie avec votre biographie, vos principes de travail et vos références."
        primaryCta={{ href: '/contact', label: 'Entrer en contact' }}
      />
      <section className="section-spacing pt-4">
        <div className="container-layout grid gap-6 lg:grid-cols-2">
          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Positionnement</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Concevoir des systèmes digitaux intelligents, lisibles et profonds, capables de créer à la fois compréhension, engagement et confiance.
            </p>
          </Surface>
          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Méthode</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Relier l’intuition stratégique, l’architecture front moderne et le sens du parcours utilisateur pour produire des expériences réellement utiles.
            </p>
          </Surface>
        </div>
      </section>
    </>
  );
}
