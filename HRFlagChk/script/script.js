const flagMap = [
  /**
   A  B  C  D  E  F  G  H  H' I  J  K  L  L' M  N  O  P  Q  R  S  T  U  V  W
  **/
  [0, 0, 1, 0, 0, 3, 0, 0, 1, 1, 4, 0, 0, 1, 2, 3, 0, 3, 4, 2, 0, 4, 0, 1, 0],
  [1, 4, 2, 4, 4, 1, 3, 4, 2, 2, 0, 1, 4, 2, 3, 4, 3, 4, 3, 3, 1, 3, 1, 1, 1],
  [2, 2, 3, 2, 2, 2, 4, 2, 3, 3, 1, 0, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2],
  [3, 3, 4, 3, 3, 3, 3, 3, 4, 4, 2, 1, 4, 4, 3, 3, 3, 3, 0, 3, 3, 0, 3, 3, 3],
  [0, 0, 4, 4, 4, 0, 4, 0, 2, 2, 3, 2, 4, 2, 4, 4, 1, 4, 1, 1, 4, 1, 4, 4, 4],
  [1, 1, 1, 1, 0, 1, 0, 1, 3, 3, 2, 3, 1, 3, 0, 4, 0, 4, 2, 0, 4, 2, 1, 1, 0],
  [2, 0, 2, 1, 1, 2, 1, 0, 0, 0, 3, 4, 0, 0, 1, 2, 1, 2, 3, 1, 2, 3, 0, 0, 2],
  [0, 2, 1, 0, 0, 3, 2, 3, 1, 1, 4, 2, 3, 1, 0, 0, 2, 0, 4, 2, 0, 4, 1, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 4, 2, 3, 3, 0, 1, 3, 1, 2, 1, 3, 3, 1, 3, 0, 0, 0],
  [2, 1, 1, 1, 2, 1, 1, 1, 1, 3, 0, 4, 1, 2, 2, 2, 3, 2, 3, 3, 2, 3, 1, 1, 2],
  [3, 2, 2, 2, 3, 2, 2, 2, 2, 4, 1, 0, 2, 3, 3, 3, 4, 3, 2, 2, 3, 2, 2, 2, 3],
  [4, 3, 3, 3, 4, 3, 3, 3, 3, 1, 0, 1, 3, 4, 4, 4, 3, 4, 0, 3, 4, 0, 3, 3, 3],
  [0, 4, 4, 4, 0, 0, 0, 4, 0, 2, 3, 2, 4, 0, 4, 3, 1, 3, 1, 1, 3, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 3, 3, 2, 3, 1, 1, 4, 0, 2, 0, 2, 2, 0, 2, 1, 1, 0],
  [2, 0, 0, 2, 2, 2, 2, 2, 4, 4, 3, 4, 1, 2, 3, 1, 3, 1, 3, 3, 1, 3, 2, 2, 2],
  [2, 1, 2, 1, 2, 1, 3, 1, 0, 0, 0, 4, 3, 3, 0, 2, 4, 2, 0, 0, 2, 0, 3, 3, 3],
  [4, 2, 2, 2, 3, 2, 4, 2, 1, 1, 1, 0, 4, 4, 1, 3, 1, 3, 1, 1, 3, 1, 4, 4, 3],
  [4, 3, 3, 3, 4, 3, 4, 3, 2, 2, 0, 1, 4, 2, 2, 4, 2, 4, 2, 2, 4, 2, 3, 3, 3],
  [0, 0, 0, 4, 0, 0, 0, 4, 3, 3, 3, 2, 4, 3, 3, 0, 3, 0, 1, 3, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 0, 0, 4, 4, 4, 3, 1, 4, 0, 1, 0, 1, 2, 0, 1, 2, 0, 0, 0],
  [0, 0, 1, 2, 0, 0, 2, 0, 0, 0, 3, 4, 1, 0, 1, 2, 1, 2, 3, 1, 2, 3, 0, 0, 0],
]

const prizeMap = [
  [2, 5, 3, 0, 0, 4, 3],
  [1, 5, 2, 3, 4, 0, 1],
  [2, 5, 3, 2, 2, 1, 2],
  [3, 5, 4, 3, 3, 0, 3],
  [0, 5, 0, 0, 4, 3, 0],
  [1, 5, 1, 1, 0, 2, 1],
  [1, 2, 2, 1, 1, 3, 2],
  [2, 5, 1, 0, 0, 4, 3],
  [0, 2, 0, 3, 1, 2, 0],
  [1, 5, 3, 1, 2, 0, 1],
  [2, 5, 2, 2, 3, 1, 2],
  [3, 5, 3, 3, 4, 0, 3],
  [0, 5, 4, 0, 0, 3, 0],
  [1, 5, 0, 1, 0, 2, 1],
  [0, 2, 0, 2, 2, 3, 2],
  [1, 5, 2, 1, 3, 0, 1],
  [2, 5, 2, 2, 3, 1, 2],
  [3, 5, 3, 3, 4, 0, 3],
  [0, 5, 0, 4, 0, 3, 0],
  [0, 1, 1, 0, 0, 4, 1],
  [1, 2, 0, 1, 2, 3, 0],
]

