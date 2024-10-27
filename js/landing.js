document.getElementById("burger-menu").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu").querySelector("ul");
  navMenu.classList.toggle("show");
});
// landing.js
$(document).ready(function () {
  // Load favorite status when page loads
  loadFavoriteStatus();

  $("#burger-menu").on("click", function () {
    $("#nav-menu ul").toggleClass("show");
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
});

// Function to load favorite status
function loadFavoriteStatus() {
  const favorites = getFavorites();

  $(".love-icon").each(function () {
    const card = $(this).closest(".card");
    const productTitle = card.find("h3").text();

    // Add active class if product is in favorites
    if (favorites.some((item) => item.title === productTitle)) {
      $(this).addClass("active");
    }
  });
}

// Function to add product to favorites
function addToFavorites(productData) {
  let favorites = getFavorites();

  // Add to favorites if not exists
  if (!favorites.some((item) => item.title === productData.title)) {
    favorites.push(productData);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

// Function to remove product from favorites
function removeFromFavorites(productTitle) {
  let favorites = getFavorites();

  // Remove from favorites
  favorites = favorites.filter((item) => item.title !== productTitle);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Function to get favorites from localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}
