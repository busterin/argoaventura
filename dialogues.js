(function () {
  const ARGO_DIALOGUES = {
    JANE_DIALOGUE_SEQUENCE: [
      {
        speaker: "jane",
        line: "¡Hola! Mi nombre es Jane, soy la alquimista del pueblo. ¿Así que tú vas a encargarte de administrar el pueblo a partir de ahora?"
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
        line: "¿Por qué en este pueblo todos habláis como si estuviésemos en el tutorial de un juego?"
      }
    ],
    CAMUS_DIALOGUE: [
      "Recorre el pueblo y conoce a sus habitantes para comprender mejor tus labores a partir de ahora.",
      "Busca al viejo Darren. Él te explicará cómo funciona todo."
    ],
    DARREN_DIALOGUE_SEQUENCE: [
      {
        speaker: "darren",
        line: "Vaya, vaya. Así que tú eres la famosa Evelyn, la gran capitana de la guardia descartada por el Rey. Veo que nos mandan lo mejor de lo mejor.",
        speechExtraTop: -56
      },
      { speaker: "evelyn", line: "Menos sorna...", speechExtraTop: 28 },
      {
        speaker: "darren",
        line: "Soy Darren, antiguo alcalde del pueblo. Gestionar este sitio no es complicado pero tampoco se puede hacer a lo loco. Te explicaré los principios básicos. Aquí abajo verás la barra de inventario, ahí se guardarán todos los objetos que vayas encontrando por ahí. Para usarlos, arrástralos hacia el sitio correcto. Si te equivocas, te darás cuenta.",
        highlight: "slot-1",
        speechExtraTop: 0
      },
      {
        speaker: "darren",
        line: "Este es el contador de COMIDA, cada día que pase se irá descontando comida. Tienes que encargarte de que se produzca o se compre comida para el pueblo. Si llegamos a 0 todo se acabó. No creo que el Rey te perdone más veces...",
        highlight: "alimentos",
        speechExtraTop: -26
      },
      {
        speaker: "darren",
        line: "Lo mismo pasa con el DINERO. Cuanto más consigas, más próspero será el pueblo. Pero que sea de forma legal, por favor. Ya te imaginas qué pasará si el contador llega a 0 ¿no?",
        highlight: "dinero",
        speechExtraTop: 0
      },
      {
        speaker: "darren",
        line: "Y por último, el contador del PUEBLO. Aquí se refleja lo contentos que estamos los habitantes del pueblo, si estamos contentos con tu gestión y con la vida en este lugar en general. No quiero repetirme mucho. Tú no llegues a 0 ¿vale?",
        highlight: "pueblo",
        speechExtraTop: -84
      },
      { speaker: "darren", line: "¿Tienes alguna duda?", speechExtraTop: -84 },
      { speaker: "evelyn", line: "No he entendido nada de nada...", speechExtraTop: 0 },
      { speaker: "darren", line: "Ay... Pregúntame lo que quieras, anda.", speechExtraTop: 0 }
    ],
    DARREN_DAYS_DIALOGUE: [
      "Abajo tienes un icono que al pulsarlo finaliza el día. Ten en cuenta que al finalizar el día se gastarán recursos, así que antes de hacerlo asegúrate de que has aprovechado el día al máximo."
    ],
    DARREN_HELP_DIALOGUE: [
      "Mañana Helena te esperará en la plaza del pueblo, ella te ayudará a gestionarlo todo, aunque hay muchas cosas que solo podrás gestionar o descubrir recorriendo el pueblo y a veces, solo en días concretos."
    ],
    HELENA_DIALOGUE_SEQUENCE: [
      {
        speaker: "helena",
        line: "¡Hola, Evelyn! Un gusto tenerte por aquí. Soy Helena, la escribana del pueblo. Solía ayudar a Darren y creo que también puedo ayudarte a ti. Antes de finalizar el día, ven a hablar conmigo y podemos discutir cómo distribuir los recursos del pueblo."
      },
      { speaker: "evelyn", line: "¿Vas a escribir mis memorias?" },
      {
        speaker: "helena",
        line: "¿Pero me estás escuchando? Espero que me paguen bien por esto... Más bien, espero que me paguen... Todos los días debes recorrer el pueblo para ver cómo están sus habitantes, y la localidad en sí, quizás puedas ayudarles directamente."
      },
      {
        speaker: "helena",
        line: "Yo te plantearé formas de administrar el dinero pero debes tener algo claro, Evelyn: Tus acciones tendrán consecuencias y no puedes contentar a todos. Tenlo muy presente. Hoy intenta familiarizarte con el pueblo y ya mañana comenzamos a trabajar. Me he tomado la libertad de gestionar yo los alimentos en esta ocasión."
      },
      { speaker: "evelyn", line: "Genial, muchas gracias. Aunque eso de las consecuencias no suena muy bien..." }
    ],
    HELENA_DAY2_INTRO: [
      "¡Hola! Te muestro opciones acerca de cómo gestionar los recursos en el día de hoy. Recuerda que soy totalmente objetiva y algunas de las opciones que te ofrezco pueden ser erróneas. Queda a tu criterio escoger las más óptimas."
    ],
    HELENA_DAY2_REST_DIALOGUE: [
      "Descansa por hoy, mañana te traeré nuevas sugerencias."
    ],
    HELENA_DAY2_BANDITS_FAIL_NOTE: "Los bandidos siguen campando a sus anchas (-4 🍞)",
    HELENA_DAY2_BANDITS_SUCCESS_NOTE: "Los mercenarios han ahuyentado a los bandidos, aunque temes que esto pueda tener consecuencias... (+5 🍞 +5 🏘️)",
    HELENA_DAY2_PARTY_NOTE: "¡Menudo fiestón has dado! Aunque quizás hayas derrochado demasiado y más teniendo en cuenta el poco tiempo que llevas aquí... (+10 🏘️)",
    ELIOT_INTRO_DIALOGUE: [
      "Así que tú eres la nueva regente del pueblo. Estoy de paso en el pueblo pero podría plantearme quedarme...",
      "¿Crees que podrías darme trabajo? Podría cubrir tus espaldas, al menos hasta que alguien me pague mejor."
    ],
    ELIOT_ALREADY_HIRED_DIALOGUE: [
      "Si necesitas ayuda, solo tienes que pedirla, jefa."
    ],
    ELIOT_POST_MERCENARY_DIALOGUE: [
      "¡A tu servicio!"
    ],
    ELIOT_HIRE_CONFIRM_DIALOGUE: [
      "¡Cuenta con mis flechas!"
    ],
    ELIOT_IGNORE_DIALOGUE: [
      "Aquí seguiré un tiempo, por si cambias de idea..."
    ],
    ELIOT_RETRY_DIALOGUE: [
      "¿Has cambiado de idea?"
    ],
    MERCENARY_DAY10_DIALOGUE_SEQUENCE: [
      { speaker: "mercenario", line: "¡Hola, Evelyn! ¡Nuestra querida regente! ¿Tienes un momento?" },
      { speaker: "evelyn", line: "¡Hola, mercenario genérico! La verdad que no quiero perder el tiempo con tramas secundarias que no aportan nada a la historia." },
      { speaker: "mercenario", line: "No entiendo una mierda de lo que dices. Pero tú nos contrataste para expulsar a los bandidos de tus tierras y no queda ni uno." },
      { speaker: "evelyn", line: "Genial, pondré un retrato tuyo en la posada con el cartel de \"Empleado del mes\"" },
      { speaker: "mercenario", line: "¡Menos guasa! Ahora somos los señores de estas tierras y venimos a exigir un pago a este pueblucho, a menos que queráis tener problemas." },
      { speaker: "evelyn", line: "Hay días tontos y tontos todos los días..." }
    ],
    MERCENARY_PAY_DIALOGUE: [
      "¡Encantado de hacer negocios con usted!"
    ],
    MERCENARY_ELIOT_DIALOGUE: [
      "Mierda..."
    ],
    MERCENARY_RETALIATION_NOTE: "Mientras el pueblo dormía, los mercenarios, a modo de represalia, arrasaron los campos de cultivo de Orbis (-6 comida).",
    DAY12_ROYAL_INTRO_SEQUENCE: [
      { speaker: "soldado", line: "¡¡¡Su majestad el Rey!!!" },
      { speaker: "evelyn", line: "Madre mía, que pulmones..." },
      { speaker: "soldado", line: "¡¡¡¡¡Y LA PRINCESA!!!!!" },
      { speaker: "evelyn", line: "Es definitivo, me he quedado sorda..." },
      { speaker: "rey", line: "Hola, Evelyn ¿Cómo estás?" },
      { speaker: "evelyn", line: "Aquí estoy, disfrutando de mi retiro espiritual..." },
      { speaker: "rey", line: "Veo que ni en tu peor momento pierdes tu inoportuno sentido del humor." },
      { speaker: "evelyn", line: "Oh no, nada de eso... Mi peor momento fue aquella vez que acabé en una taberna en lo alto de una montaña con un gato parlante... Es impresionante el aguante que tenía ese gato." },
      { speaker: "rey", line: "¡Basta!" },
      { speaker: "princesa", line: "Tan imaginativa como siempre..." },
      { speaker: "evelyn", line: "Un placer, mi, ejem, queridísima princesa." },
      { speaker: "helena", line: "¿Un gato que habla?" },
      { speaker: "evelyn", line: "Deberías conocer a Rigoberto, es la monda." },
      { speaker: "rey", line: "¡Basta!" },
      { speaker: "evelyn", line: "..." },
      { speaker: "rey", line: "He venido a ver qué tal estás gestionando el pueblo." },
      { speaker: "evelyn", line: "Pero si es el día 12, no me ha dado tiempo ni a deshacer la maleta." },
      { speaker: "rey", line: "Hablemos en privado." },
      { speaker: "evelyn", line: "Ya la he vuelto a liar." },
      { speaker: "princesa", line: "Liarla es un evento canónico en tu vida." }
    ],
    DAY12_ROYAL_PRIVATE_SEQUENCE: [
      { speaker: "rey", line: "Evelyn, te seré sincero. Este pueblo me importa una mierda." },
      { speaker: "evelyn", line: "Igual que el reino." },
      { speaker: "rey", line: "¿Qué?" },
      { speaker: "evelyn", line: "¿Qué?" },
      { speaker: "rey", line: "En fin, he acudido a ti porque necesito tu ayuda." },
      { speaker: "evelyn", line: "Ahá" },
      { speaker: "rey", line: "Buscaba a alguien valeroso, inteligente, fuerte... Un guerrero de los de antaño." },
      { speaker: "evelyn", line: "Vaya, nunca pensé que le escucharía decir unas palabras tan boni..." },
      { speaker: "rey", line: "Pero cómo no lo encontré, he venido a verte." },
      { speaker: "evelyn", line: "Esto ya me encaja más." },
      { speaker: "rey", line: "Evelyn... están planeando mi muerte." },
      { speaker: "evelyn", line: "¿¿¿Su muerte???" },
      { speaker: "rey", line: "Grita un poco más que creo que debe quedar alguien en el pueblo que no lo ha escuchado." },
      { speaker: "evelyn", line: "¿Pero quién iba a atreverse a algo así?" },
      { speaker: "rey", line: "¿Te sorprende que se atrevan, no que quieran hacerlo?" },
      { speaker: "evelyn", line: "No contestaré a eso sin un abogado." },
      { speaker: "rey", line: "Escúchame, nadie en todo el reino confía en ti, eres una jodida decepción para todos..." },
      { speaker: "evelyn", line: "Vaya, gracias." },
      { speaker: "rey", line: "Por eso eres perfecta para esto. Nadie sospechará de ti, nadie vigilará tus pasos. Necesito que investigues y descubras al culpable o culpables. Debes averiguar más sobre esta terrible conspiración." },
      { speaker: "evelyn", line: "Uf, estoy demasiado ocupada. Este pueblo es un no parar." },
      { speaker: "rey", line: "Si resuelves el misterio te devolveré tu cargo de Capitana de la Guardia." },
      { speaker: "evelyn", line: "¡Siempre dispuesta a ayudar!" },
      { speaker: "rey", line: "Eres mi única esperanza... Y eso me asusta que no veas..." }
    ],
    DAY12_ROYAL_OUTRO_SEQUENCE: [
      { speaker: "helena", line: "En menudos líos te metes." },
      { speaker: "evelyn", line: "Supongo que no lo puedo evitar." },
      { speaker: "helena", line: "Descansa lo que queda de día, veré cómo podemos comenzar esta investigación. Ven a verme mañana e idearemos un plan." }
    ],
    HELENA_DAY12_REST_DIALOGUE: [
      "Mañana podremos comenzar la investigación. Hoy aprovecha para descansar."
    ],
    HERRERO_INTRO_SEQUENCE: [
      { speaker: "herrero", line: "¡Buenas! Soy Simón, el herrero del pueblo. ¿Así que tú eres la que va a dirigir el cotarro por aquí de ahora en adelante?" },
      { speaker: "evelyn", line: "Más o menos..." },
      { speaker: "herrero", line: "Me temo que te vas a aburrir, este es un pueblo demasiado tranquilo. Pero si necesitas algo, aquí estoy. ¡Te haré un buen descuento!" }
    ],
    HERRERO_REPEAT_DIALOGUE: [
      "Ahora mismo estoy reponiendo existencias pero en breve tendré material del bueno. ¡Cuídate, jefa!"
    ],
    AMANDA_INTRO_SEQUENCE: [
      { speaker: "amanda", line: "¡Hola! Bienvenida al pueblo. Soy Amanda y esta es mi hija Rita. Estamos recolectando setas." },
      { speaker: "evelyn", line: "Apasionante... Quiero decir: ¡gracias!" },
      { speaker: "amanda", line: "¡Qué simpática eres! Encajarás bien aquí." },
      { speaker: "evelyn", line: "..." }
    ],
    AMANDA_REPEAT_DIALOGUE: [
      "¡Hola, Evelyn! Espero que vaya todo bien."
    ],
    RITA_INTRO_SEQUENCE: [
      { speaker: "rita", line: "¡Hola! Soy Rita Dinamita." },
      { speaker: "evelyn", line: "¿Te llamas así?" },
      { speaker: "rita", line: "Solo Rita, pero puedes llamarme Dinamita." },
      { speaker: "evelyn", line: "¿Por qué haría eso?" },
      { speaker: "rita", line: "¿Y por qué no?" },
      { speaker: "evelyn", line: "... Es fácil dejarme sin argumentos." },
      { speaker: "rita", line: "¡Ven a jugar conmigo de vez en cuando!" },
      { speaker: "evelyn", line: "Me temo que estoy muy ocupada." },
      { speaker: "evelyn", line: "Y tampoco quiero..." }
    ],
    RITA_REPEAT_SEQUENCE: [
      { speaker: "rita", line: "¿Tienes un rato para jugar conmigo?" },
      { speaker: "evelyn", line: "¡Jamás! Quiero decir: Ahora no puedo, lo siento." }
    ],
    DAY13_HELENA_MAP_SEQUENCE: [
      { speaker: "helena", line: "He estado pensando cómo resolver el misterio y, a la vez, ayudar al pueblo." },
      { speaker: "evelyn", line: "¿Ayudar al pueblo? No había pensado en eso." },
      { speaker: "helena", line: "Lo sé, llevas 13 días sin hacerlo." },
      { speaker: "evelyn", line: "Touché." },
      { speaker: "helena", line: "He organizado una mesa de batalla desde la que organizaremos los pocos recursos que tenemos para enviarlos a zonas cercanas y alrededores del pueblo, para obtener recursos e incluso pistas para resolver el supuesto plan de asesinato del rey." },
      { speaker: "evelyn", line: "¿Vamos a usar a los aldeanos como exploradores? Genial, he tocado fondo." },
      { speaker: "helena", line: "En el fondo ya estabas, querida, así que no te preocupes por eso. En el mapa irán apareciendo distintos lugares que visitar y tendrás que decidir a quién enviar en cada situación. Si envías a la persona adecuada, obtendremos buenos resultados, pero si te equivocas, será un desastre." },
      { speaker: "evelyn", line: "Creo que lo entiendo... creo." },
      { speaker: "helena", line: "El único problema es que nuestros recursos son demasiado limitados. Dispondrás tan solo de 5 minutos al día para realizar estas gestiones. Administra bien tu tiempo. Pulsa el icono cuando estés preparado." }
    ],
    INTRO_DIALOGUE_SEQUENCE: [
      { speaker: "evelyn", line: "Y así es como acabé aquí.", speechExtraTop: 0 },
      { speaker: "camus", line: "¿Eras la Capitana de la guardia del Rey y te han mandado a este lugar? Sí que tienes que haber hecho algo grave...", speechExtraTop: -28 },
      { speaker: "evelyn", line: "Eh... bueno, según la opinión del Rey, sí... En fin, ahora tengo que encargarme de gestionar este pueblo y hacer que todo funcione bien.", speechExtraTop: 34 },
      { speaker: "camus", line: "No te preocupes, este es un pueblo muy tranquilo. Date una vuelta para entenderlo todo mejor", speechExtraTop: -28 }
    ]
  };

  window.ARGO_DIALOGUES = ARGO_DIALOGUES;
})();
