// Fetch data from the API and display details in the specified div
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => {
    // Access elements in the card
    const cardImage = document.getElementById("cardImage");
    const cardTitle = document.getElementById("cardTitle");
    const cardCategory = document.getElementById("cardCategory");
    const cardPrice = document.getElementById("cardPrice");
    const cardDescription = document.getElementById("cardDescription");

    // Set values to fetched data
    cardImage.src = json.image;
    cardTitle.textContent = json.title;
    cardCategory.textContent = `Category: ${json.category}`;
    cardPrice.textContent = `Price: $${json.price}`;
    cardDescription.textContent = json.description;
  })
  .catch((error) => {
    console.log("Error fetching API data:", error);
  });
