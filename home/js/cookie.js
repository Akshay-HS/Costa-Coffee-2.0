document.addEventListener("DOMContentLoaded", function () {
  const cookieButton = document.getElementById("cookieButton");
  const acceptButton = document.getElementById("acceptButton");
  const cookieDialog = document.getElementById("cookieDialog");

  // Function to toggle the button state and show/hide the dialog
  function toggleButtonState() {
    if (cookieButton.classList.contains("open")) {
      closeCookieDialog();
    } else {
      openCookieDialog();
    }
  }

  // Function to open the cookie dialog
  function openCookieDialog() {
    cookieDialog.style.display = "block";
    cookieButton.classList.add("open");
  }

  // Function to close the cookie dialog
  function closeCookieDialog() {
    cookieDialog.style.display = "none";
    cookieButton.classList.remove("open");
  }

  // Function to handle the "Accept" button click
  acceptButton.addEventListener("click", function () {
    closeCookieDialog();
  });

  // Add a click event handler to the cookie button
  cookieButton.addEventListener("click", toggleButtonState);
});
