const jardim = document.getElementById('jardim');
const plantarBtn = document.getElementById('plantarBtn');
const contador = document.getElementById('contador');

let totalCoracoes = 0;

plantarBtn.addEventListener('click', () => {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.style.transform = 'scale(0)';
  jardim.appendChild(coracao);

  setTimeout(() => {
    coracao.style.transform = 'scale(1)';
  }, 5);

  totalCoracoes++;
  contador.textContent = `Corações plantados: ${totalCoracoes}`;

  if (totalCoracoes >= 10) {
    // Quando chegar a 10, redireciona
    window.location.href = 'parabens.html';
  }
});

const coracoesContainer = document.createElement('div');
coracoesContainer.id = 'coracoesCaindo';
document.body.appendChild(coracoesContainer);

function criarCoracaoCai() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracaoCai');
  
  // Posição horizontal aleatória
  coracao.style.left = Math.random() * window.innerWidth + 'px';
  
  // Tamanho aleatório entre 15 e 25 px
  const tamanho = 15 + Math.random() * 10;
  coracao.style.width = tamanho + 'px';
  coracao.style.height = (tamanho * 0.9) + 'px';
  
  // Duração da animação entre 4 e 7 segundos
  coracao.style.animationDuration = (4 + Math.random() * 3) + 's';
  
  coracoesContainer.appendChild(coracao);
  
  coracao.addEventListener('animationend', () => {
    coracao.remove();
  });
}

// Cria um coração a cada 300 ms
setInterval(criarCoracaoCai, 300);

