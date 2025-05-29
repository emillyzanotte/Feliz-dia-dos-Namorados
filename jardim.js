const input = document.getElementById('palavraInput');
const continuarBtn = document.getElementById('continuarBtn');
const confettiContainer = document.getElementById('confetti');

input.addEventListener('input', () => {
  const palavra = input.value.trim().toLowerCase();
  continuarBtn.disabled = palavra !== 'resposta';
});

continuarBtn.addEventListener('click', () => {
  window.location.href = 'parabens.html';
});

function criarConfete() {
  const confetto = document.createElement('div');
  confetto.classList.add('confetto');
  confetto.style.left = Math.random() * window.innerWidth + 'px';
  confetto.style.animationDuration = (2 + Math.random() * 2) + 's';
  const tamanho = 5 + Math.random() * 10;
  confetto.style.width = `${tamanho}px`;
  confetto.style.height = `${tamanho}px`;
  confetto.style.backgroundColor = ['#ff6f91','#d63a4a','#f48fb1','#ff9a9e'][Math.floor(Math.random() * 4)];
  
  confettiContainer.appendChild(confetto);
  
  confetto.addEventListener('animationend', () => {
    confetto.remove();
  });
}

setInterval(criarConfete, 200);

