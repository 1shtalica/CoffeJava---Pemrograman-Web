document.getElementById("btn-submit").onclick = function () {
    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const password = document.getElementById("input-password").value;
  
    if (password.length < 6) {
      alert("Password must have at least 6 characters");
      return;
    }
  
    if (name.trim() === "") {
      alert("Please input your name");
      return;
    }
  
    if (!email.endsWith("@gmail.com")) {
      alert("Please enter a valid email");
      return;
    }

    window.location.href = '../Login/login.html';
  };
  