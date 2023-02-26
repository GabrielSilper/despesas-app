# Despesas App

Sempre gostei de calcular minhas despesas para que não houvesse surpresas no fim do mês e controlar meus gastos.

E após concluir o projeto TrybeWallet, me surgiu a ideia de mudar um pouco o funcionamento do projeto, reiniciar do zero tudo, e simular um planejamento de projeto como fiz em um projeto chamado de Company App que está em andamento.

Eu vou levantar os requisitos funcionais, fazer brainstorm de ideias, criar um quadro Kanban e fazer "sprints".

## Tecnologias que pretendo usar:

1. React;
    -  Context API;
    -  Hooks;
1. React Icons;
1. React Router;
1. Styled Components;
1. _Outros conforme a necessidade_ ;

## Objetos e Atores da aplicação:

### 1. Usuário

- Nome - `string`;

### 2. Despesa

- ID - gerado automaticamente - `string`;
- Nome da Despesa - `string`;
- Tipo da Despesas - `[Conta, Cartão, Trabalho, Comida, ..., Lazer, Outros]`;
- Descrição - `string`;
- Valor - `number`;
- Data de criaçào ou data da despesa* - `date`;


## Levantamento de Requisitos Funcionais:

1. Fazer Login - somente nome;
1. Adicionar Despesas;
1. Mostrar "extrato" de despesas;
1. Calcular total de Despesas;
1. Excluir Despesas;
1. Editar Despesas;
1. Filtrar Despesas;
1. Salvar no LocalStorage - ainda não aprendi arquitetar um DB;
1. _Outros conforme surge ideias_ ;

## Metodologia e estudos

- Uso do Kanban usando a plataforma Trello para organização;
- Usar um quadro pra cada Requisito Funcional;
- Para cada Requesito Funcional será feito brainstorm de ideias;
- Filtrar as melhores ideias e criar tasks referentes no Quadro;
- Estudar e usar o paradigma de programação funcional;
- Aprender Jest com uso do Context API;

[Quadro da aplicação](https://app.asana.com/0/1204058942458492/board)

### RF01 - Fazer Login

- O que é preciso pra atingir o objetivo do requisito:
    - Criar uma página de Login;
    - Usar a rota "/" da aplição;
    - Usar somente nome para fazer Login;
    - Criar uma chave `name` no context da aplicação;
    - Criar um botão para entrar;

### RF02 - Adicionar Despesas

- O que é preciso pra atingir o objetivo do requisito:
    - Criar uma chave `expenses` no context da aplicação, será uma lista de objetos;
    - Criar um formulário para preencher as informaçòes.
    - Criar um botão para adicionar a despesa na aplicação (adicionar como valor da chave `expenses`);
    
    
### RF03 - Mostrar "extrato" de despesas

- O que é preciso pra atingir o objetivo do requisito:
    - Renderizar as despesas (coletar da chaves expense);
    - No mobile mostrar um lista de componentes de conteúdo expansível para cada despesa;
    - No desktop mostrar uma tabela com as despesas;
    
    [Quadro do RF03](https://trello.com/b/As4g7nbf)

## Estilização da aplicação

- Aplicação responsiva - Mobile First;
- Criar conjunto de componentes para cada tela diferente;
- Usar Styled Components;
- Paleta de cores
    - Cor primária: #6D3278;
    - Cor Secundária: #F9F3FC;
    - Cor de Fundo: #F9F3FC;
    - _Outras cores conforme o andamento_ ;
- Pedir ajuda para colegas com criatividades e efeitos;

## Wireframes

<details>
<summary>Wireframe para telas pequenas</summary>
    
![wireframe tela pequena](./wireframes/SmallWireframe.png)
    
</details>

<details>
<summary>Wireframe para telas desktop</summary>
    
![wireframe tela desktop](./wireframes/DesktopWireframe.png)
    
</details>
