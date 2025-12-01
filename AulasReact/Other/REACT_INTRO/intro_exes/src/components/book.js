// O componente deve receber as seguintes props:
// titulo
// autor
// ano
// destaque (booleano)

import '../App.css';



export default function Book(props) {

    const { title, author, year, isHighlighted } = props

    return (
        <div className={isHighlighted ? "highlighted-book" : ""}>
            <article>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{year}</p>
            </article>
        </div>
    )
}

