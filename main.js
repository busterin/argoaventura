const scene = document.getElementById("scene");
const sceneViewport = document.getElementById("scene-viewport");
const background = document.getElementById("background");
const evelyn = document.getElementById("evelyn");
const jane = document.getElementById("jane");
const helena = document.getElementById("helena");
const camus = document.getElementById("camus");
const darren = document.getElementById("darren");
const mercenario = document.getElementById("mercenario");
const anilloWorld = document.getElementById("anillo-world");
const anilloItem = document.getElementById("anillo-item");
const nextArrow = document.getElementById("next-arrow");
const prevArrow = document.getElementById("prev-arrow");
const leftSideArrow = document.getElementById("left-side-arrow");
const speech = document.getElementById("speech");
const speechText = document.getElementById("speech-text");
const speechOptions = document.getElementById("speech-options");
const speechNextBtn = document.getElementById("speech-next-btn");
const ringSlotHighlight = document.getElementById("ring-slot-highlight");
const alimentosDisplay = document.getElementById("alimentos-display");
const dineroDisplay = document.getElementById("dinero-display");
const puebloDisplay = document.getElementById("pueblo-display");
const registroIconBtn = document.getElementById("iconoregistro");
const endDayIcon = document.getElementById("icono-fin-dia");
const dayBanner = document.getElementById("day-banner");
const dayBannerNumber = document.getElementById("day-banner-number");
const dayEndModal = document.getElementById("day-end-modal");
const dayEndYesBtn = document.getElementById("day-end-yes");
const dayEndNoBtn = document.getElementById("day-end-no");
const daySummaryModal = document.getElementById("day-summary-modal");
const daySummaryTitle = document.getElementById("day-summary-title");
const summaryComida = document.getElementById("summary-comida");
const summaryDinero = document.getElementById("summary-dinero");
const summaryPueblo = document.getElementById("summary-pueblo");
const daySummaryNotes = document.getElementById("day-summary-notes");
const daySummaryCloseBtn = document.getElementById("day-summary-close");
const dayTransitionOverlay = document.getElementById("day-transition-overlay");
const rewardToast = document.getElementById("reward-toast");
const registroModal = document.getElementById("registro-modal");
const registroTabPersonaje = document.getElementById("registro-tab-personaje");
const registroTabTutorial = document.getElementById("registro-tab-tutorial");
const registroPanelPersonaje = document.getElementById("registro-panel-personaje");
const registroPanelTutorial = document.getElementById("registro-panel-tutorial");
const registroTutorialGestionToggle = document.getElementById("registro-tutorial-gestion-toggle");
const registroTutorialGestionContent = document.getElementById("registro-tutorial-gestion-content");
const registroTutorialList = document.getElementById("registro-tutorial-list");
const registroTutorialEmpty = document.getElementById("registro-tutorial-empty");
const registroCharJane = document.getElementById("registro-char-jane");
const registroCharCamus = document.getElementById("registro-char-camus");
const registroCharDarren = document.getElementById("registro-char-darren");
const registroCharHelena = document.getElementById("registro-char-helena");
const registroCloseBtn = document.getElementById("registro-close");
const registroCharacterModal = document.getElementById("registro-character-modal");
const registroCharacterName = document.getElementById("registro-character-name");
const registroCharacterImage = document.getElementById("registro-character-image");
const registroCharacterText = document.getElementById("registro-character-text");
const helenaOptionsModal = document.getElementById("helena-options-modal");
const helenaOptionCards = [...document.querySelectorAll(".helena-option-card")];
const helenaOptionsConfirmBtn = document.getElementById("helena-options-confirm");
const helenaOptionsEmptyConfirm = document.getElementById("helena-options-empty-confirm");
const helenaEmptyYesBtn = document.getElementById("helena-empty-yes");
const helenaEmptyNoBtn = document.getElementById("helena-empty-no");
const inventory = document.getElementById("inventory");
const inventorySlots = [...document.querySelectorAll(".inventory-slot")];
const itemModal = document.getElementById("item-modal");
const itemModalContent = document.getElementById("item-modal-content");
const itemModalClose = document.getElementById("item-modal-close");
const itemModalImage = document.getElementById("item-modal-image");
const itemModalText = document.getElementById("item-modal-text");
const ASSET_VERSION = "20260312";
const asset = (path) => `${path}?v=${ASSET_VERSION}`;
const JANE_GAP = 12;
const EVELYN_IDLE_SRC = asset("personajes/evelyn.png");
const EVELYN_WALK_FRAMES = [
  asset("personajes/evelyn2.png"),
  asset("personajes/evelyn3.png"),
  asset("personajes/evelyn4.png")
];
const EVELYN_WALK_FRAME_MS = 120;
const WALK_SPRITES_ENABLED = false;
const EVELYN_MOVE_DURATION_LONG_MS = 1400;
const EVELYN_MOVE_DURATION_SHORT_MS = 950;
const EVELYN_SHORT_MOVE_DISTANCE_PX = 220;
const FONDO1_EVELYN_EXTRA_BOTTOM_PX = 30;
const ALIMENTOS_MAX = 99;
const DINERO_MAX = 99;
const PUEBLO_MAX = 100;
const DEFAULT_SPEECH_NEXT_LABEL = "Continuar";
const TRAVEL_SPEECH_NEXT_LABEL = "Viajar";
const ENTER_SPEECH_NEXT_LABEL = "Entrar";
const HELENA_DAY2_OPTION_COSTS = {
  "day2-bandits": { alimentos: 0, dinero: 4, pueblo: 0 },
  "day2-party": { alimentos: 5, dinero: 5, pueblo: 0 }
};
if (!window.ARGO_DIALOGUES) {
  throw new Error("Falta dialogues.js: no se pudo cargar window.ARGO_DIALOGUES");
}
const {
  JANE_DIALOGUE_SEQUENCE,
  CAMUS_DIALOGUE,
  DARREN_DIALOGUE_SEQUENCE,
  DARREN_DAYS_DIALOGUE,
  DARREN_HELP_DIALOGUE,
  HELENA_DIALOGUE_SEQUENCE,
  HELENA_DAY2_INTRO,
  HELENA_DAY2_REST_DIALOGUE,
  HELENA_DAY2_BANDITS_FAIL_NOTE,
  HELENA_DAY2_BANDITS_SUCCESS_NOTE,
  HELENA_DAY2_PARTY_NOTE,
  INTRO_DIALOGUE_SEQUENCE
} = window.ARGO_DIALOGUES;
const ANILLO_MODAL = {
  imageSrc: asset("objetos/anillo.png"),
  imageAlt: "Anillo ampliado",
  textHtml: "Un anillo de origen desconocido.<br>Parece ser de gran valor."
};
const ANILLO_OBTAINED_MODAL = {
  imageSrc: asset("objetos/anillo.png"),
  imageAlt: "Anillo obtenido",
  textHtml: "¡Has obtenido un anillo!"
};
const ANILLO_INVENTORY_WIDTH = "24%";
const ANILLO_INVENTORY_MAX_HEIGHT = "18%";
const ANILLO_INVENTORY_LEFT = "-34%";
const ANILLO_INVENTORY_BOTTOM = "-32%";
const INITIAL_EVELYN_LEFT =
  getComputedStyle(document.documentElement).getPropertyValue("--evelyn-left").trim() || "0px";
const FONDO0_EVELYN_LEFT =
  getComputedStyle(document.documentElement).getPropertyValue("--evelyn-left-fondo0").trim() || "74%";
const INITIAL_EVELYN_BOTTOM =
  getComputedStyle(document.documentElement).getPropertyValue("--character-bottom").trim() || "0px";
const FONDO4_EVELYN_LEFT =
  getComputedStyle(document.documentElement).getPropertyValue("--evelyn-left-fondo4").trim() || "78%";
const ENTRY_LEFT_EDGE = "8%";
const ENTRY_RIGHT_EDGE = "86%";
const ENTRY_CENTER = "50%";
const ENTRY_FONDO1_FROM_FONDO0 = "47%";
const ENTRY_FONDO2_FROM_FONDO1 = "14%";
const ENTRY_FONDO1_FROM_FONDO2 = "72%";
const ENTRY_FONDO3_FROM_FONDO2 = "54%";
const ENTRY_FONDO2_FROM_FONDO3 = "52%";
const ENTRY_FONDO5_FROM_FONDO1 = "42%";
const FONDO2_EVELYN_EXTRA_BOTTOM_PX = 46;
const FONDO0_EVELYN_EXTRA_BOTTOM_PX = 42;
const FONDO3_ENTRY_EXTRA_BOTTOM_PX = 34;
const FONDO4_ENTRY_EXTRA_BOTTOM_PX = 40;
const FONDO5_ENTRY_EXTRA_BOTTOM_PX = 26;
const SPEECH_LEFT_FROM_CENTER_PX = -24;
const SPEECH_UP_OFFSET_PX = 18;

let hasAnillo = false;
let ALIMENTOS = 10;
let DINERO = 20;
let PUEBLO = 50;
let speechAnchor = null;
let dragProxy = null;
let pendingSpeechForJane = false;
let pendingSpeechForCamus = false;
let pendingSpeechForDarren = false;
let pendingSpeechForHelena = false;
let pendingSceneChangeAction = null;
let pendingSceneChangeArrow = null;
let pendingSceneChangeTimeoutId = null;
let pendingSceneEntryLeft = null;
let pendingSceneEntryBottom = null;
let pendingFondo2FromFondo1 = false;
let activeDialogue = null;
let activeDialogueIndex = 0;
let activeScriptedDialogueSequence = null;
let activeScriptedDialogueIndex = 0;
let hasCompletedDarrenIntroDialogue = false;
let hasReceivedHelenaFoodBonus = false;
let hasCompletedHelenaDay2Dialogue = false;
let hasQueuedDay2HelenaDecision = false;
let selectedHelenaOptionIds = new Set();
let spawnMercenaryOnDay10 = false;
let pendingDailyAlimentosDelta = 0;
let pendingDailyDineroDelta = 0;
let pendingDailyPuebloDelta = 0;
let pendingDaySummaryNotes = [];
let isEndDayEnabled = false;
let currentDay = 0;
let isDayTransitionRunning = false;
let isAwaitingDaySummaryContinue = false;
let isStartingNextDayFromSummary = false;
let isIntroSequenceActive = true;
let introDialogueIndex = 0;
let anilloPickupPending = false;
let anilloPickupTimeoutId = null;
let draggedInventoryItem = null;
let evelynWalkIntervalId = null;
let evelynWalkFrameIndex = 0;
let draggedSourceElement = null;
let rewardToastTimeoutId = null;
let hasRegisteredJane = false;
let hasRegisteredCamus = false;
let hasRegisteredDarren = false;
let hasRegisteredHelena = false;
let isRegistroHighlighted = false;
let activeRegistroTab = "personaje";
let hasLoggedDarrenTutorial = false;
let hasAskedDarrenDaysQuestion = false;
let hasAskedDarrenHelpQuestion = false;
let hasUnlockedEndDayByDarrenDays = false;
let tutorialGestionDiariaLines = [];
let isGestionDiariaExpanded = false;
const REGISTRO_CHARACTER_DATA = {
  jane: {
    name: "Jane",
    imageSrc: asset("personajes/jane.png"),
    imageAlt: "Jane",
    text: "PRUEBA"
  },
  camus: {
    name: "Camus",
    imageSrc: asset("personajes/camus.png"),
    imageAlt: "Camus",
    text: "PRUEBA"
  },
  darren: {
    name: "Darren",
    imageSrc: asset("personajes/darren.png"),
    imageAlt: "Darren",
    text: "PRUEBA"
  },
  helena: {
    name: "Helena",
    imageSrc: asset("personajes/helena.png"),
    imageAlt: "Helena",
    text: "PRUEBA"
  }
};
const TRANSPARENT_DRAG_IMAGE = new Image();
TRANSPARENT_DRAG_IMAGE.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const BASE_WIDTH = 1328;
const BASE_HEIGHT = 800;
const DAY_TRANSITION_NIGHT_MS = 1050;
const DAY_TRANSITION_BLACK_MS = 220;
const DAY_TRANSITION_RESET_MS = 260;
const INVENTORY_DRAGGABLE_IDS = new Set([
  "anillo-item"
]);
const SCENE_BACKGROUND_CLASSES = [
  "in-fondo0",
  "in-fondo1",
  "in-fondo2",
  "in-fondo3",
  "in-fondo4",
  "in-fondo5"
];

