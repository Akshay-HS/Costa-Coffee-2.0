fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    var whole_body_container = document.querySelector(".whole-body-container");

    function createImageFirstDivision(rowCount) {
      const top_image_div = document.querySelector(".top-image-class");
      const coffeeTopImageDiv = document.querySelector(
        ".our-coffee-topImage-div"
      );
      var ourCoffeeTopImage = document.createElement("img");
      ourCoffeeTopImage.src = data[Math.floor(Math.random() * 29)].download_url;
      ourCoffeeTopImage.alt = "Coffee Image";
      ourCoffeeTopImage.classList.add("our-coffee-img");
      top_image_div.appendChild(ourCoffeeTopImage);

      for (i = 1; i <= rowCount; i++) {
        var middle_body_container = document.createElement("div");
        middle_body_container.classList.add("middle-body-container");
        var our_coffee_leftDiv = document.createElement("div");
        our_coffee_leftDiv.classList.add("our-coffee-leftDiv");
        var our_coffee_image = document.createElement("img");
        const imageElement = document.createElement("img");
        imageElement.src = data[Math.floor(Math.random() * 29)].download_url;
        imageElement.alt = "User Image";
        our_coffee_image = imageElement;
        our_coffee_image.classList.add("our_coffee_img");

        var our_coffee_rightDiv = document.createElement("div");
        our_coffee_rightDiv.classList.add("our-coffee-rightDiv");
        var our_coffee_title = document.createElement("h1");
        our_coffee_title.classList.add("our-coffee-title");
        our_coffee_title.textContent = "Our Coffee";
        var our_coffee_textDiv = document.createElement("div");
        our_coffee_textDiv.classList.add("our-coffee-textDiv");
        var our_coffee_text = document.createTextNode(
          "Our iconic Signature Blends are slow roasted for the perfect balance of rich flavour and smooth taste. We guarantee you the freshest taste and finest ingredients, every time. Check out our full range of drinks, snacks and meals and discover your favourites."
        );
        var our_coffee_menuButton = document.createElement("button");
        our_coffee_menuButton.classList.add("our-coffee-menuButton");
        our_coffee_menuButton.textContent = "Explore the full menu"; // Set the button text
        var our_coffee_buttonDiv = document.createElement("div");
        our_coffee_buttonDiv.classList.add("our-coffee-buttonDiv");
        our_coffee_menuButton.addEventListener("click", function () {
          var destinationURL = "https://example.com/another-page.html";
          window.location.href = destinationURL;
        });
        if (i % 2 == 0) {
          our_coffee_leftDiv.appendChild(our_coffee_image);
          our_coffee_rightDiv.appendChild(our_coffee_title);
          our_coffee_rightDiv.appendChild(our_coffee_textDiv);
          our_coffee_rightDiv.appendChild(our_coffee_buttonDiv);
        } else {
          our_coffee_rightDiv.appendChild(our_coffee_image);
          our_coffee_leftDiv.appendChild(our_coffee_title);
          our_coffee_leftDiv.appendChild(our_coffee_textDiv);
          our_coffee_leftDiv.appendChild(our_coffee_buttonDiv);
        }
        our_coffee_textDiv.appendChild(our_coffee_text);
        our_coffee_buttonDiv.appendChild(our_coffee_menuButton);
        middle_body_container.appendChild(our_coffee_leftDiv);
        middle_body_container.appendChild(our_coffee_rightDiv);
        whole_body_container.appendChild(middle_body_container);
        var blank_space_div = document.createElement("div");
        blank_space_div.classList.add("blank-space-div");
        whole_body_container.appendChild(blank_space_div);
      }
      // document.body.appendChild(middle_body_container);
    }
    createImageFirstDivision(
      parseInt(document.getElementById("fake-pTag").textContent)
    );
  });