const flagNames = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H1',
  'H2',
  'I',
  'J',
  'K',
  'L1',
  'L2',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
]

const prizeNames = [
  'ハズレ',
  'ハズレ',
  '🔁',
  '🔔',
  '🍉',
  '🍒',
  '🍵',
]

const reel = document.getElementById('reel');

const totalSymbols = 21;
const imageHeight = 1911;
const symbolHeight = imageHeight / totalSymbols;

const xDisplay = document.getElementById('x-value');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
let xValue = 0;

const bbFlagDisplay = document.getElementById('info1');
const rbFlagDisplay = document.getElementById('info2');
const prizeDisplay = document.getElementById('info3');

let startY = 0;
let isDragging = false;
let bgY = 0;
let dragStartBgY = 0;

let stopIndex = 20;
let snappedIndex = 21;

let reelCorrectionValue = 0;

let isCorrectReel = false;

reel.addEventListener('pointerdown', (e) => {
  startY = e.clientY;
  dragStartBgY = bgY;
  isDragging = true;
  reel.setPointerCapture(e.pointerId);
});

reel.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const dy = e.clientY - startY;
  bgY = dragStartBgY + dy;

  const loopHeight = symbolHeight * totalSymbols;
  bgY = (bgY % loopHeight + loopHeight) % loopHeight;

  reel.style.backgroundPosition = `0px ${bgY}px`;
});

reel.addEventListener('pointerup', () => {
  isDragging = false;

  snappedIndex = Math.round(bgY / symbolHeight);
  bgY = snappedIndex * symbolHeight;

  reel.style.transition = 'background-position 0.2s ease-out';
  reel.style.backgroundPosition = `0px ${bgY}px`;

  setTimeout(() => {
    reel.style.transition = '';
  }, 200);

  updateDisplay();
});

reel.addEventListener('pointercancel', () => {
  isDragging = false;
});

function getFlagNamesStr(reelIdx, xValue) {
  let arrIdx;
  if (isCorrectReel) {
    arrIdx = Math.abs(reelIdx - 21);
  } else {
    arrIdx = Math.abs(reelIdx - 21 - xValue);
  }

  if (arrIdx >= totalSymbols) arrIdx -= 21;
  const flagMapRowData = flagMap[arrIdx];
  const findBbFlagIdx = [];
  const findRbFlagIdx = [];

  for (let i = 0; i < flagMapRowData.length; i++) {
    let flagName = flagNames[i];
    if (flagMapRowData[i] === xValue) {
      if ((flagName === "S") || (flagName >= "A") && (flagName <= "Q")) {
        findBbFlagIdx.push(flagName);
      } else {
        findRbFlagIdx.push(flagName);
      }
    }
  }

  return [findBbFlagIdx, findRbFlagIdx];
}

function getPrizeNamesStr(reelIdx, xValue) {
  let arrIdx;
  if (isCorrectReel) {
    arrIdx = Math.abs(reelIdx - 21);
  } else {
    arrIdx = Math.abs(reelIdx - 21 - xValue);
  }

  if (arrIdx >= totalSymbols) arrIdx -= 21;
  const prizeMapRowData = prizeMap[arrIdx];
  const prizeFlagIdx = [];

  for (let i = 0; i < prizeMapRowData.length; i++) {
    if (prizeMapRowData[i] === xValue) {
      prizeFlagIdx.push(prizeNames[i]);
    }
  }

  return prizeFlagIdx;
}

function updateDisplay() {
  xDisplay.textContent = xValue;
  if (snappedIndex === 0) snappedIndex = 21;
  stopIndex = snappedIndex - 1;
  if (stopIndex === 0) stopIndex = 21;
  const findData = getFlagNamesStr(stopIndex, xValue);
  const findBbFlagIdx = findData[0];
  const findRbFlagIdx = findData[1];
  const findPrizeIdx = getPrizeNamesStr(stopIndex, xValue);
  if (findBbFlagIdx.length > 0) {
    bbFlagDisplay.textContent = findBbFlagIdx.join(", ");
  } else {
    bbFlagDisplay.textContent = "なし";
  }
  if (findRbFlagIdx.length > 0) {
    rbFlagDisplay.textContent = findRbFlagIdx.join(", ");
  } else {
    rbFlagDisplay.textContent = "なし";
  }
  if (findPrizeIdx.length > 0) {
    prizeDisplay.textContent = findPrizeIdx.join(", ");
  } else {
    prizeDisplay.textContent = "なし (ボナ1確)";
  }
}

increaseBtn.addEventListener('click', () => {
  if (xValue < 4) {
    xValue++;

  } else {
    xValue = 0;
  }
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  if (xValue > 0) {
    xValue--;
  } else {
    xValue = 4;
  }
  updateDisplay();
});

const toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    isCorrectReel = true;
  } else {
    isCorrectReel = false;
  }
  updateDisplay();
});

updateDisplay();
