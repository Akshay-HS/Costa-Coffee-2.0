const topContainer=document.getElementById("topContainer");


const Containerdiv=document.createElement("div");// div which contain description and image
Containerdiv.className="Containerdiv";

const div1=document.createElement("div");
div1.className="div1";//containes heading and paragraph
const orderOnline=document.createElement("h1");
orderOnline.textContent="Order Online";
orderOnline.className="orderOnline"
const description=document.createElement("p");
description.textContent="Get freshly brewed coffee, delicious snacks and sweet treats delivered to your homes."
description.className="description"
//appending order online and discription to div1

div1.appendChild(orderOnline);
div1.appendChild(description);

const div2=document.createElement("div");//container for image
div2.className="div2";
/*const cupImg=document.createElement("img");
cupImg.src = "/assets/cup (2).png";
cupImg.className="cup";
div2.appendChild(cupImg);*/
//appending div1 and div2 to topContainer
Containerdiv.appendChild(div1);
   //Containerdiv.appendChild(div2);
//appending topContainer to Containerdiv
topContainer.appendChild(Containerdiv);

//website and link
async function fetchData() {
  try {
    const response = await fetch("https://mocki.io/v1/9b412821-ed29-4428-accb-fcd9157ade70");
    const data = await response.json();
    console.log(data);

    const users = data;
    const websiteContainer = document.getElementById("imgContainer");
    const websiteContainer1 = document.getElementById("imgContainer1");

    const websiteimg = document.createElement("img");
    websiteimg.src = users[0].img;
    websiteContainer.appendChild(websiteimg);

    const websiteimg1 = document.createElement("img");
    websiteimg1.src = users[1].img;
    websiteContainer1.appendChild(websiteimg1);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchData();


  // js for cookie
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




  //form

  
  const scriptURL = "https://script.google.com/macros/s/AKfycbywDYy3n6UghCQ15DMRMaP1bvk7n4ufP32PF37BLSXdZ1igpW3wbK89zRn761niGsie/exec";
 
  const form = document.forms["review_form"];
   
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thank you! your form is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  });
   
  








