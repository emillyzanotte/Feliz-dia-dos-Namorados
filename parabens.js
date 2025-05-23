const proximaBtn = document.getElementById('proximaBtn');
const confettiContainer = document.getElementById('confetti');

proximaBtn.addEventListener('click', () => {
  window.location.href = 'surpresa.html';
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

setInterval(criarConfete, 150);

// Som de comemoração ao carregar a página
window.addEventListener('load', () => {
  const audio = document.getElementById('celebrationSound');
  audio.play().catch(() => {
    // Usuário não permitiu autoplay
  });

  digitarMensagem(" clique no ursinho... 🧸");
});

// Efeito máquina de escrever
function digitarMensagem(mensagem) {
  const elemento = document.getElementById("typewriter");
  let i = 0;
  const velocidade = 60;

  function digitar() {
    if (i < mensagem.length) {
      elemento.innerHTML += mensagem.charAt(i);
      i++;
      document.getElementById("mascote-container").addEventListener("click", () => {
  const frase = frasesUrso[Math.floor(Math.random() * frasesUrso.length)];
  falaUrso.innerText = frase;
  falaUrso.style.display = "block";

  // Remover a classe de animação caso esteja aplicada
  falaUrso.classList.remove("slide-out");

  clearTimeout(falaUrso.timeout);
  falaUrso.timeout = setTimeout(() => {
    // Adiciona classe para animar saída
    falaUrso.classList.add("slide-out");

    // Após a animação terminar, esconde o balão
    falaUrso.addEventListener("animationend", () => {
      falaUrso.style.display = "none";
      falaUrso.classList.remove("slide-out");
    }, { once: true });
  }, 4000);
});

    }
  }

  digitar();
}

const falaUrso = document.getElementById("fala-urso");
const urso = document.getElementById("urso");

const frasesUrso = [
  "Você é incrível, sabia? 💕",
  "Obrigada por cada momento! 🧸",
  "Eu te amarei hoje, amanhã, e sempre! 🌟",
  "Você merece toda felicidade que esteja ao meu alcançe de te proporcionar 💖",
  "Eu te amo meu bobinho favorito! 🤗"
];

let cliqueContagem = 0;

// Guarda a posição vertical inicial do urso para fixar o movimento horizontal
const posYInicial = urso.getBoundingClientRect().top;

urso.addEventListener("click", () => {
  if (cliqueContagem >= frasesUrso.length) {
    urso.style.display = "none";
    falaUrso.style.display = "none";
    return;
  }

  const frase = frasesUrso[cliqueContagem];
  falaUrso.innerText = frase;
  falaUrso.style.display = "block";

  const maxX = window.innerWidth - 100;

  // Movimento somente horizontal
  const novoX = Math.random() * maxX;
  const novoY = posYInicial;

  urso.style.position = "fixed";
  urso.style.left = `${novoX}px`;
  urso.style.top = `${novoY}px`;

  falaUrso.style.position = "fixed";
  falaUrso.style.left = `${novoX + 50}px`; // ajusta balão à direita do urso
  falaUrso.style.top = `${novoY - 30}px`; // ajusta verticalmente um pouco acima

  // Limita largura do balão para não ficar enorme
  falaUrso.style.maxWidth = "200px";
  falaUrso.style.padding = "8px 12px";
  falaUrso.style.borderRadius = "12px";
  falaUrso.style.background = "rgba(255, 255, 255, 0.9)";
  falaUrso.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
  falaUrso.style.fontSize = "14px";
  falaUrso.style.lineHeight = "1.3";
  falaUrso.style.wordWrap = "break-word";

  clearTimeout(falaUrso.timeout);
  falaUrso.timeout = setTimeout(() => {
    falaUrso.classList.add("slide-out");
    falaUrso.addEventListener(
      "animationend",
      () => {
        falaUrso.style.display = "none";
        falaUrso.classList.remove("slide-out");
      },
      { once: true }
    );
  }, 4000);

  cliqueContagem++;
});


function criarBalao() {
  const balao = document.createElement('div');
  balao.classList.add('balao');

  // Cor aleatória
  const cores = ['#ff6f91', '#f48fb1', '#ff9a9e', '#d63a4a'];
  balao.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];

  balao.style.left = Math.random() * (window.innerWidth - 50) + 'px';

  document.body.appendChild(balao);

  // Evento de clique -> Estourar
  balao.addEventListener('click', () => {
    balao.classList.add('estourar');

    // Remove depois da animação
    balao.addEventListener('animationend', () => {
      balao.remove();
    });
  });

  // Remover caso suba até o topo sem ser clicado
  balao.addEventListener('animationend', (e) => {
    if (e.animationName === 'subirBalao') {
      balao.remove();
    }
  });
}

// Gera balões a cada 2 segundos
setInterval(criarBalao, 2000);
