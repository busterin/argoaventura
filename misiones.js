const ARGO_MISIONES = {
  BATTLE_MISSIONS: [
    {
      id: "rebajas-de-primavera",
      title: "Rebajas de primavera",
      text: "Un extraño vendedor dice tener un objeto que nos podría interesar y que está muy ligado con la corona. ¿Podrá darnos pistas acerca de la conspiración contra el Rey? Vale la pena intentarlo. Estos vendedores suelen ser muy astutos, debemos enviar a alguien con gran capacidad de negociación o no conseguiremos nada.",
      indicatedCharacterIds: ["helena"],
      successNote: "Negociaste con el vendedor misterioso y te entregó un valioso anillo. ¿Tendrá alguna relación con la corona?",
      reward: { type: "ring" }
    },
    {
      id: "cuidando-el-comercio-local",
      title: "Cuidando el comercio local",
      text: "Los bandidos no paran de saquear los campos cercanos a Orbis y los aldeanos están desesperados. Envía a alguien capaz de darles una lección.",
      indicatedCharacterIds: ["eliot"],
      successNote: "Los bandidos han tenido que huir y los aldeanos están muy contentos y ahora producen más rápido y con mayor seguridad. El marcador de alimentos ha aumentado en 5.",
      reward: { type: "food", amount: 5 }
    },
    {
      id: "el-ducado-maldito",
      title: "El ducado maldito",
      text: "El conde de OsoVil está desesperado, su hija ha contraído una terrible enfermedad y no sabe cómo sanarla. Está dispuesto a ofrecer una buena suma a aquel que salve su vida.",
      indicatedCharacterIds: ["jane"],
      successNote: "La hija del duque tan solo tenía un resfriado común, pero el duque es muy dramático y nosotros le hemos dado mucho bombo y platillo para que pareciese que estábamos curando la peste negra. Nuestro dinero ha aumentado en 10.",
      reward: { type: "money", amount: 10 }
    },
    {
      id: "feria-de-trueques",
      title: "Feria de trueques",
      text: "Los comerciantes de los alrededores han montado una feria improvisada junto al río. Si cerramos buenos tratos, podríamos llenar los almacenes sin gastar de más. Hace falta cabeza fría para no salir estafados.",
      indicatedCharacterIds: ["helena"],
      successNote: "La feria terminó con tratos muy favorables para Orbis. Entraron suministros frescos y el marcador de alimentos ha aumentado en 6.",
      reward: { type: "food", amount: 6 }
    },
    {
      id: "teatro-en-la-plaza",
      title: "Teatro en la plaza",
      text: "Una troupe ambulante pide ayuda para estrenar una función en Orbis. Si sale bien, el ánimo del pueblo puede subir mucho, pero el montaje requiere algo más que entusiasmo.",
      indicatedCharacterIds: ["camus"],
      successNote: "La función fue un éxito rotundo y el pueblo lleva días hablando de ella con una sonrisa. La felicidad de Orbis ha aumentado en 8.",
      reward: { type: "pueblo", amount: 8 }
    },
    {
      id: "impuestos-en-la-frontera",
      title: "Impuestos en la frontera",
      text: "Un recaudador oportunista está cobrando peajes abusivos a los mercaderes que van hacia Orbis. Si logramos frenar el abuso, parte de ese flujo comercial volverá a nuestras arcas.",
      indicatedCharacterIds: ["eliot"],
      successNote: "Se acabaron los peajes abusivos y los comerciantes han vuelto a pasar por Orbis. El marcador de dinero ha aumentado en 7.",
      reward: { type: "money", amount: 7 }
    },
    {
      id: "brote-en-los-campos",
      title: "Brote en los campos",
      text: "Una plaga extraña está secando cultivos a gran velocidad. Necesitamos una solución práctica y rápida para salvar la cosecha antes de que sea tarde.",
      indicatedCharacterIds: ["jane"],
      successNote: "La plaga quedó controlada antes de extenderse y se salvaron varias parcelas. El marcador de alimentos ha aumentado en 5.",
      reward: { type: "food", amount: 5 }
    },
    {
      id: "consejo-de-barrio",
      title: "Consejo de barrio",
      text: "Los vecinos de varios barrios están enfrentados por el uso de pozos y tierras comunales. Si no lo arreglamos pronto, la tensión puede estallar. Hace falta una mente ordenada para mediar sin favoritismos.",
      indicatedCharacterIds: ["helena"],
      successNote: "Se alcanzó un acuerdo entre barrios y el ambiente en Orbis mejoró de inmediato. La felicidad del pueblo ha aumentado en 6.",
      reward: { type: "pueblo", amount: 6 }
    },
    {
      id: "graneros-auditados",
      title: "Graneros auditados",
      text: "Los registros del granero no cuadran con las reservas reales. Si detectamos fugas y reorganizamos compras, Orbis puede recuperar margen para semanas complicadas.",
      indicatedCharacterIds: ["darren", "helena"],
      successNote: "La auditoría de graneros destapó pérdidas y mejoró la gestión. El marcador de dinero ha aumentado en 8.",
      reward: { type: "money", amount: 8 }
    },
    {
      id: "ruta-de-forraje",
      title: "Ruta de forraje",
      text: "El ganado de varias aldeas lleva días mal alimentado y la producción de leche ha caído. Necesitamos coordinar pastos y forraje antes de que empeore.",
      indicatedCharacterIds: ["amanda", "jane"],
      successNote: "Se reorganizaron pastos y forraje a tiempo, y la producción se recuperó. El marcador de alimentos ha aumentado en 7.",
      reward: { type: "food", amount: 7 }
    },
    {
      id: "mercado-nocturno",
      title: "Mercado nocturno",
      text: "Un mercado clandestino está drenando ventas del comercio local. Si lo regulamos sin romper la economía de barrio, podremos recuperar recaudación y estabilidad.",
      indicatedCharacterIds: ["darren", "eliot"],
      successNote: "El mercado nocturno quedó regulado y volvió la recaudación al pueblo. El marcador de dinero ha aumentado en 6.",
      reward: { type: "money", amount: 6 }
    },
    {
      id: "siembra-escalonada",
      title: "Siembra escalonada",
      text: "Las lluvias se han vuelto impredecibles y varias parcelas están perdiendo rendimiento. Conviene rediseñar turnos de siembra y riego para salvar la temporada.",
      indicatedCharacterIds: ["amanda", "camus"],
      successNote: "El nuevo plan de siembra evitó pérdidas y mejoró el rendimiento de las parcelas. El marcador de alimentos ha aumentado en 6.",
      reward: { type: "food", amount: 6 }
    },
    {
      id: "fiesta-de-la-cosecha",
      title: "Fiesta de la cosecha",
      text: "La moral en Orbis está floja tras semanas tensas. Una celebración bien organizada puede reactivar al pueblo, siempre que no se convierta en un caos.",
      indicatedCharacterIds: ["darren", "amanda"],
      successNote: "La fiesta de la cosecha fue un éxito y devolvió el ánimo a los vecinos. La felicidad del pueblo ha aumentado en 7.",
      reward: { type: "pueblo", amount: 7 }
    },
    {
      id: "contrato-de-molinos",
      title: "Contrato de molinos",
      text: "Dos molineros rivales han roto su acuerdo de turnos y ahora media cosecha se está echando a perder por retrasos. Si reordenamos la producción sin encarecer costes, Orbis puede salir ganando.",
      indicatedCharacterIds: ["helena", "darren"],
      successNote: "Se renegociaron los turnos de molienda y se redujeron pérdidas. El marcador de alimentos ha aumentado en 6.",
      reward: { type: "food", amount: 6 }
    },
    {
      id: "viveros-bajo-sospecha",
      title: "Viveros bajo sospecha",
      text: "Varias semillas compradas para los huertos no están germinando como deberían. Alguien está vendiendo material de mala calidad y urge detectar dónde está el problema.",
      indicatedCharacterIds: ["amanda", "jane"],
      successNote: "Se detectó el origen del fraude y se recuperó la producción en los huertos. El marcador de alimentos ha aumentado en 7.",
      reward: { type: "food", amount: 7 }
    },
    {
      id: "patrulla-de-peajes",
      title: "Patrulla de peajes",
      text: "Algunos caminos secundarios se han llenado de cobradores improvisados que espantan caravanas. Si aseguramos las rutas sin paralizar el comercio, volverán los ingresos.",
      indicatedCharacterIds: ["eliot", "darren"],
      successNote: "Las rutas comerciales quedaron limpias y seguras, y regresaron los mercaderes. El marcador de dinero ha aumentado en 7.",
      reward: { type: "money", amount: 7 }
    },
    {
      id: "jornada-de-oficios",
      title: "Jornada de oficios",
      text: "Los aprendices del pueblo están desmotivados y varios talleres trabajan por debajo de su capacidad. Una jornada bien organizada podría reactivar la actividad y el ánimo general.",
      indicatedCharacterIds: ["helena", "camus"],
      successNote: "La jornada de oficios revitalizó talleres y vecinos. La felicidad del pueblo ha aumentado en 6.",
      reward: { type: "pueblo", amount: 6 }
    },
    {
      id: "censo-de-corrales",
      title: "Censo de corrales",
      text: "Los corrales comunales están descompensados: unos saturados y otros vacíos. Si se redistribuye bien el ganado, mejorará la producción y bajarán conflictos entre familias.",
      indicatedCharacterIds: ["amanda", "helena"],
      successNote: "Se equilibró el uso de corrales y aumentó la producción sin disputas. La felicidad del pueblo ha aumentado en 5.",
      reward: { type: "pueblo", amount: 5 }
    },
    {
      id: "caravana-del-norte",
      title: "Caravana del norte",
      text: "Una caravana de grano quiere cruzar por Orbis, pero en el desfiladero hay ataques esporádicos de saqueadores. Si garantizamos un paso seguro, conseguiremos un trato ventajoso.",
      indicatedCharacterIds: ["eliot", "camus"],
      successNote: "La caravana cruzó sin incidentes y cerramos un acuerdo excelente. El marcador de alimentos ha aumentado en 8.",
      reward: { type: "food", amount: 8 }
    },
    {
      id: "liga-de-cobradores",
      title: "Liga de cobradores",
      text: "Varios prestamistas están imponiendo intereses abusivos a artesanos del pueblo. Si reordenamos deudas y condiciones, evitaremos cierres y recuperaremos recaudación.",
      indicatedCharacterIds: ["darren", "helena"],
      successNote: "Se renegociaron las deudas y el comercio local volvió a respirar. El marcador de dinero ha aumentado en 9.",
      reward: { type: "money", amount: 9 }
    },
    {
      id: "huertos-de-niebla",
      title: "Huertos de niebla",
      text: "Una niebla persistente está debilitando brotes en los huertos altos. Hace falta combinar cuidado agrícola y medidas poco convencionales para salvar la temporada.",
      indicatedCharacterIds: ["amanda", "camus"],
      successNote: "Los huertos resistieron la niebla y la cosecha se estabilizó. El marcador de alimentos ha aumentado en 6.",
      reward: { type: "food", amount: 6 }
    },
    {
      id: "duelo-de-gremios",
      title: "Duelo de gremios",
      text: "Los gremios de herreros y carpinteros están en guerra por contratos públicos. Si no mediamos pronto, el conflicto puede paralizar al pueblo entero.",
      indicatedCharacterIds: ["helena", "jane"],
      successNote: "El conflicto entre gremios se resolvió y volvió la colaboración en el pueblo. La felicidad del pueblo ha aumentado en 7.",
      reward: { type: "pueblo", amount: 7 }
    },
    {
      id: "puesto-fronterizo",
      title: "Puesto fronterizo",
      text: "Un puesto fronterizo está reteniendo mercancías con excusas absurdas y eso encarece todo en Orbis. Necesitamos presión táctica sin escalar el conflicto.",
      indicatedCharacterIds: ["darren", "eliot"],
      successNote: "Se desbloqueó el paso fronterizo y el comercio volvió a fluir. El marcador de dinero ha aumentado en 8.",
      reward: { type: "money", amount: 8 }
    },
    {
      id: "almacenes-con-humedad",
      title: "Almacenes con humedad",
      text: "Las reservas de grano de dos barrios se están echando a perder por filtraciones en los almacenes. Si actuamos rápido, todavía podemos recuperar buena parte de la comida.",
      indicatedCharacterIds: ["jane", "amanda"],
      successNote: "Se sellaron los almacenes y se salvaron muchas reservas antes de que se perdieran. El marcador de alimentos ha aumentado en 7.",
      reward: { type: "food", amount: 7 }
    },
    {
      id: "feria-del-puente-viejo",
      title: "Feria del puente viejo",
      text: "Una feria regional quiere instalarse junto al puente viejo, pero hay disputas por tasas y permisos. Si se negocia bien, Orbis puede recaudar sin enfadar a nadie.",
      indicatedCharacterIds: ["helena", "darren"],
      successNote: "La feria quedó regularizada y dejó beneficios para las arcas del pueblo. El marcador de dinero ha aumentado en 7.",
      reward: { type: "money", amount: 7 }
    },
    {
      id: "campamento-descontento",
      title: "Campamento descontento",
      text: "Los jornaleros de las afueras amenazan con marcharse por problemas de organización y turnos injustos. Hace falta una intervención inteligente para evitar una crisis mayor.",
      indicatedCharacterIds: ["helena", "camus"],
      successNote: "Se reorganizaron los turnos y el campamento volvió a funcionar con buen ambiente. La felicidad del pueblo ha aumentado en 6.",
      reward: { type: "pueblo", amount: 6 }
    },
    {
      id: "pozos-en-conflicto",
      title: "Pozos en conflicto",
      text: "Dos aldeas cercanas se disputan el uso de varios pozos y ya han empezado los sabotajes nocturnos. Si no mediamos pronto, el suministro de agua y cultivos se resentirá.",
      indicatedCharacterIds: ["amanda", "darren"],
      successNote: "Se pactó el uso de los pozos y bajó la tensión entre aldeas. La felicidad del pueblo ha aumentado en 5.",
      reward: { type: "pueblo", amount: 5 }
    },
    {
      id: "escolta-de-semillas",
      title: "Escolta de semillas",
      text: "Una caravana transporta semillas de alta calidad para la próxima temporada, pero hay riesgo de emboscada en la ruta sur. Si llega a salvo, tendremos cosecha asegurada.",
      indicatedCharacterIds: ["eliot", "camus"],
      successNote: "La caravana llegó intacta y las nuevas semillas ya están en manos de los agricultores. El marcador de alimentos ha aumentado en 8.",
      reward: { type: "food", amount: 8 }
    }
  ]
};

window.ARGO_MISIONES = ARGO_MISIONES;
