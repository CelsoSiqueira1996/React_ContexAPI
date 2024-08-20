# Projeto React: Aprimoramento com Context API e Hooks

Este projeto é uma refatoração que tem como objetivo melhorar a estrutura e performance de uma aplicação React existente. Através do uso de Context API para evitar o prop drilling, useReducer para encapsulamento de lógica, e hooks personalizados, buscamos otimizar o desenvolvimento e manutenção do código. Utilizamos também useEffect e useMemo para aprimorar a performance geral da aplicação. O projeto foi criado utilizando Vite e JavaScript.

## Tecnologias e Ferramentas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de construção e desenvolvimento de aplicações frontend.
- **JavaScript**: Linguagem de programação utilizada no projeto.
- **Context API**: Para gerenciar o estado global e evitar o prop drilling.
- **useReducer**: Para encapsular a lógica de estado em uma única função redutora.
- **useEffect**: Para efeitos colaterais e sincronização de componentes.
- **useMemo**: Para otimização de performance, evitando cálculos desnecessários.
- **Hooks personalizados**: Para criar lógica reutilizável e modular.

## Funcionalidades

- **Remoção de Prop Drilling**: Implementação da Context API para evitar a passagem de props através de múltiplos níveis de componentes.
- **Encapsulamento de Lógica**: Utilização do useReducer para gerenciar e encapsular a lógica de estado de forma eficiente.
- **Performance Melhorada**: Aplicação de useEffect e useMemo para otimizar a renderização e a execução de cálculos.
- **Hooks Personalizados**: Criação de hooks personalizados para reutilização e modularidade do código.

## Instruções de Instalação

1. **Clone o Repositório**

   ```bash
   git@github.com:CelsoSiqueira1996/React_ContexAPI.git
   cd nome-do-repositorio

2. **Instale as Dependências**

   ```bash
   npm install

3. **Inicie o Servidor de Desenvolvimentoo**

   ```bash
   npm run dev

## Estrutura do Projeto

- **/src**: Código-fonte da aplicação.
  - **/components**: Componentes React.
  - **/context**: Arquivos relacionados à Context API.
  - **/hooks**: Hooks personalizados.
  - **/reducers**: Arquivos de reducers para o useReducer.
  - **/utils**: Funções utilitárias e helpers.
- **/public**: Arquivos estáticos e recursos públicos.
- **vite.config.js**: Configuração do Vite.

## Exemplos de Uso

### Context API

Definimos um contexto global para gerenciar o estado da aplicação sem precisar passar props manualmente para cada nível de componente.

### useReducer

Usamos o useReducer para gerenciar estados complexos e ações de forma centralizada, melhorando a clareza e manutenção do código.

### useEffect

Utilizamos useEffect para lidar com efeitos colaterais como chamadas API e sincronização de estados com o ciclo de vida dos componentes.

### useMemo

Aplicamos useMemo para evitar cálculos caros durante renderizações, melhorando a performance da aplicação.

## Contribuição

Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request. Por favor, siga as diretrizes de contribuição estabelecidas.

## Licença

Este projeto está licenciado sob a Licença MIT.


