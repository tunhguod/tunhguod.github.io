function startCalculation(event) {
  event.preventDefault();

  var gValue = Number(document.getElementById('g-input').value);
  var bbValue = Number(document.getElementById('bb-input').value);
  var rbValue = Number(document.getElementById('rb-input').value);
  var fuurinValue = Number(document.getElementById('fuurin-input').value);
  var koriValue = Number(document.getElementById('kori-input').value);
  var cherryValue = Number(document.getElementById('cherry-input').value);
  var hcMissValue = Number(document.getElementById('hc-miss-input').value);
  var hcMissProbValue = Number(document.getElementById('hc-miss-prob-input').value);
  var hgMissValue = Number(document.getElementById('hg-miss-input').value);
  var hgMissProbValue = Number(document.getElementById('hg-miss-prob-input').value);
  var rbMissValue = Number(document.getElementById('rb-miss-input').value);
  var rbFailureValue = Number(document.getElementById('rb-failure-input').value);
  
  var hcGameCount = (hcMissValue * hcMissProbValue);
  var hgGameCount = (hgMissValue * hgMissProbValue);
  var normalGameCount = gValue - hcGameCount - hgGameCount;
  
  var inMedalValue = gValue * 3;
  var outMedalValue = (bbValue * (202 - 1))
                        + (rbValue * (112 - 1)) - (rbMissValue * 1) - (rbFailureValue * 10)
                        + (fuurinValue * 8)
                        + (koriValue * 8)
                        + (cherryValue * 4)
                        + ((normalGameCount / 7.298) * 3)
                        + ((hcGameCount / 3.0) * 3)
                        + ((hcGameCount / 3.5) * 3)
                        + ((hgGameCount / 1.75) * 3)
                        + ((hgGameCount / 7.298) * 3)

  // calc payout.
  var _inMedalValue = inMedalValue
                        - ((normalGameCount / 7.298) * 3)
                        - ((hcGameCount / 3.0) * 3)
                        - ((hcGameCount / 3.5) * 3)
                        - ((hgGameCount / 1.75) * 3)
                        - ((hgGameCount / 7.298) * 3)
                        + (bbValue * 29 * 3)
                        + bbValue
                        + (rbValue * 8) + rbMissValue
                        + rbValue

  var _outMedalValue = outMedalValue
                        - ((normalGameCount / 7.298) * 3)
                        - ((hcGameCount / 3.0) * 3)
                        - ((hcGameCount / 3.5) * 3)
                        - ((hgGameCount / 1.75) * 3)
                        - ((hgGameCount / 7.298) * 3)
                        - (bbValue * 201) + (bbValue * 28 * 10) + (bbValue * 9)
                        - (rbValue * 111) + (rbMissValue * 1) + (rbFailureValue * 10) + (rbValue * 15 * 8) - (rbFailureValue * 10)

  var medalValue = outMedalValue - inMedalValue;
  var payoutValue = _outMedalValue / _inMedalValue * 100;

  console.log(_outMedalValue - _inMedalValue);

  var resultMedalMessage = '推定差枚: ' + Math.round(medalValue) + '枚';
  var resultPayoutMessage = '推定機械割: ' + payoutValue.toFixed(2) + '%';
  
  var resultMedalsElement = document.getElementById('result-medals');
  var resultPayoutElement = document.getElementById('result-payout');
  resultMedalsElement.textContent = resultMedalMessage;
  resultPayoutElement.textContent = resultPayoutMessage;
}
