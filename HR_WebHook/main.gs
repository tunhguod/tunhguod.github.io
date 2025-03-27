const SPREADSHEET_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
const BB_CELL_COLOR_CODE = "#f9cb9c"
const UNDEF_BB_CELL_COLOR_CODE = "#fbe5d5"
const RB_CELL_COLOR_CODE = "#a4c2f4"
const UNDEF_RB_CELL_COLOR_CODE = "#deebf6"

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

function isBigFlag(flag) {
  var bool = true

  if (flag == 'R') {
    bool = false
  } else if (flag >= 'T') {
    bool = false
  }

  return bool
}

function addHistory(sheet, flag, reelIdx, oValue, oColor, nValue) {
  const date = new Date()
  date.setHours(date.getHours() + 16);

  sheet.insertRowBefore(2)
  sheet.getRange('A2').setValue(date)
  sheet.getRange('B2').setValue(flag + reelIdx)
  sheet.getRange('C2').setValue(oValue)
  sheet.getRange('D2').setValue((nValue == 'X') ? '' : nValue)

  sheet.getRange('C2').setBackground(oColor)

  var color
  if (nValue == 'X') {
    if (isBigFlag(flag)) {
      color = UNDEF_BB_CELL_COLOR_CODE
    } else {
      color = UNDEF_RB_CELL_COLOR_CODE
    }
  } else {
    if (isBigFlag(flag)) {
      color = BB_CELL_COLOR_CODE
    } else {
      color = RB_CELL_COLOR_CODE
    }
  }

  sheet.getRange('D2').setBackground(color)
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
  if (isBigFlag(flag)) {
    bgColor = BB_CELL_COLOR_CODE
  } else {
    bgColor = RB_CELL_COLOR_CODE
  }

  sheet.getRange(cell).setValue(value)
  sheet.getRange(cell).setBackground(bgColor)
}

function delCtrlNumber(sheet, flag, cell) {
  var bgColor
  if (isBigFlag(flag)) {
    bgColor = UNDEF_BB_CELL_COLOR_CODE
  } else {
    bgColor = UNDEF_RB_CELL_COLOR_CODE
  }

  sheet.getRange(cell).setValue('')
  sheet.getRange(cell).setBackground(bgColor)
}

function updateCtrlNumber(spreadSheet, flag, reelIdx, ctrlNumber, hasDryRun = false) {
  const masterSheet = spreadSheet.getSheetByName('master')
  const masterWithoutTBCSheet = spreadSheet.getSheetByName('master_w/o_TBC')
  const historySheet = spreadSheet.getSheetByName('history')

  const col = ColumnMap[flag]
  const row = 24 - reelIdx
  const cell = col + row

  const oldCtrlNumber = getCtrlNumber(masterSheet, cell)
  const oldCtrlColor = masterSheet.getRange(cell).getBackground()

  if (!hasDryRun) {
    if (ctrlNumber == 'X') {
      delCtrlNumber(masterSheet, flag, cell)
      delCtrlNumber(masterWithoutTBCSheet, flag, cell)
    } else {
      setCtrlNumber(masterSheet, flag, cell, ctrlNumber)
      setCtrlNumber(masterWithoutTBCSheet, flag, cell, ctrlNumber)
    }
  }

  addHistory(historySheet, flag, reelIdx, oldCtrlNumber, oldCtrlColor, ctrlNumber)
}

function doPost(e) {
  const lock = LockService.getScriptLock()

  if (!lock.tryLock(10000)) {
    return ContentService.createTextOutput("err: failed to get lock.")
  }

  try {
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
          } else {
            updateCtrlNumber(spreadSheet, flag, reelIdx, ctrlNumber, hasDryRun = true)
          }
        }
      }
    }

    return ContentService.createTextOutput("success")
  } catch (err) {
    return ContentService.createTextOutput("err: " + err)
  } finally {
    lock.releaseLock()
  }
}
