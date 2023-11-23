// Function to handle image upload
function handleImageUpload() {
  const imageInput = document.getElementById("imageInput");
  imageInput.click();

  imageInput.addEventListener("change", function (event) {
    const selectedFile = event.target.files[0];
    const selectedImage = document.getElementById("selectedImage");
    const defaultImageSrc = "assets/images/accountprofile.png"; // Default image source

    if (selectedFile) {
      selectedImage.style.display = "block";

      const reader = new FileReader();

      reader.onload = function (e) {
        selectedImage.src = e.target.result;
      };

      reader.readAsDataURL(selectedFile);
    } else {
      // No file selected, show default image
      selectedImage.style.display = "block";
      selectedImage.src = defaultImageSrc;
    }
  });
}

// Fetch user data when the page loads
window.addEventListener("DOMContentLoaded", (event) => {
  const selectedImage = document.getElementById("selectedImage");
  const defaultImageSrc = "assets/images/accountprofile.png"; // Default image source

  // Set the default image source and display it
  selectedImage.src = defaultImageSrc;
  selectedImage.style.display = "block";
});
function logout() {
  window.location.href = "../loginAndSignup/loginAndSignup.html";
}

// Fetch data from the API and display details in the specified div
fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(json => {
    // Access elements in the card
    const cardImage = document.getElementById('cardImage');
    const cardTitle = document.getElementById('cardTitle');
    const cardCategory = document.getElementById('cardCategory');
    const cardPrice = document.getElementById('cardPrice');
    const cardDescription = document.getElementById('cardDescription');

    // Set values to fetched data
    cardImage.src = json.image;
    cardTitle.textContent = json.title;
    cardCategory.textContent = `Category: ${json.category}`;
    cardPrice.textContent = `Price: $${json.price}`;
    cardDescription.textContent = json.description;
  })
  .catch(error => {
    console.log('Error fetching API data:', error);
  });

