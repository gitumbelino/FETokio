// ENUNCIADO:
// Em React, a interface é construída através de componentes, que são blocos reutilizáveis de UI. Os componentes funcionais são funções que retornam JSX, 
// permitindo combinar HTML com JavaScript.

// Para tornar estes componentes dinâmicos, utilizam-se as props, que funcionam como parâmetros enviados de um componente pai 
// para um componente filho. Nesta prática vais treinar precisamente essa comunicação entre componentes.

// Nesta prática vais:

// Criar um componente pai que contém uma lista de dados;
// Criar um componente filho que recebe estes dados via props;
// Renderizar vários componentes filhos de forma dinâmica na interface.
// O QUE DEVES REALIZAR:

// Cria (ou usa) um projeto React
// Podes continuar o projeto da tarefa anterior ou criar um novo com:
// npx create-react-app componentes-props
// Entra na pasta:
// cd componentes-props
// Inicia o servidor de desenvolvimento:
// npm start

// Cria o componente filho “Livro”
// Na pasta src, cria um ficheiro chamado livro.js;
// Define um componente funcional chamado Livro;
// O componente deve receber as seguintes props:
// titulo
// autor
// ano
// destaque (booleano)
// No JSX do componente, inclui:
// Um título em <h2>;
// Dois parágrafos para autor e ano;
// Uma <div> com fundo colorido apenas se destaque = true.
// Cria o componente pai “App”
// Abre o ficheiro App.js no editor;
// Importa o componente Livro;
// No return, renderiza pelo menos três componentes Livro, passando valores diferentes através das props.
// Exemplo conceptual:
// <Livro titulo="O Alquimista" autor="Paulo Coelho" ano="1988" destaque={false} />
// Testar o resultado no browser
// Garante que todos os componentes aparecem com as informações corretas;
// Verifica que o destaque muda visualmente quando destaque={true};
// Ajusta estilos ou conteúdo caso seja necessário.
// REQUISITOS MÍNIMOS:
// Projeto React criado com create-react-app;
// Componente Livro criado em livro.js;
// Livro deve:
// Receber e utilizar props corretamente;
// Mostrar título, autor e ano;
// Alterar o estilo quando destaque for true.
// O componente App deve renderizar pelo menos 3 livros diferentes;
// Código organizado, indentado e legível.
// DICAS:
// Organiza bem a pasta src, colocando componentes juntos;
// Podes aplicar estilos inline ou usar classes CSS simples;
// Experimenta criar a lista de livros num array para treinar renderização dinâmica com .map();
// Se utilizares o ChatGPT, foca-te em validar erros e compreender o fluxo de props.