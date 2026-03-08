const scene = document.getElementById("scene");
const risko = document.getElementById("risko");
const gaston = document.getElementById("gaston");
const bateWorld = document.getElementById("bate-world");
const bateItem = document.getElementById("bate-item");
const speech = document.getElementById("speech");
const inventory = document.getElementById("inventory");

const VALID_DROP_ZONES = [
  { x1: 0.45, y1: 0.33, x2: 0.58, y2: 0.58 }
];

let hasBate = false;

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

function moveRiskoTo(targetX, targetY) {
  const sceneRect = scene.getBoundingClientRect();
  const riskoRect = risko.getBoundingClientRect();

  const clampedX = Math.min(
    sceneRect.width - riskoRect.width,
    Math.max(0, targetX - sceneRect.left - riskoRect.width * 0.5)
  );
  const clampedY = Math.min(
    sceneRect.height - riskoRect.height,
    Math.max(0, targetY - sceneRect.top - riskoRect.height * 0.65)
  );

  risko.style.left = `${clampedX}px`;
  risko.style.top = `${clampedY}px`;
  risko.style.bottom = "auto";
}

function centerOf(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

function showSpeechAt(el, text) {
  const targetRect = el.getBoundingClientRect();
  const sceneRect = scene.getBoundingClientRect();

  speech.textContent = text;
  speech.style.left = `${targetRect.left - sceneRect.left - 8}px`;
  speech.style.top = `${targetRect.top - sceneRect.top - 80}px`;
  speech.style.display = "block";

  window.clearTimeout(showSpeechAt._timer);
  showSpeechAt._timer = window.setTimeout(() => {
    speech.style.display = "none";
  }, 2200);
}

function pickupBate() {
  hasBate = true;
  bateWorld.style.display = "none";
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
  const { x, y } = centerOf(gaston);
  moveRiskoTo(x, y);
  showSpeechAt(gaston, "PRUEBA");
});

bateWorld.addEventListener("click", () => {
  const { x, y } = centerOf(bateWorld);
  moveRiskoTo(x, y);
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
  moveRiskoTo(clientX, clientY);

  if (!isValidDrop(clientX, clientY)) {
    buzz();
  }
});