function addFallbackOnError(id, label) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("error", () => {
    el.classList.add("fallback");
    if (el.tagName === "IMG") {
      el.alt = label;
      el.removeAttribute("src");
      el.textContent = label;
    }
  });
}

function setSceneBackgroundClass(className) {
  if (!scene) return;
  scene.classList.remove(...SCENE_BACKGROUND_CLASSES);
  if (className) {
    scene.classList.add(className);
  }
}

function setArrowMode(arrowEl, mode) {
  if (!arrowEl) return;
  arrowEl.classList.remove("arrow-up-center", "arrow-up-fondo2-center", "arrow-down-center", "arrow-up-top-center");
  if (mode) {
    arrowEl.classList.add(mode);
  }
}

function isRegistroModalOpen() {
  return Boolean(registroModal && registroModal.classList.contains("open"));
}

function isRegistroCharacterModalOpen() {
  return Boolean(registroCharacterModal && registroCharacterModal.classList.contains("open"));
}

function renderRegistroIconState() {
  if (!registroIconBtn) return;
  registroIconBtn.classList.toggle("iconoregistro-highlight", isRegistroHighlighted);
}

function setActiveRegistroTab(tabId) {
  activeRegistroTab = tabId === "tutorial" ? "tutorial" : "personaje";
  const personajeActive = activeRegistroTab === "personaje";
  if (registroTabPersonaje) {
    registroTabPersonaje.classList.toggle("active", personajeActive);
  }
  if (registroTabTutorial) {
    registroTabTutorial.classList.toggle("active", !personajeActive);
  }
  if (registroPanelPersonaje) {
    registroPanelPersonaje.classList.toggle("active", personajeActive);
  }
  if (registroPanelTutorial) {
    registroPanelTutorial.classList.toggle("active", !personajeActive);
  }
}

function renderRegistroEntries() {
  if (registroCharJane) registroCharJane.classList.toggle("unlocked", hasRegisteredJane);
  if (registroCharCamus) registroCharCamus.classList.toggle("unlocked", hasRegisteredCamus);
  if (registroCharDarren) registroCharDarren.classList.toggle("unlocked", hasRegisteredDarren);
  if (registroCharHelena) registroCharHelena.classList.toggle("unlocked", hasRegisteredHelena);
}

function getSpeakerLabelForTutorial(speaker) {
  if (speaker === "evelyn") return "EVELYN";
  if (speaker === "jane") return "JANE";
  if (speaker === "camus") return "CAMUS";
  if (speaker === "darren") return "DARREN";
  if (speaker === "helena") return "HELENA";
  return "NARRADOR";
}

function renderRegistroTutorialPanel() {
  if (!registroTutorialGestionToggle || !registroTutorialGestionContent || !registroTutorialList || !registroTutorialEmpty) return;
  const hasEntries = tutorialGestionDiariaLines.length > 0;
  registroTutorialGestionToggle.style.display = hasEntries ? "block" : "none";
  registroTutorialGestionToggle.setAttribute("aria-expanded", isGestionDiariaExpanded ? "true" : "false");
  registroTutorialGestionContent.style.display = hasEntries && isGestionDiariaExpanded ? "block" : "none";
  registroTutorialList.style.display = hasEntries && isGestionDiariaExpanded ? "block" : "none";
  registroTutorialEmpty.style.display = hasEntries ? "none" : "block";
  registroTutorialList.innerHTML = "";
  for (const line of tutorialGestionDiariaLines) {
    const p = document.createElement("p");
    p.textContent = line;
    registroTutorialList.appendChild(p);
  }
}

function appendGestionDiariaLines(lines) {
  if (!Array.isArray(lines) || lines.length === 0) return;
  tutorialGestionDiariaLines.push(...lines);
  renderRegistroTutorialPanel();
}

function logDarrenIntroTutorialIfNeeded() {
  if (hasLoggedDarrenTutorial) return;
  const lines = DARREN_DIALOGUE_SEQUENCE.map((step) => {
    return `${getSpeakerLabelForTutorial(step.speaker)}: ${step.line}`;
  });
  appendGestionDiariaLines(lines);
  hasLoggedDarrenTutorial = true;
  window.setTimeout(() => {
    showRewardToast("Gestión diaria añadida a TUTORIAL");
  }, 1450);
}

function unlockEndDayByDarrenDaysQuestion() {
  if (hasUnlockedEndDayByDarrenDays) return;
  hasUnlockedEndDayByDarrenDays = true;
  setEndDayEnabled(true);
}

function openRegistroModal() {
  if (!registroModal) return;
  closeSpeech();
  closeItemModal();
  isRegistroHighlighted = false;
  renderRegistroIconState();
  setActiveRegistroTab("personaje");
  registroModal.classList.add("open");
  registroModal.setAttribute("aria-hidden", "false");
}

function closeRegistroModal() {
  if (!registroModal) return;
  registroModal.classList.remove("open");
  registroModal.setAttribute("aria-hidden", "true");
}

function openRegistroCharacterModal(characterId) {
  const data = REGISTRO_CHARACTER_DATA[characterId];
  if (!registroCharacterModal || !data) return;
  const isUnlocked = (
    (characterId === "jane" && hasRegisteredJane)
    || (characterId === "camus" && hasRegisteredCamus)
    || (characterId === "darren" && hasRegisteredDarren)
    || (characterId === "helena" && hasRegisteredHelena)
  );
  if (!isUnlocked) return;
  if (registroCharacterName) {
    registroCharacterName.textContent = data.name;
  }
  if (registroCharacterImage) {
    registroCharacterImage.src = data.imageSrc;
    registroCharacterImage.alt = data.imageAlt;
  }
  if (registroCharacterText) {
    registroCharacterText.textContent = data.text;
  }
  registroCharacterModal.classList.add("open");
  registroCharacterModal.setAttribute("aria-hidden", "false");
}

function closeRegistroCharacterModal() {
  if (!registroCharacterModal) return;
  registroCharacterModal.classList.remove("open");
  registroCharacterModal.setAttribute("aria-hidden", "true");
}

function unlockCamusInRegistro() {
  if (hasRegisteredCamus) return;
  hasRegisteredCamus = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Camus anotado en el registro.");
}

function unlockJaneInRegistro() {
  if (hasRegisteredJane) return;
  hasRegisteredJane = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Jane anotada en el registro.");
}

function unlockDarrenInRegistro() {
  if (hasRegisteredDarren) return;
  hasRegisteredDarren = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Darren anotado en el registro.");
}

function unlockHelenaInRegistro() {
  if (hasRegisteredHelena) return;
  hasRegisteredHelena = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Helena anotada en el registro.");
}

function startJaneInteractionDialogue() {
  startScriptedDialogueSequence(JANE_DIALOGUE_SEQUENCE);
}

function startCamusInteractionDialogue() {
  if (hasRegisteredCamus) {
    startDialogue(camus, CAMUS_DIALOGUE);
    return;
  }
  startDialogue(camus, CAMUS_DIALOGUE, 0, unlockCamusInRegistro);
}

function isInteractionLocked() {
  return isIntroSequenceActive
    || isDayTransitionRunning
    || isRegistroModalOpen()
    || isRegistroCharacterModalOpen();
}

function waitForMs(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function clearDayTransitionOverlayClasses() {
  if (!dayTransitionOverlay) return;
  dayTransitionOverlay.classList.remove("active", "phase-night", "phase-black", "phase-reset");
}

async function playDayTransitionToBlack() {
  if (!dayTransitionOverlay) return;
  clearDayTransitionOverlayClasses();
  dayTransitionOverlay.classList.add("active");
  void dayTransitionOverlay.offsetWidth;
  dayTransitionOverlay.classList.add("phase-night");
  await waitForMs(DAY_TRANSITION_NIGHT_MS + 50);
  dayTransitionOverlay.classList.remove("phase-night");
  dayTransitionOverlay.classList.add("phase-black");
  await waitForMs(DAY_TRANSITION_BLACK_MS + 40);
}

async function fadeOutDayTransitionFromBlack() {
  if (!dayTransitionOverlay) return;
  dayTransitionOverlay.classList.remove("phase-night", "phase-black");
  dayTransitionOverlay.classList.add("phase-reset");
  await waitForMs(DAY_TRANSITION_RESET_MS + 30);
  clearDayTransitionOverlayClasses();
}

function getFondo1EvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO1_EVELYN_EXTRA_BOTTOM_PX}px)`;
}

function getFondo2FromFondo1EvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO2_EVELYN_EXTRA_BOTTOM_PX}px)`;
}

function getFondo0EvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO0_EVELYN_EXTRA_BOTTOM_PX}px)`;
}

function getFondo3EntryEvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO3_ENTRY_EXTRA_BOTTOM_PX}px)`;
}

function getFondo4EntryEvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO4_ENTRY_EXTRA_BOTTOM_PX}px)`;
}

function getFondo5EntryEvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO5_ENTRY_EXTRA_BOTTOM_PX}px)`;
}

function clampAlimentos(value) {
  return Math.max(0, Math.min(ALIMENTOS_MAX, Math.trunc(value)));
}

