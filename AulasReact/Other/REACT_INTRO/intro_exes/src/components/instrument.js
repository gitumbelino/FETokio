

// O JSX deve incluir:
// Um <h2> com o nome do instrumento;
// Um parágrafo com o tipo (cordas, percussão, etc.);
// Um botão Editar que ativa a função onEditar;
// Um botão Remover que ativa a função onRemover;

// Pequenos estilos e uma borda simples opcional.
// Configura o componente pai “App”

// No ficheiro App.js:
// Importa o componente InstrumentoMusical;
// Cria um array inicial de objetos com:
// id (único)
// nome
// tipo
// Guarda esse array no estado:
// const [instrumentos, setInstrumentos] = useState([...]);
// Cria as funções:

// Adicionar instrumento: adiciona um novo objeto ao array.
// Remover instrumento: filtra o array pelo id.
// Editar instrumento: altera o nome ou tipo de um item existente.

// Renderiza a lista:
// Usa map() para mostrar todos os instrumentos;
// Passa props ao componente InstrumentoMusical;
// Utiliza key={instrumento.id}.
// Adiciona botões na interface:
// Um botão “Adicionar Instrumento”;
// ou botões individuais nos itens.
// REQUISITOS MÍNIMOS:
// Projeto React funcional criado com create-react-app;
// Componente InstrumentoMusical corretamente separado em ficheiro próprio;
// Componente App com:
// Array de instrumentos guardado em useState;
// Funções para adicionar, remover e editar;
// Lista renderizada com map();
// Keys únicas para cada elemento.
// Interface atualiza dinamicamente após cada ação;
// Código bem indentado e organizado.
// DICAS:
// Usa sempre id como key, e nunca o índice do array;
// Cria funções claras e pequenas para facilitar a manutenção;
// Se quiseres desafiar-te:
// adiciona um formulário para inserir nome e tipo;
// mostra uma mensagem quando não existirem instrumentos;
// usa estilos personalizados.
// Se utilizares o ChatGPT, foca-te em depurar o código React.


export default function Instrument(props) {


    const { name, type, onRemove, onEdit } = props

    return (
        <>
            <div className="instrument">
                <article>
                    <h2>Name: {name}</h2>
                    <p>Type:{type}</p>
                    <button onClick={onEdit}>Edit</button>
                    <button onClick={onRemove}>Remove</button>

                </article>
            </div>
        </>
    )
}