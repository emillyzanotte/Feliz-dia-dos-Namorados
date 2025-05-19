const voltarBtn = document.getElementById('voltarBtn');
const confettiContainer = document.getElementById('confetti');

voltarBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Função para criar confetes
function criarConfete() {
  const confetto = document.createElement('div');
  confetto.classList.add('confetto');
  
  confetto.style.left = Math.random() * window.innerWidth + 'px';
  confetto.style.animationDuration = (2 + Math.random() * 2) + 's';
  confetto.style.width = confetto.style.height = (5 + Math.random() * 10) + 'px';
  confetto.style.backgroundColor = ['#ff6f91','#d63a4a','#f48fb1','#ff9a9e'][Math.floor(Math.random() * 4)];
  
  confettiContainer.appendChild(confetto);
  
  // Remove o confete após a animação
  confetto.addEventListener('animationend', () => {
    confetto.remove();
  });
}

// Gera confetes periodicamente
setInterval(criarConfete, 150);
