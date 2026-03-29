const scene = document.getElementById("scene");
const sceneViewport = document.getElementById("scene-viewport");
const background = document.getElementById("background");
const evelyn = document.getElementById("evelyn");
const jane = document.getElementById("jane");
const helena = document.getElementById("helena");
const camus = document.getElementById("camus");
const darren = document.getElementById("darren");
const mercenario = document.getElementById("mercenario");
const rey = document.getElementById("rey");
const princesa = document.getElementById("princesa");
const soldado = document.getElementById("soldado");
const eliot = document.getElementById("eliot");
const herrero = document.getElementById("herrero");
const amanda = document.getElementById("amanda");
const rita = document.getElementById("rita");
const anilloWorld = document.getElementById("anillo-world");
const anilloItem = document.getElementById("anillo-item");
const nextArrow = document.getElementById("next-arrow");
const prevArrow = document.getElementById("prev-arrow");
const leftSideArrow = document.getElementById("left-side-arrow");
const topRightArrow = document.getElementById("top-right-arrow");
const speech = document.getElementById("speech");
const speechText = document.getElementById("speech-text");
const speechOptions = document.getElementById("speech-options");
const speechNextBtn = document.getElementById("speech-next-btn");
const ringSlotHighlight = document.getElementById("ring-slot-highlight");
const alimentosDisplay = document.getElementById("alimentos-display");
const dineroDisplay = document.getElementById("dinero-display");
const puebloDisplay = document.getElementById("pueblo-display");
const registroIconBtn = document.getElementById("iconoregistro");
const ejercitoIconBtn = document.getElementById("iconoejercito");
const mapaIconBtn = document.getElementById("iconomapa");
const fullscreenBtn = document.getElementById("iconopantallacompleta");
const endDayIcon = document.getElementById("icono-fin-dia");
const dayBanner = document.getElementById("day-banner");
const dayBannerNumber = document.getElementById("day-banner-number");
const devDay13Btn = document.getElementById("dev-day13-btn");
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
const registroTutorialGestionList = document.getElementById("registro-tutorial-gestion-list");
const registroTutorialMesaBatallaToggle = document.getElementById("registro-tutorial-mesabatalla-toggle");
const registroTutorialMesaBatallaContent = document.getElementById("registro-tutorial-mesabatalla-content");
const registroTutorialMesaBatallaList = document.getElementById("registro-tutorial-mesabatalla-list");
const registroTutorialEmpty = document.getElementById("registro-tutorial-empty");
const registroCharJane = document.getElementById("registro-char-jane");
const registroCharCamus = document.getElementById("registro-char-camus");
const registroCharDarren = document.getElementById("registro-char-darren");
const registroCharHelena = document.getElementById("registro-char-helena");
const registroCharEliot = document.getElementById("registro-char-eliot");
const registroCharHerrero = document.getElementById("registro-char-herrero");
const registroCharAmanda = document.getElementById("registro-char-amanda");
const registroCharRita = document.getElementById("registro-char-rita");
const registroCloseBtn = document.getElementById("registro-close");
const registroCharacterModal = document.getElementById("registro-character-modal");
const registroCharacterName = document.getElementById("registro-character-name");
const registroCharacterImage = document.getElementById("registro-character-image");
const registroCharacterText = document.getElementById("registro-character-text");
const armyModal = document.getElementById("army-modal");
const armyEliotCard = document.getElementById("army-eliot-card");
const mapModal = document.getElementById("map-modal");
const mapCloseBtn = document.getElementById("map-close");
const mapTimerDisplay = document.getElementById("map-timer");
const mapMissionsLayer = document.getElementById("map-missions-layer");
const mapMissionSpawnZone = document.getElementById("map-mission-spawn-zone");
const mapRoster = document.getElementById("map-roster");
const mapHelenaGuide = document.getElementById("map-helena-guide");
const mapGuideSpeech = document.getElementById("map-guide-speech");
const mapGuideSpeechText = document.getElementById("map-guide-speech-text");
const mapGuideSpeechNextBtn = document.getElementById("map-guide-speech-next");
const mapAbandonConfirm = document.getElementById("map-abandon-confirm");
const mapAbandonYesBtn = document.getElementById("map-abandon-yes");
const mapAbandonNoBtn = document.getElementById("map-abandon-no");
const mapEnterConfirm = document.getElementById("map-enter-confirm");
const mapEnterYesBtn = document.getElementById("map-enter-yes");
const mapEnterNoBtn = document.getElementById("map-enter-no");
const missionModal = document.getElementById("mission-modal");
const missionTitle = document.getElementById("mission-title");
const missionText = document.getElementById("mission-text");
const missionAssignOptions = document.getElementById("mission-assign-options");
const missionConfirmBtn = document.getElementById("mission-confirm");
const missionCloseBtn = document.getElementById("mission-close");
const rouletteModal = document.getElementById("roulette-modal");
const rouletteWheel = document.getElementById("roulette-wheel");
const rouletteResult = document.getElementById("roulette-result");
const rouletteSpinBtn = document.getElementById("roulette-spin");
const mapFinalReportModal = document.getElementById("map-final-report-modal");
const mapFinalReportSubtitle = document.getElementById("map-final-report-subtitle");
const mapFinalReportList = document.getElementById("map-final-report-list");
const mapFinalReportCloseBtn = document.getElementById("map-final-report-close");
const helenaOptionsModal = document.getElementById("helena-options-modal");
const helenaOptionCards = [...document.querySelectorAll(".helena-option-card")];
const helenaOptionsConfirmBtn = document.getElementById("helena-options-confirm");
const helenaOptionsEmptyConfirm = document.getElementById("helena-options-empty-confirm");
const helenaEmptyYesBtn = document.getElementById("helena-empty-yes");
const helenaEmptyNoBtn = document.getElementById("helena-empty-no");
const eliotOptionsModal = document.getElementById("eliot-options-modal");
const eliotHireBtn = document.getElementById("eliot-hire-btn");
const eliotIgnoreBtn = document.getElementById("eliot-ignore-btn");
const mercenaryModal = document.getElementById("mercenary-modal");
const mercenaryPayBtn = document.getElementById("mercenary-pay-btn");
const mercenaryResistBtn = document.getElementById("mercenary-resist-btn");
const mercenaryEliotBtn = document.getElementById("mercenary-eliot-btn");
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
const ELIOT_HIRE_COST = 5;
const MERCENARY_EXTORTION_COST = 5;
const MERCENARY_ELIOT_SUPPORT_LEFT = "56%";
const FONDO1_EVELYN_EXTRA_BOTTOM_PX = 30;
const ALIMENTOS_MAX = 99;
const DINERO_MAX = 99;
const PUEBLO_MAX = 100;
const DEFAULT_SPEECH_NEXT_LABEL = "Continuar";
const TRAVEL_SPEECH_NEXT_LABEL = "Viajar";
const ENTER_SPEECH_NEXT_LABEL = "Entrar";
const MAP_MAX_VISIBLE_MISSIONS = 10;
const MAP_PARTICIPATION_TARGET_FOR_REPORT = 5;
const MAP_MISSION_ZONE = Object.freeze({
  topLeft: { x: 26.99, y: 14.96 },
  topRight: { x: 87.65, y: 21.34 },
  bottomRight: { x: 82.01, y: 75.04 },
  bottomLeft: { x: 21.35, y: 68.66 },
  edgePaddingNorm: 0.06,
  minDistancePct: 11
});
const HELENA_DAY2_OPTION_COSTS = {
  "day2-bandits": { alimentos: 0, dinero: 4, pueblo: 0 },
  "day2-party": { alimentos: 5, dinero: 5, pueblo: 0 }
};
if (!window.ARGO_DIALOGUES) {
  throw new Error("Falta dialogues.js: no se pudo cargar window.ARGO_DIALOGUES");
}
if (!window.ARGO_MISIONES) {
  throw new Error("Falta misiones.js: no se pudo cargar window.ARGO_MISIONES");
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
  ELIOT_INTRO_DIALOGUE,
  ELIOT_ALREADY_HIRED_DIALOGUE,
  ELIOT_POST_MERCENARY_DIALOGUE,
  ELIOT_HIRE_CONFIRM_DIALOGUE,
  ELIOT_IGNORE_DIALOGUE,
  ELIOT_RETRY_DIALOGUE,
  MERCENARY_DAY10_DIALOGUE_SEQUENCE,
  MERCENARY_PAY_DIALOGUE,
  MERCENARY_ELIOT_DIALOGUE,
  MERCENARY_RETALIATION_NOTE,
  DAY12_ROYAL_INTRO_SEQUENCE,
  DAY12_ROYAL_PRIVATE_SEQUENCE,
  DAY12_ROYAL_OUTRO_SEQUENCE,
  HELENA_DAY12_REST_DIALOGUE,
  HERRERO_INTRO_SEQUENCE,
  HERRERO_REPEAT_DIALOGUE,
  AMANDA_INTRO_SEQUENCE,
  AMANDA_REPEAT_DIALOGUE,
  AMANDA_DAY14_BATTLE_SEQUENCE,
  RITA_INTRO_SEQUENCE,
  RITA_REPEAT_SEQUENCE,
  DAY13_HELENA_MAP_SEQUENCE,
  MAP_BATTLE_FIRST_ENTRY_TUTORIAL_SEQUENCE,
  INTRO_DIALOGUE_SEQUENCE
} = window.ARGO_DIALOGUES;
const { BATTLE_MISSIONS } = window.ARGO_MISIONES;
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
const ENTRY_FONDO5_FROM_FONDO1 = "70%";
const ENTRY_FONDO5_FROM_TABERNA = "70%";
const FONDO2_EVELYN_EXTRA_BOTTOM_PX = 46;
const FONDO0_EVELYN_EXTRA_BOTTOM_PX = 28;
const FONDO3_ENTRY_EXTRA_BOTTOM_PX = 36;
const FONDO4_ENTRY_EXTRA_BOTTOM_PX = 40;
const FONDO5_ENTRY_EXTRA_BOTTOM_PX = 42;
const TABERNA_EVELYN_EXTRA_BOTTOM_PX = 92;
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
let pendingSpeechForEliot = false;
let pendingSpeechForHerrero = false;
let pendingSpeechForAmanda = false;
let pendingSpeechForRita = false;
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
let hasMetEliot = false;
let hasHiredEliot = false;
let hasStartedMercenaryDay10Encounter = false;
let hasMercenaryBeenDrivenOff = false;
let hasAppliedMercenaryRetaliation = false;
let isDay10MercenaryEventRunning = false;
let hasEliotHelpedAgainstMercenary = false;
let hideEliotInFondo5Today = false;
let hasEliotLeftTownForever = false;
let hasMetHerrero = false;
let hasMetAmanda = false;
let hasMetRita = false;
let hasUnlockedAmandaForBattle = false;
let hasTriggeredDay12RoyalEvent = false;
let hasCompletedDay12RoyalEvent = false;
let isDay12RoyalEventRunning = false;
let pendingTiendaMagiaJaneHello = false;
let selectedHelenaOptionIds = new Set();
let spawnMercenaryOnDay10 = false;
let pendingDailyAlimentosDelta = 0;
let pendingDailyDineroDelta = 0;
let pendingDailyPuebloDelta = 0;
let pendingDaySummaryNotes = [];
let isEndDayEnabled = false;
let isEndDayHighlighted = false;
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
let hasRegisteredEliot = false;
let hasRegisteredHerrero = false;
let hasRegisteredAmanda = false;
let hasRegisteredRita = false;
let isRegistroHighlighted = false;
let activeRegistroTab = "personaje";
let hasLoggedDarrenTutorial = false;
let hasAskedDarrenDaysQuestion = false;
let hasAskedDarrenHelpQuestion = false;
let hasUnlockedEndDayByDarrenDays = false;
let hasUnlockedArmyIcon = false;
let isArmyIconHighlighted = false;
let hasUnlockedMapIcon = false;
let isMapIconHighlighted = false;
let hasTriggeredDay13MapIntro = false;
let hasCompletedDay13MapIntro = false;
let isDay13MapIntroRunning = false;
let hasShownMapBattleFirstEntryTutorial = false;
let isMapBattleFirstEntryTutorialRunning = false;
let hasLoggedMapBattleTutorial = false;
let day13MissionStateByDay = new Map();
let completedBattleMissionIds = new Set();
let activeMapState = null;
let mapTimerIntervalId = null;
let activeMissionForDialog = null;
let activeMissionForRoulette = null;
let selectedMissionAssigneeIds = [];
let tutorialGestionDiariaLines = [];
let tutorialMesaBatallaLines = [];
let isGestionDiariaExpanded = false;
let isMesaBatallaExpanded = false;
let pendingAnilloMissionPopup = false;
let isPseudoFullscreenMobile = false;
const REGISTRO_CHARACTER_DATA = {
  jane: {
    name: "Jane",
    imageSrc: asset("personajes/Retratos/jane%20retrato.PNG"),
    imageAlt: "Jane",
    text: "PRUEBA"
  },
  camus: {
    name: "Camus",
    imageSrc: asset("personajes/Retratos/camus%20retrato.png"),
    imageAlt: "Camus",
    text: "PRUEBA"
  },
  darren: {
    name: "Darren",
    imageSrc: asset("personajes/Retratos/darren.png"),
    imageAlt: "Darren",
    text: "PRUEBA"
  },
  helena: {
    name: "Helena",
    imageSrc: asset("personajes/Retratos/helena%20retrato.png"),
    imageAlt: "Helena",
    text: "PRUEBA"
  },
  eliot: {
    name: "Eliot",
    imageSrc: asset("personajes/Retratos/eliot%20retrato.png"),
    imageAlt: "Eliot",
    text: "Arquero mercenario de paso por Orbis."
  },
  herrero: {
    name: "Simón",
    imageSrc: asset("personajes/Retratos/herrero%20retrato.png"),
    imageAlt: "Simón",
    text: "Herrero del pueblo. Dice que pronto tendrá material del bueno."
  },
  amanda: {
    name: "Amanda",
    imageSrc: asset("personajes/Retratos/amanda%20retrato.png"),
    imageAlt: "Amanda",
    text: "Vecina de Orbis. Recolecta setas con su hija Rita."
  },
  rita: {
    name: "Rita",
    imageSrc: asset("personajes/Retratos/rita%20retrato.png"),
    imageAlt: "Rita",
    text: "Rita Dinamita. Energía infinita y ganas de jugar."
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
  "in-fondo5",
  "in-taberna",
  "in-tiendamagia"
];

function shouldUseMobileTabletLayout() {
  const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const hasTouch = typeof navigator !== "undefined" && Number(navigator.maxTouchPoints) > 0;
  return hasCoarsePointer || hasTouch;
}

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
  arrowEl.classList.remove(
    "arrow-up-center",
    "arrow-up-fondo2-center",
    "arrow-down-center",
    "arrow-up-top-center",
    "arrow-up-top-left"
  );
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

function isArmyModalOpen() {
  return Boolean(armyModal && armyModal.classList.contains("open"));
}

function isEliotOptionsModalOpen() {
  return Boolean(eliotOptionsModal && eliotOptionsModal.classList.contains("open"));
}

function isMercenaryModalOpen() {
  return Boolean(mercenaryModal && mercenaryModal.classList.contains("open"));
}

function clearPendingSpeechFlags() {
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForHelena = false;
  pendingSpeechForEliot = false;
  pendingSpeechForHerrero = false;
  pendingSpeechForAmanda = false;
  pendingSpeechForRita = false;
}

function renderRegistroIconState() {
  if (!registroIconBtn) return;
  registroIconBtn.classList.toggle("iconoregistro-highlight", isRegistroHighlighted);
}

function renderEjercitoIconState() {
  if (!ejercitoIconBtn) return;
  ejercitoIconBtn.classList.toggle("enabled", hasUnlockedArmyIcon);
  ejercitoIconBtn.classList.toggle("iconoejercito-highlight", isArmyIconHighlighted);
}

function renderMapaIconState() {
  if (!mapaIconBtn) return;
  mapaIconBtn.classList.toggle("enabled", hasUnlockedMapIcon);
  mapaIconBtn.classList.toggle("iconomapa-highlight", isMapIconHighlighted);
}

function renderFullscreenButtonState() {
  if (!fullscreenBtn) return;
  const docAny = document;
  const webkitFullscreenElement = docAny.webkitFullscreenElement || null;
  const isFullscreen = Boolean(document.fullscreenElement || webkitFullscreenElement || isPseudoFullscreenMobile);
  fullscreenBtn.classList.toggle("fullscreen-active", isFullscreen);
  fullscreenBtn.setAttribute("aria-label", isFullscreen ? "Salir de pantalla completa" : "Activar pantalla completa");
  fullscreenBtn.title = isFullscreen ? "Salir de pantalla completa" : "Pantalla completa";
}

function setPseudoFullscreenMobile(enabled) {
  isPseudoFullscreenMobile = Boolean(enabled);
  document.documentElement.classList.toggle("pseudo-fullscreen-mobile", isPseudoFullscreenMobile);
  document.body.classList.toggle("pseudo-fullscreen-mobile", isPseudoFullscreenMobile);
  if (isPseudoFullscreenMobile) {
    window.scrollTo(0, 1);
  }
}

async function toggleFullscreenMode() {
  const root = document.documentElement;
  const docAny = document;
  const rootAny = root;
  const isNativeFullscreen = Boolean(document.fullscreenElement || docAny.webkitFullscreenElement);
  try {
    if (isNativeFullscreen) {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (docAny.webkitExitFullscreen) {
        docAny.webkitExitFullscreen();
      }
      return;
    }
    if (isPseudoFullscreenMobile) {
      setPseudoFullscreenMobile(false);
      return;
    }
    if (root.requestFullscreen) {
      await root.requestFullscreen({ navigationUI: "hide" });
      return;
    }
    if (rootAny.webkitRequestFullscreen) {
      rootAny.webkitRequestFullscreen();
      return;
    }
    if (shouldUseMobileTabletLayout()) {
      setPseudoFullscreenMobile(true);
      showRewardToast("Modo pantalla completa activado.");
      return;
    }
    showRewardToast("Tu navegador no permite pantalla completa aquí.");
  } catch (error) {
    if (shouldUseMobileTabletLayout()) {
      setPseudoFullscreenMobile(!isPseudoFullscreenMobile);
      showRewardToast(isPseudoFullscreenMobile ? "Modo pantalla completa activado." : "Modo pantalla completa desactivado.");
    } else {
      console.error("No se pudo alternar pantalla completa.", error);
      showRewardToast("No se pudo activar pantalla completa.");
    }
  } finally {
    renderFullscreenButtonState();
  }
}

function renderArmyModalContent() {
  if (armyEliotCard) {
    armyEliotCard.style.display = hasHiredEliot ? "flex" : "none";
  }
}

function isMapModalOpen() {
  return Boolean(mapModal && mapModal.classList.contains("open"));
}

function unlockMapIcon() {
  hasUnlockedMapIcon = true;
  isMapIconHighlighted = true;
  renderMapaIconState();
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
  if (registroCharEliot) registroCharEliot.classList.toggle("unlocked", hasRegisteredEliot);
  if (registroCharHerrero) registroCharHerrero.classList.toggle("unlocked", hasRegisteredHerrero);
  if (registroCharAmanda) registroCharAmanda.classList.toggle("unlocked", hasRegisteredAmanda);
  if (registroCharRita) registroCharRita.classList.toggle("unlocked", hasRegisteredRita);
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
  if (
    !registroTutorialGestionToggle
    || !registroTutorialGestionContent
    || !registroTutorialGestionList
    || !registroTutorialMesaBatallaToggle
    || !registroTutorialMesaBatallaContent
    || !registroTutorialMesaBatallaList
    || !registroTutorialEmpty
  ) return;
  const hasGestionEntries = tutorialGestionDiariaLines.length > 0;
  const hasMesaBatallaEntries = tutorialMesaBatallaLines.length > 0;
  const hasAnyEntries = hasGestionEntries || hasMesaBatallaEntries;
  registroTutorialGestionToggle.style.display = hasGestionEntries ? "block" : "none";
  registroTutorialGestionToggle.setAttribute("aria-expanded", isGestionDiariaExpanded ? "true" : "false");
  registroTutorialGestionContent.style.display = hasGestionEntries && isGestionDiariaExpanded ? "block" : "none";
  registroTutorialGestionList.style.display = hasGestionEntries && isGestionDiariaExpanded ? "block" : "none";
  registroTutorialMesaBatallaToggle.style.display = hasMesaBatallaEntries ? "block" : "none";
  registroTutorialMesaBatallaToggle.setAttribute("aria-expanded", isMesaBatallaExpanded ? "true" : "false");
  registroTutorialMesaBatallaContent.style.display = hasMesaBatallaEntries && isMesaBatallaExpanded ? "block" : "none";
  registroTutorialMesaBatallaList.style.display = hasMesaBatallaEntries && isMesaBatallaExpanded ? "block" : "none";
  registroTutorialEmpty.style.display = hasAnyEntries ? "none" : "block";
  registroTutorialGestionList.innerHTML = "";
  for (const line of tutorialGestionDiariaLines) {
    const p = document.createElement("p");
    p.textContent = line;
    registroTutorialGestionList.appendChild(p);
  }
  registroTutorialMesaBatallaList.innerHTML = "";
  for (const line of tutorialMesaBatallaLines) {
    const p = document.createElement("p");
    p.textContent = line;
    registroTutorialMesaBatallaList.appendChild(p);
  }
}

function appendGestionDiariaLines(lines) {
  if (!Array.isArray(lines) || lines.length === 0) return;
  tutorialGestionDiariaLines.push(...lines);
  renderRegistroTutorialPanel();
}

function appendMesaBatallaLines(lines) {
  if (!Array.isArray(lines) || lines.length === 0) return;
  tutorialMesaBatallaLines.push(...lines);
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

function logMapBattleTutorialIfNeeded() {
  if (hasLoggedMapBattleTutorial) return;
  const lines = MAP_BATTLE_FIRST_ENTRY_TUTORIAL_SEQUENCE.map((step) => {
    return `${getSpeakerLabelForTutorial(step.speaker)}: ${step.line}`;
  });
  appendMesaBatallaLines(lines);
  hasLoggedMapBattleTutorial = true;
  isRegistroHighlighted = true;
  renderRegistroIconState();
  window.setTimeout(() => {
    showRewardToast("Tutorial de mesa de batalla añadido al registro.");
  }, 350);
}

function unlockEndDayByDarrenDaysQuestion() {
  if (hasUnlockedEndDayByDarrenDays) return;
  hasUnlockedEndDayByDarrenDays = true;
  isEndDayHighlighted = true;
  setEndDayEnabled(true);
}

function unlockArmyIconWithEliot() {
  if (!hasUnlockedArmyIcon) {
    hasUnlockedArmyIcon = true;
  }
  isArmyIconHighlighted = true;
  renderEjercitoIconState();
  renderArmyModalContent();
}

function openRegistroModal() {
  if (!registroModal) return;
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  closeArmyModal();
  closeMapModal();
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
    || (characterId === "eliot" && hasRegisteredEliot)
    || (characterId === "herrero" && hasRegisteredHerrero)
    || (characterId === "amanda" && hasRegisteredAmanda)
    || (characterId === "rita" && hasRegisteredRita)
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

function openArmyModal() {
  if (!armyModal || !hasUnlockedArmyIcon) return;
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  closeMapModal();
  closeItemModal();
  renderArmyModalContent();
  isArmyIconHighlighted = false;
  renderEjercitoIconState();
  armyModal.classList.add("open");
  armyModal.setAttribute("aria-hidden", "false");
}

function closeArmyModal() {
  if (!armyModal) return;
  armyModal.classList.remove("open");
  armyModal.setAttribute("aria-hidden", "true");
}

function closeMissionModal() {
  if (!missionModal) return;
  missionModal.classList.remove("open");
  missionModal.setAttribute("aria-hidden", "true");
  activeMissionForDialog = null;
  selectedMissionAssigneeIds = [];
  if (missionConfirmBtn) missionConfirmBtn.disabled = true;
  renderMapRoster();
}

function closeRouletteModal() {
  if (!rouletteModal) return;
  rouletteModal.classList.remove("open");
  rouletteModal.setAttribute("aria-hidden", "true");
  activeMissionForRoulette = null;
}

function closeMapModal() {
  closeMissionModal();
  closeRouletteModal();
  isMapBattleFirstEntryTutorialRunning = false;
  if (mapTimerIntervalId !== null) {
    window.clearInterval(mapTimerIntervalId);
    mapTimerIntervalId = null;
  }
  if (!mapModal) return;
  if (mapAbandonConfirm) {
    mapAbandonConfirm.classList.remove("open");
    mapAbandonConfirm.setAttribute("aria-hidden", "true");
  }
  if (mapHelenaGuide) {
    mapHelenaGuide.classList.remove("visible");
    mapHelenaGuide.setAttribute("aria-hidden", "true");
  }
  if (mapGuideSpeechText) {
    mapGuideSpeechText.textContent = "";
  }
  if (mapGuideSpeechNextBtn) {
    mapGuideSpeechNextBtn.onclick = null;
  }
  setMapGuideSpeechVisible(false);
  mapModal.classList.remove("open");
  mapModal.setAttribute("aria-hidden", "true");
  if (hasShownMapBattleFirstEntryTutorial) {
    logMapBattleTutorialIfNeeded();
  }
  if (pendingAnilloMissionPopup) {
    pendingAnilloMissionPopup = false;
    openItemModal(ANILLO_OBTAINED_MODAL);
  }
}

function openMapFinalReport(reasonLabel, successCount, reportLines) {
  if (!mapFinalReportModal || !mapFinalReportList || !mapFinalReportSubtitle) return;
  mapFinalReportSubtitle.textContent = reasonLabel;
  mapFinalReportList.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = `Batallas completadas con éxito: ${successCount}`;
  mapFinalReportList.appendChild(p);
  const safeLines = Array.isArray(reportLines) ? reportLines : [];
  for (const line of safeLines) {
    const detail = document.createElement("p");
    detail.textContent = line;
    mapFinalReportList.appendChild(detail);
  }
  mapFinalReportModal.classList.add("open");
  mapFinalReportModal.setAttribute("aria-hidden", "false");
}

function closeMapFinalReport() {
  if (!mapFinalReportModal) return;
  mapFinalReportModal.classList.remove("open");
  mapFinalReportModal.setAttribute("aria-hidden", "true");
}

function openMapEnterConfirm() {
  if (!mapEnterConfirm) return;
  mapEnterConfirm.classList.add("open");
  mapEnterConfirm.setAttribute("aria-hidden", "false");
}

function closeMapEnterConfirm() {
  if (!mapEnterConfirm) return;
  mapEnterConfirm.classList.remove("open");
  mapEnterConfirm.setAttribute("aria-hidden", "true");
}

function setMapHelenaGuideVisible(visible) {
  if (!mapHelenaGuide) return;
  mapHelenaGuide.classList.toggle("visible", visible);
  mapHelenaGuide.setAttribute("aria-hidden", visible ? "false" : "true");
}

function setMapGuideSpeechVisible(visible) {
  if (!mapGuideSpeech) return;
  mapGuideSpeech.classList.toggle("visible", visible);
  mapGuideSpeech.setAttribute("aria-hidden", visible ? "false" : "true");
}

function resetCurrentDayMapProgress() {
  day13MissionStateByDay.delete(currentDay);
  activeMapState = null;
  pendingAnilloMissionPopup = false;
  selectedMissionAssigneeIds = [];
  closeMapFinalReport();
}

function getMapRosterForCurrentDay() {
  const roster = [
    { id: "camus", name: "Camus", portrait: asset("personajes/Retratos/camus%20retrato.png") },
    { id: "jane", name: "Jane", portrait: asset("personajes/Retratos/jane%20retrato.PNG") },
    { id: "helena", name: "Helena", portrait: asset("personajes/Retratos/helena%20retrato.png") }
  ];
  if (hasUnlockedAmandaForBattle) {
    roster.push({ id: "amanda", name: "Amanda", portrait: asset("personajes/Retratos/amanda%20retrato.png") });
  }
  if (hasHiredEliot) {
    roster.push({ id: "eliot", name: "Eliot", portrait: asset("personajes/Retratos/eliot%20retrato.png") });
  }
  return roster;
}

function getAvailableBattleMissionTemplates(excludedTemplateIds = null) {
  if (!Array.isArray(BATTLE_MISSIONS)) return [];
  const excluded = excludedTemplateIds instanceof Set ? excludedTemplateIds : null;
  return BATTLE_MISSIONS.filter((mission) => {
    return mission
      && mission.id
      && mission.title
      && !completedBattleMissionIds.has(mission.id)
      && (!excluded || !excluded.has(mission.id));
  });
}

function unlockAnilloFromMissionReward() {
  if (hasAnillo) return;
  hasAnillo = true;
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
  const firstSlot = inventorySlots[0];
  if (firstSlot) {
    firstSlot.appendChild(anilloItem);
  }
  applyAnilloInventoryStyle();
  anilloItem.style.display = "block";
  pendingAnilloMissionPopup = true;
}

function applyMissionSuccessRewards(mission) {
  if (!mission) return;
  const reward = mission.reward || {};
  if (reward.type === "food" && Number.isFinite(reward.amount)) {
    addALIMENTOS(reward.amount);
    return;
  }
  if (reward.type === "money" && Number.isFinite(reward.amount)) {
    addDINERO(reward.amount);
    return;
  }
  if (reward.type === "pueblo" && Number.isFinite(reward.amount)) {
    addPUEBLO(reward.amount);
    return;
  }
  if (reward.type === "ring") {
    unlockAnilloFromMissionReward();
  }
}

function renderMapMissionSpawnZone() {
  if (!mapMissionSpawnZone) return;
  mapMissionSpawnZone.style.left = "0";
  mapMissionSpawnZone.style.top = "0";
  mapMissionSpawnZone.style.width = "100%";
  mapMissionSpawnZone.style.height = "100%";
  const points = [
    `${MAP_MISSION_ZONE.topLeft.x}% ${MAP_MISSION_ZONE.topLeft.y}%`,
    `${MAP_MISSION_ZONE.topRight.x}% ${MAP_MISSION_ZONE.topRight.y}%`,
    `${MAP_MISSION_ZONE.bottomRight.x}% ${MAP_MISSION_ZONE.bottomRight.y}%`,
    `${MAP_MISSION_ZONE.bottomLeft.x}% ${MAP_MISSION_ZONE.bottomLeft.y}%`
  ].join(", ");
  mapMissionSpawnZone.style.clipPath = `polygon(${points})`;
  mapMissionSpawnZone.style.webkitClipPath = `polygon(${points})`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function samplePointInMissionZone() {
  const pad = MAP_MISSION_ZONE.edgePaddingNorm;
  const s = pad + Math.random() * (1 - 2 * pad);
  const t = pad + Math.random() * (1 - 2 * pad);

  const leftX = lerp(MAP_MISSION_ZONE.topLeft.x, MAP_MISSION_ZONE.bottomLeft.x, t);
  const leftY = lerp(MAP_MISSION_ZONE.topLeft.y, MAP_MISSION_ZONE.bottomLeft.y, t);
  const rightX = lerp(MAP_MISSION_ZONE.topRight.x, MAP_MISSION_ZONE.bottomRight.x, t);
  const rightY = lerp(MAP_MISSION_ZONE.topRight.y, MAP_MISSION_ZONE.bottomRight.y, t);

  return {
    x: lerp(leftX, rightX, s),
    y: lerp(leftY, rightY, s)
  };
}

function generateMissionPosition(existingPositions = []) {
  const minDistance = MAP_MISSION_ZONE.minDistancePct;
  let placed = false;
  let candidate = samplePointInMissionZone();

  for (let attempt = 0; attempt < 300; attempt += 1) {
    const point = samplePointInMissionZone();
    const hasEnoughDistance = existingPositions.every((existing) => {
      return Math.hypot(existing.x - point.x, existing.y - point.y) >= minDistance;
    });
    if (!hasEnoughDistance) continue;
    candidate = point;
    placed = true;
    break;
  }

  if (!placed) {
    let bestMinDistance = -1;
    for (let sample = 0; sample < 120; sample += 1) {
      const point = samplePointInMissionZone();
      const currentMinDistance = existingPositions.length === 0
        ? Number.POSITIVE_INFINITY
        : Math.min(...existingPositions.map((existing) => Math.hypot(existing.x - point.x, existing.y - point.y)));
      if (currentMinDistance > bestMinDistance) {
        bestMinDistance = currentMinDistance;
        candidate = point;
      }
    }
  }

  return {
    x: Math.round(candidate.x * 100) / 100,
    y: Math.round(candidate.y * 100) / 100
  };
}

function getActiveMapMissionCount(mapState) {
  if (!mapState || !Array.isArray(mapState.missions)) return 0;
  return mapState.missions.filter((mission) => mission.state !== "resolved").length;
}

function getRandomMapMissionSpawnDelayMs() {
  return Math.floor(1400 + Math.random() * 2200);
}

function spawnMapMissionIfNeeded(now = Date.now()) {
  if (!activeMapState || activeMapState.finished) return false;
  if (getActiveMapMissionCount(activeMapState) >= MAP_MAX_VISIBLE_MISSIONS) return false;
  if (now < (activeMapState.nextSpawnAt || 0)) return false;
  const templates = getAvailableBattleMissionTemplates(activeMapState.spawnedTemplateIds);
  if (templates.length === 0) return false;
  const template = templates[Math.floor(Math.random() * templates.length)];
  const existingPositions = activeMapState.missions
    .filter((mission) => mission.state !== "resolved")
    .map((mission) => ({ x: mission.x, y: mission.y }));
  const position = generateMissionPosition(existingPositions);
  const serial = activeMapState.missionSerial;
  activeMapState.missionSerial += 1;
  activeMapState.missions.push({
    id: `day${activeMapState.dayNumber}-${template.id}-${serial}`,
    templateId: template.id,
    title: template.title,
    text: template.text,
    indicatedCharacterIds: Array.isArray(template.indicatedCharacterIds) ? [...template.indicatedCharacterIds] : [],
    successNote: template.successNote || "",
    reward: template.reward || null,
    x: position.x,
    y: position.y,
    state: "idle",
    assignedCharacterIds: [],
    resolvesAt: 0
  });
  activeMapState.spawnedTemplateIds.add(template.id);
  activeMapState.nextSpawnAt = now + getRandomMapMissionSpawnDelayMs();
  return true;
}

function getOrCreateDay13MapState(dayNumber) {
  const existing = day13MissionStateByDay.get(dayNumber);
  if (existing) return existing;
  const mapState = {
    dayNumber,
    startedAt: Date.now(),
    durationMs: 3 * 60 * 1000,
    roster: getMapRosterForCurrentDay(),
    missions: [],
    busyCharacterIds: new Set(),
    resolvedCount: 0,
    participatedCount: 0,
    successCount: 0,
    reportLines: [],
    missionSerial: 1,
    spawnedTemplateIds: new Set(),
    nextSpawnAt: Date.now() + 700,
    finalReportShown: false,
    finished: false
  };
  day13MissionStateByDay.set(dayNumber, mapState);
  return mapState;
}

function getMapTimeRemainingMs() {
  if (!activeMapState) return 0;
  const elapsed = Date.now() - activeMapState.startedAt;
  return Math.max(0, activeMapState.durationMs - elapsed);
}

function formatMapTimer(ms) {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function isMapTimeExpired() {
  return getMapTimeRemainingMs() <= 0;
}

function updateMapTimerDisplay() {
  if (!mapTimerDisplay) return;
  mapTimerDisplay.textContent = formatMapTimer(getMapTimeRemainingMs());
}

function applyReadyMissionsIfNeeded() {
  if (!activeMapState) return;
  let hasChanged = false;
  const now = Date.now();
  for (const mission of activeMapState.missions) {
    if (mission.state === "assigned" && mission.resolvesAt <= now) {
      mission.state = "ready";
      hasChanged = true;
    }
  }
  return hasChanged;
}

function renderMapRoster() {
  if (!mapRoster || !activeMapState) return;
  mapRoster.innerHTML = "";
  for (const member of activeMapState.roster) {
    const card = document.createElement("div");
    card.className = "map-roster-item";
    const isBusy = activeMapState.busyCharacterIds.has(member.id);
    const isMissionSelectionActive = Boolean(activeMissionForDialog);
    if (isBusy) {
      card.classList.add("busy");
    }
    if (isMissionSelectionActive && !isBusy && !isMapTimeExpired()) {
      card.classList.add("selectable");
      card.addEventListener("click", () => {
        if (!activeMissionForDialog || !activeMapState) return;
        if (activeMapState.busyCharacterIds.has(member.id) || isMapTimeExpired()) return;
        const currentSelection = [...selectedMissionAssigneeIds];
        const existingIndex = currentSelection.indexOf(member.id);
        if (existingIndex >= 0) {
          currentSelection.splice(existingIndex, 1);
        } else {
          if (currentSelection.length >= 2) {
            showRewardToast("Máximo 2 personajes por misión.");
            return;
          }
          currentSelection.push(member.id);
        }
        selectedMissionAssigneeIds = currentSelection;
        if (missionConfirmBtn) missionConfirmBtn.disabled = selectedMissionAssigneeIds.length === 0;
        renderMapRoster();
      });
    }
    if (selectedMissionAssigneeIds.includes(member.id)) {
      card.classList.add("selected");
    }
    const img = document.createElement("img");
    img.src = member.portrait;
    img.alt = member.name;
    if (member.id === "amanda") {
      img.classList.add("map-roster-portrait-amanda");
    }
    const label = document.createElement("div");
    label.textContent = member.name;
    card.appendChild(img);
    card.appendChild(label);
    mapRoster.appendChild(card);
  }
}

function openMissionDialog(mission) {
  if (isMapBattleFirstEntryTutorialRunning) return;
  if (!missionModal || !missionTitle || !missionText || !missionAssignOptions || !activeMapState) return;
  activeMissionForDialog = mission;
  selectedMissionAssigneeIds = [];
  missionTitle.textContent = mission.title;
  missionText.textContent = `${mission.text}\n\nSelecciona abajo uno o dos personajes y pulsa Confirmar.`;
  missionAssignOptions.innerHTML = "";
  missionAssignOptions.style.display = "none";
  if (missionConfirmBtn) {
    missionConfirmBtn.disabled = true;
  }
  renderMapRoster();
  missionModal.classList.add("open");
  missionModal.setAttribute("aria-hidden", "false");
}

function getMissionSuccessChance(mission) {
  if (!mission || !Array.isArray(mission.assignedCharacterIds) || mission.assignedCharacterIds.length === 0) return 0.1;
  const indicated = Array.isArray(mission.indicatedCharacterIds) ? mission.indicatedCharacterIds : [];
  let total = 0;
  for (const memberId of mission.assignedCharacterIds) {
    total += indicated.includes(memberId) ? 0.8 : 0.1;
  }
  return Math.min(1, total);
}

function openRouletteDialog(mission) {
  if (isMapBattleFirstEntryTutorialRunning) return;
  if (!rouletteModal || !rouletteWheel || !rouletteResult || !rouletteSpinBtn || !activeMapState) return;
  activeMissionForRoulette = mission;
  const successChance = getMissionSuccessChance(mission);
  const greenPct = Math.round(successChance * 100);
  rouletteWheel.style.transition = "none";
  rouletteWheel.style.transform = "rotate(0deg)";
  rouletteWheel.style.background = `conic-gradient(#2ea043 0 ${greenPct}%, #c52222 ${greenPct}% 100%)`;
  rouletteResult.textContent = "La marca superior decide el resultado.";
  rouletteSpinBtn.textContent = "Girar ruleta";
  rouletteSpinBtn.disabled = false;
  rouletteModal.classList.add("open");
  rouletteModal.setAttribute("aria-hidden", "false");
}

function resolveMissionWithRoulette() {
  if (!activeMissionForRoulette || !activeMapState || !rouletteResult || !rouletteSpinBtn) return;
  if (rouletteSpinBtn.textContent === "Continuar") {
    closeRouletteModal();
    return;
  }
  rouletteSpinBtn.disabled = true;
  const fullTurns = 4 + Math.floor(Math.random() * 3);
  const extraDeg = Math.floor(Math.random() * 360);
  const finalRotation = fullTurns * 360 + extraDeg;
  rouletteWheel.style.transition = "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
  rouletteWheel.style.transform = `rotate(${finalRotation}deg)`;
  window.setTimeout(() => {
    if (!activeMissionForRoulette || !activeMapState || !rouletteResult || !rouletteSpinBtn) return;
    const mission = activeMissionForRoulette;
    const successChance = getMissionSuccessChance(mission);
    const normalizedRotation = ((finalRotation % 360) + 360) % 360;
    const landingAngle = (360 - normalizedRotation) % 360;
    const successMaxAngle = successChance * 360;
    const success = landingAngle <= successMaxAngle;
    const memberIds = Array.isArray(mission.assignedCharacterIds) ? mission.assignedCharacterIds : [];
    for (const memberId of memberIds) {
      activeMapState.busyCharacterIds.delete(memberId);
    }
    mission.state = "resolved";
    mission.assignedCharacterIds = [];
    mission.resolvesAt = 0;
    if (success) {
      if (mission.templateId) {
        completedBattleMissionIds.add(mission.templateId);
      }
      applyMissionSuccessRewards(mission);
      activeMapState.successCount += 1;
      if (mission.successNote) {
        activeMapState.reportLines.push(mission.successNote);
      }
    }
    activeMapState.resolvedCount += 1;
    rouletteResult.textContent = success ? "Éxito" : "Fracaso";
    rouletteSpinBtn.textContent = "Continuar";
    rouletteSpinBtn.disabled = false;
    renderMapRoster();
    renderMapMissions();
  }, 1450);
}

function renderMapMissions() {
  if (!mapMissionsLayer || !activeMapState) return;
  mapMissionsLayer.innerHTML = "";
  let visibleCount = 0;
  for (const mission of activeMapState.missions) {
    if (mission.state === "resolved") continue;
    if (visibleCount >= MAP_MAX_VISIBLE_MISSIONS) continue;
    visibleCount += 1;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mission-icon-btn";
    btn.style.left = `${mission.x}%`;
    btn.style.top = `${mission.y}%`;
    btn.style.transform = "translate(-50%, -50%)";
    if (mission.state === "assigned") {
      btn.classList.add("assigned");
      btn.disabled = true;
    } else if (mission.state === "ready") {
      btn.classList.add("ready");
    }
    const img = document.createElement("img");
    img.src = asset("objetos/mision.png");
    img.alt = "Misión";
    btn.appendChild(img);
    btn.addEventListener("click", () => {
      if (isMapBattleFirstEntryTutorialRunning) return;
      if (mission.state === "idle") {
        openMissionDialog(mission);
      } else if (mission.state === "ready") {
        openRouletteDialog(mission);
      }
    });
    mapMissionsLayer.appendChild(btn);
  }
}

function tickMapSystems() {
  if (!activeMapState || activeMapState.finished) return;
  let shouldRenderMissions = false;
  if (spawnMapMissionIfNeeded(Date.now())) {
    shouldRenderMissions = true;
  }
  const missionsChanged = applyReadyMissionsIfNeeded();
  updateMapTimerDisplay();
  if (missionsChanged || shouldRenderMissions) {
    renderMapMissions();
  }
  const reachedTarget = activeMapState.resolvedCount >= MAP_PARTICIPATION_TARGET_FOR_REPORT;
  const timeExpired = isMapTimeExpired();
  if (timeExpired || reachedTarget) {
    if (mapTimerIntervalId !== null) {
      window.clearInterval(mapTimerIntervalId);
      mapTimerIntervalId = null;
    }
    if (missionModal && missionModal.classList.contains("open")) {
      closeMissionModal();
    }
    if (rouletteModal && rouletteModal.classList.contains("open")) {
      closeRouletteModal();
    }
    activeMapState.finished = true;
    if (!activeMapState.finalReportShown) {
      activeMapState.finalReportShown = true;
      openMapFinalReport(
        reachedTarget
          ? `Objetivo alcanzado: ${MAP_PARTICIPATION_TARGET_FOR_REPORT} misiones resueltas.`
          : "Se acabó el tiempo de la mesa de batalla.",
        activeMapState.successCount,
        activeMapState.reportLines
      );
    }
  }
}

function openMapModal() {
  if (!mapModal || !hasUnlockedMapIcon || currentDay < 13) return;
  closeMapEnterConfirm();
  closeSpeech();
  closeRegistroModal();
  closeRegistroCharacterModal();
  closeArmyModal();
  closeEliotOptionsModal();
  closeMercenaryModal();
  closeItemModal();
  isMapIconHighlighted = false;
  renderMapaIconState();
  activeMapState = getOrCreateDay13MapState(currentDay);
  if (activeMapState.finished) {
    showRewardToast("La mesa de batalla ya finalizó hoy.");
    return;
  }
  renderMapMissionSpawnZone();
  if (mapAbandonConfirm) {
    mapAbandonConfirm.classList.remove("open");
    mapAbandonConfirm.setAttribute("aria-hidden", "true");
  }
  mapModal.classList.add("open");
  mapModal.setAttribute("aria-hidden", "false");
  updateMapTimerDisplay();
  renderMapMissions();
  renderMapRoster();
  if (mapTimerIntervalId !== null) {
    window.clearInterval(mapTimerIntervalId);
  }
  mapTimerIntervalId = window.setInterval(tickMapSystems, 250);
  maybeStartMapBattleFirstEntryTutorial();
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

function unlockEliotInRegistro() {
  if (hasRegisteredEliot) return;
  hasRegisteredEliot = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Eliot anotado en el registro.");
}

function unlockHerreroInRegistro() {
  if (hasRegisteredHerrero) return;
  hasRegisteredHerrero = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Simón anotado en el registro.");
}

function unlockAmandaInRegistro() {
  if (hasRegisteredAmanda) return;
  hasRegisteredAmanda = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Amanda anotada en el registro.");
}

function unlockAmandaForBattle() {
  if (hasUnlockedAmandaForBattle) return;
  hasUnlockedAmandaForBattle = true;
  showRewardToast("Amanda añadida a la mesa de batalla.");
}

function unlockRitaInRegistro() {
  if (hasRegisteredRita) return;
  hasRegisteredRita = true;
  isRegistroHighlighted = true;
  renderRegistroEntries();
  renderRegistroIconState();
  showRewardToast("Rita anotada en el registro.");
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

function startTiendaMagiaJaneDialogue() {
  if (hasRegisteredJane) {
    startDialogue(jane, ["¡Hola!"]);
    return;
  }
  pendingTiendaMagiaJaneHello = true;
  startJaneInteractionDialogue();
}

function startTiendaMagiaCamusDialogue() {
  if (hasRegisteredCamus) {
    startDialogue(camus, ["¡Hola!"]);
    return;
  }
  startDialogue(camus, CAMUS_DIALOGUE, 0, () => {
    unlockCamusInRegistro();
    startDialogue(camus, ["¡Hola!"]);
  });
}

function getHerreroSpeakerAnchor(speaker) {
  if (speaker === "evelyn") return evelyn;
  return herrero;
}

function runHerreroIntroSequence(index = 0) {
  const step = HERRERO_INTRO_SEQUENCE[index];
  if (!step) {
    unlockHerreroInRegistro();
    return;
  }
  const anchor = getHerreroSpeakerAnchor(step.speaker);
  startDialogue(anchor, [step.line], 0, () => {
    window.setTimeout(() => {
      runHerreroIntroSequence(index + 1);
    }, 0);
  });
}

function startHerreroDialogue() {
  if (!herrero) return;
  if (!hasMetHerrero) {
    hasMetHerrero = true;
    runHerreroIntroSequence(0);
    return;
  }
  startDialogue(herrero, HERRERO_REPEAT_DIALOGUE);
}

function getAmandaSpeakerAnchor(speaker) {
  if (speaker === "evelyn") return evelyn;
  return amanda;
}

function runAmandaSequence(sequence, index = 0, onComplete = null) {
  const step = sequence[index];
  if (!step) {
    if (typeof onComplete === "function") onComplete();
    return;
  }
  const anchor = getAmandaSpeakerAnchor(step.speaker);
  startDialogue(anchor, [step.line], 0, () => {
    window.setTimeout(() => {
      runAmandaSequence(sequence, index + 1, onComplete);
    }, 0);
  });
}

function startAmandaDialogue() {
  if (!amanda) return;
  if (!hasMetAmanda) {
    hasMetAmanda = true;
    runAmandaSequence(AMANDA_INTRO_SEQUENCE, 0, unlockAmandaInRegistro);
    return;
  }
  if (currentDay >= 14 && !hasUnlockedAmandaForBattle) {
    runAmandaSequence(AMANDA_DAY14_BATTLE_SEQUENCE, 0, unlockAmandaForBattle);
    return;
  }
  startDialogue(amanda, AMANDA_REPEAT_DIALOGUE);
}

function getRitaSpeakerAnchor(speaker) {
  if (speaker === "evelyn") return evelyn;
  return rita;
}

function runRitaSequence(sequence, index = 0, onComplete = null) {
  const step = sequence[index];
  if (!step) {
    if (typeof onComplete === "function") onComplete();
    return;
  }
  const anchor = getRitaSpeakerAnchor(step.speaker);
  startDialogue(anchor, [step.line], 0, () => {
    window.setTimeout(() => {
      runRitaSequence(sequence, index + 1, onComplete);
    }, 0);
  });
}

function startRitaDialogue() {
  if (!rita) return;
  if (!hasMetRita) {
    hasMetRita = true;
    runRitaSequence(RITA_INTRO_SEQUENCE, 0, unlockRitaInRegistro);
    return;
  }
  runRitaSequence(RITA_REPEAT_SEQUENCE);
}

function isInteractionLocked() {
  return isIntroSequenceActive
    || isDayTransitionRunning
    || isDay12RoyalEventRunning
    || isDay13MapIntroRunning
    || isDay10MercenaryEventRunning
    || isRegistroModalOpen()
    || isRegistroCharacterModalOpen()
    || isArmyModalOpen()
    || isMapModalOpen()
    || isEliotOptionsModalOpen()
    || isMercenaryModalOpen();
}

function isForcedSceneLockActive() {
  return isDay12RoyalEventRunning || isDay10MercenaryEventRunning || isDay13MapIntroRunning;
}

function getDay12SpeakerAnchor(speaker) {
  if (speaker === "rey") return rey;
  if (speaker === "princesa") return princesa;
  if (speaker === "soldado") return soldado;
  if (speaker === "helena") return helena;
  return evelyn;
}

function runDay12DialogueSequence(sequence, onComplete) {
  const runStep = (index) => {
    const step = sequence[index];
    if (!step) {
      if (typeof onComplete === "function") onComplete();
      return;
    }
    const anchor = getDay12SpeakerAnchor(step.speaker);
    startDialogue(anchor, [step.line], 0, () => {
      window.setTimeout(() => {
        runStep(index + 1);
      }, 0);
    });
  };
  runStep(0);
}

function setDay12IntroSceneLayout() {
  if (!scene || !rey || !princesa || !soldado || !helena || !evelyn) return;
  background.src = asset("escenarios/fondo1.png");
  background.alt = "Fondo 1";
  setSceneBackgroundClass("in-fondo1");
  jane.style.display = "none";
  if (camus) camus.style.display = "none";
  if (darren) darren.style.display = "none";
  if (mercenario) mercenario.style.display = "none";
  if (eliot) eliot.style.display = "none";
  if (herrero) herrero.style.display = "none";
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  helena.style.display = "block";
  rey.style.display = "block";
  princesa.style.display = "block";
  soldado.style.display = "block";
  rey.style.left = "31%";
  princesa.style.left = "22%";
  soldado.style.left = "78%";
  helena.style.left = "66%";
  snapEvelynToPosition("56%", getFondo1EvelynBottom());
  evelyn.style.transform = "scaleX(-1)";
  if (nextArrow) nextArrow.style.display = "none";
  if (prevArrow) prevArrow.style.display = "none";
  if (leftSideArrow) leftSideArrow.style.display = "none";
}

function setDay12PrivateSceneLayout() {
  if (!scene || !rey || !evelyn) return;
  background.src = asset("escenarios/fondo3.png");
  background.alt = "Fondo 3";
  setSceneBackgroundClass("in-fondo3");
  jane.style.display = "none";
  if (camus) camus.style.display = "none";
  if (darren) darren.style.display = "none";
  if (mercenario) mercenario.style.display = "none";
  if (eliot) eliot.style.display = "none";
  if (herrero) herrero.style.display = "none";
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
  if (helena) helena.style.display = "none";
  rey.style.display = "block";
  rey.style.left = "38%";
  const day12PrivateBottom = `calc(${INITIAL_EVELYN_BOTTOM} + 26px)`;
  snapEvelynToPosition("52%", day12PrivateBottom);
  evelyn.style.transform = "scaleX(-1)";
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
  if (nextArrow) nextArrow.style.display = "none";
  if (prevArrow) prevArrow.style.display = "none";
  if (leftSideArrow) leftSideArrow.style.display = "none";
}

async function startDay12RoyalEvent() {
  if (hasTriggeredDay12RoyalEvent || hasCompletedDay12RoyalEvent || currentDay !== 12) return;
  hasTriggeredDay12RoyalEvent = true;
  isDay12RoyalEventRunning = true;
  closeSpeech();
  closeItemModal();
  closeRegistroModal();
  closeRegistroCharacterModal();
  closeArmyModal();
  closeEliotOptionsModal();
  closeMercenaryModal();
  closeHelenaOptionsModal();

  try {
    setDay12IntroSceneLayout();
    await new Promise((resolve) => {
      runDay12DialogueSequence(DAY12_ROYAL_INTRO_SEQUENCE, resolve);
    });

    await playDayTransitionToBlack();
    setDay12PrivateSceneLayout();
    await fadeOutDayTransitionFromBlack();

    await new Promise((resolve) => {
      runDay12DialogueSequence(DAY12_ROYAL_PRIVATE_SEQUENCE, resolve);
    });

    await playDayTransitionToBlack();
    goToFondo1();
    if (mercenario) mercenario.style.display = "none";
    if (eliot) eliot.style.display = "none";
    if (rey) rey.style.display = "none";
    if (princesa) princesa.style.display = "none";
    if (soldado) soldado.style.display = "none";
    await fadeOutDayTransitionFromBlack();

    await new Promise((resolve) => {
      runDay12DialogueSequence(DAY12_ROYAL_OUTRO_SEQUENCE, resolve);
    });

    hasCompletedDay12RoyalEvent = true;
  } finally {
    if (rey) rey.style.display = "none";
    if (princesa) princesa.style.display = "none";
    if (soldado) soldado.style.display = "none";
    isDay12RoyalEventRunning = false;
  }
}

function getDay13SpeakerAnchor(speaker) {
  if (speaker === "helena") return helena;
  return evelyn;
}

function runDay13DialogueSequence(sequence, onComplete) {
  const runStep = (index) => {
    const step = sequence[index];
    if (!step) {
      if (typeof onComplete === "function") onComplete();
      return;
    }
    const anchor = getDay13SpeakerAnchor(step.speaker);
    startDialogue(anchor, [step.line], 0, () => {
      window.setTimeout(() => {
        runStep(index + 1);
      }, 0);
    });
  };
  runStep(0);
}

function runMapBattleTutorialSequence(sequence, onComplete) {
  if (!Array.isArray(sequence) || sequence.length === 0 || !mapGuideSpeechText || !mapGuideSpeechNextBtn) {
    if (typeof onComplete === "function") onComplete();
    return;
  }
  let index = 0;
  const renderStep = () => {
    if (!isMapModalOpen() || !isMapBattleFirstEntryTutorialRunning) return;
    const step = sequence[index];
    if (!step) {
      if (typeof onComplete === "function") onComplete();
      return;
    }
    mapGuideSpeechText.textContent = step.line || "";
    setMapGuideSpeechVisible(true);
    mapGuideSpeechNextBtn.onclick = () => {
      index += 1;
      renderStep();
    };
  };
  renderStep();
}

function maybeStartMapBattleFirstEntryTutorial() {
  if (!isMapModalOpen()) return;
  if (hasShownMapBattleFirstEntryTutorial || isMapBattleFirstEntryTutorialRunning) return;
  isMapBattleFirstEntryTutorialRunning = true;
  closeSpeech();
  setMapHelenaGuideVisible(true);
  setMapGuideSpeechVisible(true);
  runMapBattleTutorialSequence(MAP_BATTLE_FIRST_ENTRY_TUTORIAL_SEQUENCE, () => {
    hasShownMapBattleFirstEntryTutorial = true;
    isMapBattleFirstEntryTutorialRunning = false;
    setMapHelenaGuideVisible(false);
    setMapGuideSpeechVisible(false);
    if (mapGuideSpeechNextBtn) {
      mapGuideSpeechNextBtn.onclick = null;
    }
  });
}

async function startDay13MapIntroEvent() {
  if (currentDay !== 13) return;
  if (hasTriggeredDay13MapIntro || hasCompletedDay13MapIntro) return;
  hasTriggeredDay13MapIntro = true;
  isDay13MapIntroRunning = true;
  closeSpeech();
  closeItemModal();
  closeRegistroModal();
  closeRegistroCharacterModal();
  closeArmyModal();
  closeMapModal();
  closeEliotOptionsModal();
  closeMercenaryModal();
  closeHelenaOptionsModal();
  try {
    await new Promise((resolve) => {
      runDay13DialogueSequence(DAY13_HELENA_MAP_SEQUENCE, resolve);
    });
    hasCompletedDay13MapIntro = true;
    unlockMapIcon();
  } finally {
    isDay13MapIntroRunning = false;
  }
}

function openEliotOptionsModal() {
  if (!eliotOptionsModal) return;
  closeSpeech();
  if (eliotHireBtn) {
    const canAfford = DINERO >= ELIOT_HIRE_COST;
    eliotHireBtn.disabled = !canAfford;
    eliotHireBtn.setAttribute("aria-disabled", canAfford ? "false" : "true");
  }
  eliotOptionsModal.classList.add("open");
  eliotOptionsModal.setAttribute("aria-hidden", "false");
}

function closeEliotOptionsModal() {
  if (!eliotOptionsModal) return;
  eliotOptionsModal.classList.remove("open");
  eliotOptionsModal.setAttribute("aria-hidden", "true");
}

function openMercenaryModal() {
  if (!mercenaryModal) return;
  if (mercenaryPayBtn) {
    const canAfford = DINERO >= MERCENARY_EXTORTION_COST;
    mercenaryPayBtn.disabled = !canAfford;
    mercenaryPayBtn.setAttribute("aria-disabled", canAfford ? "false" : "true");
  }
  if (mercenaryEliotBtn) {
    mercenaryEliotBtn.style.display = hasHiredEliot ? "block" : "none";
  }
  mercenaryModal.classList.add("open");
  mercenaryModal.setAttribute("aria-hidden", "false");
}

function closeMercenaryModal() {
  if (!mercenaryModal) return;
  mercenaryModal.classList.remove("open");
  mercenaryModal.setAttribute("aria-hidden", "true");
}

function startMercenaryDay10Encounter() {
  if (!spawnMercenaryOnDay10 || currentDay < 10) return;
  if (hasStartedMercenaryDay10Encounter) return;
  if (!isInFondo1()) return;
  if (!mercenario || window.getComputedStyle(mercenario).display === "none") return;

  hasStartedMercenaryDay10Encounter = true;
  isDay10MercenaryEventRunning = true;
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();

  const runStep = (index) => {
    const step = MERCENARY_DAY10_DIALOGUE_SEQUENCE[index];
    if (!step) {
      window.setTimeout(() => {
        openMercenaryModal();
      }, 0);
      return;
    }
    const anchor = step.speaker === "evelyn" ? evelyn : mercenario;
    startDialogue(anchor, [step.line], 0, () => {
      window.setTimeout(() => {
        runStep(index + 1);
      }, 0);
    });
  };

  runStep(0);
}

function startEliotHireChoiceDialogue() {
  openEliotOptionsModal();
}

function startEliotDialogue() {
  if (!eliot) return;
  if (hasEliotHelpedAgainstMercenary) {
    startDialogue(eliot, ELIOT_POST_MERCENARY_DIALOGUE);
    return;
  }
  if (hasHiredEliot) {
    startDialogue(eliot, ELIOT_ALREADY_HIRED_DIALOGUE);
    return;
  }
  if (!hasMetEliot) {
    hasMetEliot = true;
    startDialogue(
      eliot,
      ELIOT_INTRO_DIALOGUE,
      0,
      () => {
        window.setTimeout(() => {
          startEliotHireChoiceDialogue();
        }, 0);
      }
    );
    return;
  }
  startDialogue(
    eliot,
    ELIOT_RETRY_DIALOGUE,
    0,
    () => {
      window.setTimeout(() => {
        startEliotHireChoiceDialogue();
      }, 0);
    }
  );
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

function getTiendaMagiaLineBottom() {
  return getFondo3EntryEvelynBottom();
}

function enforceTiendaMagiaLineAlignment() {
  if (!isInTiendaMagia()) return;
  const lineBottom = getTiendaMagiaLineBottom();
  if (evelyn) evelyn.style.bottom = lineBottom;
  if (camus && window.getComputedStyle(camus).display !== "none") camus.style.bottom = lineBottom;
  if (jane && window.getComputedStyle(jane).display !== "none") jane.style.bottom = lineBottom;
}

function getFondo4EntryEvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO4_ENTRY_EXTRA_BOTTOM_PX}px)`;
}

function getFondo5EntryEvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${FONDO5_ENTRY_EXTRA_BOTTOM_PX}px)`;
}

function getTabernaEntryEvelynBottom() {
  return `calc(${INITIAL_EVELYN_BOTTOM} + ${TABERNA_EVELYN_EXTRA_BOTTOM_PX}px)`;
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
    if (pendingTiendaMagiaJaneHello && isInTiendaMagia()) {
      pendingTiendaMagiaJaneHello = false;
      window.setTimeout(() => {
        startDialogue(jane, ["¡Hola!"]);
      }, 0);
    }
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
  if (currentDay === 12 && hasCompletedDay12RoyalEvent) {
    startDialogue(helena, HELENA_DAY12_REST_DIALOGUE);
    return;
  }
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
  endDayIcon.classList.toggle("icono-fin-dia-highlight", isEndDayHighlighted);
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
  if (isForcedSceneLockActive()) return;
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
    hideEliotInFondo5Today = false;
    renderDayBanner();
    applyDayState(currentDay);
    closeSpeech();
    closeHelenaOptionsModal();
    closeMapModal();
    closeItemModal();
    clearPendingSceneChange();
    pendingSceneEntryLeft = null;
    pendingSceneEntryBottom = null;
    pendingFondo2FromFondo1 = false;
    setPendingSceneEntry(INITIAL_EVELYN_LEFT, getFondo1EvelynBottom());
    goToFondo1();
    await fadeOutDayTransitionFromBlack();
    if (currentDay === 13 && !hasCompletedDay13MapIntro && !hasTriggeredDay13MapIntro) {
      await startDay13MapIntroEvent();
    }
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
  if (dayNumber >= 12 && !hasHiredEliot) {
    hasEliotLeftTownForever = true;
  }
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
addFallbackOnError("rey", "rey.png no encontrado");
addFallbackOnError("princesa", "princes.png no encontrado");
addFallbackOnError("soldado", "soldado no encontrado");
addFallbackOnError("eliot", "eliot.png no encontrado");
addFallbackOnError("herrero", "herrero.png no encontrado");
addFallbackOnError("amanda", "amanda.png no encontrado");
addFallbackOnError("rita", "rita.png no encontrado");

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
  const isTouchLayout = shouldUseMobileTabletLayout();
  const isSmallPhonePortrait = isTouchLayout && vw <= 540 && vh > vw;
  const useContainScale = isTouchLayout && !isSmallPhonePortrait;
  const scale = useContainScale
    ? Math.min(vw / BASE_WIDTH, vh / BASE_HEIGHT)
    : Math.max(vw / BASE_WIDTH, vh / BASE_HEIGHT);
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
        : isInFondo3()
          ? getFondo3EntryEvelynBottom()
        : isInTiendaMagia()
          ? getFondo3EntryEvelynBottom()
        : isInTaberna()
          ? getTabernaEntryEvelynBottom()
        : isInFondo5()
          ? getFondo5EntryEvelynBottom()
        : INITIAL_EVELYN_BOTTOM;
  if (isInTiendaMagia()) {
    enforceTiendaMagiaLineAlignment();
  }
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
  pendingSpeechForEliot = false;
  pendingSpeechForHelena = false;
  pendingSpeechForHerrero = false;
  pendingSpeechForAmanda = false;
  pendingSpeechForRita = false;
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

function tryAdvanceDialogueFromUserInput() {
  if (!speech || speech.style.display === "none" || !activeDialogue) return false;
  if (!speechNextBtn || speechNextBtn.style.display === "none") return false;
  if (isIntroSequenceActive) {
    advanceIntroDialogueSequence();
    return true;
  }
  if (advanceScriptedDialogueSequence()) {
    return true;
  }
  advanceActiveDialogue();
  return true;
}

function tryConfirmYesByEnter() {
  if (mapEnterConfirm && mapEnterConfirm.classList.contains("open") && mapEnterYesBtn && !mapEnterYesBtn.disabled) {
    mapEnterYesBtn.click();
    return true;
  }
  if (mapAbandonConfirm && mapAbandonConfirm.classList.contains("open") && mapAbandonYesBtn && !mapAbandonYesBtn.disabled) {
    mapAbandonYesBtn.click();
    return true;
  }
  if (
    helenaOptionsEmptyConfirm
    && helenaOptionsEmptyConfirm.classList.contains("open")
    && helenaEmptyYesBtn
    && !helenaEmptyYesBtn.disabled
  ) {
    helenaEmptyYesBtn.click();
    return true;
  }
  if (dayEndModal && dayEndModal.classList.contains("open") && dayEndYesBtn && !dayEndYesBtn.disabled) {
    dayEndYesBtn.click();
    return true;
  }
  return false;
}

function isElementActuallyVisible(el) {
  if (!(el instanceof HTMLElement)) return false;
  return el.style.display !== "none" && !el.hidden && el.getClientRects().length > 0;
}

function tryAdvanceConversationContinueButton() {
  if (isElementActuallyVisible(mapGuideSpeech) && mapGuideSpeechNextBtn && !mapGuideSpeechNextBtn.disabled) {
    mapGuideSpeechNextBtn.click();
    return true;
  }
  if (speech && speech.style.display !== "none" && speechNextBtn && speechNextBtn.style.display !== "none" && !speechNextBtn.disabled) {
    speechNextBtn.click();
    return true;
  }
  return false;
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

function isInTaberna() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/taberna.png");
}

function isInTiendaMagia() {
  if (!background) return false;
  const src = background.getAttribute("src") || background.src || "";
  return src.includes("escenarios/tiendamagia.png");
}

function cancelPendingAnilloPickup() {
  if (anilloPickupTimeoutId !== null) {
    window.clearTimeout(anilloPickupTimeoutId);
    anilloPickupTimeoutId = null;
  }
  anilloPickupPending = false;
  anilloWorld.style.pointerEvents = "none";
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
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForEliot = false;
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
  if (eliot) {
    eliot.style.display = "none";
  }
  if (herrero) {
    herrero.style.display = "none";
  }
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
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
  if (topRightArrow) {
    topRightArrow.style.display = "none";
  }
}

function goToFondo3() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForEliot = false;
  pendingSpeechForHerrero = false;
  pendingSpeechForAmanda = false;
  pendingSpeechForRita = false;

  snapEvelynToPosition(
    consumePendingSceneEntry(INITIAL_EVELYN_LEFT),
    consumePendingSceneEntryBottom(getFondo3EntryEvelynBottom())
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
  if (eliot) {
    eliot.style.display = "none";
  }
  if (herrero) {
    herrero.style.display = currentDay >= 1 ? "block" : "none";
  }
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
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
  if (topRightArrow) {
    if (currentDay >= 1) {
      topRightArrow.style.display = "block";
      topRightArrow.style.visibility = "visible";
      topRightArrow.style.pointerEvents = "auto";
      topRightArrow.setAttribute("aria-label", "Ir a tienda de magia");
    } else {
      topRightArrow.style.display = "none";
    }
  }
}

function goToFondo4() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForEliot = false;
  pendingSpeechForHerrero = false;
  pendingSpeechForAmanda = false;
  pendingSpeechForRita = false;

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
  if (eliot) {
    eliot.style.display = "none";
  }
  if (herrero) {
    herrero.style.display = "none";
  }
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
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
  if (topRightArrow) {
    topRightArrow.style.display = "none";
  }
}

function goToFondo1() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForEliot = false;
  pendingSpeechForHerrero = false;
  pendingSpeechForAmanda = false;
  pendingSpeechForRita = false;

  const fondo1Bottom = consumePendingSceneEntryBottom(getFondo1EvelynBottom());
  const fondo1EntryLeft = consumePendingSceneEntry(INITIAL_EVELYN_LEFT);
  snapEvelynToPosition(fondo1EntryLeft, fondo1Bottom);
  evelyn.style.transform = fondo1EntryLeft === ENTRY_FONDO1_FROM_FONDO2 ? "scaleX(-1)" : "scaleX(1)";

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
    mercenario.style.display = spawnMercenaryOnDay10 && currentDay >= 10 && !hasMercenaryBeenDrivenOff ? "block" : "none";
    mercenario.classList.remove("shake");
  }
  if (eliot) {
    eliot.style.opacity = "1";
    eliot.classList.remove("fade-out");
    eliot.style.display = "none";
    eliot.style.left = "";
    eliot.style.bottom = "";
    eliot.style.transform = "";
  }
  if (herrero) {
    herrero.style.display = "none";
  }
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
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
  if (topRightArrow) {
    topRightArrow.style.display = "none";
  }
  if (currentDay === 12 && !hasCompletedDay12RoyalEvent && !hasTriggeredDay12RoyalEvent) {
    void startDay12RoyalEvent();
  }
  startMercenaryDay10Encounter();
}

function goToFondo5() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForEliot = false;
  pendingSpeechForHerrero = false;
  pendingSpeechForAmanda = false;
  pendingSpeechForRita = false;

  const fondo5EntryLeft = consumePendingSceneEntry(ENTRY_FONDO5_FROM_FONDO1);
  snapEvelynToPosition(
    fondo5EntryLeft,
    consumePendingSceneEntryBottom(getFondo5EntryEvelynBottom())
  );
  evelyn.style.transform = fondo5EntryLeft === ENTRY_FONDO5_FROM_TABERNA ? "scaleX(-1)" : "scaleX(1)";

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
  if (eliot) {
    const shouldShowEliot = currentDay >= 4 && !hideEliotInFondo5Today && !hasEliotLeftTownForever;
    eliot.style.display = shouldShowEliot ? "block" : "none";
    eliot.style.opacity = "1";
    eliot.classList.remove("fade-out");
    eliot.style.transform = "";
  }
  if (herrero) {
    herrero.style.display = "none";
  }
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
  inventory.style.display = "block";
  setArrowMode(nextArrow, null);
  setArrowMode(prevArrow, "arrow-up-top-left");
  nextArrow.style.display = "block";
  nextArrow.style.visibility = "visible";
  nextArrow.style.pointerEvents = "auto";
  nextArrow.setAttribute("aria-label", "Volver a fondo 1");
  prevArrow.style.display = "block";
  prevArrow.style.visibility = "visible";
  prevArrow.style.pointerEvents = "auto";
  prevArrow.setAttribute("aria-label", "Entrar en taberna");
  if (leftSideArrow) {
    leftSideArrow.style.display = "none";
  }
  if (topRightArrow) {
    topRightArrow.style.display = "none";
  }
}

function goToTaberna() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  clearPendingSpeechFlags();

  evelyn.style.transition = "none";
  snapEvelynToPosition(INITIAL_EVELYN_LEFT, getTabernaEntryEvelynBottom());
  evelyn.style.transform = "scaleX(-1)";
  void evelyn.offsetWidth;

  background.src = asset("escenarios/taberna.png");
  background.alt = "Taberna";
  setSceneBackgroundClass("in-taberna");

  jane.style.display = "none";
  if (helena) helena.style.display = "none";
  if (camus) camus.style.display = "none";
  if (darren) darren.style.display = "none";
  if (mercenario) mercenario.style.display = "none";
  if (eliot) eliot.style.display = "none";
  if (herrero) herrero.style.display = "none";
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
  inventory.style.display = "block";
  setArrowMode(nextArrow, "arrow-down-center");
  setArrowMode(prevArrow, null);
  nextArrow.style.display = "block";
  nextArrow.style.visibility = "visible";
  nextArrow.style.pointerEvents = "auto";
  nextArrow.setAttribute("aria-label", "Volver a fondo 5");
  prevArrow.style.display = "none";
  if (leftSideArrow) {
    leftSideArrow.style.display = "none";
  }
  if (topRightArrow) {
    topRightArrow.style.display = "none";
  }
}

function goToTiendaMagia() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  clearPendingSpeechFlags();

  const tiendaMagiaBottom = consumePendingSceneEntryBottom(getTiendaMagiaLineBottom());
  snapEvelynToPosition("58%", tiendaMagiaBottom);
  evelyn.style.transform = "scaleX(-1)";
  evelyn.style.bottom = tiendaMagiaBottom;

  background.src = asset("escenarios/tiendamagia.png");
  background.alt = "Tienda de magia";
  setSceneBackgroundClass("in-tiendamagia");

  jane.style.display = currentDay >= 1 ? "block" : "none";
  if (camus) {
    camus.style.display = currentDay >= 1 ? "block" : "none";
  }
  if (jane) {
    jane.style.left = "76%";
    jane.style.bottom = tiendaMagiaBottom;
  }
  if (camus) {
    camus.style.left = "52%";
    camus.style.bottom = tiendaMagiaBottom;
  }
  enforceTiendaMagiaLineAlignment();
  if (helena) helena.style.display = "none";
  if (darren) darren.style.display = "none";
  if (mercenario) mercenario.style.display = "none";
  if (eliot) eliot.style.display = "none";
  if (herrero) herrero.style.display = "none";
  if (amanda) amanda.style.display = "none";
  if (rita) rita.style.display = "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
  anilloWorld.style.display = "none";
  anilloWorld.style.pointerEvents = "none";
  inventory.style.display = "block";

  setArrowMode(nextArrow, "arrow-down-center");
  setArrowMode(prevArrow, null);
  nextArrow.style.display = "block";
  nextArrow.style.visibility = "visible";
  nextArrow.style.pointerEvents = "auto";
  nextArrow.setAttribute("aria-label", "Volver a fondo 3");
  prevArrow.style.display = "none";
  if (leftSideArrow) leftSideArrow.style.display = "none";
  if (topRightArrow) topRightArrow.style.display = "none";
}

