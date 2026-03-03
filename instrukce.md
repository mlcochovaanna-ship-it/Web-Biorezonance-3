(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou, minimální velikost 16px
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Nikdy nezarovnávej text do bloku
Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
Šířku celého webu dej na 85% obrazovky
Jasné oddělení sekcí a obsahových celků
Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Dej si záležet na patičce webu
U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků
Konzistentní ikonografie (používej font awesome, ne emotikony)
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem
Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
Omezený počet barev (2-3 hlavní + neutrální)
Primární barva pro CTA (call-to-action) tlačítka
Neutrální jemné barvy pro pozadí 
Pro text #333333
Brand barvy (HEX): 
   - primární: [#70A5E3]
   - sekundární: [#C93D6F]
   - tlačítka: [jemný gradient od #70A5E3 do #C93D6F]
   - pozadí: [#ECE7DF]
   - text: [#333333]

**Fonty**
Zvol vhodný patkový nebo bezpatkový font podle obsahu webu

**Struktura**
Jednostránkový web
Položky menu:
- Biorezonance
- S čím pomáhá
- Průběh terapie
- O nás
- Ceník
- Kontakt
- Objednat se (tlačítko)

Do hlavičky vlevo nahoře přidej logo Obrazky/biorezonance-logo.jpg

**Další prvky na webu**
Vlož Google mapu do patičky - adresu najdeš níže v instrucích

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg. 

Design laď do velmi jemných barev, které se hodí k tématu. Na zbytku webu požívej moderní trendy webdesignu: jemný barevný grafient, glass efekt a jemné interaktivní prvky.

**Moderní design**
Layout: používej souměrný Bento grid 
Barvy: Jemné barevné gradienty, plynulé přechody
Prvky: Zaoblené rohy (border-radius 16-24px), jemné stíny, 3D prvky
Grafické prvky: Zařaď jemné grafické prvky evokující frekvence a harmonizaci.
Glass efekt: Skleněný efekt v pozadí karet (glassmorphism)
Animace: Mikro interakce na hover, jemné scroll animace 

**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky/ – pro Hlavní stranu (hero sekce atd.)
Obrazky/Fotogalerie - pro fotogalerii na hlavní straně

**texty**
Na webu použij tyto texty pro jednotlivé sekce / stránky. Drž se jich doslova a nic neměň ani nepřidávej. 
nebo 
/* HERO SEKCE */
H1 (ale menší písmo): Biorezonance BICOM | Prostějov, Olomouc a okolí
H2 (ale vypadá jako hlavní nadpis): Cesta k rovnováze těla
Šetrné ošetření lidí i zvířat zaměřené na příčinu potíží a celkovou rovnováhu organismu.
Bezbolestná terapie
Bez vedlejších účinků
Vhodné i pro zvířata
Podpora samoléčebných schopností
Tlačítko: Objednat se
Tlačítko: Jak terapie probíhá

Jako obrázek do hero sekce použij Obrazky/biorezonance-1.jpg

/* KOMU MŮŽEME POMOCI */
Komu můžeme pomoci?
Lidem
Když se potíže vrací, dlouho trvají nebo jejich příčina není jasná, hledáme souvislosti v organismu a podporujeme jeho přirozenou rovnováhu.
Terapie je šetrná a vhodná i pro citlivější osoby.
Každému se věnujeme individuálně a bereme v úvahu tělo jako celek.
Tlačítko: Chci řešit své potíže
Zvířatům
Zvířata reagují na terapii velmi přirozeně. Pomáháme například při alergiích, kožních potížích, trávení nebo změnách chování.
Nejčastěji pracujeme se psy, kočkami a koňmi.
Zvířata milujeme a jejich pomoc je pro nás stejně důležitá jako pomoc lidem.
Tlačítko: Chci pomoci zvířeti

/* JAK BIOREZONANCE FUNGUJE */
Jak biorezonance pracuje s tělem?
Obrazky/biorezonance-4.jpg
Biorezonance patří mezi komplementární metody. Pomocí přístroje BICOM pracujeme s frekvencemi organismu a hledáme nerovnováhy, které mohou stát za dlouhodobými potížemi.
Zjištění zátěže
Využitím rezonance vyhledáváme energetické nerovnováhy v organismu a zátěže, které na něj působí.
Harmonizace
Ve druhém kroku dochází k jejich frekvenční harmonizaci, čímž se upravuje reakce organismu.
Podpora regenerace
Tím se obnovují samoléčebné schopnosti těla a organismus se může vracet zpět do rovnováhy.
V západní Evropě se biorezonance využívá už víCe než 30 let a ne veterinární medicíně více než 15 let.
Klasická medicína je v mnoha situacích nezastupitelná. Ale při řešení dlouhodobých chronických problémů a při prevenci vykazuje biorezonance velice dobré výsledky díky nalezení skutečných příčin.

Biorezonance nenahrazuje lékařskou péči, vhodně ji doplňuje.

Citát: Nikola Tesla
„Chcete-li odhalit tajemství vesmíru, přemýšlejte v pojmech energie, frekvence a vibrace.“
Citát: Albert Einstein
„Medicínou budoucnosti bude medicína frekvencí.“

/* S ČÍM VÁM MŮŽEME POMOCI */
S čím vám můžeme pomoci?
Biorezonancí lze řešit akutní i dlouhodobé potíže a hledat jejich skutečné příčiny.
U lidí
Potíže
Alergie a intolerance
Bolesti zad, kloubů a svalů
Migrény a menstruační potíže
Trávicí potíže
Oslabená imunita
Hormonální nerovnováha
Hojení po úrazech a operacích
Kožní problémy a otoky
Závislosti (kouření, alkohol, sladké)
Možné souvislosti
Viry, bakterie a plísně
Paraziti
Těžké kovy a záření
Stres a zablokované emoce
Detoxikace organismu
Reakce po očkování
U zvířat
Nejčastěji řešíme
Alergie a svědění
Kožní potíže
Zažívání
Oslabenou imunitu
Opakované nebo chronické potíže
Změny chování a stres
Reakce na krmivo nebo prostředí
Pomáháme chápat příznaky jako signály přetížení organismu, odhalovat jeho příčiny a podporovat návrat do rovnováhy.
Protože uzdravení začíná tam, kde klasická medicína končí.

/* PRŮBĚH TERAPIE */
Jak probíhá návštěva?
Nemusíte se ničeho obávat. Stačí chuť řešit potíže do hloubky.
Domluvíme si termín a přivítáme vás v Olšanech u Prostějova, případně můžeme dorazit i za vámi domů, zejména pokud jde o zvířata. Běžně se pohybujeme v okolí Prostějova a Olomouce.
Usadíte se a vyslechneme váš příběh.

Rovnou začínáme ošetření pomocí přístroje BICOM.

Můžete si odpočinout nebo číst svou oblíbenou knihu. 
Terapie je bezbolestná a probíhá v klidu.

Obrázky pro tuto sekci jsou Obrazky/biorezonance-2.jpg a Obrazky/biorezonance-3.jpg

/* SPOKOJENÍ ČTYŘNOZÍ PARŤÁCI */
Spokojení čtyřnozí parťáci
Fotogalerie - 4 fotky
Do fotogalerie použij fotky z Obrazky/Fotogalerie/biorezonance-kocka.jpg
Obrazky/Fotogalerie/biorezonance-pes.jpg
Obrazky/Fotogalerie/biorezonance-kun-1.jpg
Obrazky/Fotogalerie/biorezonance-kun-2.jpg

/* KDO VÁS TERAPIÍ PROVEDE */
Kdo vás terapií provede?
Biorezonanci jsme začali používat po vlastních zdravotních zkušenostech a postupně se stala naší cestou, jak pomáhat lidem i zvířatům.
Karolína
Obrazky/karolina.jpg
Vystudovala zdravotnický obor a několik let pracovala v ordinaci.
K biorezonanci ji přivedly vlastní zdravotní potíže, po jejichž zlepšení se rozhodla pomáhat i ostatním.
Zvířata jsou součástí jejího života od dětství, proto se věnuje také terapii zvířat.
Petr
Obrazky/petr.jpg
Pomoc lidem vnímá jako své poslání od dětství - ať už jako hasič, tak i jako terapeut.
K potížím přistupujeme komplexně a hledáme jejich skutečné souvislosti.

/* JAK BIOREZONANCI VNÍMAT - DŮLEŽITÁ SEKCE */
Důležité upozornění
Biorezonance patří mezi doplňkové metody a nepředstavuje lékařskou diagnózu ani náhradu lékařské péče.
Jedná se o energetickou frekvenční diagnostiku a harmonizaci těla.
V případě zdravotních potíží doporučujeme poradit se s lékařem a terapeuta poté informovat o zdravotním stavu i medikaci.

/* CENÍK */
Cena terapie
Počet terapií je vždy individuální a odvíjí se od konkrétního problému.
Při první návštěvě si společně stanovíme další postup.
Vstupní terapie - cca 2 hodiny - 1 800 Kč
Součástí je i BICOM čip, který si odnášíte s sebou.
Následná terapie - cca 1,5 hodiny - 1 300 Kč
Odvykací terapie (kouření) - 1 800 Kč
Cestovné - Olomouc / Prostějov: 200 Kč
Mimo trasu: 10 Kč / km (výjezd Olšany u Prostějova)

/* FAQ */
Časté dotazy
Jak rychle mohu čekat změnu?
Každý organismus reaguje jinak. Někdy je změna patrná už po první terapii, jindy se stav upravuje postupně během několika setkání. Vždy záleží na délce a povaze potíží.
Je biorezonance vhodná i pro děti nebo citlivé osoby?
Ano, terapie je šetrná a bezbolestná, proto ji dobře snášejí i děti, senioři nebo citlivější osoby.
Musím před návštěvou něco vysadit nebo změnit?
Ne, není potřeba nic vysazovat. Naopak je vhodné pokračovat v doporučené léčbě a případné změny řešit až po domluvě.
Kdy biorezonance není vhodná?
Terapie není náhradou akutní lékařské péče. V případě náhlých nebo vážných obtíží je vždy potřeba nejprve vyhledat lékaře.

/* OBJEDNÁNÍ */
Objednejte si termín
Máte potíže, se kterými si nevíte rady? 
Možná už jste vyzkoušeli různé cesty a stále hledáte odpověď.
Ozvěte se nám a společně se na ně podíváme.
Můžete nás kontaktovat následujícími způsoby

Telefon +420 737 406 137
E-mail cestakrovnovaze.bicom@gmail.com

/* PATIČKA */
Kontakt

Telefon +420 737 406 137
E-mail cestakrovnovaze.bicom@gmail.com

Facebook odkaz
Instagram odkaz
Kde nás najdete?

Provozovatel: Petr Běhal
Olšany u Prostějova 644, 798 14 Olšany u Prostějova
IČO: 24004057

Otevírací doba: dle předchozí domluvy
Copyright © 2026 Petr Běhal. Všechna práva vyhrazena. Webdesign harmonickyweb.cz
