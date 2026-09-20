// ============================================================
// DADES: Traduccions de la interfície i contingut de seccions
// ============================================================
// Estructura de cada entrada:
//   'clau': { ca: '...', es: '...', en: '...', fr: '...' }
//
// Regla: cap cadena pot ser buida. Si una traducció falta,
// `traduir()` farà fallback al català (IDIOMA_PER_DEFECTE).
//
// IMPORTANT: el nom del poble NO ha d'aparèixer mai en cap
// text traduït. El nom és una única constant (`POBLE`) definida
// a funcions.js, i s'aplica dinàmicament als elements que el
// mostren (capçalera, títol de pestanya, peu de menú).
// ============================================================


// ============================================================
// SECCIÓ: Textos fixos de la interfície d'usuari (UI)
// Responsabilitat: botons, etiquetes, missatges d'estat
// ============================================================

/**
 * Textos invariables de la UI: botons, etiquetes i missatges.
 * S'actualitzen automàticament en canviar d'idioma via
 * `actualitzarTextosDinamics()` de funcions.js.
 *
 * @type {Object.<string, {ca: string, es: string, en: string, fr: string}>}
 */
const UI = {

    // --- Capçalera i navegació general ---
    'titol-app':            { ca: 'Guia de Patrimoni',           es: 'Guía de Patrimonio',              en: 'Heritage Guide',              fr: 'Guide du Patrimoine' },
    'obrir-menu':           { ca: 'Obrir menú',                  es: 'Abrir menú',                      en: 'Open menu',                   fr: 'Ouvrir le menu'      },
    'tancar-menu':          { ca: 'Tancar menú',                 es: 'Cerrar menú',                     en: 'Close menu',                  fr: 'Fermer le menu'      },
    'tornar':               { ca: 'Tornar',                      es: 'Volver',                          en: 'Back',                        fr: 'Retour'              },

    // --- Mapa principal ---
    'mapa-poble-label':     { ca: 'Mapa interactiu del poble',
                              es: 'Mapa interactivo del pueblo',
                              en: 'Interactive map of the town',
                              fr: 'Carte interactive du village' },
    'instruccio-mapa':      { ca: 'Toca una zona per explorar-la',
                              es: 'Toca una zona para explorarla',
                              en: 'Tap a zone to explore it',
                              fr: 'Touchez une zone pour l\'explorer' },

    // --- Filtre d'estrelles (zona.html) ---
    'filtre-estrelles':     { ca: 'Filtrar per rellevància',
                              es: 'Filtrar por relevancia',
                              en: 'Filter by relevance',
                              fr: 'Filtrer par pertinence' },
    'filtre-tots':          { ca: 'Tots',                        es: 'Todos',                           en: 'All',                         fr: 'Tous'                },
    'filtre-una-estrella':  { ca: 'Recomanats',                  es: 'Recomendados',                    en: 'Recommended',                 fr: 'Recommandés'         },
    'filtre-dues-estrelles':{ ca: 'Destacats',                   es: 'Destacados',                      en: 'Featured',                    fr: 'À découvrir'         },
    'filtre-tres-estrelles':{ ca: 'Imprescindibles',             es: 'Imprescindibles',                 en: 'Must-see',                    fr: 'Incontournables'     },

    // --- Fitxa de punt d'interès (punt-interes.html) ---
    'any-construccio':      { ca: 'Any:',                        es: 'Año:',                            en: 'Year:',                       fr: 'Année :'             },
    'estil-arquitectonic':  { ca: 'Estil:',                      es: 'Estilo:',                         en: 'Style:',                      fr: 'Style :'             },
    'direccio-punt':        { ca: 'Adreça:',                     es: 'Dirección:',                      en: 'Address:',                    fr: 'Adresse :'           },
    'rellevancia':          { ca: 'Rellevància:',                es: 'Relevancia:',                     en: 'Relevance:',                  fr: 'Pertinence :'        },

    // --- Missatges d'estat ---
    'sense-resultats':      { ca: 'Cap punt d\'interès amb aquest filtre',
                              es: 'Ningún punto de interés con este filtro',
                              en: 'No points of interest match this filter',
                              fr: 'Aucun point d\'intérêt avec ce filtre' },
    'carregant':            { ca: 'Carregant…',                  es: 'Cargando…',                       en: 'Loading…',                    fr: 'Chargement…'         },
    'error-zona':           { ca: 'No s\'ha trobat la zona sol·licitada',
                              es: 'No se ha encontrado la zona solicitada',
                              en: 'The requested zone was not found',
                              fr: 'La zone demandée n\'a pas été trouvée' },
    'error-punt':           { ca: 'No s\'ha trobat el punt d\'interès',
                              es: 'No se ha encontrado el punto de interés',
                              en: 'The point of interest was not found',
                              fr: 'Le point d\'intérêt n\'a pas été trouvé' },

    // --- Accessibilitat: etiquetes ARIA generades per JS ---
    'aria-estrelles':       { ca: '{n} de 3 estrelles',          es: '{n} de 3 estrellas',              en: '{n} out of 3 stars',          fr: '{n} sur 3 étoiles'   },
    'aria-zona-boto':       { ca: 'Explorar {nom}',              es: 'Explorar {nom}',                  en: 'Explore {nom}',               fr: 'Explorer {nom}'      },
    'aria-marcador-pi':     { ca: 'Veure {nom}',                 es: 'Ver {nom}',                       en: 'View {nom}',                  fr: 'Voir {nom}'          },

    // --- Avís sense JavaScript ---
    'noscript-avis':        { ca: 'Aquesta aplicació requereix JavaScript per funcionar.',
                              es: 'Esta aplicación requiere JavaScript para funcionar.',
                              en: 'This application requires JavaScript to work.',
                              fr: 'Cette application nécessite JavaScript pour fonctionner.' },
};


