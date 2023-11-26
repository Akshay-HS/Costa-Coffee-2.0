
document.addEventListener("DOMContentLoaded", function () {

 
async function fetchImage() {
  try {
    const response = await fetch("https://mocki.io/v1/b3d85162-96aa-4137-97f9-a62bed8751fc");
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * 8);
    const image = data[randomIndex].image_url;
    const title = data[randomIndex].author;
    return { image, title };
  } catch (error) {
    console.error("Error fetching image data:", error);
    return null;
  }
}
// creating the body
async function createTopImage() {
  const { image, title } = await fetchImage();
  const top_image_container = document.querySelector(
    ".our-story-image-container"
  );
 
  const top_image = document.createElement("img");
  top_image.setAttribute("id", "our-story-top-img");
  top_image.style.height = "80vh";
  top_image.src = image;
  top_image.alt = title;
  top_image_container.appendChild(top_image);
}
createTopImage()

    const drinksLink = document.querySelector('.navbar-row a[href="#drinks"]');
    drinksLink.addEventListener("click", function (event) {
      toggleActive(drinksLink);
      reloadDIV();
      drinks();
    });
  
    const foodLink = document.querySelector('.navbar-row a[href="#food"]');
    foodLink.addEventListener("click", function (event) {
      toggleActive(foodLink);
      reloadDIV();
      food();
    });
    foodLink.click();
  function toggleActive(link) {
    const links = document.querySelectorAll('.navbar-row a');
    links.forEach((otherLink) => otherLink.classList.remove('active'));
    link.classList.add('active');
  }
  
   
 
    function reloadDIV() {
      const main_container = document.getElementById("main-container");
      const drink_container = document.getElementById("drinks-container");
      main_container.innerHTML = ""; // Clear the contents of maincontainer
      drink_container.innerHTML="";
    }

   
  //Code to print the food items in the menu ends
    function food() {
     const mainContainer= document.getElementById("main-container");
     mainContainer.innerHTML = ""; // Clear previous content
    console.log("food");

      fetch("https://mocki.io/v1/b3d85162-96aa-4137-97f9-a62bed8751fc  ")
      .then((response) => response.json())
      .then((data) => {
        let rowCounter=0;
        console.log(data);
        for(let i=0;i<=3;i++)
        {
          
      const foodContainer = document.createElement('div');
      foodContainer.classList.add('container', 'food-menu-item');
  
      const row = document.createElement('div');
      row.classList.add('row');
  
      const leftContainer = document.createElement('div');
      leftContainer.classList.add('col-md-6');
    
  
      const foodImage = document.createElement('img');
    foodImage.src = data[rowCounter].image_url; 
    foodImage.classList.add("food-item-image");
      leftContainer.appendChild(foodImage);
  
      const rightContainer = document.createElement('div');
      rightContainer.classList.add('col-md-6');

      const foodName = document.createElement('h2');
      foodName.textContent = data[rowCounter].item_name;
      rightContainer.appendChild(foodName);
  
      const foodDesc = document.createElement('p');
      foodDesc.textContent = data[rowCounter].item_desc;
      rightContainer.appendChild(foodDesc);
document.body.appendChild(mainContainer);
      mainContainer.appendChild(foodContainer);
      row.appendChild(leftContainer);
      row.appendChild(rightContainer);
      
      foodContainer.appendChild(row);
  
rowCounter++;


      const foodContainer2 = document.createElement('div');
      foodContainer2.classList.add('container', 'food-menu-item');
  
      const row2 = document.createElement('div');
      row2.classList.add('row');
      const leftContainer2 = document.createElement('div');
      leftContainer2.classList.add('col-md-6');

      const foodName2 = document.createElement('h2');
      

      foodName2.textContent = data[rowCounter].item_name;
      leftContainer2.appendChild(foodName2);
  
      const foodDesc2 = document.createElement('p');
      foodDesc2.textContent = data[rowCounter].item_desc;
      leftContainer2.appendChild(foodDesc2);
  
      const rightContainer2 = document.createElement('div');
      rightContainer2.classList.add('col-md-6');
    
  
      const foodImage2 = document.createElement('img');
    foodImage2.src = data[rowCounter].image_url; 
    foodImage2.classList.add("food-item-image");
      rightContainer2.appendChild(foodImage2 );
  
    

      document.body.appendChild(mainContainer);
      mainContainer.appendChild(foodContainer2);
      row2.appendChild(leftContainer2);
      row2.appendChild(rightContainer2);
      
      
      foodContainer2.appendChild(row2);
      rowCounter++;
        }
        const allergenLink = document.createElement("a");
        allergenLink.classList.add("btn", "btn-allergens");
        allergenLink.textContent = "*Click here to know the allergen information";
        allergenLink.href = "assets/allergens.pdf"; 
        allergenLink.target = "_blank"; // Open link in a new tab
        mainContainer.appendChild(allergenLink); 
    })

  }
 //Code to print the food items in the menu ends


//Code to print the drinks in the menu starts
      function drinks() {
        const drinksMainContainer= document.getElementById("drinks-container");
        drinksMainContainer.innerHTML = "";
         fetch("https://mocki.io/v1/7cf24f8d-9651-419d-a3d4-0cf622bfcc2e ")
         .then((response) => response.json())
         .then((data) => {
           let rowCounter=0;
           console.log(data);
           for(let i=0;i<3;i++)
           {
             
         const drinksContainer = document.createElement('div');
         drinksContainer.classList.add('container', 'drinks-menu-item');
     
         const row = document.createElement('div');
         row.classList.add('row');
     
         const leftContainer = document.createElement('div');
         leftContainer.classList.add('col-md-6');
       
     
         const drinksImage = document.createElement('img');
       drinksImage.src = data[rowCounter].image_url; 
       drinksImage.classList.add("drinks-item-image");
         leftContainer.appendChild(drinksImage);
     
         const rightContainer = document.createElement('div');
         rightContainer.classList.add('col-md-6');
   
         const drinksName = document.createElement('h2');
         drinksName.textContent = data[rowCounter].item_name;
         rightContainer.appendChild(drinksName);
     
         const drinksDesc = document.createElement('p');
         drinksDesc.textContent = data[rowCounter].item_desc;
         rightContainer.appendChild(drinksDesc);
   document.body.appendChild(drinksMainContainer);
   drinksMainContainer.appendChild(drinksContainer);
         row.appendChild(leftContainer);
         row.appendChild(rightContainer);
         
         drinksContainer.appendChild(row);
     
   rowCounter++;
   
   
   
         const drinksContainer2 = document.createElement('div');
         drinksContainer2.classList.add('container', 'drinks-menu-item');
     
         const row2 = document.createElement('div');
         row2.classList.add('row');
         const leftContainer2 = document.createElement('div');
         leftContainer2.classList.add('col-md-6');
   
         const drinksName2 = document.createElement('h2');
         
         drinksName2.textContent = data[rowCounter].item_name;
         leftContainer2.appendChild(drinksName2);
     
         const drinksDesc2 = document.createElement('p');
         drinksDesc2.textContent = data[rowCounter].item_desc;
         leftContainer2.appendChild(drinksDesc2);
     
         const rightContainer2 = document.createElement('div');
         rightContainer2.classList.add('col-md-6');
       
     
         const drinksImage2 = document.createElement('img');
       drinksImage2.src = data[rowCounter].image_url; 
       drinksImage2.classList.add("drinks-item-image");
         rightContainer2.appendChild(drinksImage2 );
     
       
   
         document.body.appendChild(drinksMainContainer);
         drinksMainContainer.appendChild(drinksContainer2);
         row2.appendChild(leftContainer2);
         row2.appendChild(rightContainer2);
         
         
         drinksContainer2.appendChild(row2);
         rowCounter++;
        }

        // Create the "Create your own coffee" button
        const customCoffeeButton = document.createElement('button');
        customCoffeeButton.textContent = 'Do you want to make your own coffee?';
        customCoffeeButton.addEventListener('click', function() {
            window.location.href = 'custom-coffee.html';
        });

        // Append the button to the drinksMainContainer
        drinksMainContainer.appendChild(customCoffeeButton);
    });
}    
 //Code to print the drinks in the menu ends


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