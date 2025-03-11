<h1 align="center"> Desafio do amigo secreto </h1> 
 
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
![GitHub Org's stars](https://img.shields.io/github/stars/camilafernanda?style=social)
![Desafio do amigo secreto](https://github.com/user-attachments/assets/f597b522-5190-479e-850b-97ca95e725d2)
﻿<h1 align="center"> Descrição do Projeto  </h1> 
Este site tem o objetivo de apresentar ao usuário a possibildiade de criar uma lista de amigos e após isso fazer um sorteio de qual deles será escolhido.
﻿<h1 align="center">Funcionalidades e Demonstração da Aplicação</h1>
Utilizamos uma array para criar a lista de amigos. Essa array se inicia vazia, sendo incrementada com itens capturados pela funcao adicionarAmigo() que captura o que o usuário escreveu na caixa correspondente utilizando o document.getElementById("amigo").value = ""; /
Essa funcao possui uma condicional if que verifica se a caixa foi preenchida, retornando um alert em caso negativo no else {
![Screenshot 2025-03-11 104337](https://github.com/user-attachments/assets/9829a86a-ee88-4a77-a0b9-d470634139cb)

A funcao atualizarLista() cria uma variável (lista) e atualiza a array adicionando um item, associada com a funcao removerAmigo() que utila splice para remover o item pelo índice  e após isso chama novamente a funcao de atualizacao da lista.

Por fim, funcao sortearAmigo() possui uma condicional onde verifica se a listas está vazia ou possui itens retornando um alert caso nenhum amigo tenha sido adicionado. Quando há pelo menos um item na lista, utiliza o math.random para sortear um item da array, e o Math.floor para arredondar o número flutuante para um número inteiro.
﻿<h1 align="center">📁 Acesso ao projeto</h1>
Voce pode acessar o projeto pelo VS CODE.

1 - Baixe o arquivo zip
2 - Extraia em seu local de escolha
3 - Com o VS code aberto siga o passo a passo de Arquivo >  Abrir pasta > Escolha a pasta que extraiu o zip.

Caso deseje apenas ver o resultado, confira no link de deploy abaixo: 




 
﻿<h1 align="center">Autor</h1>

| [<img loading="lazy" src="https://github.com/user-attachments/assets/d3d4c9d0-b894-4bc5-98f2-bfe4f2e08199" width=115><br><sub>Lucas Matos</sub>](https://github.com/toquemclarim) |
