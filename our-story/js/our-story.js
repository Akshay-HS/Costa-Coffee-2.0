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

// var our_coffee_row_count = 6;

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
    const randomIndex = Math.floor(Math.random() * 29);
    const image = data[randomIndex].download_url;
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
createTopImage();

async function createCoffeeFact() {
  const coffeeFact_container = document.createElement("div");
  coffeeFact_container.classList.add(
    "coffeeFact-container",
    "col-12",
    "mb-4",
    "text-center", // Center text horizontally
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );

  const coffee_logo = document.createElement("img");
  coffee_logo.setAttribute("id", "coffee-logo-img");
  coffee_logo.src = "../our-story/assets/coffeecup.png";
  coffee_logo.alt = "logo";
  coffeeFact_container.appendChild(coffee_logo);

  const text = await fetchText();
  const coffeeFact_text = document.createElement("p");
  coffeeFact_text.classList.add("coffeeFact-text");
  coffeeFact_text.classList.add(
    "col-10",
    "lead",
    "mb-4",
    "px-custom",
    "text-center", // Center text horizontally
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column" // Display content as a column
  );

  coffeeFact_text.textContent = text;
  coffeeFact_container.appendChild(coffeeFact_text);
  whole_body_container.appendChild(coffeeFact_container);
}

// NEW DIVSION ON CLICK FUNCTION-----------------------------------------------------------------------------------

async function create_ourCoffee_div(our_coffee_row_count) {
  for (i = 1; i < our_coffee_row_count; i++) {
    whole_body_container.classList.add(
      "d-flex",
      "flex-wrap",
      "justify-content-center"
    );

    var coffeeTypes_middle_container = document.createElement("div");
    coffeeTypes_middle_container.classList.add(
      "coffee-types-middleBody-container",
      "col-10",
      "py-4",
      "d-flex",
      "justify-content-center" // Center horizontally
    );
    coffeeTypes_middle_container.style.backgroundColor = "white";

    const coffeeTypes_leftDiv = document.createElement("div");
    coffeeTypes_leftDiv.style.height = "50vh";
    coffeeTypes_leftDiv.classList.add(
      "coffeeTypes-leftDiv",
      // "col-md-3",
      "justify-content-md-center",
      "g-0",
      "text-center",
      "d-flex",
      "flex-column",
      "overflow-hidden"
    );

    const coffeeTypes_rightDiv = document.createElement("div");
    coffeeTypes_rightDiv.style.height = "50vh";
    coffeeTypes_rightDiv.classList.add(
      "coffeeTypes-rightDiv",
      // "col-md-3",
      "justify-content-md-center",
      "g-0",
      "text-center",
      "d-flex",
      "flex-column",
      "overflow-hidden"
    );
    const { image, title } = await fetchImage();

    const coffee_types_image = document.createElement("img");
    console.log(image);
    coffee_types_image.src = image;
    coffee_types_image.alt = title;
    coffee_types_image.style.height = "90vh";
    coffee_types_image.setAttribute("id", "coffeeTypes-img");

    const text = await fetchText();
    const coffeeTypes_title = document.createElement("h2");
    coffeeTypes_title.classList.add("coffeeTypes-title", "mb-4");
    coffeeTypes_title.textContent = title;

    const coffeeTypes_text = document.createElement("p");
    coffeeTypes_text.classList.add("coffeeTypes-textDiv");
    coffeeTypes_text.classList.add(
      "lead",
      "mb-4",
      "px-custom",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    coffeeTypes_text.textContent = text;

    if (i % 2 === 0) {
      coffeeTypes_rightDiv.classList.add("col-md-4");
      coffeeTypes_rightDiv.appendChild(coffee_types_image);
      coffeeTypes_leftDiv.classList.add("col-md-6");
      coffeeTypes_leftDiv.style.backgroundColor = "white";
      coffeeTypes_leftDiv.appendChild(coffeeTypes_title);
      coffeeTypes_leftDiv.appendChild(coffeeTypes_text);
    } else {
      coffeeTypes_leftDiv.classList.add("col-md-4");
      coffeeTypes_leftDiv.appendChild(coffee_types_image);
      coffeeTypes_rightDiv.classList.add("col-md-6");
      coffeeTypes_rightDiv.style.backgroundColor = "white";
      coffeeTypes_rightDiv.appendChild(coffeeTypes_title);
      coffeeTypes_rightDiv.appendChild(coffeeTypes_text);
    }

    coffeeTypes_middle_container.appendChild(coffeeTypes_leftDiv);
    coffeeTypes_middle_container.appendChild(coffeeTypes_rightDiv);
    whole_body_container.appendChild(coffeeTypes_middle_container);
  }
}

async function createDynamicBody(rowCount) {
  const { image, title } = await fetchImage();

  var whole_body_container = document.querySelector(".whole-body-container");
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

createDynamicBody(2);

// DYNAMIC DIVISION CREATION ON CLICK

const clicked_ourCoffee = document.querySelector(".li-item-our-coffee");
clicked_ourCoffee.addEventListener(
  "click",
  function create_ourCoffee_Division() {
    whole_body_container = document.querySelector(".whole-body-container");
    //clearing the division
    while (whole_body_container.firstChild) {
      whole_body_container.removeChild(whole_body_container.firstChild);
    }

    create_ourCoffee_div(6)
      .then(() => createCoffeeFact())
      .then(() => createDynamicBody(1))
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }
);

const clicked_roastery = document.querySelector(".li-item-roastery");
clicked_roastery.addEventListener("click", function create_roasteryDivision() {
  whole_body_container = document.querySelector(".whole-body-container");
  //clearing the division
  while (whole_body_container.firstChild) {
    whole_body_container.removeChild(whole_body_container.firstChild);
  }
  createDynamicBody(1)
    .then(() => createCoffeeFact())
    .then(() => create_ourCoffee_div(2))
    .then(() => createDynamicBody(1))
    .catch((error) => {
      console.error("Error occurred:", error);
    });
});

const clicked_history = document.querySelector(".li-item-history");
clicked_history.addEventListener("click", function create_historyDivision() {
  whole_body_container = document.querySelector(".whole-body-container");
  //clearing the division
  while (whole_body_container.firstChild) {
    whole_body_container.removeChild(whole_body_container.firstChild);
  }
  createDynamicBody(2);
});
