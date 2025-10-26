// Floating Code Animation
const floating = document.getElementById('floatingCode');
const symbols = ['<', 'div', '{', '}', 'CSS', 'JS', 'React', '</>', '=>', 'let', 'const'];
for (let i = 0; i < 60; i++) {
  const span = document.createElement('span');
  span.classList.add('code-particle');
  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.animationDuration = (8 + Math.random() * 10) + 's';
  span.style.fontSize = (12 + Math.random() * 10) + 'px';
  floating.appendChild(span);
}