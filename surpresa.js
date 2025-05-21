const voltarBtn = document.getElementById("voltarBtn");
voltarBtn.addEventListener("click", () => {
  window.location.href = "index.html"; // Altere se sua página do jardim tiver outro nome
});

// Função para criar corações
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
