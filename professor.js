document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formProfessor");
    const lista = document.getElementById("listaProfessores");
    const btnExcluirTodos = document.getElementById("btnExcluirTodos");
  
    // Array para armazenar os dados dos professores
    const professores = [];
  
    // Evento para adicionar um professor
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita o envio do formulário
  
      const nome = document.getElementById("nome").value;
      const disciplina = document.getElementById("disciplina").value;
      const email = document.getElementById("email").value;
  
      // Cria um objeto para o professor
      const professor = { nome, disciplina, email };
  
      // Adiciona o professor ao array
      professores.push(professor);
  
      // Cria um novo item na lista
      const novoItem = document.createElement("li");
      novoItem.classList.add("item-professor");
  
      // Adiciona os dados e o botão de exclusão ao item
      novoItem.innerHTML = `
        <strong>Nome:</strong> ${nome}<br>
        <strong>Disciplina:</strong> ${disciplina}<br>
        <strong>E-mail:</strong> ${email}<br>
        <button class="btn-excluir">Excluir</button>
      `;
  
      // Adiciona o evento de exclusão ao botão "Excluir" do item
      const btnExcluir = novoItem.querySelector(".btn-excluir");
      btnExcluir.addEventListener("click", () => {
        lista.removeChild(novoItem); // Remove o item da lista
  
        // Remove o professor do array
        const index = professores.findIndex((p) => p.nome === nome && p.email === email);
        if (index !== -1) {
          professores.splice(index, 1);
        }
  
        console.log("Array atualizado:", professores);
      });
  
      lista.appendChild(novoItem); // Adiciona o item à lista
      form.reset(); // Limpa o formulário
  
      // Exibe o array de professores como JSON no console
      console.log("Professores em JSON:", JSON.stringify(professores));
    });
  
    // Evento para excluir todos os itens da lista
    btnExcluirTodos.addEventListener("click", () => {
      lista.innerHTML = ""; // Remove todos os itens da lista
      professores.length = 0; // Limpa o array de professores
      console.log("Todos os itens foram excluídos!");
      console.log("Array atualizado:", professores);
    });
  });  