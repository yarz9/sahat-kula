# Sahat Kula Dobrinja — website

Premium statički web prezentacijski sajt za caffe, pizzeriu i restoran **Sahat Kula** na Bulevaru branilaca Dobrinje (Sarajevo).

## Stack

Statički HTML / CSS / vanilla JS. Bez build alata, bez frameworka, bez dependency-ja. Pokreće se bilo gdje gdje možeš servirati statičke fajlove (Netlify, Vercel, GitHub Pages, klasični shared hosting).

## Struktura

```
sahat-kula/
├── index.html                  glavna stranica
├── favicon.svg                 brand mark (SVG favicon)
├── robots.txt                  SEO crawler pravila
├── sitemap.xml                 SEO sitemap
├── README.md                   ovaj fajl
└── assets/
    ├── og-image.svg            social share image (treba rasterizovati u JPG)
    ├── css/
    │   └── styles.css          sav stil
    ├── js/
    │   └── main.js             sav script (sat, theme, tabs, reveal)
    └── images/
        ├── README.md           brief za fotografa — koje slike trebaju
        └── (slike — vidi assets/images/README.md)
```

## Kako pokrenuti lokalno

Najjednostavnije:

```bash
# bilo koji statički server
python3 -m http.server 8000
# ili
npx serve .
```

Ili samo otvori `index.html` direktno u browseru — radi.

## Šta još treba uraditi prije produkcije

1. **Stvarne fotografije restorana** — vidi `assets/images/README.md` za kompletan brief. Trenutno koristimo Unsplash placeholder slike preko CDN-a.
2. **Rasterizovati `og-image.svg` u `og-image.jpg`** (1200×630) — Facebook/WhatsApp/iMessage ne podržavaju SVG za open graph slike. Otvori SVG u browseru, screenshot, ili koristi alat poput [CloudConvert](https://cloudconvert.com/svg-to-jpg).
3. **Dodati pravi telefonski broj i email** u `index.html` (trenutno `+387 33 000 000` i `hello@sahatkula.ba` su placeholderi).
4. **Domena** — `sitemap.xml` i `robots.txt` referenciraju `sahatkula.ba`. Promijeniti ako se kupuje druga.
5. **Google Maps embed** ili pin u `Otvori u kartama` linku — trenutno generički query.
6. **Dodati Google Analytics / Plausible** u `<head>` ako se prati posjećenost.
7. **Open Graph i Twitter meta tagovi** — već su postavljeni u `<head>`, samo dopuniti URL-ove kad se zna domena.

## Performance

- Slike: lazy-loaded (`loading="lazy"` na svim `<img>`)
- Fontovi: Google Fonts s `display=swap` da spriječi FOIT
- CSS: ~22 KB nepakovan, jedan fajl, ide sa `defer`
- JS: ~3 KB, jedan fajl, ide sa `defer`

## Brand & dizajn

- **Tipografija:** Fraunces (serif display) + Inter (sans body) + DM Mono (cijene/labeli)
- **Paleta:** cream / brass / olive / espresso / charcoal / ember
- **Logo:** inline SVG (vidi `<header>` u `index.html`) — clock tower s lukom i prozorima
- **Tone:** topao komšijski premium, anti-folklor, anti-startup

## Browser podrška

- Chrome/Edge/Safari/Firefox: zadnje 2 verzije ✅
- iOS Safari: 14+ ✅
- IE11: ne podržava se (koristi `color-mix`, `:has`, `aspect-ratio`)

## License

© Sahat Kula Dobrinja. Sva prava zadržana.
