const jogo = document.getElementById('jogo');
const mensagem = document.getElementById('mensagem');
const botaoNovoJogo = document.getElementById('botaoNovoJogo');

let tentativas = 3;
let encontrou = false;
let regador, galinha;

// Inicializa o jogo
function iniciarJogo() {
  jogo.innerHTML = '';
  criarCenario(jogo);
  galinha = criarGalinha(jogo);
  regador = criarRegador(jogo);
  criarObjetosFalsos(jogo, cliqueErrado);

  encontrou = false;
  tentativas = 3;
  mensagem.textContent = 'Clique nos objetos para encontrar a galinha!';
  botaoNovoJogo.style.display = 'none';

  regador.addEventListener('click', encontrarGalinha);
}

// Quando clica errado
function cliqueErrado() {
  if (encontrou) return;
  tentativas--;
  if (tentativas > 0) {
    mensagem.textContent = `Nada aqui... restam ${tentativas} tentativa(s).`;
  } else {
    mensagem.textContent = 'Fim de jogo 😢 A galinha fugiu!';
    desabilitarCliques();
    botaoNovoJogo.style.display = 'inline-block';
  }
}

// Quando clica no regador
function encontrarGalinha() {
  if (encontrou) return;
  encontrou = true;
  regador.style.display = 'none';
  galinha.style.display = 'block';
  mensagem.textContent = 'Você encontrou a galinha! 🐔';
  desabilitarCliques();
  botaoNovoJogo.style.display = 'inline-block';
}

function desabilitarCliques() {
  jogo.querySelectorAll('img').forEach(el => el.style.pointerEvents = 'none');
}

// Reiniciar o jogo
botaoNovoJogo.addEventListener('click', iniciarJogo);

// Começa o jogo automaticamente
iniciarJogo();