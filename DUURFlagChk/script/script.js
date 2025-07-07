const reachMap = [
  [2, 1, 1, 2, 3, 3, 1, 1, 2, 2, 0, 1, 2, 1, 0, 1, 1],
  [1, 2, 2, 2, 3, 4, 2, 3, 3, 1, 1, 2, 2, 3, 1, 2, 2],
  [4, 3, 3, 4, 4, 4, 3, 4, 4, 4, 2, 3, 4, 3, 2, 3, 3],
  [3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4, 4, 3, 4, 4],
  [0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0],
  [0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 4, 1, 1],
  [0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 1, 0, 1, 0, 4, 0, 0],
  [1, 2, 2, 1, 2, 3, 0, 1, 2, 1, 0, 1, 1, 1, 0, 1, 1],
  [0, 2, 2, 2, 3, 4, 0, 3, 0, 0, 0, 0, 2, 4, 1, 2, 2],
  [1, 3, 3, 3, 3, 4, 1, 3, 1, 1, 1, 1, 3, 0, 2, 3, 3],
  [2, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0, 0, 3, 1, 4],
  [0, 0, 0, 0, 1, 1, 0, 0, 3, 0, 3, 0, 0, 0, 2, 4, 4],
  [1, 1, 1, 0, 0, 2, 0, 0, 1, 1, 4, 0, 0, 0, 4, 3, 0],
  [0, 2, 2, 1, 3, 3, 0, 2, 1, 0, 0, 0, 1, 1, 4, 4, 1],
  [2, 3, 3, 2, 2, 4, 1, 2, 3, 2, 1, 1, 2, 2, 1, 2, 2],
  [3, 3, 3, 4, 4, 4, 2, 4, 4, 3, 2, 2, 4, 3, 2, 3, 3],
  [3, 4, 4, 4, 4, 4, 3, 4, 4, 3, 3, 3, 4, 4, 3, 4, 4],
  [4, 0, 0, 0, 4, 4, 0, 0, 4, 4, 0, 0, 0, 2, 4, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 4, 1, 1],
  [1, 1, 1, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 1, 4, 0, 0],
]

const flagMap = [
  [1, 5, 1, 1, 2, 4, 4, 2, 0],
  [2, 5, 2, 3, 2, 0, 0, 1, 3],
  [3, 4, 3, 4, 4, 1, 1, 4, 4],
  [4, 5, 4, 4, 4, 0, 0, 3, 3],
  [0, 5, 4, 0, 0, 1, 1, 0, 0],
  [0, 5, 0, 0, 0, 2, 2, 0, 0],
  [0, 5, 1, 0, 1, 3, 3, 0, 0],
  [1, 5, 0, 1, 2, 4, 4, 1, 2],
  [0, 1, 0, 3, 2, 0, 0, 0, 0],
  [1, 5, 2, 3, 3, 1, 1, 1, 1],
  [2, 5, 2, 0, 0, 2, 2, 2, 2],
  [0, 5, 3, 0, 0, 3, 3, 0, 3],
  [1, 5, 4, 0, 1, 4, 4, 1, 1],
  [0, 5, 0, 2, 1, 0, 0, 0, 1],
  [2, 5, 1, 2, 3, 0, 0, 2, 3],
  [2, 5, 2, 4, 3, 1, 1, 3, 4],
  [3, 5, 3, 4, 4, 0, 0, 3, 4],
  [0, 5, 0, 0, 0, 1, 1, 4, 4],
  [0, 1, 1, 0, 1, 2, 2, 0, 0],
  [0, 5, 0, 0, 1, 3, 3, 1, 1],
]

const prizeMap = [
  [1, 5, 1, 1, 4, 2, 0],
  [2, 5, 2, 3, 0, 1, 3],
  [3, 4, 3, 4, 1, 4, 4],
  [4, 5, 4, 4, 0, 3, 3],
  [0, 5, 4, 0, 1, 0, 0],
  [0, 5, 0, 0, 2, 0, 0],
  [0, 5, 1, 0, 3, 0, 0],
  [1, 5, 0, 1, 4, 1, 2],
  [0, 1, 0, 3, 0, 0, 0],
  [1, 5, 2, 3, 1, 1, 1],
  [2, 5, 2, 0, 2, 2, 2],
  [0, 5, 3, 0, 3, 0, 3],
  [1, 5, 4, 0, 4, 1, 1],
  [0, 5, 0, 2, 0, 0, 1],
  [2, 5, 1, 2, 0, 2, 3],
  [2, 5, 2, 4, 1, 3, 4],
  [3, 5, 3, 4, 0, 3, 4],
  [0, 5, 0, 0, 1, 4, 4],
  [0, 1, 1, 0, 2, 0, 0],
  [0, 5, 0, 0, 3, 1, 1],
]

