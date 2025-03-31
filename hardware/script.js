document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('sliderRange');
    const overlay = document.getElementById('sliderOverlay');
  
    if (slider && overlay) {
      slider.addEventListener('input', function () {
        overlay.style.width = this.value + '%';
      });
    } else {
      console.error("Slider or overlay element not found!");
    }
  });