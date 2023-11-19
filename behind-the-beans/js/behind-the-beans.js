function setRandomImage() {
  fetch("https://picsum.photos/v2/list/?limit=100")
    .then((response) => response.json())
    .then((data) => {
      const randomImageURL = data[Math.floor(Math.random() * 100)].download_url;

      console.log(randomImageURL);

      var navBackgroundImage = document.getElementById("nav-background-image");

      if (navBackgroundImage) {
        navBackgroundImage.style.backgroundImage =
          "url('" + randomImageURL + "')";
      } else {
        console.error("Element with ID 'nav-background-image' not found.");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function updateElements() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomPost = data[randomIndex];

      const headingElement = document.getElementById("nav-background-heading");
      const paragraphElement = document.getElementById(
        "nav-background-paragraph"
      );

      if (headingElement && paragraphElement) {
        // Split the title into words and select the first two words
        const titleWords = randomPost.title.split(" ");
        const truncatedTitle = titleWords.slice(0, 2).join(" "); // Join the first two words

        headingElement.textContent = truncatedTitle;
        paragraphElement.textContent = randomPost.body;
      } else {
        console.error("Elements not found.");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function createMainContainer() {
  const container = document.getElementById("container");
  container.classList.add(
    "container-fluid",
    "d-flex",
    "flex-column",
    "align-items-center",
    "py-5"
  );

  const fetchRandomImage = () => {
    return fetch("https://picsum.photos/v2/list/?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const randomImageURL =
          data[Math.floor(Math.random() * 100)].download_url;
        return randomImageURL;
      })
      .catch((error) => {
        console.error("Error fetching random image:", error);
        return null;
      });
  };

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      })
      .catch((error) => {
        console.error("Error fetching random text:", error);
        return null;
      });
  };

  const createContent = async (parentElement, index) => {
    const randomImageURL = await fetchRandomImage();
    const randomText = await fetchData();

    if (randomImageURL && randomText) {
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("row", "mt-5", "w-100");
      mainDiv.id = "mainDiv";

      const leftDiv = document.createElement("div");
      leftDiv.classList.add(
        "col-md-6",
        "text-center",
        "bg-primary",
        "d-flex",
        "flex-column",
        "align-items-center",
        "w-100"
      );

      const rightDiv = document.createElement("div");
      rightDiv.classList.add(
        "col-md-6",
        "text-center",
        "bg-secondary",
        "d-flex",
        "flex-column",
        "align-items-center",
        "w-100"
      );

      if (index % 2 == 0) {
        rightDiv.style.backgroundImage = `url('${randomImageURL}')`;
        rightDiv.style.backgroundSize = "cover";
        rightDiv.style.backgroundPosition = "center";
        mainDiv.appendChild(leftDiv);
        mainDiv.appendChild(rightDiv);
      } else {
        leftDiv.style.backgroundImage = `url('${randomImageURL}')`;
        leftDiv.style.backgroundSize = "cover";
        leftDiv.style.backgroundPosition = "center";
        mainDiv.appendChild(leftDiv);
        mainDiv.appendChild(rightDiv);
      }

      const h1 = document.createElement("h1");
      h1.id = `h1-${index}`;
      h1.classList.add("text-uppercase", "text-light", "py-5");
      h1.textContent = randomText.title;

      const p = document.createElement("p");
      p.id = `p-${index}`;
      p.classList.add("text-light", "py-5");
      p.textContent = randomText.body;

      const button = document.createElement("button");
      button.className = "btn btn-light my-3";
      button.textContent = "Learn More ➤";

      if (index % 2 == 0) {
        leftDiv.appendChild(h1);
        leftDiv.appendChild(p);
        leftDiv.appendChild(button);
      } else {
        rightDiv.appendChild(h1);
        rightDiv.appendChild(p);
        rightDiv.appendChild(button);
      }

      container.appendChild(mainDiv);
    }
  };

  for (let i = 1; i < 4; i++) {
    createContent(container, i);
  }
}

window.onload = function () {
  setRandomImage();
  updateElements();
  createMainContainer();
};
