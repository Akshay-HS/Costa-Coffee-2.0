document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the "Costa Foundation" link
  const responsibleLink = document.getElementById("responsible-a");
  responsibleLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Call a separate function for the "Costa Foundation" content
    createresponsibleContent();
  });

  // Rest of your JavaScript code for "Costa Foundation" here
});

function createresponsibleContent() {
  const container = document.getElementById("container");
  // Clear the container by removing all its child nodes
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // Call the costaNewContent function to add new content for Costa Foundation
  responsibleNewContent(container);
}

function responsibleNewContent(container) {
  // Create and append content specific to Costa Foundation
  const headingNav = document.getElementById("headingNav");
  headingNav.textContent = "Responsible Sourcing";
  //
  // Create the main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("responsible-main-div");
  container.appendChild(mainDiv);

  // Create the left div
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("responsible-left-div");

  // Apply a background color to the left div (e.g., red)
  // leftDiv.style.backgroundColor = "aqua";

  // Create and append an h1 and p to the left div
  const div_h1 = document.createElement("h1");
  div_h1.id = "responsible-div-h";
  div_h1.textContent = "Working together, responsibly";
  leftDiv.appendChild(div_h1);

  const p = document.createElement("p");
  p.id = "responsible-div-p";
  p.textContent =
    "We have a responsibility to ensure sound social, ethical and environmental practices within our supply chains. That’s why we are committed to carrying out all our procurement practices in the most sustainable and responsible way possible.By working with our suppliers and sustainable practice experts, we have developed and implemented policies for human rights in the supply chain.";
  leftDiv.appendChild(p);

  // Create the right div
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("responsible-right-div");

  // Create an image element and set its source
  const image = document.createElement("img");
  image.src = "assets/responsibleImg.png"; // Set the image source as needed
  rightDiv.appendChild(image);

  // Append the left and right divs to the main div
  mainDiv.appendChild(leftDiv);
  mainDiv.appendChild(rightDiv);

  //
  const h1 = document.createElement("h1");
  h1.textContent = "Working with the Rainforest Alliance";
  h1.id = "responsible-h1";
  container.appendChild(h1);
  const p1 = document.createElement("p");
  p1.id = "nutrition-p1";
  p1.textContent =
    "We recognise that to have a sustainable coffee business we need to invest in a sustainable coffee supply, ensuring that our coffee is grown in a way that protects the environment and allows the communities growing our coffee to thrive.";
  container.appendChild(p1);
  const p2 = document.createElement("p");
  p2.id = "nutrition-p1";
  p2.textContent =
    "The Rainforest Alliance is a non-profit organisation, working to create a future in which people and nature thrive in harmony. Since we started our partnership with the Rainforest Alliance in 2008, we’ve been working together to tackle some of the most pressing issues facing the planet today by changing the way we produce, source and consume the world’s natural resources.";
  container.appendChild(p2);
  const p3 = document.createElement("p");
  p3.id = "nutrition-p1";
  p3.textContent =
    "So, this means you can be confident that you’re supporting the farmers and forest communities who are looking after our natural resources whenever you choose to drink Costa Coffee.";
  container.appendChild(p3);
  const h2 = document.createElement("h1");
  h2.textContent = "Human rights";
  h2.id = "responsible-h2";
  container.appendChild(h2);
  const p4 = document.createElement("p");
  p4.id = "nutrition-p4";
  p4.textContent =
    "As a business, we are dedicated to inspiring the world to love great coffee. However, we know that we only have the chance to achieve this ambition because of the people who work in our organisation, the people who create our products, and of course the people who buy them. People form the core of our business and we’re committed to making sure that human rights are protected across our own business as well as our supply chains.";
  container.appendChild(p4);
  const p5 = document.createElement("p");
  p5.id = "responsible-p5";
  p5.textContent =
    "We don’t tolerate any form of slavery, forced labour or human trafficking – within our own business, across the operations of our franchisees and business partners, suppliers and wider supply chain.";
  container.appendChild(p5);
  

  // You can add more content here as needed
}
