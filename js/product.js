//slider
let curentIndex = 0;
const updateSlider = () => {
  const imageContainerWidth = $(".grid-img").width();
  const imgSlide = -curentIndex * imageContainerWidth;
  $(".grid-img").css("transform", `translateX(${imgSlide}px)`);
};

$(".next").on("click", function () {
  curentIndex =
    curentIndex == $(".grid-img img").length - 1 ? 0 : curentIndex + 1;
  updateSlider();
});

$(".prev").on("click", function () {
  curentIndex =
    curentIndex == 0 ? $(".grid-img img").length - 1 : curentIndex - 1;
  updateSlider();
});

//size Option

$(".size-option").on("click", function () {
  $(".size-option").css({ "background-color": "white", color: "black" });
  $(this).css("background-color", "#fcdcb8");
});
//update item
let curentItem = 1;
const price = $("#price").data("price");
const updateSubtotal = () => {
  const total = price * curentItem;
  $("#sub-total").html(
    total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
  );
  $("#sub-total-mobile").html(
    total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
  );
};

$("#add").on("click", function () {
  curentItem = curentItem + 1;
  $("#display-item").val(curentItem);
  updateSubtotal();
});

$("#substract").on("click", function () {
  $("#display-item").val(curentItem);
  curentItem = curentItem <= 1 ? 1 : curentItem - 1;
  updateSubtotal();
});

$("#display-item").on("change", function () {
  curentItem = $("#display-item").val() <= 1 ? 1 : $("#display-item").val();
  updateSubtotal();
  $("#display-item").val(curentItem);
});

$("#add-mobile").on("click", function () {
  curentItem = curentItem + 1;
  $("#display-item-mobile").val(curentItem);
  updateSubtotal();
});

$("#substract-mobile").on("click", function () {
  $("#display-item-mobile").val(curentItem);
  curentItem = curentItem <= 1 ? 1 : curentItem - 1;
  updateSubtotal();
});

$("#display-item-mobile").on("change", function () {
  curentItem =
    $("#display-item-mobile").val() <= 1 ? 1 : $("#display-item").val();
  updateSubtotal();
  $("#display-item").val(curentItem);
});

//position cart

$(window).on("scroll", function () {
  const tabBarOffset = $(".tab-container").offset().top;
  const tabBarheight = $(".tab-container").outerHeight();
  const stopPoint = tabBarOffset + tabBarheight;
  const cartHeight = $(".cart").outerHeight();
  const scroll = $(window).scrollTop();
  if (stopPoint <= scroll + cartHeight) {
    $(".cart").css("top", `${stopPoint - scroll - cartHeight}px`);
  } else {
    $(".cart").css("top", "10px");
  }
});
//size-info
$("#info").on("click", function (event) {
  $("#size-info").addClass("active");
  event.stopPropagation();
});

$(document).on("click", function (event) {
  if (
    !$("#size-info").is(event.target) &&
    $("#size-info").has(event.target).length == 0
  ) {
    $("#size-info").removeClass("active");
  }
});

//tabbar

$(".tabs button").on("click", function () {
  const dataTab = $(this).data("tab");
  $(".tab-content").each(function () {
    $(this).hide();
  });

  $(`#${dataTab}`).show();
  const tabBarOffset = $(".tab-container").offset().top;
  const tabBarheight = $(".tab-container").outerHeight();
  const stopPoint = tabBarOffset + tabBarheight;
  const cartHeight = $(".cart").outerHeight();
  const scroll = $(window).scrollTop();
  if (stopPoint <= scroll + cartHeight) {
    $(".cart").css("top", `${stopPoint - scroll - cartHeight}px`);
  } else {
    $(".cart").css("top", "10px");
  }
});

$("#burger-menu").on("click", function () {
  $("#nav-menu ul").toggleClass("show");
});

$('.logo').on('click', () => {
  location.reload();
})

$('.logo').on('click', () => {
  location.reload();
})