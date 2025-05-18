const vibSec = 35;
const tableBody = document.querySelector("#data-table tbody");

const ptnData = [
    "✕✕✕✕✕",
    "○✕✕✕✕",
    "✕○✕✕✕",
    "✕✕○✕✕",
    "✕✕✕○✕",
    "✕✕✕✕○",
    "○○✕✕✕",
    "○✕○✕✕",
    "○✕✕○✕",
    "○✕✕✕○",
    "✕○○✕✕",
    "✕○✕○✕",
    "✕○✕✕○",
    "✕✕○○✕",
    "✕✕○✕○",
    "✕✕✕○○",
]

const raffleData = [
    [0.4, 0.8, 1.2, 1.6, 2.0, 2.3],
    [1.6, 2.0, 6.3, 6.7, 7.0, 7.4],
    [11.7, 12.1, 16.0, 19.2, 19.6, 20.3]
]

function getExpectProb(stg, zeroPnt, onePnt, twoPnt) {
    const a = (zeroPnt == 0) ? 1 : Math.pow(1 - (raffleData[0][stg - 1] / 100), zeroPnt);
    const b = (onePnt == 0) ? 1 : Math.pow(1 - (raffleData[1][stg - 1] / 100), onePnt);
    const c = (twoPnt == 0) ? 1 : Math.pow(1 - (raffleData[2][stg - 1] / 100), twoPnt);

    return (1 - a * b * c) * 100;
}

function getExpectAmt(stg, zeroPnt, onePnt, twoPnt) {
    return (zeroPnt * raffleData[0][stg - 1]) + (onePnt * raffleData[1][stg - 1]) + (twoPnt * raffleData[2][stg - 1])
}

const expectedStockProbData = [
    [getExpectProb(1, 5, 0, 0), getExpectProb(2, 5, 0, 0), getExpectProb(3, 5, 0, 0), getExpectProb(4, 5, 0, 0), getExpectProb(5, 5, 0, 0), getExpectProb(6, 5, 0, 0)],
    [getExpectProb(1, 0, 5, 0), getExpectProb(2, 0, 5, 0), getExpectProb(3, 0, 5, 0), getExpectProb(4, 0, 5, 0), getExpectProb(5, 0, 5, 0), getExpectProb(6, 0, 5, 0)],
    [getExpectProb(1, 1, 4, 0), getExpectProb(2, 1, 4, 0), getExpectProb(3, 1, 4, 0), getExpectProb(4, 1, 4, 0), getExpectProb(5, 1, 4, 0), getExpectProb(6, 1, 4, 0)],
    [getExpectProb(1, 2, 3, 0), getExpectProb(2, 2, 3, 0), getExpectProb(3, 2, 3, 0), getExpectProb(4, 2, 3, 0), getExpectProb(5, 2, 3, 0), getExpectProb(6, 2, 3, 0)],
    [getExpectProb(1, 3, 2, 0), getExpectProb(2, 3, 2, 0), getExpectProb(3, 3, 2, 0), getExpectProb(4, 3, 2, 0), getExpectProb(5, 3, 2, 0), getExpectProb(6, 3, 2, 0)],
    [getExpectProb(1, 4, 1, 0), getExpectProb(2, 4, 1, 0), getExpectProb(3, 4, 1, 0), getExpectProb(4, 4, 1, 0), getExpectProb(5, 4, 1, 0), getExpectProb(6, 4, 1, 0)],
    [getExpectProb(1, 0, 1, 4), getExpectProb(2, 0, 1, 4), getExpectProb(3, 0, 1, 4), getExpectProb(4, 0, 1, 4), getExpectProb(5, 0, 1, 4), getExpectProb(6, 0, 1, 4)],
    [getExpectProb(1, 0, 2, 3), getExpectProb(2, 0, 2, 3), getExpectProb(3, 0, 2, 3), getExpectProb(4, 0, 2, 3), getExpectProb(5, 0, 2, 3), getExpectProb(6, 0, 2, 3)],
    [getExpectProb(1, 0, 3, 2), getExpectProb(2, 0, 3, 2), getExpectProb(3, 0, 3, 2), getExpectProb(4, 0, 3, 2), getExpectProb(5, 0, 3, 2), getExpectProb(6, 0, 3, 2)],
    [getExpectProb(1, 0, 4, 1), getExpectProb(2, 0, 4, 1), getExpectProb(3, 0, 4, 1), getExpectProb(4, 0, 4, 1), getExpectProb(5, 0, 4, 1), getExpectProb(6, 0, 4, 1)],
    [getExpectProb(1, 1, 1, 3), getExpectProb(2, 1, 1, 3), getExpectProb(3, 1, 1, 3), getExpectProb(4, 1, 1, 3), getExpectProb(5, 1, 1, 3), getExpectProb(6, 1, 1, 3)],
    [getExpectProb(1, 1, 2, 2), getExpectProb(2, 1, 2, 2), getExpectProb(3, 1, 2, 2), getExpectProb(4, 1, 2, 2), getExpectProb(5, 1, 2, 2), getExpectProb(6, 1, 2, 2)],
    [getExpectProb(1, 1, 3, 1), getExpectProb(2, 1, 3, 1), getExpectProb(3, 1, 3, 1), getExpectProb(4, 1, 3, 1), getExpectProb(5, 1, 3, 1), getExpectProb(6, 1, 3, 1)],
    [getExpectProb(1, 2, 1, 2), getExpectProb(2, 2, 1, 2), getExpectProb(3, 2, 1, 2), getExpectProb(4, 2, 1, 2), getExpectProb(5, 2, 1, 2), getExpectProb(6, 2, 1, 2)],
    [getExpectProb(1, 2, 2, 1), getExpectProb(2, 2, 2, 1), getExpectProb(3, 2, 2, 1), getExpectProb(4, 2, 2, 1), getExpectProb(5, 2, 2, 1), getExpectProb(6, 2, 2, 1)],
    [getExpectProb(1, 3, 1, 1), getExpectProb(2, 3, 1, 1), getExpectProb(3, 3, 1, 1), getExpectProb(4, 3, 1, 1), getExpectProb(5, 3, 1, 1), getExpectProb(6, 3, 1, 1)],
]

