var pleasingColorList = [
  "#9c89b8",
  "#f0a6ca",
  "#efc3e6",
  "#f0e6ef",
  "#b8bedd",
  "#d8e2dc",
  "#ef476f",
  "#f78c6b",
  "#ffd166",
  "#83d483",
  "#06d6a0",
  "#0cb0a9",
  "#118ab2",

  "#C47449",
  "#FF7F83",
  "#A94717",
  "#DDA9CD",
  "#B0DDF5",
  "#CFA8CA",
  "#EE7D80",
  "#EFA021",
];

async function fetchText() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const text = data[Math.floor(Math.random() * 30)].body;
    return text;
  } catch (error) {
    console.error("Error fetching text data:", error);
    return null;
  }
}

async function fetchImage() {
  try {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const image = data[randomIndex].download_url;
    const title = data[randomIndex].author;
    return { image, title };
  } catch (error) {
    console.error("Error fetching image data:", error);
    return null;
  }
}

async function fetchImagesIntoArray() {
  var items = [];
  try {
    for (let i = 0; i < 7; i++) {
      const { image, title } = await fetchImage();
      const product_id = `pID- ${i + 1}`;
      items.push({ title: `Product ${i + 1}`, url: image, pid: product_id });
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  }

  return items;
}
let currentIndex = 0;
const itemsPerPage = 3;
var items = []; // Define items array globally

async function populatePhotoBar() {
  const photoBar = document.getElementById("photoBar");
  if (photoBar) {
    photoBar.innerHTML = "";

    try {
      if (items.length === 0) {
        items = await fetchImagesIntoArray(); // Fetch images if the items array is empty
      }

      const endIndex = currentIndex + itemsPerPage;
      const itemsToShow = items.slice(currentIndex, endIndex);

      itemsToShow.forEach((item) => {
        const photoItem = document.createElement("div");
        photoItem.classList.add("photo-item");

        const image = document.createElement("img");
        image.src = item.url;

        const titleSpan = document.createElement("span");
        titleSpan.textContent = item.title;

        var add_item_button = document.createElement("a");
        add_item_button.classList.add("btn", "align-self-center", "w-80");
        add_item_button.setAttribute("id", "add-item-button");
        add_item_button.textContent = "favorite";

        add_item_button.addEventListener("click", async () => {
          const currentItem = item; // Assuming 'item' is defined somewhere in your logic
          if (currentItem) {
            await add_to_cart(currentItem);
          } else {
            console.error("Item information is not available");
          }
        });
        photoItem.appendChild(image);
        photoItem.appendChild(titleSpan);
        photoItem.appendChild(add_item_button);
        photoBar.appendChild(photoItem);

        void photoItem.offsetWidth; //transition
        photoItem.classList.add("loaded");
        photoBar.classList.add("photo-bar");
      });
    } catch (error) {
      console.error("Error populating photo bar:", error);
    }
  }
}

var cart = [];
async function add_to_cart(item) {
  var item = {
    img_src: item.url,
    title: item.title,
  };
  cart.push(item);
  console.log(cart);
  show_cart();
  try {
    const googleAppsScriptURL =
      "https://script.google.com/macros/s/AKfycbwaU2aAmfyC_KkI6AuTGnwLvDI5SyEs1DLUvRzTPu4QIH-sP5Q70uZenNYB5_FLw3on/exec"; // Replace with your Google Apps Script URL

    const data = { title: item.title, pr_id: item.pid }; // Create an object with the title data
    const requestBody = JSON.stringify(data); // Convert the object to JSON
    const response = await fetch(googleAppsScriptURL, {
      redirect: "follow",
      method: "POST",
      body: requestBody, // Pass the title in the request body
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
    if (response.ok) {
      console.log("Request sent successfully to Google Apps Script");
    } else {
      throw new Error("Failed to send request to Google Apps Script");
    }
  } catch (error) {
    console.error("Error sending request to Google Apps Script:", error);
  }
}

function show_cart() {
  if (!document.getElementById("cart-items-container")) {
    // Create cart items container
    const cartTitle = document.createElement("p");
    cartTitle.classList.add("cart-title");
    cartTitle.textContent = "Your Favorites";
    const cartItemsContainer = document.createElement("div");
    cartItemsContainer.id = "cart-items-container";
    cartItemsContainer.classList.add("photo-bar");

    // Append cart items container to the body container
    var whole_body_container = document.querySelector(".body-container");
    whole_body_container.appendChild(cartTitle);
    whole_body_container.appendChild(cartItemsContainer);
  }

  // Check if the 'Next' button doesn't exist
  if (!document.getElementById("show-next-cart-item-button")) {
    // Create 'Next' button for cart items
    const nextButton = document.createElement("button");
    nextButton.id = "show-next-cart-item-button";
    nextButton.textContent = "Next";
    nextButton.onclick = showNextCartItems;

    // Append 'Next' button to the body container
    var whole_body_container = document.querySelector(".body-container");
    whole_body_container.appendChild(nextButton);
  }

  const photoBar = document.getElementById("cart-items-container");
  if (photoBar) {
    photoBar.innerHTML = "";

    try {
      const endIndex = currentIndex + itemsPerPage;
      const itemsToShow = cart.slice(currentIndex, endIndex);

      itemsToShow.forEach((item) => {
        const photoItem = document.createElement("div");
        photoItem.classList.add("photo-item");

        const image = document.createElement("img");
        image.src = item.img_src;

        const titleSpan = document.createElement("span");
        titleSpan.textContent = item.title;

        photoItem.appendChild(image);
        photoItem.appendChild(titleSpan);
        photoBar.appendChild(photoItem);

        void photoItem.offsetWidth; //transition
        photoItem.classList.add("loaded");
      });
    } catch (error) {
      console.error("Error populating photo bar:", error);
    }
  }
}
function showNextItems() {
  currentIndex += itemsPerPage;
  if (currentIndex >= items.length) {
    currentIndex = 0; // Reset to the beginning when reaching the end
  }
  populatePhotoBar();
}
function showNextCartItems() {
  currentIndex += itemsPerPage;
  if (currentIndex >= items.length) {
    currentIndex = 0; // Reset to the beginning when reaching the end
  }
  show_cart();
}

// Call the function to populate the initial photo bar
window.onload = function () {
  populatePhotoBar();
  createDynamicBody(1);
};

async function createDynamicBody(rowCount) {
  const { image, title } = await fetchImage();

  var whole_body_container = document.querySelector(".body-container");
  const body_container = document.createElement("div");
  body_container.classList.add("container-fluid", "py-4");

  for (let i = 1; i <= rowCount; i++) {
    const row = document.createElement("div");
    row.classList.add("row", "py-4");

    const colImage = document.createElement("div");
    colImage.style.height = "90vh";
    colImage.classList.add(
      "col-md-6",
      "justify-content-md-center",
      "g-0",
      "text-center",
      "d-flex",
      "flex-column",
      "overflow-hidden"
    );

    const colContent = document.createElement("div");
    colContent.style.height = "90vh";
    colContent.classList.add(
      "col-md-6",
      "justify-content-md-center",
      "g-0",
      "text-center",
      "d-flex",
      "flex-column",
      "overflow-hidden"
    );

    const { image, title } = await fetchImage();

    const text = await fetchText();
    const img = document.createElement("img");
    img.src = image;
    img.alt = "image_alt;";
    img.style.height = "90vh";

    const titleElement = document.createElement("h2");
    titleElement.setAttribute("id", "body-title-content");
    titleElement.classList.add("mb-4");
    titleElement.textContent = title;

    const textElement = document.createElement("p");
    textElement.setAttribute("id", "body-text-content");
    textElement.classList.add(
      "lead",
      "mb-4",
      "px-custom",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    textElement.textContent = text;

    const exploreButton = document.createElement("a");
    exploreButton.classList.add("btn", "align-self-center", "w-80");
    exploreButton.setAttribute("id", "explore-button");
    exploreButton.href = "https://example.com/another-page.html";
    exploreButton.textContent = "Explore the full menu ➤";

    const randomIndex = Math.floor(Math.random() * pleasingColorList.length);
    const randomColor = pleasingColorList[randomIndex];

    if (i % 2 === 0) {
      colContent.style.backgroundColor = randomColor;
      colImage.appendChild(img);
      colContent.appendChild(titleElement);
      colContent.appendChild(textElement);
      colContent.appendChild(exploreButton);
    } else {
      colImage.style.backgroundColor = randomColor;
      colContent.appendChild(img);
      colImage.appendChild(titleElement);
      colImage.appendChild(textElement);
      colImage.appendChild(exploreButton);
    }

    row.appendChild(colImage);
    row.appendChild(colContent);
    body_container.appendChild(row);
  }
  whole_body_container.appendChild(body_container);
}
