function criarObjetosFalsos(jogo, cliqueErrado) {
  const objetosFalsos = [
    { id: 'vaca', top: 330, left: 110, src: 'imagens/vaca.png' },
    { id: 'barril', top: 320, left: 400, src: 'imagens/barril.png' },
    { id: 'gatoPreto', top: 190, left: 675, src: 'imagens/gatoPreto.png' },
    { id: 'balde', top: 340, left: 300, src: 'imagens/balde.png' },
    { id: 'forquilha', top: 500, left: 800, src: 'imagens/rastelo.png' },
    { id: 'enxada', top: 500, left: 350, src: 'imagens/enxada.png' },
    { id: 'cesto', top: 365, left: 220, src: 'imagens/cesto.png' },
    { id: 'martelo', top: 130, left: 770, src: 'imagens/martelo.png' },
    { id: 'corda', top: 130, left: 430, src: 'imagens/corda.png' },
    { id: 'botina', top: 380, left: 810, src: 'imagens/bota.png' },
    { id: 'cavalo', top: 380, left: 80, src: 'imagens/cavalo.png' },
    { id: 'feno', top: 410, left: 510, src: 'imagens/feno.png' },
    { id: 'galo', top: 210, left: 610, src: 'imagens/galo.png' },
    { id: 'gatinho', top: 460, left: 220, src: 'imagens/gatinho.png' },
    { id: 'laco', top: 510, left: 210, src: 'imagens/laco.png' },
    { id: 'ovelha', top: 360, left: 350, src: 'imagens/ovelha.png' },
    { id: 'ovo', top: 340, left: 510, src: 'imagens/ovo.png' },
    { id: 'pa', top: 460, left: 460, src: 'imagens/pa.png' },
    { id: 'porco', top: 480, left: 620, src: 'imagens/porco.png' },
    { id: 'sapo', top: 480, left: 60, src: 'imagens/sapo.png' },
    { id: 'tomate', top: 480, left: 700, src: 'imagens/tomate.png' },
    { id: 'vassoura', top: 440, left: 130, src: 'imagens/vassoura.png' }
    
  ];

  objetosFalsos.forEach(obj => {
    const img = document.createElement('img');
    img.src = obj.src;
    img.id = obj.id;
    img.style.position = 'absolute';
    img.style.top = obj.top + 'px';
    img.style.left = obj.left + 'px';
    img.style.width = '90px';
    img.style.cursor = 'pointer';
    img.style.transition = 'transform 0.3s';
    img.addEventListener('mouseover', () => img.style.transform = 'scale(1.1)');
    img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
    img.addEventListener('click', cliqueErrado);
    jogo.appendChild(img);
  });
}

 
  