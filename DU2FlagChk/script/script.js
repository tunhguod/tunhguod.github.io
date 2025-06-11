const blackBbNames = ['単', '🔁', '⭐️', '🍒', '🍉A', '1A', '1B', '1C', '1D', '共1']
const blackBbMap = [
  [4, 4, 4, 0, 4, 4, 4, 4, 4, 4],
  [4, 4, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 3, 0, 0, 0, 0, 0, 0],
  [2, 0, 1, 4, 1, 1, 1, 1, 2, 1],
  [2, 0, 3, 0, 2, 2, 1, 1, 0, 2],
  [3, 1, 3, 1, 2, 3, 1, 1, 1, 3],
  [0, 0, 4, 0, 3, 4, 0, 0, 2, 4],
  [0, 1, 0, 1, 4, 0, 0, 1, 3, 0],
  [0, 2, 0, 2, 0, 0, 0, 0, 4, 0],
  [1, 3, 0, 3, 1, 1, 1, 1, 4, 0],
  [2, 0, 2, 4, 0, 0, 1, 0, 4, 1],
  [3, 1, 2, 0, 2, 2, 2, 2, 2, 2],
  [3, 2, 4, 1, 3, 2, 3, 2, 3, 3],
  [4, 3, 4, 0, 3, 3, 4, 3, 3, 4],
  [0, 0, 0, 1, 4, 0, 0, 0, 0, 0],
  [0, 1, 0, 2, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 3, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 4, 2, 1, 1, 1, 1, 1],
  [2, 2, 3, 0, 3, 2, 2, 2, 2, 2],
  [3, 3, 4, 1, 4, 4, 4, 4, 3, 3],
]

const redBbNames = ['単', '⭐️', '🍒', '🍉B', '1A', '1B', '1C', '1D', '共1', '特']
const redBbMap = [
  [4, 4, 0, 3, 3, 4, 4, 4, 4, 2],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 3, 0, 1, 0, 1, 0, 0, 0],
  [2, 1, 4, 2, 2, 2, 2, 1, 1, 1],
  [2, 3, 0, 2, 3, 2, 3, 0, 2, 2],
  [3, 3, 1, 3, 4, 3, 4, 1, 3, 0],
  [4, 4, 0, 4, 4, 4, 4, 0, 4, 1],
  [0, 0, 1, 4, 0, 0, 1, 1, 0, 4],
  [0, 0, 2, 0, 1, 0, 2, 2, 0, 0],
  [1, 0, 3, 1, 2, 0, 3, 3, 0, 0],
  [2, 2, 4, 1, 0, 1, 0, 4, 1, 1],
  [3, 2, 0, 3, 1, 2, 1, 2, 2, 3],
  [3, 4, 1, 4, 2, 3, 2, 2, 3, 4],
  [4, 4, 0, 4, 3, 4, 3, 3, 4, 4],
  [0, 0, 1, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 1, 0, 1, 0, 3, 1],
  [1, 0, 3, 1, 0, 0, 0, 0, 0, 2],
  [1, 1, 4, 0, 0, 1, 1, 1, 1, 0],
  [2, 3, 0, 3, 1, 2, 2, 2, 2, 1],
  [3, 4, 1, 4, 2, 2, 3, 4, 3, 1],
]