function renderAlimentos() {
  if (!alimentosDisplay) return;
  alimentosDisplay.textContent = `${ALIMENTOS}`;
}

function setALIMENTOS(value) {
  ALIMENTOS = clampAlimentos(value);
  renderAlimentos();
  return ALIMENTOS;
}

function addALIMENTOS(delta) {
  return setALIMENTOS(ALIMENTOS + delta);
}

function clampDinero(value) {
  return Math.max(0, Math.min(DINERO_MAX, Math.trunc(value)));
}

function renderDinero() {
  if (!dineroDisplay) return;
  dineroDisplay.textContent = `${DINERO}`;
}

function setDINERO(value) {
  DINERO = clampDinero(value);
  renderDinero();
  return DINERO;
}

function addDINERO(delta) {
  return setDINERO(DINERO + delta);
}

function clampPueblo(value) {
  return Math.max(0, Math.min(PUEBLO_MAX, Math.trunc(value)));
}

function renderPueblo() {
  if (!puebloDisplay) return;
  puebloDisplay.textContent = `${PUEBLO}`;
}

function setPUEBLO(value) {
  PUEBLO = clampPueblo(value);
  renderPueblo();
  return PUEBLO;
}

function addPUEBLO(delta) {
  return setPUEBLO(PUEBLO + delta);
}

function clearUiHighlight() {
  if (ringSlotHighlight) ringSlotHighlight.classList.remove("ui-highlight");
  if (alimentosDisplay) alimentosDisplay.classList.remove("ui-highlight");
  if (dineroDisplay) dineroDisplay.classList.remove("ui-highlight");
  if (puebloDisplay) puebloDisplay.classList.remove("ui-highlight");
}

function applyUiHighlight(target) {
  clearUiHighlight();
  if (target === "slot-1" && ringSlotHighlight) {
    ringSlotHighlight.classList.add("ui-highlight");
  } else if (target === "alimentos" && alimentosDisplay) {
    alimentosDisplay.classList.add("ui-highlight");
  } else if (target === "dinero" && dineroDisplay) {
    dineroDisplay.classList.add("ui-highlight");
  } else if (target === "pueblo" && puebloDisplay) {
    puebloDisplay.classList.add("ui-highlight");
  }
}

function getSpeakerAnchor(speaker) {
  if (speaker === "evelyn") return evelyn;
  if (speaker === "jane") return jane;
  if (speaker === "camus") return camus;
  if (speaker === "darren") return darren;
  if (speaker === "helena") return helena;
  return evelyn;
}

function clearScriptedDialogueSequence() {
  activeScriptedDialogueSequence = null;
  activeScriptedDialogueIndex = 0;
}

function renderScriptedDialogueStep() {
  if (!activeScriptedDialogueSequence) return;
  const step = activeScriptedDialogueSequence[activeScriptedDialogueIndex];
  if (!step) {
    clearScriptedDialogueSequence();
    clearUiHighlight();
    closeSpeech();
    return;
  }
  applyUiHighlight(step.highlight);
  startDialogue(getSpeakerAnchor(step.speaker), [step.line], step.speechExtraTop || 0);
}

function startScriptedDialogueSequence(sequence) {
  if (!Array.isArray(sequence) || sequence.length === 0) return;
  activeScriptedDialogueSequence = sequence;
  activeScriptedDialogueIndex = 0;
  renderScriptedDialogueStep();
}

function advanceScriptedDialogueSequence() {
  if (!activeScriptedDialogueSequence) return false;
  activeScriptedDialogueIndex += 1;
  const hasNext = activeScriptedDialogueIndex < activeScriptedDialogueSequence.length;
  if (!hasNext) {
    if (activeScriptedDialogueSequence === JANE_DIALOGUE_SEQUENCE) {
      unlockJaneInRegistro();
    } else if (activeScriptedDialogueSequence === DARREN_DIALOGUE_SEQUENCE) {
      hasCompletedDarrenIntroDialogue = true;
      unlockDarrenInRegistro();
      logDarrenIntroTutorialIfNeeded();
    } else if (activeScriptedDialogueSequence === HELENA_DIALOGUE_SEQUENCE && !hasReceivedHelenaFoodBonus) {
      hasReceivedHelenaFoodBonus = true;
      addALIMENTOS(10);
      showRewardToast("Alimentos +10");
      window.setTimeout(() => {
        unlockHelenaInRegistro();
      }, 1450);
    } else if (activeScriptedDialogueSequence === HELENA_DIALOGUE_SEQUENCE) {
      unlockHelenaInRegistro();
    }
    clearScriptedDialogueSequence();
    clearUiHighlight();
    closeSpeech();
    return true;
  }
  renderScriptedDialogueStep();
  return true;
}

function startDarrenDialogue() {
  startScriptedDialogueSequence(DARREN_DIALOGUE_SEQUENCE);
}

function startDarrenHelpChoiceDialogue() {
  startChoiceDialogue(darren, "¿Que necesitas saber?", [
    {
      label: "¿Que me acabas de decir?",
      onSelect: () => {
        startDarrenDialogue();
      }
    },
    {
      label: "¿Cómo transcurren los días?",
      onSelect: () => {
        if (!hasAskedDarrenDaysQuestion) {
          hasAskedDarrenDaysQuestion = true;
          appendGestionDiariaLines([
            "EVELYN: ¿Cómo transcurren los días?",
            `DARREN: ${DARREN_DAYS_DIALOGUE[0]}`
          ]);
        }
        unlockEndDayByDarrenDaysQuestion();
        startDialogue(darren, DARREN_DAYS_DIALOGUE);
      }
    },
    {
      label: "¿Alguien va a ayudarme?",
      onSelect: () => {
        if (!hasAskedDarrenHelpQuestion) {
          hasAskedDarrenHelpQuestion = true;
          appendGestionDiariaLines([
            "EVELYN: ¿Alguien va a ayudarme?",
            `DARREN: ${DARREN_HELP_DIALOGUE[0]}`
          ]);
        }
        startDialogue(darren, DARREN_HELP_DIALOGUE);
      }
    },
    {
      label: "Eso es todo por ahora",
      onSelect: () => {
        closeSpeech();
      }
    }
  ]);
}

function startDarrenInteractionDialogue() {
  if (hasCompletedDarrenIntroDialogue) {
    startDarrenHelpChoiceDialogue();
    return;
  }
  startDarrenDialogue();
}

function queuePendingDailyDelta(alimentosDelta, dineroDelta, puebloDelta) {
  pendingDailyAlimentosDelta += alimentosDelta;
  pendingDailyDineroDelta += dineroDelta;
  pendingDailyPuebloDelta += puebloDelta;
}

function queueDaySummaryNote(text) {
  pendingDaySummaryNotes.push(text);
}

function consumePendingDaySummaryNotes() {
  const notes = pendingDaySummaryNotes.slice();
  pendingDaySummaryNotes = [];
  return notes;
}

function getHelenaDay2SelectionCost(selectionSet) {
  const total = { alimentos: 0, dinero: 0, pueblo: 0 };
  for (const optionId of selectionSet) {
    const cost = HELENA_DAY2_OPTION_COSTS[optionId];
    if (!cost) continue;
    total.alimentos += cost.alimentos || 0;
    total.dinero += cost.dinero || 0;
    total.pueblo += cost.pueblo || 0;
  }
  return total;
}

function canAffordHelenaDay2Selection(selectionSet) {
  const totalCost = getHelenaDay2SelectionCost(selectionSet);
  return ALIMENTOS >= totalCost.alimentos && DINERO >= totalCost.dinero;
}

function finalizeHelenaDay2Options(selectionSet) {
  if (hasQueuedDay2HelenaDecision) return;
  const selectedBandits = selectionSet.has("day2-bandits");
  const selectedParty = selectionSet.has("day2-party");
  const totalCost = getHelenaDay2SelectionCost(selectionSet);

  if (totalCost.alimentos > 0) addALIMENTOS(-totalCost.alimentos);
  if (totalCost.dinero > 0) addDINERO(-totalCost.dinero);

  if (selectedBandits) {
    spawnMercenaryOnDay10 = true;
    queuePendingDailyDelta(5, 0, 5);
    queueDaySummaryNote(HELENA_DAY2_BANDITS_SUCCESS_NOTE);
  } else {
    queuePendingDailyDelta(-4, 0, 0);
    queueDaySummaryNote(HELENA_DAY2_BANDITS_FAIL_NOTE);
  }

  if (selectedParty) {
    queuePendingDailyDelta(0, 0, 10);
    queueDaySummaryNote(HELENA_DAY2_PARTY_NOTE);
  }

  hasQueuedDay2HelenaDecision = true;
}

function setSelectedHelenaOptions(selectionSet) {
  selectedHelenaOptionIds = new Set(selectionSet);
  for (const card of helenaOptionCards) {
    card.classList.toggle("selected", selectedHelenaOptionIds.has(card.dataset.optionId));
  }
}

function closeHelenaOptionsModal() {
  if (!helenaOptionsModal) return;
  helenaOptionsModal.classList.remove("open");
  helenaOptionsModal.setAttribute("aria-hidden", "true");
  if (helenaOptionsEmptyConfirm) {
    helenaOptionsEmptyConfirm.classList.remove("open");
    helenaOptionsEmptyConfirm.setAttribute("aria-hidden", "true");
  }
  setSelectedHelenaOptions(new Set());
}

function completeHelenaDay2Dialogue() {
  hasCompletedHelenaDay2Dialogue = true;
  closeHelenaOptionsModal();
  closeSpeech();
}

function openHelenaOptionsModal() {
  if (!helenaOptionsModal) return;
  closeSpeech();
  helenaOptionsModal.classList.add("open");
  helenaOptionsModal.setAttribute("aria-hidden", "false");
  if (helenaOptionsEmptyConfirm) {
    helenaOptionsEmptyConfirm.classList.remove("open");
    helenaOptionsEmptyConfirm.setAttribute("aria-hidden", "true");
  }
  setSelectedHelenaOptions(new Set());
}

function startHelenaDay2Dialogue() {
  if (hasCompletedHelenaDay2Dialogue) {
    if (hasRegisteredHelena) {
      startDialogue(helena, HELENA_DAY2_REST_DIALOGUE);
    } else {
      startDialogue(helena, HELENA_DAY2_REST_DIALOGUE, 0, unlockHelenaInRegistro);
    }
    return;
  }
  startTravelDialogue(
    helena,
    HELENA_DAY2_INTRO,
    () => {
      unlockHelenaInRegistro();
      openHelenaOptionsModal();
    },
    "Ver opciones"
  );
}

function startHelenaDialogue() {
  if (currentDay >= 2) {
    startHelenaDay2Dialogue();
    return;
  }
  startScriptedDialogueSequence(HELENA_DIALOGUE_SEQUENCE);
}

