$(document).ready(function () {
    $("#burger-menu").on("click", function () {
      $("#nav-menu ul").toggleClass("show");
    });
  
    $(".logo").on("click", () => {
      location.reload();
  });

    let currentIndex = 0;
    const slides = $('.slider img');
    const slideCount = slides.length;
    const intervalTime = 10000; 

    function updateSlidePosition() {
        $('.slider').css('transform', `translateX(-${100 * currentIndex}%)`);
    }

    function startSlider() {
        setInterval(function () {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlidePosition();
        }, intervalTime);
    }

    startSlider();
  });