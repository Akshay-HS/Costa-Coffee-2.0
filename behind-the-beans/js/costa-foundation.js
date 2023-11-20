document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the "Costa Foundation" link
  const costaLink = document.getElementById("costa-foundation-a");
  costaLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Call a separate function for the "Costa Foundation" content
    createCostaFoundationContent();
  });

  // Rest of your JavaScript code for "Costa Foundation" here
});

function createCostaFoundationContent() {
  const container = document.getElementById("container");

  // Clear the container by removing all its child nodes
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Call the costaNewContent function to add new content for Costa Foundation
  costaNewContent(container);
}

function costaNewContent(container) {
  // Create and append content specific to Costa Foundation
  const headingNav = document.getElementById("headingNav");
  headingNav.textContent = "Costa Foundation";
  const h1 = document.createElement("h1");
  h1.id = "costa-foundation-h1";
  h1.textContent = "Building schools and futures";
  container.appendChild(h1);
  const p1 = document.createElement("p");
  p1.id = "foundation-p1";
  p1.textContent =
    "The farmers who grow coffee around the world are an essential part of our business – we couldn’t keep inspiring the world to love great coffee without them! However, we know that many coffee-growing communities are in remote rural areas in some of the world’s poorest countries, and children in these communities often have little or no access to education.";
  container.appendChild(p1);
  const img1 = document.createElement("img");
  img1.id = "foundation-img1";
  img1.src = "assets/costa-foundation-img.jpg";
  container.appendChild(img1);
  const p2 = document.createElement("p");
  p2.id = "foundation-p2";
  p2.textContent =
    "The mission of the Costa Foundation is to fund schools and school projects in coffee-growing communities which provide the opportunity to access a safe, quality education. The charity does this by:";
  container.appendChild(p2);
  const button1 = document.createElement("button");
  button1.id = "costa-foundation-button1";
  button1.href = "";
  button1.textContent = "Donations ➤";
  button1.style.cursor = "pointer";
  container.appendChild(button1);
  button1.addEventListener("click", openDialog);

  const button2 = document.createElement("button");
  button2.id = "costa-foundation-button2";
  button2.href = "";
  button2.textContent = "Volunteer ➤";
  button2.addEventListener("click", openDialog);
  button2.style.cursor = "pointer";
  container.appendChild(button2);
  const img2 = document.createElement("img");
  img2.id = "foundation-globe";
  img2.src = "assets/globe.png";
  container.appendChild(img2);
  const p3 = document.createElement("p");
  p3.id = "nutrition-p3";
  p3.textContent =
    "10 different countries across the coffee belt now benefit from a Costa Foundation school project, including Colombia, Uganda and Vietnam";
  container.appendChild(p3);
  // Create the main div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("foundation-main-div");
  container.appendChild(mainDiv);

  // Create the left div
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("foundation-left-div");

  // Apply a background color to the left div (e.g., red)
  // leftDiv.style.backgroundColor = "aqua";

  // Create and append an h1 and p to the left div
  const div_h1 = document.createElement("h1");
  div_h1.id = "responsible-div-h";
  div_h1.textContent = "Student stories";
  leftDiv.appendChild(div_h1);

  const p = document.createElement("p");
  p.id = "responsible-div-p";
  p.textContent =
    "Each of the children who have attended a Costa Foundation school so far is a unique individual with their own story to tell. Like Jennifer, in Honduras, who had to drop out of school to support her two younger brothers and herself when she lost her parents. Thanks to the Costa Foundation Jennifer is again back in school. Learn all about Jennifer's journey, and others helped by the Costa Foundation, by following the link to the Costa Foundation's website.";
  leftDiv.appendChild(p);
  const button = document.createElement("button");
  button.className = "learn-button";
  button.textContent = "Learn More ➤";
  leftDiv.appendChild(button);
  // Create the right div
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("foundation-right-div");

  // Create an image element and set its source
  const image = document.createElement("img");
  image.src = "assets/costa-foundation-student.png"; // Set the image source as needed
  rightDiv.appendChild(image);

  // Append the left and right divs to the main div
  mainDiv.appendChild(leftDiv);
  mainDiv.appendChild(rightDiv);
  // You can add more content here as needed
}
const myDialog = document.createElement("dialog");
myDialog.id = "my-dialog";
myDialog.innerHTML = `
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required /><br /><br />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required /><br /><br />

    <label for="contact-number">Number:</label>
    <input type="tel" id="contact-number" name="contact-number" required /><br /><br />

    <button id="closeButton" type="submit">Submit</button>
  </form>
`;
document.body.appendChild(myDialog);

const thanksDialog = document.createElement("dialog");
thanksDialog.id = "th-dialog";
thanksDialog.innerHTML = `<p>Thank you</p>

<button id="thanksButton" type="submit">OK</button>`;
document.body.appendChild(thanksDialog);

const openDialog = () => {
  myDialog.showModal();
};

closeButton.addEventListener("click", () => {
  myDialog.close();
  thanksDialog.showModal();
});
thanksButton.addEventListener("click", () => {
  thanksDialog.close();
});

// Prevent the dialog box from closing automatically
thanksDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});