// ============================================================
// SECCIÓ: Noms de les seccions del menú lateral
// Responsabilitat: etiquetes visibles als botons del menú
// ============================================================

/**
 * Noms mostrats als botons del menú lateral.
 * La clau ha de coincidir exactament amb `data-seccio` a l'HTML,
 * amb les entrades de `CONTINGUT_SECCIONS` i amb `SECCIONS_MENU`
 * a funcions.js.
 *
 * @type {Object.<string, {ca: string, es: string, en: string, fr: string}>}
 */
const NOMS_SECCIONS = {
    'introduccio':          { ca: 'Presentació',                 es: 'Introducción',                    en: 'Introduction',                fr: 'Présentation'        },
    'mapa':                 { ca: 'Mapa',                        es: 'Mapa',                            en: 'Map',                         fr: 'Carte'               },
    'historia':             { ca: 'Història',                    es: 'Historia',                        en: 'History',                     fr: 'Histoire'            },
    'festes-tradicions':    { ca: 'Festes i tradicions',         es: 'Fiestas y tradiciones',           en: 'Festivals & traditions',      fr: 'Fêtes et traditions' },
    'informacio-practica':  { ca: 'Informació pràctica',         es: 'Info práctica',                   en: 'Practical info',              fr: 'Info pratique'       },
};


// ============================================================
// SECCIÓ: Contingut de les seccions del menú lateral
// Responsabilitat: textos que es mostren en prémer cada secció
// ============================================================
//
// PLANTILLA — Ompliu cada idioma amb el contingut real del poble.
// Es permet HTML senzill (<p>, <strong>, <ul>, <li>, <a>, <br>).
// No incrusteu <script>, ni estils inline.
//
// Convenció de placeholders per als continguts pendents:
//   [CA-TODO]  cal redactar en català
//   [ES-TODO]  cal redactar en castellà
//   [EN-TODO]  cal redactar en anglès
//   [FR-TODO]  cal redactar en francès
//
// El nom del poble NO va aquí: apareix a la capçalera via `POBLE`
// (funcions.js). Si voleu esmentar-lo, escriviu-lo literalment
// només si és imprescindible (p. ex. dins una adreça o URL real).
// ============================================================

/**
 * Texts descriptius mostrats a la secció `#seccio-contingut`
 * quan l'usuari prem un element del menú lateral.
 *
 * @type {Object.<string, {ca: string, es: string, en: string, fr: string}>}
 */
