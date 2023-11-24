// Global variable to store the Leaflet map

var map;

// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements for toggle button, search section, and map section
  const toggleButton = document.getElementById("toggle-search");
  const searchSection = document.querySelector(".search");
  const mapSection = document.querySelector(".map");

  // Variable to track the visibility of the search section
  let isSearchVisible = true;

  // Toggle button click event to show/hide the search section
  toggleButton.addEventListener("click", function () {
    if (isSearchVisible) {
      // Hide the search section
      searchSection.style.display = "none";
      mapSection.style.flex = 9.5; // Expand the map to full width
    } else {
      // Show the search section
      searchSection.style.display = "block";
      mapSection.style.flex = 1;
      mapSection.style.width = "1080px";
    }
    isSearchVisible = !isSearchVisible;
  });

  // Function to change toggle button text
  function changeToggleButtonText() {
    var button = document.getElementById("toggle-search");

    if (button.innerHTML === "&gt;") {
      button.innerHTML = "&lt;";
    } else {
      button.innerHTML = "&gt;";
    }
  }

  // Add click event listener for the toggle button
  document.getElementById("toggle-search").onclick = changeToggleButtonText;

  // Initialize the Leaflet map with default view
  map = L.map("map-section").setView([36.08, -86.6], 13);

  // Add OpenStreetMap tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
});

