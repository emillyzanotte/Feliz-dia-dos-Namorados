const jardim = document.getElementById('jardim');
const plantarBtn = document.getElementById('plantarBtn');
const contador = document.getElementById('contador');
const coracoesCaindo = document.getElementById('coracoesCaindo');

let totalCoracoes = 0;

plantarBtn.addEventListener('click', () => {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.textContent = '💖'; // emoji visível no jardim
  coracao.style.transform = 'scale(0)';
  jardim.appendChild(coracao);

  // animação de scale in
  setTimeout(() => {
    coracao.style.transform = 'scale(1)';
  }, 10);

  totalCoracoes++;
  contador.textContent = `Corações plantados: ${totalCoracoes}`;

  if (totalCoracoes >= 10) {
    window.location.href = 'parabens.html';
  }
});

// Função para criar corações caindo
function criarCoracaoCai() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracaoCai');
  coracao.style.left = Math.random() * window.innerWidth + 'px';

  const tamanho = 15 + Math.random() * 10;
  coracao.style.width = `${tamanho}px`;
  coracao.style.height = `${tamanho * 0.9}px`;

  coracao.style.animationDuration = (4 + Math.random() * 3) + 's';

  coracoesCaindo.appendChild(coracao);

  coracao.addEventListener('animationend', () => {
    coracao.remove();
  });
}

// Cria um coração caindo a cada 300ms
setInterval(criarCoracaoCai, 300);
