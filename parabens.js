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
const frasesUrso = [
  "Você é incrível, sabia? 💕",
  "Obrigada por espalhar amor! 🧸",
  "Continue sendo essa pessoa linda! 🌟",
  "Você merece toda felicidade do mundo 💖",
  "Estou aqui pra te dar um abraço virtual! 🤗"
];

document.getElementById("mascote-container").addEventListener("click", () => {
  const frase = frasesUrso[Math.floor(Math.random() * frasesUrso.length)];
  falaUrso.innerText = frase;
  falaUrso.style.display = "block";

  clearTimeout(falaUrso.timeout);
  falaUrso.timeout = setTimeout(() => {
    falaUrso.style.display = "none";
  }, 4000);
});

