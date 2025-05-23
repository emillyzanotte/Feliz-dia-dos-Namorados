// Botão voltar
const voltarBtn = document.getElementById("voltarBtn");
voltarBtn.addEventListener("click", () => {
  window.location.href = "index.html"; // ajuste se necessário
});

// Corações caindo
function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.style.left = Math.random() * window.innerWidth + "px";
  coracao.style.fontSize = Math.random() * 15 + 15 + "px";
  coracao.innerText = "💖";

  document.getElementById("coracoesCaindo").appendChild(coracao);

  coracao.addEventListener("animationend", () => {
    coracao.remove();
  });
}

setInterval(criarCoracao, 300);

const musica = document.getElementById("musica");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeControl = document.getElementById("volumeControl");

let tocando = false;

playPauseBtn.addEventListener("click", () => {

  const progressBar = document.getElementById("progressBar");

// Atualiza a barra conforme a música toca
musica.addEventListener("timeupdate", () => {
  if (!isNaN(musica.duration)) {
    progressBar.max = musica.duration;
    progressBar.value = musica.currentTime;
  }
});

// Permite o usuário arrastar a barra para mudar o tempo da música
progressBar.addEventListener("input", () => {
  musica.currentTime = progressBar.value;
});

  const iconPlay = document.getElementById("iconPlay");
  const iconPause = document.getElementById("iconPause");

  if (tocando) {
    musica.pause();
    iconPlay.style.display = "block";
    iconPause.style.display = "none";
    tocando = false;
  } else {
    musica.play().catch(e => console.log("Erro ao tocar música:", e));
    iconPlay.style.display = "none";
    iconPause.style.display = "block";
    tocando = true;
  }
});

window.addEventListener("load", () => {
  musica.volume = 0.3;
  musica.play().then(() => {
    iconPlay.style.display = "none";
    iconPause.style.display = "block";
    tocando = true;
  }).catch(() => {
    document.getElementById("somAviso").style.display = "block";
    document.body.addEventListener("click", iniciarMusica, { once: true });
  });
});

function iniciarMusica() {
  musica.play();
  iconPlay.style.display = "none";
  iconPause.style.display = "block";
  tocando = true;
  document.getElementById("somAviso").style.display = "none";
}