function showRewardToast(text) {
  if (!rewardToast) return;
  rewardToast.textContent = text;
  rewardToast.classList.add("open");
  if (rewardToastTimeoutId !== null) {
    window.clearTimeout(rewardToastTimeoutId);
  }
  rewardToastTimeoutId = window.setTimeout(() => {
    rewardToast.classList.remove("open");
    rewardToastTimeoutId = null;
  }, 1400);
}

function renderEndDayIconState() {
  if (!endDayIcon) return;
  endDayIcon.classList.toggle("enabled", isEndDayEnabled);
}

function setEndDayEnabled(enabled) {
  isEndDayEnabled = Boolean(enabled);
  renderEndDayIconState();
}

function renderDayBanner() {
  if (!dayBanner || !dayBannerNumber) return;
  if (currentDay <= 0) {
    dayBanner.style.display = "none";
    return;
  }
  dayBannerNumber.textContent = `${currentDay}`;
  dayBanner.style.display = "block";
}

function openDayEndModal() {
  if (!dayEndModal || !isEndDayEnabled) return;
  dayEndModal.classList.add("open");
  dayEndModal.setAttribute("aria-hidden", "false");
}

function closeDayEndModal() {
  if (!dayEndModal) return;
  dayEndModal.classList.remove("open");
  dayEndModal.setAttribute("aria-hidden", "true");
}

function getPuebloStatusLabel(value) {
  if (value >= 100) return { cls: "status-good", emoji: "😄" };
  if (value >= 70) return { cls: "status-mid", emoji: "🙂" };
  if (value >= 40) return { cls: "status-warn", emoji: "😐" };
  return { cls: "status-bad", emoji: "☹️" };
}

function formatSignedDelta(delta) {
  return delta >= 0 ? `+${delta}` : `${delta}`;
}

function openDaySummaryModal(dayNumber, dayDeltas, notes = []) {
  if (!daySummaryModal) return;
  if (daySummaryTitle) {
    daySummaryTitle.textContent = `Pueblo de Orbis - Día ${dayNumber}`;
  }
  if (summaryComida) {
    summaryComida.textContent = `${ALIMENTOS} (${formatSignedDelta(dayDeltas.alimentos)})`;
  }
  if (summaryDinero) {
    summaryDinero.textContent = `${DINERO} (${formatSignedDelta(dayDeltas.dinero)})`;
  }
  if (summaryPueblo) {
    const status = getPuebloStatusLabel(PUEBLO);
    summaryPueblo.classList.remove("status-good", "status-mid", "status-warn", "status-bad");
    summaryPueblo.classList.add(status.cls);
    summaryPueblo.textContent = `${PUEBLO} (${formatSignedDelta(dayDeltas.pueblo)}) ${status.emoji}`;
  }
  if (daySummaryNotes) {
    daySummaryNotes.innerHTML = "";
    for (const note of notes) {
      const p = document.createElement("p");
      p.textContent = note;
      daySummaryNotes.appendChild(p);
    }
  }
  daySummaryModal.classList.add("open");
  daySummaryModal.setAttribute("aria-hidden", "false");
}

function closeDaySummaryModal() {
  if (!daySummaryModal) return;
  daySummaryModal.classList.remove("open");
  daySummaryModal.setAttribute("aria-hidden", "true");
}

async function startNextDayFromSummary() {
  if (!isAwaitingDaySummaryContinue) return;
  if (isStartingNextDayFromSummary) return;
  isStartingNextDayFromSummary = true;
  closeDaySummaryModal();
  try {
    currentDay += 1;
    renderDayBanner();
    applyDayState(currentDay);
    closeSpeech();
    closeHelenaOptionsModal();
    closeItemModal();
    clearPendingSceneChange();
    pendingSceneEntryLeft = null;
    pendingSceneEntryBottom = null;
    pendingFondo2FromFondo1 = false;
    goToFondo1();
    await fadeOutDayTransitionFromBlack();
  } finally {
    isAwaitingDaySummaryContinue = false;
    isStartingNextDayFromSummary = false;
    isDayTransitionRunning = false;
    if (dayEndYesBtn) {
      dayEndYesBtn.disabled = false;
    }
    clearDayTransitionOverlayClasses();
  }
}

function requestCloseDaySummaryModal() {
  if (isAwaitingDaySummaryContinue) {
    void startNextDayFromSummary();
    return;
  }
  closeDaySummaryModal();
}

function applyDayState(dayNumber) {
  // Hook para cambios por día.
  void dayNumber;
}

function applyDailyResourceChanges() {
  // Regla global: los objetos no recogidos persisten entre días.
  // Aquí solo se aplican cambios de recursos diarios.
  const comidaBefore = ALIMENTOS;
  const dineroBefore = DINERO;
  const puebloBefore = PUEBLO;
  addALIMENTOS(-1);
  if (pendingDailyAlimentosDelta !== 0) addALIMENTOS(pendingDailyAlimentosDelta);
  if (pendingDailyDineroDelta !== 0) addDINERO(pendingDailyDineroDelta);
  if (pendingDailyPuebloDelta !== 0) addPUEBLO(pendingDailyPuebloDelta);
  const deltas = {
    alimentos: ALIMENTOS - comidaBefore,
    dinero: DINERO - dineroBefore,
    pueblo: PUEBLO - puebloBefore
  };
  pendingDailyAlimentosDelta = 0;
  pendingDailyDineroDelta = 0;
  pendingDailyPuebloDelta = 0;
  return deltas;
}

async function advanceToNextDay() {
  if (isDayTransitionRunning || isAwaitingDaySummaryContinue) return;
  isDayTransitionRunning = true;
  if (dayEndYesBtn) {
    dayEndYesBtn.disabled = true;
  }
  closeDayEndModal();
  try {
    await playDayTransitionToBlack();
    const closingDayNumber = currentDay;
    const dayDeltas = applyDailyResourceChanges();
    const summaryNotes = consumePendingDaySummaryNotes();
    isAwaitingDaySummaryContinue = true;
    openDaySummaryModal(closingDayNumber, dayDeltas, summaryNotes);
  } catch (error) {
    console.error("No se pudo completar la transición de día.", error);
    isAwaitingDaySummaryContinue = false;
    isDayTransitionRunning = false;
    if (dayEndYesBtn) {
      dayEndYesBtn.disabled = false;
    }
    clearDayTransitionOverlayClasses();
  }
  if (!daySummaryModal) {
    await startNextDayFromSummary();
    return;
  }
  if (!daySummaryModal.classList.contains("open")) {
    await startNextDayFromSummary();
    return;
  }
}

function applyAnilloInventoryStyle() {
  if (!anilloItem) return;
  anilloItem.style.position = "absolute";
  anilloItem.style.width = ANILLO_INVENTORY_WIDTH;
  anilloItem.style.maxHeight = ANILLO_INVENTORY_MAX_HEIGHT;
  anilloItem.style.left = ANILLO_INVENTORY_LEFT;
  anilloItem.style.bottom = ANILLO_INVENTORY_BOTTOM;
  anilloItem.style.transform = "none";
}

addFallbackOnError("background", "fondo no encontrado");
addFallbackOnError("anillo-world", "anillo.png no encontrado");
addFallbackOnError("anillo-item", "anillo.png no encontrado");
addFallbackOnError("camus", "camus.png no encontrado");
addFallbackOnError("helena", "helena.png no encontrado");
addFallbackOnError("darren", "darren.png no encontrado");
addFallbackOnError("mercenario", "mercenario.png no encontrado");

function preloadEvelynWalkFrames() {
  for (const src of EVELYN_WALK_FRAMES) {
    const img = new Image();
    img.src = src;
  }
}

function setEvelynFrame(src) {
  if (!evelyn || evelyn.getAttribute("src") === src) return;
  evelyn.setAttribute("src", src);
}

function startEvelynWalkAnimation() {
  if (!WALK_SPRITES_ENABLED) {
    setEvelynFrame(EVELYN_IDLE_SRC);
    return;
  }
  if (!evelyn || evelynWalkIntervalId !== null) return;
  evelynWalkFrameIndex = 0;
  setEvelynFrame(EVELYN_WALK_FRAMES[evelynWalkFrameIndex]);
  evelynWalkFrameIndex = (evelynWalkFrameIndex + 1) % EVELYN_WALK_FRAMES.length;
  evelynWalkIntervalId = window.setInterval(() => {
    setEvelynFrame(EVELYN_WALK_FRAMES[evelynWalkFrameIndex]);
    evelynWalkFrameIndex = (evelynWalkFrameIndex + 1) % EVELYN_WALK_FRAMES.length;
  }, EVELYN_WALK_FRAME_MS);
}

function stopEvelynWalkAnimation() {
  if (evelynWalkIntervalId !== null) {
    window.clearInterval(evelynWalkIntervalId);
    evelynWalkIntervalId = null;
  }
  evelynWalkFrameIndex = 0;
  setEvelynFrame(EVELYN_IDLE_SRC);
}

function snapEvelynToInitialPosition() {
  snapEvelynToPosition(INITIAL_EVELYN_LEFT, INITIAL_EVELYN_BOTTOM);
}

function snapEvelynToPosition(left, bottom = INITIAL_EVELYN_BOTTOM) {
  if (!evelyn) return;
  const previousTransition = evelyn.style.transition;
  evelyn.style.transition = "none";
  evelyn.style.left = left;
  evelyn.style.top = "auto";
  evelyn.style.bottom = bottom;
  void evelyn.offsetWidth;
  evelyn.style.transition = previousTransition;
}

function createDragProxy(sourceEl, clientX, clientY) {
  removeDragProxy();
  dragProxy = sourceEl.cloneNode(true);
  dragProxy.removeAttribute("id");
  dragProxy.style.position = "fixed";
  dragProxy.style.left = `${clientX}px`;
  dragProxy.style.top = `${clientY}px`;
  dragProxy.style.width = "72px";
  dragProxy.style.height = "72px";
  dragProxy.style.objectFit = "contain";
  dragProxy.style.transform = "translate(-50%, -50%)";
  dragProxy.style.pointerEvents = "none";
  dragProxy.style.zIndex = "9999";
  dragProxy.style.opacity = "0.65";
  document.body.appendChild(dragProxy);
}

function moveDragProxy(clientX, clientY) {
  if (!dragProxy) return;
  dragProxy.style.left = `${clientX}px`;
  dragProxy.style.top = `${clientY}px`;
}

function removeDragProxy() {
  if (!dragProxy) return;
  dragProxy.remove();
  dragProxy = null;
}

