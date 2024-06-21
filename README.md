Explicação breve sobre o projeto:

components:
  -Cart: Gerencia o carrinho de compras na aplicação React com Redux, exibindo produtos adicionados dinamicamente, calculando subtotal e total com base nos itens selecionados, e oferecendo funcionalidade de checkout.

  -CartItem: Exibe detalhes individuais de itens no carrinho, permitindo ajustar a quantidade através de botões incremento/decremento.

  -MenuItem: Exibe o menu da aplicação, organizando dados em seções como "Burgers", "Drinks" e "Desserts", e permitindo interação através de um modal para detalhes do item.

  -Modal: Modal que exibe detalhes do item selecionado, permite ajuste de quantidade e seleção de opções como modificadores.

interfaces: Define estruturas de dados para representar o menu do restaurante na aplicação, incluindo imagens, modificadores e informações dos itens.

Redux:
  -Cart (reducer): Gerencia estado relacionado ao carrinho de compras, com funcionalidades para adicionar, aumentar e diminuir quantidades de produtos.

  -User (reducer): Gerencia estado do usuário, com funcionalidades para login e logout.

  -rootReducer: Combina reducers em um único reducer principal para gerenciar estado global da aplicação.

  -store: Configura e exporta a store Redux, utilizando middleware para registrar mudanças de estado durante o desenvolvimento.

services:
  -API: Problemas com CORS levaram à necessidade de configurar o endpoint no arquivo vite.config.ts para fazer fetch dos dados via Axios.

