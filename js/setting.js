$(document).ready(function () {
  $("#burger-menu").on("click", function () {
    $("#nav-menu ul").toggleClass("show");
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function updateField(field) {
    const value = $(`#${field}`).val().trim();
    if (field === "email" && !validateEmail(value)) {
      displayMessage("Please enter a valid email address.", "error");
      return;
    }
    if (value) {
      displayMessage(`Your ${field} has been updated successfully!`, "success");
    } else {
      displayMessage(`Please enter a valid ${field}.`, "error");
    }
  }

  function updatePassword() {
    const password = $("#password").val();
    const confirmPassword = $("#confirm-password").val();

    if (password && confirmPassword) {
      if (password === confirmPassword) {
        displayMessage(
          "Your password has been updated successfully!",
          "success"
        );
      } else {
        displayMessage("Passwords do not match. Please try again.", "error");
      }
    } else {
      displayMessage("Please enter and confirm your new password.", "error");
    }
  }

  function displayMessage(message, type) {
    const statusMessage = $("#status-message");
    statusMessage.text(message);
    statusMessage.css("color", type === "success" ? "#4caf50" : "#f44336");
  }

  $(".update-btn").on("click", function () {
    const field = $(this).prev("input").attr("id");
    if (field === "password" || field === "confirm-password") {
      updatePassword();
    } else {
      updateField(field);
    }
  });
});
