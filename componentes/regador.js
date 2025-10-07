function criarRegador(jogo) {
  const regador = document.createElement('img');
  regador.src = 'imagens/regador.png';
  regador.id = 'regador';
  regador.style.position = 'absolute';
  regador.style.width = '100px';
  regador.style.top = '380px';
  regador.style.left = '600px';
  regador.style.cursor = 'pointer';
  regador.style.transition = 'transform 0.3s';
  regador.addEventListener('mouseover', () => regador.style.transform = 'scale(1.1)');
  regador.addEventListener('mouseout', () => regador.style.transform = 'scale(1)');
  jogo.appendChild(regador);
  return regador;
}