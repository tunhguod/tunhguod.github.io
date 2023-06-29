function startCalculation(event) {
  event.preventDefault();

  var gValue = Number(document.getElementById('g-input').value);
  var bbValue = Number(document.getElementById('bb-input').value);
  var rbValue = Number(document.getElementById('rb-input').value);
  var bellValue = Number(document.getElementById('bell-input').value);
  var suikaValue = Number(document.getElementById('suika-input').value);
  var cherryValue = Number(document.getElementById('cherry-input').value);
  var vcMissValue = Number(document.getElementById('vc-miss-input').value);
  var vcMissProbValue = Number(document.getElementById('vc-miss-prob-input').value);
  var vgMissValue = Number(document.getElementById('vg-miss-input').value);
  var vgMissProbValue = Number(document.getElementById('vg-miss-prob-input').value);
  var rbMissValue = Number(document.getElementById('rb-miss-input').value);
  var rbFailureValue = Number(document.getElementById('rb-failure-input').value);
  
  var vcGameCount = (vcMissValue * vcMissProbValue);
  var vgGameCount = (vgMissValue * vgMissProbValue);
  var normalGameCount = gValue - vcGameCount - vgGameCount;
  
  var inMedalValue = gValue * 3;
  var outMedalValue = (bbValue * 221)
                        + (rbValue * 111) - (rbMissValue * 1) - (rbFailureValue * 11)
                        + (bellValue * 8)
                        + (suikaValue * 12)
                        + (cherryValue * 4)
                        + ((normalGameCount / 7.298) * 3)
                        + ((vcGameCount / 3.025) * 3)
                        + ((vcGameCount / 3.5) * 3)
                        + ((vgGameCount / 1.725) * 3)
                        + ((vgGameCount / 7.298) * 3)

  // calc payout.
  var _inMedalValue = inMedalValue
                        - ((vcGameCount / 3.025) * 3)
                        - ((vcGameCount / 3.5) * 3)
                        - ((vgGameCount / 1.725) * 3)
                        - ((vgGameCount / 7.298) * 3)
                        + (bbValue * 25 * 3)
                        + bbValue
                        + (rbValue * 8) + rbMissValue
                        + rbValue

  var _outMedalValue = outMedalValue
                        - ((vcGameCount / 3.025) * 3)
                        - ((vcGameCount / 3.5) * 3)
                        - ((vgGameCount / 1.725) * 3)
                        - ((vgGameCount / 7.298) * 3)
                        - (bbValue * 221) + (bbValue * 24 * 12) + (bbValue * 9)
                        - (rbValue * 111) + (rbMissValue * 1) + (rbFailureValue * 11) + (rbValue * 15 * 8) - (rbFailureValue * 11)

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
