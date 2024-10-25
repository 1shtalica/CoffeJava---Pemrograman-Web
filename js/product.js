//image slider
const images = document.querySelectorAll(".grid-img img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

const updateSliderPosition = () => {
  const container = document.querySelector(".grid-img");
  const containerWidth = container.clientWidth; // Get the current width dynamically
  const translateX = -currentIndex * containerWidth;

  container.style.transform = `translateX(${translateX}px)`;
  
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
const infoButton = document.getElementById("info");
const sizeInfo = document.getElementById("size-info");

infoButton.addEventListener("click", (event) => {
  setTimeout(() => sizeInfo.classList.add("active"), 10);
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!sizeInfo.contains(event.target) && event.target.id !== "info") {
    sizeInfo.classList.remove("active");
  }
});
