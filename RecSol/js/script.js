// On DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
  var currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "login.htm") {
    // Button Functionality - Login
    var loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", login);
  }

  if (currentPage === "register.htm") {
    // Button Functionality - Register
    var registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", register);
  }

  if (currentPage === "search.htm") {
    // Button Functionality - Search Candidates
    var searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      searchCandidates();
    });

    // Button Functionality - Evaluate Candidates
    var evaluateButton = document.getElementById("evaluate-button");
    evaluateButton.addEventListener("click", evaluateCandidates);

    // Button Functionality - Rank Candidates
    var rankButton = document.getElementById("rank-button");
    rankButton.addEventListener("click", rankCandidates);
  }
});

// Candidate Search Functionality
function searchCandidates() {
  // Get the location and job role input values
  var location = document.getElementById("location").value;
  var jobRole = document.getElementById("job-role").value;

  // Perform the search operation (e.g., fetch candidates from a database/API)

  // Dummy candidates for demonstration
  var candidates = [
    { name: "John Doe", location: "New York", role: "Software Engineer" },
    { name: "Jane Smith", location: "London", role: "UI/UX Designer" },
    { name: "David Johnson", location: "San Francisco", role: "Project Manager" }
  ];

  // Clear the existing list
  var candidateList = document.getElementById("candidates");
  candidateList.innerHTML = "";

  // Display the fetched candidates
  candidates.forEach(function(candidate) {
    var li = document.createElement("li");
    li.textContent = candidate.name + " - " + candidate.location + " - " + candidate.role;
    candidateList.appendChild(li);
  });
}

// Button Functionality - Evaluate Candidates
function evaluateCandidates() {
  // Perform the evaluation of candidates
  // Add your custom logic here
  alert("Candidates evaluated!");
}

// Button Functionality - Rank Candidates
function rankCandidates() {
  // Perform the ranking of candidates
  // Add your custom logic here
  alert("Candidates ranked!");
}


// On DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
  var currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "login.htm") {
    // Button Functionality - Login
    var loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", login); // Add event listener to the form submit event

    var loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", login); // Add event listener to the button click event
  }

  // ...
});

// Form Submission - Login
function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Declare and assign values for companyName, email, and validPassword
  var companyName = "RNXG"; // Replace with actual company name
  var email = "rnxg@sggs.ac.in"; // Replace with actual email
  var validPassword = "12345678"; // Replace with the desired valid password

  // Perform login validation
  if ((username === companyName || username === email) && password === validPassword) {
    alert("Login successful!");
    // Redirect to dashboard or desired page
  } else {
    alert("Invalid username or password. Please try again.");
  }
}


// Form Submission - Registration
function register(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form input values
  var companyName = document.getElementById("company-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform registration logic (e.g., send request to server to create a new account)

  // Dummy registration logic for demonstration
  alert("Registration successful! Please login with your new account.");
  registerForm.reset(); // Clear the form fields
}

