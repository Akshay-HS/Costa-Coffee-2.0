// Function to toggle between login and signup forms
function toggleForm(): void {
    $("#login-form").toggle();
    $("#signup-form").toggle();
  }
  
  let db: IDBDatabase;
  
  // Open or create the IndexedDB database
  const request: IDBOpenDBRequest = window.indexedDB.open("userDatabase", 1);
  
  // Handle database errors
  request.onerror = function(event: Event): void {
    console.log("Database error: " + (event.target as IDBOpenDBRequest).error);
  };
  
  // Handle successful database connection
  request.onsuccess = function(event: Event): void {
    db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
  };
  
  // Handle database upgrade (creating object store if needed)
  request.onupgradeneeded = function(event: Event): void {
    db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
  
    if (!db.objectStoreNames.contains("users")) {
      const objectStore: IDBObjectStore = db.createObjectStore("users", { keyPath: "email" });
      objectStore.createIndex("email", "email", { unique: true });
    }
  };
  
  // Function to handle signup form submission
  $("#signupForm").submit(function(e: JQuery.Event): void {
    e.preventDefault();
  
    const name: string = $("#signup-name").val() as string;
    const email: string = $("#signup-email").val() as string;
    const password: string = $("#signup-password").val() as string;
  
    const transaction: IDBTransaction = db.transaction(["users"], "readwrite");
    const objectStore: IDBObjectStore = transaction.objectStore("users");
  
    const user = {
      name: name,
      email: email,
      password: password,
    };
  
    // Add the user to the IndexedDB object store
    const request: IDBRequest<IDBValidKey> = objectStore.add(user);
  
    // Handle successful signup
    request.onsuccess = function(event: Event): void {
      alert("Signup successful! You will be redirected to the login page.");
    };
  
    // Handle signup errors
    request.onerror = function(event: Event): void {
      console.error("Signup error: ", (event.target as IDBRequest).error);
    };
  
    // Generate CSV content
    const csvContent: string = `Name,Email,Password\n${name},${email},${password}`;
  
    // Create a Blob from the CSV content
    const blob: Blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  
    // Create a link to download the file
    const link: HTMLAnchorElement = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "signup_data.csv");
    link.style.visibility = "hidden";
  
    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();
  
    // Clean up
    document.body.removeChild(link);
  
    // Toggle to the login form after a slight delay
    setTimeout(function (): void {
      toggleForm(); // Toggle to the login form after signup
    }, 1000); // Adjust the delay time as needed
  });
  
  // Function to handle login form submission
  $("#loginForm").submit(function (e: JQuery.Event): void {
    e.preventDefault();
  
    const email: string = $("#login-email").val() as string;
    const password: string = $("#login-password").val() as string;
  
    const transaction: IDBTransaction = db.transaction(["users"], "readonly");
    const objectStore: IDBObjectStore = transaction.objectStore("users");
    const request: IDBRequest<IDBValidKey | undefined> = objectStore.get(email);
  
    // Handle error fetching user data
    request.onerror = function (event: Event): void {
      alert("Error fetching data");
    };
  
    // Handle successful data retrieval for login
    request.onsuccess = function (event: Event): void {
      const storedUser = (event.target as IDBRequest).result as { email: string; password: string } | undefined;
      if (storedUser && storedUser.password === password) {
        alert("Login successful!");
        window.location.href = "../behind-the-beans/behind-the-beans.html"; // Redirect after successful login
      } else {
        alert("Invalid credentials. Please try again.");
      }
    };
  });
  