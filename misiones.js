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
    }
  ]
};

window.ARGO_MISIONES = ARGO_MISIONES;
