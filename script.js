let menu = document.querySelector("#menubar")
let mynav = document.querySelector(".navbar")

let myuser = document.querySelector("#user")
let myform = document.querySelector(".search-form")


let mysearch = document.querySelector("#search")
let mysearchform = document.querySelector(".searchbar")

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
myuser.onclick = () =>{
    myform.classList.toggle('active');
}

mysearch.onclick = () =>{
    mysearchform.classList.toggle('active');
}

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    // Toggle display between none and flex
    if (navbar.style.display === "flex") {
        navbar.style.display = "none"; // Hide the navbar
    } else {
        navbar.style.display = "flex"; // Show the navbar
    }
}

function sendMessage() {
    // Display the confirmation message
    document.getElementById("confirmationMessage").style.display = "block";
    
    // Clear the input fields (optional)
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
}

//JavaScript to Show Hide Section on Click

document.getElementById("classLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("classModal").style.display = "block"; // Show modal
});

// Close modal when the close button is clicked
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("classModal").style.display = "none"; // Hide modal
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    const modal = document.getElementById("classModal");
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
});

// Register button action (you can customize this)

// Register button action for class
document.getElementById("registerButton").addEventListener("click", function() {
    const classForm = document.getElementById("classRegistrationForm");
    classForm.style.display = (classForm.style.display === "none" || classForm.style.display === "") ? "block" : "none";
});

// Handle class registration form submission
document.getElementById("classRegistration").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const className = document.getElementById("className").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Here, you can send the data to your server or handle it as necessary
    alert(`Thank you, ${name}! You have registered for the ${className} class with the email ${email}.`);

    // Close the modal after submission
    document.getElementById("classModal").style.display = "none"; 
});

// Event Modal
document.getElementById("eventLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("eventModal").style.display = "block"; // Show event modal
});

// Close event modal when the close button is clicked
document.getElementById("closeEventModal").addEventListener("click", function() {
    document.getElementById("eventModal").style.display = "none"; // Hide event modal
});

// Show sign-up form when the signup button is clicked
document.getElementById("signupButton").addEventListener("click", function() {
    const signupForm = document.getElementById("signupForm");
    signupForm.style.display = (signupForm.style.display === "none" || signupForm.style.display === "") ? "block" : "none";
});

// Handle form submission
document.getElementById("eventRegistrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Here, you can send the data to your server or handle it as necessary
    alert(`Thank you, ${name}! You have registered for the event with the email ${email}.`);

    // Close the modal after submission
    document.getElementById("eventModal").style.display = "none"; 
});

// Trainers Modal
document.getElementById("trainerLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("trainerModal").style.display = "block"; // Show trainer modal
});
// Close trainer modal when the close button is clicked
document.getElementById("closeTrainerModal").addEventListener("click", function() {
    document.getElementById("trainerModal").style.display = "none"; // Hide trainer modal
});

// Trainer Registration Logic
document.getElementById("trainerSignupButton").addEventListener("click", function() {
    const trainerSignupForm = document.getElementById("trainerSignupForm");
    trainerSignupForm.style.display = (trainerSignupForm.style.display === "none" || trainerSignupForm.style.display === "") ? "block" : "none";
});

document.getElementById("trainerRegistrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const trainerName = document.getElementById("trainerName").value;
    const trainerUserName = document.getElementById("trainerUserName").value;
    const trainerEmail = document.getElementById("trainerEmail").value;

    alert(`Thank you, ${trainerUserName}! You have signed up with ${trainerName} as your trainer with the email ${trainerEmail}.`);
    document.getElementById("trainerModal").style.display = "none"; 
});

//JavaScript to Handle Modals

// Show Shop Modal
document.getElementById("shopLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("shopModal").style.display = "block"; // Show shop modal
});

// Close Shop Modal
document.getElementById("closeShopModal").addEventListener("click", function() {
    document.getElementById("shopModal").style.display = "none"; // Hide shop modal
});

// Purchase Button Toggle Purchase Form
document.getElementById("purchaseButton").addEventListener("click", function() {
    const purchaseForm = document.getElementById("purchaseForm");
    purchaseForm.style.display = (purchaseForm.style.display === "none" || purchaseForm.style.display === "") ? "block" : "none";
});

// Handle Purchase Form Submission
document.getElementById("shopPurchaseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const product = document.getElementById("product").value;
    const buyerName = document.getElementById("buyerName").value;
    const buyerEmail = document.getElementById("buyerEmail").value;

    alert(`Thank you, ${buyerName}! You have purchased ${product} with the email ${buyerEmail}.`);
    document.getElementById("shopModal").style.display = "none"; // Close shop modal after submission
});


// Show Features Modal
document.getElementById("featuresLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("featuresModal").style.display = "block"; // Show features modal
});

// Close Features Modal
document.getElementById("closeFeaturesModal").addEventListener("click", function() {
    document.getElementById("featuresModal").style.display = "none"; // Hide features modal
});

// Toggle Learn More Form
document.getElementById("learnMoreButton").addEventListener("click", function() {
    const learnMoreForm = document.getElementById("learnMoreForm");
    learnMoreForm.style.display = (learnMoreForm.style.display === "none" || learnMoreForm.style.display === "") ? "block" : "none";
});

// Handle Features Form Submission
document.getElementById("featuresForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const featureInterest = document.getElementById("featureInterest").value;
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;

    alert(`Thank you, ${userName}! We'll share more information about the ${featureInterest} feature with you at ${userEmail}.`);
    document.getElementById("featuresModal").style.display = "none"; // Close features modal after submission
});


//Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    const classModal = document.getElementById("classModal");
    const eventModal = document.getElementById("eventModal");
    const trainerModal = document.getElementById("trainerModel");
    const shopModal = document.getElementById("shopModal");
    const featuresModal = document.getElementById("featuresModal");
    
    if (event.target === classModal) {
        classModal.style.display = "none"; // Hide class modal
    }
    if (event.target === eventModal) {
        eventModal.style.display = "none"; // Hide event modal
    }
    if (event.target === trainerModal) {
        trainerModal.style.display = "none"; 
    }
    if (event.target === shopModal) {
        shopModal.style.display = "none"; 
    }
    if (event.target === featuresModal) {
        featuresModal.style.display = "none"; 
    }
   
});

