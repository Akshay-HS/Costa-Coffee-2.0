function submitForm() {
  // Get form data
  const formData = {
    coffeeBean: document.getElementById('coffee-bean').value,
    sweetener: document.getElementById('sweetener').value,
    milk: document.getElementById('milk').value,
    remarks: document.getElementById('remarks').value,
  };

  // Send data to Google Apps Script deployed web app
  sendDataToGoogleAppsScript(formData);
}

const scriptURL = "https://script.google.com/macros/s/AKfycbwOhB4GnZOGLTZ6ahgAAZDymzOeAL7okcRfKWnO8xgXL45xFde0tMKqpxPUMtZpOHoK/exec";
 
  const form = document.forms["coffeeForm"];
   
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thank you! your form is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  });