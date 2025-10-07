function criarGalinha(jogo) {
  const galinha = document.createElement('img');
  galinha.src = 'imagens/galinha.png';
  galinha.id = 'galinha';
  galinha.style.position = 'absolute';
  galinha.style.width = '90px';
  galinha.style.top = '400px';
  galinha.style.left = '610px';
  galinha.style.display = 'none';
  jogo.appendChild(galinha);
  return galinha;
}