const blueBbNames = ['単', '🔁', '⭐️', '🍒', '🍉A', '1A', '1B', '1C', '1D', '共1', '特']
const blueBbMap = [
  [3, 4, 4, 0, 3, 4, 4, 4, 3, 4, 2],
  [0, 4, 0, 1, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 1, 0, 0, 3, 1],
  [0, 1, 0, 3, 0, 1, 2, 0, 0, 0, 0],
  [1, 0, 1, 4, 1, 2, 3, 1, 2, 1, 1],
  [2, 0, 3, 0, 2, 3, 4, 3, 0, 2, 2],
  [2, 1, 3, 1, 2, 4, 4, 3, 1, 3, 0],
  [3, 0, 4, 0, 3, 4, 4, 4, 2, 4, 1],
  [0, 1, 0, 1, 4, 0, 0, 0, 3, 0, 4],
  [0, 2, 0, 2, 0, 1, 1, 0, 4, 0, 0],
  [1, 3, 0, 3, 1, 2, 2, 0, 4, 0, 0],
  [1, 0, 2, 4, 1, 3, 3, 2, 4, 2, 1],
  [2, 1, 2, 0, 2, 4, 4, 2, 3, 2, 3],
  [3, 2, 4, 1, 3, 4, 4, 4, 4, 4, 4],
  [4, 3, 4, 0, 4, 4, 4, 4, 4, 4, 4],
  [4, 0, 0, 1, 4, 0, 4, 0, 4, 0, 0],
  [0, 1, 0, 2, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 3, 1, 0, 2, 0, 1, 1, 2],
  [2, 1, 1, 4, 2, 1, 3, 1, 0, 1, 0],
  [1, 2, 3, 0, 1, 2, 4, 3, 3, 2, 1],
  [4, 3, 4, 1, 4, 3, 4, 4, 4, 3, 1],
]

const uniqueBbNames = ['単', '1A']
const uniqueBbMap = [
  [3, 3],
  [0, 0],
  [0, 0],
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [4, 4],
  [0, 0],
  [1, 1],
  [0, 0],
  [2, 2],
  [3, 3],
  [3, 3],
  [4, 4],
  [0, 0],
  [1, 1],
  [2, 2],
  [1, 1],
  [4, 4],
]

const rbNames = ['単', '🔁', '⭐️', '🍒', '1B', '1C', '1D', '共1']
const rbMap = [
  [4, 4, 4, 0, 4, 4, 4, 4],
  [0, 4, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 2, 0, 0, 0, 0],
  [0, 1, 0, 3, 0, 1, 0, 0],
  [2, 0, 1, 4, 2, 2, 1, 1],
  [2, 0, 3, 0, 2, 3, 0, 2],
  [3, 1, 3, 1, 3, 4, 1, 3],
  [4, 0, 4, 0, 4, 4, 0, 4],
  [0, 1, 0, 1, 0, 1, 1, 0],
  [0, 2, 0, 2, 0, 2, 2, 0],
  [1, 3, 0, 3, 0, 3, 3, 0],
  [2, 0, 2, 4, 1, 0, 4, 1],
  [3, 1, 2, 0, 2, 1, 2, 2],
  [3, 2, 4, 1, 3, 2, 2, 3],
  [4, 3, 4, 0, 4, 3, 3, 4],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 2, 0, 1, 0, 1],
  [1, 0, 0, 3, 0, 0, 0, 0],
  [1, 1, 1, 4, 1, 1, 1, 1],
  [2, 2, 3, 0, 2, 2, 2, 2],
  [3, 3, 4, 1, 2, 3, 4, 3],
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

const BonusType = Object.freeze({
  RED: 0,
  BLUE: 1,
  BLACK: 2,
  UNIQUE: 3,
  RB: 4
})

const reel = document.getElementById('reel');

const totalSymbols = 21;
const imageHeight = 1911;
const symbolHeight = imageHeight / totalSymbols;

const xDisplay = document.getElementById('x-value');
const xIncreaseBtn = document.getElementById('x-increase-btn');
const xDecreaseBtn = document.getElementById('x-decrease-btn');
let xValue = 0;

const prizeDisplay = document.getElementById('prize-display');

const redBbContainer = document.getElementById("red-bb-container");
const redBbValueDisplay = document.getElementById('red-bb-value-label');
const blueBbContainer = document.getElementById("blue-bb-container");
const blueBbValueDisplay = document.getElementById('blue-bb-value-label');
const blackBbContainer = document.getElementById("black-bb-container");
const blackBbValueDisplay = document.getElementById('black-bb-value-label');
const uniqueBbContainer = document.getElementById("unique-bb-container");
const uniqueBbValueDisplay = document.getElementById('unique-bb-value-label');
const rbContainer = document.getElementById("rb-container");
const rbValueDisplay = document.getElementById('rb-value-label');

