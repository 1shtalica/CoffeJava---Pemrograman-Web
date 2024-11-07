$(document).ready(function () {
  $("#burger-menu").on("click", function () {
    $("#nav-menu ul").toggleClass("show");
  });

  $("#profile-preview").on("click", function () {
    $("#profile-picture").click();
  });

  $("#profile-picture").on("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      $("#profile-preview").attr("src", e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
});
