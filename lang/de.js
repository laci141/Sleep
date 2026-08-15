/* Deutsch — Übersetzung des ungarischen Originals (hu.js). Gleiche Schlüsselstruktur. */
window.LANGS = window.LANGS || {};
window.LANGS.de = {
code:'de', label:'DE', name:'Deutsch', htmlLang:'de', ttsLang:'de-DE',

ui:{
  title:'Schlaf 2026',
  brandMark:'Die Nachtschicht',
  brandSub:'Schlaf · Rhythmus · Erholung',
  menuAria:'Hauptmenü',
  menuOpen:'Menü öffnen',
  menuClose:'Menü schließen',
  menuLabel:'Menü',
  langAria:'Sprachauswahl',
  langLabel:'Sprache',
  footer:'SCHLAF 2026',

  mapEyebrow:'Gedankenkarte',
  mapH1:'Acht Stunden, die dein Gehirn nicht mit Schlafen verbringt',
  mapLead:'Während du liegst, arbeitet dein Gehirn in Zyklen: Es speichert den Tag, verarbeitet Gefühle und spült den Abfall aus sich heraus, der sich im Wachzustand angesammelt hat. Währenddessen organisiert sich auch das Immunsystem neu. Eine innere Uhr dirigiert das Ganze. Klick auf einen Ast.',
  mapSvgAria:'Gedankenkarte der Schlafthemen',

  cycEyebrow:'Schlafzyklus',
  cycH2:'Eine Nacht, wie die Geräte sie sehen',
  cycLead:'Du schläfst nicht gleichmäßig. Etwa 90-minütige Zyklen wechseln sich ab, und die REM-Phasen werden gegen den Morgen hin länger. Der Großteil des Tiefschlafs liegt in der ersten Nachthälfte — deshalb ist es nicht egal, wann du dich hinlegst, nicht nur, wie viel du schläfst.',
  cycEegEyebrow:'EEG-Wellen im Schlaf — eine Veranschaulichung',
  cycEegWinLab:'Angezeigter Zeitraum',
  cycEegNote:'Längeres Fenster = die Kurve läuft langsamer. Links der Ausschlag in Mikrovolt, unten die Zeit.',
  cycPlay:'Start',
  cycPause:'Pause',
  cycReset:'Zurück zum Anfang',
  cycSpeed:'Geschwindigkeit',
  cycSpeedAria:'Wiedergabegeschwindigkeit',
  cycStepLab:'Schrittweite',
  cycStepUnit:'Min',
  cycShareEyebrow:'Verteilung der Nacht',
  cycHypAria:'Hypnogramm',

  waveEyebrow:'Hirnwellen',
  waveH2:'Beta, Alpha, Theta, Delta',
  waveLead:'Das EEG liest keine Gedanken, sondern misst, wie sehr Millionen von Nervenzellen <em>gemeinsam</em> feuern. Je mehr gleichzeitig aktiv sind, desto langsamer und größer ist die Welle. Im Wachzustand macht jeder sein eigenes Ding: viele kleine, schnelle Schwingungen. Im Tiefschlaf atmet die gesamte Hirnrinde gemeinsam: wenige, riesige, langsame Wellen.',
  waveSvgAria:'Hirnwellentypen',

  circEyebrow:'Zirkadianer Rhythmus',
  circH2:'Die innere Uhr, die entscheidet, wann der Schlaf kommt',
  circLead:'In der Mitte des Gehirns, über der Kreuzung der Sehnerven, sitzt eine aus etwa 20&nbsp;000 Zellen bestehende Uhr, der <em>Nucleus suprachiasmaticus</em>. Ihr eigener Zyklus dauert nicht genau 24 Stunden, sondern etwas länger, und sie ist von Mensch zu Mensch verschieden — deshalb muss sie täglich neu gestellt werden. Der Stellknopf ist das Licht.',
  circSvgAria:'Melatonin, Cortisol, Körperkerntemperatur',
  circPlay:'Tag abspielen',
  circPause:'Pause',
  circNow:'Zur Schlafenszeit springen',
  circMel:'Melatonin',
  circCor:'Cortisol',
  circTmp:'Körperkerntemperatur',
  circStepsH3:'Was die beiden Hormone tun',

  cleanEyebrow:'Glymphatisches System',
  cleanH2:'Nächtlicher Großputz im Gehirn',
  cleanLead:'Ja, du hast es richtig im Kopf: Das <strong>Lymphsystem ist ebenfalls Teil des Prozesses</strong>. Im Gehirn selbst gibt es keine Lymphgefäße, aber in der Hirnhaut schon — und die transportieren die verschmutzte Flüssigkeit zu den Halslymphknoten. Drei Wege, drei verschiedene Farben:',
  cleanLegBlue:'<strong style="color:#5fb4ff">Blau</strong> — Arterie: frische Flüssigkeit REIN',
  cleanLegGreen:'<strong style="color:#4fe0a8">Grün</strong> — Vene: verschmutzte Flüssigkeit RAUS',
  cleanLegPink:'<strong style="color:#ff7fb0">Rosa</strong> — Lymphgefäß zum Halslymphknoten',
  cleanLegDark:'<strong style="color:#e8506f">Weinrot</strong> — der Abfall selbst',
  cleanLead2:'Im Modell übernimmt die langsame Welle des Tiefschlafs die Rolle der Pumpe. Schalte auf Tiefschlaf um, und schau auf die Pulsanzeige unten links: <strong>in der Animation setzt sich bei jeder Spitze eine Portion weinroter Abfall-Pixel in Bewegung</strong>, gelangt auf die grüne Vene und von dort über das rosa Lymphgefäß zum Halslymphknoten. So läuft die Veranschaulichung — im echten Gehirn ist der Fluss kontinuierlich, und sein Ausmaß wird noch erforscht.',
  cleanStateAria:'Zustand',
  cleanAwake:'Wach',
  cleanAsleep:'Im Tiefschlaf',
  cleanStepsH3:'Der Prozess in fünf Schritten',
  cleanNote:'In einer Cross-over-Studie mit 15 Personen stieg nach einer einzigen durchwachten Nacht am Morgen das Tau-Protein im Blutplasma an (+17,2% gegenüber +1,8% nach normalem Schlaf). Bei den übrigen gemessenen Markern gab es keinen Unterschied. Eine kleine, explorative Studie: Sie zeigt, dass sich Schlafmangel in diesen Werten niederschlägt, misst aber nicht direkt die Reinigung des Gehirns.',

  whyEyebrow:'Warum es wichtig ist',
  whyH2:'Was du verlierst, wenn du ihn kürzt',
  whyLead:'Der Schlaf erfüllt nicht nur eine Funktion, sondern fünf bis sechs parallel — und jede ist an eine andere Phase gebunden.',
  immuneTag:'Immunsystem',
  immuneH2:'Was die Studien messen konnten',
  immuneLead:'Das ist der am besten dokumentierte Teil, weil er sich experimentell untersuchen lässt: Man verkürzt Menschen den Schlaf, nimmt dann Blut ab oder gibt ihnen absichtlich ein Virus. Keine korrelative Beobachtung, sondern ein Experiment.',
  cancerTag:'Krebsrisiko',
  cancerH2:'Hier muss man am genauesten formulieren',
  cancerInfo:'<strong>Wenn du in Schichten arbeitest:</strong> Die Schicht kannst du nicht abschaffen, aber die zwei stärksten Werkzeuge schon. Das eine ist das <strong>Timing des Lichts</strong> — während der Nachtschicht ein heller Arbeitsplatz, auf dem Heimweg eine Sonnenbrille, zu Hause Verdunkelung. Das andere ist das <strong>Timing der Mahlzeiten</strong>: die großen Mahlzeiten in die helle Phase, nachts eher wenig.',
  harmTag:'Wenn der Schlaf schlecht ist',
  harmH2:'Was kaputtgeht, und in welcher Reihenfolge',
  harmWarn:'<strong>Wann du zum Arzt gehen solltest:</strong> wenn du schnarchst und tagsüber auch müde bist (Verdacht auf Schlafapnoe), wenn seit Wochen jede Nacht schlecht ist, wenn du morgens mit Kopfschmerzen aufwachst, wenn du nachts erstickend aufwachst, oder wenn die Tagesmüdigkeit deine Arbeit gefährdet. An einer Maschine ist Letzteres keine Kleinigkeit.',

  tipsEyebrow:'Besser schlafen',
  tipsH2:'Zuerst die vier großen, dann der Rest',
  tipsLead:'Eine wichtige Wendung: Die Leitlinie der amerikanischen Schlafmedizin-Gesellschaft von 2021 empfiehlt die Ratschlagsliste „Schlafhygiene" <strong>allein nicht</strong>. Was wirklich funktioniert, ist der Kern der CBT-I: die Stimuluskontrolle und die Schlafrestriktion.',
  coreTag:'Starke Evidenz',
  coreH3:'Damit fängst du an — nach Wichtigkeit geordnet',
  extraTag:'Unterstützende Gewohnheiten',
  extraH3:'Diese helfen, reichen aber allein nicht aus',
  tipsNote:'Das ist Wissensvermittlung, kein medizinischer Rat. Bei chronischer Schlaflosigkeit ist die CBT-I die Erstlinienbehandlung, nicht das Schlafmittel.',

  relaxEyebrow:'Abendliche Entspannung',
  relaxH2:'Drei Übungen vor dem Schlafengehen',
  relaxIntro:'Mach immer nur eine davon. Alle zielen auf dasselbe: Sie nehmen die Stressreaktion weg, damit der Schlaf von selbst kommt. Wenn du dabei einschläfst, ist das der Erfolg, nicht das Scheitern. <strong>Schalte den Ton ein</strong>, dann musst du nicht lesen — ich führe dich durch.',
  tabBreath:'4-7-8-Atmung',
  tabPmr:'Progressive Muskelentspannung',
  tabScan:'Körperscan',
  breathIntro:'Vier Sekunden Einatmen durch die Nase, sieben Sekunden Luft anhalten, acht Sekunden langsam durch den Mund ausatmen. Das lange Ausatmen ist der Kern: Das verlangsamt den Herzschlag. Vier bis sechs Runden reichen.',
  breathReady:'Bist du bereit?',
  breathHint0:'— · Runde 0',
  breathDone:'Fertig.',
  breathRounds:'Runden geschafft',
  breathRound:'Runde',
  secShort:'s',
  pmrIntro:'Von den Zehen bis zur Stirn, Muskelgruppe für Muskelgruppe: fünf Sekunden anspannen, dann zehn Sekunden vollständig loslassen. Es geht darum, den Unterschied zwischen angespannt und locker zu spüren. Mach es im Liegen.',
  pmrIdle:'Drück auf Start, und ich führe dich Schritt für Schritt hindurch.',
  scanIntro:'Dieselbe Körperkarte, nur ohne Anspannung. Du richtest die Aufmerksamkeit auf einen Körperteil, schaust, was du dort fühlst, und gehst weiter. Der umlaufende Lichtring zeigt, wo die Aufmerksamkeit gerade ist — vorne abwärts, hinten aufwärts, so wie ein Ring einen Körper umrundet. Mit Ton lässt es sich auch mit geschlossenen Augen durchführen.',
  scanIdle:'Wähl eine Länge, und starte.',
  start:'Start',
  stop:'Stopp',
  soundOn:'Ton: an',
  soundOff:'Ton: aus',
  min5:'5 Min',
  min10:'10 Min',
  remaining:'verbleibend:',
  bodyAria:'Menschliche Körperform',

  dietEyebrow:'Tee, Essen, Vitamine',
  dietH2:'Die letzten fünf Prozent',
  dietLead:'Dieser Teil ist das Gegenstück zur Entspannung, aber die Reihenfolge ist wichtig: Was du hier findest, ist die <strong>Feinabstimmung</strong>. Wenn die feste Aufwachzeit, die Stimuluskontrolle und das Morgenlicht nicht stimmen, dann holt kein Tee und keine Kapsel das wieder rein.',
  dietWarn:'<strong>Bevor du irgendetwas einnimmst:</strong> Wenn du regelmäßig Medikamente nimmst, frag den Apotheker oder den Hausarzt. Auch Baldrian und Melatonin gehen Wechselwirkungen ein. In Schwangerschaft und Stillzeit nichts ohne ärztliche Zustimmung.',
  teaTag:'Tee und Getränke',
  teaH3:'Was, wann, warum',
  foodTag:'Ernährung',
  foodH3:'Wann du essen solltest, und die unerwartete Wendung',
  suppTag:'Vitamine und Nahrungsergänzung',
  suppH3:'Nach Evidenzlage geordnet',
  planTag:'Tagesplan',
  planH3:'Rückwärts gerechnet ab einer Schlafenszeit von 22:30 Uhr',
  sourcesEyebrow:'Quellen',
  modelBadge:'Veranschaulichendes Modell',
  cycEegSim:'Die Wellenform ist eine programmierte Simulation, keine Aufzeichnung einer realen Person. Ihre Form folgt zu Lehrzwecken den für die jeweilige Phase typischen Frequenzen.',
  cleanModel:'Die Animation ist ein vereinfachtes Modell, keine MRT-, Mikroskop- oder Live-Hirnmessung. Sie veranschaulicht eine in der Forschung vorgeschlagene Anordnung des Flüssigkeitsflusses.',
  sourcesLead:'Bei jeder Quelle siehst du, was untersucht wurde, was dabei herauskam und wie stark die Evidenz ist.',
  srcOpen:'Quelle öffnen',
  srcWhat:'Untersucht',
  srcResult:'Ergebnis',
  etAl:'et al.',
  scrollHint:'← Diagramm zur Seite ziehen →'
},

navMap:'Gedankenkarte',

branches:[
  {id:'ciklus',    title:'Schlafzyklus',       sub:['90-Minuten-Zyklen','EEG-Wellen']},
  {id:'ritmus',    title:'Zirkadianer Rhythmus',  sub:['Melatonin und Cortisol','wird vom Licht gestellt']},
  {id:'tisztitas', title:'Gehirnreinigung',      sub:['Arterie, Vene, Lymphe','Puls pumpt']},
  {id:'miert',     title:'Warum es wichtig ist',      sub:['Immunsystem','Krebsrisiko']},
  {id:'tippek',    title:'Besser schlafen',        sub:['Stimuluskontrolle','Licht und Temperatur']},
  {id:'relax',     title:'Abendliche Entspannung',    sub:['4-7-8-Atmung','mit Tonführung']},
  {id:'etrend',    title:'Tee, Essen, Vitamine',sub:['wann du essen und trinken solltest','Nahrungsergänzung']}
],

map:{center:'SCHLAF', sub:'~8 STUNDEN / NACHT'},

stages:{
  W:  {name:'Wachzustand',        desc:'Kurze Aufwachmomente sind normal — pro Nacht gibt es mehrere davon. Im EEG Beta und Alpha.'},
  REM:{name:'REM',             desc:'Das Gehirn arbeitet fast wie im Wachzustand, die Muskeln sind dagegen gelähmt. Träume, emotionale Verarbeitung, Sägezahnwellen.'},
  N1: {name:'N1 Einschlafen', desc:'Übergang zwischen Wachheit und Schlaf. Hier verschwindet das Alpha, und Theta kommt stattdessen.'},
  N2: {name:'N2 Leichtschlaf', desc:'Der größte Teil der Nacht. Auf Theta-Basis Schlafspindeln und K-Komplexe — die Spindeln festigen das Bewegungslernen.'},
  N3: {name:'N3 Tiefschlaf',    desc:'Deltawellen: langsam und riesig. Gedächtniskonsolidierung, Gewebereparatur und der Großteil der Gehirnreinigung.'}
},

hyp:{current:'AKTUELLE PHASE', minShort:'min', hourShort:'Std', nightIn:'die Nacht in {n} s'},

eeg:{
  winUnit:'Sekunden', secShort:'s', window:'{n} s Fenster',
  W:  {band:'Beta',                 hz:'13–30 Hz · wach, schnell, kleine Amplitude'},
  REM:{band:'Gemischt + Theta',       hz:'4–30 Hz · fast wie im Wachzustand, plus Sägezahn'},
  N1: {band:'Theta',                hz:'4–7 Hz · Alpha verschwindet, Theta kommt'},
  N2: {band:'Theta + Schlafspindeln', hz:'4–7 Hz als Basis, 11–16-Hz-Pakete und K-Komplex'},
  N3: {band:'Delta',                hz:'0,5–4 Hz · große Amplitude, langsam, synchron'}
},

waves:[
  {n:'Beta',        hz:'13–30 Hz',        when:'wach, konzentriert'},
  {n:'Alpha',        hz:'8–12 Hz',         when:'entspannter Wachzustand, geschlossene Augen'},
  {n:'Theta',       hz:'4–7 Hz',          when:'Einschlafen, N1 und N2'},
  {n:'Delta',       hz:'0,5–4 Hz',        when:'N3-Tiefschlaf'},
  {n:'Schlafspindel', hz:'11–16-Hz-Paket', when:'N2, Bewegungslernen'}
],

waveCards:[
  {t:'Beta — 13–30 Hz',p:'Im wachen, konzentrierten Zustand dominiert diese Welle. Viele kleine, schnelle Schwingungen: Viele kleine Gruppen der Hirnrinde arbeiten getrennt. Niedrige Amplitude, 5–20 µV. Wenn abends im Bett immer noch diese Welle läuft, ist das der Zustand „ich kann meinen Kopf nicht abschalten".'},
  {t:'Alpha — 8–12 Hz',p:'Entspannter Wachzustand, mit geschlossenen Augen, 20–60 µV. Das Tor zum Einschlafen: Wenn die Alphawelle anfängt zu zerfasern und auszusetzen, beginnt N1. Genau darauf zielen das langsame Ausatmen und der Körperscan.'},
  {t:'Theta — 4–7 Hz',p:'Einschlafen und Leichtschlaf, 50–100 µV. Hier bewegen sich schon mehr Nervenzellen gemeinsam. In dieser Phase treten die Fallgefühle und Muskelzuckungen auf.'},
  {t:'Delta — 0,5–4 Hz',p:'Die Wellen des Tiefschlafs: sehr langsam und sehr groß, bis zu 100–200 µV. Die gesamte Hirnrinde schaltet gemeinsam ein und aus. Das festigt die Faktenerinnerungen, und das bewegt die Hirnflüssigkeit für die Reinigung. Mit dem Alter nimmt dies als Erstes ab.'},
  {t:'Schlafspindel und K-Komplex',p:'Kein Frequenzband, sondern ein Ereignis. Die Spindel ist ein 11–16-Hz-Wellenpaket von einer halben bis einer Sekunde in N2 — sie festigt Bewegungsabläufe und schirmt das Gehirn gegen äußeren Lärm ab. Der K-Komplex ist ein großer, plötzlicher Ausschlag, oft als Reaktion auf Lärm: als würde das Gehirn entscheiden, „es lohnt sich nicht aufzuwachen".'},
  {t:'REM — der Täuscher',p:'Im EEG sieht REM fast wie Wachheit aus. Deshalb wurde er paradoxer Schlaf genannt. Zwei Dinge verraten ihn: die Augenbewegungen, und dass die Skelettmuskulatur vollständig gelähmt ist.'}
],

circ:{window:'SCHLAFFENSTER'},
circNotes:[
  'Cortisolspitze 30–45 Minuten nach dem Aufwachen. Das ist kein Stress, das ist der Weckruf. Das Morgenlicht verstärkt ihn und stellt die Uhr für den Abend vor.',
  'Melatonin ist bei null, Cortisol sinkt. Das schärfste Aufmerksamkeitsfenster des Tages.',
  'Nachmittagstief. Das Adenosin ist schon reichlich vorhanden, aber das Wachheitssignal der inneren Uhr hat seinen Höhepunkt noch nicht erreicht. Hier kommt das Kaffeeverlangen — aber die Hälfte des Nachmittagskaffees ist um Mitternacht noch in dir.',
  'Höhepunkt der Körperkerntemperatur und der körperlichen Leistungsfähigkeit. Das ist das beste Trainingsfenster, und es bleibt noch Zeit zum Abkühlen.',
  'Die Kerntemperatur beginnt zu sinken, das Cortisol steuert auf seinen Tiefpunkt zu. Ab hier zählt das Licht am meisten.',
  'Melatonin-Start (DLMO). Starkes Abendlicht kann ihn jetzt um Stunden verzögern.',
  'Melatonin auf dem Höhepunkt, Cortisol auf dem Tiefpunkt. Der Großteil des Tiefschlafs fällt hierhin, und mit ihm die Reinigung des Gehirns.',
  'Minimum der Körperkerntemperatur, etwa zwei Stunden vor dem natürlichen Aufwachen. Das Cortisol beginnt jetzt zu steigen.',
  'Das Melatonin klingt ab, das Cortisol steigt an, und die REM-Phasen sind jetzt am längsten.'
],

hormoneSteps:[
  {t:'Melatonin — das „es ist dunkel geworden"-Signal',p:'Kein Schlafmittel. Es stößt dich nicht in den Schlaf, sondern öffnet nur das Tor dazu: Es teilt dem Körper mit, dass die biologische Nacht eingetreten ist. Es beginnt 1–2 Stunden nach Sonnenuntergang zu steigen (DLMO), erreicht zwischen 2 und 4 Uhr nachts seinen Höhepunkt und fällt bis 7–8 Uhr morgens wieder ab. Den Befehl gibt die innere Uhr — die wiederum vom Licht gestellt wird, das über die Augen eintrifft.'},
  {t:'Cortisol — der Weckruf, nicht das Stresshormon',p:'Es hat seinen Tiefpunkt gegen Mitternacht, beginnt gegen 3 Uhr nachts zu steigen und erreicht 30–45 Minuten nach dem Aufwachen seinen Höhepunkt. Es mobilisiert den Blutzucker und den Kreislauf. Problematisch wird es, wenn abends etwas es hochtreibt: intensives Training, Streit, angespannte Arbeit, Koffein.'},
  {t:'Körperkerntemperatur — die stille Dritte',p:'Sie schwankt täglich um etwa 1 °C. Zwischen 16 und 19 Uhr ist sie am höchsten — dann ist auch die Muskelkraft am besten. Zwei Stunden vor dem natürlichen Aufwachen, gegen 4–5 Uhr morgens, liegt der Tiefpunkt. Das Einschlafen ist an diesen Abfall gekoppelt.'},
  {t:'Das Licht stellt alle drei',p:'In der Netzhaut sitzen eigene Sensoren, die auf den bläulichen Bereich abgestimmt sind und direkt an die innere Uhr melden. Morgenlicht: Die Uhr wird <strong>vorgestellt</strong>. Abendlicht: Sie <strong>verschiebt sich zurück</strong>. Das Tageslicht draußen ist selbst bei bewölktem Himmel um Größenordnungen stärker als Innenlicht.'},
  {t:'Zwei Systeme, nicht eines',p:'Das Einschlafen ist das Zusammentreffen zweier Dinge: der Schlafdruck durch das im Wachzustand angesammelte Adenosin, und das Wachheitssignal der inneren Uhr. Wenn die Uhr abends die Wachheit herunterfährt, während das Adenosin auf seinem Höhepunkt ist, kommt der Schlaf.'}
],

cleanSteps:[
  {t:'Tagsüber sammelt es sich',p:'Solange du wach bist, sammeln sich die Nebenprodukte der Neuronenaktivität im Raum zwischen den Zellen an: Amyloid-beta und Tau-Protein, Adenosin, Laktat. Das Adenosin ist es, das auch das Müdigkeitsgefühl erzeugt — Koffein blockiert genau dieses Signal.'},
  {t:'Beim Einschlafen öffnet sich der Raum',p:'Im Tiefschlaf weitet sich der Zwischenraum zwischen den Zellen, und der Kanal um die Blutgefäße wird breiter. Das ist der Schalter: dasselbe Gehirn, mit zwei völlig unterschiedlichen Durchlässigkeiten. In der Grafik siehst du das, wenn sich die Äste verdicken und einen Schein bekommen.'},
  {t:'Die langsame Welle pumpt',p:'Nach den Forschungsergebnissen bewegen sich die großen Deltawellen des Tiefschlafs gemeinsam mit der Flüssigkeit — nach heutiger Vorstellung ist dieses Pulsieren der Antrieb. In der Animation fegt jede Welle hindurch, und <strong>wo sie durchläuft, setzt sie den festsitzenden Abfall in Bewegung</strong>; an den Spitzen der Pulsanzeige unten links beschleunigt sich der Fluss. Wie groß dieser Effekt beim Menschen genau ist, wird noch erforscht.'},
  {t:'Rein über die Arterie, raus über die Vene',p:'Die frische Rückenmarksflüssigkeit strömt über den Kanal entlang der Arterien REIN (blau), spült den Raum zwischen den Zellen durch, nimmt den Abfall auf und strömt über den Kanal entlang der Venen RAUS (grün). Deshalb gibt es zwei getrennte Gefäßbäume mit entgegengesetzter Fließrichtung.'},
  {t:'Das Lymphgefäß bringt es zum Hals',p:'Die aus dem Gehirn austretende verschmutzte Flüssigkeit wird von den in der Hirnhaut verlaufenden Lymphgefäßen gesammelt und zu den <strong>Halslymphknoten</strong> geleitet, von wo sie in den Blut- und Lymphkreislauf gelangt. Im rosa Abschnitt sind die kleinen Pfeile die Klappen der Lymphgefäße — sie verhindern den Rückfluss. Dieses Netzwerk wurde erst 2015 in der Hirnhaut identifiziert.'}
],

brain:{
  legIn:'Arterie · Flüssigkeit REIN',
  legOut:'Vene · Flüssigkeit RAUS',
  legWaste:'weinroter Pixel · der Abfall',
  stateAsleep:'TIEFSCHLAF · der Raum offen',
  stateAwake:'WACHZUSTAND · der Raum eng',
  pumpOn:'LANGSAME WELLE · PUMPE',
  pumpOff:'OHNE PULS',
  pumpHintOn:'an der Spitze wird der Abfall freigesetzt',
  pumpHintOff:'wach bleibt der Abfall stecken',
  node:'HALSLYMPHKNOTEN',
  nodeSub:'von hier in den Blut- und Lymphkreislauf',
  vessel:'Lymphgefäß der Hirnhaut',
  countAsleep:'Zum Lymphknoten transportiert',
  countAwake:'Festsitzender Abfall',
  noteAsleep:'Die Kanäle öffnen sich. An jeder Spitze der Pulsanzeige werden die weinroten Abfall-Pixel stoßweise freigesetzt, gelangen auf die grüne Vene, wechseln dort zu Mintgrün (das zeigt, dass die Flüssigkeit sie bereits trägt), und gelangen über das rosa Lymphgefäß zum Halslymphknoten.',
  noteAwake:'Im Wachzustand sind die Kanäle eng, es gibt kaum Fluss, und es fehlt das Pulsieren, das ihn hinausdrängen würde. Der weinrote Abfall bleibt im Gewebe stecken, wo er entstanden ist.'
},

why:[
  {tag:'N3-Tiefschlaf',t:'Gedächtniskonsolidierung',p:'Die tagsüber gelernten Fakten wandern vom Hippocampus in den Langzeitspeicher. Das wird von den Deltawellen des Tiefschlafs gesteuert — und der Großteil des Tiefschlafs liegt in der ersten Nachthälfte. Wer spät zu Bett geht, aber gleich viel schläft, verliert dabei.'},
  {tag:'N2-Schlafspindeln',t:'Bewegungslernen',p:'Erlernte Bewegungsabläufe — von der Maschine bis zum Instrument — sind an die Schlafspindeln der N2-Phase gebunden, von denen die meisten in den letzten zwei Stunden auftreten. Wer morgens zwei Stunden abzwackt, schneidet genau das weg.'},
  {tag:'REM',t:'Emotionale Verarbeitung',p:'Während des REM-Schlafs bleiben die Erinnerungen erhalten, aber die daran haftende emotionale Ladung wird gedämpft. Dadurch wird ein schlechter Tag am nächsten Tag erträglicher. Nach Alkohol wird diese Phase am stärksten beeinträchtigt.'},
  {tag:'Glymphatisch',t:'Gehirnreinigung',p:'Der Großteil der Abfallproteine — darunter Amyloid-beta und Tau — wird während des Schlafs abtransportiert und gelangt über das Lymphsystem in den Kreislauf. Bei anhaltendem Schlafmangel reichern sie sich an.'},
  {tag:'Regeneration',t:'Wachstumshormon',p:'Der Großteil der täglichen Wachstumshormonausschüttung ist an die ersten Tiefschlafphasen der Nacht gebunden. Das ist verantwortlich für Gewebereparatur, Muskelregeneration und Knochenstoffwechsel. Deshalb fühlt sich der Tag nach schwerer körperlicher Arbeit viel schlechter an, wenn du wenig geschlafen hast.'},
  {tag:'Konsequenz',t:'Aufmerksamkeit und Reaktionszeit',p:'Nach vier bis fünf Stunden Schlaf verschlechtern sich Reaktionszeit und Aufmerksamkeitsspanne messbar, aber deine eigene Einschätzung deiner Leistung nicht — deshalb fühlst du dich in Ordnung, obwohl du es nicht bist. An einer Maschine ist das keine Kleinigkeit.'}
],

tipLabels:{why:'Warum', how:'Wie'},

immune:[
{t:'Natürliche Killerzellen — die erste Verteidigungslinie', ev:3, l1:'Messung', l2:'Was es bedeutet',
 w:'Bei 23 gesunden Männern fiel nach einer einzigen Nacht partiellen Schlafentzugs (kein Schlaf zwischen 3 und 7 Uhr morgens) die Tötungsfähigkeit der NK-Zellen im Schnitt auf <strong>72%</strong> ihres normalen Werts. Nach einer Nacht normalen Schlafs stellte sie sich wieder her. In einer Folgestudie mit 42 Personen sank nicht nur die NK-Aktivität, sondern auch die Interleukin-2-Produktion — und diese blieb selbst nach einer Nacht Erholung niedrig.',
 h:'Die NK-Zellen sind es, die virusinfizierte und entartete Zellen erkennen und töten, ohne den Erreger vorher kennenlernen zu müssen. Eine Nacht ist keine Tragödie, weil sich das wieder einpendelt — entscheidend ist, dass sich das System bei vier Wiederholungen pro Woche nie mehr auf das Ausgangsniveau zurückstellt.'},
{t:'Erkältung — das ist keine Korrelation, sondern ein Experiment', ev:3, l1:'Messung', l2:'Was es bedeutet',
 w:'Der Schlaf von 164 gesunden Freiwilligen wurde eine Woche lang mit einem am Handgelenk getragenen Bewegungssensor gemessen. Danach bekam jeder die gleiche Menge Rhinovirus in die Nase geträufelt. Wer <strong>weniger als 5 Stunden</strong> schlief, wurde mit 4,5-fach höherer Wahrscheinlichkeit tatsächlich krank als jemand, der mehr als 7 Stunden schlief. Bei 5–6 Stunden: 4,2-fach.',
 h:'Das ist die überzeugendste Form dieses Beweises, weil jeder die gleiche Virusdosis bekam. Die Frage ist nicht, ob du dich ansteckst, sondern ob dein Körper es aufhalten kann, bevor es Symptome zeigt.'},
{t:'Impfung — Schlaf als Wirkungsverstärker', ev:3, l1:'Messung', l2:'Was es bedeutet',
 w:'Eine Metaanalyse aus dem Jahr 2023 fasste die Daten mehrerer Studien zusammen. Wo der verkürzte Schlaf in den Tagen rund um die Impfung <em>gerätegemessen</em> war, zeigte sich ein deutlicher Antikörperrückgang (Effektgröße 0,79; Vertrauensbereich 0,40–1,18). Bei Männern war der Effekt groß, bei Frauen erreichte er keine Signifikanz. Die auf Selbstauskunft beruhenden Daten ergaben kein signifikantes Ergebnis — der gemessene Schlaf zählt, nicht das, was wir darüber denken.',
 h:'Wenn du zur Impfung gehst, schlaf in den umliegenden Nächten ordentlich. Das ist eines der einfachsten und kostenlosen Dinge, mit denen du die Wirksamkeit deiner eigenen Impfung steigern kannst.'},
{t:'Entzündung — der langsame Hintergrundprozess', ev:2, l1:'Messung', l2:'Was es bedeutet',
 w:'Bei anhaltendem Schlafmangel steigen die Werte von IL-6, TNF-alpha und CRP. Das sind Marker für eine chronische, niedriggradige Entzündung — dieselbe Entzündung, die den gemeinsamen Hintergrund von Herz-Kreislauf-Erkrankungen und Insulinresistenz bildet.',
 h:'Das ist kein spürbares Symptom, sondern eine über Jahre wachsende Belastung. Deshalb kannst du nicht erspüren, ob dein Schlaf ausreicht.'}
],

cancer:[
{t:'Was die WHO-Behörde festgestellt hat', ev:2, l1:'Fakt', l2:'Einschränkung',
 w:'Die der WHO unterstellte IARC stufte 2019 <strong>Nachtschichtarbeit</strong> als „wahrscheinlich krebserregend für den Menschen" (Gruppe 2A) ein. Definition: mindestens 3 Stunden Arbeit zwischen Mitternacht und 5 Uhr morgens. Grundlage: <em>ausreichende</em> Evidenz aus Tierversuchen und <em>starke</em> mechanistische Evidenz.',
 h:'Die Einstufung bedeutet nicht, dass Nachtarbeit Krebs verursacht. 2A bedeutet: wahrscheinlich, aber die epidemiologische Evidenz beim Menschen ist <em>begrenzt</em>. In derselben Kategorie befindet sich zum Beispiel auch der Verzehr von rotem Fleisch.'},
{t:'Die Daten beim Menschen sind gemischt', ev:2, l1:'Fakt', l2:'Einschränkung',
 w:'Eine Metaanalyse mit 26 Studien und 1,3 Millionen Teilnehmern fand bei denen, die <em>weniger</em> als 10 Jahre nachts arbeiteten, ein um 13% höheres Brustkrebsrisiko (RR 1,13). Bei der Gruppe mit mehr als 10 Jahren war das Ergebnis nicht mehr signifikant. Eine Aktualisierung aus 2024–2025 fand in Kohortenstudien stellenweise sogar die entgegengesetzte Richtung.',
 h:'Das ist das typische Bild eines realen, aber kleinen Effekts, bei dem die Messung verrauscht ist. Man sollte ihn weder abtun noch als Katastrophe behandeln.'},
{t:'Der vermutete Mechanismus', ev:2, l1:'Fakt', l2:'Einschränkung',
 w:'Vier Stränge laufen zusammen: künstliches Abendlicht unterdrückt das Melatonin; die innere Uhr gerät durcheinander, und mit ihr die vielen Tausend Gene, die im Tagesrhythmus arbeiten; die NK-Aktivität sinkt; und der Tagesrhythmus der Zellteilung gerät aus dem Gleichgewicht, was auch das Timing der DNA-Reparatur betrifft.',
 h:'Im Labor stark, beim Menschen schwer messbar. Es zeigt aber, wo man ansetzen kann: über das Licht und das Timing der Mahlzeiten.'},
{t:'Was man daraus mitnehmen sollte', ev:3, l1:'Fakt', l2:'Einschränkung',
 w:'Nicht, dass „schlechter Schlaf Krebs verursacht". Sondern, dass Schlaf und die innere Uhr eine Grundvoraussetzung für die Funktion des Immunsystems sind, dass dies experimentell messbar ist und der Effekt <strong>umkehrbar</strong> ist: Die NK-Aktivität stellt sich nach einer Nacht Schlaf wieder her, die Impfantwort lässt sich verbessern, die Entzündungsmarker sinken.',
 h:'Die richtige Lesart ist nicht Angst, sondern dass dies eine der Maßnahmen mit dem besten Ertrag ist, weil sie kostenlos ist und alle anderen Systeme mitbeeinflusst.'}
],

harm:[
{t:'Nach einer Nacht', ev:3, l1:'Was sich verschlechtert', l2:'Was du tun solltest',
 w:'Reaktionszeit und Aufmerksamkeitsspanne verschlechtern sich messbar, die Stimmung wird labiler, die Schmerzempfindlichkeit steigt, die NK-Aktivität sinkt. Am tückischsten: Deine eigene Einschätzung <em>deiner</em> Leistung verschlechtert sich dabei nicht mit.',
 h:'Triff an diesem Tag keine großen Entscheidungen, und rechne an der Maschine damit. Wenn möglich, ein 20-minütiges Nickerchen am frühen Nachmittag — aber nicht mehr nach 15 Uhr. Versuch nicht, es mit Kaffee zu lösen: Der verdeckt das Signal, ersetzt aber nicht den Schlaf.'},
{t:'Nach ein bis zwei Wochen', ev:2, l1:'Was sich verschlechtert', l2:'Was du tun solltest',
 w:'Infektionen der oberen Atemwege werden häufiger, die Impfantwort schwächt sich ab, die Glukosetoleranz verschlechtert sich, und auch die Appetitregulation gerät aus dem Takt: Ghrelin steigt, Leptin sinkt. Der auf Kosten des Tiefschlafs gehende Schlafmangel bremst auch das Wachstumshormon.',
 h:'Hier reicht eine gute Nacht nicht mehr aus. Du musst zur festen Aufwachzeit und zum Morgenlicht zurückkehren und zwei Wochen durchziehen.'},
{t:'Über Monate und Jahre', ev:2, l1:'Was sich verschlechtert', l2:'Was du tun solltest',
 w:'Erhöhtes Herz-Kreislauf-Risiko, eine Verschiebung Richtung Insulinresistenz, dauerhaft höhere Entzündungsmarker und die Anhäufung von Abfallproteinen im Gehirn. Diese treten nicht plötzlich auf, und man spürt sie auch nicht rechtzeitig.',
 h:'Wenn du hier angekommen bist, ist das Wichtigste, eine Schlafapnoe auszuschließen, denn die allein reicht schon für dieses Bild aus und wird ganz anders behandelt. Danach CBT-I, kein Schlafmittel.'}
],

core:[
{t:'Feste Aufwachzeit, auch am Wochenende',
 w:'Das Aufwachen verankert die innere Uhr, nicht das Zubettgehen. Der eigene Zyklus der Uhr ist etwas länger als 24 Stunden, deshalb muss sie täglich neu gestellt werden. Wenn du am Wochenende zwei Stunden verschiebst, ist das für deine Uhr, als wärst du über zwei Zeitzonen geflogen: Am Montag startest du mit sozialem Jetlag.',
 h:'Wähl die früheste Aufwachzeit deiner Wochentage, und halte dich auch am Wochenende innerhalb einer halben Stunde davon. Wenn der Schlaf zu kurz war, geh lieber früher ins Bett, statt später aufzustehen.'},
{t:'Das Bett nur zum Schlafen — Stimuluskontrolle',
 w:'Wenn du dich im Bett hin- und herwälzt, dir Sorgen machst oder am Handy bist, lernt das Gehirn die Verknüpfung „Bett = Wachheit". Das ist ein bedingter Reflex, der sich innerhalb weniger Wochen ausbildet. Die Stimuluskontrolle hebt das auf und ist eine der stärksten eigenständigen Komponenten der CBT-I.',
 h:'Wenn du nach etwa 20 Minuten nicht eingeschlafen bist, steh auf. Schau nicht auf die Uhr, schätze. Geh in einen anderen Raum, Halbdunkel, lies etwas Langweiliges. Geh erst zurück, wenn du wirklich müde bist — und wiederhole das beliebig oft.'},
{t:'Schlafrestriktion',
 w:'Wenn du neun Stunden im Bett liegst, um sechs zu schlafen, machen die drei wach verbrachten Stunden das Bett zu einem Ort der Wachheit und zerstückeln den Schlaf. Wenn du die im Bett verbrachte Zeit auf die tatsächliche Schlafzeit beschränkst, steigt der Schlafdruck, und der Schlaf verdichtet sich.',
 h:'Führ eine Woche lang ein Schlaftagebuch. Stell die im Bett verbrachte Zeit auf die durchschnittliche tatsächliche Schlafzeit ein, aber geh nie unter 5,5 Stunden. Die Aufwachzeit bleibt fest, das Zubettgehen verschiebst du nach hinten. Wenn die Schlafeffizienz eine Woche lang über 90% liegt, verlängere um 15 Minuten.'},
{t:'Morgenlicht, bald nach dem Aufwachen',
 w:'In der Netzhaut sitzen eigene Sinneszellen, die direkt an die innere Uhr melden. Das Morgenlicht stoppt das restliche Melatonin, treibt das Cortisol auf den normalen Aufwach-Höhepunkt und stellt die Uhr vor. Die Wirkung ist nicht sofort spürbar: Sie zeigt sich am Abend.',
 h:'10–20 Minuten draußen, bei bewölktem Wetter eher 30–40. Durch ein Fenster kommt nur ein Bruchteil des Lichts durch, geh also wirklich hinaus. Ohne Sonnenbrille, aber schau nicht in die Sonne.'},
{t:'Kühles Schlafzimmer, 16–19 °C',
 w:'Zum Einschlafen muss die Körperkerntemperatur um etwa 1 °C fallen, und das geschieht dadurch, dass sich die Blutgefäße in Händen und Füßen erweitern und die Wärme abgeben. In einem zu warmen Zimmer gibt es nirgendwohin abzugeben.',
 h:'16–19 °C, und reguliere lieber mit der Decke. Wenn dir an den Füßen kalt ist, zieh Socken an — paradoxerweise hilft das, weil sich dadurch die Gefäße erweitern und die Wärme besser abfließt.'}
],

extra:[
{t:'Koffein: letzte Dosis 8–10 Stunden vor dem Schlafengehen',
 w:'Koffein blockiert die Adenosinrezeptoren. Es lässt das Adenosin nicht verschwinden, sondern verdeckt nur sein Signal — und wenn es abgebaut ist, schlägt das angesammelte Adenosin auf einmal zu. Die Halbwertszeit beträgt 5–6 Stunden: Von einem um 15 Uhr getrunkenen Kaffee ist um 21 Uhr noch die Hälfte in dir. Die häufigste Folge ist nicht das Einschlafen, sondern dass du weniger Tiefschlaf bekommst.',
 h:'Zieh die Grenze etwa 10 Stunden vor dem Schlafengehen. Achte auf versteckte Quellen: Energydrinks, grüner Tee, Zartbitterschokolade, manche Schmerzmittel.'},
{t:'Alkohol ist kein Schlaf',
 w:'Er wirkt beruhigend, deshalb schläfst du schneller ein — aber der dadurch entstehende Zustand ist kein natürlicher Schlaf. Er unterdrückt den REM in der ersten Hälfte, und wenn er abgebaut wird, folgt eine zerstückelte, oberflächliche zweite Hälfte mit vielen Mikroerwachungen.',
 h:'Wenn du trinkst, lass mindestens 3–4 Stunden bis zum Schlafengehen, und trink Wasser dazu. Probier zwei Wochen ohne, und vergleiche.'},
{t:'Warme Dusche oder Bad 1–2 Stunden vor dem Schlafengehen',
 w:'Nicht das Aufwärmen ist der Punkt, sondern das, was danach kommt: Das warme Wasser weitet die Hautgefäße, und beim Herausgehen gibt der Körper die Wärme effizienter ab — dadurch sinkt die Kerntemperatur schneller.',
 h:'10–15 Minuten warmes, nicht heißes Wasser. Wannenbad, Dusche, sogar ein Fußbad funktioniert.'},
{t:'Abends schwaches, tief sitzendes Licht',
 w:'Die Uhr-Sensoren der Netzhaut reagieren am stärksten auf bläuliches Licht von oben. Starke Deckenbeleuchtung am Abend signalisiert, dass noch Tag ist, und verzögert den Start des Melatonins.',
 h:'Schalte nach Sonnenuntergang die Deckenlampe aus, benutz Lampen unterhalb der Augenhöhe mit warmem Licht. Das Licht im Raum ist der größere Faktor, nicht der Bildschirm.'},
{t:'Bewegung ja, aber nicht direkt vor dem Schlafengehen',
 w:'Regelmäßige Bewegung tagsüber vertieft den Tiefschlaf. Intensives Training treibt hingegen die Körperkerntemperatur hoch, die eigentlich sinken sollte, und hebt den Cortisolspiegel, der abends auf seinem Tiefpunkt sein sollte.',
 h:'Intensives Training spätestens 2–3 Stunden vor dem Schlafengehen. Spätabends nur noch Dehnen, Spazieren, leichtes Yoga.'},
{t:'Großes Abendessen und viel Flüssigkeit vor dem Schlafengehen',
 w:'Die Verdauung treibt die Körpertemperatur und den Stoffwechsel hoch, genau dann, wenn die Kerntemperatur sinken sollte. Im Liegen kann dich auch Sodbrennen wecken.',
 h:'Die letzte größere Mahlzeit 3 Stunden vor dem Schlafengehen. Verlager die Flüssigkeitsaufnahme in die erste Tageshälfte.'},
{t:'Schreib auf, was dir im Kopf herumgeht',
 w:'Im Kopf gehaltene unerledigte Aufgaben halten die Wachheit aufrecht: Das Gehirn lässt nicht los, was keinen sicheren Platz hat.',
 h:'10 Minuten vor dem Schlafengehen: die Aufgabenliste für morgen auf Papier, nicht ins Handy.'}
],

tea:[
{t:'Kamille — damit fängst du an', ev:2,
 w:'Das in der Kamille enthaltene Apigenin bindet an dieselben GABA-A-Rezeptoren, an denen auch Beruhigungsmittel wirken, nur sehr schwach. In einer randomisierten Studie verbesserte zwei Wochen Kamillentee messbar die Schlafqualität. Das Ritual selbst ist bereits ein Signal: die warme Tasse, das Halbdunkel und das Herunterfahren lehren gemeinsam das Gehirn.',
 h:'Eine Tasse, 60–90 Minuten vor dem Schlafengehen. Mit etwa 90 Grad heißem Wasser, und leg den Deckel für 5–7 Minuten drauf — so bleiben die ätherischen Öle im Tee. Kein Zucker, höchstens etwas Honig.'},
{t:'Baldrian — stärker, aber langsamer', ev:2,
 w:'Die Valeriansäure erhöht die Verfügbarkeit von GABA. Laut einer Übersichtsarbeit aus 2024 haben Baldrian, Hopfen und Melatonin die meisten unterstützenden Daten. Dafür braucht es 2–4 Wochen regelmäßige Anwendung.',
 h:'Abends eine Tasse, oder gemischt mit Hopfen. Wenn du auch Beruhigungsmittel, Antidepressiva oder Alkohol nimmst, sprich vorher mit dem Apotheker.'},
{t:'Passionsblume und Melisse', ev:1,
 w:'Die angstlösende Wirkung der Passionsblume liegt auf einer Stufe mit der der Kamille, brachte aber in kleinen Studien auch weniger nächtliches Erwachen. Die Melisse schützt dein eigenes GABA vor dem Abbau.',
 h:'Eine gute Wahl, wenn nicht das Einschlafen, sondern das Aufwachen um 3 Uhr nachts dein Problem ist.'},
{t:'Sauerkirschsaft (Montmorency) — vorsichtiges Ja', ev:1,
 w:'Er enthält natürliches Melatonin, aber wenig. Der wahrscheinlichere Weg sind die entzündungshemmenden Anthocyane. Laut einer Übersichtsarbeit aus 2023 verbessert er die Schlafeffizienz — aber die Studien sind klein und ein großer Teil davon industriefinanziert.',
 h:'Etwa 240 ml. Nachteil ist der Zuckergehalt, bei Diabetes ausdrücklich nicht.'},
{t:'Was du abends meiden solltest', ev:3,
 w:'Sowohl grüner als auch schwarzer Tee enthalten Koffein — grüner weniger, aber nicht null, und die Halbwertszeit ist dieselbe.',
 h:'Nach Sonnenuntergang nur koffeinfreien Kräutertee, in maßvoller Menge.'}
],

food:[
{t:'Die unerwartete Wendung: Tryptophan zählt beim FRÜHSTÜCK', ev:2,
 w:'Melatonin wird aus Tryptophan hergestellt, über Serotonin. Laut japanischen Studien erhöhte ein tryptophanreiches <em>Frühstück</em> plus starkes Morgenlicht plus schwaches Abendlicht messbar den abendlichen Melatoninspiegel. Beim Abendessen aufgenommenes Tryptophan zeigte diesen Effekt nicht: Für die Synthese braucht es Zeit und Tageslicht.',
 h:'Zum Frühstück: Eier, Quark oder Joghurt, Haferbrei, Kürbiskerne, Käse, Banane. Und geh danach für 10–20 Minuten ins Licht.'},
{t:'Die letzte große Mahlzeit 3 Stunden vor dem Schlafengehen', ev:2,
 w:'Die Verdauung treibt die Körpertemperatur und den Stoffwechsel hoch, genau dann, wenn die Kerntemperatur sinken sollte. Im Liegen fließt auch die Magensäure leichter zurück.',
 h:'Bei einer Schlafenszeit um 22:30 Uhr Abendessen gegen 19:00 Uhr. Abends kein fettiges, sehr scharfes oder proteinreiches Abendessen.'},
{t:'Wenn du hungrig nicht schlafen kannst', ev:1,
 w:'Auch ein leerer Magen ist ein Wecksignal. Außerdem gelangt Tryptophan am besten ins Gehirn, wenn auch etwas Kohlenhydrate dabei sind.',
 h:'Eine halbe Scheibe Vollkornbrot, etwas Naturjoghurt, ein paar Mandeln oder eine kleine Banane. Unter zweihundert Kalorien.'},
{t:'Worauf du bei der Ernährung achten solltest', ev:2,
 w:'Magnesium, Vitamin B6 und Zink werden alle für den Serotonin-Melatonin-Weg gebraucht. Wenn sie aus der Ernährung kommen, gibt es keinen Grund für Kapseln.',
 h:'Magnesium: Kürbiskerne, Mandeln, Spinat, schwarze Bohnen, Zartbitterschokolade. B6: Fisch, Hähnchen, Kartoffeln, Banane. Zink: Fleisch, Kürbiskerne, Hülsenfrüchte.'}
],

supp:[
{t:'Magnesium', ev:2, l1:'Evidenz', l2:'Wie',
 w:'Unterstützt die GABA-Funktion. Die Evidenz ist mittelmäßig: Die Studien sind klein, und die Wirkung tritt vor allem dann ein, wenn ohnehin ein Mangel besteht.',
 h:'200–400 mg elementares Magnesium, 30–60 Minuten vor dem Schlafengehen. Glycinat oder Citrat — Oxid wird schlecht aufgenommen. Über 350 mg kann Durchfall auftreten.'},
{t:'Glycin', ev:2, l1:'Evidenz', l2:'Wie',
 w:'Glycin beruhigt nicht, sondern <em>kühlt</em>: Es weitet die Gefäße in Händen und Füßen, sodass die Körperkerntemperatur schneller sinkt. Es macht dasselbe wie ein warmes Bad, nur von innen. Der ehrliche Teil: Es gibt wenige und kleine Studien, mehrere davon von glycinherstellenden Firmen — Nebenwirkungen wurden allerdings keine gefunden.',
 h:'3 g, 30–60 Minuten vor dem Schlafengehen. Keine Megadosis: Aus der Ernährung kommen ohnehin schon etwa 2 g täglich. Wenn du nach 1–2 Wochen nichts merkst, lass es sein.'},
{t:'L-Theanin', ev:2, l1:'Evidenz', l2:'Wie',
 w:'Die beruhigende Aminosäure des grünen Tees. Sie macht nicht müde, sondern nimmt dem Gedankenkarussell die Schärfe. Schon in der ersten Nacht spürbar.',
 h:'200 mg vor dem Schlafengehen. Verträgt sich gut mit Magnesium.'},
{t:'Melatonin — die stärkste Evidenz, die meisten Missverständnisse', ev:3, l1:'Evidenz', l2:'Wie',
 w:'Kein Schlafmittel, sondern ein Uhrsteller. Deshalb ist das <strong>Timing wichtiger als die Dosis</strong>. Wofür es gut ist: Zeitzonenwechsel, Schichtwechsel, das Zurückschieben eines verschobenen Rhythmus. Wofür weniger: chronische Schlaflosigkeit.',
 h:'0,3–0,5 mg, 1–3 Stunden VOR dem Schlafengehen. Die im Handel erhältlichen 3–10-mg-Tabletten sind grob überdosiert. Wenn du nur große hast, teile sie. Nimm es nicht über Monate hinweg.'},
{t:'Vitamin D — nicht ohne Messung', ev:1, l1:'Evidenz', l2:'Wie',
 w:'Ein Mangel geht mit schlechterem Schlaf einher, aber das heißt nicht, dass eine Supplementierung bei jedem hilft. Das ist das einzige auf der Liste, bei dem eine Überdosierung echten Schaden anrichtet.',
 h:'Lass eine Blutabnahme machen (25-OH-D), und stell die Dosis danach ein. Nimm es morgens oder mittags zu einer Mahlzeit ein.'},
{t:'Was du lieber lassen solltest', ev:1, l1:'Evidenz', l2:'Wie',
 w:'Hochdosiertes B6 kann langfristig Nervenschäden verursachen. Ashwagandha ist wegen Leberproblemen umstritten. Rezeptfreie Schlafmittel auf Antihistamin-Basis werden schnell toleriert.',
 h:'Wenn du nach drei Monaten immer noch jede Nacht etwas brauchst, ist das eine medizinische Frage. Schlafapnoe wird anders behandelt.'}
],

dayplan:[
  ['Aufwachen','<b>Licht, sofort.</b> 10–20 Minuten draußen. Falls vorhanden, Vitamin D zu einer Mahlzeit.'],
  ['+30 Min','<b>Tryptophanreiches Frühstück:</b> Eier, Quark, Hafer, Kürbiskerne.'],
  ['−10 Std','<b>Letztes Koffein.</b> Bei einer Schlafenszeit um 22:30 Uhr gegen 12:30 Uhr.'],
  ['−7,5 Std','<b>Trainingsfenster</b> öffnet sich: Zwischen 15 und 19 Uhr ist die Muskelkraft am besten.'],
  ['−3,5 Std','<b>Letzte große Mahlzeit.</b> Nicht fettig, keine große Proteinportion.'],
  ['−2,5 Std','<b>Ende des intensiven Trainings.</b> Ab jetzt nur noch Spazieren, Dehnen.'],
  ['−1,5 Std','<b>Lichter runter.</b> Deckenlampe aus, Stehlampe mit warmem Licht. Tee auf.'],
  ['−1 Std','<b>Nahrungsergänzung:</b> Magnesium und Glycin. Melatonin früher.'],
  ['−1 Std','<b>Warme Dusche</b> 10–15 Minuten.'],
  ['−30 Min','<b>Aufschreiben</b> auf Papier, danach Entspannung mit Ton.'],
  ['Schlafengehen','<b>Kühles, dunkles, stilles Zimmer</b>, 16–19 °C.']
],

breath:[
  {label:'Einatmen durch die Nase', say:'Atme durch die Nase ein.'},
  {label:'Halte an',         say:'Halte die Luft an.'},
  {label:'Langsam ausatmen',      say:'Atme langsam durch den Mund aus.'}
],

pmr:{
  tense:'ANSPANNEN.',
  release:'LOSLASSEN.',
  releaseTxt:'Beobachte einfach, wie die Spannung nachlässt und du ins Bett einsinkst.',
  sayTense:'{title}. Anspannen. {how}',
  sayRelease:'Lass los. Beobachte, wie die Spannung nachlässt.',
  doneTitle:'Fertig.',
  doneTxt:'Bleib noch eine Minute reglos liegen, bevor du irgendetwas tust.',
  sayDone:'Fertig. Bleib noch eine Minute reglos liegen.',
  stopped:'Gestoppt. Start beginnt wieder von vorne.',
  steps:[
    ['labfej','Fuß und Zehen','Kräusel die Zehen ein, spann das Fußgewölbe an.'],
    ['labszar','Wade','Zieh den Fuß zu dir heran, sodass sich die Wade anspannt.'],
    ['comb','Oberschenkel','Drück das Knie nach unten, spann den Oberschenkelmuskel an.'],
    ['csipo','Hüfte und Gesäß','Press die Gesäßmuskeln zusammen.'],
    ['has','Bauch','Zieh die Bauchdecke ein, als würdest du einen Schlag erwarten.'],
    ['mellkas','Brust und Rücken','Atme tief ein, und halt die Luft an, während sich die Brust spannt.'],
    ['kez','Hand','Ball beide Hände zur Faust, so fest, wie es angenehm ist.'],
    ['kar','Arm','Spann Unterarm und Oberarm an, als würdest du etwas ziehen.'],
    ['vall','Schulter und Nacken','Zieh die Schultern zu den Ohren hoch, halt sie dort.'],
    ['arc','Gesicht','Press die Kiefer zusammen, kneif die Augen zu, runzel die Stirn.']
  ]
},

scan:{
  ready:'Bereit zum Start. {n} Sekunden pro Körperteil.',
  sayIntro:'Leg dich bequem hin, schließ die Augen, und achte auf das, was ich sage.',
  doneTitle:'Fertig.',
  doneTxt:'Wenn du noch wach bist, bleib so liegen, und lass den Schlaf von selbst kommen.',
  sayDone:'Fertig. Wenn du noch wach bist, bleib so liegen, und lass den Schlaf von selbst kommen.',
  stopped:'Gestoppt. Start setzt dort fort, wo du aufgehört hast.',
  steps:[
    ['labfej','Füße','Fang hier an. Warm? Kühl? Kribbeln? Nichts? Jede Antwort ist richtig.'],
    ['labszar','Waden und Unterschenkel','Lass zu, dass deine Beine mit ihrem ganzen Gewicht ins Bett einsinken.'],
    ['comb','Oberschenkel','Die großen Muskeln hier halten die meiste restliche Spannung.'],
    ['csipo','Hüfte','Achte darauf, wo der Körper sich gegen das Bett drückt.'],
    ['has','Bauch','Verfolge, wie sich die Bauchdecke mit der Atmung hebt und senkt.'],
    ['mellkas','Brust und Rücken','Steuere die Atmung nicht, schau nur zu, wie sie von selbst geht.'],
    ['kez','Hände','Handfläche und Finger — hier ist meist das meiste Kribbeln.'],
    ['kar','Arme','Lass beim Weitergehen zur Schulter jede restliche Anspannung los.'],
    ['vall','Schultern und Nacken','Hier sammelt sich meistens die Anspannung des Tages.'],
    ['arc','Gesicht und Stirn','Kiefer, Augenpartie, Stirn. Lass die Kaumuskeln los.']
  ]
},

tts:{
  unsupported:'Dein Browser kann nicht sprechen.',
  found:'Stimme: {name}',
  missing:'Für diese Sprache ist keine Stimme installiert — es wird die Standardstimme des Systems verwendet. Unter Windows: Einstellungen → Zeit und Sprache → Sprache und Region → Sprachpaket installieren.',
  enabled:'Ton eingeschaltet. Du kannst auch mit geschlossenen Augen folgen.'
}
,

evLegend:{k:'Evidenz', l1:'Begrenzt', l2:'Gut', l3:'Stark'},

srcTypes:{exp:'Experiment', trial:'experimentelle Studie', meta:'Metaanalyse', review:'Übersichtsarbeit', cross:'Cross-over-Studie', class:'Experten-Einstufung'},

srcInfo:{
  irwin94:{q:'Bei 23 gesunden Männern wurde der Schlaf für eine einzige Nacht verkürzt (zwischen 3 und 7 Uhr kein Schlaf).',
           r:'Die Tötungsfähigkeit der natürlichen Killerzellen sank auf 72% ihres eigenen Normalwerts und kehrte nach einer Nacht normalen Schlafs zurück.'},
  prather15:{q:'Der Schlaf von 164 Freiwilligen wurde eine Woche lang mit einem Bewegungssensor am Handgelenk gemessen, danach bekamen alle dieselbe Menge Rhinoviren in die Nase.',
           r:'Wer weniger als 5 Stunden schlief, wurde 4,5-mal wahrscheinlicher tatsächlich krank als wer mehr als 7 Stunden schlief. Die Unsicherheit ist groß: 1,08–18,69.'},
  spiegel23:{q:'Fasste Daten mehrerer Studien dazu zusammen, wie der Schlaf in den Tagen rund um die Impfung mit der Antikörperantwort zusammenhängt.',
           r:'Bei gerätegemessenem kurzem Schlaf zeigte sich ein deutlicher Antikörperrückgang (Effektgröße 0,79; 0,40–1,18). Bei Männern großer Effekt, bei Frauen nicht signifikant. Aus Selbstauskunft ergab sich nichts.'},
  iarc19:{q:'Ein Expertengremium bewertete den Zusammenhang zwischen Nachtschichtarbeit und Krebserkrankungen.',
           r:'Einstufung als „wahrscheinlich krebserregend für den Menschen“ (2A). Die epidemiologische Evidenz beim Menschen ist begrenzt — die Einstufung bedeutet nicht, dass Nachtarbeit Krebs verursacht.'},
  manouchehri21:{q:'Fasste 26 Studien mit insgesamt 1.313.348 Teilnehmerinnen zur Dauer der Nachtschicht und zum Brustkrebsrisiko zusammen.',
           r:'Bei weniger als 10 Jahren Nachtarbeit ein um 13% höheres Risiko (RR 1,13). Bei mehr als 10 Jahren war das Ergebnis nicht mehr signifikant (RR 1,08).'},
  benedict20:{q:'Das Blutplasma von 15 gesunden jungen Männern wurde nach normalem Schlaf und nach einer durchwachten Nacht gemessen.',
           r:'Nach der durchwachten Nacht stieg das Tau-Protein (+17,2% gegenüber +1,8% nach normalem Schlaf). Bei den übrigen Markern kein Unterschied. Eine kleine, explorative Studie.'},
  louveau17:{q:'Übersichtsarbeit zum glymphatischen System und zu den Lymphgefäßen in der Hirnhaut.',
           r:'Fasst zusammen, wie Flüssigkeit und Abfall aus dem Zentralnervensystem zu den Halslymphknoten abfließen — und benennt, was noch offen ist.'},
  xu26:{q:'Übersichtsarbeit zur Rolle des glymphatischen Systems während des Schlafs.',
           r:'Das System ist im Schlaf aktiver und im Wachzustand weitgehend ruhig. Die genauen molekularen Mechanismen bleiben weiterer Forschung überlassen.'},
  harding19:{q:'Übersichtsarbeit zum Zusammenhang von Körpertemperatur und Schlaf.',
           r:'Das Einschlafen ist an das Absinken der Kerntemperatur gebunden; Wärmeregulation und Schlafregulation hängen eng zusammen.'},
  cbti24:{q:'Übersichtsarbeit zu den Bestandteilen der kognitiven Verhaltenstherapie bei Insomnie (CBT-I).',
           r:'CBT-I ist die Erstlinienbehandlung bei chronischer Insomnie; ihr Kern sind Stimuluskontrolle und Schlafrestriktion.'},
  supp24:{q:'Übersichtsarbeit zu Heilpflanzen und Nahrungsergänzungsmitteln für den Schlaf.',
           r:'Die meisten unterstützenden Daten gibt es für Melatonin, Baldrian und Hopfen. Die meisten Studien sind klein, die Evidenz ist begrenzt.'}
}
};
