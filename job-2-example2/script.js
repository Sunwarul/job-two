const updateTime = () => {
  const now = new Date();
  const formatted = now.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  document.querySelectorAll('#current-time').forEach((element) => {
    element.textContent = formatted;
  });
};

const quizForm = document.getElementById('quiz-form');
if (quizForm) {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const sunlight = document.getElementById('sunlight').value;
    const care = document.getElementById('care').value;
    const pet = document.getElementById('pet').value;
    const resultElement = document.getElementById('quiz-result');
    let suggestion = 'Try a resilient pothos with bright indirect light and regular watering.';

    if (sunlight === 'low' && care === 'easy' && pet === 'yes') {
      suggestion = 'A peace lily is a gentle choice for lower light and a pet-aware home.';
    } else if (sunlight === 'bright' && care === 'moderate' && pet === 'no') {
      suggestion = 'Monstera deliciosa offers dramatic leaves and loves bright indirect light.';
    } else if (sunlight === 'moderate' && care === 'easy' && pet === 'yes') {
      suggestion = 'Choose a snake plant for easy care that can tolerate a range of light.';
    } else if (sunlight === 'bright' && care === 'easy' && pet === 'yes') {
      suggestion = 'A cast iron plant is sturdy, low maintenance, and pet-friendly.';
    }

    resultElement.innerHTML = `
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Recommended plant</h4>
        <p>${suggestion}</p>
      </div>
    `;
    resultElement.classList.remove('d-none');
  });
}

const cartForm = document.getElementById('cart-form');
if (cartForm) {
  cartForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const size = document.getElementById('size').value;
    const pot = document.getElementById('pot').value;
    const stand = document.getElementById('stand').value;
    const summary = document.getElementById('cart-summary');

    summary.innerHTML = `
      <div class="alert alert-info" role="alert">
        <strong>Added to cart:</strong> Monstera Deliciosa<br />
        Size: ${size}<br />
        Pot: ${pot}<br />
        Stand: ${stand}
      </div>
    `;
    summary.classList.remove('d-none');
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const modalElement = document.getElementById('confirmModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    contactForm.reset();
  });
}

updateTime();
setInterval(updateTime, 60000);
