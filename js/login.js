document.getElementById("btn-login").onclick = function() {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    if (!email.endsWith("@gmail.com")) {
        alert("Please enter a valid email");
        return;
      }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        document.getElementById("password").value = ""; 
        return;
    } 
        window.location.href = "../Landing/index.html";
    
};

document.getElementById("btn-signup").onclick = function() {
    window.location.href = "../Registration/regis.html";
};
