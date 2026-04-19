// Display Current Date & Time
function updateDateTime() {
    const now = new Date();
    const display = document.getElementById('date-time');
    if (display) {
        display.innerHTML = "Current Date & Time: " + now.toLocaleString();
    }
}
setInterval(updateDateTime, 1000);

// Form Confirmation Popup
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent successfully. A plant specialist will contact you soon.");
    document.getElementById('contactForm').reset();
}

// Simple Quiz Logic (Placeholder)
function runQuiz() {
    alert("Based on your love for low light and pets, we recommend a Spider Plant!");
}