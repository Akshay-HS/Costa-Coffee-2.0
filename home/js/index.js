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
async function createDynamicBody(rowCount) {
  const whole_body_container = document.querySelector(".whole-body-container");
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
    exploreButton.href = "../order/order.html";
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

createDynamicBody(4);
