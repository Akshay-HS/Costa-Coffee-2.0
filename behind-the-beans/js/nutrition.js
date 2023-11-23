document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the "Nutrition and well-being" link
  const nutritionLink = document.getElementById("nutrition-a");
  nutritionLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Call the function to clear and create new content
    clearAndCreateNewContent();
  });

  // Rest of your existing JavaScript code here
});

function clearAndCreateNewContent() {
  const container = document.getElementById("container");
  // Clear the container by removing all its child nodes

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Call the setRandomImage function to add new content
  newContent();
}

function newContent() {
  const container = document.getElementById("container");
  const h1 = document.createElement("h1");
  h1.id = "nutrition-h1";
  h1.textContent = "Our commitment to your wellbeing";
  container.appendChild(h1);
  const p1 = document.createElement("p");
  p1.id = "nutrition-p1";
  p1.textContent =
    "We are committed to providing healthier choices to all our customers and have a long-term plan to improve the nutritional balance of our menu.";
  container.appendChild(p1);
  const p2 = document.createElement("p");
  p2.id = "nutrition-p2";
  p2.textContent =
    "While our core coffee range contains no added sugar, we have made some significant changes to the rest of the drinks menu. Through reformulation, introducing more healthier alternatives and reviewing our portion sizes, we have achieved a total sugar reduction of over 30% across all our cup sizes and milk options in our drinks range.";
  container.appendChild(p2);
  const img1 = document.createElement("img");
  img1.id = "nutrition-img1";
  img1.src = "assets//images/coffee-cup.png";
  container.appendChild(img1);
  const p3 = document.createElement("p");
  p3.id = "nutrition-p3";
  p3.textContent =
    "Our Latte has no added sugar and, when served in a small size with skimmed milk, contains just 70 calories";
  container.appendChild(p3);
  const h2 = document.createElement("h1");
  h2.id = "nutrition-h2";
  h2.textContent = "Allergens advice";
  container.appendChild(h2);
  const p4 = document.createElement("p");
  p4.id = "nutrition-p4";
  p4.textContent =
    "As we use shared equipment, we cannot guarantee that our unpackaged food items or hand-crafted drinks are suitable for people with severe allergies. Check our Allergen Information or ask a Costa Coffee team member each visit as ingredients may have changed since your last purchase.";
  container.appendChild(p4);
  const div1 = document.createElement("div");
  div1.id = "nutrition-div1";
  container.appendChild(div1);
  const img2 = document.createElement("img");
  img2.id = "nutrition-img2";
  img2.src = "assets/images/nutrition-img2.jpg";
  div1.appendChild(img2);
  const div2 = document.createElement("div");
  div2.id = "nutrition-div2";
  div1.appendChild(div2);
  const h3 = document.createElement("h2");
  h3.id = "nutrition-h3";
  h3.textContent = "What’s Next";
  div2.appendChild(h3);
  const p5 = document.createElement("p");
  p5.id = "nutrition-p5";
  p5.textContent =
    "We support our charity, the Costa Foundation, to improve the lives of those working and living within coffee-growing communities.";
  div2.appendChild(p5);
  const a1 = document.createElement("a");
  a1.id = "nutrition-a1";
  a1.href = "";
  a1.textContent = "Costa Foundation ➤";
  div2.appendChild(a1);
  const founddiv = document.createElement("div");
}
