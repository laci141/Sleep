/* Magyar — forrásnyelv. A többi nyelv ennek a kulcsszerkezetét másolja. */
window.LANGS = window.LANGS || {};
window.LANGS.hu = {
code:'hu', label:'HU', name:'Magyar', htmlLang:'hu', ttsLang:'hu-HU',

ui:{
  title:'Alvás 2026',
  brandMark:'Az éjszaka műszakja',
  brandSub:'alvás · ritmus · pihenés',
  menuAria:'Fő menü',
  menuOpen:'Menü megnyitása',
  menuClose:'Menü bezárása',
  menuLabel:'Menü',
  langAria:'Nyelvválasztó',
  langLabel:'Nyelv',
  footer:'ALVÁS 2026',

  mapEyebrow:'Elmetérkép',
  mapH1:'Nyolc óra, amit az agyad nem alvással tölt',
  mapLead:'Amíg fekszel, az agyad ciklusokban dolgozik: rögzíti a napot, feldolgozza az érzelmeket, és kimossa magából azt a hulladékot, ami ébren felgyűlt. Közben az immunrendszer is átszervezi magát. Egy belső óra vezényli az egészet. Kattints egy ágra.',
  mapSvgAria:'Az alvás témáinak elmetérképe',

  cycEyebrow:'Alvásciklus',
  cycH2:'Egy éjszaka, ahogy a műszerek látják',
  cycLead:'Nem egyenletesen alszol. Kb. 90 perces ciklusok váltakoznak, és a REM-szakaszok hajnal felé nyúlnak meg. A mélyalvás nagy része az első felében van — ezért nem mindegy, mikor fekszel le, nem csak az, mennyit alszol.',
  cycEegEyebrow:'EEG-hullámok szemléltetése alvás közben',
  cycEegWinLab:'Kijelzett idő',
  cycEegNote:'Hosszabb ablak = lassabban csúszik a görbe. Bal oldalon a kilengés mikrovoltban, alul az idő.',
  cycPlay:'Indítás',
  cycPause:'Szünet',
  cycReset:'Vissza az elejére',
  cycSpeed:'Sebesség',
  cycSpeedAria:'Lejátszás sebessége',
  cycStepLab:'Lépésköz',
  cycStepUnit:'perc',
  cycShareEyebrow:'Az éjszaka megoszlása',
  cycHypAria:'Hipnogram',

  waveEyebrow:'Agyhullámok',
  waveH2:'Béta, alfa, théta, delta',
  waveLead:'Az EEG nem gondolatokat olvas, hanem azt méri, hogy sok millió idegsejt mennyire <em>együtt</em> tüzel. Minél többen mozognak egyszerre, annál lassabb és nagyobb a hullám. Ébren mindenki a maga dolgát végzi: sok apró, gyors rezgés. Mélyalvásban az egész kéreg együtt lélegzik: kevés, hatalmas, lassú hullám.',
  waveSvgAria:'Agyhullámtípusok',

  circEyebrow:'Cirkadián ritmus',
  circH2:'A belső óra, ami eldönti, mikor jön az álom',
  circLead:'Az agy közepén, a látóidegek kereszteződése fölött ül egy kb. 20&nbsp;000 sejtből álló óra, a <em>nucleus suprachiasmaticus</em>. A saját ciklusa nem pontosan 24 óra, hanem valamivel hosszabb, és emberenként eltér — ezért naponta újra kell állítani. Az állítógomb a fény.',
  circSvgAria:'Melatonin, kortizol, maghőmérséklet',
  circPlay:'Nap lejátszása',
  circPause:'Szünet',
  circNow:'Ugrás lefekvésre',
  circMel:'Melatonin',
  circCor:'Kortizol',
  circTmp:'Maghőmérséklet',
  circStepsH3:'Mit csinál a két hormon',

  cleanEyebrow:'Glymphatikus rendszer',
  cleanH2:'Éjszakai nagytakarítás az agyban',
  cleanLead:'Igen, jól tudod: a <strong>nyirokrendszer is része a folyamatnak</strong>. Az agyban nincsenek nyirokerek, de az agyhártyában vannak — és azok viszik le a szennyes folyadékot a nyaki nyirokcsomókba. Három útvonal, három külön szín:',
  cleanLegBlue:'<strong style="color:#5fb4ff">Kék</strong> — artéria: friss folyadék BE',
  cleanLegGreen:'<strong style="color:#4fe0a8">Zöld</strong> — véna: szennyes folyadék KI',
  cleanLegPink:'<strong style="color:#ff7fb0">Rózsa</strong> — nyirokér a nyaki csomóba',
  cleanLegDark:'<strong style="color:#e8506f">Bordó</strong> — a szemét maga',
  cleanLead2:'A modellben a pumpa szerepét a mélyalvás lassú hulláma játssza. Kapcsold át mélyalvásra, és nézd a bal alsó pulzusjelzőt: <strong>az animációban minden csúcsnál elindul egy adag bordó szemét-pixel</strong>, felkerül a zöld vénára, és onnan a rózsaszín nyirokéren jut a nyaki nyirokcsomóba. Ez a szemléltetés menete — a valódi agyban az áramlás folyamatos, és a mértékét jelenleg is kutatják.',
  cleanStateAria:'Állapot',
  cleanAwake:'Ébren',
  cleanAsleep:'Mélyalvásban',
  cleanStepsH3:'A folyamat öt lépésben',
  cleanNote:'Egy 15 fős keresztezett vizsgálatban egyetlen átvirrasztott éjszaka után reggelre megemelkedett a tau-fehérje szintje a vérplazmában (+17,2%, szemben a normál alvás utáni +1,8%-kal). A többi vizsgált markernél nem volt különbség. Kicsi, feltáró jellegű vizsgálat: azt jelzi, hogy az alvás hiánya meglátszik ezeken az értékeken, de nem méri közvetlenül az agy takarítását.',

  whyEyebrow:'Miért fontos',
  whyH2:'Mit veszítesz, ha rövidre vágod',
  whyLead:'Az alvás nem egy funkciót lát el, hanem ötöt-hatot párhuzamosan — és mindegyik más szakaszhoz kötődik.',
  immuneTag:'Immunrendszer',
  immuneH2:'Amit a vizsgálatok mérni tudtak',
  immuneLead:'Ez a legjobban dokumentált rész, mert kísérletileg vizsgálható: emberek alvását megrövidítik, aztán vért vesznek, vagy szándékosan vírust adnak nekik. Nem korrelációs megfigyelés, hanem kísérlet.',
  cancerTag:'Daganatos kockázat',
  cancerH2:'Itt kell a legpontosabban fogalmazni',
  cancerInfo:'<strong>Ha műszakban dolgozol:</strong> a műszakot nem tudod eltörölni, de a két legerősebb eszközt igen. Az egyik a <strong>fény időzítése</strong> — éjszakai műszak alatt világos munkatér, hazafelé napszemüveg, otthon sötétítő. A másik az <strong>étkezés időzítése</strong>: a nagy étkezéseket a világos szakaszra, éjjel inkább kicsit.',
  harmTag:'Ha rossz az alvás',
  harmH2:'Mi romlik el, és milyen sorrendben',
  harmWarn:'<strong>Mikor menj orvoshoz:</strong> ha horkolsz és nappal is álmos vagy (alvási apnoe gyanúja), ha hetek óta minden éjszaka rossz, ha reggel fejfájással kelsz, ha éjszaka fulladásra ébredsz, vagy ha a nappali álmosság a munkavégzést veszélyezteti. Gép mellett ez utóbbi nem apróság.',

  tipsEyebrow:'Jobb alvás',
  tipsH2:'Először a négy nagy, utána a többi',
  tipsLead:'Fontos csavar: az amerikai alvásorvos-társaság 2021-es irányelve az „alváshigiénia" tanácslistát <strong>önmagában nem ajánlja</strong>. Ami tényleg működik, az a CBT-I magja: az ingerkontroll és az alvásmegszorítás.',
  coreTag:'Erős bizonyíték',
  coreH3:'Ezzel kezdd — fontossági sorrendben',
  extraTag:'Támogató szokások',
  extraH3:'Ezek segítenek, de önmagukban kevesek',
  tipsNote:'Ez ismeretterjesztés, nem orvosi tanács. Krónikus álmatlanságra a CBT-I az elsővonalbeli kezelés, nem az altató.',

  relaxEyebrow:'Esti relaxáció',
  relaxH2:'Három gyakorlat lefekvés előtt',
  relaxIntro:'Egyszerre csak az egyiket csináld. Mindegyik ugyanazt célozza: leveszi a stresszválaszt, hogy az elalvás magától jöjjön. Ha közben elalszol, az a siker, nem a kudarc. <strong>Kapcsold be a hangot</strong>, és nem kell olvasnod — végigmondom.',
  tabBreath:'4-7-8 légzés',
  tabPmr:'Progresszív izomlazítás',
  tabScan:'Testpásztázás',
  breathIntro:'Négy másodperc belégzés orron át, hét másodperc bent tartás, nyolc másodperc lassú kifújás szájon át. A hosszú kifújás a lényeg: az lassítja le a szívverést. Négy-hat kör elég.',
  breathReady:'Készen állsz?',
  breathHint0:'— · kör 0',
  breathDone:'Kész.',
  breathRounds:'kör megvolt',
  breathRound:'kör',
  secShort:'mp',
  pmrIntro:'Lábujjtól a homlokig, izomcsoportonként: öt másodperc feszítés, aztán tíz másodperc teljes elengedés. A lényeg a különbség érzékelése a feszes és a laza között. Fekve csináld.',
  pmrIdle:'Nyomd meg az Indítást, és lépésenként végigvezetlek.',
  scanIntro:'Ugyanaz a testtérkép, csak feszítés nélkül. Odafigyelsz egy testrészre, megnézed, mit érzel ott, és továbbmész. A körbefutó fénygyűrű mutatja, hol tart a figyelem — elöl lefelé, hátul felfelé ível, ahogy egy gyűrű körbeér egy testen. Hanggal csukott szemmel is végigcsinálható.',
  scanIdle:'Válassz hosszt, és indítsd el.',
  start:'Indítás',
  stop:'Állj',
  soundOn:'Hang: be',
  soundOff:'Hang: ki',
  min5:'5 perc',
  min10:'10 perc',
  remaining:'hátralévő:',
  bodyAria:'Emberi testalak',

  dietEyebrow:'Tea, étel, vitamin',
  dietH2:'Az utolsó öt százalék',
  dietLead:'Ez a rész a relaxáció párja, de fontos a sorrend: amit itt találsz, az a <strong>finomhangolás</strong>. Ha a fix ébredés, az ingerkontroll és a reggeli fény nincs meg, akkor semmilyen tea vagy kapszula nem hozza be.',
  dietWarn:'<strong>Mielőtt bármit szedni kezdesz:</strong> ha rendszeresen szedsz gyógyszert, kérdezd meg a gyógyszerészt vagy a háziorvost. A macskagyökér és a melatonin is lép kölcsönhatásba. Terhesség és szoptatás alatt semmit orvosi jóváhagyás nélkül.',
  teaTag:'Tea és ital',
  teaH3:'Mit, mikor, miért',
  foodTag:'Étkezés',
  foodH3:'Mikor egyél, és mi a nem várt csavar',
  suppTag:'Vitaminok és kiegészítők',
  suppH3:'Bizonyíték szerinti sorrendben',
  planTag:'Napi menetrend',
  planH3:'Egy 22:30-as lefekvéshez visszaszámolva',
  sourcesEyebrow:'Források',
  modelBadge:'Szemléltető modell',
  cycEegSim:'A hullámforma programozott szimuláció, nem valódi személy EEG-felvétele. Az alakja a szakaszokra jellemző frekvenciákat követi, oktatási céllal.',
  cleanModel:'Az animáció leegyszerűsített modell, nem MRI-, mikroszkópos vagy élő agyi mérés. Egy kutatások alapján felvetett folyadékáramlási elrendezést szemléltet.',
  sourcesLead:'Minden forrásnál látod, hogy mit vizsgált, mi jött ki belőle, és mennyire erős a bizonyíték.',
  srcOpen:'Forrás megnyitása',
  srcWhat:'Mit vizsgált',
  srcResult:'Eredmény',
  etAl:'és mtsai',
  scrollHint:'← húzd oldalra a diagramot →'
},

navMap:'Elmetérkép',

branches:[
  {id:'ciklus',    title:'Alvásciklus',       sub:['90 perces körök','EEG-hullámok']},
  {id:'ritmus',    title:'Cirkadián ritmus',  sub:['melatonin és kortizol','a fény állítja']},
  {id:'tisztitas', title:'Agytisztítás',      sub:['artéria, véna, nyirok','pulzus pumpál']},
  {id:'miert',     title:'Miért fontos',      sub:['immunrendszer','daganatos kockázat']},
  {id:'tippek',    title:'Jobb alvás',        sub:['ingerkontroll','fény és hőmérséklet']},
  {id:'relax',     title:'Esti relaxáció',    sub:['4-7-8 légzés','hanggal vezetve']},
  {id:'etrend',    title:'Tea, étel, vitamin',sub:['mikor egyél és igyál','kiegészítők']}
],

map:{center:'ALVÁS', sub:'~8 ÓRA / ÉJSZAKA'},

stages:{
  W:  {name:'Ébrenlét',        desc:'Rövid felébredések normálisak — éjszakánként több is van. EEG-n béta és alfa.'},
  REM:{name:'REM',             desc:'Az agy majdnem úgy dolgozik, mint ébren, az izmok viszont lebénulnak. Álmok, érzelmi feldolgozás, fűrészfog-hullámok.'},
  N1: {name:'N1 elszunnyadás', desc:'Átmenet ébrenlét és alvás között. Itt tűnik el az alfa, és jön helyette a théta.'},
  N2: {name:'N2 könnyű alvás', desc:'Az éjszaka legnagyobb része. Théta-alapon alvási orsók és K-komplexek — az orsók rögzítik a mozgástanulást.'},
  N3: {name:'N3 mélyalvás',    desc:'Delta-hullámok: lassú és hatalmas. Emlékrögzítés, szövetregeneráció és az agytisztítás nagy része.'}
},

hyp:{current:'AKTUÁLIS SZAKASZ', minShort:'p', hourShort:'ó', nightIn:'az éjszaka {n} mp alatt'},

eeg:{
  winUnit:'másodperc', secShort:'mp', window:'{n} mp ablak',
  W:  {band:'Béta',                 hz:'13–30 Hz · éber, gyors, kis amplitúdó'},
  REM:{band:'Vegyes + théta',       hz:'4–30 Hz · majdnem olyan, mint ébren, plusz fűrészfog'},
  N1: {band:'Théta',                hz:'4–7 Hz · az alfa eltűnik, jön a théta'},
  N2: {band:'Théta + alvási orsók', hz:'4–7 Hz alap, 11–16 Hz-es csomagok és K-komplex'},
  N3: {band:'Delta',                hz:'0,5–4 Hz · nagy amplitúdó, lassú, összehangolt'}
},

waves:[
  {n:'Béta',        hz:'13–30 Hz',        when:'éber, koncentrált'},
  {n:'Alfa',        hz:'8–12 Hz',         when:'ellazult ébrenlét, csukott szem'},
  {n:'Théta',       hz:'4–7 Hz',          when:'elszunnyadás, N1 és N2'},
  {n:'Delta',       hz:'0,5–4 Hz',        when:'N3 mélyalvás'},
  {n:'Alvási orsó', hz:'11–16 Hz csomag', when:'N2, mozgástanulás'}
],

waveCards:[
  {t:'Béta — 13–30 Hz',p:'Ébren, koncentrálva ez dominál. Sok apró, gyors rezgés: a kéreg sok kis csoportja külön dolgozik. Alacsony amplitúdó, 5–20 µV. Ha este az ágyban is ez fut, az a „nem tudom kikapcsolni a fejem" állapot.'},
  {t:'Alfa — 8–12 Hz',p:'Ellazult ébrenlét, csukott szemmel, 20–60 µV. Az elalvás kapuja: amikor az alfa kezd feltöredezni és kihagyni, az az N1 kezdete. A lassú kilégzés és a testpásztázás pont ezt célozza.'},
  {t:'Théta — 4–7 Hz',p:'Elszunnyadás és könnyű alvás, 50–100 µV. Már több idegsejt mozog együtt. Ebben a szakaszban jönnek a zuhanásérzetek és izomrándulások.'},
  {t:'Delta — 0,5–4 Hz',p:'A mélyalvás hullámai: nagyon lassúak és nagyon nagyok, akár 100–200 µV. Az egész kéreg együtt kapcsol be és ki. Ez rögzíti a tényszerű emlékeket, és ez mozgatja az agyi folyadékot a takarításhoz. Az életkorral ez csökken először.'},
  {t:'Alvási orsó és K-komplex',p:'Nem frekvenciasáv, hanem esemény. Az orsó egy 11–16 Hz-es, fél-egy másodperces hullámcsomag az N2-ben — rögzíti a mozdulatsorokat, és leárnyékolja az agyat a külső zajtól. A K-komplex nagy, hirtelen kilengés, sokszor zajra: mintha az agy azt döntené, „nem érdemes felébredni".'},
  {t:'REM — a becsapós',p:'Az EEG-n a REM majdnem úgy néz ki, mint az ébrenlét. Ezért hívták paradox alvásnak. Két dolog árulja el: a szemmozgások, és hogy a vázizmok teljesen lebénulnak.'}
],

circ:{window:'ALVÁSABLAK'},
circNotes:[
  'Kortizolcsúcs 30–45 perccel az ébredés után. Ez nem stressz, ez az ébresztő. A reggeli fény felerősíti, és előre állítja az órát estére.',
  'A melatonin nulla, a kortizol csökken. A nap legélesebb figyelmi ablaka.',
  'Délutáni holtpont. Az adenozin már sok, de a belső óra éberségi jele még nem ért csúcsra. Itt jön a kávévágy — de a délutáni kávé fele éjfélkor is benned van.',
  'A maghőmérséklet és a testi teljesítmény csúcsa. Ez a legjobb edzésablak, és még marad idő a lehűlésre.',
  'A maghő esni kezd, a kortizol a mélypont felé tart. Innentől a fény számít a legjobban.',
  'Melatonin-indulás (DLMO). Erős esti fény ilyenkor órákkal késleltetheti.',
  'Melatonin a csúcsán, kortizol a mélyponton. A mélyalvás zöme ide esik, és vele az agy takarítása is.',
  'Maghőmérséklet-minimum, kb. két órával a természetes ébredés előtt. A kortizol most kezd emelkedni.',
  'A melatonin lecseng, a kortizol felfut, és a REM-szakaszok most a leghosszabbak.'
],

hormoneSteps:[
  {t:'Melatonin — a „besötétedett" jelzés',p:'Nem altató. Nem lök bele az alvásba, csak kinyitja hozzá a kaput: közli a testtel, hogy beállt a biológiai éjszaka. Napnyugta után 1–2 órával kezd emelkedni (DLMO), hajnali 2 és 4 között tetőzik, reggel 7–8-ra visszaesik. A parancsot a belső óra adja — amit viszont a szemen át érkező fény állít.'},
  {t:'Kortizol — az ébresztő, nem a stresszhormon',p:'Éjfél körül van a mélyponton, hajnali 3 körül elkezd emelkedni, és az ébredés után 30–45 perccel tetőzik. Ez mozgósítja a vércukrot és a keringést. A gond akkor van, ha valami este felnyomja: intenzív edzés, vita, feszült munka, koffein.'},
  {t:'Maghőmérséklet — a néma harmadik',p:'Napi kb. 1 °C-ot ingadozik. 16 és 19 óra között a legmagasabb — ekkor a legjobb az izomerő is. Két órával a természetes ébredés előtt, hajnali 4–5 körül a mélypont. Az elalvás ehhez az eséshez van kötve.'},
  {t:'A fény állítja mind a hármat',p:'A retinában külön érzékelők ülnek, amik a kékes tartományra hangoltak, és közvetlenül a belső órának jelentenek. Reggeli fény: az óra <strong>előre</strong> áll. Esti fény: <strong>hátra</strong> csúszik. A kültéri fény borús időben is nagyságrendekkel erősebb a beltérinél.'},
  {t:'Két rendszer, nem egy',p:'Az elalvás két dolog találkozása: az ébren gyűlő adenozin adta alvásnyomás, és a belső óra éberségi jele. Amikor este az óra leengedi az éberséget, miközben az adenozin a csúcsán van, akkor jön az álom.'}
],

cleanSteps:[
  {t:'Nap közben gyűlik',p:'Amíg ébren vagy, a neuronok működésének melléktermékei felhalmozódnak a sejtek közötti térben: amiloid-béta és tau fehérje, adenozin, laktát. Az adenozin az, ami az álmosságérzetet is adja — a koffein éppen ennek a jelzését blokkolja.'},
  {t:'Elalváskor kinyílik a tér',p:'Mélyalvásban a sejtek közötti rés kitágul, és az erek körüli csatorna kiszélesedik. Ez a kapcsoló: ugyanaz az agy, két teljesen más áteresztőképességgel. Az ábrán ezt látod, amikor az ágak megvastagodnak és halót kapnak.'},
  {t:'A lassú hullám pumpál',p:'A kutatások szerint a mélyalvás nagy delta hullámai együtt mozognak a folyadékkal — a jelenlegi elképzelés szerint ez a pulzálás a hajtómotor. Az animációban minden hullám végigsöpör, és <strong>ahol áthalad, ott elindítja a bent ragadt szemetet</strong>; a bal alsó pulzusjelző csúcsain gyorsul az áramlás. Hogy emberben pontosan mekkora ez a hatás, azt még kutatják.'},
  {t:'Be az artérián, ki a vénán',p:'A friss gerincvelői folyadék az artériák menti csatornán áramlik BE (kék), átöblíti a sejtek közötti teret, felkapja a szemetet, és a vénák menti csatornán áramlik KI (zöld). Ezért van két külön érfa, ellentétes irányú áramlással.'},
  {t:'A nyirokér elviszi a nyakba',p:'Az agyból kilépő szennyes folyadékot az agyhártyában futó nyirokerek gyűjtik össze, és a <strong>nyaki nyirokcsomókba</strong> vezetik, ahonnan a vér- és nyirokkeringésbe kerül. A rózsaszín szakaszon a kis nyilak a nyirokerek billentyűi — azok akadályozzák meg a visszaáramlást. Ezt a hálózatot csak 2015-ben azonosították az agyhártyában.'}
],

brain:{
  legIn:'artéria · folyadék BE',
  legOut:'véna · folyadék KI',
  legWaste:'bordó pixel · a szemét',
  stateAsleep:'MÉLYALVÁS · a tér nyitva',
  stateAwake:'ÉBRENLÉT · a tér szűk',
  pumpOn:'LASSÚ HULLÁM · PUMPA',
  pumpOff:'PULZUS NÉLKÜL',
  pumpHintOn:'a csúcson szabadul ki a szemét',
  pumpHintOff:'ébren a szemét bent ragad',
  node:'NYAKI NYIROKCSOMÓ',
  nodeSub:'innen a vér- és nyirokkeringésbe',
  vessel:'agyhártyai nyirokér',
  countAsleep:'Nyirokcsomóba juttatva',
  countAwake:'Bent ragadt szemét',
  noteAsleep:'A csatornák kinyílnak. A pulzusjelző minden csúcsán lökésben szabadulnak ki a bordó szemét-pixelek, rákerülnek a zöld vénára, ott mentazöldre váltanak (ez mutatja, hogy már a folyadék viszi őket), és a rózsaszín nyirokéren jutnak a nyaki nyirokcsomóba.',
  noteAwake:'Ébren szűkek a csatornák, alig van áramlás, és nincs pulzálás, ami kilökné. A bordó szemét bent ragad a szövetben, ahol keletkezett.'
},

why:[
  {tag:'N3 mélyalvás',t:'Emlékrögzítés',p:'A napközben tanult tények a hippokampuszból a hosszú távú tárba kerülnek át. Ezt a mélyalvás delta-hullámai vezénylik — és a mélyalvás nagy része az éjszaka első felében van. Aki későn fekszik, de ugyanannyit alszik, ebből veszít.'},
  {tag:'N2 alvási orsók',t:'Mozgástanulás',p:'A kézre tanult mozdulatsorok — géptől a hangszerig — az N2 szakasz alvási orsóihoz kötődnek, amikből az utolsó két órában van a legtöbb. Aki reggel lecsíp két órát, pont ezt vágja le.'},
  {tag:'REM',t:'Érzelmi feldolgozás',p:'REM alatt az emlékek megmaradnak, de a hozzájuk tapadó érzelmi töltet tompul. Ez az, amitől egy rossz nap másnapra elviselhetőbb. Alkohol után ez a szakasz sérül a legjobban.'},
  {tag:'Glymphatikus',t:'Agytisztítás',p:'A hulladékfehérjék — köztük az amiloid-béta és a tau — döntő része alvás alatt ürül ki, és a nyirokrendszeren jut a keringésbe. Tartós alváshiány mellett ezek felhalmozódnak.'},
  {tag:'Regeneráció',t:'Növekedési hormon',p:'A napi növekedésihormon-kibocsátás nagy része az éjszaka első mélyalvás-szakaszaihoz kötődik. Ez felelős a szövetjavításért, az izomregenerációért és a csontanyagcseréért. Ezért érzed a nehéz fizikai munka utáni napot sokkal rosszabbnak, ha keveset aludtál.'},
  {tag:'Következmény',t:'Figyelem és reakcióidő',p:'Négy-öt óra alvás után a reakcióidő és a figyelemtartás mérhetően romlik, de a saját teljesítményed megítélése nem — ezért érzed magad rendben, miközben nem vagy az. Gép mellett ez nem apróság.'}
],

tipLabels:{why:'Miért', how:'Hogyan'},

immune:[
{t:'Természetes ölősejtek — az első vonal', ev:3, l1:'Mérés', l2:'Mit jelent',
 w:'23 egészséges férfinál egyetlen éjszaka részleges alvásmegvonás után (hajnali 3 és 7 között nem aludtak) az NK-sejtek ölőképessége átlagosan a saját normál értékük <strong>72%-ára</strong> esett. Egy éjszaka rendes alvás után visszaállt. Egy 42 fős folytatásban nemcsak az NK-aktivitás esett, hanem az interleukin-2 termelés is — és az még egy éjszaka pihenés után is alacsony maradt.',
 h:'Az NK-sejtek azok, amik a vírussal fertőzött és a rendellenessé váló sejteket ismerik fel és ölik meg anélkül, hogy előbb meg kellene tanulniuk a kórokozót. Egy éjszaka nem tragédia, mert visszaáll — a lényeg, hogy ha heti négy éjszakán ismétlődik, a rendszer soha nem tér vissza a kiindulási szintre.'},
{t:'Megfázás — ez nem korreláció, hanem kísérlet', ev:3, l1:'Mérés', l2:'Mit jelent',
 w:'164 egészséges önkéntes alvását egy héten át csuklóra kötött mozgásérzékelővel mérték. Utána mindenkinek ugyanannyi rhinovírust csepegtettek az orrába. Aki <strong>5 óránál kevesebbet</strong> aludt, 4,5-szer nagyobb eséllyel lett tényleg beteg, mint aki 7-nél többet. Aki 5–6 órát: 4,2-szer.',
 h:'Ez a legmeggyőzőbb formája ennek a bizonyítéknak, mert mindenki azonos vírusadagot kapott. Nem az a kérdés, hogy elkapod-e, hanem hogy a szervezeted meg tudja-e állítani, mielőtt tünetet ad.'},
{t:'Védőoltás — az alvás dózisnövelőként', ev:3, l1:'Mérés', l2:'Mit jelent',
 w:'Egy 2023-as metaelemzés több vizsgálat adatát összesítette. Akinél <em>műszerrel</em> mérték a rövid alvást az oltás körüli napokban, ott érdemi antitestcsökkenés jött ki (hatásméret 0,79; megbízhatósági tartomány 0,40–1,18). Férfiaknál a hatás nagy volt, nőknél nem érte el a szignifikanciát. Az önbevalláson alapuló adat nem adott szignifikáns eredményt — a mért alvás számít, nem amit gondolunk róla.',
 h:'Ha oltásra mész, a körülötte lévő pár éjszakán aludj rendesen. Ez az egyik legegyszerűbb és ingyenes dolog, amivel a saját oltásod hatékonyságát növelheted.'},
{t:'Gyulladás — a lassú háttérfolyamat', ev:2, l1:'Mérés', l2:'Mit jelent',
 w:'Tartós alváshiány mellett emelkedik az IL-6, a TNF-alfa és a CRP szintje. Ezek a krónikus, alacsony szintű gyulladás jelzői — ugyanaz a gyulladás, ami a szív- és érrendszeri betegségek és az inzulinrezisztencia közös háttere.',
 h:'Ez nem érezhető tünet, hanem évek alatt gyűlő terhelés. Emiatt nem lehet megérezni, hogy elég-e az alvás.'}
],

cancer:[
{t:'Amit a WHO ügynöksége kimondott', ev:2, l1:'Tény', l2:'Fenntartás',
 w:'A WHO alá tartozó IARC 2019-ben az <strong>éjszakai műszakot</strong> „valószínűleg emberre karcinogén" (2A) kategóriába sorolta. Definíció: legalább 3 óra munka éjfél és hajnali 5 között. Az alap: <em>elegendő</em> bizonyíték állatkísérletekben és <em>erős</em> mechanizmus-bizonyíték.',
 h:'A besorolás nem azt jelenti, hogy az éjszakai munka rákot okoz. A 2A azt jelenti: valószínű, de az emberi epidemiológiai bizonyíték <em>korlátozott</em>. Ugyanebben a kategóriában van például a vörös hús fogyasztása is.'},
{t:'Az emberi adatok vegyesek', ev:2, l1:'Tény', l2:'Fenntartás',
 w:'Egy 26 vizsgálatot és 1,3 millió résztvevőt összesítő metaelemzés a 10 évnél <em>rövidebb</em> ideig éjszakázóknál 13%-kal magasabb emlőkarcinóma-kockázatot talált (RR 1,13). A 10 évnél hosszabb csoportnál az eredmény már nem lett szignifikáns. Egy 2024–2025-ös frissítés kohorszvizsgálatokban helyenként ellentétes irányt is talált.',
 h:'Ez a tipikus kép egy valós, de kicsi hatásnál, ahol a mérés zajos. Nem szabad se lesöpörni, se katasztrófaként kezelni.'},
{t:'A feltételezett mechanizmus', ev:2, l1:'Tény', l2:'Fenntartás',
 w:'Négy szál fut össze: a mesterséges esti fény elnyomja a melatonint; a belső óra összezavarodik, és vele a sok ezer napi ritmusban működő gén; az NK-aktivitás csökken; és felborul a sejtosztódás napi ritmusa, ami a DNS-hibajavítás időzítését is érinti.',
 h:'Laborban erős, emberben nehezen mérhető. Azt viszont megmutatja, hol lehet beavatkozni: a fényen és az étkezés időzítésén keresztül.'},
{t:'Amit ebből érdemes elvinni', ev:3, l1:'Tény', l2:'Fenntartás',
 w:'Nem az, hogy „a rossz alvás rákot okoz". Hanem az, hogy az alvás és a belső óra az immunrendszer működésének egyik alapfeltétele, ez kísérletesen mérhető, és a hatás <strong>visszafordítható</strong>: az NK-aktivitás egy éjszaka alvás után visszaáll, az oltásválasz javítható, a gyulladásjelzők csökkennek.',
 h:'A helyes olvasat nem félelem, hanem az, hogy ez az egyik legjobban megtérülő beavatkozás, mert ingyen van és minden más rendszerre is hat.'}
],

harm:[
{t:'Egy éjszaka után', ev:3, l1:'Mi romlik', l2:'Mit tegyél',
 w:'A reakcióidő és a figyelemtartás mérhetően romlik, a hangulat labilisabb, a fájdalomérzékenység nő, az NK-aktivitás lecsökken. A legalattomosabb: a <em>saját</em> teljesítményed megítélése nem romlik ezzel együtt.',
 h:'Ne hozz aznap nagy döntést, és gép mellett számolj rá. Ha lehet, 20 perces korai délutáni szunyókálás — de 15 óra után már ne. Ne próbáld kávéval megoldani: az elrejti a jelzést, nem pótolja az alvást.'},
{t:'Egy-két hét után', ev:2, l1:'Mi romlik', l2:'Mit tegyél',
 w:'Gyakoribbá válnak a felső légúti fertőzések, gyengül az oltásokra adott válasz, romlik a glükóztolerancia, és az étvágyszabályozás is elcsúszik: nő a ghrelin, csökken a leptin. A mélyalvás rovására eső alváshiány a növekedési hormont is visszafogja.',
 h:'Itt már nem elég egy jó éjszaka. Vissza kell állni a fix ébredéshez és a reggeli fényhez, és ki kell húzni két hetet.'},
{t:'Hónapok, évek alatt', ev:2, l1:'Mi romlik', l2:'Mit tegyél',
 w:'Emelkedett szív- és érrendszeri kockázat, inzulinrezisztencia felé mutató elmozdulás, tartósan magasabb gyulladásjelzők, és a hulladékfehérjék felhalmozódása az agyban. Ezek nem hirtelen jelennek meg, és nem is érződnek időben.',
 h:'Ha ide jutottál, a legfontosabb kizárni az alvási apnoét, mert az önmagában is elég ehhez a képhez, és teljesen máshogy kezelendő. Utána CBT-I, nem altató.'}
],

core:[
{t:'Fix ébredési idő, hétvégén is',
 w:'Az ébredés horgonyozza le a belső órát, nem a lefekvés. Az óra saját ciklusa valamivel hosszabb 24 óránál, ezért naponta újra kell állítani. Ha hétvégén két órát csúsztatsz, az az órádnak annyi, mintha átrepültél volna két időzónát: hétfőn szociális jetlaggel indulsz.',
 h:'Válaszd a legkorábbi hétköznapi ébredést, és tartsd hétvégén is fél órán belül. Ha kevés volt az alvás, inkább korábban feküdj le, ne később kelj.'},
{t:'Az ágy csak alvásra — ingerkontroll',
 w:'Ha az ágyban forgolódsz, aggódsz vagy telefonozol, az agy megtanulja az „ágy = éberség" társítást. Ez feltételes reflex, pár hét alatt kialakul. Az ingerkontroll ezt írja felül, és a CBT-I egyik legerősebb önálló hatóanyaga.',
 h:'Ha kb. 20 perc után nem alszol el, kelj ki. Ne nézd az órát, becsüld. Menj át másik helyiségbe, félhomály, olvass valami unalmasat. Csak akkor menj vissza, ha tényleg álmos vagy — és ismételd akárhányszor.'},
{t:'Alvásmegszorítás',
 w:'Ha kilenc órát fekszel az ágyban, hogy hatot aludj, az a három ébren töltött óra az ágyat ébrenlét-helyszínné teszi, és széttördeli az alvást. Ha leszűkíted az ágyban töltött időt a tényleges alvásidőre, nő az alvásnyomás, és az alvás összetömörödik.',
 h:'Egy hétig vezess alvásnaplót. Az ágyban töltött időt állítsd be az átlagos tényleges alvásidőre, de sose menj 5,5 óra alá. Az ébredés fix, a lefekvést told későbbre. Ha egy héten át az alváshatékonyság 90% fölött van, told ki 15 perccel.'},
{t:'Reggeli fény, ébredés után hamar',
 w:'A retinában külön érzékelősejtek ülnek, amik közvetlenül a belső órának jelentenek. A reggeli fény leállítja a maradék melatonint, felviszi a kortizolt a normális ébredési csúcsra, és előre tolja az órát. A hatás nem azonnali: este jelentkezik.',
 h:'10–20 perc kint, borús időben inkább 30–40. Ablakon át a fény töredéke jut át, tehát tényleg menj ki. Napszemüveg nélkül, de a napba ne nézz.'},
{t:'Hűvös hálószoba, 16–19 °C',
 w:'Az elalváshoz a maghőmérsékletnek kb. 1 °C-ot esnie kell, és ez úgy megy, hogy a kéz és a láb erei kitágulnak, és leadják a hőt. Túl meleg szobában nincs hova leadni.',
 h:'16–19 °C, és inkább takaróval szabályozz. Ha fázik a lábad, húzz zoknit — paradox módon segít, mert így tágulnak az erek és jobban ürül a hő.'}
],

extra:[
{t:'Koffein: utolsó adag 8–10 órával lefekvés előtt',
 w:'A koffein az adenozin receptorait blokkolja. Nem tünteti el az adenozint, csak elrejti a jelét — és amikor lebomlik, a felgyűlt adenozin egyszerre üt be. A felezési idő 5–6 óra: a 15 órakor ivott kávé fele még 21-kor is benned van. A leggyakoribb következmény nem az elalvás, hanem hogy kevesebb mélyalvást kapsz.',
 h:'Kb. 10 órával lefekvés előtt húzd meg a vonalat. Figyelj a rejtett forrásokra: energiaital, zöld tea, étcsokoládé, egyes fájdalomcsillapítók.'},
{t:'Az alkohol nem alvás',
 w:'Nyugtató hatású, ezért gyorsabban elalszol — de az így kapott állapot nem természetes alvás. Elnyomja a REM-et az első félidőben, és amikor lebomlik, felaprózott, felszínes második félidő jön sok mikroébredéssel.',
 h:'Ha iszol, hagyj legalább 3–4 órát lefekvésig, és igyál mellé vizet. Próbálj két hetet nélküle, és hasonlítsd össze.'},
{t:'Meleg zuhany vagy fürdő 1–2 órával lefekvés előtt',
 w:'Nem a felmelegedés a lényeg, hanem ami utána jön: a meleg víz kitágítja a bőr ereit, és kilépve a test hatékonyabban adja le a hőt — így a maghő gyorsabban esik.',
 h:'10–15 perc meleg, nem forró víz. Kádfürdő, zuhany, sőt a lábfürdő is működik.'},
{t:'Este halvány, alacsonyan lévő fény',
 w:'A retina óra-érzékelői a felülről jövő, kékes fényre reagálnak a legerősebben. Az esti erős mennyezetvilágítás azt üzeni, hogy még nappal van, és késlelteti a melatonin megindulását.',
 h:'Napnyugta után kapcsold le a mennyezeti lámpát, használj szemmagasság alatti, meleg fényű lámpákat. A nagyobb tétel a szoba fénye, nem a kijelző.'},
{t:'Mozgás igen, de ne közvetlenül lefekvés előtt',
 w:'A rendszeres napközbeni mozgás mélyíti a mélyalvást. Az intenzív edzés viszont felviszi a maghőmérsékletet, amit épp csökkenteni kellene, és megemeli a kortizolszintet, aminek este a mélypontján kellene lennie.',
 h:'Intenzív edzés legkésőbb 2–3 órával lefekvés előtt. Késő este már csak nyújtás, séta, könnyű jóga.'},
{t:'Nagy vacsora és sok folyadék lefekvés előtt',
 w:'Az emésztés felviszi a testhőt és az anyagcserét, pont amikor a maghőnek esnie kellene. Lefekvés után a reflux is felébreszthet.',
 h:'Az utolsó nagyobb étkezés 3 órával lefekvés előtt. A folyadékot húzd előre a nap első felébe.'},
{t:'Írd ki, ami pörög',
 w:'A fejben tartott befejezetlen feladatok fenntartják az éberséget: az agy nem engedi el azt, aminek nincs biztos helye.',
 h:'Lefekvés előtt 10 perc: holnapi teendők listája papírra, ne telefonba.'}
],

tea:[
{t:'Kamilla — ezzel kezdd', ev:2,
 w:'A kamillában lévő apigenin ugyanazokhoz a GABA-A receptorokhoz kötődik, amiken a nyugtatók is hatnak, csak nagyon halványan. Egy randomizált vizsgálatban két hét kamillatea mérhetően javította az alvás minőségét. A rituálé maga is jelzés: a meleg csésze, a félhomály és a lassulás együtt tanítja az agyat.',
 h:'Egy csésze, 60–90 perccel lefekvés előtt. Kb. 90 fokos vízzel, és tedd rá a tetejét 5–7 percre — így az illóolajok a teában maradnak. Cukrot ne, legfeljebb kevés mézet.'},
{t:'Macskagyökér (valeriána) — erősebb, de lassabb', ev:2,
 w:'A valerénsav növeli a GABA elérhetőségét. Egy 2024-es áttekintés szerint a valeriána, a komló és a melatonin azok, amiknél a legtöbb támogató adat van. Cserébe 2–4 hét rendszeres használat kell hozzá.',
 h:'Este egy csésze, vagy komlóval keverve. Ha nyugtatót, antidepresszánst vagy alkoholt is használsz, előbb beszéld meg gyógyszerésszel.'},
{t:'Golgotavirág és citromfű', ev:1,
 w:'A golgotavirág szorongáscsökkentése a kamilláéval egy szinten van, de kis vizsgálatokban kevesebb éjszakai felébredést is hozott. A citromfű a saját GABA-dat védi a lebomlástól.',
 h:'Jó választás, ha nem az elalvás, hanem a hajnali 3-kor felébredés a problémád.'},
{t:'Meggylé (Montmorency) — óvatos igen', ev:1,
 w:'Van benne természetes melatonin, de kevés. A valószínűbb út a gyulladáscsökkentő antocianinok. Egy 2023-as áttekintés szerint javítja az alváshatékonyságot — de a vizsgálatok kicsik és jó részük ipari finanszírozású.',
 h:'Kb. 240 ml. Hátulütő a cukortartalom, cukorbetegségnél kifejezetten nem.'},
{t:'Amit este kerülj', ev:3,
 w:'A zöld és a fekete tea is koffeint tartalmaz — a zöld kevesebbet, de nem nullát, és a felezési idő ugyanaz.',
 h:'Napnyugta után csak koffeinmentes gyógytea, mérsékelt mennyiség.'}
],

food:[
{t:'A nem várt csavar: a triptofán a REGGELIN számít', ev:2,
 w:'A melatonin triptofánból készül, szerotoninon keresztül. Japán vizsgálatok szerint a triptofánban gazdag <em>reggeli</em> plusz reggeli erős fény plusz este halvány fény emelte meg mérhetően az esti melatoninszintet. A vacsorán elfogyasztott triptofán nem mutatott ilyen hatást: a szintézishez idő és nappali fény kell.',
 h:'Reggelire: tojás, túró vagy joghurt, zabkása, tökmag, sajt, banán. És utána menj ki a fénybe 10–20 percre.'},
{t:'Az utolsó nagy étkezés 3 órával lefekvés előtt', ev:2,
 w:'Az emésztés felviszi a testhőmérsékletet és az anyagcserét, épp amikor a maghőnek esnie kellene. Fekve a gyomorsav is könnyebben visszafolyik.',
 h:'22:30-as lefekvésnél a vacsora 19:00 körül. Zsíros, nagyon fűszeres vagy nagy proteinadagos vacsorát este ne.'},
{t:'Ha éhesen nem tudsz aludni', ev:1,
 w:'Az üres gyomor is ébresztő jel. Emellett a triptofán akkor jut be legjobban az agyba, ha kevés szénhidrát is van mellette.',
 h:'Fél szelet teljes kiőrlésű kenyér, egy kis natúr joghurt, pár szem mandula vagy egy kis banán. Kétszáz kalória alatt.'},
{t:'Amit az étrendből érdemes rendben tartani', ev:2,
 w:'A magnézium, a B6-vitamin és a cink mind kellenek a szerotonin–melatonin úthoz. Ha az étrendből megvannak, nincs miért kapszulázni.',
 h:'Magnézium: tökmag, mandula, spenót, fekete bab, étcsokoládé. B6: hal, csirke, burgonya, banán. Cink: hús, tökmag, hüvelyesek.'}
],

supp:[
{t:'Magnézium', ev:2, l1:'Bizonyíték', l2:'Hogyan',
 w:'Támogatja a GABA-működést. A bizonyíték közepes: a vizsgálatok kicsik, és a hatás főleg akkor jön, ha eleve hiány van.',
 h:'200–400 mg elemi magnézium, 30–60 perccel lefekvés előtt. Glicinát vagy citrát — az oxid rosszul szívódik fel. 350 mg fölött hasmenés lehet.'},
{t:'Glicin', ev:2, l1:'Bizonyíték', l2:'Hogyan',
 w:'A glicin nem nyugtat, hanem <em>hűt</em>: kitágítja a kéz és a láb ereit, így a maghőmérséklet gyorsabban esik. Ugyanazt csinálja, mint a meleg fürdő, csak belülről. Az őszinte rész: kevés és kicsi vizsgálat van, több közülük glicint gyártó cégtől — viszont mellékhatást nem találtak.',
 h:'3 g, 30–60 perccel lefekvés előtt. Nem megadózis: az étrendből eleve kb. 2 g jön naponta. Ha 1–2 hét után semmit nem érzel, hagyd abba.'},
{t:'L-teanin', ev:2, l1:'Bizonyíték', l2:'Hogyan',
 w:'A zöld tea nyugtató aminosava. Nem álmosít, hanem leveszi az élt a pörgésről. Már az első éjszakán érezhető.',
 h:'200 mg lefekvés előtt. Jól megvan magnéziummal együtt.'},
{t:'Melatonin — a legerősebb bizonyíték, a legtöbb félreértéssel', ev:3, l1:'Bizonyíték', l2:'Hogyan',
 w:'Nem altató, hanem óraállító. Ezért az <strong>időzítés fontosabb, mint a dózis</strong>. Amire jó: időzónaváltás, műszakváltás, elcsúszott ritmus visszatolása. Amire kevésbé: krónikus álmatlanság.',
 h:'0,3–0,5 mg, 1–3 órával lefekvés ELŐTT. A bolti 3–10 mg-os tabletta durván túldozírozott. Ha csak nagy van, törd el. Ne szedd hónapokon át.'},
{t:'D-vitamin — mérés nélkül ne', ev:1, l1:'Bizonyíték', l2:'Hogyan',
 w:'A hiány együtt jár rosszabb alvással, de ez nem jelenti, hogy a pótlás mindenkinél javítja. Ez az egyetlen a listán, aminél a túlzás valódi kárt okoz.',
 h:'Kérj vérvételt (25-OH-D), és annak alapján állítsd be az adagot. Reggel vagy délben vedd be, étkezés mellett.'},
{t:'Amit inkább ne', ev:1, l1:'Bizonyíték', l2:'Hogyan',
 w:'A nagy dózisú B6 hosszú távon idegkárosodást okozhat. Az ashwagandha májproblémák miatt vitatott. A vény nélküli antihisztamin alapú altatók gyorsan tolerálódnak.',
 h:'Ha három hónap után is minden éjszakához kell valami, az orvosi kérdés. Az alvási apnoe máshogy kezelendő.'}
],

dayplan:[
  ['ébredés','<b>Fény, azonnal.</b> 10–20 perc kint. Ha van, D-vitamin étkezés mellé.'],
  ['+30 perc','<b>Triptofános reggeli:</b> tojás, túró, zab, tökmag.'],
  ['−10 óra','<b>Utolsó koffein.</b> 22:30-as lefekvésnél 12:30 körül.'],
  ['−7,5 óra','<b>Edzésablak</b> nyílik: 15 és 19 között a legjobb az izomerő.'],
  ['−3,5 óra','<b>Utolsó nagy étkezés.</b> Ne zsíros, ne nagy proteinadag.'],
  ['−2,5 óra','<b>Intenzív edzés vége.</b> Innentől csak séta, nyújtás.'],
  ['−1,5 óra','<b>Fények le.</b> Mennyezeti lámpa ki, meleg fényű állólámpa. Tea föl.'],
  ['−1 óra','<b>Kiegészítők:</b> magnézium és glicin. Melatonint korábban.'],
  ['−1 óra','<b>Meleg zuhany</b> 10–15 perc.'],
  ['−30 perc','<b>Kiírás</b> papírra, utána relaxáció hanggal.'],
  ['lefekvés','<b>Hűvös, sötét, néma szoba</b>, 16–19 °C.']
],

breath:[
  {label:'Belélegzés orron át', say:'Lélegezz be orron át.'},
  {label:'Tartsd bent',         say:'Tartsd bent.'},
  {label:'Fújd ki lassan',      say:'Fújd ki lassan, szájon át.'}
],

pmr:{
  tense:'FESZÍTSD.',
  release:'ENGEDD EL.',
  releaseTxt:'Csak figyeld, hogy ereszt ki a feszülés, és süllyed bele az ágyba.',
  sayTense:'{title}. Feszítsd. {how}',
  sayRelease:'Engedd el. Figyeld, hogy ereszt ki a feszülés.',
  doneTitle:'Kész.',
  doneTxt:'Feküdj még egy percet mozdulatlanul, mielőtt bármit csinálnál.',
  sayDone:'Kész. Feküdj még egy percet mozdulatlanul.',
  stopped:'Megállítva. Az Indítás újrakezdi az elejéről.',
  steps:[
    ['labfej','Lábfej és lábujjak','Görbítsd be a lábujjaidat, feszítsd meg a talpad boltozatát.'],
    ['labszar','Vádli','Húzd a lábfejed magad felé, feszüljön meg a vádlid.'],
    ['comb','Comb','Nyomd a térdedet lefelé, feszítsd meg a combizmot.'],
    ['csipo','Csípő és fenék','Szorítsd össze a fenékizmokat.'],
    ['has','Has','Húzd be a hasfalat, mintha ütést várnál.'],
    ['mellkas','Mellkas és hát','Vegyél mély levegőt, és tartsd bent, amíg feszül a mellkas.'],
    ['kez','Kéz','Szorítsd ökölbe mindkét kezed, olyan erősen, amennyire kényelmes.'],
    ['kar','Kar','Feszítsd meg az alkart és a felkart, mintha húznál valamit.'],
    ['vall','Váll és nyak','Húzd fel a vállad a füledhez, tartsd ott.'],
    ['arc','Arc','Szorítsd össze az állkapcsod, hunyd össze a szemed, ráncold a homlokod.']
  ]
},

scan:{
  ready:'Kész az indításra. {n} másodperc jut egy testrészre.',
  sayIntro:'Feküdj kényelmesen, csukd be a szemed, és figyelj oda arra, amit mondok.',
  doneTitle:'Kész.',
  doneTxt:'Ha még ébren vagy, maradj így, és hagyd, hogy jöjjön az álom magától.',
  sayDone:'Kész. Ha még ébren vagy, maradj így, és hagyd, hogy jöjjön az álom magától.',
  stopped:'Megállítva. Az Indítás onnan folytatja, ahol abbahagytad.',
  steps:[
    ['labfej','Lábfej','Kezdd itt. Meleg? Hűvös? Bizsergés? Semmi? Mindegyik jó válasz.'],
    ['labszar','Vádli és lábszár','Engedd, hogy a lábad teljes súlyával belesüllyedjen az ágyba.'],
    ['comb','Comb','A nagy izmok itt tartják a legtöbb maradék feszültséget.'],
    ['csipo','Csípő','Figyeld, hogy hol nyomódik a test az ágyhoz.'],
    ['has','Has','Kövesd, ahogy a hasfal emelkedik és süllyed a légzéssel.'],
    ['mellkas','Mellkas és hát','Ne szabályozd a légzést, csak nézd, ahogy megy magától.'],
    ['kez','Kéz','A tenyér és az ujjak — itt szokott a legtöbb bizsergés lenni.'],
    ['kar','Kar','Váll felé haladva engedj el minden maradék tartást.'],
    ['vall','Váll és nyak','A nap feszültsége legtöbbször itt gyűlik össze.'],
    ['arc','Arc és homlok','Állkapocs, szemkörnyék, homlok. Engedd el a rágóizmokat.']
  ]
},

tts:{
  unsupported:'A böngésződ nem tud beszélni.',
  found:'Hang: {name}',
  missing:'A nyelvhez nincs telepített hang — a rendszer alaphangját használja. Windowsban: Beállítások → Idő és nyelv → Beszéd → nyelvi hangcsomag.',
  enabled:'Hang bekapcsolva. Csukott szemmel is követheted.'
}
,

evLegend:{k:'Bizonyíték', l1:'Korlátozott', l2:'Jó', l3:'Erős'},

srcTypes:{exp:'kísérlet', trial:'kísérletes vizsgálat', meta:'metaelemzés', review:'áttekintés', cross:'keresztezett vizsgálat', class:'szakértői besorolás'},

srcInfo:{
  irwin94:{q:'23 egészséges férfi alvását rövidítették meg egyetlen éjszakára (hajnali 3 és 7 között nem aludtak).',
           r:'A természetes ölősejtek ölőképessége a saját normálérték 72%-ára esett, majd egy éjszaka rendes alvás után visszaállt.'},
  prather15:{q:'164 önkéntes alvását egy héten át csuklóra kötött mozgásérzékelővel mérték, majd mindenkinek ugyanannyi rhinovírust cseppentettek az orrába.',
           r:'Aki 5 óránál kevesebbet aludt, 4,5-ször nagyobb eséllyel lett ténylegesen beteg, mint aki 7 óránál többet. A bizonytalanság nagy: 1,08–18,69.'},
  spiegel23:{q:'Több vizsgálat adatát összesítette arról, hogy az oltás körüli napok alvása hogyan függ össze az antitestválasszal.',
           r:'Műszerrel mért rövid alvásnál érdemi antitestcsökkenés (hatásméret 0,79; 0,40–1,18). Férfiaknál nagy hatás, nőknél nem volt szignifikáns. Önbevallásból nem jött ki.'},
  iarc19:{q:'Szakértői testület értékelte az éjszakai műszak és a daganatos megbetegedések összefüggését.',
           r:'„Valószínűleg emberre karcinogén” (2A) besorolás. Az emberi epidemiológiai bizonyíték korlátozott — a besorolás nem jelenti azt, hogy az éjszakai munka rákot okoz.'},
  manouchehri21:{q:'26 vizsgálat, összesen 1 313 348 résztvevő adatát összesítette az éjszakai műszak hossza és az emlőrák kockázata között.',
           r:'10 évnél rövidebb éjszakázásnál 13%-kal magasabb kockázat (RR 1,13). 10 évnél hosszabbnál az eredmény nem lett szignifikáns (RR 1,08).'},
  benedict20:{q:'15 egészséges fiatal férfi vérplazmáját mérték normál alvás, illetve egy átvirrasztott éjszaka után.',
           r:'Átvirrasztott éjszaka után a tau-fehérje szintje emelkedett (+17,2%, szemben a normál alvás +1,8%-ával). A többi markernél nem volt különbség. Kicsi, feltáró vizsgálat.'},
  louveau17:{q:'Áttekintés a glymphatikus rendszerről és az agyhártyában futó nyirokerekről.',
           r:'Összefoglalja, hogyan ürül a folyadék és a hulladék az idegrendszerből a nyaki nyirokcsomók felé — és megnevezi, mi az, ami még nyitott kérdés.'},
  xu26:{q:'Áttekintés a glymphatikus rendszer szerepéről alvás közben.',
           r:'A rendszer alvás alatt aktívabb, ébren jórészt csendes. A pontos molekuláris mechanizmusok feltárása még a további kutatás feladata.'},
  harding19:{q:'Áttekintés a testhőmérséklet és az alvás kapcsolatáról.',
           r:'Az elalvás a maghőmérséklet eséséhez kötődik; a hőszabályozás és az alvásszabályozás szorosan összefügg.'},
  cbti24:{q:'Áttekintés az álmatlanság kognitív viselkedésterápiájának (CBT-I) összetevőiről.',
           r:'A CBT-I az elsővonalbeli kezelés krónikus álmatlanságra; a magja az ingerkontroll és az alvásmegszorítás.'},
  supp24:{q:'Áttekintés az alvásra használt gyógynövényekről és étrend-kiegészítőkről.',
           r:'A legtöbb támogató adat a melatonin, a valeriána és a komló mellett van. A vizsgálatok többsége kicsi, a bizonyíték korlátozott.'}
}
};