const expectedStockAmtData = [
    [getExpectAmt(1, 5, 0, 0), getExpectAmt(2, 5, 0, 0), getExpectAmt(3, 5, 0, 0), getExpectAmt(4, 5, 0, 0), getExpectAmt(5, 5, 0, 0), getExpectAmt(6, 5, 0, 0)],
    [getExpectAmt(1, 0, 5, 0), getExpectAmt(2, 0, 5, 0), getExpectAmt(3, 0, 5, 0), getExpectAmt(4, 0, 5, 0), getExpectAmt(5, 0, 5, 0), getExpectAmt(6, 0, 5, 0)],
    [getExpectAmt(1, 1, 4, 0), getExpectAmt(2, 1, 4, 0), getExpectAmt(3, 1, 4, 0), getExpectAmt(4, 1, 4, 0), getExpectAmt(5, 1, 4, 0), getExpectAmt(6, 1, 4, 0)],
    [getExpectAmt(1, 2, 3, 0), getExpectAmt(2, 2, 3, 0), getExpectAmt(3, 2, 3, 0), getExpectAmt(4, 2, 3, 0), getExpectAmt(5, 2, 3, 0), getExpectAmt(6, 2, 3, 0)],
    [getExpectAmt(1, 3, 2, 0), getExpectAmt(2, 3, 2, 0), getExpectAmt(3, 3, 2, 0), getExpectAmt(4, 3, 2, 0), getExpectAmt(5, 3, 2, 0), getExpectAmt(6, 3, 2, 0)],
    [getExpectAmt(1, 4, 1, 0), getExpectAmt(2, 4, 1, 0), getExpectAmt(3, 4, 1, 0), getExpectAmt(4, 4, 1, 0), getExpectAmt(5, 4, 1, 0), getExpectAmt(6, 4, 1, 0)],
    [getExpectAmt(1, 0, 1, 4), getExpectAmt(2, 0, 1, 4), getExpectAmt(3, 0, 1, 4), getExpectAmt(4, 0, 1, 4), getExpectAmt(5, 0, 1, 4), getExpectAmt(6, 0, 1, 4)],
    [getExpectAmt(1, 0, 2, 3), getExpectAmt(2, 0, 2, 3), getExpectAmt(3, 0, 2, 3), getExpectAmt(4, 0, 2, 3), getExpectAmt(5, 0, 2, 3), getExpectAmt(6, 0, 2, 3)],
    [getExpectAmt(1, 0, 3, 2), getExpectAmt(2, 0, 3, 2), getExpectAmt(3, 0, 3, 2), getExpectAmt(4, 0, 3, 2), getExpectAmt(5, 0, 3, 2), getExpectAmt(6, 0, 3, 2)],
    [getExpectAmt(1, 0, 4, 1), getExpectAmt(2, 0, 4, 1), getExpectAmt(3, 0, 4, 1), getExpectAmt(4, 0, 4, 1), getExpectAmt(5, 0, 4, 1), getExpectAmt(6, 0, 4, 1)],
    [getExpectAmt(1, 1, 1, 3), getExpectAmt(2, 1, 1, 3), getExpectAmt(3, 1, 1, 3), getExpectAmt(4, 1, 1, 3), getExpectAmt(5, 1, 1, 3), getExpectAmt(6, 1, 1, 3)],
    [getExpectAmt(1, 1, 2, 2), getExpectAmt(2, 1, 2, 2), getExpectAmt(3, 1, 2, 2), getExpectAmt(4, 1, 2, 2), getExpectAmt(5, 1, 2, 2), getExpectAmt(6, 1, 2, 2)],
    [getExpectAmt(1, 1, 3, 1), getExpectAmt(2, 1, 3, 1), getExpectAmt(3, 1, 3, 1), getExpectAmt(4, 1, 3, 1), getExpectAmt(5, 1, 3, 1), getExpectAmt(6, 1, 3, 1)],
    [getExpectAmt(1, 2, 1, 2), getExpectAmt(2, 2, 1, 2), getExpectAmt(3, 2, 1, 2), getExpectAmt(4, 2, 1, 2), getExpectAmt(5, 2, 1, 2), getExpectAmt(6, 2, 1, 2)],
    [getExpectAmt(1, 2, 2, 1), getExpectAmt(2, 2, 2, 1), getExpectAmt(3, 2, 2, 1), getExpectAmt(4, 2, 2, 1), getExpectAmt(5, 2, 2, 1), getExpectAmt(6, 2, 2, 1)],
    [getExpectAmt(1, 3, 1, 1), getExpectAmt(2, 3, 1, 1), getExpectAmt(3, 3, 1, 1), getExpectAmt(4, 3, 1, 1), getExpectAmt(5, 3, 1, 1), getExpectAmt(6, 3, 1, 1)],
]

