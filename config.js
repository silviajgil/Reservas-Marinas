var config = {
    // 
    style: 'mapbox://styles/silviajgil/cmbfgu8ls005j01se019l8x5e',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic2lsdmlhamdpbCIsImEiOiJjbWJjajR3MDYxbHcwMmxzMWg1OTcwcnJtIn0.Fnc6WHTur5EYluEitNmlJg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'ISLAS DE VIDA EN OCÉANOS AMENAZADOS',
    subtitle: 'Reservas Marinas',
    byline: 'Silvia Jiménez',
    footer: 'Source: MITECO. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'fully',
            hidden: false,
            title: 'LAS RESERVAS MARINAS EN ESPAÑA',
            image: 'https://i.postimg.cc/rFPv0DxC/Barracudas.png',
            description: 'Las reservas marinas constituyen una medida específica que contribuye a lograr una explotación sostenida de los recursos de interés pesquero, estableciendo medidas de protección específicas en áreas delimitadas de los caladeros tradicionales. Estas áreas, en cuya selección se tiene en cuenta su estado de conservación, deberán reunir determinadas características que permitan la mejora de las condiciones de reproducción de las especies de interés pesquero y la supervivencia de sus formas juveniles. El efecto de una reserva marina se manifiesta por una recuperación significativa de los caladeros en los que está inserta por efecto de la dispersión de las especies cuya reproducción se ha protegido en la misma.',
            location: {
                center: [-3.82630, 40.00799],
                zoom: 5.80,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MASÍA BLANCA',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/masia-blanca/masia.jpg',
            description: 'Pequeña reserva marina de 457 ha situada en el litoral mediterráneo a unos 30 Km. al norte de la ciudad de Tarragona, tiene forma circular y se extiende por fondos inferiores a 25 metros, frente a la playa turística de Coma-Ruga. Esta reserva protege unas barras rocosas de elevada biodiversidad y zonas de alevinaje.',
            location: {
                center: [1.49941, 41.17755],
                zoom: 12.41,
                pitch: 69,
                bearing: -21.10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'ISLAS COLUMBRETES',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/islas-columbretes/columbretes.jpg',
            description: 'La reserva marina tiene forma de cuadrilátero y una superficie de 5.493 ha, en su totalidad, en aguas exteriores. Las islas tienen una extensión de 19 hectáreas, 14 de las cuales pertenecen al islote Columbrete Grande o Illa Grossa. El archipiélago de las Islas Columbretes, situado a unas 30 millas marinas del Grao de Castellón, está compuesto por cuatro grupos de islotes y algunos escollos y bajos. Esta reserva se dirige a la regeneración de los recursos objetivo de la actividad pesquera tradicional de la zona, en particular, a la langosta roja (Palinurus elephas), objetivo de una pesquería de elevado interés socioeconómico.',
            location: {
                center: [0.68868, 39.89956],
                zoom: 16.03,
                pitch: 54.06,
                bearing: -61.65
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'LEVANTE DE MALLORCA Y CALA RAJADA',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/levante-de-mallorca---cala-rajada/calarajada.jpg',
            description: 'Al nordeste de la Isla de Mallorca y en las aguas exteriores de la zona. Con una extensión de 11.285 ha, esta reserva se dirige a la regeneración de los recursos objetivo de la actividad pesquera tradicional de la zona y cuyos artes de pesca, permiten unas capturas más selectivas. La importancia de las pesquerías artesanales y el interés en proteger la zona, son  compartidos con la Comunidad Autónoma de las Islas Baleares.',
            location: {
                center: [3.42369, 39.68826],
                zoom: 12.16,
                pitch: 76,
                bearing: -86.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'DRAGONERA',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/la-dragonera/portadadedinitiva.jpg',
            description: 'Se ubica en el litoral occidental de la Isla de Mallorca en torno a la Isla de sa Dragonera, en aguas exteriores e interiores. Con una extensión de 1.367 ha, el objetivo de esta reserva es la protección y recuperación de una zona con elevado potencial en la regeneración de los recursos pesqueros, según los resultados favorables de los primeros informes obtenidos en la reserva marina en aguas interiores. La importancia de las pesquerías artesanales y el interés en proteger la zona, son  compartidos con la Comunidad Autónoma de las Islas Baleares.',
            location: {
                center: [2.31748, 39.56996],
                zoom: 13.45,
                pitch: 65.10,
                bearing: 100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'ISLA DE TABARCA',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/isla-de-tabarca/tabarca.jpg',
            description: 'Situada en el Mediterráneo, en la provincia de Alicante, frente al Puerto de Santa Pola. La reserva tiene forma rectangular y una superficie total de 1.754 ha, sus fondos oscilan entre los 0 y 40 m de profundidad y albergan praderas de Posidonia oceanica en óptimo estado de conservación lo que favorece la regeneración de los recursos pesqueros de la zona. Esta reserva se dirige a la regeneración de los recursos objetivo de la actividad pesquera considerada más tradicional de la zona y cuyos artes de pesca, permiten capturas más selectivas.',
            location: {
                center: [-0.47772, 38.19044],
                zoom: 12.79,
                pitch: 60.50,
                bearing: -57.03,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'CABO DE PALOS E ISLAS HORMIGAS',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/cabo-de-palos---islas-hormigas/cabopalos.jpg',
            description: 'Situada en la Región de Murcia, es una reserva marina mediterránea de forma rectangular de 1.931 ha junto al litoral de Cabo de Palos. La reserva integral y de máxima protección se encuentra en torno a los islotes de Las Hormigas alcanzándose fondos de más de 50 metros de profundidad. Se alternan los fondos de mäerl  y arenosos y las praderas de Posidonia oceanica. Es una zona de paso para las especies pelágicas. Esta reserva se dirige a la regeneración de los recursos objetivo de la actividad pesquera considerada más tradicional de la zona.',
            location: {
                center: [-0.70785, 37.62142],
                zoom: 13.20,
                pitch: 57.50,
                bearing: -74.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ] 
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'CABO TIÑOSO',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/cabo-tinoso/galeria-de-fotos/cabotinosoportada.jpg',
            description: 'Situada en la Región de Murcia, es una reserva marina mediterránea que se localiza al sur de Cartagena y tiene una superficie de 1173,79 ha. Comprende tanto aguas interiores como exteriores, siendo por tanto su gestión compartida entre la Comunidad Autónoma de Murcia y el Ministerio de Agricultura, Pesca y Alimentación respectivamente. El entorno de Cabo Tiñoso ofrece un gran potencial ecológico al contar con praderas de fanerógramas marinas, cuevas sumergidas o arrecifes artificiales.Estas praderas suponen un hábitat excepcional para el alevinaje de especies de interés pesquero.',
            location: {
                center: [-1.14628, 37.54006],
                zoom: 13.04,
                pitch: 64.77,
                bearing: 61.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'CABO DE GATA-NÍJAR',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/cabo-de-gata-nijar/cabogata.jpg',
            description: 'Se encuentra en la provincia de Almería, al pie de la Sierra de Cabo de Gata y se extiende frente a una franja costera de más de 45 Km. entre Carboneras al Norte y la punta de Cabo de Gata al Sur. La superficie total protegida alcanza las 12.200 ha, junto con las aguas protegidas del Parque Natural de Cabo de Gata - Níjar, siendo la extensión de la reserva marina de 4.653 ha. En sus fondos se alternan superficies rocosas y arenosas. Alberga las praderas más meridionales de Posidonia oceanica, del Mediterráneo Español. El fin de la reserva marina es la protección, regeneración y el desarrollo de los recursos de interés pesquero para el mantenimiento de las pesquerías artesanales, que permitan a los pescadores de la zona preservar su modo de vida tradicional.',
            location: {
                center: [-1.90052, 36.95840],
                zoom: 12.8,
                pitch: 72.50,
                bearing: -36
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []  
        },
        {
            id: 'eleventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'ISLA DE ALBORÁN',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/isla-de-alboran/alboran.jpg',
            description: 'La  de Alborán se encuentra en el Mediterráneo meridional de Almería y ocupa una superficie de 1.650 ha en torno a la isla de Alborán y al bajo de la "Piedra Escuela" al nordeste de la isla. Protege los afloramientos de una dorsal que emerge en un área de transición entre las aguas mediterráneas y las atlánticas cuya mezcla alberga ecosistemas de elevada diversidad.',
            location: {
                center: [-3.03603, 35.93814],
                zoom: 16.52,
                pitch: 45.10,
                bearing: 123.07
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelfth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'ISLA GRACIOSA E ISLOTES DEL NORTE DE LANZAROTE',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/isla-graciosa/graciosa.jpg',
            description: 'Esta reserva marina se extiende en el Atlántico abarcando el Norte de la isla de Lanzarote, la Graciosa e islotes del Archipiélago Chinijo (Montaña Clara, Roque Oeste, Roque Este y Alegranza). Tiene forma rectangular y una extensión de 70.439 ha, sus aguas son ricas en nutrientes, debido a un afloramiento de aguas frías y ricas en pesca, lo que ha sido durante años la actividad principal de los habitantes de la Isla Graciosa. Con esta reserva marina se prolonga al medio marino la protección ya existente en la parte el terrestre del Parque Natural del Archipiélago de Chinijo. Esta reserva se dirige a la regeneración de los recursos objetivo de la actividad pesquera considerada más tradicional de la zona y cuyos artes de pesca, permiten capturas más selectivas.',
            location: {
                center: [-28.03454, 39.03926],
                zoom: 12.22,
                pitch: 58,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'ISLA DE LA PALMA',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/isla-de-la-palma/palma.jpg',
            description: 'Esta reserva marina alcanza los 1000 m de profundidad y se extiende sobre 3.455 ha en el litoral sur occidental de la isla de La Palma, entre la Caleta de los Pájaros, la Punta Gruesa y la isóbata de 1.000 m como límite exterior. Los informes de las Universidades de La Laguna y de Las Palmas, así como del Instituto Español de Oceanografía encontraron idónea esta zona para establecer una reserva marina por su biodiversidad, el estado de las poblaciones de interés pesquero y la posibilidad de recuperación de las mismas, mediante la regulación de las pescas artesanales locales.',
            location: {
                center: [-17.86936, 28.48785],
                zoom: 14,
                pitch: 71.70,
                bearing: 98.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'LA RESTINGA-MAR DE LAS CALMAS',
            image: 'https://www.mapa.gob.es/dam/mapa/contenido/pesca/temas--nuevo/proteccion-de-los-recursos-pesqueros/reservas-marinas-y-especies-protegidas/reservas-marinas-de-espana/la-restinga/restinga.jpg',
            description: 'Esta reserva marina se encuentra en el Atlántico en el extremo suroccidental de la isla de El Hierro, que es la más occidental de las islas del archipiélago canario. Alcanza profundidades de más de 300 metros al ser El Hierro una isla de origen volcánico. Tiene una forma aproximada de cuadrilátero con una superficie de 1.180 ha. Sus aguas se caracterizan por las calmas continuadas, al ubicarse la reserva al abrigo de los vientos alisios y por su carácter tropical, albergando especies que no se encuentran en el resto del archipiélago. Los recursos pesqueros son objeto de una pesquería artesanal que ha dado lugar a modalidades de pesca particulares de la zona. La casi total cobertura algal unida a la variedad de sus fondos favorece una elevada biodiversidad.',
            location: {
                center: [-17.99469, 27.65615],
                zoom: 13.63,
                pitch: 71.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteen-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'UN OCÉANO AMENAZADO',
            image: 'https://postimg.cc/8jwcQYTG',
            description: 'El océano sigue sufriendo numerosas amenazas derivadas en gran medida de prácticas no sostenibles, que causan profundos impactos en el medio marino, como la acidificación, la destrucción de hábitats, la pérdida de biodiversidad y la contaminación marina, a los que se suman los efectos del cambio climático . Alrededor del 66% de la superficie marina ha sido alterada de forma significativa por las actividades humanas y casi 33% de los corales de arrecife y más de un tercio de todos los mamíferos marinos están amenazados, mientras la contaminación por plásticos se ha multiplicado por diez desde 1980.',
            location: {
                center: [-56.41246, 35.28795 ],
                zoom: 4.39,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixteenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'ESPAÑA AVANZA HACIA EL 30% DE PROTECCIÓN DEL MAR EN 2030',
            image: 'https://postimg.cc/V0gfwSQg',
            description: 'Frente a estas amenazas globales, las áreas marinas protegidas constituyen un instrumento para la conservación de la biodiversidad y el uso sostenible de los ecosistemas marinos. La nueva Estrategia de Biodiversidad de la Unión Europea establece como meta alcanzar el 30% de superficie marina protegida en 2030. Objetivo compartido en la Declaración de Emergencia Climática del Gobierno de España. La ONU, a través de los Objetivos de Desarrollo Sostenible (ODS), también insta a los países a avanzar en la ampliación de las áreas marinas protegidas. Recientemente España ha anunciado que alcanzará un 25,7% de superficie de áreas marinas protegidas, avanzando hacia el objetivo del 30% en 2030. Para ello, se incorporarán a la Red Natura 2000 cinco nuevas áreas: los montes submarinos del canal de Mallorca; los del Seco de Palos; los cañones de Capbretón; los bancos del Mar de Alborán y el espacio marino de la Costa Central Catalana. Asimismo, se impulsará la declaración del Parque Nacional del Mar de las Calmas y el área de cría del cachalote en el norte de Menorca.',
            location: {
                center: [8.08266, 44.97949],
                zoom: 4.39,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventeenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'UN LARGO CAMINO POR RECORRER',
            image: 'https://postimg.cc/0zFJF4CQ',
            description: 'Pese a todos los esfuerzos de los últimos años, España se situaba a finales de 2024 en un vergonzoso 40º puesto con un 12.8% de nuestras aguas protegidas. Muy por debajo de la media europea (15,46%) y de la mundial (14,10%). Son muchas las iniciativas en marcha para mejorar estas cifras, pero la realidad es que aún nos queda mucho camino que recorrer. Es urgente comenzar a pensar en verde para que nuestro planeta siga siendo azul.',
            location: {
                center: [21.12199, 22.52747],
                zoom: 1.76,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
