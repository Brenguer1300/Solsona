// ============================================================
// DADES: Zones del poble (plantilla)
// Cada zona correspon a una àrea clicable del mapa principal.
// viewBox del mapa principal: definit a index.html (per defecte
// "0 0 100 88"; ajusteu-lo a la proporció real de la imatge).
// ============================================================
//
// PLANTILLA — Adapteu les 4 zones al vostre poble:
//   · `id`             : identificador únic en kebab-case
//   · `nom`            : nom real de la zona en cada idioma
//   · `arxiuMapa`      : ruta al SVG/imatge del mapa detallat
//   · `formaArea`      : path SVG de l'àrea clicable al mapa principal
//                        (coordenades del viewBox 0..100 x 0..alçada)
//   · `centreEtiqueta` : posició del text del nom sobre el mapa
//
// Els `id` s'han de mantenir sincronitzats amb:
//   · index.html    → atribut `data-id-zona` de cada `<g class="zona-clicable">`
//   · punts.js      → camp `idZona` de cada punt d'interès
// ============================================================


/**
 * @typedef {Object} Zona
 * @property {string} id        - Identificador únic, en kebab-case
 * @property {Object} nom       - Nom de la zona en els 4 idiomes
 * @property {string} nom.ca    - Nom en català
 * @property {string} nom.es    - Nom en castellà
 * @property {string} nom.en    - Nom en anglès
 * @property {string} nom.fr    - Nom en francès
 * @property {string} arxiuMapa - Ruta al SVG del mapa detallat de la zona
 * @property {string} formaArea - Path SVG de l'àrea clicable al mapa principal
 * @property {{x: number, y: number}} centreEtiqueta
 *                              - Punt on JS col·locarà el text del nom
 */

/** @type {Zona[]} */
const ZONES = [

    // ----------------------------------------------------------
    // Zona 1
    // ----------------------------------------------------------
    {
        id: 'zona-catedral',
        nom: {
            ca: 'Zona Catedral',
            es: 'Zona 1',
            en: 'Zone 1',
            fr: 'Zone 1',
        },
        arxiuMapa: 'imatges/mapes-zones/zona-catedral.jpg',
        // Coordenades de plantilla — substituïu pel path real
        formaArea: 'M51.7,48.5 L51.4,63.5 L72.8,64.2 L73.6,49 Z',
        centreEtiqueta: { x: 50, y: 50 },
    },

    // ----------------------------------------------------------
    // Zona 2
    // ----------------------------------------------------------
    {
        id: 'zona-castell',
        nom: {
            ca: 'Zona Castell',
            es: 'Zona 2',
            en: 'Zone 2',
            fr: 'Zone 2',
        },
        arxiuMapa: 'imatges/mapes-zones/zona-castell.jpg',
        formaArea: 'M0,0 L0,0 L0,0 L0,0 Z',
        centreEtiqueta: { x: 50, y: 50 },
    },

    // ----------------------------------------------------------
    // Zona 3
    // ----------------------------------------------------------
    {
        id: 'zona-nord',
        nom: {
            ca: 'Zona Nord',
            es: 'Zona 3',
            en: 'Zone 3',
            fr: 'Zone 3',
        },
        arxiuMapa: 'imatges/mapes-zones/zona-nord.jpg',
        formaArea: 'M31.4,4.7 L30.9,36 L79.7,34.8 L76.9,5.1 Z',
        centreEtiqueta: { x: 50, y: 50 },
    },

   

];