function findClosestIndex(arr, target) {
    let closestIndex = 0;
    let minDiff = Math.abs(arr[0] - target);

    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - target);
        if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
        }
    }

    return closestIndex;
}

function loadCounterValue(rowId, type) {
    const val = localStorage.getItem(`counter-${rowId}-${type}`) || 0;
    return val;
}

function initRow(row) {
    const rowId = row.dataset.rowId;
    row.querySelector(".counter-a").value = loadCounterValue(row.dataset.rowId, "a");
    row.querySelector(".counter-b").value = loadCounterValue(row.dataset.rowId, "b");
    updateRow(row);
}

function calcExpectValue(isLowest = false) {
    var expectedArr = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

    document.querySelectorAll(".counter-a").forEach((v, i) => {
        for (let j = 0; j < 6; ++j) {
            if (isLowest) {
                expectedArr[j] += expectedStockProbData[i][j] * v.value;
            } else {
                expectedArr[j] += expectedStockAmtData[i][j] * v.value;
            }
        }
    });

    document.querySelectorAll(".counter-b").forEach((v, i) => {
        for (let j = 0; j < 6; ++j) {
            if (isLowest) {
                expectedArr[j] += expectedStockProbData[i][j] * v.value;
            } else {
                expectedArr[j] += expectedStockAmtData[i][j] * v.value;
            }
        }
    });

    return expectedArr;
}

function refreshExpectedValue(isLowest = false) {
    const row = isLowest ? document.getElementById("expected-prob-tr") : document.getElementById("expected-amt-tr");
    const values = row.dataset.values.split(",").map(Number);

    const exceptedArr = calcExpectValue(isLowest);

    values.forEach((v, i) => {
        const cell = row.querySelector(`.val-${i}`);
        cell.textContent = (exceptedArr[i] / 100).toFixed(1);
    });

    const td = document.getElementById("sum-success-rb");
    let num = 0;
    document.querySelectorAll(".counter-a").forEach((v, i) => {
        num += Number(v.value);
    });

    td.textContent = num;

    row.dataset.values = exceptedArr.join(",");

    if (isLowest) updateExpectedRow(row);
}

function updateRow(row) {
    const rowId = row.dataset.rowId;
    const values = row.dataset.values.split(",").map(Number);
    const a = Number(row.querySelector(".counter-a")?.value ?? 0);
    const b = Number(row.querySelector(".counter-b")?.value ?? 0);

    localStorage.setItem(`counter-${rowId}-a`, a);
    localStorage.setItem(`counter-${rowId}-b`, b);

    /* Responded to point out that coloring was not necessary.
    const c = (a / (a + b)) * 100;
    const tgt_i = findClosestIndex(values, c);
    
    values.forEach((v, i) => {
        const cell = row.querySelector(`.val-${i}`);
        cell.style.backgroundColor = "";
    });

    if (a === 0 && b === 0) return;

    const cell = row.querySelector(`.val-${tgt_i}`);
    cell.style.backgroundColor = "#e6f0e6";
    */
}

