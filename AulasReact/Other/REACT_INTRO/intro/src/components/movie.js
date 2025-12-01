// O QUE DEVES REALIZAR:
// Cria um projeto React
// Podes continuar um projeto anterior ou criar um novo:
// npx create-react-app usestate-filmes
// Entra na pasta:
// cd usestate-filmes
// Inicia o servidor:
// npm start
// Cria o componente filho “Filme”
// Na pasta src, cria um ficheiro filme.js;
// Define um componente funcional chamado Filme;
// O componente deve receber via props:
// titulo
// genero
// ano

// Usa o hook useState para criar o estado:
// const [favorito, setFavorito] = useState(false);
// No JSX apresentado pelo componente inclui:
// Um <h2> com o título do filme;
// Parágrafos a mostrar género e ano;
// Texto a indicar se o filme está marcado como favorito ou não;
// Um botão:
// Marcar como Favorito que altera o estado quando clicado.
// Cria o componente pai “App”
// Abre o ficheiro App.js;
// Importa o componente Filme;
// Renderiza pelo menos 3 filmes diferentes, passando as props necessárias.
// Exemplo conceptual:
// <Filme titulo="Inception" genero="Sci-Fi" ano="2010" />
// Testar no browser
// Verifica se os filmes aparecem corretamente;
// Carrega nos botões e confirma se o estado muda;
// O texto “Favorito” deve mudar automaticamente ao clicar no botão.
// REQUISITOS MÍNIMOS:
// Projeto React criado com create-react-app;
// Componente Filme criado em filme.js;
// O componente Filme deve:
// Usar useState para guardar o estado de favorito;
// Alterar esse estado ao clicar num botão;
// Atualizar a interface conforme o estado.
// O componente App deve apresentar pelo menos 3 filmes diferentes;
// Código limpo, organizado e devidamente indentado.
// DICAS:
// Organiza cada componente no seu ficheiro dentro de src;
// Aplica estilos simples para tornar a interface mais legível;
// Para praticar mais, adiciona funcionalidades como:
// botão para remover favorito;
// alterar cor quando favorito;
// mostrar um ícone ⭐.
// Se utilizares o ChatGPT, pede ajuda para resolver erros de estado ou eventos.
import {useState} from 'react';

export default function Movie(props) {

    const {title, genre, year} = props

    return  (

    )
}