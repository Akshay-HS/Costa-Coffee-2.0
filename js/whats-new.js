async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/users/");
    const data = await response.json();
    console.log(data);
    const users = data.users;

    for (let i = 1; i < 4; i++) {
      const ran = Math.floor(Math.random() * 20);
      const offerContainer = document.getElementById(`offer${i}`);
      const img1 = document.createElement("img");
      img1.src = users[ran].image;
      img1.className = "images";
      offerContainer.appendChild(img1);
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchData();


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
  

 