function triggerInventoryBuzz() {
  if (!inventory) return;
  inventory.classList.remove("buzz");
  if (alimentosDisplay) alimentosDisplay.classList.remove("buzz-counter");
  if (dineroDisplay) dineroDisplay.classList.remove("buzz-counter");
  if (puebloDisplay) puebloDisplay.classList.remove("buzz-counter");
  void inventory.offsetWidth;
  inventory.classList.add("buzz");
  if (alimentosDisplay) alimentosDisplay.classList.add("buzz-counter");
  if (dineroDisplay) dineroDisplay.classList.add("buzz-counter");
  if (puebloDisplay) puebloDisplay.classList.add("buzz-counter");
  window.setTimeout(() => {
    inventory.classList.remove("buzz");
    if (alimentosDisplay) alimentosDisplay.classList.remove("buzz-counter");
    if (dineroDisplay) dineroDisplay.classList.remove("buzz-counter");
    if (puebloDisplay) puebloDisplay.classList.remove("buzz-counter");
  }, 420);
}

function isItemOwned(itemType) {
  if (itemType === "anillo") return hasAnillo;
  return false;
}

function setupInventoryItemDrag(itemEl, itemType) {
  if (!itemEl) return;
  itemEl.addEventListener("dragstart", (event) => {
    if (!isItemOwned(itemType)) {
      event.preventDefault();
      return;
    }
    draggedSourceElement = itemEl;
    draggedInventoryItem = itemType;
    event.dataTransfer.setData("text/plain", itemType);
    event.dataTransfer.effectAllowed = "move";
    try {
      event.dataTransfer.setDragImage(TRANSPARENT_DRAG_IMAGE, 0, 0);
    } catch (error) {
      // Fallback: if browser blocks custom drag image, keep native behavior.
    }
    itemEl.style.opacity = "0.25";
    createDragProxy(itemEl, event.clientX, event.clientY);
  });

  itemEl.addEventListener("dragend", () => {
    const droppedOutsideScene = Boolean(draggedInventoryItem);
    draggedInventoryItem = null;
    if (draggedSourceElement) {
      draggedSourceElement.style.opacity = "";
      draggedSourceElement = null;
    }
    removeDragProxy();
    if (droppedOutsideScene) {
      triggerInventoryBuzz();
    }
  });
}

function clearPendingSceneChange() {
  pendingSceneChangeAction = null;
  pendingSceneChangeArrow = null;
  if (pendingSceneChangeTimeoutId !== null) {
    window.clearTimeout(pendingSceneChangeTimeoutId);
    pendingSceneChangeTimeoutId = null;
  }
}

function setPendingSceneEntry(left, bottom = null) {
  pendingSceneEntryLeft = left;
  pendingSceneEntryBottom = bottom;
}

function consumePendingSceneEntry(fallbackLeft) {
  const left = pendingSceneEntryLeft || fallbackLeft;
  pendingSceneEntryLeft = null;
  return left;
}

function consumePendingSceneEntryBottom(fallbackBottom) {
  const bottom = pendingSceneEntryBottom || fallbackBottom;
  pendingSceneEntryBottom = null;
  return bottom;
}

function getSceneScale() {
  const rect = scene.getBoundingClientRect();
  return rect.width / BASE_WIDTH;
}

function clientToWorld(clientX, clientY) {
  const rect = scene.getBoundingClientRect();
  const scale = getSceneScale();
  return {
    x: (clientX - rect.left) / scale,
    y: (clientY - rect.top) / scale
  };
}

function getWorldRect(el) {
  const rect = el.getBoundingClientRect();
  const topLeft = clientToWorld(rect.left, rect.top);
  const bottomRight = clientToWorld(rect.right, rect.bottom);
  return {
    left: topLeft.x,
    top: topLeft.y,
    right: bottomRight.x,
    bottom: bottomRight.y,
    width: bottomRight.x - topLeft.x,
    height: bottomRight.y - topLeft.y
  };
}

function layoutScene() {
  const vw = sceneViewport.clientWidth;
  const vh = sceneViewport.clientHeight;
  const scale = Math.max(vw / BASE_WIDTH, vh / BASE_HEIGHT);
  const offsetX = (vw - BASE_WIDTH * scale) / 2;
  const offsetY = (vh - BASE_HEIGHT * scale) / 2;
  scene.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}

function setEvelynFacing(targetX) {
  const currentCenterX = evelyn.offsetLeft + evelyn.offsetWidth / 2;
  const delta = targetX - currentCenterX;
  if (Math.abs(delta) < 2) return;
  evelyn.style.transform = delta > 0 ? "scaleX(1)" : "scaleX(-1)";
}

function faceEvelynToward(el) {
  if (!el) return;
  const evelynRect = getWorldRect(evelyn);
  const targetRect = getWorldRect(el);
  const evelynCenter = evelynRect.left + evelynRect.width / 2;
  const targetCenter = targetRect.left + targetRect.width / 2;
  evelyn.style.transform = targetCenter >= evelynCenter ? "scaleX(1)" : "scaleX(-1)";
}

function faceCamusTowardEvelyn() {
  if (!camus || !evelyn) return;
  const evelynRect = getWorldRect(evelyn);
  const camusRect = getWorldRect(camus);
  const evelynCenter = evelynRect.left + evelynRect.width / 2;
  const camusCenter = camusRect.left + camusRect.width / 2;
  const scale = evelynCenter < camusCenter ? 1 : -1;
  camus.style.transform = `translateX(-50%) scaleX(${scale})`;
}

function faceJaneTowardEvelyn() {
  if (!jane || !evelyn) return;
  const evelynRect = getWorldRect(evelyn);
  const janeRect = getWorldRect(jane);
  const evelynCenter = evelynRect.left + evelynRect.width / 2;
  const janeCenter = janeRect.left + janeRect.width / 2;
  const scale = evelynCenter < janeCenter ? 1 : -1;
  jane.style.transform = `translateX(-50%) scaleX(${scale})`;
}

function moveEvelynTo(targetWorldX, avoidJane = true) {
  const evelynWidth = evelyn.offsetWidth;
  const janeRect = getWorldRect(jane);
  const janeCenterX = janeRect.left + janeRect.width / 2;
  const currentLeft = evelyn.offsetLeft;

  let clampedX = Math.min(
    BASE_WIDTH - evelynWidth,
    Math.max(0, targetWorldX - evelynWidth * 0.5)
  );

  if (avoidJane) {
    const candidateLeft = clampedX;
    const candidateRight = candidateLeft + evelynWidth;
    const blockedLeft = janeRect.left - JANE_GAP;
    const blockedRight = janeRect.right + JANE_GAP;
    const overlapsJaneHorizontally = candidateRight > blockedLeft && candidateLeft < blockedRight;

    if (overlapsJaneHorizontally) {
      const sideX = targetWorldX < janeCenterX
        ? janeRect.left - evelynWidth / 2 - JANE_GAP
        : janeRect.right + evelynWidth / 2 + JANE_GAP;
      clampedX = Math.min(
        BASE_WIDTH - evelynWidth,
        Math.max(0, sideX - evelynWidth * 0.5)
      );
    }
  }

  const finalCenterX = clampedX + evelynWidth / 2;
  const deltaLeft = clampedX - currentLeft;
  const moveDistance = Math.abs(deltaLeft);
  const moveDurationMs = moveDistance <= EVELYN_SHORT_MOVE_DISTANCE_PX
    ? EVELYN_MOVE_DURATION_SHORT_MS
    : EVELYN_MOVE_DURATION_LONG_MS;
  evelyn.style.transition = `left ${moveDurationMs}ms linear, transform 0.12s linear`;
  if (Math.abs(deltaLeft) > 0.5) {
    evelyn.style.transform = deltaLeft > 0 ? "scaleX(1)" : "scaleX(-1)";
  } else {
    setEvelynFacing(finalCenterX);
  }
  if (Math.abs(clampedX - currentLeft) > 1) {
    startEvelynWalkAnimation();
  } else {
    stopEvelynWalkAnimation();
  }

  evelyn.style.left = `${clampedX}px`;
  evelyn.style.top = "auto";
  evelyn.style.bottom = isInFondo1()
    ? getFondo1EvelynBottom()
    : isInFondo2()
      ? getFondo2FromFondo1EvelynBottom()
      : isInFondo0()
        ? getFondo0EvelynBottom()
        : INITIAL_EVELYN_BOTTOM;
  return Math.abs(clampedX - currentLeft) > 1;
}

function moveEvelynInFrontOf(el, avoidJane = true) {
  const targetRect = getWorldRect(el);
  const evelynWidth = evelyn.offsetWidth;
  const evelynCenter = evelyn.offsetLeft + evelynWidth / 2;
  const targetCenter = targetRect.left + targetRect.width / 2;

  const x = evelynCenter < targetCenter
    ? targetRect.left - evelynWidth / 2 - JANE_GAP
    : targetRect.right + evelynWidth / 2 + JANE_GAP;
  moveEvelynTo(x, avoidJane);
}

function moveEvelynToArrowAndChangeScene(arrowEl, onArrive) {
  if (!arrowEl || typeof onArrive !== "function") return;
  closeSpeech();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForHelena = false;
  const arrowRect = getWorldRect(arrowEl);
  const targetX = arrowRect.left + arrowRect.width / 2;
  pendingSceneChangeAction = onArrive;
  pendingSceneChangeArrow = arrowEl || null;
  const didMove = moveEvelynTo(targetX, false);
  if (!didMove && pendingSceneChangeAction) {
    triggerPendingSceneChange();
  }
}

function getArrowVerticalExitOffset(arrowEl) {
  if (!arrowEl) return 0;
  if (
    arrowEl.classList.contains("arrow-up-center")
    || arrowEl.classList.contains("arrow-up-fondo2-center")
    || arrowEl.classList.contains("arrow-up-top-center")
  ) {
    return 20;
  }
  if (arrowEl.classList.contains("arrow-down-center")) {
    return -20;
  }
  return 0;
}

function triggerPendingSceneChange() {
  if (!pendingSceneChangeAction) return;
  const action = pendingSceneChangeAction;
  const arrowEl = pendingSceneChangeArrow;
  const verticalOffset = getArrowVerticalExitOffset(arrowEl);
  clearPendingSceneChange();
  if (!evelyn || verticalOffset === 0) {
    action();
    return;
  }
  const currentBottom = parseFloat(window.getComputedStyle(evelyn).bottom || "0") || 0;
  evelyn.style.transition = "bottom 170ms linear, left 0ms linear, transform 0.12s linear";
  evelyn.style.bottom = `${currentBottom + verticalOffset}px`;
  pendingSceneChangeTimeoutId = window.setTimeout(() => {
    pendingSceneChangeTimeoutId = null;
    action();
  }, 180);
}

function isEvelynBeside(el) {
  const evelynRect = getWorldRect(evelyn);
  const targetRect = getWorldRect(el);
  const leftDistance = Math.abs(targetRect.left - evelynRect.right);
  const rightDistance = Math.abs(evelynRect.left - targetRect.right);
  const closeEnough = leftDistance <= JANE_GAP + 8 || rightDistance <= JANE_GAP + 8;
  const verticalOverlap = evelynRect.bottom > targetRect.top && evelynRect.top < targetRect.bottom;
  return closeEnough && verticalOverlap;
}

