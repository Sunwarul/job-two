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
    let message = 'We recommend a resilient pothos for bright to moderate light and easy care.';
    if (sunlight === 'low' && care === 'easy' && pet === 'yes') {
      message = 'Try a peace lily — it is gentle on pets and tolerates lower light.';
    } else if (sunlight === 'bright' && care === 'moderate' && pet === 'no') {
      message = 'A Monstera deliciosa is a strong choice for bright indirect light.';
    } else if (sunlight === 'moderate' && care === 'easy') {
      message = 'A snake plant offers low maintenance and flexible light needs.';
    }
    result.innerHTML = `<div class="alert alert-success"><strong>Suggested plant:</strong> ${message}</div>`;
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
    const modalEl = document.getElementById('contactModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
    contactForm.reset();
  });
}

updateTime();
setInterval(updateTime, 60000);