const reachNames = [
  'T1',
  'T2',
  'T3',
  'A1',
  'A2',
  'B1',
  'B2',
  'B3',
  'C1',
  'C2',
  'C3',
  'D1',
  'D2',
  'E',
  'F',
  'G1',
  'G2',
]

const flagNames = [
  'A',
  'A',
  'B',
  'C1',
  'C2',
  'D1',
  'D2',
  'E1',
  'E2',
]

const prizeNames = [
  'ハズレ',
  'ハズレ',
  '🔁',
  '共通⭐️',
  '🍒',
  '🍉A',
  '🍉B',
]

const reachNums = [
  [19, 19, 19, 19],
  [49, 50, 61, 77],
  [4, 5, 8, 12],
  [16, 16, 16, 16],
  [4, 5, 8, 12],
  [19, 19, 19, 19],
  [16, 16, 16, 16],
  [16, 16, 16, 16],
  [6, 6, 6, 6],
  [22, 22, 22, 22],
  [16, 16, 16, 16],
  [19, 19, 19, 19],
  [28, 29, 36, 42],
  [8, 8, 8, 8],
  [4, 4, 4, 4],
  [10, 10, 10, 10],
  [20, 21, 24, 28],
]

const flagNums = [
  [23, 23, 23, 23],
  [23, 23, 23, 23],
  [11, 11, 11, 11],
  [6, 6, 6, 6],
  [6, 6, 6, 6],
  [1, 1, 1, 1],
  [20, 22, 28, 34],
  [8, 8, 8, 8],
  [8, 8, 8, 8],
]

const uniqueBbReachNames = [
  'T3',
  'A2'
]

const bbReachNames = [
  'T1',
  'A1',
  'B1',
  'C1',
  'E',
  'F',
  'G1'
]

const bbFlagNames = [
  'E1',
  'E2',
]

const settings = [
  1,
  2,
  5,
  6,
]

const type = Object.freeze({
  reach: 0,
  flag: 1,
})

const reel = document.getElementById('reel');

const totalSymbols = 20;
const imageHeight = 1662;
const symbolHeight = imageHeight / totalSymbols;

const xDisplay = document.getElementById('x-value');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
let xValue = 0;

const prizeDisplay = document.getElementById('prize-display');

const reachContainer = document.getElementById("reach-container");
const flagContainer = document.getElementById("flag-container");

const bbFlagValueDisplay = document.getElementById('bb-flag-value-label');
const rbFlagValueDisplay = document.getElementById('rb-flag-value-label');

const sDisplay = document.getElementById('s-value');
const sIncreaseBtn = document.getElementById('s-increase-btn');
const sDecreaseBtn = document.getElementById('s-decrease-btn');
let sValue = 1;

let startY = 0;
let isDragging = false;
let bgY = 0;
let dragStartBgY = 0;

let dispedReelTopIndex = totalSymbols;
let pressedReelIndex = dispedReelTopIndex - 1;

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

  reel.style.backgroundPosition = `0px ${bgY + 22}px`;
});

