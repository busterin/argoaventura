(function () {
  const ARGO_DIALOGUES = {
    JANE_DIALOGUE_SEQUENCE: [
      {
        speaker: "jane",
        line: "¡Hola! Mi nombre es Jane, soy la alquimista del pueblo. ¿Así que tu vas a encargarte de administrar el pueblo a partir de ahora?"
      },
      {
        speaker: "jane",
        line: "Tendrás que tener en cuenta tres factores al finalizar cada día: El nivel de comida del pueblo, la felicidad de sus habitantes y el dinero."
      },
      {
        speaker: "jane",
        line: "Pero tranquila, aquí nunca hay muchas complicaciones."
      },
      {
        speaker: "evelyn",
        line: "¿Por qué en este pueblo todos habláis como si estuviesemos en el tutorial de un juego?"
      }
    ],
    CAMUS_DIALOGUE: [
      "Recorre el pueblo y conoce a sus habitantes para comprender mejor tus labores a partir de ahora.",
      "Busca al viejo Darren. El te explicará cómo funciona todo."
    ],
    DARREN_DIALOGUE_SEQUENCE: [
      {
        speaker: "darren",
        line: "Vaya, vaya. Así que tu eres la famosa Evelyn, la gran capitana de la guardia descartada por el Rey. Veo que nos mandan lo mejor de lo mejor.",
        speechExtraTop: -56
      },
      { speaker: "evelyn", line: "Menos sorna...", speechExtraTop: 28 },
      {
        speaker: "darren",
        line: "Soy Darren, antiguo alcalde del pueblo. Gestionar este sitio no es complicado pero tampoco se puede hacer a lo loco. Te explicaré los principios básicos. Aquí abajo verás la barra de inventario, ahí se guardarán todos los objetos que vayas encontrando por ahí. Para usarlos, arrastralos hacia el sitio correcto. Si te equivocas, te darás cuenta.",
        highlight: "slot-1",
        speechExtraTop: 0
      },
      {
        speaker: "darren",
        line: "Este es el contador de COMIDA, cada día que pase se irá descontando comida. Tienes que encargarte de que se produza o se compre comida para el pueblo. Si llegamos a 0 todo se acabó. No creo que el Rey te perdone más veces...",
        highlight: "alimentos",
        speechExtraTop: -26
      },
      {
        speaker: "darren",
        line: "Lo mismo pasa con el DINERO. Cuanto más consigas, más prospero será el pueblo. Pero que sea de forma legal, por favor. Ya te imaginas que pasará si el contador llega a 0 ¿no?",
        highlight: "dinero",
        speechExtraTop: 0
      },
      {
        speaker: "darren",
        line: "Y por último, el contador del PUEBLO. Aquí se refleja lo contentos que estamos los habitantes del pueblo, si estamos contentos con tu gestión y con la vida en este lugar en general. No quiero repetirme mucho. Tu no llegues a 0 ¿vale?",
        highlight: "pueblo",
        speechExtraTop: -84
      },
      { speaker: "darren", line: "¿Tienes alguna duda?", speechExtraTop: -84 },
      { speaker: "evelyn", line: "No he entendido nada de nada...", speechExtraTop: 0 },
      { speaker: "darren", line: "Ay... Preguntame lo que quieras, anda.", speechExtraTop: 0 }
    ],
    DARREN_DAYS_DIALOGUE: [
      "Abajo tienes un icono que al pulsarlo finaliza el día. Ten en cuenta que al finalizar el día se gastarán recursos, así que antes de hacerlo asegurate de que has aprovechado el día al máximo."
    ],
    DARREN_HELP_DIALOGUE: [
      "Mañana Helena te esperará en la plaza del pueblo, ella te ayudará a gestionarlo todo, aunque hay muchas cosas que solo podrás gestionar o descubrir recorriendo el pueblo y a veces, solo en días concretos."
    ],
    HELENA_DIALOGUE_SEQUENCE: [
      {
        speaker: "helena",
        line: "¡Hola, Evelyn! Un gusto tenerte por aquí. Soy Helena, la escribana del pueblo. Solía ayudar a Darren y creo que también puedo ayudarte a ti. Antes de finalizar el día, ven a hablar conmigo y podemos discutir como distribuir los recursos del pueblo."
      },
      { speaker: "evelyn", line: "¿Vas a escribir mis memorias?" },
      {
        speaker: "helena",
        line: "¿Pero me estás escuchando? Espero que me paguen bien por esto... Mas bien, espero que me paguen... Todos los días debes recorrer el pueblo para ver como están sus habitantes, y la localidad en si, quizás puedas ayudarles directamente."
      },
      {
        speaker: "helena",
        line: "Yo te plantearé formas de administrar el dinero pero debes tener algo claro, Evelyn: Tus acciones tendrán consecuencias y no puedes contentar a todos. Tenlo muy presente. Hoy intenta familiarizarte con el pueblo y ya mañana comenzamos a trabajar. Me he tomado la libertad de gestionar yo los alimentos en esta ocasión."
      },
      { speaker: "evelyn", line: "Genial, muchas gracias. Aunque eso de las consecuencias no suena muy bien..." }
    ],
    HELENA_DAY2_INTRO: [
      "¡Hola! Te muestro opciones acerca de como gestionar los recursos en el día de hoy. Recuerda que soy totalmente objetiva y algunas de las opciones que te ofrezco pueden ser erróneas. Queda a tu criterio escoger las más optimas."
    ],
    HELENA_DAY2_REST_DIALOGUE: [
      "Descansa por hoy, mañana te traeré nuevas sugerencias."
    ],
    HELENA_DAY2_BANDITS_FAIL_NOTE: "Los bandidos siguen campando a sus anchas (-4 🍞)",
    HELENA_DAY2_BANDITS_SUCCESS_NOTE: "Los mercenarios han ahuyentado a los bandidos, aunque temes que esto pueda tener consecuencias... (+5 🍞 +5 🏘️)",
    HELENA_DAY2_PARTY_NOTE: "¡Menudo fiestón has dado! Aunque quizás hayas derrochado demasiado y más teniendo en cuenta el poco tiempo que llevas aquí... (+10 🏘️)",
    INTRO_DIALOGUE_SEQUENCE: [
      { speaker: "evelyn", line: "Y así es como acabé aquí.", speechExtraTop: 0 },
      { speaker: "camus", line: "¿Eras la Capitana de la guardia del Rey y te han mandado a este lugar? Si que tienes que haber hecho algo grave...", speechExtraTop: -28 },
      { speaker: "evelyn", line: "Eh... bueno, según la opinión del Rey, si... En fin, ahora tengo que encargarme de gestionar este pueblo y hacer que todo funcione bien.", speechExtraTop: 34 },
      { speaker: "camus", line: "No te preocupes, este es un pueblo muy tranquilo. Date una vuelta para entenderlo todo mejor", speechExtraTop: -28 }
    ]
  };

  window.ARGO_DIALOGUES = ARGO_DIALOGUES;
})();
