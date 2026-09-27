const flipCard = document.getElementById('flipCard');
const flipButtons = document.querySelectorAll('[data-flip]');
const passwordButtons = document.querySelectorAll('.password-toggle');

flipButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.flip;
    flipCard.classList.toggle('is-flipped', target === 'signup');
  });
});

passwordButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.target);
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    button.textContent = showing ? '👁' : '🙈';
    button.setAttribute('aria-label', showing ? 'Passwort anzeigen' : 'Passwort verbergen');
  });
});
