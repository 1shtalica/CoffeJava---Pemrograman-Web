const sizeOptions = document.querySelectorAll(".size-option");
const images = document.querySelectorAll(".images");

sizeOptions.forEach((button) => {
  button.addEventListener("click", () => {
    sizeOptions.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    const getZoomElement = document.getElementById("zoom");
    getZoomElement.setAttribute("src", image.src);
  });
});

images.forEach((image) => {
  image.addEventListener("mouseleave", () => {
    const getZoomElement = document.getElementById("zoom");
    getZoomElement.setAttribute("src", "");
  });
});
