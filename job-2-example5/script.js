const updateTime = () => {
  const now = new Date();
  document.querySelectorAll('#current-time').forEach((el) => {
    el.textContent = now.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  });
};

const quizForm = document.getElementById('quiz-form');
if (quizForm) {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const sunlight = document.getElementById('sunlight').value;
    const care = document.getElementById('care').value;
    const pet = document.getElementById('pet').value;
    const result = document.getElementById('quiz-result');
    let suggestion = 'A snake plant is a low-maintenance choice that suits most light conditions.';
    if (sunlight === 'low' && care === 'easy' && pet === 'yes') {
      suggestion = 'A peace lily is a gentle, pet-aware option for lower light areas.';
    } else if (sunlight === 'bright' && care === 'moderate') {
      suggestion = 'Monstera deliciosa thrives in bright indirect light and routine care.';
    }
    result.innerHTML = `<div class="alert alert-success"><strong>Recommended plant:</strong> ${suggestion}</div>`;
    result.classList.remove('d-none');
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
    summary.innerHTML = `<div class="alert alert-info"><strong>Added to cart:</strong> Monstera Deliciosa<br>Size: ${size}<br>Pot: ${pot}<br>Stand: ${stand}</div>`;
    summary.classList.remove('d-none');
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show();
    contactForm.reset();
  });
}

updateTime();
setInterval(updateTime, 60000);
