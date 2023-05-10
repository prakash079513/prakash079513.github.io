const form = document.getElementById("registration-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!isValidEmail(email)) {
    showErrorMessage(emailInput, emailError, "Invalid email address.");
  } else {
    hideErrorMessage(emailInput, emailError);
  }

  if (!isValidPassword(password)) {
    showErrorMessage(
      passwordInput,
      passwordError,
      "Password must be at least 8 characters long."
    );
  } else {
    hideErrorMessage(passwordInput, passwordError);
  }

  if (isValidEmail(email) && isValidPassword(password)) {
    // Submit the form
    form.submit();
  }
});

function isValidEmail(email) {
  // A basic email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

function showErrorMessage(input, errorElement, message) {
  input.classList.add("invalid");
  errorElement.innerText = message;
  errorElement.classList.add("active");
}

function hideErrorMessage(input, errorElement) {
  input.classList.remove("invalid");
  errorElement.innerText = "";
  errorElement.classList.remove("active");
}
