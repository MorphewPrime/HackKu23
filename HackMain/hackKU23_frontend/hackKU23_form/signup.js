// Define an array to store the user credentials
var users = [];

// Function to add a new user to the array
function addUser(username, password) {
  users.push({username: username, password: password});
}

// Function to validate if a user already exists
function userExists(username) {
  for(var i = 0; i < users.length; i++) {
    if(users[i].username === username) {
      return true;
    }
  }
  return false;
}

// Function to handle the signup form submission
function signup() {
  var newUsername = document.getElementById("new_username").value;
  var newPassword = document.getElementById("new_password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  
  // Validate that all fields are filled in and the password matches the confirm password field
  if(newUsername === "" || newPassword === "" || confirmPassword === "" || newPassword !== confirmPassword) {
    alert("Please fill in all fields and make sure the passwords match.");
    return;
  }
  
  // Validate if the user already exists
  if(userExists(newUsername)) {
    alert("This username is already taken. Please choose another one.");
    return;
  }
  
  // Add the new user to the array
  addUser(newUsername, newPassword);
  
  alert("Signup successful! Please log in.");
  location.href="login.html";
}

// Function to handle the login form submission
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Validate if the user exists and the password matches
  for(var i = 0; i < users.length; i++) {
    if(users[i].username === username && users[i].password === password) {
      alert("Login successful!");
      location.href="index.html";
      return;
    }
  }
  
  alert("Invalid username or password. Please try again.");
}