function positionSpeechAt(el) {
  const targetRect = getWorldRect(el);
  const anchorY = targetRect.top;
  const previousDisplay = speech.style.display;
  const previousVisibility = speech.style.visibility;
  if (speech.style.display === "none") {
    speech.style.visibility = "hidden";
    speech.style.display = "block";
  }
  const bubbleHeight = speech.offsetHeight || 170;
  const targetCenterX = targetRect.left + targetRect.width / 2;
  speech.style.left = `${targetCenterX + SPEECH_LEFT_FROM_CENTER_PX}px`;
  speech.style.top = `${anchorY - bubbleHeight - SPEECH_UP_OFFSET_PX}px`;
  if (previousDisplay === "none") {
    speech.style.display = "none";
    speech.style.visibility = previousVisibility;
  }
}

function positionSpeechCenter() {
  const centerX = BASE_WIDTH / 2;
  const centerY = BASE_HEIGHT / 2;
  speech.style.left = `${centerX - 150}px`;
  speech.style.top = `${centerY - 110}px`;
}

function closeSpeech() {
  clearScriptedDialogueSequence();
  clearUiHighlight();
  speech.style.display = "none";
  speech.classList.remove("speech-centered");
  speechAnchor = null;
  activeDialogue = null;
  activeDialogueIndex = 0;
  if (speechOptions) {
    speechOptions.innerHTML = "";
    speechOptions.style.display = "none";
  }
  if (speechNextBtn) {
    speechNextBtn.style.display = "block";
    speechNextBtn.textContent = DEFAULT_SPEECH_NEXT_LABEL;
  }
}

function renderActiveDialogue() {
  if (!activeDialogue) return;
  speechAnchor = activeDialogue.anchor || null;
  if (activeDialogue.type === "choice") {
    speech.classList.remove("speech-centered");
    speechText.textContent = activeDialogue.prompt;
    if (speechOptions) {
      speechOptions.innerHTML = "";
      speechOptions.style.display = "block";
      for (const option of activeDialogue.options) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "speech-option-btn";
        btn.textContent = option.label;
        btn.addEventListener("click", () => {
          if (typeof option.onSelect === "function") {
            option.onSelect();
            return;
          }
          startDialogue(activeDialogue.anchor, [option.response]);
        });
        speechOptions.appendChild(btn);
      }
    }
    if (speechNextBtn) {
      speechNextBtn.style.display = "none";
    }
  } else if (activeDialogue.type === "centered") {
    speech.classList.add("speech-centered");
    speechText.textContent = activeDialogue.lines[activeDialogueIndex] || "";
    if (speechOptions) {
      speechOptions.innerHTML = "";
      speechOptions.style.display = "none";
    }
    if (speechNextBtn) {
      speechNextBtn.style.display = "none";
    }
  } else {
    speech.classList.remove("speech-centered");
    speechText.textContent = activeDialogue.lines[activeDialogueIndex] || "";
    if (speechOptions) {
      speechOptions.innerHTML = "";
      speechOptions.style.display = "none";
    }
    if (speechNextBtn) {
      speechNextBtn.style.display = "block";
      if (activeDialogue.type === "travel") {
        speechNextBtn.textContent = activeDialogue.nextLabel || TRAVEL_SPEECH_NEXT_LABEL;
      } else {
        speechNextBtn.textContent = DEFAULT_SPEECH_NEXT_LABEL;
      }
    }
  }
  if (activeDialogue.type === "centered") {
    positionSpeechCenter();
  } else {
    positionSpeechAt(activeDialogue.anchor);
  }
  speech.style.display = "block";
}

function startDialogue(anchor, lines, speechExtraTop = 0, onComplete = null) {
  activeDialogue = { type: "linear", anchor, lines, speechExtraTop, onComplete };
  activeDialogueIndex = 0;
  renderActiveDialogue();
}

function startTravelDialogue(anchor, lines, onConfirm, nextLabel = TRAVEL_SPEECH_NEXT_LABEL) {
  activeDialogue = { type: "travel", anchor, lines, onConfirm, nextLabel };
  activeDialogueIndex = 0;
  renderActiveDialogue();
}

function startChoiceDialogue(anchor, prompt, options) {
  activeDialogue = { type: "choice", anchor, prompt, options };
  activeDialogueIndex = 0;
  renderActiveDialogue();
}

function startCenteredDialogue(lines) {
  activeDialogue = { type: "centered", lines };
  activeDialogueIndex = 0;
  renderActiveDialogue();
}

function renderIntroDialogueStep() {
  const step = INTRO_DIALOGUE_SEQUENCE[introDialogueIndex];
  if (!step) {
    isIntroSequenceActive = false;
    closeSpeech();
    return;
  }
  const anchor = step.speaker === "camus" ? camus : evelyn;
  startDialogue(anchor, [step.line], step.speechExtraTop || 0);
}

function startIntroDialogueSequence() {
  isIntroSequenceActive = true;
  introDialogueIndex = 0;
  renderIntroDialogueStep();
}

function advanceIntroDialogueSequence() {
  introDialogueIndex += 1;
  renderIntroDialogueStep();
}

function advanceActiveDialogue() {
  if (speech.style.display === "none" || !activeDialogue) return;
  if (activeDialogue.type === "travel") {
    if (typeof activeDialogue.onConfirm === "function") {
      activeDialogue.onConfirm();
    } else {
      closeSpeech();
    }
    return;
  }
  if (activeDialogue.type !== "linear" && activeDialogue.type !== "centered") return;
  if (activeDialogueIndex >= activeDialogue.lines.length - 1) {
    if (typeof activeDialogue.onComplete === "function") {
      activeDialogue.onComplete();
    }
    closeSpeech();
    return;
  }
  activeDialogueIndex += 1;
  renderActiveDialogue();
}

function isInFondo1() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/fondo1.png");
}

function isInFondo2() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/fondo2.png");
}

function isInFondo0() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/fondo0.png");
}

function isInFondo3() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/fondo3.png");
}

function isInFondo4() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/fondo4.png");
}

function isInFondo5() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/fondo5.png");
}

function cancelPendingAnilloPickup() {
  if (anilloPickupTimeoutId !== null) {
    window.clearTimeout(anilloPickupTimeoutId);
    anilloPickupTimeoutId = null;
  }
  anilloPickupPending = false;
  if (!hasAnillo) {
    anilloWorld.style.pointerEvents = "auto";
  }
}

function pickupAnillo() {
  if (hasAnillo) return;

  anilloPickupPending = false;
  anilloPickupTimeoutId = null;
  hasAnillo = true;
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";

  const firstSlot = inventorySlots[0];
  if (firstSlot) {
    firstSlot.appendChild(anilloItem);
  }
  applyAnilloInventoryStyle();
  anilloItem.style.display = "block";
  openItemModal(ANILLO_OBTAINED_MODAL);
}

function openItemModal(content = ANILLO_MODAL) {
  if (itemModalImage && content.imageSrc) {
    itemModalImage.src = content.imageSrc;
    itemModalImage.alt = content.imageAlt || "";
  }
  if (itemModalText) {
    itemModalText.innerHTML = content.textHtml || "";
  }
  itemModal.classList.add("open");
  itemModal.setAttribute("aria-hidden", "false");
}

function closeItemModal() {
  itemModal.classList.remove("open");
  itemModal.setAttribute("aria-hidden", "true");
}

function goToFondo2() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  const fondo2Bottom = pendingFondo2FromFondo1
    ? getFondo2FromFondo1EvelynBottom()
    : consumePendingSceneEntryBottom(INITIAL_EVELYN_BOTTOM);
  snapEvelynToPosition(consumePendingSceneEntry(INITIAL_EVELYN_LEFT), fondo2Bottom);
  pendingFondo2FromFondo1 = false;

  background.src = asset("escenarios/fondo2.png");
  background.alt = "Fondo 2";
  setSceneBackgroundClass("in-fondo2");

  jane.style.display = "none";
  if (helena) {
    helena.style.display = "none";
  }
  if (camus) {
    camus.style.display = "none";
  }
  if (darren) {
    darren.style.display = "block";
  }
  if (mercenario) {
    mercenario.style.display = "none";
  }
  anilloWorld.style.display = "none";
  inventory.style.display = "block";
  setArrowMode(nextArrow, "arrow-up-fondo2-center");
  setArrowMode(prevArrow, null);
  nextArrow.style.display = "block";
  nextArrow.style.visibility = "visible";
  nextArrow.style.pointerEvents = "auto";
  nextArrow.setAttribute("aria-label", "Ir a fondo 3");
  prevArrow.style.display = "block";
  prevArrow.setAttribute("aria-label", "Volver a fondo 1");
  if (leftSideArrow) {
    leftSideArrow.style.display = "none";
  }
}

function goToFondo3() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;

  snapEvelynToPosition(
    consumePendingSceneEntry(INITIAL_EVELYN_LEFT),
    consumePendingSceneEntryBottom(INITIAL_EVELYN_BOTTOM)
  );

  background.src = asset("escenarios/fondo3.png");
  background.alt = "Fondo 3";
  setSceneBackgroundClass("in-fondo3");

  jane.style.display = "none";
  if (helena) {
    helena.style.display = "none";
  }
  if (camus) {
    camus.style.display = "none";
  }
  if (darren) {
    darren.style.display = "none";
  }
  if (mercenario) {
    mercenario.style.display = "none";
  }
  anilloWorld.style.display = "none";
  inventory.style.display = "block";
  setArrowMode(nextArrow, "arrow-down-center");
  setArrowMode(prevArrow, "arrow-up-top-center");
  nextArrow.style.display = "block";
  nextArrow.style.visibility = "visible";
  nextArrow.style.pointerEvents = "auto";
  nextArrow.setAttribute("aria-label", "Volver a fondo 2");
  prevArrow.style.display = "block";
  prevArrow.style.visibility = "visible";
  prevArrow.style.pointerEvents = "auto";
  prevArrow.setAttribute("aria-label", "Ir a fondo 4");
  if (leftSideArrow) {
    leftSideArrow.style.display = "none";
  }
}

