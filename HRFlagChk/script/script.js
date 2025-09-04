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

const flagMapCenter = [
  /**
   A  B  C  D  E  F  G  H  H' I  J  K  L  L' M  N  O  P  Q  R  S  T  U  V  W
  **/
  [1, 2, 2, 2, 2, 0, 2, 2, 1, 2, 0, 1, 2, 1, 1, 3, 2, 3, 2, 0, 0, 0, 2, 2, 2],
  [2, 3, 3, 3, 3, 1, 3, 3, 2, 0, 1, 2, 0, 2, 2, 4, 3, 4, 3, 1, 1, 1, 0, 0, 0],
  [3, 0, 0, 0, 0, 2, 4, 0, 3, 1, 2, 3, 1, 3, 3, 2, 4, 2, 4, 2, 2, 2, 1, 1, 1],
  [4, 1, 0, 1, 1, 3, 2, 0, 4, 2, 3, 4, 2, 4, 4, 3, 0, 3, 0, 3, 3, 3, 2, 2, 2],
  [0, 2, 1, 2, 2, 4, 3, 1, 0, 3, 4, 0, 3, 0, 0, 4, 1, 4, 1, 4, 4, 4, 3, 3, 3],
  [1, 3, 2, 3, 3, 0, 4, 2, 1, 4, 0, 1, 4, 1, 1, 0, 2, 0, 2, 0, 0, 0, 4, 4, 4],
  [2, 4, 3, 4, 4, 1, 0, 3, 2, 0, 1, 2, 4, 2, 2, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0],
  [3, 1, 4, 1, 1, 2, 1, 4, 3, 1, 2, 0, 1, 3, 3, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1],
  [1, 2, 2, 2, 2, 0, 2, 2, 1, 2, 0, 1, 2, 1, 1, 3, 2, 3, 2, 0, 0, 0, 2, 2, 2],
  [2, 3, 3, 3, 3, 1, 3, 3, 2, 0, 1, 2, 0, 2, 2, 4, 3, 4, 3, 1, 1, 1, 0, 0, 0],
  [3, 0, 0, 0, 0, 2, 4, 0, 3, 1, 2, 3, 1, 3, 3, 2, 4, 2, 4, 2, 2, 2, 1, 1, 1],
  [4, 1, 1, 1, 1, 3, 2, 1, 4, 2, 3, 4, 2, 4, 4, 3, 0, 3, 0, 3, 3, 3, 2, 2, 2],
  [0, 2, 2, 2, 2, 4, 3, 2, 0, 3, 4, 0, 3, 0, 0, 4, 1, 4, 1, 4, 4, 4, 3, 3, 3],
  [1, 3, 3, 3, 3, 0, 4, 3, 1, 4, 0, 1, 4, 1, 1, 0, 2, 0, 2, 0, 0, 0, 4, 4, 4],
  [2, 4, 4, 4, 4, 1, 0, 4, 2, 0, 1, 2, 0, 2, 2, 1, 3, 1, 3, 1, 1, 1, 0, 0, 0],
  [3, 4, 4, 4, 0, 2, 1, 4, 0, 1, 2, 3, 1, 0, 0, 2, 4, 2, 4, 2, 2, 2, 1, 1, 1],
  [4, 0, 0, 0, 1, 3, 2, 0, 1, 2, 3, 4, 2, 1, 1, 3, 0, 3, 0, 3, 3, 3, 2, 2, 2],
  [0, 1, 1, 1, 2, 4, 3, 1, 2, 3, 4, 0, 3, 2, 2, 4, 1, 4, 1, 4, 4, 4, 3, 3, 3],
  [1, 2, 2, 2, 3, 0, 4, 2, 3, 4, 0, 1, 4, 3, 3, 0, 2, 0, 2, 0, 0, 0, 4, 4, 4],
  [2, 3, 3, 3, 4, 1, 0, 3, 4, 0, 1, 2, 3, 4, 4, 1, 3, 1, 3, 1, 1, 1, 0, 0, 0],
  [0, 4, 4, 4, 1, 2, 1, 4, 0, 1, 2, 0, 4, 0, 0, 2, 4, 2, 4, 2, 2, 2, 1, 1, 1],
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

const prizeMapCenter = [
  [1, 1, 1, 2, 0, 2, 2, 0, 0],
  [2, 2, 2, 3, 1, 0, 0, 1, 1],
  [3, 3, 3, 4, 2, 1, 0, 2, 2],
  [4, 4, 0, 0, 3, 2, 1, 3, 3],
  [0, 0, 1, 1, 4, 3, 2, 4, 4],
  [1, 1, 2, 2, 0, 4, 3, 0, 0],
  [2, 2, 5, 0, 1, 4, 4, 1, 1],
  [0, 0, 5, 1, 2, 1, 1, 2, 2],
  [1, 1, 1, 2, 0, 2, 2, 0, 0],
  [2, 2, 2, 3, 1, 0, 0, 1, 1],
  [3, 3, 3, 4, 2, 0, 0, 2, 2],
  [4, 4, 4, 0, 3, 1, 1, 3, 3],
  [0, 0, 0, 1, 4, 2, 2, 4, 4],
  [1, 1, 1, 2, 0, 3, 3, 0, 0],
  [2, 2, 2, 3, 1, 0, 4, 1, 1],
  [3, 3, 3, 4, 2, 1, 0, 2, 2],
  [4, 4, 4, 0, 3, 2, 1, 3, 3],
  [0, 0, 0, 1, 4, 3, 2, 4, 4],
  [1, 1, 1, 2, 0, 4, 3, 0, 0],
  [2, 2, 2, 0, 1, 4, 4, 1, 1],
  [0, 0, 0, 1, 2, 1, 1, 2, 2],
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

const flagNums = [
  [16, 16, 16, 16, 16, 16],
  [8, 8, 8, 17, 17, 17],
  [17, 18, 21, 22, 23, 25],
  [17, 18, 20, 22, 24, 26],
  [44, 45, 47, 48, 50, 52],
  [20, 20, 20, 20, 20, 20],
  [30, 31, 32, 33, 35, 36],
  [20, 20, 20, 20, 20, 20],
  [4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4],
  [13, 13, 13, 13, 13, 13],
  [4, 4, 4, 4, 4, 4],
  [20, 20, 20, 20, 20, 20],
  [4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4],
  [4, 4, 6, 6, 8, 12],
  [7, 7, 7, 7, 7, 7],
  [4, 4, 4, 4, 4, 4],
  [7, 8, 9, 11, 12, 13],
  [10, 10, 10, 10, 10, 10],
  [4, 4, 4, 4, 4, 4],
  [10, 11, 12, 14, 15, 18],
  [23, 23, 23, 23, 23, 23],
  [20, 20, 20, 20, 20, 20],
  [63, 66, 71, 75, 80, 84]
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

const prizeNamesCenter = [
  'ハズレ',
  '🔁A',
  '🔁A2',
  '🔁B',
  '🔔',
  '🍉A',
  '🍉B',
  '🍒',
  '🍵',
]

const reel = document.getElementById('reel');
reel.style.setProperty('--reel-image', "url('../img/reel.png')");

const totalSymbols = 21;
const imageHeight = 1911;
const symbolHeight = imageHeight / totalSymbols;

const xDisplay = document.getElementById('x-value');
const xIncreaseBtn = document.getElementById('x-increase-btn');
const xDecreaseBtn = document.getElementById('x-decrease-btn');
let xValue = 0;

const prizeDisplay = document.getElementById('prize-display');

const bbFlagContainer = document.getElementById("bb-flag-container");
const rbFlagContainer = document.getElementById("rb-flag-container");

const bbFlagValueDisplay = document.getElementById('bb-flag-value-label');
const rbFlagValueDisplay = document.getElementById('rb-flag-value-label');

let startY = 0;
let isDragging = false;
let bgY = 0;
let dragStartBgY = 0;

let dispedReelTopIndex = totalSymbols;
let pressedReelIndex = dispedReelTopIndex - 1;

let isCorrectReel = false;
let isOrderCenter = false;

const sDisplay = document.getElementById('s-value');
const sIncreaseBtn = document.getElementById('s-increase-btn');
const sDecreaseBtn = document.getElementById('s-decrease-btn');
let sValue = 1;

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

  reel.style.backgroundPosition = `0px ${bgY + 25}px`;
});

reel.addEventListener('pointerup', () => {
  isDragging = false;

  dispedReelTopIndex = Math.round(bgY / symbolHeight);
  bgY = dispedReelTopIndex * symbolHeight;

  reel.style.transition = 'background-position 0.2s ease-out';
  reel.style.backgroundPosition = `0px ${bgY + 25}px`;

  setTimeout(() => {
    reel.style.transition = '';
  }, 200);

  updateDisplay();
});

reel.addEventListener('pointercancel', () => {
  isDragging = false;
});

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function createFlagInfoDiv(parentElem, reelIdx, key, value) {
  const badge = document.createElement("div");
  badge.className = "badge";

  const keyEl = document.createElement("div");
  keyEl.className = "key";
  if (key) {
    keyEl.textContent = key;
  } else {
    keyEl.textContent = "-";
  }

  switch (key) {
    case 'N':
    case 'P':
    case 'S':
      keyEl.style.backgroundColor = '#9E8622';
      break;
    case 'J':
    case 'K':
    case 'M':
    case 'O':
    case 'Q':
    case 'R':
    case 'T':
      keyEl.style.backgroundColor = '#3B6AA0';
      break;
    case 'H2':
      if (((reelIdx >= 1) && (reelIdx <= 8)) || ((reelIdx >= 14) && (reelIdx <= 21))) {
        keyEl.style.backgroundColor = '#A62828';
      }
      break;
    case 'L2':
      if (((reelIdx >= 1) && (reelIdx <= 4)) || ((reelIdx >= 14) && (reelIdx <= 21))) {
        keyEl.style.backgroundColor = '#A62828';
      }
      break;
    case 'I':
      keyEl.style.backgroundColor = '#A62828';
      break;
  }

  const valueEl = document.createElement("div");
  valueEl.className = "value";

  if (value) {
    valueEl.textContent = value + "%";
  } else {
    valueEl.textContent = "-";
  }

  badge.appendChild(keyEl);
  badge.appendChild(valueEl);
  if (!key || !value) {
    badge.style.visibility = 'hidden';
  }

  parentElem.appendChild(badge);
}

function getFlagData(reelIdx, xValue) {
  let arrIdx = Math.abs(reelIdx - totalSymbols);

  if (arrIdx >= totalSymbols) arrIdx -= totalSymbols;

  let flagMapRowData;
  if (isOrderCenter) {
    flagMapRowData = flagMapCenter[arrIdx];
  } else {
    flagMapRowData = flagMap[arrIdx];
  }

  const findBbFlagNames = [];
  const findRbFlagNames = [];
  const findBbFlagNums = [];
  const findRbFlagNums = [];

  for (let i = 0; i < flagMapRowData.length; i++) {
    let flagName = flagNames[i];
    let flagNum = flagNums[i][sValue - 1];
    if (flagMapRowData[i] === xValue) {
      if ((flagName === "S") || (flagName >= "A") && (flagName <= "Q")) {
        findBbFlagNames.push(flagName);
        findBbFlagNums.push(flagNum);
      } else {
        findRbFlagNames.push(flagName);
        findRbFlagNums.push(flagNum);
      }
    }
  }

  return [findBbFlagNames, findRbFlagNames, findBbFlagNums, findRbFlagNums];
}

function getPrizeNamesStr(reelIdx, xValue) {
  let arrIdx = Math.abs(reelIdx - totalSymbols);

  if (arrIdx >= totalSymbols) arrIdx -= totalSymbols;

  let prizeMapRowData;
  if (isOrderCenter) {
    prizeMapRowData = prizeMapCenter[arrIdx];
  } else {
    prizeMapRowData = prizeMap[arrIdx];
  }
  const prizeFlagNames = [];

  for (let i = 0; i < prizeMapRowData.length; i++) {
    if (prizeMapRowData[i] === xValue) {
      if (isOrderCenter) {
        prizeFlagNames.push(prizeNamesCenter[i]);
      } else {
        prizeFlagNames.push(prizeNames[i]);
      }
    }
  }

  return prizeFlagNames;
}

function updateDisplay() {
  xDisplay.textContent = xValue;
  sDisplay.textContent = sValue;
  if (dispedReelTopIndex === 0) dispedReelTopIndex = totalSymbols;
  if (isCorrectReel) {
    pressedReelIndex = dispedReelTopIndex - 1;
  } else {
    pressedReelIndex = dispedReelTopIndex - 1 - xValue;
  }
  if (pressedReelIndex < 1) pressedReelIndex += totalSymbols;

  const findData = getFlagData(pressedReelIndex, xValue);
  const findBbFlagNames = findData[0];
  const findRbFlagNames = findData[1];
  const findBbFlagNums = findData[2];
  const findRbFlagNums = findData[3];
  const findPrizeNames = getPrizeNamesStr(pressedReelIndex, xValue);

  // init.
  bbFlagContainer.innerHTML = "";
  rbFlagContainer.innerHTML = "";

  const totalBbFlagNum = sumArray(findBbFlagNums);
  const totalRbFlagNum = sumArray(findRbFlagNums);
  const totalFlagNum = totalBbFlagNum + totalRbFlagNum;

  if (findBbFlagNames.length > 0) {
    for (let i = 0; i < findBbFlagNames.length; i++) {
      createFlagInfoDiv(bbFlagContainer, pressedReelIndex, findBbFlagNames[i], ((findBbFlagNums[i] / totalFlagNum) * 100).toFixed(0));
    }
    bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(bbFlagContainer, null, null, null);
    bbFlagValueDisplay.textContent = "-";
  }
  if (findRbFlagNames.length > 0) {
    for (let i = 0; i < findRbFlagNames.length; i++) {
      createFlagInfoDiv(rbFlagContainer, pressedReelIndex, findRbFlagNames[i], ((findRbFlagNums[i] / totalFlagNum) * 100).toFixed(0));
    }
    rbFlagValueDisplay.textContent = "1/" + (65536 / totalRbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(rbFlagContainer, null, null, null);
    rbFlagValueDisplay.textContent = "-";
  }
  if (findPrizeNames.length > 0) {
    prizeDisplay.textContent = findPrizeNames.join(", ");
  } else {
    prizeDisplay.textContent = "なし";
  }
}

xIncreaseBtn.addEventListener('click', () => {
  if (xValue < 4) {
    xValue++;
  } else {
    xValue = 0;
  }
  updateDisplay();
});

xDecreaseBtn.addEventListener('click', () => {
  if (xValue > 0) {
    xValue--;
  } else {
    xValue = 4;
  }
  updateDisplay();
});

sIncreaseBtn.addEventListener('click', () => {
  if (sValue < 6) {
    sValue++;
  } else {
    sValue = 1;
  }
  updateDisplay();
});

sDecreaseBtn.addEventListener('click', () => {
  if (sValue > 1) {
    sValue--;
  } else {
    sValue = 6;
  }
  updateDisplay();
});

const toggleCorrectReel = document.getElementById('toggle-correct-reel');
toggleCorrectReel.addEventListener('change', () => {
  if (toggleCorrectReel.checked) {
    isCorrectReel = true;
  } else {
    isCorrectReel = false;
  }
  updateDisplay();
});

const togglePressOrder = document.getElementById('toggle-press-order');
togglePressOrder.addEventListener('change', () => {
  if (togglePressOrder.checked) {
    isOrderCenter = true;
    reel.style.setProperty('--reel-image', "url('../img/reel_c.png')");
  } else {
    isOrderCenter = false;
    reel.style.setProperty('--reel-image', "url('../img/reel.png')");
  }
  updateDisplay();
});

updateDisplay();