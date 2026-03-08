const scene = document.getElementById("scene");
const risko = document.getElementById("risko");
const gaston = document.getElementById("gaston");
const bateWorld = document.getElementById("bate-world");
const bateItem = document.getElementById("bate-item");
const speech = document.getElementById("speech");
const inventory = document.getElementById("inventory");
const inventorySlots = [...document.querySelectorAll(".inventory-slot")];
const GASTON_GAP = 12;

const VALID_DROP_ZONES = [
  { x1: 0.45, y1: 0.33, x2: 0.58, y2: 0.58 }
];

let hasBate = false;
let speechAnchor = null;

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

addFallbackOnError("background", "fondo1.png no encontrado");
addFallbackOnError("bate-world", "bate.png no encontrado");
addFallbackOnError("bate-item", "bate.png no encontrado");

function setRiskoFacing(targetX) {
  const riskoRect = risko.getBoundingClientRect();
  const currentCenterX = riskoRect.left + riskoRect.width / 2;
  risko.style.transform = targetX >= currentCenterX ? "scaleX(1)" : "scaleX(-1)";
}

function getWalkLineTop(sceneRect, riskoRect) {
  const gastonRect = gaston.getBoundingClientRect();
  const walkLineFeetY = gastonRect.bottom;
  return Math.min(
    sceneRect.height - riskoRect.height,
    Math.max(0, walkLineFeetY - sceneRect.top - riskoRect.height)
  );
}

function moveRiskoTo(targetX) {
  const sceneRect = scene.getBoundingClientRect();
  const riskoRect = risko.getBoundingClientRect();
  const gastonRect = gaston.getBoundingClientRect();
  const gastonCenterX = gastonRect.left + gastonRect.width / 2;

  setRiskoFacing(targetX);

  let clampedX = Math.min(
    sceneRect.width - riskoRect.width,
    Math.max(0, targetX - sceneRect.left - riskoRect.width * 0.5)
  );
  const clampedY = getWalkLineTop(sceneRect, riskoRect);

  const candidateLeft = clampedX + sceneRect.left;
  const candidateRight = candidateLeft + riskoRect.width;
  const blockedLeft = gastonRect.left - GASTON_GAP;
  const blockedRight = gastonRect.right + GASTON_GAP;
  const overlapsGastonHorizontally = candidateRight > blockedLeft && candidateLeft < blockedRight;

  if (overlapsGastonHorizontally) {
    const sideX = targetX < gastonCenterX
      ? gastonRect.left - riskoRect.width / 2 - GASTON_GAP
      : gastonRect.right + riskoRect.width / 2 + GASTON_GAP;
    clampedX = Math.min(
      sceneRect.width - riskoRect.width,
      Math.max(0, sideX - sceneRect.left - riskoRect.width * 0.5)
    );
  }

  risko.style.left = `${clampedX}px`;
  risko.style.top = `${clampedY}px`;
  risko.style.bottom = "auto";
}

function moveRiskoInFrontOf(el) {
  const targetRect = el.getBoundingClientRect();
  const riskoRect = risko.getBoundingClientRect();
  const riskoCenter = riskoRect.left + riskoRect.width / 2;
  const targetCenter = targetRect.left + targetRect.width / 2;

  const x = riskoCenter < targetCenter
    ? targetRect.left - riskoRect.width / 2 - GASTON_GAP
    : targetRect.right + riskoRect.width / 2 + GASTON_GAP;
  moveRiskoTo(x);
}

function showSpeechAt(el, text) {
  speechAnchor = el;
  const targetRect = el.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();

  speech.textContent = text;
  speech.style.left = `${targetRect.left - sceneRect.left - 8}px`;
  speech.style.top = `${targetRect.top - sceneRect.top - 80}px`;
  speech.style.display = "block";
}

function pickupBate() {
  hasBate = true;
  bateWorld.style.display = "none";
  const firstEmptySlot = inventorySlots.find((slot) => !slot.querySelector(".inventory-item"));
  if (firstEmptySlot) firstEmptySlot.appendChild(bateItem);
  bateItem.style.display = "block";
}

function buzz() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sawtooth";
  osc.frequency.value = 130;
  gain.gain.value = 0.06;

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.18);

  inventory.classList.remove("buzz");
  void inventory.offsetWidth;
  inventory.classList.add("buzz");

  window.setTimeout(() => {
    inventory.classList.remove("buzz");
    ctx.close();
  }, 260);
}

function isValidDrop(clientX, clientY) {
  const rect = scene.getBoundingClientRect();
  const nx = (clientX - rect.left) / rect.width;
  const ny = (clientY - rect.top) / rect.height;

  return VALID_DROP_ZONES.some(
    (z) => nx >= z.x1 && nx <= z.x2 && ny >= z.y1 && ny <= z.y2
  );
}

gaston.addEventListener("click", () => {
  moveRiskoInFrontOf(gaston);
  showSpeechAt(gaston, "PRUEBA");
});

bateWorld.addEventListener("click", () => {
  moveRiskoInFrontOf(bateWorld);
  window.setTimeout(() => {
    pickupBate();
  }, 900);
});

bateItem.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "bate");
  event.dataTransfer.effectAllowed = "move";
});

scene.addEventListener("dragover", (event) => {
  if (!hasBate) return;
  event.preventDefault();
});

scene.addEventListener("drop", (event) => {
  if (!hasBate) return;
  event.preventDefault();

  const { clientX, clientY } = event;
  moveRiskoTo(clientX);

  if (!isValidDrop(clientX, clientY)) {
    buzz();
  }
});

speech.addEventListener("click", () => {
  speech.style.display = "none";
  speechAnchor = null;
});

window.addEventListener("resize", () => {
  const riskoRect = risko.getBoundingClientRect();
  moveRiskoTo(riskoRect.left + riskoRect.width / 2);
  if (speechAnchor && speech.style.display !== "none") {
    showSpeechAt(speechAnchor, speech.textContent);
  }
});

window.addEventListener("load", () => {
  const riskoRect = risko.getBoundingClientRect();
  moveRiskoTo(riskoRect.left + riskoRect.width / 2);
});
