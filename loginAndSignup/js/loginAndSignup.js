// Function to toggle between login and signup forms
function toggleForm() {
    $("#login-form").toggle();
    $("#signup-form").toggle();
}
var db;
// Open or create the IndexedDB database
var request = window.indexedDB.open("userDatabase", 1);
// Handle database errors
request.onerror = function (event) {
    console.log("Database error: " + event.target.error);
};
// Handle successful database connection
request.onsuccess = function (event) {
    db = event.target.result;
};
// Handle database upgrade (creating object store if needed)
request.onupgradeneeded = function (event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("users")) {
        var objectStore = db.createObjectStore("users", { keyPath: "email" });
        objectStore.createIndex("email", "email", { unique: true });
    }
};
// Function to handle signup form submission
$("#signupForm").submit(function (e) {
    e.preventDefault();
    var name = $("#signup-name").val();
    var email = $("#signup-email").val();
    var password = $("#signup-password").val();
    var transaction = db.transaction(["users"], "readwrite");
    var objectStore = transaction.objectStore("users");
    var user = {
        name: name,
        email: email,
        password: password,
    };
    // Add the user to the IndexedDB object store
    var request = objectStore.add(user);
    // Handle successful signup
    request.onsuccess = function (event) {
        alert("Signup successful! You will be redirected to the login page.");
    };
    // Handle signup errors
    request.onerror = function (event) {
        console.error("Signup error: ", event.target.error);
    };
    // Generate CSV content
    var csvContent = "Name,Email,Password\n".concat(name, ",").concat(email, ",").concat(password);
    // Create a Blob from the CSV content
    var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    // Create a link to download the file
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "signup_data.csv");
    link.style.visibility = "hidden";
    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();
    // Clean up
    document.body.removeChild(link);
    // Toggle to the login form after a slight delay
    setTimeout(function () {
        toggleForm(); // Toggle to the login form after signup
    }, 1000); // Adjust the delay time as needed
});
// Function to handle login form submission
$("#loginForm").submit(function (e) {
    e.preventDefault();
    var email = $("#login-email").val();
    var password = $("#login-password").val();
    var transaction = db.transaction(["users"], "readonly");
    var objectStore = transaction.objectStore("users");
    var request = objectStore.get(email);
    // Handle error fetching user data
    request.onerror = function (event) {
        alert("Error fetching data");
    };
    // Handle successful data retrieval for login
    request.onsuccess = function (event) {
        var storedUser = event.target.result;
        if (storedUser && storedUser.password === password) {
            alert("Login successful!");
            window.location.href = "../behind-the-beans/behind-the-beans.html"; // Redirect after successful login
        }
        else {
            alert("Invalid credentials. Please try again.");
        }
    };
});
