const SpreadSheetID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
const SpreadSheet = SpreadsheetApp.openById(SpreadSheetID)
const HistorySheet = SpreadSheet.getSheetByName('history')
const MasterSheet = SpreadSheet.getSheetByName('master_w/o_TBC')

const ColumnMap = Object.freeze({
  A: "D",
  B: "E",
  C: "F",
  D: "G",
  E: "H",
  F: "I",
  G: "J",
  H: "K",
  HH: "L",
  I: "M",
  J: "N",
  K: "O",
  L: "P",
  LL: "Q",
  M: "R",
  N: "S",
  O: "T",
  P: "U",
  Q: "V",
  R: "W",
  S: "X",
  T: "Y",
  U: "Z",
  V: "AA",
  W: "AB"
});

function getCtrlNumber(cell) {
  var value = null
  if (!MasterSheet.getRange(cell).isBlank()) {
    value = MasterSheet.getRange(cell).getValue()
  }

  return value
}

function checkCtrlNumber(tgt, expCtrlNumber) {
  const match = tgt.match(/^([a-w]|[A-W]|HH|LL|hh|ll)([1-9]|1[0-9]|20|21)$/)
  if (match) {
    const flag = match[1]
    const reelIdx = match[2]

    const col = ColumnMap[flag]
    const row = 24 - reelIdx
    const cell = col + row

    if (MasterSheet.getRange(cell).isBlank()) {
      console.log("Err: " + tgt + " is empty cell.")
      return false
    }

    if (flag >= 'A' && flag <= 'W' && reelIdx >= 1
      && reelIdx <= 21) {
      if (flag != 'H' && flag != 'L' && flag != 'HH' && flag != 'LL') {
        const ctrlNumber = getCtrlNumber(cell)
        if (ctrlNumber != expCtrlNumber) {
          console.log("Invalid cell found! Target: " + tgt + ", His: " + ctrlNumber + ", Exp: " + expCtrlNumber)
          return false
        }
        return true
      } else {
        // flag is H or L, check is ignoring...
        return true
      }
    }
  }
}

function main() {
  const lastRow = HistorySheet.getLastRow()
  const histB = HistorySheet.getRange(2, 2, lastRow).getValues()
  const histD = HistorySheet.getRange(2, 4, lastRow).getValues()

  const targets = histB.flat().filter(v => v !== null && v !== '');
  const aftValues = histD.flat().filter(v => v !== null && v !== '');

  console.log("Start")
  for (let i = 0; i < targets.length; i++) {
    checkCtrlNumber(targets[i], aftValues[i])
  }
  console.log("Finish")
}
