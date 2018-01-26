//To show hide the html button box
var htmlBtn = document.getElementsByClassName('html-btn')[0];
var toolTipWrapper = document.getElementById('btn-tooltip-wrapper');

htmlBtn.addEventListener('mouseover', showTooltip);
htmlBtn.addEventListener('mouseout', hideTooltip);

function showTooltip() {
  toolTipWrapper.style.display = 'block';
}

function hideTooltip() {
  toolTipWrapper.style.display = 'none';
}
