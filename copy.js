document
  .getElementById("register-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get the email and password values from the form
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Get the username from the email address
    let username = email.split("@")[0];

    // Store the username in local storage
    localStorage.setItem("username", username);

    // Redirect to the hello page
    window.location.href = "main.html";
  });
