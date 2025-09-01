// Contador regresivo
let seconds = 5;
const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
  seconds--;
  countdownElement.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(timer);
    window.location.href = "/";
  }
}, 1000);

// Analytics o tracking (opcional)
// gtag('event', 'form_submit', {
//     'event_category': 'Contact',
//     'event_label': 'Contact Form'
// });
