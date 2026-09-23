// ============================================================
// DADES: Punts d'interès (plantilla)
// ============================================================
// SISTEMA DE COORDENADES
//
// Les coordenades x/y situen el marcador sobre la imatge del mapa
// DE LA ZONA a la qual pertany el punt (no sobre el mapa principal).
//
//   x → sempre de 0 a 100        (percentatge de l'amplada)
//   y → de 0 a `alcadaViewBox`   (definit per a cada zona a zones.js)
//
// ATENCIÓ: y NO arriba necessàriament a 100. Amb una imatge apaïsada
// de 1351×853, alcadaViewBox val 63.14, així que y ha d'estar entre
// 0 i 63.14. Un valor més gran deixaria el marcador fora de la imatge.
//
// Feu servir eina-coordenades.html en mode "Punt": carregueu-hi la
// imatge de la zona, cliqueu sobre el monument i copieu el resultat.
//
// Estrelles de rellevància:
//   3 ★★★  Imprescindible  (1–2 per poble)
//   2 ★★   Destacat        (3–4 per poble)
//   1 ★    Recomanat       (la resta)
//
// Els IDs de zona (`idZona`) han de coincidir amb els de zones.js.
// ============================================================


/**
 * @typedef {Object} PuntInteres
 * @property {string}  id          - Identificador únic en format 'pi-NNN'
 * @property {string}  idZona      - ID de la zona a la qual pertany (vegeu zones.js)
 * @property {number}  estrelles   - Rellevància: 1 · 2 · 3
 * @property {{x: number, y: number}} coordenades
 *                                 - Posició del marcador (0..100 x 0..alcadaViewBox)
 *                                   sobre el mapa SVG de la zona corresponent
 * @property {string}  imatge      - Ruta a la fotografia del PI
 * @property {{ca:string, es:string, en:string, fr:string}} nom
 * @property {(number|string)} [any]  - Opcional. Any (1342) o període ('S. XIX').
 *                                       Si s'omet, la fila "Any" no es mostra.
 * @property {string} [direccio]      - Opcional. Adreça postal en text únic.
 *                                       No es tradueix. Si és buida o s'omet,
 *                                       la fila "Adreça" no es mostra.
 * @property {{ca:string, es:string, en:string, fr:string}} estil
 * @property {{ca:string, es:string, en:string, fr:string}} descripcio
 */


// ============================================================
// PLANTILLA D'UN PUNT D'INTERÈS
// ============================================================
// Copieu i enganxeu aquest bloc dins l'array PUNTS_INTERES per
// afegir un nou punt. Canvieu els valors marcats amb [...TODO].
// ------------------------------------------------------------
// {
//     id: 'pi-XXX',
//     idZona: 'zona-N',
//     estrelles: 1,                                 // 1, 2 o 3
//     coordenades: { x: 50, y: 50 },
//     imatge: 'imatges/punts-interes/pi-XXX.jpg',
//     nom: {
//         ca: '[CA-TODO] Nom del punt',
//         es: '[ES-TODO] Nombre del punto',
//         en: '[EN-TODO] Name of the point',
//         fr: '[FR-TODO] Nom du point',
//     },
//     any: 'S. XX',                                 // opcional
//     direccio: 'Carrer de l\'Exemple, 1',          // opcional
//     estil: {
//         ca: '[CA-TODO]',
//         es: '[ES-TODO]',
//         en: '[EN-TODO]',
//         fr: '[FR-TODO]',
//     },
//     descripcio: {
//         ca: `<p>[CA-TODO] Descripció del punt d'interès.</p>`,
//         es: `<p>[ES-TODO] Descripción del punto de interés.</p>`,
//         en: `<p>[EN-TODO] Description of the point of interest.</p>`,
//         fr: `<p>[FR-TODO] Description du point d'intérêt.</p>`,
//     },
// },
// ============================================================


