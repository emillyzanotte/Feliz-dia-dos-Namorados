window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('coracoesCaindo');
  const botao = document.getElementById('proximoBtn');

  function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.textContent = '💖';
    coracao.style.left = Math.random() * window.innerWidth + 'px';
    coracao.style.fontSize = (16 + Math.random() * 10) + 'px';
    coracao.style.animationDuration = (4 + Math.random() * 2) + 's';

    container.appendChild(coracao);

    coracao.addEventListener('animationend', () => {
      coracao.remove();
    });
  }

  setInterval(criarCoracao, 300);

  botao.addEventListener('click', () => {
    window.location.href = 'index.html'; // ou qualquer página que queira
  });
});
