const updateTime = () => {
  const now = new Date();
  const current = now.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  document.querySelectorAll('#current-time').forEach((el) => el.textContent = current);
};

const quizForm = document.getElementById('quiz-form');
if (quizForm) {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const sunlight = document.getElementById('sunlight').value;
    const care = document.getElementById('care').value;
    const pet = document.getElementById('pet').value;
    const result = document.getElementById('quiz-result');
    let suggestion = 'Try a hardy snake plant with moderate light and easy care.';
    if (sunlight === 'low' && care === 'easy' && pet === 'yes') {
      suggestion = 'A peace lily is gentle and works well in lower light spaces.';
    } else if (sunlight === 'bright' && care === 'moderate' && pet === 'no') {
      suggestion = 'Monstera deliciosa is ideal for bright indirect light and style.';
    }
    result.innerHTML = `<div class="alert alert-success"><strong>Suggested plant:</strong> ${suggestion}</div>`;
    result.classList.remove('d-none');
  });
}

const cartForm = document.getElementById('cart-form');
if (cartForm) {
  cartForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const summary = document.getElementById('cart-summary');
    const size = document.getElementById('size').value;
    const pot = document.getElementById('pot').value;
    const stand = document.getElementById('stand').value;
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
