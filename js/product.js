//image slider
const images = document.querySelectorAll(".grid-img img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

const updateSliderPosition = () => {
  console.log(currentIndex);
  const translateX = -currentIndex * 500;
  document.querySelector(
    ".grid-img"
  ).style.transform = `translateX(${translateX}px)`;
};

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
});

//add and substract
let totalItems = 1;

const price = parseInt(
  document.getElementById("price").innerHTML.trim().slice(3).replaceAll(".", "")
);

const add = document.getElementById("add");
const substract = document.getElementById("substract");
const subtotal = document.getElementById("sub-total");
const displayItems = document.getElementById("display-item");
let totalPrice = displayItems.value;

const updateSubTotal = () => {
  totalPrice = totalItems * price;
  displayItems.value = totalItems;
  subtotal.innerHTML = `Rp ${totalPrice.toLocaleString("id-ID")},00`;
};

add.addEventListener("click", () => {
  totalItems = totalItems + 1;
  updateSubTotal();
});

substract.addEventListener("click", () => {
  if (totalItems > 1) {
    totalItems = totalItems - 1;
    updateSubTotal();
  }
});

displayItems.addEventListener("change", () => {
  if (displayItems.value >= 1) {
    totalItems = displayItems.value;
  } else {
    totalItems = 1;
  }
  updateSubTotal();
});

//size
const sizes = document.querySelectorAll(".size-option");

sizes.forEach((size, i) => {
  size.addEventListener("click", () => {
    sizes.forEach((size, i) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//size info

document.addEventListener("click", function (event) {
  const sizeInfo = document.getElementById("size-info");

  if (!sizeInfo.contains(event.target)) {
    console.log("Clicked outside of Size Information!");
    sizeInfo.classList.add("move-out");
  }
});

document.getElementById("info").addEventListener("click", function () {
  const sizeInfo = document.getElementById("size-info");

  sizeInfo.style.left = "50%";
  sizeInfo.style.top = "50%";
  sizeInfo.style.transform = "translate(-50%, -50%)";
  sizeInfo.classList.remove("move-out");
});