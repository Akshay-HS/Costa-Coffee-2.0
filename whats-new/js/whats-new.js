async function fetchData() {
  try {
    const response = await fetch("https://mocki.io/v1/3dd71866-f214-4e09-962c-693fd10de931");
    const data = await response.json();
    console.log(data);
    const users = data;

    for (let i = 1; i < 4; i++) {
      const ran = Math.floor(Math.random() * 2);
      const offerContainer = document.getElementById(`offer${i}`);
      const img1 = document.createElement("img");
      img1.src = users[2].image;
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
  

 