/** @type {PuntInteres[]} */
const PUNTS_INTERES = [

    // ============================================================
    // ZONA CATEDRAL — un punt d'exemple perquè el mapa i el filtre funcionin
    // ============================================================
    {
        id: 'pi-001',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  39  , y:  30 },
        imatge: 'imatges/punts-interes/pi-001.jpg',
        nom: {
            ca: 'CA L AGUILAR',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pl. Major, 5 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Gran casalici cantoner amb la façana orientada a la plaça Major de Solsona, i el lateral abocant al carrer de Llobera (antigament de Josa). Consta de planta baixa i entresol, 
			dos pisos i golfes. El parament dels baixos és amb carreus ben tallats i a la vista disposats en filades horitzontals, i els pisos són arrebossats i pintats. A la part frontal de la casa, 
			els baixos generen una esvelta porxada recolzada en tres alts pilars sobre robust basament. A l'interior de la porxada, hi ha el sostre amb embigat de fusta i ben reculats, els baixos i
			l'entresol amb un balconet de fusta. Hi destaca la...</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	    {
        id: 'pi-002',
        idZona: 'zona-catedral',
        estrelles: 3,
        coordenades: { x:  38  , y:  25 },
        imatge: 'imatges/punts-interes/pi-002.jpg',
        nom: {
            ca: 'Plaça Major',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pl. Major ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
			La Plaça Major de Solsona és un lloc central del nucli antic, lloc de celebració de la Festa Major, el Corpus i el Carnaval. Se situa en una cruïlla en lleu desnivell on conflueixen les dues artèries 
			principals, el carrer de Sant Miquel a l'est (vers el portal del Pont) i el carrer del Castell a l'oest (vers la zona del Camp), l'estret carrer de Sant Cristòfol al xamfrà amb el primer, 
			l'ample pas vers la plaça del Palau Episcopal a l'extrem sud-est, i l'accés a l'ombrívol carrer de Llobera, a l'extrem sud-oest. Tot plegat, li dona una forma irregular, podent-se considerar 
			la part central aquell espai comprès entre les cases que s'alcen a la banda nord, sustentades sobre un tram porxat de 35 metres de llarg, i el bloc dels dos senyorials edificis del costa
t contrari, amb ca l'Aguilar i cal Pere Solé Xarpell (edificada al 1934 al lloc d'un antic casal gòtic). En aquesta banda, els baixos també es configuren en porxada, si bé és molt més curta amb més profunditat.
 El terra de la plaça és de grans lloses de pedra. El tram porxat llarg, al nord, es configura en deu arcades polidament carreuades on s'alternen arcs rebaixats i de mig punt sobre pilars quadrangulars, 
 amb diferents alçades. Al costat curt, la porxada se sustenta sobre alts pilars rectangulars i els arcs únicament apareixen en perpendicular, un a l'interior en secció ogival, i un de mig punt al costat 
 del carrer Llobera.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	    {
        id: 'pi-003',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  60  , y:  45 },
        imatge: 'imatges/punts-interes/pi-003.jpg',
        nom: {
            ca: 'Palau Episcopal',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pl. Palau Episcopal ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
			El Palau Episcopal és un gran i elegant edifici neoclàssic de finals del segle XVIII, annex a l'edifici de la catedral de Solsona, a l'extrem sud-est del nucli vell, i parcialment 
			sobreposat sobre l'antic monestir de Santa Maria del segle XII. L'edifici es composa de dos cossos de molt diferent mida: un cos principal de volum mitjà, amb façana a la plaça del Palau
			Episcopal i al portal de Ponent de la Catedral; i un segon cos d'ingent mida, orientat a migdia, al carrer Vallcalent, de baixos, tres plantes i golfes i amb coberta a quatre aigües. El cos principal
			és un bell exponent de les noves tendències academicistes (paleses en edificacions com els palaus Moja i Marc de Barcelona, o els palaus episcopals de Barcelona i Tarragona), bé que amb la presència 
			de reminiscències barroques. S'estructura en baixos i dues plantes, amb el mur curosament carreuat en pedra disposada en fileres regulars i a la vista. La composició de la façana s'articula en cinc 
			eixos verticals separats per quatre pilastres amb capitell compost, que sostenen un gros entaulament i el frontó triangular interiorment decorat amb un gros escut de la Verge amb el nen Jesús. 
			Als baixos, al segon i el quart eix, hi ha les dues portalades, en arc escarser i emmarcades per columnes toscanes. Als pisos, s'hi obren cinc treballades balconades a cadascun, coronades per
			diferents tipus de frontons a mode de trencaaigües. Hom ha subratllat la manca d'articulació entre els elements estructurals de la façana, especialment per les portalades, que no semblen correspondre's a
			la importància atorgada als pisos. D'aquest edifici també en cal ressaltar el vestíbul i l'escala noble. També cal esmentar la font monumental que llueix al centre de la plaça homònima. Actualment, 
			l'edifici acull el Museu Diocesà i Comarcal, un dels primers museus diocesans de Catalunya, amb importants col·leccions del romànic, gòtic, renaixement i barroc i sales dedicades a la prehistòria.
			El cos de migdia, acabat el 1779, presenta una façana radicalment simètrica amb nou eixos verticals, dividits en tres grans cossos separats per pilastres, a raó de tres eixos per cos i nou balcons
			per planta, tots ells idèntics. La portalada s'obre al centre del cos esquerre. El cos central només difereix dels laterals a les golfes i el remat de la cornisa que fa de ràfec: en aquest, 
			és format per un frontó de línies corbes que permet generar tres balconades en arc de mig punt, amb l'escut abacial sobre la central, i encara, sobre la cornisa, un segon escut emmarcat en volutes barroques.
			Baixos del Palau Episcopal El Palau episcopal està construït sobre l'antic monestir de Santa Maria, per la qual cosa a la planta inferior, a nivell dels cellers, conserva la part del segle XII, amb una gran
			quadra de volta lleument apuntada, on hi havia un pou, una tina i tres grans espitlleres. El portal és de mig punt fet amb dovelles de mida Mitjana
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
		    {
        id: 'pi-004',
        idZona: 'zona-catedral',
        estrelles: 3,
        coordenades: { x:  68  , y:  31 },
        imatge: 'imatges/punts-interes/pi-004.jpg',
        nom: {
            ca: 'Catedral',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pl. de la Catedral',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		La catedral de Solsona constitueix un edifici de grans dimensions, format per diferents edificacions, datades de diverses èpoques, situat a l'extrem sud-est de l'antic recinte murallat, 
		a tocar del portal del Pont. La catedral es va alçar en dues èpoques: una època gòtica als segles XIII-XIV (que se superposà a una església romànica del segle XII); i una època renaixentista
		i barroca, als segles XVII-XVIII, poc després de formar-se el bisbat de Solsona, el 1593, i per tant, d'esdevenir seu catedralícia. L'edifici és de tres naus. Hi ha la nau central gòtica, 
		més alta que les laterals, amb finestrals per donar llum, coberta amb volta de creueria, amb tres absis semicirculars, decorats interiorment amb arcuacions, i capelles laterals entre contraforts.
		El 1299 van començar les obres encaminades a transformar l'església romànica en gòtica per la part exterior del temple romànic, a ponent. Al 1330 s'enderrocà el mur que tancava el temple romànic 
		per a afegir les dues naus laterals, per un cantó fins a la portalada d'accés i per l'altre, fins al campanar. A banda i banda del presbiteri, a manera de creuer, foren edificades: a l'esquerra, 
		la capella de la Parròquia (1668-73), ampliada després (1746-72) amb la capella de la Mercè, presidida per un bell Retaule barroc de la Mercè: i a la dreta, la capella de la Mare de Déu del Claustre (1727),
		ampliada posteriorment amb el cambril, obra de l'arquitecte August Font (1902-1910). La Marededéu, patrona de la ciutat, és una imatge romànica, del segle XII, de pedra ennegrida pel temps, obrada per 
		l'escultor tolosà Gilabert i catalogada com una de les escultures més importants del romànic català. De l'església romànica anterior se n'ha conservat els absis semicirculars, dues figures a la porta
		d'accés, un finestral, el Pantocràtor (avui al Museu), el campanar, una portalada d'accés al claustre i una nau transversal amb volta de canó apuntada, visible encara des de l'estança de manxes de l'orgue.
		La nau central, alta i espaiosa, és despullada de tot ornament. Els capitells acusen les dues èpoques, els primers, petits i típicament gòtics, decorats amb els escuts heràldics dels principals promotors de l'obra.
		Els de la segona època són molt grans i decorats amb elements vegetals estilitzats. El rosetó romànic fou traslladat al mur que tancava la nau gòtica. El 1623 el mestre de cases barceloní Claudi Casals s'encarregà 
		de fer l'absis, encara en estil gòtic, darrere el qual restaren els tres absis romànics, amb funció de sagristia. Casals també perllongà la nau per ponent, amb un tram més baix cobert amb volta de canó,
		i una nova façana (dita façana de Ponent) sobre la que, el 1768, s'afegí la portalada barroca. També a la segona època es construí el campanar quadrangular, sobre la nau lateral dreta i l'atri d'accés als 
		claustres, a les que s'havia de pujar per una escala de nou o deu graons per a salvar el desnivell de més de 1,75 m. El campanar té tres plantes, acusades a l'exterior per una cornisa en les que s'alternen,
		per planta i per cara, un finestral d'un arc amb un de geminat, tots amb capitells esculpits. L'escala, de 25,9 m, és de pedra i practicada a un pas de carreus amb volta de canó ascendent. Va pujant des de
		sobre de la nau lateral dreta pel costat de la caixa, que només s'interromp per una cúpula, rebaixada i sostinguda sobre trompes, a nivell de la segona planta. Al segle XVI, el campanar s'allargà fins a 
		l'alçada de 35,12 m i es cegaren els finestrals. El claustre, que era romànic, d'influència tolosana, fou completament alterat al segle XVIII: hom en rebaixà el nivell del sòl, en tapià la porta d'accés 
		(un bell exemplar de l'escola de Lleida, amb decoració geomètrica, redescobert el 1949-1951), i en substituí els arcs i pilars de la galeria baixa per uns de neoclàssics. Amb tot, encara conserva la volta
		romànica i la galeria alta, d'estil tardo-gòtic. Al mur nord, mirant a la plaça de la Catedral, hi ha el portal de Sant Agustí, protegit amb un cancell entre barroc i neoclàssic (1780). 
		Es construí per a substituir la portalada romànica del temple. Llueix un magnífic timpà en relleu representant l'èxtasi de Sant Agustí, titular de l'antiga Canònica de Solsona.
		Està fet de pedra i sense policromar. Al seu costat es construí el baptisteri, enderrocat a l'esclat de la guerra civil, al 1936. Columna historiada Columna i capitell que integren la mateixa unitat, 
		de 117 cm i 28 cm d'alçada respectivament. L'obra fou realitzada per una artista del taller de Gilabert segons l'estil de Tolosa del segle XII. La columna és decorada per dues estàtues, una masculina
		i una femenina. La femenina vesteix túnica i mantell que li cobreix el cap i es cenyeix amb la mà dreta damunt el pit, i amb l'esquerra, sota la cintura. La figura masculina vesteix túnica i mantell, 
		i amb la mà dreta se sosté la barba i amb el colze es recolza sobre la mà esquerra, en la que sembla dur alguna cosa, potser unes claus. El capitell té tres ordres de fulles d'acant. 
		Sarcòfag de Ponç II de Vilaró Sarcòfag format per la caixa i la tapa. A la tapa hi ha la figura jacent de Ponç II de Vilaró, vestit de bisbe, amb túnica fins als peus, el roquet a damunt i per sobre les espatlles,
		sostenint el bàcul amb la mà dreta. Porta posada la mitra i el cap reposa sobre un coixí amb decoracions geomètriques imitant puntes. Als peus té dos petits animals en forma de serp. Rematant la tapa hi ha un 
		voladís, per damunt de la caixa, decorat amb dos castells a cada banda, cadascun amb dos torres emmerletades flanquejat la portada del castell que flanquegen part de la lauda escrita al sarcòfag. 
		La caixa, dividida en dues parts té a la part superior la continuació de la lauda i a l'inferior cinc castells, iguals als anteriors, emmarcat en un rectangle. Al costat dret de la nau central hi ha l'Orgue,
		realitzat per Caitetà Vilardebò l'any 1852.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
			    {
        id: 'pi-005',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  68  , y:  22 },
        imatge: 'imatges/punts-interes/pi-005.jpg',
        nom: {
            ca: 'Font Catedral',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pl. de la Catedral',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Font pública ubicada a la plaça de la Catedral de Solsona, a escassos metres del portal tardo barroc de Sant Agustí de la catedral, i fent xamfrà amb el carrer de Sant Miquel i el carrer 
		de les Campanes. Consisteix en un bell prisma semi-heptagonal adossat a la façana d'un habitatge. El monument té cinc cares (desiguals a la vista ja que les dos que acabarien de formar 
		l'heptàgon queden maclades a la casa). El parament és de carreus de pedra polidament treballats i disposats en fileres horitzontals. La font pròpiament la formen tres piques i tres brocs 
		que es mostren a les tres cares exteriors del conjunt. La pica dreta és més ampla, allargada i prominent i recull l'aigua de les anteriors. Cada pica té el seu broc que es correspon al cap 
		d'un lleó (afegits a la segona meitat del segle XX). Al damunt de cada font, llueix un òcul en rebaix còncau i semi-cegat, decorat al centre amb floritures gòtiques, que feien funcions de 
		ventilació. Precedint la coberta del monument (que genera un terrat al primer pis de la casa) hi ha una cornisa amb gàrgoles als quatre vèrtexs que representen animals (un lloro o àliga, 
		un rat penat, una cabra i un gos). A l'extrem esquerre del conjunt, hi ha una placa en record de l'artista i constructor de gegants Manel Casserras i Boix (1929-1996).
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },


			    {
        id: 'pi-006',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  16  , y:  50 },
        imatge: 'imatges/punts-interes/pi-006.jpg',
        nom: {
            ca: 'CA LA LLUCIANETA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer de Llobera, 13',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Edifici entre mitgeres situat a la part central del carrer Llobera amb façana posterior al carrer Vallcalent. La casa s'estructura en planta baixa i dos pisos a la façana principal i a
		la façana posterior guanya un pis a nivell de l'avinguda de la Mare de Déu del Claustre. La coberta és de teula àrab a dos vessants. L'edifici data del 1890, però en la imatge actual
		respon una reforma feta als anys quaranta del segle XX obra de l'arquitecte Puig Boada que va suposar una monumentalització del conjunt. La reforma va consistir a realçar la façana
		principal del carrer Llobera amb un aplacat de pedra polidament carreuada i la incorporació de balcons i balconades als pisos. Els baixos són d'aire barroc, amb el portal principal
		emmarcat en perfil còncau i arc rebaixat, i a la seva dreta, un portal rectangular, així com una finestra a cada vora. A la clau del portal principal llueix un escut esculpit amb la
		figura d'un àngel que sosté un medalló on figuren les inicials S-R i en números romans la data 1944. Al pis noble s'obren tres obertures amb balcó corregut al costat dret i un balcó 
		sol a l'esquerra, totes elles amb balustre de forja treballada on destaquen els tres medallons alineats al finestral: un motiu floral, un llibre i una rella, aquests dos en al·lusió a
		la família Ribera. El segon pis presenta una robusta galeria de cinc arcs de mig punt, flanquejada per dues finestres quadrades. La façana es remata amb un ample ràfec de fusta sostingut
		sobre permòdols. La façana posterior aprofita l'aparell de pedra de filades horitzontals de la muralla i la torre a la planta baixa, mentre que als pisos el parament és arrebossat i estucat,
		amb pilastres de carreus simulats. La balconada és correguda als dos pisos baixos, amb balcons individuals a pla de façana al superior. A la planta baixa, el parament mostra esgrafiats que simulen
		carreus; en canvi, a les plantes primera i segona l'estucat és llis, i les obertures estan contornejades per esgrafiats de volutes i rocalles. Al capdamunt, entre el pis superior i les golfes, 
		apareix un fris d'esgrafiats amb garlandes florals i gerros ornamentals que precedeix els finestrons de les golfes, separats per pilars.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
				    {
        id: 'pi-007',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  26  , y:  50 },
        imatge: 'imatges/punts-interes/pi-007.jpg',
        nom: {
            ca: 'CA LES 		',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer de Llobera, 53',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Casa entre mitgeres situada gairebé a l'extrem oest del carrer Llobera amb façana posterior solana al carrer Vall Calent on presenta un pis més arran de carrer. És datada del segle XIV 
		malgrat que se sap que patí reformes importants al segle XVIII. L'edifici consta de planta baixa, dues plantes pis i golfes, amb coberta de teula àrab a dos vessants. El parament de 
		la façana és íntegrament carreuat i vist, més regular als baixos i irregular als pisos. Apareixen tres obertures a cada pis però no alineades. Als baixos, a la dreta, hi ha el portal, 
		un arc de mig punt perfectament emmarcat en robustos muntants i dovelles. Al mig, hi ha un òcul ovalat i a l'esquerra un segon portal, a semblança del primer, però cec. Al primer pis hi
		ha dos balcons de diferent factura i un finestró al mig. A la dreta, alineat al portal principal, s'obre l'ampla balconada principal emmarcada de pedra amb arc rebaixat i amb artístic
		treball de forja al balustre. A l'esquerra, mal alineat al portal cec, apareix un balconet, amb obertura en arc rebaixat i ben emmarcada i sostingut sobre llosa balconera motllurada de 
		planta lleument trilobulada, amb balustre de forja treballada. Al segon pis, apareixen un finestral i un balconet a pla de façana, i un finestró, recent, al mig. A les golfes, alineats 
		als eixos laterals, s'obren dos austers finestrons, precedint un rústec ràfec de fusta.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
				    {
        id: 'pi-008',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  6  , y:  50 },
        imatge: 'imatges/punts-interes/pi-008.jpg',
        nom: {
            ca: 'CAL GALTANEGRA	',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer de Llobera, 3',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Casa pairal entre mitgeres situada a la banda est del carrer Llobera amb façana posterior solana al carrer Vall Calent. S'estructura en planta baixa i dues plantes pis i coberta 
		de teula àrab a dos vessants. La façana s'articula en dos eixos verticals ben alineats. De pedra carreuada i vista a la planta baixa i en els marcs de les obertures, i als pisos superiors
		arrebossada i pintada. Als baixos, a l'esquerra, hi ha el portal rectangular, allindat amb l'any 1746 flanquejat per dos motius florals i amb una porta de fusta treballada on figuren les
		inicials AT (corresponent a les inicials de la família Alsina Tugues); a la dreta hi ha un finestral en arc de mig punt i enreixat. Al primer pis, delimitat per una cornisa de pedra motllurada, 
		apareixen dos balcons, a pla de façana, i al segon, altres dues balconeres de menor grandària però amb lloses més sortides. A damunt de cada una d'elles, precedint el ràfec, s'obren dos òculs
		ovalats. Entre els quatre balcons i emmarcant els òculs llueix una bella decoració mural obra de Jaume Cuadrench Bertran l'any 1997, tal com mostra les inicials a l'extrem dret de la cornisa.
		A la façana posterior hi apareix una planta més a l'altura del carrer que es correspon a una de les antigues torres de la muralla, de planta semirodona. Aquesta torre genera una terrassa al
		nivell dels baixos de la casa. La resta de la façana a Vall Calent és arrebossada i pintada.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	    {
        id: 'pi-009',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  31  , y:  5 },
        imatge: 'imatges/punts-interes/pi-009.jpg',
        nom: {
            ca: 'CA LADROGUER NOU ',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'C/ de les Terceries | C/ de Sant Nicolau ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Edifici entre mitgeres situat en ple nucli antic, fent xamfrà entre el carrer de les Terceries i el carrer de Sant Nicolau i afrontant al carrer de Sant Cristòfol, a la confluència de tots 
		tres i visible des de la plaça Major. Data de 1517 malgrat que ha estat objecte d'intervencions en tres èpoques diferents. La casa és de planta poligonal i s'estructura en tres plans de façana,
		la principal, a migdia, mirant al carrer Sant Cristòfol, on hi ha la botiga als baixos, i les altres dues, adaptades al desnivell del carrer que davalla cap al carrer Sant Nicolau. Consta d'una
		planta soterrània -on hi ha un antic forn-, planta baixa, tres plantes pis i terrat. Els paraments només són de pedra carreuada als marcs de les obertures i les cantonades. A la resta, hi ha pedra 
		carejada irregularment disposada a tota la planta baixa i el primer pis de la façana principal, i és arrebossat i pintat a la resta, destacant la decoració mural amb motius florals a cavall del
		segon i el tercer pis de la façana principal i al centre de la façana segona. Encara a la façana principal, damunt del rètol de la botiga "Casa Adroguer Nou", hi llueix un bell rètol, anunci de 
		ceràmica vidrada de la casa Codorniu. De la botiga en ressalta l'aparador i l'interior que conserva molts elements antics, com ara el paviment hidràulic, les tauletes, vitrines i taulells.
		La botiga roman oberta dedicada al comerç de productes de proximitat, vins, licors, cerveses, vermuteria, cafès, conserves, olis, vinagres, xocolates...
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	   {
        id: 'pi-010',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  22  , y:  50 },
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'CAL FONT ',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer Llobera, 31',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Casal entre mitgeres situat al carrer Llobera, just a l'altura de la plaça de Sant Pere, i amb façana posterior al carrer Vallcalent. La datació de l'edifici se situa entre els segles XVII i XVIII, 
		encara que va ser molt modificada al segle XIX i principis del segle XX. Consta de planta baixa, dos pisos i golfes, i un pis soterrani que es genera a la façana posterior per salvar el desnivell. 
		La composició de la façana principal s'articula en quatre eixos verticals ben alineats. El parament és de pedra carejada disposada de forma irregular als baixos, i als pisos es resol amb un bell 
		esgrafiat a base de sanefes geomètriques emmarcades per pilastres, molt probablement obra d'August Font que hi va residir. Als baixos, hi ha el portal principal en arc de mig punt i emmarcat en
		pilastres motllurades i un medalló a la clau; un portal secundari amb arc escarser i emmarcat en pedra; i a l'extrem dret, un portal rectangular que dona pas sota muralla al carrer Vallcalent. 
		El més singular de la casa és el conjunt de sis rostres masculins esculpits en fusta als caps de biga de la barbacana, obrats en una reforma l'any 1961, i inspirats en personatges locals. 
		La façana posterior consta de planta soterrània, tres pisos i golfes, alineats en tres eixos verticals i el parament és íntegrament pintat i esgrafiat, excepte a les obertures que són emmarcades
		en pedra escairada. Segons la memòria oral, en aquesta façana, la casa comprenia una antiga torre de la muralla.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
		
	   {
        id: 'pi-011',
        idZona: 'zona-catedral',
        estrelles: 3,
        coordenades: { x:  36  , y:  34 },
        imatge: 'imatges/punts-interes/pi-011.jpg',
        nom: {
            ca: 'CARRER DE LLOBERA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer Llobera',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		És el carrer més llarg del recinte murallat de Solsona, amb 230 metres de longitud, i el que conté un nombre més gran d'edificis antics i d'interès, molts d'ells inventariats o catalogats; 
		cal Rovira, ca les Caterines, cal Clarà (o Santpare de Clarà), cal Galtanegra, ca la Llucianeta, cal Gelbert, Cal Novelles, cal Puigpinós i cal Font, tots ells al costat sud. Hi abunden els
		portals adovellats de mig punt i rebaixats sovint amb escuts i grafies, els finestrals motllurats, les espitlleres, i nombrosos elements de forja i fusteria molt treballats. Comunica la Plaça 
		Major amb el dit portal de Llobera, antiga entrada a la vila pel costat sud-oest. La seva orientació est-oest, l'estreta secció (entre 275 i 3 metres), el predomini d'edificis de dos i tres pisos,
		i el fet que no sigui rectilini, el fan especialment ombrívol. Per la banda nord, al llarg del seu recorregut, el carrer és interceptat per cinc places o carrers que l'ajuden a esponjar, tots ells 
		davallant del carrer del Castell, d'est a oest: carrer de Sant Josep de Calassanç i plaça de la Ribera (oberta enfront del casal homònim al 1953); carrer de Mirabalda; l'ampla plaça de Sant Pere; la
		travessia de Llobera; i la travessia de sant Isidre.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
		   {
        id: 'pi-012',
        idZona: 'zona-catedral',
        estrelles: 2,
        coordenades: { x:  38  , y:  40 },
        imatge: 'imatges/punts-interes/pi-012.jpg',
        nom: {
            ca: 'CASA DELS ROVIRA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer Llobera 9',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Casa senyorial ubicada al carrer Llobera, amb façana posterior al carrer Vall Calent, que destaca per les balconades renaixentistes (força desgastades i escantellades als entaulaments). 
		S'estructura en planta baixa i dos pisos i coberta de teula àrab a dos vessants. El parament de la façana és íntegrament carreuat i en filades força regulars. Als baixos apareix el portal 
		principal adovellat amb arc de mig punt, un finestral a la dreta, adovellat i amb reixa de forja treballada, i un segon portal d'arc ogival llis a l'esquerra. Aquest segon portal, d'aire
		modernista i amb una bella porta de fusta amb treball de ferro a les reixes, és d'una modificació obrada l'any 1911 (moment que també es va obrar una àmplia terrassa al pati que dona a la 
		façana posterior. Al vestíbul de l'interior llueix una gran entrada, amb escalinata i balustre i decoració plateresca. Al primer pis apareixen les tres balconades renaixentistes amb les motllures 
		que emmarquen les obertures, amb un esquema típicament renaixentista: els laterals imitant pilastres adossades, decorades amb motius florals al fust i àngels alats al capitell, que suporten un fals 
		entaulament (corregut de costat a costat de la façana, a tall de cornisa dentellada), i una voluta al centre de cada llinda. Al segon pis, apareix un balcó alineat amb l'eix de la dreta, i a sobre 
		els altres dos balcons, s'obre una bella galeria de set finestrons. La façana es remata amb un auster ràfec de fusta.
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
			   {
        id: 'pi-013',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  17  , y:  10 },
        imatge: 'imatges/punts-interes/pi-013.jpg',
        nom: {
            ca: 'CAL CABANES',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pl. Sant Joan, 1',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Gran casa senyorial, amb la façana principal a l'extrem est de la plaça de Sant Joan, fent cantonada amb el carrer de la Mare de Déu. És un edifici de planta poligonal molt irregular, 
		de planta baixa, dos pisos i golfes, amb coberta de teula àrab als dos vessants de carrer. El parament de la façana principal és de carreus ben carejats i a la vista i disposats en
		fileres horitzontals. La composició de les obertures de la façana és ben alineada en dos eixos verticals: als baixos, la noble portalada en arc de mig punt feta de grans dovelles i
		amb l'escut dels Coma a la clau, i a la dreta, un portal secundari en arc escarser. L'escut dels Coma és quartejat al centre (al primer i quart camp, dues faixes onejants; i al segon 
		i tercer, cinc closques de vieira disposades en aspa) amb decoració vegetal i volutes al voltant, i coronat per un elm amb celada i cimera. Al primer pis s'obren dos grans finestrals 
		amb els brancals i l'ampit motllurat, i al segon sengles balconades amb balustres de ferro, essent corregut el de la cantonada, que retomba vers la façana lateral. A les golfes s'obren 
		dos finestrons quadrangulars amb l'ampit motllurat. Un ràfec sostingut en permòdols de fusta remata les dues façanes. Entre els dos portals llueix una placa de pedra dedicada a Josep Marià de
		Cabanes. A la façana lateral el parament és de carreus asprament carejats i a la vista. La composició de les obertures es disposa en quatre eixos verticals, amb un acabat a semblança de la
		façana principal, és a dir, amb els finestrals motllurats al marc i l'ampit. Hi ha dos únics portals en arc carpanell als eixos més excèntrics. Hi destaca el balcó corregut en continuïtat a l'altra façana.	
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	


 {
        id: 'pi-022',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  40  , y:  8 },
        imatge: 'imatges/punts-interes/pi-022.jpg',
        nom: {
            ca: 'LLINDA EN EL MAGATZEM DE CA LADROGUER NOU',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'C/de Sant Cristòfol, 7',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Llinda de pedra d'un portal rectangular d'un immoble al carrer de Sant Cristòfol, fent cantonada amb el carrer de Terceries.
		El portal dona entrada a un edifici plurifamiliar de planta baixa i quatre pisos. La llinda és una peça monolítica en la qual apareix 
		la data de construcció "1673" grafiada en números de grans proporcions i just entremig dels quatre números, 
		un dibuix en relleu que representa el sol de Solsona emmarcat en un cercle ovalat i circumdat per una motllura avolutada.	
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	 {
        id: 'pi-024',
        idZona: 'zona-catedral',
        estrelles: 1,
        coordenades: { x:  10  , y:  2 },
        imatge: 'imatges/punts-interes/pi-024.jpg',
        nom: {
            ca: 'FONT MAJOR',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pl. Sant Joan',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Font pública ubicada al nucli antic de Solsona, al centre de la plaça Sant Joan, adaptada al desnivell. 
		El conjunt del monument consta de la superposició de dos cossos: a la base, un antic cos, carreuat 
		de planta quadrada, escantellat als vèrtexs, que el converteix en vuitavat; i al capdamunt, una glorieta 
		d'estil neoclàssic que acull la capella de Sant Joan. El robust cos inferior constitueix la font pròpiament 
		ita, i és feta de carreus de pedra polidament treballats i disposats en fileres horitzontals. Adossades a la
		façana principal i les dues cares laterals, hi ha les piques de pedra amb dos brocs a cadascuna. A la cara principal,
		mirant a la plaça, hi ha l'ampla pica principal, correguda i que recull l'aigua de les laterals, els brocs no són ornamentats.
		Al seu capdamunt, llueix un òcul en rebaix còncau i cegat, decorat al centre amb floritura gòtica, que fa les funcions de ventilació.
		A sengles cares laterals, hi ha dues piques a cadascuna, amb un cap de lleó (afegit a la segona meitat del segle XX) al costat inferior, 
		i pica individual i broc de coure al costat superior. A la façana posterior del conjunt, hi ha una escalinata de pedra que dona pas a la
		glorieta. Aquesta s'obre a la façana principal i laterals, i reprodueix la planta vuitavada de la base i és coberta de teula àrab a quatre
		aigües amb pilastres als vuit costats i un frontó clàssic a la façana, exempt. A dins, hi ha una vitrina amb la figura de Sant Joan, diverses
		pintures murals amb motius de la vida del sant a les parets laterals, i un mural celestial amb angelets a la cúpula.
		A la façana posterior de la glorieta, damunt la porta d'accés, llueix una placa amb el poema "Record de Solsona" de Josep Maria de Sagarra.	
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	 {
        id: 'pi-029',
        idZona: 'zona-catedral',
        estrelles: 2,
        coordenades: { x:  80  , y:  60 },
        imatge: 'imatges/punts-interes/pi-029.jpg',
        nom: {
            ca: 'MURALLES DE SOLSONA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: '',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>
		Conjunt arquitectònic que formen les restes del recinte murat que tancava la ciutat de Solsona i dins del qual es
		considera que és el nucli antic. Aquest recinte queda delimitat per l'espai comprès entre els carrers Vall Calent (Avgda. Mare de Déu del Claustre)
		i la seva continuïtat vers la carretera de Bassella, el carrer Vall Fred i la plaça del Camp. En aquesta configuració final, el recinte data de mitjans 
		del segle XIV i amb un perímetre de 1,19 km, creant una trama urbana interior de prop de 8 Ha. De la muralla pròpiament dita, en resten diferents panys, 
		torres i dos portals originals, de Llobera i del Castell, i un portal obrat amb posterioritat, el del Pont que substituïa un antic portal de Sant Miquel.
		Es conserven panys de muralla als següents trams: al carrer Vall Calent, restaurat i amb una construcció moderna a sobre, a tocar d'una torre, prop del
		Palau episcopal; a la carretera de Bassella, a la base de l'edifici dels Dominics, als baixos d'un edifici inacabat poc més enllà, a tocar de cal Pau de
		Marrussella, i a la cantonada amb el carrer Vall Fred, fent de basament a un edifici modern que fa xamfrà; al carrer Vall Fred, a mig carrer hi ha un petit
		mur que fa de paret a una terrassa; i al pujador entre el portal de Llobera i la plaça del Camp. Portals antics Conjunt arquitectònic que formen les restes
		del recinte murat que tancava la ciutat de Solsona i dins del qual es considera que és el nucli antic. Aquest recinte queda delimitat per l'espai comprès 
		entre els carrers Vall Calent (Avgda. Mare de Déu del Claustre) i la seva continuïtat vers la carretera de Bassella, el carrer Vall Fred i la plaça del Camp.
		En aquesta configuració final, el recinte data de mitjan segle XIV i amb un perímetre d'1,19 km, creant una trama urbana interior de prop de 8 Ha. De la muralla 
		pròpiament dita, en resten diferents panys, torres i dos portals originals, de Llobera i del Castell, i un portal obrat amb posterioritat, el del Pont que 
		substituïa un antic portal de Sant Miquel. Es conserven panys de muralla als següents trams: al carrer Vall Calent, restaurat i amb una construcció moderna
		a sobre, a tocar d'una torre, prop del Palau episcopal; a la carretera de Bassella, a la base de l'edifici dels Dominics, als baixos d'un edifici inacabat 
		poc més enllà, a tocar de cal Pau de Marrussella, i a la cantonada amb el carrer Vall Fred, fent de basament a un edifici modern que fa xamfrà; al carrer 
		Vall Fred, a mig carrer hi ha un petit mur que fa de paret a una terrassa; i al pujador entre el portal de Llobera i la plaça del Camp. Portals antics Dels 
		nou portals de la muralla antiga sols resten el Portal de Llobera i el Portal del Castell, al final dels carrers homònims, de factura pràcticament igual, 
		un arc de mig punt fet amb grosses dovelles sense decoració. Sobre el primer, per la part interior, el 1967 en ocasió d'una rehabilitació s'hi construí una 
		petita capella dedicada a Santa Anna, patrona dels Llobera. Sobre el segon, s'hi recolzava una part de l'antic Castell de Solsona, que avui ocupa el col·legi 
		de la Companyia de Maria. Torres Queden tres torres medievals de les 21 que formaven part de l'antiga muralla. Són fetes de pedra i calç, de 2 m de gruix, molt 
		ben obrades i coronades amb merlets. Les tres torres són adossades a cases de la ciutat (totes tres catalogades) fent la funció de terrassa o galeria, en concret: G
		altanegra, Llucianeta i Gelbert. Una quarta es va mantenir fins a mitjan segle XX, a cal Font. Portal del Pont (antic portal de Sant Miquel) Element arquitectònic que 
		forma un bell i harmònic conjunt amb el pont construït que hi ha enfront. És el portal d'entrada a la ciutat i va ser construït al segle XVIII, veritable mostra de
		l'art del Renaixement. Es tracta d'una gran obertura en arc de mig punt flanquejada per dues grans columnes que sostenen un entaulament, format per l'arquitrau on
		figura una llarga inscripció, un àtic centrada per un sol radiant, fet de metall, en al·lusió a la ciutat i un timpà. La inscripció diu: "Any del senyor 1805 (any de la inauguració) 
		- Regnant el papa Pius VII, el nostre bisbe, 
		Pere Nolasc, i el nostre rei Carles IV, els cònsols, amb devota voluntat curadors del Municipi, erigiren aquest monument".
			
			</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	
	 // ============================================================
    // ZONA DEL CASTELL — un punt d'exemple perquè el mapa i el filtre funcionin
    // ============================================================
    {
        id: 'pi-014',
        idZona: 'zona-castell',
        estrelles: 1,
        coordenades: { x:  78  , y:  14 },
        imatge: 'imatges/punts-interes/pi-014.jpg',
        nom: {
            ca: 'CAL MOLINS',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer del Castell, 19 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Elegant immoble, just davant la casa consistorial, fent cantonada entre el cèntric carrer del Castell i el carrer Mirabalda, en un dels punts més neuràlgics del nucli antic de Solsona. 
			Tot i que l'edifici dataria del segle XIV-XV, d'antuvi estructurat en planta baixa i pis, a mitjan segle XVIII, l'escultor Morató, va obrar una reforma que canviar l'aparença original 
			de l'edifici. Es va afegir una planta i golfes sobre un singular parament de maó ceràmic fosc, únic a la ciutat. També daten de llavors els set caps de biga de fusta de 
			la barbacana quatre dels quals representen personatges masculins de l'època. La data de la reforma, ideada pel mateix Morató, 1756, figura a la llinda de cinc finestrals del 
			segon pis. Als baixos, el parament de les dues façanes s'ha mantingut en la faisó original, en pedra polidament carreuada i disposada en filades regulars.
			Al costat del carrer del Castell, s'hi obre el noble portal principal, en arc de mig punt fet de grans dovelles, i a la seva dreta, un segon portal en arc carpanell,
			que es reprodueix a semblança just al tombant de la segona façana. En aquesta façana, abocant al carrer Mirabalda, apareixen altres obertures robustament allindades.
			Al primer pis, hi ha un balcó corregut a les dues façanes i diversos finestrals en marc rectangular però en arc rebaixat al tancament de fusta. Al segon pis, apareixen 
			tres finestrons a cada costat. 
			Precedint la coberta amb aiguavessant a cada carrer, llueix l'ample ràfec de fusta sostingut sobre els dits permòdols treballats.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	  {
        id: 'pi-015',
        idZona: 'zona-castell',
        estrelles: 1,
        coordenades: { x:  84  , y:  16 },
        imatge: 'imatges/punts-interes/pi-015.jpg',
        nom: {
            ca: 'CAL PASADA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer del Castell, 11	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Edifici entre mitgeres de finals del segle XVI que ha patit diverses reformes. Consta de planta baixa, entresol i dues plantes pis.
			És de les poques cases que no es cremaren durant les guerres carlines. A la planta baixa hi ha dues obertures amb arc de mig punt, sobre les 
			quals trobem a la primera planta un balcó ornamental i una finestra d'arc trilobulat. Al darrer pis hi ha finestres sota un ràfec de gran volada. 
			Anteriorment les obertures s'havien arrebossat amagantla 
			forma d'arc, també hi havia un petit balcó a una de les obertures de la planta baixa.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
		  {
        id: 'pi-016',
        idZona: 'zona-castell',
        estrelles: 1,
        coordenades: { x:  82  , y:  18 },
        imatge: 'imatges/punts-interes/pi-016.jpg',
        nom: {
            ca: 'CAMPANAR DISANTA O TORRE DE LES HORES',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer del Castell, 16	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Esvelt campanar datat del segle XV, ubicat al punt més neuràlgic del nucli antic de Solsona, al carrer Castell fent cantonada a
			la plaça del Ruc. Es tracta d'un alt edifici de planta quadrangular format per tres cossos i coronat per una inclinada teulada a quatre aigües. 
			L'aparell murari és de blocs de pedra carreuada de mida mitjana, disposats en filades horitzontals, rejuntats i a la vista.
			Els dos cossos inferiors són entre mitgeres, integrats a l'immoble veí i no presenten obertures a l'exterior, tret d'un petit 
			portal en arc de mig punt a escala del carrer. Al tercer cos, just per damunt de la cornisa que separa, hi ha un finestró i al
			capdamunt de la torreta, als quatre vents, s'hi obren sengles obertures en arc apuntat i emmarcades en maó pla. Les campanes amb 
			llur cloquer aboquen als finestrals de migdia i ponent. La coberta piramidal és feta amb escates de ceràmica de coloracions blavoses
			i ocres i és coronada per un penell amb una campana i un banderí. Entre 2005 i 2006 es va dur a terme una restauració integral de l'edifici
			amb el sanejament i rehabilitació dels paraments interiors i façanes, la reparació de la coberta, la renovació de la instal·lació elèctrica,
			així com la recuperació del so 
			de la campana petita de la torre i la reinstal·lació del rellotge restaurat a càrrec de Frederic Ferré.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
			  {
        id: 'pi-017',
        idZona: 'zona-castell',
        estrelles: 2,
        coordenades: { x:  60  , y:  10 },
        imatge: 'imatges/punts-interes/pi-017.jpg',
        nom: {
            ca: 'CASA DE LA CIUTAT',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer del Castell, 20	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Edifici senyorial amb elements gòtics i renaixentistes datat del primer terç del segle XVI. És la seu de l'ajuntament i 
			se situa al punt més neuràlgic del nucli antic de Solsona amb façana principal al carrer Castell i laterals al carrer Regata i el carrer 
			Sant Pau, antic call jueu, amb coberta de teula àrab a quatre vessants, una a cada costat. Té una planta poligonal i s'estructura en soterrani,
			baixos, dos pisos i golfes. L'aparell murari de l'edifici és polidament carreuat, disposat en filades regulars i a la vista a les tres façanes.
			La composició de les obertures no és exactament simètrica. La façana principal s'articula bàsicament sobre tres eixos verticals. Als baixos, a la 
			dreta, hi ha la portalada principal, en arc de mig punt adovellat i l'escut de Solsona a la clau. S'hi representa un medalló centrat per la creu 
			del monestir de Santa Maria, flanquejat pels senyors que ha tingut la ciutat, a esquerra, la torre dels Tarroja, i a dreta, pel card dels Cardona, i
			a dalt, un sol radiant, símbol de la ciutat, tot envoltat de motius florals i fulles, tot plegat rematat amb un elm amb celada i cimera. Al costat del 
			portal principal, hi ha un segon portal en arc carpanell. Ambdues entrades són flanquejades per un finestró quadrangular reixat. Al pis noble, s'hi obren 
			tres nobles balconades rectangulars amb auster balustre de ferro, gairebé a pla de façana, destacant l'escut dels Puigdepons entre els dos balustres de 
			l'esquerra. Representa un tossal fet de sis pedres, relatiu al cognom Puig, amb dues branques d'olivera damunt, per Olius, i dins d'una motllura a tall d'escut, 
			amb una rata en posició rampant a cada costat, relatius a Ratavilla, lloc senyoriu dels Torrents (del llatí rata vetula, rata vella), coronada per un petit floró.
			Aquest conjunt ve emmarcat per un guardapols motllurat sostingut sobre dues petites mènsules còniques. Al segon pis hi ha una ampla balconada central en arc carpanell 
			i motllurada a tot el marc, i balustre quasi a pla de façana, flanquejada per dos finestrons motllurats al marc i l'ampit. Finalment, a les golfes, s'hi obre una galeria
			porxada en arquets rebaixats sustentats sobre columnes amb la imposta molt marcada i barana en balustre de pedra. La façana es remata amb un ample ràfec de fusta que circumda 
			als tres costats. A la façana lateral dreta, hi ha finestrons allindats als baixos i el segon pis, finestrals allindats al pis noble i una galeria a les golfes, mentre que al lateral esquerre, 
			a aquest mateix esquema, 
			s'hi afegeix una portalada en arc carpanell a l'extrem inferior. A l'interior, al vestíbul es conserven, entre altres, nobles arcs rebaixats i un finestral gòtic bigeminat.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	  {
        id: 'pi-018',
        idZona: 'zona-castell',
        estrelles: 2,
        coordenades: { x:  80  , y:  12 },
        imatge: 'imatges/punts-interes/pi-018.jpg',
        nom: {
            ca: 'FARMÀCIA PALLARÈS',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer del Castell, 15	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Casalici cantoner també conegut com Cal Doctor Solé o Cal Ginestà situat al centre neuràlgic de Solsona, amb façana a la principal artèria comercial de la
			ciutat, el carrer del Castell, just on s'obre la placeta del Ruc, i fent cantonada amb l'estret carreró de Sant Josep de Calassanç. Data de mitjan segle XV; això no 
			obstant, l'edifici va experimentar canvis en el seu aspecte a conseqüència de reformes posteriors. Té planta poligonal i consta de planta baixa, pis i golfes, i coberta 
			de teula àrab a un únic vessant amb carener paral·lel a la façana principal. El parament de la façana és de pedra ben carreuada i disposada en fileres horitzontals i la 
			composició de les obertures s'organitza en dos eixos verticals: als baixos, el portal principal en arc escarser a la dreta, i un segon portal a vora de la cantonada; al pis,
			dos elegants balcons al pis de secció lleument lobulada; i a les golfes, dos finestrons. Cal fer notar l'espitllera amb incisió conopial a l'extrem esquerre de la portalada.
			Als pisos, hi lluu tot i que bastant desgastada, una decoració estucada que dibuixa marcs de geometries vàries. El ràfec és tot de fusta recolzat sobre austers permòdols i circumda 
			l'edifici cap a la façana lateral. Aquesta banda és molt llisa, amb parament tot arrebossat, excepte al portal cantoner, i
			es remata a les golfes amb un balconet amb barrots tornejats de fusta, material molt antic, anterior a les més modernes baranes de forja..</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	 {
        id: 'pi-019',
        idZona: 'zona-castell',
        estrelles: 1,
        coordenades: { x:  88  , y:  20 },
        imatge: 'imatges/punts-interes/pi-019.jpg',
        nom: {
            ca: 'PORXOS CAL SANT ANTONI',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer del Castell, 16	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Passadís medieval que comunica el carrer del Castell amb la plaça de Sant Joan, al cor del nucli antic. 
			És un pas de 10 metres de llarg i una amplada no uniforme, al voltant de 2 metres, organitzat en quatre replans i 
			quatre trams de dos o tres esglaons que permeten salvar el desnivell entre el carrer i la plaça. Per la banda del 
			carrer, s'hi accedeix per un arc apuntat que es reprodueix a la meitat, o per la banda inferior s'hi entra per un arc de mig punt en 
			obra de fàbrica disposat transversalment per donar amplada a la façana del pis de l'habitatge. No en va, 
			tota la llargada del pas porti...</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	 {
        id: 'pi-020',
        idZona: 'zona-castell',
        estrelles: 1,
        coordenades: { x:  95  , y:  20 },
        imatge: 'imatges/punts-interes/pi-020.jpg',
        nom: {
            ca: 'PORXOS CARRER DEL CASTELL',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer del Castell, 1	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Tram inicial del carrer del Castell, just a la cantonada amb la plaça Major.
			Es caracteritza per ser porxat a banda i banda, creant un alt atri interior als respectius baixos d'ús comercial 
			i els entresols. El tram porticat, en lleu pujada, s'articula diferent segons el costat: a la dreta, amida 12 metres de
			llargada, i s'estructura sobre pilars quadrangulars i una columna vuitavada entremig, que sostenen el pis noble dels 
			edificis de cal Codina, cal Molins i cal Courer, amb sostre embigat de fusta; a l'esquerra, un xic enretirat respecte a la cantonada, amida 9 metres de llargada,
			i s'estructura sobre dos arcades de mig punt de diferent mida, sostingudes sobre tres pilars quadrangulars, que sostenen el pis principal de can Devesas.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	 {
        id: 'pi-023',
        idZona: 'zona-castell',
        estrelles: 1,
        coordenades: { x:  17  , y:  32 },
        imatge: 'imatges/punts-interes/pi-023.jpg',
        nom: {
            ca: 'FONT DE SANT ISIDRE',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Plaça de Sant Isidre	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Font gòtica de pedra del segle XV situada a la plaça de Sant Isidre, davant de l'escola de les Monges.
			També es coneix com a Font del Castell atès que antigament subministrava aigua al castell. El monument està format
			per un cos de planta rectangular adossat a un habitatge, amb parament de carreus polidament treballats disposats en 
			fileres horitzontals. Al frontal d'aquest cos, hi ha dues piques de pedra amb llurs respectius brolladors, sortint d'un 
			cap de lleó (afegits a la segona meitat del segle XX). Al damunt dels brolladors, al centre, apareix un òcul rodó rebaixat, 
			amb decoració gòtica que fa les funcions de ventilació. El volum es remata amb una cornisa o ràfec, als vèrtexs exteriors del 
			qual llueixen dues gàrgoles amb figures de bèsties obrades per l'escultor Manel Casserres i Boix. Al capdamunt, ja fent part de la
			façana de la casa, figura una fornícula protegida per un vidre amb una imatge del Sant Isidre. 
			A la dreta de la font, hi ha un abeurador de pedra on davalla l'aigua de les dues piques de la font i també 
			l'aigua sortint d'una pedra tosca adossada a la paret.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
		 {
        id: 'pi-030',
        idZona: 'zona-castell',
        estrelles: 1,
        coordenades: { x:  10  , y:  58 },
        imatge: 'imatges/punts-interes/pi-030.jpg',
        nom: {
            ca: 'COL·LEGI DE LA COMPANYIA DE MARIA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Travessia de Sant Isidre, 3-5	 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Edifici religiós, de grans dimensions, auster i sobri, construït al segle XVIII, a l'extrem oest del nucli antic, i 
			que comprèn el Portal del Castell (a sobre el qual s'alçava l'antic castell de Solsona). Per la banda oest aboca a la plaça del 
			Camp i per la banda est, ja dins del recinte antic, al carrer del Castell i a la travessia de Sant Isidre. Es tracta d'un complex 
			format per diferents edificis rectangulars, essent els principals disposats en forma de "U" amb la cara buida orientada a migdia, on 
			hi havia l'antic hort. L'ala oest, que aboca al Camp, és la més gran, i consta de baixos, tres pisos i sota coberta, amb coberta de 
			teula àrab a quatre aigües, on destaca quasi al mig, una torre de base quadrada i cos superior vuitavat amb finestrals a tots els vents 
			i coberta a vuit vessants. L'ala est consta de baixos (amb portalada a la travessia de Sant Isidre) i dos pisos, amb coberta de teula àrab 
			a tres aigües. Unint aquests dos grans cossos, hi ha l'església dedicada a la Immaculada Concepció (molt modificada), una esvelta nau amb 
			coberta a dues aigües, amb el portal allindat i orientat a la travessia de Sant Isidre, tres grans finestrals i una rosassa a mig aire, i 
			campanar d'espadanya d'un sol ull al capcer. Adossat a l'església, hi ha una quarta ala, que era l'antic castell que fou cedit per ampliar el
			convent, en la qual hi ha un portal adovellat d'entrada. Aquest cos consta de baixos, dos pisos i golfes, i a sota seu s'hi obre el 
			portal del Castell. El parament de l'església, el sòcol de l'ala est i l'ala quarta són de pedra carreuada i a la vista, mentre que a la resta de cossos,
			el parament és arrebossat i pintat. En temps recents es va alçar un petit cos de planta baixa porxada i pis que tanca la "U" generant un ombrívol pati 
			interior circumdat d'arcs de mig punt. El 2020, les darreres monges de la Companyia de Maria que encara restaven van abandonar el lloc. Tanmateix, el
			col·legi perdura sota el nom d'escola Arrels a les fases infantil 
			i primària amb les dependències del convent, des de les habitacions a l'església, habilitades per a l'activitat educativa.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	
	    // ============================================================
    // ZONA NORD — un punt d'exemple perquè el mapa i el filtre funcionin
    // ============================================================
		 {
        id: 'pi-025',
        idZona: 'zona-nord',
        estrelles: 1,
        coordenades: { x:  70  , y:  38 },
        imatge: 'imatges/punts-interes/pi-025.jpg',
        nom: {
            ca: 'CAL GILIBETS',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carrer dels Dominics, 15  ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Gran edifici amb una façana d'amplada considerable que afronta a tres carrers, la plaça del Consell Comarcal per davant, a llevant,
			i a les travessies de Sant Llorenç i dels Dominics, a sud i nord respectivament. Pròpiament, està format per la unió de dos cossos principals 
			i un cos annex a migdia. Al centre de la façana s'alça l'alt cos principal, de planta baixa i tres pisos, amb coberta de teula àrab a dos vessants 
			amb el carener en perpendicular a la façana. A la dreta, s'alça l'altre cos principal de planta baixa, dos pisos i sota coberta, i coberta de teula 
			àrab amb aiguavessant als dos carrers. L'edifici annex és de planta baixa i pis amb coberta a un sol vessant. Els paraments són de pedra irregular, 
			carejada excepte els marcs de les obertures i el tercer pis del cos central, que són de maó i les cantonades, de pedra carreuada. La composició de les 
			obertures de la façana principal és simètrica en els tres cossos, essent en un sol eix al cos central, i en tres eixos als cossos laterals. Al seu torn, 
			la façana lateral del segon cos s'estructura en dos eixos verticals. Excepte l'artística galeria de tres finestrons de l'alt pis superior i l'òcul ogival 
			de damunt, totes les obertures, tant els portals dels baixos com les balconades i finestrals dels pisos són en arc rebaixat amb maó pla a sardinell. Cal dir 
			que moltes obertures, sobretot a l'annex, posteriorment van ser tapiades. Del conjunt, ressalta especialment l'ample ràfec o barbacana de fusta dels dos cossos
			principals, amb uns rombes de fusta motllurats i una mena d'alfil invertit entremig de cada permòdol. A la cantonada amb la travessia dels Dominics, hi llueix
			una placa de pedra fent angle recte, on diu: "L'any 1.971 es recupera el Carnaval de Solsona. 
			Des d'aquesta data Ramon Gilibets, "Gilmon" ha estat dedicat a aquesta festa. Pel seu esforç i treball. Gràcies Gilmon. IV-III-MM".</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	 {
        id: 'pi-026',
        idZona: 'zona-nord',
        estrelles: 1,
        coordenades: { x:  42  , y:  6 },
        imatge: 'imatges/punts-interes/pi-026.jpg',
        nom: {
            ca: 'CAL PAU DE MARRUSSELLA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Carretera de Bassella, 19 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Gran i singular casalici d'estil modernista, situat a l'extrem nord de l'antiga vila murallada, amb
			façana a tres carrers, el carrer de Sant Llorenç, el carrer de Santa Llúcia i la carretera de Bassella. Data de 
			1915 i és obra de l'arquitecte Puig i Boada. Consta d'una planta trapezoidal que s'estructura en planta baixa, dos 
			pisos i un àtic amb terrassa, més una planta soterrània al nivell de la carretera de Bassella (que permet salvar el desnivell
			de l'antiga muralla). El pis de l'àtic és cobert de teula plana a quatre aigües. Els paraments dels murs són de pedra carejada 
			disposada irregularment en contrast als marcs de les obertures i les cantonades que són fets amb pedra polidament treballada.
			La composició de les façanes només s'estructura en eixos verticals al costat de la carretera de Basella, però a totes tres
			resulta harmònica. Destaquen les diferents portalades de la planta baixa amb un arc semiconopial, i les obertures amb arc 
			escalonat dels dos pisos, amb les balconades bombades de ferro forjat ornades amb rica decoració floral del primer pis, i les
			galeries en grups de tres finestrals al segon. Però potser l'element més vistós del conjunt són les dues tribunes tubulars
			maclades a les cantonades del primer pis. Aquestes dues tribunes generen un terrat- balconet al nivell del segon pis i es 
			rematen al terrat amb una mena d'espadanya amb sengles inscripcions d'estil modernista: "1915" i les inicials de la família.
			El terrat ve circumdat per una barana de gelosia.
			Enfront de l'edifici a la banda del carrer Santa Llúcia, hi ha un antic magatzem de la casa,amb alguns portals a semblança.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	{
        id: 'pi-027',
        idZona: 'zona-nord',
        estrelles: 1,
        coordenades: { x:  66  , y:  28 },
        imatge: 'imatges/punts-interes/pi-027.jpg',
        nom: {
            ca: 'ELS DOMINICS - HOSPITAL DELS LLOBERA',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'C/ dels Dominics, 14',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Noble, sumptuós i elegant edifici gòtic, bell exemplar de l'arquitectura catalana del segle XV, amb l'estructura 
			clàssica de les cases senyorials de l'època. És a la banda nord-est del nucli antic, confrontant amb el traçat de l'antiga muralla.
			És format per un conjunt de quatre cossos rectangulars adossats que generen un pati-claustre interior quadrangular. L'aparell 
			murari és polidament carreuat a les quatre façanes, disposat en fileres regulars i a la vista, i les cobertes són de teula àrab a dues aigües.
			El conjunt, comptant el pati, ocupa al voltant de 700 m² assentats sobre una planta no del tot quadrada atès que el volum est és lleugerament 
			més ample. L'edifici consta de planta baixa, pis noble i golfes, tot guanyant una planta per la banda est, en trobar-s'hi el volum més gran i que
			s'adapta al desnivell vers aquell costat. La façana principal, orientada a la plaça, a migdia, presenta dues portalades adovellades amb arc de mig punt,
			i sis finestrals gòtics bigeminats al pis. A les golfes, precedida per una gruixuda cornisa, apareix una galeria de finestrals rectangulars, i a damunt seu,
			un ample ràfec de fusta. La porta que dona accés des del carrer és renaixentista (1641). A la façana que aboca a oest, al carrer dels Dominics, s'obre una altra
			noble portalada adovellada en arc de mig punt rematada per un guardapols d'inspiració cistercenca. En aquest costat al pis també apareixen tres finestrals gòtics 
			bigeminats, i la part superior a semblança de la façana principal. A la façana posterior, al carrer Regata, únicament presenta una espitllera als baixos i cinc 
			finestrals gòtics al pis. Al tombant est, vers l'actual carretera de Bassella es genera un reclau amb l'ala nova est, on es van obrar dues portalades en arc molt
			rebaixat, ben segur al segle XIX, en ocasió del nou edifici.Al claustre interior, hi destaca l'escala sobre-volta i una esvelta galeria d'arcuacions ogivals,
			volada sobre el pati i sostinguda per mènsules. Al llarg del segle XIX, a llevant de l'edifici, s'hi adherí una ala rectangular i un petit cos a l'extrem, tot
			plegat en forma de "L", amb façana principal a la plaça i façana posterior a la carretera de Bassella, sobreposada sobre el traçat de l'antiga muralla. Aquest
			complex és de planta baixa i dos pisos, amb coberta a dues aigües, i a la part posterior guanya un pis als baixos en adaptar-se al nivell inferior del carrer. 
			Els baixos s'obren a la plaça amb una porxada en arcs de mig punt fet des de maó. La composició de les obertures és del tot simètrica amb una successió de deu 
			eixos verticals que s'alineen en correspondència als arcs de la porxada. El 1989 el Consell Comarcal del Solsonès va comprar tot l'edifici al Bisbat 
			i després d'una restauració i hi instal·là la seu de l'organisme el 1992. També acull les dependències de l'Arxiu Comarcal.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
	{
        id: 'pi-028',
        idZona: 'zona-nord',
        estrelles: 1,
        coordenades: { x:  6  , y:  20 },
        imatge: 'imatges/punts-interes/pi-028.jpg',
        nom: {
            ca: 'HOTEL SANT ROC',
            es: '[ES-TODO] Punto de ejemplo',
            en: '[EN-TODO] Example point',
            fr: '[FR-TODO] Point d\'exemple',
        },
        estil: {
            ca: 'Pg. Vallfred, 1 ',
            es: '[ES-TODO]',
            en: '[EN-TODO]',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `<p>Edifici modernista, un dels màxims exponents d'aquest estil a Solsona, amb semblança amb la Casa Ametller de
			Barcelona i les cases que voregen els canals d'Amsterdam, bàsicament per la disposició de la façana i en particular pel
			frontó del coronament. Es troba a l'extrem nord del nucli antic de Solsona, amb façana a tres carrers, la principal a l'est,
			al carrer de Vallfred (que antigament tancava el recinte murallat), i les laterals abocant a la carretera de Bassella a nord, i
			a sud, al passatge Guitart (que pren el nom del promotor de l'hotel). És un majestuós edifici amb un gran cos principal de planta 
			aproximadament rectangular i planta baixa, dos pisos i golfes, i un semisoterrani adaptant-se al desnivell vers la carretera de Bassella. 
			A tot al voltant de la planta baixa el parament és de pedra polidament carreuada i a la vista i les portalades són en arc ogival. Als pisos, 
			el parament és arrebossat, pintat i decorat amb motius florals, i per bé que les tres façanes són d'amplada desigual, a totes tres la composició 
			de les obertures és harmònica i amb alternança de finestrals de llinda escalonada -en alguns casos, bigeminats-, finestrals en arc rebaixat a les 
			galeries corregudes superiors, o finestrals rectangulars. Les tres façanes són rematades amb un frontó escalonat, amb llurs tres corresponents cobertes 
			fortament inclinades, que tal vegada són la part més vistosa del conjunt, junt amb la tribuna semivuitavada maclada al vèrtex sud-est del segon pis, i la
			torreta amb coberta a quatre aigües que sobresurt pel darrere. També ressalta l'atri amb tres arcades de la façana principal que dona entrada a l'hotel a 
			través d'una noble escalinata. Cal esmentar el treball de forja dels tancaments i els balustres de les terrasses, 
			en especial la que aboca al costat nord-est. Al costat oest, l'edifici s'obre a un pati interior on llueix un sol de pedra.</p>`,
            es: `<p>[ES-TODO] Descripción del primer punto de interés de la Zona 1.</p>`,
            en: `<p>[EN-TODO] Description of the first point of interest of Zone 1.</p>`,
            fr: `<p>[FR-TODO] Description du premier point d'intérêt de la Zone 1.</p>`,
        },
    },
];