function goToFondo4() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;

  background.src = asset("escenarios/fondo4.png");
  background.alt = "Fondo 4";
  setSceneBackgroundClass("in-fondo4");

  snapEvelynToPosition(
    consumePendingSceneEntry(ENTRY_CENTER),
    consumePendingSceneEntryBottom(getFondo4EntryEvelynBottom())
  );
  evelyn.style.transform = "scaleX(-1)";

  jane.style.display = "none";
  if (helena) {
    helena.style.display = "none";
  }
  if (camus) {
    camus.style.display = "none";
  }
  if (darren) {
    darren.style.display = "none";
  }
  if (mercenario) {
    mercenario.style.display = "none";
  }
  anilloWorld.style.display = "none";
  inventory.style.display = "block";
  setArrowMode(nextArrow, null);
  setArrowMode(prevArrow, "arrow-down-center");
  nextArrow.style.display = "none";
  prevArrow.style.display = "block";
  prevArrow.style.visibility = "visible";
  prevArrow.style.pointerEvents = "auto";
  prevArrow.setAttribute("aria-label", "Volver a fondo 3");
  if (leftSideArrow) {
    leftSideArrow.style.display = "none";
  }
}

function goToFondo1() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;

  const fondo1Bottom = consumePendingSceneEntryBottom(getFondo1EvelynBottom());
  snapEvelynToPosition(consumePendingSceneEntry(INITIAL_EVELYN_LEFT), fondo1Bottom);

  background.src = asset("escenarios/fondo1.png");
  background.alt = "Fondo 1";
  setSceneBackgroundClass("in-fondo1");
  evelyn.style.bottom = fondo1Bottom;

  if (currentDay >= 1) {
    jane.style.display = "none";
    if (camus) {
      camus.style.display = "none";
    }
    if (helena) {
      helena.style.display = "block";
    }
  } else {
    jane.style.display = "block";
    if (camus) {
      camus.style.display = "block";
    }
    if (helena) {
      helena.style.display = "none";
    }
  }
  if (darren) {
    darren.style.display = "none";
  }
  if (mercenario) {
    mercenario.style.display = "none";
  }
  if (mercenario) {
    mercenario.style.display = spawnMercenaryOnDay10 && currentDay >= 10 ? "block" : "none";
  }
  anilloWorld.style.display = hasAnillo ? "none" : "block";
  anilloWorld.style.pointerEvents = hasAnillo ? "none" : "auto";
  inventory.style.display = "block";
  setArrowMode(nextArrow, null);
  setArrowMode(prevArrow, "arrow-down-center");
  nextArrow.style.display = "block";
  nextArrow.setAttribute("aria-label", "Ir a fondo 2");
  prevArrow.style.display = "block";
  prevArrow.style.visibility = "visible";
  prevArrow.style.pointerEvents = "auto";
  prevArrow.setAttribute("aria-label", "Ir a fondo 0");
  if (leftSideArrow) {
    leftSideArrow.style.display = "block";
    leftSideArrow.style.visibility = "visible";
    leftSideArrow.style.pointerEvents = "auto";
    leftSideArrow.setAttribute("aria-label", "Ir a fondo 5");
  }
}

function goToFondo5() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;

  snapEvelynToPosition(
    consumePendingSceneEntry(ENTRY_FONDO5_FROM_FONDO1),
    consumePendingSceneEntryBottom(getFondo5EntryEvelynBottom())
  );

  background.src = asset("escenarios/fondo5.png");
  background.alt = "Fondo 5";
  setSceneBackgroundClass("in-fondo5");

  jane.style.display = "none";
  if (helena) {
    helena.style.display = "none";
  }
  if (camus) {
    camus.style.display = "none";
  }
  if (darren) {
    darren.style.display = "none";
  }
  if (mercenario) {
    mercenario.style.display = "none";
  }
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
  inventory.style.display = "block";
  setArrowMode(nextArrow, null);
  setArrowMode(prevArrow, null);
  nextArrow.style.display = "block";
  nextArrow.style.visibility = "visible";
  nextArrow.style.pointerEvents = "auto";
  nextArrow.setAttribute("aria-label", "Volver a fondo 1");
  prevArrow.style.display = "none";
  if (leftSideArrow) {
    leftSideArrow.style.display = "none";
  }
}

function goToFondo0() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;

  snapEvelynToPosition(consumePendingSceneEntry(FONDO0_EVELYN_LEFT), getFondo0EvelynBottom());

  background.src = asset("escenarios/fondo0.png");
  background.alt = "Fondo 0";
  setSceneBackgroundClass("in-fondo0");

  jane.style.display = "none";
  if (helena) {
    helena.style.display = "none";
  }
  if (camus) {
    camus.style.display = "none";
  }
  if (darren) {
    darren.style.display = "none";
  }
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
  inventory.style.display = "block";
  setArrowMode(nextArrow, "arrow-up-center");
  setArrowMode(prevArrow, null);
  nextArrow.style.display = "block";
  nextArrow.style.visibility = "visible";
  nextArrow.style.pointerEvents = "auto";
  nextArrow.setAttribute("aria-label", "Volver a fondo 1");
  prevArrow.style.display = "none";
  if (leftSideArrow) {
    leftSideArrow.style.display = "none";
  }
}

if (jane) {
  jane.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    closeSpeech();
    pendingSpeechForJane = true;
    pendingSpeechForCamus = false;
    pendingSpeechForDarren = false;
    pendingSpeechForHelena = false;
    moveEvelynInFrontOf(jane);
    if (isEvelynBeside(jane)) {
      faceEvelynToward(jane);
      faceJaneTowardEvelyn();
      startJaneInteractionDialogue();
      pendingSpeechForJane = false;
    }
  });
}

if (camus) {
  camus.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    closeSpeech();
    pendingSpeechForCamus = true;
    pendingSpeechForJane = false;
    pendingSpeechForDarren = false;
    pendingSpeechForHelena = false;
    moveEvelynInFrontOf(camus, false);
    if (isEvelynBeside(camus)) {
      faceEvelynToward(camus);
      faceCamusTowardEvelyn();
      startCamusInteractionDialogue();
      pendingSpeechForCamus = false;
    }
  });
}

if (darren) {
  darren.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    closeSpeech();
    pendingSpeechForDarren = true;
    pendingSpeechForJane = false;
    pendingSpeechForCamus = false;
    pendingSpeechForHelena = false;
    moveEvelynInFrontOf(darren, false);
    if (isEvelynBeside(darren)) {
      faceEvelynToward(darren);
      startDarrenInteractionDialogue();
      pendingSpeechForDarren = false;
    }
  });
}

if (helena) {
  helena.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (helenaOptionsModal && helenaOptionsModal.classList.contains("open")) return;
    if (window.getComputedStyle(helena).display === "none") return;
    closeSpeech();
    pendingSpeechForHelena = true;
    pendingSpeechForJane = false;
    pendingSpeechForCamus = false;
    pendingSpeechForDarren = false;
    moveEvelynInFrontOf(helena, false);
    if (isEvelynBeside(helena)) {
      faceEvelynToward(helena);
      startHelenaDialogue();
      pendingSpeechForHelena = false;
    }
  });
}

for (const card of helenaOptionCards) {
  card.addEventListener("click", () => {
    const optionId = card.dataset.optionId;
    if (!optionId) return;
    const nextSelection = new Set(selectedHelenaOptionIds);
    if (nextSelection.has(optionId)) {
      nextSelection.delete(optionId);
    } else {
      nextSelection.add(optionId);
      if (!canAffordHelenaDay2Selection(nextSelection)) {
        showRewardToast("No tienes recursos suficientes.");
        triggerInventoryBuzz();
        return;
      }
    }
    setSelectedHelenaOptions(nextSelection);
    if (helenaOptionsEmptyConfirm) {
      helenaOptionsEmptyConfirm.classList.remove("open");
      helenaOptionsEmptyConfirm.setAttribute("aria-hidden", "true");
    }
  });
}

if (helenaOptionsConfirmBtn) {
  helenaOptionsConfirmBtn.addEventListener("click", () => {
    if (selectedHelenaOptionIds.size === 0) {
      if (helenaOptionsEmptyConfirm) {
        helenaOptionsEmptyConfirm.classList.add("open");
        helenaOptionsEmptyConfirm.setAttribute("aria-hidden", "false");
      }
      return;
    }
    if (!canAffordHelenaDay2Selection(selectedHelenaOptionIds)) {
      showRewardToast("No tienes recursos suficientes.");
      triggerInventoryBuzz();
      return;
    }
    finalizeHelenaDay2Options(selectedHelenaOptionIds);
    completeHelenaDay2Dialogue();
  });
}

if (helenaEmptyNoBtn) {
  helenaEmptyNoBtn.addEventListener("click", () => {
    if (!helenaOptionsEmptyConfirm) return;
    helenaOptionsEmptyConfirm.classList.remove("open");
    helenaOptionsEmptyConfirm.setAttribute("aria-hidden", "true");
  });
}

if (helenaEmptyYesBtn) {
  helenaEmptyYesBtn.addEventListener("click", () => {
    finalizeHelenaDay2Options(new Set());
    completeHelenaDay2Dialogue();
  });
}

if (nextArrow) {
  nextArrow.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (isInFondo5()) {
      setPendingSceneEntry(ENTRY_LEFT_EDGE, getFondo1EvelynBottom());
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo1);
      return;
    }
    if (isInFondo4()) {
      setPendingSceneEntry(ENTRY_FONDO3_FROM_FONDO2, getFondo3EntryEvelynBottom());
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo3);
      return;
    }
    if (isInFondo2()) {
      setPendingSceneEntry(ENTRY_FONDO3_FROM_FONDO2, getFondo3EntryEvelynBottom());
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo3);
      return;
    }
    if (isInFondo0()) {
      setPendingSceneEntry(ENTRY_FONDO1_FROM_FONDO0, getFondo1EvelynBottom());
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo1);
      return;
    }
    if (isInFondo1()) {
      pendingFondo2FromFondo1 = true;
      setPendingSceneEntry(ENTRY_FONDO2_FROM_FONDO1);
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo2);
      return;
    }
    if (isInFondo3()) {
      pendingFondo2FromFondo1 = false;
      setPendingSceneEntry(ENTRY_FONDO2_FROM_FONDO3, getFondo2FromFondo1EvelynBottom());
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo2);
      return;
    }
    pendingFondo2FromFondo1 = false;
    setPendingSceneEntry(ENTRY_LEFT_EDGE);
    moveEvelynToArrowAndChangeScene(nextArrow, goToFondo2);
  });
}

if (prevArrow) {
  prevArrow.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (isInFondo4()) {
      setPendingSceneEntry(ENTRY_RIGHT_EDGE);
      moveEvelynToArrowAndChangeScene(prevArrow, goToFondo3);
      return;
    }
    if (isInFondo3()) {
      setPendingSceneEntry(ENTRY_CENTER, getFondo4EntryEvelynBottom());
      moveEvelynToArrowAndChangeScene(prevArrow, goToFondo4);
      return;
    }
    if (isInFondo1()) {
      setPendingSceneEntry(ENTRY_CENTER);
      moveEvelynToArrowAndChangeScene(prevArrow, goToFondo0);
      return;
    }
    if (isInFondo2()) {
      setPendingSceneEntry(ENTRY_FONDO1_FROM_FONDO2, getFondo1EvelynBottom());
      moveEvelynToArrowAndChangeScene(prevArrow, goToFondo1);
      return;
    }
    setPendingSceneEntry(ENTRY_RIGHT_EDGE);
    moveEvelynToArrowAndChangeScene(prevArrow, goToFondo1);
  });
}