reel.addEventListener('pointerup', () => {
  isDragging = false;

  dispedReelTopIndex = Math.round(bgY / symbolHeight);
  bgY = dispedReelTopIndex * symbolHeight;

  reel.style.transition = 'background-position 0.2s ease-out';
  reel.style.backgroundPosition = `0px ${bgY + 22}px`;

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

function createFlagInfoDiv(parentElem, t, key, value) {
  const badge = document.createElement("div");
  badge.className = "badge";

  const keyEl = document.createElement("div");
  keyEl.className = "key";
  if (key) {
    keyEl.textContent = key;
  } else {
    keyEl.textContent = "-";
  }

  const valueEl = document.createElement("div");
  valueEl.className = "value";

  if (value) {
    valueEl.textContent = value + "%";
  } else {
    valueEl.textContent = "-";
  }

  if ((t == type.reach) && uniqueBbReachNames.includes(key)) {
    keyEl.style.backgroundColor = '#9400d3';
  } else if ((t == type.reach) && bbReachNames.includes(key)) {
    keyEl.style.backgroundColor = '#A62828';
  } else if ((t == type.flag) && bbFlagNames.includes(key)) {
    keyEl.style.backgroundColor = '#A62828';
  }

  badge.appendChild(keyEl);
  badge.appendChild(valueEl);
  if (!key) {
    badge.style.visibility = 'hidden';
  }

  parentElem.appendChild(badge);
}

function getReachData(reelIdx, xValue) {
  let arrIdx = Math.abs(reelIdx - totalSymbols);

  if (arrIdx >= totalSymbols) arrIdx -= totalSymbols;
  const reachMapRowData = reachMap[arrIdx];
  const findReachNames = [];
  const findReachNums = [];

  for (let i = 0; i < reachMapRowData.length; i++) {
    let reachName = reachNames[i];
    let reachNum = reachNums[i][sValue - 1];;
    if (reachMapRowData[i] === xValue) {
      findReachNames.push(reachName);
      findReachNums.push(reachNum);
    }
  }

  return [findReachNames, findReachNums];
}

function getFlagData(reelIdx, xValue) {
  let arrIdx = Math.abs(reelIdx - totalSymbols);

  if (arrIdx >= totalSymbols) arrIdx -= totalSymbols;
  const flagMapRowData = flagMap[arrIdx];
  const findFlagNames = [];
  const findFlagNums = [];

  for (let i = 0; i < flagMapRowData.length; i++) {
    let flagName = flagNames[i];
    let flagNum = flagNums[i][sValue - 1];
    if (flagMapRowData[i] === xValue) {
      findFlagNames.push(flagName);
      findFlagNums.push(flagNum);
    }
  }

  return [findFlagNames, findFlagNums];
}

function getPrizeNamesStr(reelIdx, xValue) {
  let arrIdx = Math.abs(reelIdx - totalSymbols);

  if (arrIdx >= totalSymbols) arrIdx -= totalSymbols;
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
  sDisplay.textContent = settings[sValue - 1];
  if (dispedReelTopIndex === 0) dispedReelTopIndex = totalSymbols;
  if (isCorrectReel) {
    pressedReelIndex = dispedReelTopIndex - 2;
  } else {
    pressedReelIndex = dispedReelTopIndex - 2 - xValue;
  }
  if (pressedReelIndex < 1) pressedReelIndex += totalSymbols;

  const findReachData = getReachData(pressedReelIndex, xValue);
  const findReachNames = findReachData[0];
  const findReachNums = findReachData[1];

  const findFlagData = getFlagData(pressedReelIndex, xValue);
  const findFlagNames = findFlagData[0];
  const findFlagNums = findFlagData[1];

  const findPrizeNames = getPrizeNamesStr(pressedReelIndex, xValue);

  // init.
  reachContainer.innerHTML = "";
  flagContainer.innerHTML = "";

  const totalReachNum = sumArray(findReachNums);
  const totalFlagNum = sumArray(findFlagNums);
  const totalNum = totalReachNum + totalFlagNum;

  if (findReachNames.length > 0) {
    for (let i = 0; i < findReachNames.length; i++) {
      createFlagInfoDiv(reachContainer, type.reach, findReachNames[i], ((findReachNums[i] / totalNum) * 100).toFixed(0));
    }
    // bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(reachContainer, null, null, null);
    // bbFlagValueDisplay.textContent = "-";
  }

  if (findFlagNames.length > 0) {
    for (let i = 0; i < findFlagNames.length; i++) {
      createFlagInfoDiv(flagContainer, type.flag, findFlagNames[i], ((findFlagNums[i] / totalNum) * 100).toFixed(0), 0);
    }
    // bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(flagContainer, null, null, null);
    // bbFlagValueDisplay.textContent = "-";
  }

  if (findPrizeNames.length > 0) {
    prizeDisplay.textContent = findPrizeNames.join(", ");
  } else {
    prizeDisplay.textContent = "なし";
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

sIncreaseBtn.addEventListener('click', () => {
  if (sValue < 4) {
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
    sValue = 4;
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
