const topContainer=document.getElementById("topContainer");


const Containerdiv=document.createElement("div");// div which contain 
Containerdiv.className="Containerdiv";

const div1=document.createElement("div");
div1.className="div1";
const orderOnline=document.createElement("h1");
orderOnline.textContent="Order Online";
orderOnline.className="orderOnline"
const description=document.createElement("p");
description.textContent="Get freshly brewed coffee, delicious snacks and sweet treats delivered to your homes."
description.className="description"
div1.appendChild(orderOnline);
div1.appendChild(description);

const div2=document.createElement("div");
div2.className="div2";
const cupImg=document.createElement("img");
cupImg.src = "";
cupImg.className="cup";
div2.appendChild(cupImg);
Containerdiv.appendChild(div1);
Containerdiv.appendChild(div2);
topContainer.appendChild(Containerdiv);

//website and link
fetch("https://dummyjson.com/users/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const users = data.users;
    const websiteContainer=document.getElementById("imgContainer");
    //container for img
    const websiteimg=document.createElement("img");
    websiteimg.src=users[0].image;
    websiteContainer.appendChild(websiteimg);// adding image to container

    const websiteContainer1=document.getElementById("imgContainer1");
    //container for img
    const websiteimg1=document.createElement("img");
    websiteimg1.src=users[1].image;
    websiteContainer1.appendChild(websiteimg1);// adding image to container
    
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
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
  








