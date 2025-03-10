// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim(); // Captura e remove espaços extras

    if (nome) { // Verifica se o campo não está vazio
        amigos.push(nome); // Adiciona ao array
        atualizarLista(); // Atualiza a exibição da lista na tela
        document.getElementById("amigo").value = ""; // Limpa o input após adicionar
    } else {
        alert("Por favor, digite um nome válido!"); // Mensagem de alerta para campo vazio
    }
}

// Função para exibir a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Captura a <ul> da lista
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li"); // Cria um item da lista
        li.textContent = amigo;

        // Botão para remover amigo da lista
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover); // Adiciona o botão ao lado do nome
        lista.appendChild(li); // Adiciona o item na lista
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo pelo índice
    atualizarLista(); // Atualiza a lista na tela
}