const pre1Container = document.getElementById("pre-1-container");
const pre2Container = document.getElementById('pre-2-container');
const pre3Container = document.getElementById("pre-3-container");
const pre4Container = document.getElementById('pre-4-container');

let startY = 0;
let isDragging = false;
let bgY = 0;
let dragStartBgY = 0;

let dispedReelTopIndex = totalSymbols;
let pressedReelIndex = dispedReelTopIndex - 1;

let isCorrectReel = false;

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

  const valueEl = document.createElement("div");
  valueEl.className = "value";

  if (value) {
    valueEl.textContent = value + "%";
  } else {
    valueEl.textContent = "-";
  }

  badge.appendChild(keyEl);
  badge.appendChild(valueEl);
  if (!key) {
    badge.style.visibility = 'hidden';
  }

  parentElem.appendChild(badge);
}

function createPredInfoDiv(parentElem, target, flagName) {
  const badge = document.createElement("div");
  badge.className = "badge";

  const keyEl = document.createElement("div");
  keyEl.className = "key";
  keyEl.textContent = flagName;

  const valueEl = document.createElement("div");
  valueEl.className = "value";
  valueEl.style.backgroundImage = `url(./img/${target}.png)`
  valueEl.textContent = "."
  valueEl.style.color = 'transparent';

  badge.appendChild(keyEl);
  badge.appendChild(valueEl);
  if (!flagName) {
    badge.style.visibility = 'hidden';
  }
  parentElem.appendChild(badge);
}


