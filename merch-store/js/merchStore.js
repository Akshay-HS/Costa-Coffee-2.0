// Fetch the first 4 products from the API
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const leftProductsContainer = document.getElementById('leftProducts');
    const rightProductsContainer = document.getElementById('rightProducts');

    // Select the first 4 products
    const selectedProducts = products.slice(0, 4);

    // Iterate through the selected products
    selectedProducts.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.classList.add('card', 'mb-3', 'game-card-y-hover');
      productCard.style.maxWidth = '540px';

      // Extract the first 10 words of the description
      const truncatedDescription = product.description.split(' ').slice(0, 10).join(' ');
      const truncatedtitle = product.title.split(' ').slice(0, 10).join(' ');

      productCard.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${product.image}" class="card-img-top" alt="Product Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${truncatedtitle}</h5>
              <p class="card-text">Category: ${product.category}</p>
              <p class="card-text">Price: $${product.price}</p>
              <p class="card-text">${truncatedDescription}...</p>
              <a href="#" class="btn btn-success">Buy Now</a>
            </div>
          </div>
        </div>
      `;

      // Distribute cards between left and right containers
      if (index < 2) {
        leftProductsContainer.appendChild(productCard);
      } else {
        rightProductsContainer.appendChild(productCard);
      }
    });
  })
  .catch(error => {
    console.log('Error fetching API data:', error);
  });
