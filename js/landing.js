$(document).ready(function () {
  $("#burger-menu").on("click", function () {
    $("#nav-menu ul").toggleClass("show");
  });

  $('.logo').on('click', () => {
    location.reload();
})

  $(".love-icon").each(function (index) {
    const isFavorite = localStorage.getItem(`favorite-${index}`);
    if (isFavorite === "true") {
      $(this).addClass("active");
    }
  });

  $(".love-icon").on("click", function () {
    $(this).toggleClass("active");
    const index = $(".love-icon").index(this);
    const isFavorite = $(this).hasClass("active");
    localStorage.setItem(`favorite-${index}`, isFavorite);
  });
});
