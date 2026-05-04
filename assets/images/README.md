# Slike — brief za fotografa / klijenta

Sajt trenutno koristi **Unsplash placeholder slike** preko CDN-a (vidi `index.html` i `assets/css/styles.css`). Za produkciju i klijentsku prezentaciju, **stvarne fotografije restorana su mnogo jači prodajni argument** od stock pizze.

Ovaj folder je pripremljen tako da svaka slika ima fiksno ime fajla. Kad dobiješ fotke, samo ih ubaci pod istim imenom — sajt automatski preuzima.

## Tehničke specifikacije

| Parametar | Vrijednost |
|---|---|
| Format | `.jpg` (ili `.webp` ako je sve podržano) |
| Kompresija | 80–85 kvalitet, mozjpeg/squoosh |
| Color space | sRGB |
| Dugačka strana | min 1600px, max 2400px |
| Težina po fajlu | ciljaj < 250 KB |
| Stil | topao, prirodan svjetlo, ne preeksponirano, ne presivo |

## Lista fajlova koje treba dostaviti

| Fajl | Gdje se koristi | Format / odnos | Brief |
|---|---|---|---|
| `hero.jpg` | hero pozadina (full-bleed) | 16:9, 2200×1238 | **Najvažnija slika.** Atmosferski wide shot — interijer u večernjem svjetlu, ili stol u prvom planu s pizzom/jelom u fokusu i komšijskim background-om iza. Treba da diše, ostavlja prostora za naslov u gornjoj polovini. Topao ton, ne studio. |
| `cat-dorucak.jpg` | kategorija "Doručak" | 4:5, 1200×1500 | Doručak postavljen — kafa + uštipci + kajmak, ili omlet specijal. Top-down ili 45°. |
| `cat-pizza.jpg` | kategorija "Pizza" | 16:11, 1600×1100 | Pizza iz peći — Special Sahat Kula ili Capricciosa, blizu, sa malo dima/topline. |
| `cat-glavna.jpg` | kategorija "Glavna jela" | 1:1.1, 1100×1210 | Piletina u sosu od gljiva ili ramstek — tanjir + prilog. |
| `cat-paste.jpg` | kategorija "Paste i rižota" | 1:1.1, 1100×1210 | Carbonara s parmezanom, vilica koja podiže pastu — pokret. |
| `cat-deserti.jpg` | kategorija "Deserti" | 1:1.1, 1100×1210 | Trileće, palačinka s Nutellom, ili šampita — blizu. |
| `sig-pizza-special.jpg` | signature card #1 (najveća) | 16:10, 1600×1000 | Hero pizza shot — Special Sahat Kula sa sastojcima vidljivim. |
| `sig-omlet.jpg` | signature card #2 | 4:5, 900×1125 | Omlet specijal — vertikalni kadr, hljeb sa strane. |
| `sig-ustipci.jpg` | signature card #3 | 4:3, 900×675 | Uštipci sa kajmakom i suhim mesom — top-down. |
| `sig-piletina-gljive.jpg` | signature card #4 | 4:3, 900×675 | Piletina u sosu od gljiva — tanjir centrirano. |
| `sig-carbonara.jpg` | signature card #5 | 4:3, 900×675 | Carbonara — žuto/krem ton, parmezan. |
| `sig-trilece.jpg` | signature card #6 | 16:9, 1200×675 | Trileće — bočno, sloj karamela vidljiv. |
| `sig-palacinka.jpg` | signature card #7 | 16:9, 1200×675 | Palačinka s Nutellom i orasima — topla, presjek. |
| `story-1.jpg` | story sekcija, glavna slika | 4:3, 1200×900 | Interijer restorana — stol u prvom planu, drvo, topli ton. Ljudi opcionalno (samo ruke ili siluete). |
| `story-2.jpg` | story sekcija, mala slika | 4:3, 900×675 | Detalj — kafa na terasi, ili ruke koje serviraju. |
| `atmo-bg.jpg` | atmosfera, full-bleed pozadina | 16:9, 2200×1238 | Večernji shot — terasa u sumrak, ili interijer s upaljenim svjetlima. Mora biti tamna, da preko nje radi crni overlay. |
| `atmo-1.jpg` | atmosfera mosaic, glavna | 1:1, 1100×1100 | Wide unutrašnjost. |
| `atmo-2.jpg` | atmosfera mosaic, dolje desno | 1:1, 1100×1100 | Terasa navečer. |
| `atmo-3.jpg` | atmosfera mosaic, mala | 1:1, 900×900 | Detalj postavljenog stola — sa svijećom, kruhom, ili kafom. |

**Ukupno: 19 fotografija.**

## Trenutni status

Sve slike trenutno se učitavaju sa Unsplash CDN-a (vidi `assets/css/styles.css` — `--bg` u `.cat::before` selektorima i `.hero::before` / `.atmo::before`, te `<img src>` u `index.html` za story/atmo/signatures).

Kad dobiješ stvarne slike i ubaciš ih u ovaj folder pod imenima iz tabele iznad — **putanje su već ispravno postavljene u CSS-u i `index.html`**, samo trebaš da zamijeniš Unsplash linkove u `<img src="...">` atributima sa lokalnim putanjama (`assets/images/sig-pizza-special.jpg`, itd).

## Upute za fotografa (na lokaciji)

1. **Snimanje u "magic hour"** — sat vremena nakon zalaska sunca, kad se vani plavi a unutra topli ton, daje dramatičan kontrast za atmo i hero shot.
2. **Hrana se snima dok je topla i sveža.** Para nad pizzom = život na slici.
3. **Bez bljeska.** Koristi prirodno svjetlo + reflektor (bijeli karton).
4. **Tanjir → 45° kut + top-down.** Snimi obje verzije svakog jela, biramo kasnije.
5. **Detalji prodaju.** Kapljica sosa, mrvice, posrkana kašika — to su slike koje ljudi pamte.
6. **Konzistentan tone** — svi tanjiri na istom drvenom stolu / istoj podlozi za vizuelni kontinuitet.
