# arnaudcrestey.com

Site premium conçu avec **Next.js 15**, **TypeScript** et **Tailwind CSS**.

## Où mettre votre photo

Ajoutez votre portrait ici :

- `public/arnaud-crestey-photo.png`

Si le fichier n’existe pas encore, un placeholder élégant s’affiche automatiquement.

## Où mettre les miniatures des projets

Placez vos visuels dans `public/projects/` avec ces noms :

- `cabinet-astrae.jpg`
- `love-scan.jpg`
- `personality-scan.jpg`
- `life-decision.jpg`
- `blocages-de-vie.jpg`
- `miroir-intuition.jpg`
- `procoach.jpg`

Si une image manque, la carte conserve sa mise en page avec un fallback visuel propre.

## Où changer les textes et les liens

La majorité des contenus éditoriaux et des liens de navigation sont centralisés dans :

- `data/site.ts`

Les grandes sections des pages sont dans :

- `app/page.tsx`
- `app/concepts/page.tsx`
- `app/cabinet-astrae/page.tsx`
- `app/diagnostics-automatisations/page.tsx`
- `app/a-propos/page.tsx`
- `app/contact/page.tsx`

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm run start
```
