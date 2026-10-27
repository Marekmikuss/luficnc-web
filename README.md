# LuFi CNC

Moderní vícestránkový český web pro CNC obrábění a zakázkovou výrobu v Kopřivnici.

## Spuštění

Vyžaduje Node.js 20 nebo novější. Bez externích JavaScriptových závislostí.

```
node build.mjs
node check.mjs
node server.mjs
```

Lokální náhled: http://localhost:4173

## Stránky

Úvod, Služby, Strojní park, Naše práce, O nás, Kontakt. Stránky se generují jako samostatné HTML soubory. Fungují i bez JavaScriptu; JavaScript přidává mobilní menu, filtry galerie a zvětšení fotografií.

## Nasazení

Vercel: Framework Preset **Other**, Build Command `node build.mjs`, Output Directory `dist`. Konfigurace je ve `vercel.json`. Po propojení s GitHubem se změny větve `main` nasazují automaticky.

## Obsah a fotografie

Podklady převzaty z https://www.luficnc.cz/ dne 27. 10. 2026. Ověřen seznam publikovaných stránek přes WordPress REST API: původní web obsahuje jednu stránku se sekcemi O nás, Naše stroje, Naše práce a Kontakty. Všechny obchodní kontakty a parametry strojů vycházejí z této stránky. Fotografie `photo-*.jpg` pocházejí z původního webu a jsou optimalizovány pro web. Nejsou použity fiktivní reference nebo tvrzení o certifikaci firmy.

Kontaktní tlačítka používají e-mail a telefon. Web neposílá poptávky automaticky a neukládá osobní údaje. Mapy se otevírají až po kliknutí. Font Manrope se načítá z Google Fonts, s lokálním systémovým fallbackem.