const CONTINGUT_SECCIONS = {

    'introduccio': {
        ca: `<p>Benvinguts a <strong>Solsona</strong>, capital del Solsonès i una de les
             ciutats petites amb més personalitat de Catalunya. Situada al bell mig del
             país, a 670 metres d'altitud i a mig camí entre Manresa i el Pirineu, té poc
             més de 9.700 habitants i una extensió de tot just 17,7 km². Aquesta escala
             humana és, potser, el seu primer encant: ho pots recórrer tot a peu, però
             cada carreró et sorprèn.</p>

             <p>Solsona és una ciutat episcopal. Ho és des del 1593, quan el papa Climent VIII
             va crear el bisbat a petició de Felip II, i l'any següent el mateix rei li
             concedí el títol de ciutat. Aquesta doble investidura ho explica gairebé tot:
             la catedral (l'antiga església del monestir de canonges agustinians, elevada
             a seu episcopal), el Palau Episcopal amb la seva façana neoclàssica majestuosa,
             el Museu Diocesà i Comarcal, i un nucli antic que ha conservat la muralla, els
             portals i el traçat medieval intactes.</p>

             <p>Però el que fa Solsona veritablement singular no és la pedra: és la festa.
             Aquí trobareu la ciutat amb <strong>més gegants i bestiari popular
             de Catalunya</strong>. Gegants, nans, el bou, la mulassa, el drac (documentat des
             del 1692, la peça més antiga que encara balla), els cavallets, l'àliga, els óssos,
             els trabucaires i el ball de bastons omplen la plaça Major només dues vegades l'any:
             per Corpus i per la Festa Major, en honor a la Mare de Déu del Claustre. Fora
             d'aquests dies, dormen als seus locals. I hi ha el Carnaval, esclar, un dels més
             coneguts del país, amb el seu Rei Carnestoltes, la penjada del ruc i un humor
             transgressor que ha esdevingut marca de la casa.</p>

             <p>Passejar-hi és fàcil i agradable. La plaça Major, porticada i encara amb vida
             comercial, és el punt de trobada natural. Des d'allà s'arriba a la catedral, al
             portal del Pont (l'entrada monumental de la ciutat, construïda al segle XVIII
             sobre un pont anterior) i a les places del Palau i Sant Joan. Els carrers de
             pedra, els balcons de fusta i els comerços de sempre —forns, carnisseries,
             pastisseries— conviuen amb un teixit cultural i associatiu excepcionalment viu
             per una ciutat d'aquesta mida.</p>

             <p>El Solsonès que envolta la capital és un altre atractiu: boscos de roure i pi,
             ermites romàniques escampades pel territori, camins de bosc i el riu Cardener a
             tocar. Solsona és, també, un bon camp base per descobrir la comarca sense multituds
             i amb tranquil·litat: en un radi de mitja hora en cotxe es pot arribar a Cardona
             i el seu castell, a la vall del Lord, al pantà de Sant Ponç o als peus del Port
             del Comte per esquiar a l'hivern.</p>

             <p><em>Nota bibliogràfica:</em> la informació que trobareu aquí s'ha extret de la web
             de l'Ajuntament de Solsona, del Bisbat de Solsona, del portal Solsona la Festa,
             del Patrimoni Festiu de la Generalitat i de la Viquipèdia, tot barrejat al nostre
             gust. No us prengueu res al peu de la lletra: quedeu-vos amb la "història" i gaudiu
             de la visita.</p>`,
        es: `<p>[ES-TODO] Traducció pendent al castellà.</p>`,
        en: `<p>[EN-TODO] Translation pending to English.</p>`,
        fr: `<p>[FR-TODO] Traduction en attente vers le français.</p>`,
    },

    'historia': {
        ca: `<p>L'origen de Solsona es perd al fons dels temps. Els seus turons ja van
             ser habitats en època prehistòrica i, més tard, per la <strong>tribu ibèrica
             dels lacetans</strong>, que hi tenien la seva capital septentrional: la
             <em>Setelsis</em> que esmenta el geògraf grec Ptolemeu al segle II. D'aquell
             topònim antic en deriva el nom actual. Van venir després els romans, els
             visigots i, breument, els sarraïns, però el poble que reconeixeríem avui
             comença a prendre forma al <strong>segle X</strong>, quan es documenta un
             nucli a l'entorn d'un castell.</p>

             <p><strong>La Solsona medieval</strong> creix al voltant de dos pols: el
             castell (jurisdicció laica, en mans dels ducs de Cardona) i la canònica
             agustiniana (jurisdicció eclesiàstica, del prepòsit). Aquesta doble senyoria
             marcarà el caràcter de la ciutat durant segles: els senyors no podien prendre
             possessió sense jurar que respectarien els costums i privilegis dels
             solsonins. Al segle XIII ja consta el mercat setmanal, una comunitat jueva
             activa i una xarxa d'oficis menestrals florent. Vers el 1299, el prepòsit
             Ponç de Vilaró comença un nou temple gòtic, el que serà la futura catedral.</p>

             <p>Durant l'expansió mediterrània de la Corona d'Aragó, els mercaders
             solsonins tenen una projecció sorprenent: creen companyies "draperes" amb
             vaixells propis que arriben fins al nord d'Àfrica, Constantinoble i Flandes.
             La seva fama era tal que l'autor anònim de <em>Curial e Güelfa</em>, una de
             les grans novel·les cavalleresques catalanes, hi fa aparèixer un mercader de
             Solsona —Pere Perpunter— com el personatge que allibera Curial de la presó
             de Tunis. No està malament per a una vila del pre-Pirineu.</p>

             <p>Els segles XIV i XV, però, són durs a tot arreu, i Solsona no n'és
             excepció. La <strong>Pesta Negra de 1348</strong> provoca una mortaldat
             enorme, el monestir entra en decadència amb els últims prepòsits i la vida
             comercial trontolla. La ciutat sobreviu, però necessita un tomb.</p>

             <p>El tomb arriba el <strong>1593</strong>. En un context de guerres de
             religió a Europa, Felip II demana al Papa la creació d'una sèrie de bisbats
             a la frontera pirinenca com a barrera contra la penetració protestant. El
             papa <strong>Climent VIII</strong> hi accedeix i, aquell mateix any, converteix
             l'església del monestir de canonges agustinians en <strong>catedral</strong>
             i crea el bisbat de Solsona, desmembrant parròquies d'Urgell i de Vic. El
             primer bisbe és Lluís Sans i Còdol. Un any després, el 1594, el mateix Felip II
             concedeix a Solsona el <strong>títol de ciutat</strong>. En dos anys, doncs,
             la vila esdevé seu episcopal i ciutat: un ascens fulminant que canvia
             completament la seva fesomia urbana i el seu paper polític.</p>

             <p>Els segles XVII i XVIII són els del <strong>Barroc solsoní</strong>.
             La ciutat es reforma, s'enriqueix i s'omple d'obres d'art: retaules,
             capelles, escultures i argenteria eclesiàstica. Es construeix el monumental
             <em>portal del Pont</em>, l'entrada més emblemàtica de la ciutat, sobre un
             pont anterior que salvava el torrent d'accés al nucli antic. Els bisbes
             barrocs promouen reformes al Palau Episcopal i a la catedral, i el Museu
             Diocesà i Comarcal conserva avui bona part d'aquell llegat, incloent-hi
             obres romàniques d'un valor extraordinari recollides de les esglésies del
             bisbat. És també l'època en què l'orde dels dominics hi funda la
             <strong>Universitat Literària</strong>,
             que serà l'última institució d'ensenyament superior de Catalunya abans que la
             centralització borbònica ho concentri tot a la nova Universitat de Cervera
             el 1717. Curiosament, mentre les classes altes castellanitzen la parla i
             s'hi envien bisbes forans, Solsona defensa aferrissadament el català a través
             de les comèdies a les places, les nadales, els goigs i la predicació de
             l'Església local.</p>

             <p>Les guerres tampoc no li passen per alt. La <strong>Guerra dels Segadors</strong>,
             la <strong>Guerra de Successió</strong>, la francesada i les tres
             <strong>guerres carlines</strong> del segle XIX deixen empremta a la ciutat.
             Solsona és, en general, terra de tradició carlina, i pateix ocupacions,
             saqueigs i alguns setges. El pas del monestir a bisbat, i l'arribada de la
             desamortització del 1835, transformen definitivament la propietat urbana
             i molts edificis eclesiàstics passen a mans privades o municipals.</p>

             <p>El segle XX porta la industrialització discreta d'una capital rural: petites
             fàbriques tèxtils i de la fusta, la ramaderia extensiva i l'aprofitament forestal
             com a activitats de fons. La Guerra Civil hi deixa ferides, com arreu, amb l'assalt
             a edificis religiosos els primers mesos i, més tard, la repressió franquista contra
             l'associacionisme català i el clero solsoní. En democràcia, Solsona es consolida
             com a capital d'una comarca petita però amb identitat pròpia, recupera institucions
             culturals i associatives, i el seu <strong>Carnaval</strong> —originari del segle XIX,
             però reinventat els anys 70 amb l'humor transgressor que el caracteritza avui— li
             dona una projecció mediàtica que fa que, per pocs dies l'any, sigui coneguda a
             tot el país.</p>

             <p>Avui Solsona és, alhora, una ciutat antiga i vivíssima: la muralla és
             encara reconeixible, els gegants dormen als seus locals esperant Corpus i la
             Festa Major, i la plaça Major torna a omplir-se cada dimarts pel mercat, com
             fa vuit segles.</p>`,
        es: `<p>[ES-TODO] Traducció pendent al castellà.</p>`,
        en: `<p>[EN-TODO] Translation pending to English.</p>`,
        fr: `<p>[FR-TODO] Traduction en attente vers le français.</p>`,
    },

    'festes-tradicions': {
        ca: `<p><strong>Carnaval de Solsona</strong> — <em>Febrer (dates variables, segons Pasqua)</em><br>
             Un dels carnavals més coneguts de Catalunya, amb humor transgressor i identitat pròpia.
             Destaquen l'arribada del Rei Carnestoltes, la baixada dels boits, el ball de la patacada,
             el sermó, els ballets i la mítica <em>penjada del ruc</em> al campanar la nit de dissabte.</p>

             <p><strong>Corpus</strong> — <em>Juny (variable, novè diumenge després de Pasqua)</em><br>
             Documentada des del 1331, una de les festes de Corpus més antigues de Catalunya. La nit
             de la vigília es fa la <em>roda de foc</em>; el diumenge, cercavila amb trabucaires,
             catifa de flors a la plaça de Palau, ballets dels gegants i el bestiari a la plaça Major
             i la tronada final.</p>

             <p><strong>Festa Major</strong> — <em>Del 7 al 10 de setembre</em><br>
             En honor a la Mare de Déu del Claustre, patrona de la ciutat des del 1653. Festa
             patrimonial d'interès nacional. Baixada de la corporació, cercaviles, ballets dels
             <em>improperis</em> (gegants, nans, bou, mulassa, drac, cavallets, àliga, óssos), ball
             de bastons, trabucaires i la tronada com a moment culminant a la plaça Major.</p>

             <p><strong>Setmana Santa i Aplecs</strong> — <em>Març/abril i primavera</em><br>
             Processons pel nucli antic i, arribada la primavera, aplecs a ermites del voltant com
             la Mare de Déu del Camí o Sant Bartomeu, amb missa, sardanes i dinar popular. Tradicions
             menys mediàtiques però molt viscudes pels solsonins.</p>

             <p>La informació actualitzada de cada any la trobareu a l'agenda de l'Ajuntament:
             <a href="https://www.ajsolsona.cat/">ajsolsona.cat</a> i al portal
             <a href="https://solsonalafesta.net/">solsonalafesta.net</a>.</p>`,
        es: `<p>[ES-TODO] Traducció pendent al castellà.</p>`,
        en: `<p>[EN-TODO] Translation pending to English.</p>`,
        fr: `<p>[FR-TODO] Traduction en attente vers le français.</p>`,
    },

    'informacio-practica': {
        ca: `<p><strong>Telèfons d'emergència</strong><br>
             Emergències generals: <strong>112</strong><br>
             Urgències sanitàries: <strong>061</strong><br>
             Bombers de Solsona: 973 48 10 80 (urgències 085)</p>

             <p><strong>Ajuntament de Solsona</strong><br>
             Carrer del Castell, 20 · 25280 Solsona<br>
             Tel. 973 48 30 40 · <a href="https://www.ajsolsona.cat/">ajsolsona.cat</a></p>

             <p><strong>Mossos d'Esquadra (comissaria)</strong><br>
             Carrer de Jacint Verdaguer, 19 · 25280 Solsona<br>
             Tel. 973 49 81 00 · Urgències 112</p>

             <p><strong>Centre Sanitari del Solsonès (CAP i urgències)</strong><br>
             Plaça Antoni Guitart, 1 · 25280 Solsona<br>
             Tel. 973 48 11 72 · Urgències 061</p>

             <p><strong>On menjar</strong></p>

             <p><strong>La Vermuteria</strong> — Plaça de Sant Roc, 6<br>
             Local amb encant a tocar del nucli antic, especialitzat en vermut, tapes i plats de
             mercat en format compartir. Cuina cuidada, amb opcions vegetarianes i veganes, i una
             carta breu però ben pensada. Ideal per dinar o sopar sense ruïnar-se.</p>

             <p><strong>Cal Poldo Xic</strong> — Solsona<br>
             Cuina de proximitat en un local elegant i acollidor. Molt recomanat pel seu pastís
             de formatge, considerat dels millors de la zona. Ambient tranquil, apte per a
             ocasions especials i sopars amb calma.</p>

             <p><strong>Pizzeria El Cobert</strong> — Solsona<br>
             Pizzes originals i pasta farcida artesanal, molt ben puntuada pels visitants. Opció
             informal i familiar, sempre plena els caps de setmana; val la pena reservar amb
             antelació.</p>

             <p><strong>Oficina de Turisme del Solsonès</strong><br>
             Carretera de Bassella, 1 · 25280 Solsona<br>
             Tel. 973 48 23 10 · <a href="https://solsonaturisme.com/">solsonaturisme.com</a></p>

             <p><em>Confirmeu horaris i disponibilitat abans d'anar-hi: alguns serveis i
             restaurants poden haver canviat.</em></p>`,
        es: `<p>[ES-TODO] Traducció pendent al castellà.</p>`,
        en: `<p>[EN-TODO] Translation pending to English.</p>`,
        fr: `<p>[FR-TODO] Traduction en attente vers le français.</p>`,
    },
};
