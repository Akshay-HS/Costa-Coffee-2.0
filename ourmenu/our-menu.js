document.addEventListener("DOMContentLoaded", function () {
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
    //food();
    foodLink.click();
  function toggleActive(link) {
    const links = document.querySelectorAll('.navbar-row a');
    links.forEach((otherLink) => otherLink.classList.remove('active'));
    link.classList.add('active');
  }
  
   
 
    function reloadDIV() {
      const container = document.getElementById("main-container");
      const drink_container = document.getElementById("drinks-container");
      container.innerHTML = ""; // Clear the contents of maincontainer
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
        let j=0;
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
    foodImage.src = data[j].image_url; 
    foodImage.classList.add("food-item-image");
      leftContainer.appendChild(foodImage);
  
      const rightContainer = document.createElement('div');
      rightContainer.classList.add('col-md-6');

      const foodName = document.createElement('h2');
      foodName.textContent = data[j].item_name;
      rightContainer.appendChild(foodName);
  
      const foodDesc = document.createElement('p');
      foodDesc.textContent = data[j].item_desc;
      rightContainer.appendChild(foodDesc);
document.body.appendChild(mainContainer);
      mainContainer.appendChild(foodContainer);
      row.appendChild(leftContainer);
      row.appendChild(rightContainer);
      
      foodContainer.appendChild(row);
  
j++;


      const foodContainer2 = document.createElement('div');
      foodContainer2.classList.add('container', 'food-menu-item');
  
      const row2 = document.createElement('div');
      row2.classList.add('row');
      const leftContainer2 = document.createElement('div');
      leftContainer2.classList.add('col-md-6');

      const foodName2 = document.createElement('h2');
      //const ran2 = Math.floor(Math.random() * 25);
      foodName2.textContent = data[j].item_name;
      leftContainer2.appendChild(foodName2);
  
      const foodDesc2 = document.createElement('p');
      foodDesc2.textContent = data[j].item_desc;
      leftContainer2.appendChild(foodDesc2);
  
      const rightContainer2 = document.createElement('div');
      rightContainer2.classList.add('col-md-6');
    
  
      const foodImage2 = document.createElement('img');
    foodImage2.src = data[j].image_url; 
    foodImage2.classList.add("food-item-image");
      rightContainer2.appendChild(foodImage2 );
  
    

      document.body.appendChild(mainContainer);
      mainContainer.appendChild(foodContainer2);
      row2.appendChild(leftContainer2);
      row2.appendChild(rightContainer2);
      
      
      foodContainer2.appendChild(row2);
      j++;
        }
      
      
    }
      )}
 //Code to print the food items in the menu ends


//Code to print the drinks in the menu starts
      function drinks() {
        const drinksMainContainer= document.getElementById("drinks-container");
        drinksMainContainer.innerHTML = "";
         fetch("https://mocki.io/v1/7cf24f8d-9651-419d-a3d4-0cf622bfcc2e ")
         .then((response) => response.json())
         .then((data) => {
           let j=0;
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
       drinksImage.src = data[j].image_url; 
       drinksImage.classList.add("drinks-item-image");
         leftContainer.appendChild(drinksImage);
     
         const rightContainer = document.createElement('div');
         rightContainer.classList.add('col-md-6');
   
         const drinksName = document.createElement('h2');
         drinksName.textContent = data[j].item_name;
         rightContainer.appendChild(drinksName);
     
         const drinksDesc = document.createElement('p');
         drinksDesc.textContent = data[j].item_desc;
         rightContainer.appendChild(drinksDesc);
   document.body.appendChild(drinksMainContainer);
   drinksMainContainer.appendChild(drinksContainer);
         row.appendChild(leftContainer);
         row.appendChild(rightContainer);
         
         drinksContainer.appendChild(row);
     
   j++;
   
   
   
         const drinksContainer2 = document.createElement('div');
         drinksContainer2.classList.add('container', 'drinks-menu-item');
     
         const row2 = document.createElement('div');
         row2.classList.add('row');
         const leftContainer2 = document.createElement('div');
         leftContainer2.classList.add('col-md-6');
   
         const drinksName2 = document.createElement('h2');
         //const ran2 = Math.floor(Math.random() * 25);
         drinksName2.textContent = data[j].item_name;
         leftContainer2.appendChild(drinksName2);
     
         const drinksDesc2 = document.createElement('p');
         drinksDesc2.textContent = data[j].item_desc;
         leftContainer2.appendChild(drinksDesc2);
     
         const rightContainer2 = document.createElement('div');
         rightContainer2.classList.add('col-md-6');
       
     
         const drinksImage2 = document.createElement('img');
       drinksImage2.src = data[j].image_url; 
       drinksImage2.classList.add("drinks-item-image");
         rightContainer2.appendChild(drinksImage2 );
     
       
   
         document.body.appendChild(drinksMainContainer);
         drinksMainContainer.appendChild(drinksContainer2);
         row2.appendChild(leftContainer2);
         row2.appendChild(rightContainer2);
         
         
         drinksContainer2.appendChild(row2);
         j++;
           }
         
         
       }
         )}
    
 //Code to print the drinks in the menu ends


 //code to print the allergens section
