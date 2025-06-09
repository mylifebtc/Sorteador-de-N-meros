let repetirAtivado = false;

function toggleRepetir() {
  repetirAtivado = !repetirAtivado;
  const toggleSwitch = document.getElementById('toggleSwitch');
  toggleSwitch.classList.toggle('active');
  document.getElementById('toggleLabel').textContent = repetirAtivado ? 'Não repetir número' : 'Repetir número';
}
function sortear(event) {
  event.preventDefault();
  const quantidade = parseInt(document.getElementById('num1').value) || 0;
  const inicio = parseInt(document.getElementById('num2').value) || 0;
  const fim = parseInt(document.getElementById('num3').value) || 0;
  const permitirRepeticao = !repetirAtivado;
  const resultDiv = document.getElementById('result');

//  if (quantidade === 0 || inicio === 0 || fim === 0) {
//   resultDiv.innerHTML = '<h3>RESULTADO DO SORTEIO</h3><h4>1º RESULTADO</h4><div class="numbers">Erro: Preencha todos os campos com números válidos.</div><button id="sortear-novamente" onclick="reiniciar()">SORTEAR NOVAMENTE <span><img src="assets/btn-again.svg" alt=""></span></button>';
//   showResult();
//  return;
// }

const sorteados = [];

if (permitirRepeticao) {
  for (let i = 0; i < quantidade; i++) {
    sorteados.push(Math.floor(Math.random() * (fim - inicio + 1)) + inicio);
  }
} else {
  const numeros = Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);
  for (let i = 0; i < quantidade; i++) {
    const indice = Math.floor(Math.random() * numeros.length);
    sorteados.push(numeros.splice(indice, 1)[0]);
  }
}

  resultDiv.innerHTML = `<h3>RESULTADO DO SORTEIO</h3><h4>1º RESULTADO</h4><div class="numbers">${sorteados.sort((a, b) => a - b).join(' ')}</div><button id="sortear-novamente" onclick="reiniciar()">SORTEAR NOVAMENTE <span><img src="assets/btn-again.svg" alt=""></span></button>`;
  showResult();
}

function showResult() {
  document.getElementById('sorteador-form').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}

function reiniciar() {
  document.getElementById('sorteador-form').style.display = 'block';
  document.getElementById('result').style.display = 'none';
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('num3').value = '';
  repetirAtivado = false;
  document.getElementById('toggleSwitch').classList.remove('active');
  document.getElementById('toggleLabel').textContent = 'Repetir número';
  document.getElementById('result').innerHTML = '';
}




let repetirAtivadoDesktop = false;

function toggleRepetirDesktop() {
  console.log('Toggle desktop clicado');
  repetirAtivadoDesktop = !repetirAtivadoDesktop;
  const toggleSwitch = document.getElementById('toggleSwitch-desk');
  const toggleLabel = document.getElementById('toggleLabel-desk');
  if (!toggleSwitch || !toggleLabel) {
    console.error('Elementos do toggle desktop não encontrados');
    return;
  }
  toggleSwitch.classList.toggle('active');
  toggleLabel.textContent = repetirAtivadoDesktop ? 'Não repetir número' : 'Repetir número';
}

function sortearDesktop(event) {
  console.log('Botão sortear desktop clicado');
  event.preventDefault();
  const quantidade = parseInt(document.getElementById('num1-desktop').value) || 0;
  const inicio = parseInt(document.getElementById('num2-desktop').value) || 0;
  const fim = parseInt(document.getElementById('num3-desktop').value) || 0;
  const permitirRepeticao = !repetirAtivadoDesktop;
  const resultDiv = document.getElementById('result-desktop');


  const sorteados = [];

  if (permitirRepeticao) {
    for (let i = 0; i < quantidade; i++) {
      sorteados.push(Math.floor(Math.random() * (fim - inicio + 1)) + inicio);
    }
  } else {
    const numeros = Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);
    for (let i = 0; i < quantidade; i++) {
      const indice = Math.floor(Math.random() * numeros.length);
      sorteados.push(numeros.splice(indice, 1)[0]);
    }
  }

  resultDiv.innerHTML = `<h3>RESULTADO DO SORTEIO</h3><h4>1º RESULTADO</h4><div class="numbers">${sorteados.sort((a, b) => a - b).join(' ')}</div><button id="sortear-novamente-desktop" onclick="reiniciarDesktop()">SORTEAR NOVAMENTE <span><img src="assets/btn-again.svg" alt=""></span></button>`;
  showResultDesktop();
}


function showResultDesktop() {
    document.getElementById('sorteador').style.display = 'none';
    document.getElementById('result-desktop').style.display = 'block';
  }

function reiniciarDesktop() {
  const formDesktop = document.getElementById('sorteador');
  const result = document.getElementById('result-desktop');
  if (formDesktop && result) {
    formDesktop.style.display = 'block';
    result.style.display = 'none';
    document.getElementById('num1-desktop').value = '';
    document.getElementById('num2-desktop').value = '';
    document.getElementById('num3-desktop').value = '';
    repetirAtivadoDesktop = false;
    const toggleSwitch = document.getElementById('toggleSwitch-desk');
    const toggleLabel = document.getElementById('toggleLabel-desk');
    if (toggleSwitch && toggleLabel) {
      toggleSwitch.classList.remove('active');
      toggleLabel.textContent = 'Repetir número';
    }
    result.innerHTML = '';
  } else {
    console.error('Elementos do formulário desktop ou resultado não encontrados em reiniciar');
  }
}