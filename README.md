![743977](https://user-images.githubusercontent.com/4911357/110398342-7267a200-8052-11eb-9bd5-4562f0f5dbd2.png)

# Poke List

Este é um projeto construído com Reactjs para exibir dados consumidos a partir da [PokeApi.co](https://pokeapi.co/).

Nele, você poderá visualizar a lista de gerações de pokemons, a lista de pokemons contida em cada geração e alguns detalhes de cada um dos pokemons.

O projeto pode ser acessado a partir do endereço a seguir: [https://pokeapi-list.herokuapp.com/](https://pokeapi-list.herokuapp.com/)

## Como executar o código

Antes de qualquer coisa, certifique-se de que seu ambiente de desenvolvimento conta com `node`, `npm` e `yarn` instalados.

Após isto, basta executar os comandos abaixo para obter os respectivas resultados:

- `yarn start`: Executar o projeto e abrir a página no navegador;
- `yarn lint`: Executar a validação de código do *Eslint*;
- `yarn test`: Executar os arquivos de testes dentro do projeto;
- `yarn build`: Construir o projeto para produção.

## Observações

Este projeto conta com o auxílio do *Github Actions* para executar as seguintes tarefas:

- Verificar as regras do *Eslint*;
- Executar de testes do projeto.

O *deploy* do projeto no ambiente de produção (Heroku) acontece toda vez que um `push` é realizado no *branch* `main`.

## Pontos de melhoria

- Adicionar um processo de `lazy loading` para cada um dos *cards* de *pokemons* para melhorar a performance do projeto;
- Adicionar mais arquivos de testes para melhorar a cobertura;
- Implementar o `redux` para ser o responsável pela centralização de dados e enfileirar as requisições de dados;
- Implementar o `typescript`.

## Screenshots

![screencapture-pokeapi-list-herokuapp-2021-03-08-21_04_52](https://user-images.githubusercontent.com/4911357/110398339-71367500-8052-11eb-80ee-e36ca63fa07c.png)

![screencapture-pokeapi-list-herokuapp-generation-generation-i-2021-03-08-21_04_30](https://user-images.githubusercontent.com/4911357/110398337-709dde80-8052-11eb-86cc-c5abbfadbbc6.png)

![screencapture-pokeapi-list-herokuapp-generation-generation-i-pokemon-venusaur-2021-03-08-21_04_01](https://user-images.githubusercontent.com/4911357/110398341-71cf0b80-8052-11eb-945e-0fcdbb667113.png)