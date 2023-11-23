// Global variable to store the Leaflet map
let map: L.Map;

// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements for toggle button, search section, and map section
  const toggleButton = document.getElementById("toggle-search") as HTMLButtonElement;
  const searchSection = document.querySelector(".search") as HTMLElement;
  const mapSection = document.querySelector(".map") as HTMLElement;

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
    if (toggleButton.innerHTML === "&gt;") {
      toggleButton.innerHTML = "&lt;";
    } else {
      toggleButton.innerHTML = "&gt;";
    }
  }

  // Add click event listener for the toggle button
  toggleButton.onclick = changeToggleButtonText;

  // Initialize the Leaflet map with default view
  map = L.map("map-section").setView([36.08, -86.6], 13);

  // Add OpenStreetMap tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
});

// Fetch data from an API endpoint
// Wrap the fetch operation in a promise
const fetchData = async (filterType: string) => {
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
fetchData("")
  .then((data) => {
    console.log(data);
    const customIcon = L.icon({
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
      const storesContainer = document.querySelector(".stores") as HTMLElement;
      const storesContainerdiv = document.createElement("div");
      storesContainerdiv.className = "store-item";
      const name = document.createElement("h2");
      const location = document.createElement("p");
      const distance = document.createElement("p");
      const breakline = document.createElement("hr");
      const addr = user[index].address;
      const latitude = user[index].address.coordinates.lat;
      const longitude = user[index].address.coordinates.lng;
      console.log(latitude, longitude);
      const markers = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
      name.textContent = `Costa-Coffee-${index + 1}`;
      location.textContent = user[index].address.address;
      distance.textContent = user[index].address.postalCode;
      storesContainerdiv.addEventListener(
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
      storesContainerdiv.appendChild(name);
      storesContainerdiv.appendChild(location);
      storesContainerdiv.appendChild(distance);
      storesContainerdiv.appendChild(breakline);
      storesContainer.appendChild(storesContainerdiv);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

// Make showstoredetails asynchronous
async function showstoredetails(
  namepass: string,
  locationpass: string,
  distancepass: string,
  latitudepass: number,
  longitudepass: number
) {
  // Clear existing content
  const storesContainer = document.querySelector(".stores") as HTMLElement;
  storesContainer.innerHTML = "";

  // Create elements for store details
  const name = document.createElement("h2");
  const location = document.createElement("p");
  const distance = document.createElement("p");

  // Populate store details
  name.textContent = namepass;
  location.textContent = locationpass;
  distance.textContent = distancepass;

  // Add store details to DOM
  storesContainer.appendChild(name);
  storesContainer.appendChild(location);
  storesContainer.appendChild(distance);

  // Create a div for the newsletter subscription form
  const newsletterDiv = document.createElement("div");
  newsletterDiv.className = "newsletter-form";

  // Create heading for the newsletter
  const newsletterHeading = document.createElement("h2");
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
    const email = (document.getElementById("subscribe-email") as HTMLInputElement).value;
    const selectedStoreName = storesContainer.querySelector("h2").textContent;
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

  // Add newsletter div to the DOM
  storesContainer.appendChild(newsletterDiv);

  // Update map
  map.panTo([latitudepass, longitudepass]);
}

// Function to validate email format
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

  
  function saveSubscription(email: string, store: string): void {
    // Check if localStorage is supported
    if (typeof Storage !== "undefined") {
      // Get existing subscriptions or initialize an empty array
      const subscriptions: Subscription[] =
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
  
  function sendSubscriptionToGoogleAppsScript(email: string, store: string): void {
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
  
  // ...
  
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
  
  interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  function Locateme(): void {
    if ("geolocation" in navigator) {
      // Request the user's current location
      navigator.geolocation.getCurrentPosition(function (position) {
        var { latitude, longitude }: Coordinates = position.coords;
  
        // Create a marker for the user's current location with the custom icon
        var userLocationMarker = L.marker([latitude, longitude]).addTo(map);
  
        // Set the view of the map to the user's location
        map.setView([latitude, longitude], 13);
      });
    } else {
      alert("Geolocation is not available in your browser");
    }
  }
  