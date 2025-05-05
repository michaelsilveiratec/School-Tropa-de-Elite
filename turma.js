let turmas = [];

const formulario = document.getElementById('formTurma');
const listaTurmas = document.getElementById('listaTurmas');
const btnExcluirTodos = document.getElementById('btnExcluirTodos');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nomeTurma').value.trim();
  const ano = document.getElementById('anoTurma').value.trim();
  const turno = document.getElementById('turnoTurma').value.trim();

  if (!nome || !ano || !turno) return;

  const novaTurma = {
    nome: nome,
    ano: ano,
    turno: turno
  };

  turmas.push(novaTurma);
  adicionarTurmaNaLista(novaTurma);

  formulario.reset();
});

function adicionarTurmaNaLista(turma) {
  const item = document.createElement('li');
  item.className = 'item-turma';
  item.innerHTML = `
    <strong>Nome:</strong> ${turma.nome}<br>
    <strong>Ano:</strong> ${turma.ano}<br>
    <strong>Turno:</strong> ${turma.turno}<br>
    <button class="excluir-btn">Excluir</button>
  `;

  item.querySelector('.excluir-btn').addEventListener('click', function () {
    removerTurmaDaLista(turma.nome);
  });

  listaTurmas.appendChild(item);
}

function removerTurmaDaLista(nomeTurma) {
  const itens = listaTurmas.querySelectorAll('.item-turma');

  for (const item of itens) {
    if (item.textContent.includes(nomeTurma)) {
      listaTurmas.removeChild(item);
      break;
    }
  }

  turmas = turmas.filter(t => t.nome !== nomeTurma);
}

btnExcluirTodos.addEventListener('click', function () {
  listaTurmas.innerHTML = '';
  turmas = [];
});