// Fetch data from an API endpoint
// Wrap the fetch operation in a promise
const fetchData = async (filterType) => {
  try {
    // Adjust the API endpoint based on the selected filter type
    const apiUrl = `https://dummyjson.com/users?filter=${filterType}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

// Use the fetchData function
fetchData()
  .then((data) => {
    console.log(data);
    var customIcon = L.icon({
      iconUrl:
        "https://images.ctfassets.net/27hc2gu70btq/4wCs01Cgbzv2gycua3IHfv/48e087bddc5ee9639d574ae291488069/storeSelected.svg",
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });
    const user = data.users;
    user.forEach((element, index) => {
      console.log(element);
      var storescontainer = document.querySelector(".stores");
      var storescontainerdiv = document.createElement("div");
      storescontainerdiv.className = "store-item";
      var name = document.createElement("h4");
      var location = document.createElement("p");
      var distance = document.createElement("p");
      var breakline = document.createElement("hr");
      var addr = user[index].address;
      var latitude = user[index].address.coordinates.lat;
      var longitude = user[index].address.coordinates.lng;
      console.log(latitude, longitude);
      var markers = L.marker([latitude, longitude], { icon: customIcon }).addTo(
        map
      );
      name.textContent = `Costa-Coffee-${index + 1}`;
      location.textContent = user[index].address.address;
      distance.textContent = user[index].address.postalCode;
      storescontainerdiv.addEventListener(
        "click",
        showstoredetails.bind(
          null,
          name.textContent,
          location.textContent,
          distance.textContent,
          latitude,
          longitude
        )
      );
      storescontainerdiv.appendChild(name);
      storescontainerdiv.appendChild(location);
      storescontainerdiv.appendChild(distance);
      storescontainerdiv.appendChild(breakline);
      storescontainer.appendChild(storescontainerdiv);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
function createDirectionButton() {
  var directionButton = document.createElement("button");
  directionButton.classList.add("direction-button");
  directionButton.innerHTML =
    '<img src="../Store_Locator_Page/assets/directions.png" alt="Get Directions">';
  directionButton.addEventListener("click", function () {
    // Get the latitude and longitude of the selected store
    var selectedLatitude = parseFloat(this.getAttribute("data-latitude"));
    var selectedLongitude = parseFloat(this.getAttribute("data-longitude"));

    // Open Google Maps with directions
    openGoogleMapsDirections(selectedLatitude, selectedLongitude);
  });
  return directionButton;
}
// Make showstoredetails asynchronous
async function showstoredetails(
  namepass,
  locationpass,
  distancepass,
  latitudepass,
  longitudepass
) {
  // Clear existing content
  document.querySelector(".stores").innerHTML = "";

  // Create container for store details and directions
  const parentContainer = document.createElement("div");
  parentContainer.className = "store-details-parent-container";

  // Create container for store details
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "store-details-container";

  // Create elements for store details
  const name = document.createElement("h2");
  const location = document.createElement("p");
  const distance = document.createElement("p");

  // Populate store details
  name.textContent = namepass;
  location.textContent = locationpass;
  distance.textContent = distancepass;

  // Add store details to container
  detailsContainer.appendChild(name);
  detailsContainer.appendChild(location);
  detailsContainer.appendChild(distance);

  // Fetch manager details based on the store name
  const managerDetails = await getManagerDetails(namepass);

  // Create a div for manager details
  const managerDiv = document.createElement("div");
  managerDiv.className = "manager-details";

  // Create elements for manager details
  const managerName = document.createElement("p");
  const managerNumber = document.createElement("p");
  const managerEmail = document.createElement("p");

  // Populate manager details
  managerName.textContent = `Manager: ${managerDetails.manager_name}`;
  managerNumber.textContent = `Contact: ${managerDetails.manager_num}`;
  managerEmail.textContent = `Email: ${managerDetails.manager_email}`;

  // Add manager details to the manager div
  managerDiv.appendChild(managerName);
  managerDiv.appendChild(managerNumber);
  managerDiv.appendChild(managerEmail);

  // Add manager div to the container
  detailsContainer.appendChild(managerDiv);

  // Create a div for the newsletter subscription form
  const newsletterDiv = document.createElement("div");
  newsletterDiv.className = "newsletter-form";

  // Create heading for the newsletter
  const newsletterHeading = document.createElement("h3");
  newsletterHeading.textContent = "Subscribe to our newsletter";
  newsletterHeading.className = "newsletter-heading";

  // Create form elements
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Enter your email";
  emailInput.id = "subscribe-email";
  emailInput.classList.add("subscribe-input");

  const subscribeButton = document.createElement("button");
  subscribeButton.textContent = "Subscribe";
  subscribeButton.classList.add("subscribe-btn");
  subscribeButton.addEventListener("click", function () {
    // Validate email format
    const email = emailInput.value;
    const selectedStoreName = detailsContainer.querySelector("h2").textContent;
    if (validateEmail(email)) {
      saveSubscription(email, selectedStoreName);
      alert(`Successfully subscribed with email: ${email}`);
    } else {
      alert("Invalid email format. Please enter a valid email address.");
    }
  });

  // Add form elements to the newsletter div
  newsletterDiv.appendChild(newsletterHeading);
  newsletterDiv.appendChild(emailInput);
  newsletterDiv.appendChild(subscribeButton);

  // Add newsletter div to the container
  detailsContainer.appendChild(newsletterDiv);

  // Add the store details container to the parent container
  parentContainer.appendChild(detailsContainer);

  // Create a div for the directions button
  const directionsContainer = document.createElement("div");
  directionsContainer.className = "directions-container";
  const directionButton = createDirectionButton();
  directionButton.setAttribute("data-latitude", latitudepass);
  directionButton.setAttribute("data-longitude", longitudepass);

  // Add the direction button to its container
  directionsContainer.appendChild(directionButton);

  // Add the directions container to the parent container
  parentContainer.appendChild(directionsContainer);

  // Add the parent container to the DOM
  const storesContainer = document.querySelector(".stores");
  storesContainer.appendChild(parentContainer);

  // Update map view to the selected store location
  map.panTo([latitudepass, longitudepass]);
}

function openGoogleMapsDirections(latitude, longitude) {
  // Construct the Google Maps URL with the destination coordinates
  var mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  // Open the URL in a new tab or window
  window.open(mapsUrl, "_blank");
}
// Function to fetch manager details based on store name
async function getManagerDetails(storeName) {
  const apiUrl = "https://mocki.io/v1/14902a7e-106f-4162-b39c-fdb132d286f6";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Find the store with the matching store_name
    const store = data.find((store) => store.store_name === storeName);

    return store || {}; // Return an empty object if not found
  } catch (error) {
    console.error("Error fetching manager details:", error);
    return {};
  }
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ...

function saveSubscription(email, store) {
  // Check if localStorage is supported
  if (typeof Storage !== "undefined") {
    // Get existing subscriptions or initialize an empty array
    const subscriptions =
      JSON.parse(localStorage.getItem("subscriptions")) || [];

    // Add the new subscription to the array
    subscriptions.push({ email, store });

    // Save the updated array back to localStorage
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));

    // Also, send the subscriptions to your Google Apps Script
    sendSubscriptionToGoogleAppsScript(email, store);

    console.log("Subscription saved successfully.");
  } else {
    console.error("LocalStorage is not supported in this browser.");
  }
}

function sendSubscriptionToGoogleAppsScript(email, store) {
  // Create a FormData object to send data to the server
  const formData = new FormData();
  formData.append("email", email);
  formData.append("store", store);

  // Send a POST request to your Google Apps Script web app
  fetch(
    "https://script.google.com/macros/s/AKfycbxcwZncMu8JFJx9TOYcNJN7-HwR7-I9jcJIPV6vG89HUqGLYI1lTfxepvojYTAJH3FX/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        console.log(
          "Subscription data sent to Google Apps Script successfully."
        );
      } else {
        console.error("Error sending subscription data:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error sending subscription data:", error);
    });
}

// Event listener for when the DOM content is loaded (again)
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements for filter button and filter form
  var filterButton = document.getElementById("show-filter-form");
  var filterForm = document.querySelector(".filter-form");
  var storesContainer = document.querySelector(".stores");

  // Check if filter button and filter form exist
  if (filterButton && filterForm && storesContainer) {
    // Event listener for filter button click to toggle filter form visibility
    filterButton.addEventListener("click", function () {
      // Toggle filter form visibility
      filterForm.style.display =
        filterForm.style.display === "none" || filterForm.style.display === ""
          ? "block"
          : "none";
    });
  }

  // Event listener for the apply filter button click
  document
    .getElementById("apply-filter")
    .addEventListener("click", function () {
      // Retrieve selected filter options and perform actions
      var selectedFilterType = document.getElementById("filter-type").value;
      // Handle fetched data and display stores based on the filter type
      searchStores(selectedFilterType);
    });
});
document.getElementById("search-input").addEventListener("input", function () {
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  console.log(searchInput);
  searchStores(searchInput);
});
// Function to filter and display stores based on keyword
function searchStores(keyword) {
  var storesContainer = document.querySelector(".stores");
  var storeItems = storesContainer.getElementsByClassName("store-item");
  var noResultsMessage = document.querySelector(".no-results");

  // Hide all store items and the no results message
  for (var i = 0; i < storeItems.length; i++) {
    storeItems[i].style.display = "none";
  }
  noResultsMessage.style.display = "none";

  // Display matching store items or show no results message
  var resultsFound = false;
  for (var i = 0; i < storeItems.length; i++) {
    var storeName = storeItems[i].querySelector("h2").textContent.toLowerCase();
    var storeLocation = storeItems[i]
      .querySelector("p")
      .textContent.toLowerCase();

    if (storeName.includes(keyword) || storeLocation.includes(keyword)) {
      storeItems[i].style.display = "block";
      resultsFound = true;
    }
  }

  // If no results found, display the no results message
  if (!resultsFound) {
    noResultsMessage.style.display = "block";
  }
}

function Locateme() {
  if ("geolocation" in navigator) {
    // Request the user's current location
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Create a marker for the user's current location with the custom icon
      var userLocationMarker = L.marker([latitude, longitude]).addTo(map);

      // Set the view of the map to the user's location
      map.setView([latitude, longitude], 13);
    });
  } else {
    alert("Geolocation is not available in your browser");
  }
}
