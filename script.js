// Get the username from local storage
let username = localStorage.getItem("username");

// Update the greeting with the username
document.getElementById("greeting").textContent =
  "Hello there, " + username + "!";
