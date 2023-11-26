// Fetching data from API
async function fetchDatas(): Promise<void> {
  try {
    const response = await fetch("https://mocki.io/v1/90fed624-07fe-455d-a6b9-8b49e3e1ad24");
    const data = await response.json();
    console.log(data);
    const users: any[] = data; // Replace "any" with a more specific type if possible

    for (let i = 1; i < 4; i++) {
      const ran = Math.floor(Math.random() * 5);
      const offerContainer = document.getElementById(`offer${i}`);
      const img1 = document.createElement("img");
      img1.src = users[ran]?.image || ""; // Optional chaining here
      img1.className = "images";
      if (offerContainer) {
        offerContainer.appendChild(img1);
      }
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchDatas();

document.addEventListener("DOMContentLoaded", function () {
  const cookieButton = document.getElementById("cookieButton") as HTMLButtonElement ;
  const acceptButton = document.getElementById("acceptButton") as HTMLButtonElement ;
  const cookieDialog = document.getElementById("cookieDialog") as HTMLElement;

  if (cookieButton && acceptButton && cookieDialog) {
    function toggleButtonState() {
      if (cookieButton.classList.contains("open")) {
        closeCookieDialog();
      } else {
        openCookieDialog();
      }
    }

    function openCookieDialog() {
      if (cookieDialog) {
        cookieDialog.style.display = "block";
        cookieButton.classList.add("open");
      }
    }

    function closeCookieDialog() {
      if (cookieDialog) {
        cookieDialog.style.display = "none";
        cookieButton.classList.remove("open");
      }
    }

    acceptButton.addEventListener("click", function () {
      closeCookieDialog();
    });

    cookieButton.addEventListener("click", toggleButtonState);
  }
});