function updateExpectedRow(row) {
    const values = row.dataset.values.split(",").map(Number);

    const num = Number(document.getElementById("sum-success-rb").textContent);
    const tgt_i = findClosestIndex(values, num * 100);

    values.forEach((v, i) => {
        const cell = row.querySelector(`.val-${i}`);
        cell.style.backgroundColor = "";
    });

    // if (num == 0) return;

    const cell = row.querySelector(`.val-${tgt_i}`);
    cell.style.backgroundColor = "#e6f0e6";
}

function resetAllCounters() {
    document.querySelectorAll(".counter-a, .counter-b").forEach(input => input.value = 0);
    document.querySelectorAll("tbody tr").forEach(row => updateRow(row));
    refreshExpectedValue(isLowest = true);
    refreshExpectedValue(isLowest = false);
    navigator.vibrate(vibSec);
}

function createExpectedStockAmtRow(tableBody) {
    const tr = document.createElement("tr");
    const values = calcExpectValue(isLowest = false);
    tr.dataset.values = values.join(",");
    const labelTd = document.createElement("td");
    labelTd.textContent = "平均ストック数";
    labelTd.className = "expected-amt-label";
    tr.appendChild(labelTd);
    values.forEach((val, idx) => {
        const td = document.createElement("td");
        td.textContent = (val / 100).toFixed(1);
        td.classList.add(`val-${idx}`);
        tr.appendChild(td);
    });
    tr.id = "expected-amt-tr";
    tableBody.appendChild(tr);
}

function createExpectedStockProbRow(tableBody) {
    const tr = document.createElement("tr");
    const values = calcExpectValue(isLowest = true);
    tr.dataset.values = values.join(",");
    const labelTd = document.createElement("td");
    labelTd.textContent = "平均初当たり回数";
    labelTd.className = "expected-prob-label";
    tr.appendChild(labelTd);
    values.forEach((val, idx) => {
        const td = document.createElement("td");
        td.textContent = (val / 100).toFixed(1);
        td.classList.add(`val-${idx}`);
        tr.appendChild(td);
    });
    const td = document.createElement("td");
    td.textContent = 0;
    td.id = "sum-success-rb"
    tr.appendChild(td);
    tr.id = "expected-prob-tr";
    tableBody.appendChild(tr);
}

function createCounterCell(className, row) {
    const td = document.createElement("td");
    const container = document.createElement("div");
    container.className = "counter-container";

    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.classList.add(className);
    input.value = 0;
    input.readOnly = true;
    input.style.userSelect = "none";
    input.style.pointerEvents = "none";
    input.oninput = () => {
        if (input.value < 0) input.value = 0;
        initRow(row);
    };

    const btnMinus = document.createElement("button");
    btnMinus.textContent = "−";
    btnMinus.onclick = () => {
        input.value = Math.max(0, parseInt(input.value) - 1);
        updateRow(row);
        refreshExpectedValue(isLowest = true);
        refreshExpectedValue(isLowest = false);
        navigator.vibrate(vibSec);
    };

    const btnPlus = document.createElement("button");
    btnPlus.textContent = "+";
    btnPlus.onclick = () => {
        input.value = parseInt(input.value) + 1;
        updateRow(row);
        refreshExpectedValue(isLowest = true);
        refreshExpectedValue(isLowest = false);
        navigator.vibrate(vibSec);
    };

    container.appendChild(btnMinus);
    container.appendChild(input);
    container.appendChild(btnPlus);

    td.appendChild(container);
    return td;
}

expectedStockProbData.forEach((values, rowIndex) => {
    const tr = document.createElement("tr");
    tr.dataset.rowId = `eureka-row${rowIndex}`;
    tr.dataset.values = values.join(",");

    const labelTd = document.createElement("td");
    labelTd.textContent = ptnData[rowIndex];
    labelTd.className = "row-label";
    tr.appendChild(labelTd);

    values.forEach((val, idx) => {
        const td = document.createElement("td");
        td.textContent = `${val.toFixed(2)}%`;
        td.classList.add(`val-${idx}`);
        tr.appendChild(td);
    });

    tr.appendChild(createCounterCell("counter-a", tr));
    tr.appendChild(createCounterCell("counter-b", tr));

    initRow(tr);

    tableBody.appendChild(tr);
});

createExpectedStockProbRow(tableBody);
createExpectedStockAmtRow(tableBody);
refreshExpectedValue(isLowest = true);
refreshExpectedValue(isLowest = false);
