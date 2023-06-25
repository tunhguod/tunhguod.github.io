function startCalculation(event) {
  event.preventDefault();

  var gValue = document.getElementById('g-input').value;
  var bbValue = document.getElementById('bb-input').value;
  var rbValue = document.getElementById('rb-input').value;
  var fuurinValue = document.getElementById('fuurin-input').value;
  var koriValue = document.getElementById('kori-input').value;
  var cherryValue = document.getElementById('cherry-input').value;
  var hcMissValue = document.getElementById('hc-miss-input').value;
  var hcMissProbValue = document.getElementById('hc-miss-prob-input').value;
  var hgMissValue = document.getElementById('hg-miss-input').value;
  var hgMissProbValue = document.getElementById('hg-miss-prob-input').value;
  var rbMissValue = document.getElementById('rb-miss-input').value;
  var rbFailureValue = document.getElementById('rb-failure-input').value;
  
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

  var medalValue = outMedalValue - inMedalValue; 

  var resultMessage = '推定差枚: ' + Math.round(medalValue) + '枚';
  
  var resultElement = document.getElementById('result');
  resultElement.textContent = resultMessage;
}
