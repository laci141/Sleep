# Alvás 2026

**Élő oldal: https://sleep-5dc.pages.dev/**

English version: [README.md](README.md)

## Mi ez

Interaktív alvástudományi magyarázó oldal 4 nyelven (hu, en, de, ro). Az oldal címe „Alvás 2026”, és egy elmetérképről nyílnak a szekciói:

- Elmetérkép
- Alvásciklus
- Cirkadián ritmus
- Agytisztítás
- Miért fontos
- Jobb alvás
- Esti relaxáció
- Tea, étel, vitamin

## Mi van benne

- Animált hipnogram egy éjszaka alvásszakaszairól
- Szimulált EEG-hullámok, választható időablakkal
- Cirkadián görbék (melatonin és kortizol) húzható idő-kurzorral
- Animált glimfatikus „agytisztítás” modell vásznon, ébren / alvás kapcsolóval
- Bizonyítékszint-jelvények és forráslista, amely megmutatja, mit vizsgált az adott forrás, és mennyire erős a bizonyíték
- 4-7-8 légzés, progresszív izomlazítás és testpásztázás
- Élőben generált háttérhang (barna zaj, eső, mély zúgás, hullámok) hangerő-szabályzókkal és elalvás-időzítővel

## Őszinte megjegyzések

- Az animációk szemléltető modellek, nem mérések. Az oldal ezt ki is írja („Szemléltető modell”).
- Az oldal ismeretterjesztő tartalom, nem orvosi tanács.

## Futtatás helyben

Nyisd meg az `index.html` fájlt egy böngészőben (`file://` alól is működik), vagy szolgáld ki a mappát bármilyen statikus szerverrel. Nincs build lépés és nincs npm.

## Technika

- Egyetlen statikus oldal, vanilla JavaScript
- SVG és Canvas a diagramokhoz és animációkhoz
- Web Audio API a háttérhanghoz
- Nyelvi fájlok a `lang/` mappában
- A Google Fonts az egyetlen külső kérés
- Statikus oldalként a Cloudflare Pages szolgálja ki (az élő cím pages.dev cím)

## Projektfelépítés

```
index.html        az oldal (felépítés, stílusok, szkriptek)
lang/             hu.js, en.js, de.js, ro.js
README.md         angol leírás
README.hu.md      ez a fájl
LICENSE           MIT licenc
```

## Licenc

MIT, lásd [LICENSE](LICENSE).
