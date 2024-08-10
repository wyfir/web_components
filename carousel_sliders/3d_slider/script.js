$(document).ready(function () {
  let currentIndex = 0;
  const totalSlides = 4;
  const intervalTime = 3000;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    $("#slider input[type='radio']").eq(currentIndex).prop("checked", true);
  }

  setInterval(showNextSlide, intervalTime);
});
