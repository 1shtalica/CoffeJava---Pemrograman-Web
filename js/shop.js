$(document).ready(function () {
    $("#burger-menu").on("click", function () {
      $("#nav-menu ul").toggleClass("show");
    });
  
    $(".logo").on("click", () => {
      location.reload();
  });

  // Handle love icon click
  $(".love-icon").click(function() {
    const card = $(this).closest('.card');
    const productData = {
        id: Date.now(),
        title: card.find('h3').text(),
        price: card.find('p').text(),
        img: card.find('img').attr('src')
    };


  // Toggle active class
  $(this).toggleClass("active");

  if ($(this).hasClass("active")) {
    // Add to favorites
    addToFavorites(productData);
  } else {
    // Remove from favorites
    removeFromFavorites(productData.title);
  }
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
    
    //scroll secara horizontal
      $(".horizontal-scroll").on("wheel", function(e) {
          e.preventDefault();  
          let delta = e.originalEvent.deltaY*5;
          $(this).scrollLeft($(this).scrollLeft() + delta);
      });
  

    startSlider();
    
  });