// Navigation active link
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// Calculator
function updateCalc() {
  const sqm = parseInt(document.getElementById('sqmRange')?.value) || 20;
  const rate = parseInt(document.getElementById('packageSelect')?.value) || 1200;
  const cost = sqm * rate;
  
  if (document.getElementById('sqmValue')) 
    document.getElementById('sqmValue').textContent = sqm;
  if (document.getElementById('resultValue')) 
    document.getElementById('resultValue').textContent = cost.toLocaleString('pl-PL') + ' PLN';
}

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.classList.toggle('active');
  });
});

// Form submission
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dziękujemy! Skontaktujemy się wkrótce.');
    form.reset();
  });
});

// Chatbot toggle
function toggleChatbot() {
  const modal = document.getElementById('chatbotModal');
  if (modal) modal.classList.toggle('active');
}

// Smooth scroll to elements
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
