// Função para carregar os professores da lista do localStorage
function carregarProfessores() {
    // Pega os dados do localStorage e converte de volta para objeto
    const professores = JSON.parse(localStorage.getItem("professores")) || [];
    
    // Seleciona a tabela
    const tabela = document.getElementById("tabelaProfessores").getElementsByTagName("tbody")[0];
    tabela.innerHTML = '';  // Limpa a tabela antes de inserir os dados
  
    // Adiciona cada professor na tabela
    professores.forEach(professor => {
      const novaLinha = tabela.insertRow();
  
      const celulaNome = novaLinha.insertCell(0);
      const celulaDisciplina = novaLinha.insertCell(1);
      const celulaEmail = novaLinha.insertCell(2);
  
      celulaNome.textContent = professor.nome;
      celulaDisciplina.textContent = professor.disciplina;
      celulaEmail.textContent = professor.email;
    });
  }
  
  // Adiciona um professor à lista
  document.getElementById("formProfessor").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const disciplina = document.getElementById("disciplina").value;
    const email = document.getElementById("email").value;
  
    // Cria um objeto para o novo professor
    const novoProfessor = {
      nome,
      disciplina,
      email
    };
  
    // Pega a lista atual de professores do localStorage
    const professores = JSON.parse(localStorage.getItem("professores")) || [];
  
    // Adiciona o novo professor à lista
    professores.push(novoProfessor);
  
    // Salva a lista de professores de volta no localStorage
    localStorage.setItem("professores", JSON.stringify(professores));
  
    // Atualiza a tabela para exibir o novo professor
    carregarProfessores();
  
    // Limpa o formulário
    document.getElementById("formProfessor").reset();
  });
  
  // Carregar a lista de professores quando a página for carregada
  window.onload = carregarProfessores;
  