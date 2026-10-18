function showMessage(area) {
    alert(
        "Thank you for your interest in our initiatives!"
    );
    
}
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop default form submit behavior

  // Get field values
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const termsChecked = document.getElementById('terms').checked;

  // Validation using simple if-else logic
  if (name === "") {
    alert("Please enter your full name.");
  } else if (email === "") {
    alert("Please enter a valid email address.");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
  } else if (!termsChecked) {
    alert("You must agree to the Terms and Privacy Policy.");
  } else {
    // If all conditions pass, simulate success and redirect
    alert(`Account created successfully for ${name}! Redirecting to home...`);
    
    // Redirect to the home page
    window.location.href = "index.html"; 
  }
});