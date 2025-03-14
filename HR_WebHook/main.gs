const SPREADSHEET_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
const BB_CELL_COLOR_CODE = "#f9cb9c"
const UNDEF_BB_CELL_COLOR_CODE = "#fbe5d5"
const RB_CELL_COLOR_CODE = "#a4c2f4"
const UNDEF_RB_CELL_COLOR_CODE = "#a4c2f4"

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

function addHistory(sheet, flag, reelIdx, o, n) {
  var msg
  if (o != null) {
    msg = flag + reelIdx + ': ' + o + ' -> ' + n
  } else {
    msg = flag + reelIdx + ': ' + n
  }

  sheet.insertRowBefore(1)
  sheet.getRange('A1').setValue(new Date())
  sheet.getRange('B1').setValue(msg)
}

function getCtrlNumber(sheet, cell) {
  var value = null
  if (!sheet.getRange(cell).isBlank()) {
    value = sheet.getRange(cell).getValue()
  }

  return value
}

function setCtrlNumber(sheet, flag, cell, value) {
  var bgColor
  if (flag <= 'Q') {
    bgColor = BB_CELL_COLOR_CODE
  } else if (flag == 'R') {
    bgColor = RB_CELL_COLOR_CODE
  } else if (flag == 'S') {
    bgColor = BB_CELL_COLOR_CODE
  } else { // T ~
    bgColor = RB_CELL_COLOR_CODE
  }

  sheet.getRange(cell).setValue(value)
  sheet.getRange(cell).setBackground(bgColor)
}

function delCtrlNumber(sheet, flag, cell) {
  var bgColor
  if (flag <= 'Q') {
    bgColor = UNDEF_BB_CELL_COLOR_CODE
  } else if (flag == 'R') {
    bgColor = UNDEF_RB_CELL_COLOR_CODE
  } else if (flag == 'S') {
    bgColor = UNDEF_BB_CELL_COLOR_CODE
  } else { // T ~
    bgColor = UNDEF_RB_CELL_COLOR_CODE
  }

  sheet.getRange(cell).setValue('')
  sheet.getRange(cell).setBackground(bgColor)
}


function updateCtrlNumber(spreadSheet, flag, reelIdx, ctrlNumber) {
  const masterSheet = spreadSheet.getSheetByName('master')
  const masterWithoutTBCSheet = spreadSheet.getSheetByName('master_w/o_TBC')
  const historySheet = spreadSheet.getSheetByName('history')

  const col = ColumnMap[flag]
  const row = 24 - reelIdx
  const cell = col + row

  const oldCtrlNumber = getCtrlNumber(masterSheet, cell)
  if (ctrlNumber == 'X') {
    delCtrlNumber(masterSheet, flag, cell)
    delCtrlNumber(masterWithoutTBCSheet, flag, cell)
  } else {
    setCtrlNumber(masterSheet, flag, cell, ctrlNumber)
    setCtrlNumber(masterWithoutTBCSheet, flag, cell, ctrlNumber)
  }
  addHistory(historySheet, flag, reelIdx, oldCtrlNumber, ctrlNumber)
}

function doPost(e) {
  const spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  const data = JSON.parse(e.postData.contents)

  const msgType = data.events[0].message.type
  if (msgType == "text") {
    const text = data.events[0].message.text
    const match = text.match(/^([A-W]|HH|LL)([1-9]|1[0-9]|20|21)_(\d|X)$/);
    if (match) {
      const flag = match[1]
      const reelIdx = match[2]
      const ctrlNumber = match[3]

      if (flag >= 'A' && flag <= 'W' && reelIdx >= 1 && reelIdx <= 21 && (ctrlNumber >= 0 && ctrlNumber <= 4) || ctrlNumber == 'X') {
        if (flag != 'H' && flag != 'L' && flag != 'HH' && flag != 'LL') {
          updateCtrlNumber(spreadSheet, flag, reelIdx, ctrlNumber)
          if (flag == 'Q') {
            updateCtrlNumber(spreadSheet, 'T', reelIdx, ctrlNumber)
          } else if (flag == 'T') {
            updateCtrlNumber(spreadSheet, 'Q', reelIdx, ctrlNumber)
          }
        }
      }
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON)
}