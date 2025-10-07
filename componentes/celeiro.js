function criarCenario(jogo) {
  const fundo = document.createElement('img');
  fundo.src = 'imagens/celeiro.png';
  fundo.id = 'cenario';
  fundo.style.width = '100%';
  fundo.style.height = '100%';
  fundo.style.objectFit = 'cover';
  jogo.appendChild(fundo);
}