function getFlagData(target, reelIdx, xValue) {
  let arrIdx = Math.abs(reelIdx - totalSymbols);

  let targetMap
  let targetNums
  let targetNames
  switch (target) {
    case BonusType.RED:
      targetMap = redBbMap;
      // targetNums = redBbNums;
      targetNames = redBbNames;
      break;
    case BonusType.BLUE:
      targetMap = blueBbMap;
      // targetNums = blueBbNums;
      targetNames = blueBbNames;
      break;
    case BonusType.BLACK:
      targetMap = blackBbMap;
      // targetNums = blackBbNums;
      targetNames = blackBbNames;
      break;
    case BonusType.UNIQUE:
      targetMap = uniqueBbMap;
      // targetNums = uniqueBbNums;
      targetNames = uniqueBbNames;
      break;
    case BonusType.RB:
      targetMap = rbMap;
      // targetNums = rbNums;
      targetNames = rbNames;
      break;
  }

  if (arrIdx >= totalSymbols) arrIdx -= totalSymbols;
  const flagMapRowData = targetMap[arrIdx];
  const findFlagNames = [];
  // const findFlagNums = [];

  for (let i = 0; i < flagMapRowData.length; i++) {
    let flagName = targetNames[i];
    // let flagNum = targetNums[i][sValue - 1];
    if (flagMapRowData[i] === xValue) {
      findFlagNames.push(flagName);
      // findFlagNums.push(flagNum);
    }
  }

  return [findFlagNames, null];
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
  sDisplay.textContent = sValue;
  if (dispedReelTopIndex === 0) dispedReelTopIndex = totalSymbols;
  if (isCorrectReel) {
    pressedReelIndex = dispedReelTopIndex - 2;
  } else {
    pressedReelIndex = dispedReelTopIndex - 2 - xValue;
  }
  if (pressedReelIndex < 1) pressedReelIndex += totalSymbols;

  const findRedBbData = getFlagData(BonusType.RED, pressedReelIndex, xValue);
  const findRedBbNames = findRedBbData[0];
  const findRedBbNums = findRedBbData[1];

  const findBlueBbData = getFlagData(BonusType.BLUE, pressedReelIndex, xValue);
  const findBlueBbNames = findBlueBbData[0];
  const findBlueBbNums = findBlueBbData[1];

  const findBlackBbData = getFlagData(BonusType.BLACK, pressedReelIndex, xValue);
  const findBlackBbNames = findBlackBbData[0];
  const findBlackBbNums = findBlackBbData[1];

  const findUniqueBbData = getFlagData(BonusType.UNIQUE, pressedReelIndex, xValue);
  const findUniqueBbNames = findUniqueBbData[0];
  const findUniqueBbNums = findUniqueBbData[1];

  const findRbData = getFlagData(BonusType.RB, pressedReelIndex, xValue);
  const findRbNames = findRbData[0];
  const findRbNums = findRbData[1];
  // const findBbFlagNums = findData[2];
  // const findRbFlagNums = findData[3];
  // const findPrizeNames = getPrizeNamesStr(pressedReelIndex, xValue);

  // init.
  redBbContainer.innerHTML = "";
  blueBbContainer.innerHTML = "";
  blackBbContainer.innerHTML = "";
  uniqueBbContainer.innerHTML = "";
  rbContainer.innerHTML = "";
  pre1Container.innerHTML = "";
  pre2Container.innerHTML = "";
  pre3Container.innerHTML = "";
  pre4Container.innerHTML = "";

  // const totalBbFlagNum = sumArray(findBbFlagNums);
  // const totalRbFlagNum = sumArray(findRbFlagNums);
  const totalFlagNum = 40;

  if (findRedBbNames.length > 0) {
    for (let i = 0; i < findRedBbNames.length; i++) {
      createFlagInfoDiv(redBbContainer, pressedReelIndex, findRedBbNames[i], null);
    }
    // bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(redBbContainer, null, null, null);
    redBbValueDisplay.textContent = "-";
  }

  if (findBlueBbNames.length > 0) {
    for (let i = 0; i < findBlueBbNames.length; i++) {
      createFlagInfoDiv(blueBbContainer, pressedReelIndex, findBlueBbNames[i], null);
    }
    // bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(blueBbContainer, null, null, null);
    blueBbValueDisplay.textContent = "-";
  }

  if (findBlackBbNames.length > 0) {
    for (let i = 0; i < findBlackBbNames.length; i++) {
      createFlagInfoDiv(blackBbContainer, pressedReelIndex, findBlackBbNames[i], null);
    }
    // bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(blackBbContainer, null, null, null);
    blackBbValueDisplay.textContent = "-";
  }

  if (findUniqueBbNames.length > 0) {
    for (let i = 0; i < findUniqueBbNames.length; i++) {
      createFlagInfoDiv(uniqueBbContainer, pressedReelIndex, findUniqueBbNames[i], null);
    }
    // bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(uniqueBbContainer, null, null, null);
    uniqueBbValueDisplay.textContent = "-";
  }

  if (findRbNames.length > 0) {
    for (let i = 0; i < findRbNames.length; i++) {
      createFlagInfoDiv(rbContainer, pressedReelIndex, findRbNames[i], null);
    }
    // bbFlagValueDisplay.textContent = "1/" + (65536 / totalBbFlagNum).toFixed(1).toString();
  } else {
    createFlagInfoDiv(rbContainer, null, null, null);
    rbValueDisplay.textContent = "-";
  }

  let pre1Arr = [];
  let pre2Arr = [];
  let pre3Arr = [];
  let pre4Arr = [];

  if (findRedBbNames.includes('単')) {
    pre1Arr.push(["単", BonusType.RED]);
  }
  if (findRedBbNames.includes('1A')) {
    pre1Arr.push(["A", BonusType.RED]);
  }
  if (findRedBbNames.includes('1B')) {
    pre2Arr.push(["B", BonusType.RED]);
  }
  if (findRedBbNames.includes('1C')) {
    pre2Arr.push(["C", BonusType.RED]);
  }
  if (findRedBbNames.includes('1D')) {
    pre3Arr.push(["D", BonusType.RED]);
  }

  if (findBlueBbNames.includes('単')) {
    pre1Arr.push(["単", BonusType.BLUE]);
  }
  if (findBlueBbNames.includes('1A')) {
    pre2Arr.push(["A", BonusType.BLUE]);
  }
  if (findBlueBbNames.includes('1B')) {
    pre1Arr.push(["B", BonusType.BLUE]);
  }
  if (findBlueBbNames.includes('1C')) {
    pre2Arr.push(["C", BonusType.BLUE]);
  }
  if (findBlueBbNames.includes('1D')) {
    pre4Arr.push(["D", BonusType.BLUE]);
  }

  if (findBlackBbNames.includes('単')) {
    pre1Arr.push(["単", BonusType.BLACK]);
  }
  if (findBlackBbNames.includes('1A')) {
    pre2Arr.push(["A", BonusType.BLACK]);
  }
  if (findBlackBbNames.includes('1B')) {
    pre1Arr.push(["B", BonusType.BLACK]);
  }
  if (findBlackBbNames.includes('1C')) {
    pre3Arr.push(["C", BonusType.BLACK]);
  }
  if (findBlackBbNames.includes('1D')) {
    pre2Arr.push(["D", BonusType.BLACK]);
  }

  if (findUniqueBbNames.includes('単')) {
    pre1Arr.push(["単", BonusType.UNIQUE]);
  }
  if (findUniqueBbNames.includes('1A')) {
    pre1Arr.push(["A", BonusType.UNIQUE]);
  }

  if (findRbNames.includes('単')) {
    pre1Arr.push(["単", BonusType.RB]);
  }
  if (findRbNames.includes('1B')) {
    pre2Arr.push(["B", BonusType.RB]);
  }
  if (findRbNames.includes('1C')) {
    pre2Arr.push(["C", BonusType.RB]);
  }
  if (findRbNames.includes('1D')) {
    pre3Arr.push(["D", BonusType.RB]);
  }

  if (pre1Arr.length > 0) {
    for (let i = 0; i < pre1Arr.length; i++) {
      createPredInfoDiv(pre1Container, pre1Arr[i][1], pre1Arr[i][0])
    }
  } else {
    createPredInfoDiv(pre1Container, null, null)
  }
  if (pre2Arr.length > 0) {
    for (let i = 0; i < pre2Arr.length; i++) {
      createPredInfoDiv(pre2Container, pre2Arr[i][1], pre2Arr[i][0])
    }
  } else {
    createPredInfoDiv(pre2Container, null, null)
  }
  if (pre3Arr.length > 0) {
    for (let i = 0; i < pre3Arr.length; i++) {
      createPredInfoDiv(pre3Container, pre3Arr[i][1], pre3Arr[i][0])
    }
  } else {
    createPredInfoDiv(pre3Container, null, null)
  }
  if (pre4Arr.length > 0) {
    for (let i = 0; i < pre4Arr.length; i++) {
      createPredInfoDiv(pre4Container, pre4Arr[i][1], pre4Arr[i][0])
    }
  } else {
    createPredInfoDiv(pre4Container, null, null)
  }




  // if (findRbFlagNames.length > 0) {
  //   for (let i = 0; i < findRbFlagNames.length; i++) {
  //     createFlagInfoDiv(rbFlagContainer, pressedReelIndex, findRbFlagNames[i], ((findRbFlagNums[i] / totalFlagNum) * 100).toFixed(0));
  //   }
  //   rbFlagValueDisplay.textContent = "1/" + (65536 / totalRbFlagNum).toFixed(1).toString();
  // } else {
  //   createFlagInfoDiv(rbFlagContainer, null, null, null);
  //   rbFlagValueDisplay.textContent = "-";
  // }
  // if (findPrizeNames.length > 0) {
  //   prizeDisplay.textContent = findPrizeNames.join(", ");
  // } else {
  //   prizeDisplay.textContent = "なし";
  // }
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
