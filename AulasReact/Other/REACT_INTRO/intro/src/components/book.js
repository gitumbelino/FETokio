// O componente deve receber as seguintes props:
// titulo
// autor
// ano
// destaque (booleano)


function Book(props) {

    const { title, author, year, highlight } = props

    return (
        <div>
            <article>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{year}</p>
            </article>
            <div>
                {highlight}
            </div>
        </div>
    )
}

export default Book