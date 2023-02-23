# Despesas App

Sempre gostei de calcular minhas despesas para que não houvesse surpresas no fim do mês e está sempre de acordo com o orçamento.

E após concluir o projeto TrybeWallet, me surgiu a ideia de mudar um pouco o funcionamento do projeto, reiniciar do zero tudo, e simular um planejamento de projeto como fiz em um projeto chamado de Company App que está em andamento.

Eu vou levantar os requisitos funcionais, planejar como vão funcionar e criar um sprint pra cada requisito.

A cada sprint vai ser criado um quadro no Trello para mostrat o objetivo do requisito, brainstorm de ideias, filtrar as melhores, seguir com um planejamento para atingir o objetivo, testar, e fazer um levatamento do que foi bom e ruim para melhorar os próximos sprints e seguir com uma ideia coesa pra todos os requisitos.

## Tecnologias que pretendo usar:

1. React;
    -  Context API;
    -  Hooks;
1. React Icons;
1. React Router;
1. Styled Components;

## Objetos:

### 1. Despesa

- ID - gerado automaticamente - `string`;
- Nome da Despesa - `string`;
- Tipo da Despesas - `[Conta, Trabalho, Comida, ..., Lazer]`; 
- Descrição - `string`;
- Valor - `number`;
- Data de criaçào ou data da despesa* - `date`;


## Levantamento de Requisitos Funcionais:

1. Fazer Login - somente nome;
1. Adicionar Despesas;
1. Excluir Despesas;
1. Editar Despesas;
1. Calcular total de Despesas;
1. Mostrar o valor total de forma destacada;
1. Filtrar Despesas;
1. Salvar no LocalStorage - ainda não aprendi arquitetar um DB;
1. _Outros conforme surge ideias_ ;

## Metodologia

- Uso do Kanban usando a plataforma Trello.
- Para cada Requesito Funcional será criado um novo quadro.
- Estudar e usar o paradigma de programação funcional - Nubank;
- Aplicar o TDD sempre que possível;

### RF01 - Fazer Login.

- Criar um página de login, usará a rota "/" da aplicação, somente um nome válido para entrar e salvar o nome no estado global.

[Trello - Quadro RF01](https://trello.com/b/idB5IFTr/rf-01)

## Estilização da aplicação.

- Aplicação responsiva - Mobile First;
- Usar Styled Components;
- Paleta de cores
    - Cor primária: Roxo estilo nubank;
    - Cor Secundária:  Branco;
    - Cor de Fundo:  Cinza bem escuro;
    - _Outras cores conforme o andamento_ ;
- Pedir ajuda para colegas com criatividades e efeitos;
