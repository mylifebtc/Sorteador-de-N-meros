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

