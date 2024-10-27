//image slider
const images = document.querySelectorAll(".grid-img img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

const updateSliderPosition = () => {
  const $container = $(".grid-img");
  const containerWidth = $container.width();
  const translateX = -currentIndex * containerWidth;

  $container.css("transform", `translateX(${translateX}px)`);
};

$(".prev").on("click", function () {
  currentIndex =
    currentIndex > 0 ? currentIndex - 1 : $(".grid-img img").length - 1;
  updateSliderPosition();
});

$(".next").on("click", function () {
  currentIndex =
    currentIndex < $(".grid-img img").length - 1 ? currentIndex + 1 : 0;
  updateSliderPosition();
});

// Update item
let totalItems = 1;
const price = parseInt($("#price").text().trim().slice(3).replaceAll(".", ""));

const updateSubTotal = () => {
  const totalPrice = totalItems * price;
  $("#display-item").val(totalItems);
  $("#sub-total").html(`Rp ${totalPrice.toLocaleString("id-ID")},00`);
};

$("#add").on("click", function () {
  totalItems++;
  updateSubTotal();
});

$("#substract").on("click", function () {
  if (totalItems > 1) {
    totalItems--;
    updateSubTotal();
  }
});

$("#display-item").on("change", function () {
  totalItems = Math.max(1, parseInt($(this).val()) || 1);
  updateSubTotal();
});

//size
$(".size-option").on("click", function () {
  $(".size-option").css({ backgroundColor: "white", color: "black" });
  $(this).css({ backgroundColor: "#fcdcb8", color: "black" });
});

//size info
$("#info").on("click", function (event) {
  event.stopPropagation();
  setTimeout(() => $("#size-info").addClass("active"), 10);
});

$(document).on("click", function (event) {
  if (
    !$("#size-info").is(event.target) &&
    $("#size-info").has(event.target).length === 0
  ) {
    $("#size-info").removeClass("active");
  }
});

//tabbar
$(".tab-button").on("click", function () {
  $(".tab-button").removeClass("active");
  $(".tab-content").hide();

  $(this).addClass("active");
  const tabId = $(this).data("tab");
  $(`#${tabId}`).show();
});

$(window).on("scroll", function () {
  const $cart = $(".cart");
  const stopPoint =
    $(".tab-container").offset().top +
    $cart.outerHeight() -
    $cart.outerHeight() * 0.14;
  const scrollPosition = $(window).scrollTop();
  const cartHeight = $cart.outerHeight();

  if (scrollPosition + cartHeight >= stopPoint) {
    $cart.css("top", `${stopPoint - scrollPosition - cartHeight}px`);
  } else {
    $cart.css("top", "10px");
  }
});