function goToFondo0() {
  clearPendingSceneChange();
  closeItemModal();
  closeSpeech();
  closeEliotOptionsModal();
  closeMercenaryModal();
  cancelPendingAnilloPickup();
  stopEvelynWalkAnimation();
  pendingSpeechForJane = false;
  pendingSpeechForCamus = false;
  pendingSpeechForDarren = false;
  pendingSpeechForEliot = false;
  pendingSpeechForHerrero = false;
  pendingSpeechForAmanda = false;
  pendingSpeechForRita = false;

  evelyn.style.transition = "none";
  snapEvelynToPosition(FONDO0_EVELYN_LEFT, getFondo0EvelynBottom());
  evelyn.style.transform = "scaleX(-1)";
  void evelyn.offsetWidth;

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
  if (eliot) {
    eliot.style.display = "none";
  }
  if (herrero) {
    herrero.style.display = "none";
  }
  if (amanda) amanda.style.display = currentDay >= 1 ? "block" : "none";
  if (rita) rita.style.display = currentDay >= 1 ? "block" : "none";
  if (rey) rey.style.display = "none";
  if (princesa) princesa.style.display = "none";
  if (soldado) soldado.style.display = "none";
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
  if (topRightArrow) {
    topRightArrow.style.display = "none";
  }
}