//  var pleasingColorList = [
//   "#9c89b8",
//   "#f0a6ca",
//   "#efc3e6",
//   "#f0e6ef",
//   "#b8bedd",
//   "#d8e2dc",
//   "#ef476f",
//   "#f78c6b",
//   "#ffd166",
//   "#83d483",
//   "#06d6a0",
//   "#0cb0a9",
//   "#118ab2",
 
//   "#C47449",
//   "#FF7F83",
//   "#A94717",
//   "#DDA9CD",
//   "#B0DDF5",
//   "#CFA8CA",
//   "#EE7D80",
//   "#EFA021",
// ];
 
// async function fetchText() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     const text = data[Math.floor(Math.random() * 30)].body;
//     return text;
//   } catch (error) {
//     console.error("Error fetching text data:", error);
//     return null;
//   }
// }
 
// async function fetchImage() {
//   try {
//     const response = await fetch("https://picsum.photos/v2/list");
//     const data = await response.json();
//     const randomIndex = Math.floor(Math.random() * 29);
//     const image = data[randomIndex].download_url;
//     const title = data[randomIndex].author;
//     return { image, title };
//   } catch (error) {
//     console.error("Error fetching image data:", error);
//     return null;
//   }
// }

// async function createDynamicBody(rowCount) {
//   const whole_body_container = document.querySelector(".whole-body-container");
//   const body_container = document.createElement("div");
//   body_container.classList.add("container-fluid", "py-4");
 
//   for (let i = 1; i <= rowCount; i++) {
//     var blank_space_div = document.createElement("div");
//     blank_space_div.classList.add("row", "py-4");
//     body_container.appendChild(blank_space_div);
 
//     const row = document.createElement("div");
//     row.classList.add("row", "py-4");
 
//     const colImage = document.createElement("div");
//     colImage.style.height = "90vh";
//     colImage.classList.add(
//       "col-md-6",
//       "justify-content-md-center",
//       "g-0",
//       "text-center",
//       "d-flex",
//       "flex-column",
//       "overflow-hidden"
//     );
 
//     const colContent = document.createElement("div");
//     colContent.style.height = "90vh";
//     colContent.classList.add(
//       "col-md-6",
//       "justify-content-md-center",
//       "g-0",
//       "text-center",
//       "d-flex",
//       "flex-column",
//       "overflow-hidden"
//     );
 
//     const { image, title } = await fetchImage();
//     const text = await fetchText();
//     const img = document.createElement("img");
//     img.src = image;
//     img.alt = "image_alt;";
//     img.style.height = "90vh";
 
//     const titleElement = document.createElement("h2");
//     titleElement.classList.add("mb-4");
//     titleElement.textContent = title;
 
//     const textElement = document.createElement("p");
//     // textElement.setAttribute('id','body-text-content');
//     textElement.classList.add("lead", "mb-4",'px-custom');
//     textElement.textContent = text;
//     // textElement.style.paddingLeft = "105px"; // Add left padding
//     // textElement.style.paddingRight = "105px";
 
//     const exploreButton = document.createElement("a");
//     exploreButton.classList.add(
//       "btn",
//       "align-self-center",
//       "w-80"
//     );
//     exploreButton.setAttribute('id','explore-button');
//     exploreButton.href = "https://example.com/another-page.html";
//     exploreButton.textContent = "Explore the full menu ➤";
 
//     const randomIndex = Math.floor(Math.random() * pleasingColorList.length);
//     const randomColor = pleasingColorList[randomIndex];
 
//     if (i % 2 === 0) {
//       colContent.style.backgroundColor = randomColor;
//       colImage.appendChild(img);
//       colContent.appendChild(titleElement);
//       colContent.appendChild(textElement);
//       colContent.appendChild(exploreButton);
//     } else {
//       colImage.style.backgroundColor = randomColor;
//       colContent.appendChild(img);
//       colImage.appendChild(titleElement);
//       colImage.appendChild(textElement);
//       colImage.appendChild(exploreButton);
//     }
 
//     row.appendChild(colImage);
//     row.appendChild(colContent);
//     body_container.appendChild(row);
//   }
//   body_container.appendChild(blank_space_div);
//   whole_body_container.appendChild(body_container);
// }
 



    });