if (leftSideArrow) {
  leftSideArrow.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (!isInFondo1()) return;
    setPendingSceneEntry(ENTRY_FONDO5_FROM_FONDO1);
    moveEvelynToArrowAndChangeScene(leftSideArrow, goToFondo5);
  });
}

if (anilloWorld) {
  anilloWorld.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (hasAnillo || anilloPickupPending) return;

    anilloPickupPending = true;
    anilloWorld.style.pointerEvents = "none";
    moveEvelynInFrontOf(anilloWorld);
    anilloPickupTimeoutId = window.setTimeout(() => {
      pickupAnillo();
    }, 900);
  });
}

if (anilloItem) {
  setupInventoryItemDrag(anilloItem, "anillo");
  anilloItem.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (!hasAnillo) return;
    openItemModal(ANILLO_MODAL);
  });
}

if (scene) {
  scene.addEventListener("dragstart", (event) => {
    if (isInteractionLocked()) {
      event.preventDefault();
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (INVENTORY_DRAGGABLE_IDS.has(target.id)) return;
    event.preventDefault();
  });

  scene.addEventListener("dragover", (event) => {
    if (isInteractionLocked()) return;
    if (!draggedInventoryItem) return;
    event.preventDefault();
    moveDragProxy(event.clientX, event.clientY);
  });

  scene.addEventListener("drop", (event) => {
    if (isInteractionLocked()) return;
    if (!draggedInventoryItem) return;
    event.preventDefault();
    removeDragProxy();
    const droppedItem = draggedInventoryItem;
    draggedInventoryItem = null;

    triggerInventoryBuzz();
  });
}

if (speechNextBtn) {
  speechNextBtn.addEventListener("click", () => {
    if (isDayTransitionRunning) return;
    if (isIntroSequenceActive) {
      advanceIntroDialogueSequence();
      return;
    }
    if (advanceScriptedDialogueSequence()) {
      return;
    }
    advanceActiveDialogue();
  });
}

if (evelyn) {
  evelyn.addEventListener("transitionend", (event) => {
    if (event.propertyName !== "left") return;
    stopEvelynWalkAnimation();
    if (pendingSceneChangeAction) {
      triggerPendingSceneChange();
      return;
    }
    if (pendingSpeechForJane && isEvelynBeside(jane)) {
      faceEvelynToward(jane);
      faceJaneTowardEvelyn();
      startJaneInteractionDialogue();
      pendingSpeechForJane = false;
      pendingSpeechForCamus = false;
      pendingSpeechForDarren = false;
      pendingSpeechForHelena = false;
    } else if (
      pendingSpeechForCamus
      && camus
      && isEvelynBeside(camus)
    ) {
      faceEvelynToward(camus);
      faceCamusTowardEvelyn();
      startCamusInteractionDialogue();
      pendingSpeechForCamus = false;
      pendingSpeechForJane = false;
      pendingSpeechForDarren = false;
      pendingSpeechForHelena = false;
    } else if (
      pendingSpeechForDarren
      && darren
      && isEvelynBeside(darren)
    ) {
      faceEvelynToward(darren);
      startDarrenInteractionDialogue();
      pendingSpeechForDarren = false;
      pendingSpeechForJane = false;
      pendingSpeechForCamus = false;
      pendingSpeechForHelena = false;
    } else if (
      pendingSpeechForHelena
      && helena
      && isEvelynBeside(helena)
    ) {
      faceEvelynToward(helena);
      startHelenaDialogue();
      pendingSpeechForHelena = false;
      pendingSpeechForJane = false;
      pendingSpeechForCamus = false;
      pendingSpeechForDarren = false;
    }
  });
}

if (evelyn) {
  evelyn.addEventListener("transitioncancel", (event) => {
    if (event.propertyName !== "left") return;
    stopEvelynWalkAnimation();
  });
}

if (itemModalClose) {
  itemModalClose.addEventListener("click", () => {
    closeItemModal();
  });
}

if (itemModal) {
  itemModal.addEventListener("click", (event) => {
    if (event.target === itemModal) {
      closeItemModal();
    }
  });
}

if (itemModalContent) {
  itemModalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

if (registroIconBtn) {
  registroIconBtn.addEventListener("click", () => {
    if (isDayTransitionRunning) return;
    if (isRegistroModalOpen()) {
      closeRegistroCharacterModal();
      closeRegistroModal();
      return;
    }
    openRegistroModal();
  });
}

if (registroCloseBtn) {
  registroCloseBtn.addEventListener("click", () => {
    closeRegistroCharacterModal();
    closeRegistroModal();
  });
}

if (registroTabPersonaje) {
  registroTabPersonaje.addEventListener("click", () => {
    setActiveRegistroTab("personaje");
  });
}

if (registroTabTutorial) {
  registroTabTutorial.addEventListener("click", () => {
    setActiveRegistroTab("tutorial");
  });
}

if (registroTutorialGestionToggle) {
  registroTutorialGestionToggle.addEventListener("click", () => {
    if (tutorialGestionDiariaLines.length === 0) return;
    isGestionDiariaExpanded = !isGestionDiariaExpanded;
    renderRegistroTutorialPanel();
  });
}

if (registroCharJane) {
  registroCharJane.addEventListener("click", () => {
    openRegistroCharacterModal("jane");
  });
}

if (registroCharCamus) {
  registroCharCamus.addEventListener("click", () => {
    openRegistroCharacterModal("camus");
  });
}

if (registroCharDarren) {
  registroCharDarren.addEventListener("click", () => {
    openRegistroCharacterModal("darren");
  });
}

if (registroCharHelena) {
  registroCharHelena.addEventListener("click", () => {
    openRegistroCharacterModal("helena");
  });
}

if (registroModal) {
  registroModal.addEventListener("click", (event) => {
    if (event.target === registroModal) {
      closeRegistroCharacterModal();
      closeRegistroModal();
    }
  });
}

if (registroCharacterModal) {
  registroCharacterModal.addEventListener("click", (event) => {
    if (event.target === registroCharacterModal) {
      closeRegistroCharacterModal();
    }
  });
}

if (endDayIcon) {
  endDayIcon.addEventListener("click", () => {
    if (isDayTransitionRunning) return;
    if (!isEndDayEnabled) return;
    openDayEndModal();
  });
}

if (dayEndNoBtn) {
  dayEndNoBtn.addEventListener("click", () => {
    closeDayEndModal();
  });
}

if (dayEndYesBtn) {
  dayEndYesBtn.addEventListener("click", () => {
    if (isDayTransitionRunning) return;
    void advanceToNextDay();
  });
}

if (dayEndModal) {
  dayEndModal.addEventListener("click", (event) => {
    if (event.target === dayEndModal) {
      closeDayEndModal();
    }
  });
}

if (daySummaryCloseBtn) {
  daySummaryCloseBtn.addEventListener("click", () => {
    requestCloseDaySummaryModal();
  });
}

if (daySummaryModal) {
  daySummaryModal.addEventListener("click", (event) => {
    if (event.target === daySummaryModal) {
      requestCloseDaySummaryModal();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (isDayTransitionRunning && !(daySummaryModal && daySummaryModal.classList.contains("open"))) return;
  if (event.key === "Escape") {
    if (isRegistroCharacterModalOpen()) {
      closeRegistroCharacterModal();
      return;
    }
    if (isRegistroModalOpen()) {
      closeRegistroModal();
      return;
    }
    if (helenaOptionsModal && helenaOptionsModal.classList.contains("open")) {
      closeHelenaOptionsModal();
      return;
    }
    if (daySummaryModal && daySummaryModal.classList.contains("open")) {
      requestCloseDaySummaryModal();
      return;
    }
    if (dayEndModal && dayEndModal.classList.contains("open")) {
      closeDayEndModal();
      return;
    }
    closeItemModal();
    return;
  }
  if (event.key === "Enter") {
    if (isRegistroCharacterModalOpen()) return;
    if (isRegistroModalOpen()) return;
    if (helenaOptionsModal && helenaOptionsModal.classList.contains("open")) return;
    if (daySummaryModal && daySummaryModal.classList.contains("open")) return;
    if (dayEndModal && dayEndModal.classList.contains("open")) return;
    if (itemModal && itemModal.classList.contains("open")) return;
    if (!speech || speech.style.display === "none" || !activeDialogue) return;
    if (!speechNextBtn || speechNextBtn.style.display === "none") return;
    event.preventDefault();
    if (isIntroSequenceActive) {
      advanceIntroDialogueSequence();
      return;
    }
    if (advanceScriptedDialogueSequence()) {
      return;
    }
    advanceActiveDialogue();
  }
});

window.addEventListener("pointerdown", (event) => {
  if (isDayTransitionRunning) return;
  if (registroCharacterModal && registroCharacterModal.classList.contains("open") && registroCharacterModal.contains(event.target)) return;
  if (registroModal && registroModal.classList.contains("open") && registroModal.contains(event.target)) return;
  if (daySummaryModal && daySummaryModal.classList.contains("open") && daySummaryModal.contains(event.target)) return;
  if (dayEndModal && dayEndModal.classList.contains("open") && dayEndModal.contains(event.target)) return;
  if (isIntroSequenceActive) return;
  if (speech.style.display === "none") return;
  if (itemModal && itemModal.classList.contains("open") && itemModal.contains(event.target)) return;
  if (speech.contains(event.target)) return;
  closeSpeech();
});

window.addEventListener("resize", () => {
  layoutScene();
  if (speechAnchor && speech.style.display !== "none") {
    positionSpeechAt(speechAnchor);
  }
});
if (scene && sceneViewport) {
  setEndDayEnabled(hasUnlockedEndDayByDarrenDays);
  renderRegistroEntries();
  renderRegistroIconState();
  setActiveRegistroTab("personaje");
  renderRegistroTutorialPanel();
  renderDayBanner();
  setALIMENTOS(ALIMENTOS);
  setDINERO(DINERO);
  setPUEBLO(PUEBLO);
  window.setALIMENTOS = setALIMENTOS;
  window.addALIMENTOS = addALIMENTOS;
  window.setDINERO = setDINERO;
  window.addDINERO = addDINERO;
  window.setPUEBLO = setPUEBLO;
  window.addPUEBLO = addPUEBLO;
  applyAnilloInventoryStyle();
  preloadEvelynWalkFrames();
  stopEvelynWalkAnimation();
  layoutScene();
  goToFondo1();
  startIntroDialogueSequence();
}
