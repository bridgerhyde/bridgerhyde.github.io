const slider = document.getElementById('sliderRange');
const afterWrapper = document.getElementById('afterWrapper');

slider.addEventListener('input', function () {
  const percent = this.value;
  afterWrapper.style.width = percent + '%';
});