if (jane) {
  jane.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (isInTiendaMagia()) {
      enforceTiendaMagiaLineAlignment();
    }
    closeSpeech();
    clearPendingSpeechFlags();
    pendingSpeechForJane = true;
    moveEvelynInFrontOf(jane);
    if (isEvelynBeside(jane)) {
      faceEvelynToward(jane);
      faceJaneTowardEvelyn();
      if (isInTiendaMagia()) {
        startTiendaMagiaJaneDialogue();
      } else {
        startJaneInteractionDialogue();
      }
      pendingSpeechForJane = false;
    }
  });
}

if (camus) {
  camus.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (isInTiendaMagia()) {
      enforceTiendaMagiaLineAlignment();
    }
    closeSpeech();
    clearPendingSpeechFlags();
    pendingSpeechForCamus = true;
    moveEvelynInFrontOf(camus, false);
    if (isEvelynBeside(camus)) {
      faceEvelynToward(camus);
      faceCamusTowardEvelyn();
      if (isInTiendaMagia()) {
        startTiendaMagiaCamusDialogue();
      } else {
        startCamusInteractionDialogue();
      }
      pendingSpeechForCamus = false;
    }
  });
}

if (darren) {
  darren.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    closeSpeech();
    clearPendingSpeechFlags();
    pendingSpeechForDarren = true;
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
    clearPendingSpeechFlags();
    pendingSpeechForHelena = true;
    moveEvelynInFrontOf(helena, false);
    if (isEvelynBeside(helena)) {
      faceEvelynToward(helena);
      startHelenaDialogue();
      pendingSpeechForHelena = false;
    }
  });
}

