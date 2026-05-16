// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☾';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☾' : '☀';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== CONTACT FORM =====
function sendMessage() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const feedback = document.getElementById('form-feedback');

  if (!name || !email || !message) return;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    feedback.textContent = '⚠ Please fill in all fields before sending.';
    feedback.style.color = '#e74c3c';
    return;
  }

  if (!email.value.includes('@')) {
    feedback.textContent = '⚠ Please enter a valid email address.';
    feedback.style.color = '#e74c3c';
    return;
  }

  feedback.textContent = '✓ Message sent! Thank you, ' + name.value.trim() + '. I will get back to you soon.';
  feedback.style.color = '#27ae60';

  name.value = '';
  email.value = '';
  message.value = '';
}

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.post-card, .blog-post, .contact-card, .edu-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});
. 
