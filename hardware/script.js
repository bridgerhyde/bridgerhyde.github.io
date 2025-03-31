const slider = document.getElementById('slider');
const overlay = document.querySelector('.slider-overlay');

slider.addEventListener('input', function () {
  overlay.style.width = `${this.value}%`;
});