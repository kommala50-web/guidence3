// ===== Floating Code Animation (runs only if element exists) =====
const floating = document.getElementById('floatingCode');

if (floating) {
  const symbols = [
    'int', 'char', 'float', 'double', 'printf', 'scanf',
    'if', 'else', 'for', 'while', 'return', '#include'
  ];

  for (let i = 0; i < 120; i++) {
    const span = document.createElement('span');
    span.className = 'code-particle';
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = Math.random() * 100 + 'vh';
    span.style.animationDuration = (8 + Math.random() * 10) + 's';
    span.style.fontSize = (12 + Math.random() * 10) + 'px';
    floating.appendChild(span);
  }
}


// ===== Toggle Code Examples =====
document.querySelectorAll('.toggle-code').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.nextElementSibling;
    if (!code) return; // prevent null errors

    const isVisible = code.classList.contains('hidden');
    code.classList.toggle('hidden', !isVisible);
    btn.textContent = isVisible ? 'Hide Example' : 'Show Example';
  });
});


// ===== Optional: Smooth Fade-In for Skill Cards =====
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.skill-card');
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add('visible'), index * 100);
  });
});