if (eliot) {
  eliot.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (window.getComputedStyle(eliot).display === "none") return;
    closeSpeech();
    clearPendingSpeechFlags();
    pendingSpeechForEliot = true;
    moveEvelynInFrontOf(eliot, false);
    if (isEvelynBeside(eliot)) {
      faceEvelynToward(eliot);
      startEliotDialogue();
      pendingSpeechForEliot = false;
    }
  });
}

if (herrero) {
  herrero.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (window.getComputedStyle(herrero).display === "none") return;
    closeSpeech();
    clearPendingSpeechFlags();
    pendingSpeechForHerrero = true;
    moveEvelynInFrontOf(herrero, false);
    if (isEvelynBeside(herrero)) {
      faceEvelynToward(herrero);
      startHerreroDialogue();
      pendingSpeechForHerrero = false;
    }
  });
}

if (amanda) {
  amanda.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (window.getComputedStyle(amanda).display === "none") return;
    closeSpeech();
    clearPendingSpeechFlags();
    pendingSpeechForAmanda = true;
    moveEvelynInFrontOf(amanda, false);
    if (isEvelynBeside(amanda)) {
      faceEvelynToward(amanda);
      startAmandaDialogue();
      pendingSpeechForAmanda = false;
    }
  });
}

if (rita) {
  rita.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (window.getComputedStyle(rita).display === "none") return;
    closeSpeech();
    clearPendingSpeechFlags();
    pendingSpeechForRita = true;
    moveEvelynInFrontOf(rita, false);
    if (isEvelynBeside(rita)) {
      faceEvelynToward(rita);
      startRitaDialogue();
      pendingSpeechForRita = false;
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

if (eliotHireBtn) {
  eliotHireBtn.addEventListener("click", () => {
    if (!eliot) return;
    if (DINERO < ELIOT_HIRE_COST) {
      showRewardToast("No tienes recursos suficientes.");
      triggerInventoryBuzz();
      return;
    }
    closeEliotOptionsModal();
    addDINERO(-ELIOT_HIRE_COST);
    hasHiredEliot = true;
    unlockArmyIconWithEliot();
    startDialogue(eliot, ELIOT_HIRE_CONFIRM_DIALOGUE, 0, unlockEliotInRegistro);
  });
}

if (eliotIgnoreBtn) {
  eliotIgnoreBtn.addEventListener("click", () => {
    if (!eliot) return;
    closeEliotOptionsModal();
    startDialogue(eliot, ELIOT_IGNORE_DIALOGUE, 0, unlockEliotInRegistro);
  });
}

if (eliotOptionsModal) {
  eliotOptionsModal.addEventListener("click", (event) => {
    if (event.target === eliotOptionsModal) {
      closeEliotOptionsModal();
    }
  });
}

if (mercenaryPayBtn) {
  mercenaryPayBtn.addEventListener("click", () => {
    if (!mercenario) return;
    if (DINERO < MERCENARY_EXTORTION_COST) {
      showRewardToast("No tienes recursos suficientes.");
      triggerInventoryBuzz();
      return;
    }
    closeMercenaryModal();
    addDINERO(-MERCENARY_EXTORTION_COST);
    startDialogue(mercenario, MERCENARY_PAY_DIALOGUE, 0, () => {
      hasMercenaryBeenDrivenOff = true;
      mercenario.style.display = "none";
      isDay10MercenaryEventRunning = false;
      if (eliot) {
        eliot.style.display = isInFondo5() && currentDay >= 4 ? "block" : "none";
        eliot.style.left = "";
        eliot.style.bottom = "";
      }
    });
  });
}

if (mercenaryResistBtn) {
  mercenaryResistBtn.addEventListener("click", () => {
    closeMercenaryModal();
    hasMercenaryBeenDrivenOff = true;
    if (mercenario) {
      mercenario.style.display = "none";
      mercenario.classList.remove("shake");
    }
    if (!hasAppliedMercenaryRetaliation) {
      hasAppliedMercenaryRetaliation = true;
      queuePendingDailyDelta(-6, 0, 0);
      queueDaySummaryNote(MERCENARY_RETALIATION_NOTE);
    }
    isDay10MercenaryEventRunning = false;
  });
}

if (mercenaryEliotBtn) {
  mercenaryEliotBtn.addEventListener("click", () => {
    if (!mercenario || !eliot || !hasHiredEliot) return;
    closeMercenaryModal();
    hasEliotHelpedAgainstMercenary = true;
    hideEliotInFondo5Today = true;
    eliot.style.display = "block";
    eliot.style.left = MERCENARY_ELIOT_SUPPORT_LEFT;
    eliot.style.bottom = "calc(var(--character-bottom) + 30px)";
    eliot.style.transform = "translateX(-50%) scaleX(-1)";
    mercenario.classList.add("shake");
    if (scene) {
      scene.classList.add("mercenary-slash");
      window.setTimeout(() => {
        scene.classList.remove("mercenary-slash");
      }, 340);
    }
    startDialogue(mercenario, MERCENARY_ELIOT_DIALOGUE, 0, () => {
      hasMercenaryBeenDrivenOff = true;
      mercenario.classList.remove("shake");
      mercenario.classList.add("fade-out");
      window.setTimeout(() => {
        mercenario.style.display = "none";
        mercenario.classList.remove("fade-out");
        mercenario.style.opacity = "1";
        isDay10MercenaryEventRunning = false;
      }, 900);
    });
  });
}

if (mercenaryModal) {
  mercenaryModal.addEventListener("click", () => {
    // Este modal fuerza una decisión; no se cierra por click fuera.
  });
}

if (nextArrow) {
  nextArrow.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (isInTiendaMagia()) {
      setPendingSceneEntry(ENTRY_FONDO3_FROM_FONDO2, getFondo3EntryEvelynBottom());
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo3);
      return;
    }
    if (isInTaberna()) {
      setPendingSceneEntry(ENTRY_FONDO5_FROM_TABERNA, getFondo5EntryEvelynBottom());
      moveEvelynToArrowAndChangeScene(nextArrow, goToFondo5);
      return;
    }
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
    if (isInFondo5()) {
      setPendingSceneEntry(ENTRY_LEFT_EDGE, INITIAL_EVELYN_BOTTOM);
      moveEvelynToArrowAndChangeScene(prevArrow, goToTaberna);
      return;
    }
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

if (topRightArrow) {
  topRightArrow.addEventListener("click", () => {
    if (isInteractionLocked()) return;
    if (!isInFondo3()) return;
    setPendingSceneEntry(ENTRY_CENTER, getFondo3EntryEvelynBottom());
    moveEvelynToArrowAndChangeScene(topRightArrow, goToTiendaMagia);
  });
}

if (anilloWorld) {
  anilloWorld.addEventListener("click", () => {
    return;
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
    tryAdvanceDialogueFromUserInput();
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
      if (isInTiendaMagia()) {
        startTiendaMagiaJaneDialogue();
      } else {
        startJaneInteractionDialogue();
      }
      clearPendingSpeechFlags();
    } else if (
      pendingSpeechForCamus
      && camus
      && isEvelynBeside(camus)
    ) {
      faceEvelynToward(camus);
      faceCamusTowardEvelyn();
      if (isInTiendaMagia()) {
        startTiendaMagiaCamusDialogue();
      } else {
        startCamusInteractionDialogue();
      }
      clearPendingSpeechFlags();
    } else if (
      pendingSpeechForDarren
      && darren
      && isEvelynBeside(darren)
    ) {
      faceEvelynToward(darren);
      startDarrenInteractionDialogue();
      clearPendingSpeechFlags();
    } else if (
      pendingSpeechForHelena
      && helena
      && isEvelynBeside(helena)
    ) {
      faceEvelynToward(helena);
      startHelenaDialogue();
      clearPendingSpeechFlags();
    } else if (
      pendingSpeechForEliot
      && eliot
      && isEvelynBeside(eliot)
    ) {
      faceEvelynToward(eliot);
      startEliotDialogue();
      clearPendingSpeechFlags();
    } else if (
      pendingSpeechForHerrero
      && herrero
      && isEvelynBeside(herrero)
    ) {
      faceEvelynToward(herrero);
      startHerreroDialogue();
      clearPendingSpeechFlags();
    } else if (
      pendingSpeechForAmanda
      && amanda
      && isEvelynBeside(amanda)
    ) {
      faceEvelynToward(amanda);
      startAmandaDialogue();
      clearPendingSpeechFlags();
    } else if (
      pendingSpeechForRita
      && rita
      && isEvelynBeside(rita)
    ) {
      faceEvelynToward(rita);
      startRitaDialogue();
      clearPendingSpeechFlags();
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
    if (isForcedSceneLockActive()) return;
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

if (registroTutorialMesaBatallaToggle) {
  registroTutorialMesaBatallaToggle.addEventListener("click", () => {
    if (tutorialMesaBatallaLines.length === 0) return;
    isMesaBatallaExpanded = !isMesaBatallaExpanded;
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

if (registroCharEliot) {
  registroCharEliot.addEventListener("click", () => {
    openRegistroCharacterModal("eliot");
  });
}

if (registroCharHerrero) {
  registroCharHerrero.addEventListener("click", () => {
    openRegistroCharacterModal("herrero");
  });
}

if (registroCharAmanda) {
  registroCharAmanda.addEventListener("click", () => {
    openRegistroCharacterModal("amanda");
  });
}

if (registroCharRita) {
  registroCharRita.addEventListener("click", () => {
    openRegistroCharacterModal("rita");
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

if (ejercitoIconBtn) {
  ejercitoIconBtn.addEventListener("click", () => {
    if (isDayTransitionRunning) return;
    if (isForcedSceneLockActive()) return;
    if (!hasUnlockedArmyIcon) return;
    if (isArmyModalOpen()) {
      closeArmyModal();
      return;
    }
    openArmyModal();
  });
}

  if (mapaIconBtn) {
    mapaIconBtn.addEventListener("click", () => {
      if (isDayTransitionRunning) return;
      if (isForcedSceneLockActive()) return;
      if (!hasUnlockedMapIcon) return;
      if (mapFinalReportModal && mapFinalReportModal.classList.contains("open")) return;
      if (isMapModalOpen()) {
        closeMapModal();
        return;
      }
      openMapEnterConfirm();
  });
}

if (fullscreenBtn) {
  fullscreenBtn.addEventListener("click", () => {
    if (isDayTransitionRunning) return;
    void toggleFullscreenMode();
  });
}

if (mapCloseBtn) {
  mapCloseBtn.addEventListener("click", () => {
    if (isMapBattleFirstEntryTutorialRunning) return;
    if (!mapAbandonConfirm) return;
    mapAbandonConfirm.classList.add("open");
    mapAbandonConfirm.setAttribute("aria-hidden", "false");
  });
}

if (mapModal) {
  mapModal.addEventListener("click", () => {
    // No se cierra por click fuera.
  });
}

if (mapAbandonNoBtn) {
  mapAbandonNoBtn.addEventListener("click", () => {
    if (isMapBattleFirstEntryTutorialRunning) return;
    if (!mapAbandonConfirm) return;
    mapAbandonConfirm.classList.remove("open");
    mapAbandonConfirm.setAttribute("aria-hidden", "true");
  });
}

if (mapAbandonYesBtn) {
  mapAbandonYesBtn.addEventListener("click", () => {
    if (isMapBattleFirstEntryTutorialRunning) return;
    if (activeMapState) {
      activeMapState.finished = true;
      activeMapState.finalReportShown = true;
    }
    closeMapModal();
  });
}

if (mapEnterNoBtn) {
  mapEnterNoBtn.addEventListener("click", () => {
    closeMapEnterConfirm();
  });
}

if (mapEnterYesBtn) {
  mapEnterYesBtn.addEventListener("click", () => {
    closeMapEnterConfirm();
    openMapModal();
  });
}

if (mapFinalReportCloseBtn) {
  mapFinalReportCloseBtn.addEventListener("click", () => {
    closeMapFinalReport();
    closeMapModal();
  });
}

if (missionCloseBtn) {
  missionCloseBtn.addEventListener("click", () => {
    closeMissionModal();
  });
}

if (missionConfirmBtn) {
  missionConfirmBtn.addEventListener("click", () => {
    if (!activeMissionForDialog || !activeMapState) return;
    if (!Array.isArray(selectedMissionAssigneeIds) || selectedMissionAssigneeIds.length === 0 || isMapTimeExpired()) return;
    for (const memberId of selectedMissionAssigneeIds) {
      if (activeMapState.busyCharacterIds.has(memberId)) return;
    }
    activeMissionForDialog.assignedCharacterIds = [...selectedMissionAssigneeIds];
    activeMissionForDialog.state = "assigned";
    activeMissionForDialog.resolvesAt = Date.now() + 10_000;
    for (const memberId of selectedMissionAssigneeIds) {
      activeMapState.busyCharacterIds.add(memberId);
    }
    activeMapState.participatedCount += 1;
    closeMissionModal();
    renderMapRoster();
    renderMapMissions();
  });
}

if (missionModal) {
  missionModal.addEventListener("click", (event) => {
    if (event.target === missionModal) {
      closeMissionModal();
    }
  });
}

if (rouletteSpinBtn) {
  rouletteSpinBtn.addEventListener("click", () => {
    resolveMissionWithRoulette();
  });
}

if (rouletteModal) {
  rouletteModal.addEventListener("click", (event) => {
    if (event.target === rouletteModal) {
      closeRouletteModal();
    }
  });
}

if (armyModal) {
  armyModal.addEventListener("click", (event) => {
    if (event.target === armyModal) {
      closeArmyModal();
    }
  });
}

if (endDayIcon) {
  endDayIcon.addEventListener("click", () => {
    if (isDayTransitionRunning) return;
    if (isForcedSceneLockActive()) return;
    if (!isEndDayEnabled) return;
    isEndDayHighlighted = false;
    renderEndDayIconState();
    openDayEndModal();
  });
}

if (devDay13Btn) {
  devDay13Btn.addEventListener("click", () => {
    closeDayEndModal();
    closeDaySummaryModal();
    closeRegistroCharacterModal();
    closeRegistroModal();
    closeArmyModal();
    closeMapModal();
    closeHelenaOptionsModal();
    closeEliotOptionsModal();
    closeMercenaryModal();
    closeItemModal();
    closeSpeech();

    isIntroSequenceActive = false;
    if (!hasCompletedDay13MapIntro) {
      hasUnlockedMapIcon = false;
      isMapIconHighlighted = false;
      day13MissionStateByDay.delete(13);
      activeMapState = null;
    }

    currentDay = 13;
    renderDayBanner();
    applyDayState(currentDay);
    renderMapaIconState();
    setPendingSceneEntry(INITIAL_EVELYN_LEFT, getFondo1EvelynBottom());
    goToFondo1();
    if (!hasCompletedDay13MapIntro && !hasTriggeredDay13MapIntro) {
      void startDay13MapIntroEvent();
    }
    showRewardToast("Salto a día 13");
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
  if (event.key === "Escape" && isForcedSceneLockActive()) return;
  if (event.key === "Escape") {
    if (rouletteModal && rouletteModal.classList.contains("open")) {
      closeRouletteModal();
      return;
    }
    if (missionModal && missionModal.classList.contains("open")) {
      closeMissionModal();
      return;
    }
    if (isRegistroCharacterModalOpen()) {
      closeRegistroCharacterModal();
      return;
    }
    if (isMapModalOpen()) {
      closeMapModal();
      return;
    }
    if (isArmyModalOpen()) {
      closeArmyModal();
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
    if (eliotOptionsModal && eliotOptionsModal.classList.contains("open")) {
      closeEliotOptionsModal();
      return;
    }
    if (mercenaryModal && mercenaryModal.classList.contains("open")) return;
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
    if (tryAdvanceConversationContinueButton()) {
      event.preventDefault();
      return;
    }
    if (tryConfirmYesByEnter()) {
      event.preventDefault();
      return;
    }
    if (rouletteModal && rouletteModal.classList.contains("open")) {
      event.preventDefault();
      resolveMissionWithRoulette();
      return;
    }
    if (missionModal && missionModal.classList.contains("open")) return;
    if (isRegistroCharacterModalOpen()) return;
    if (isArmyModalOpen()) return;
    if (isMapModalOpen()) return;
    if (isRegistroModalOpen()) return;
    if (helenaOptionsModal && helenaOptionsModal.classList.contains("open")) return;
    if (eliotOptionsModal && eliotOptionsModal.classList.contains("open")) return;
    if (mercenaryModal && mercenaryModal.classList.contains("open")) return;
    if (daySummaryModal && daySummaryModal.classList.contains("open")) {
      event.preventDefault();
      requestCloseDaySummaryModal();
      return;
    }
    if (dayEndModal && dayEndModal.classList.contains("open")) {
      event.preventDefault();
      if (!isDayTransitionRunning) {
        void advanceToNextDay();
      }
      return;
    }
    if (itemModal && itemModal.classList.contains("open")) return;
    event.preventDefault();
    tryAdvanceDialogueFromUserInput();
  }
});

window.addEventListener("pointerdown", (event) => {
  if (isDayTransitionRunning) return;
  const target = event.target;
  if (
    isElementActuallyVisible(mapGuideSpeech)
    && mapGuideSpeechNextBtn
    && !mapGuideSpeechNextBtn.disabled
    && !mapGuideSpeech.contains(target)
  ) {
    event.preventDefault();
    event.stopPropagation();
    mapGuideSpeechNextBtn.click();
    return;
  }
  if (
    speech
    && speech.style.display !== "none"
    && speechNextBtn
    && speechNextBtn.style.display !== "none"
    && !speechNextBtn.disabled
    && !speech.contains(target)
  ) {
    event.preventDefault();
    event.stopPropagation();
    speechNextBtn.click();
    return;
  }
  if (missionModal && missionModal.classList.contains("open") && missionModal.contains(event.target)) return;
  if (rouletteModal && rouletteModal.classList.contains("open") && rouletteModal.contains(event.target)) return;
  if (registroCharacterModal && registroCharacterModal.classList.contains("open") && registroCharacterModal.contains(event.target)) return;
  if (armyModal && armyModal.classList.contains("open") && armyModal.contains(event.target)) return;
  if (mapModal && mapModal.classList.contains("open") && mapModal.contains(event.target)) return;
  if (registroModal && registroModal.classList.contains("open") && registroModal.contains(event.target)) return;
  if (daySummaryModal && daySummaryModal.classList.contains("open") && daySummaryModal.contains(event.target)) return;
  if (dayEndModal && dayEndModal.classList.contains("open") && dayEndModal.contains(event.target)) return;
  if (eliotOptionsModal && eliotOptionsModal.classList.contains("open") && eliotOptionsModal.contains(event.target)) return;
  if (mercenaryModal && mercenaryModal.classList.contains("open") && mercenaryModal.contains(event.target)) return;
  if (speech.style.display === "none") return;
  if (itemModal && itemModal.classList.contains("open") && itemModal.contains(event.target)) return;
  if (speech.contains(event.target)) return;
  event.preventDefault();
  event.stopPropagation();
  tryAdvanceDialogueFromUserInput();
});

window.addEventListener("resize", () => {
  layoutScene();
  if (speechAnchor && speech.style.display !== "none") {
    positionSpeechAt(speechAnchor);
  }
});
document.addEventListener("fullscreenchange", () => {
  renderFullscreenButtonState();
});
document.addEventListener("webkitfullscreenchange", () => {
  renderFullscreenButtonState();
});
if (scene && sceneViewport) {
  setEndDayEnabled(hasUnlockedEndDayByDarrenDays);
  renderRegistroEntries();
  renderRegistroIconState();
  renderEjercitoIconState();
  renderMapaIconState();
  renderFullscreenButtonState();
  renderArmyModalContent();
  renderMapMissionSpawnZone();
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
