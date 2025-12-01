
import './App.css';
import Book from './components/book';
import Movie from './components/movie';

function App() {
  return (
    <>
      <Book title={"Modos de ver"} author={"John Berger"} year={1972} isHighlighted={false} />
      <Book title={"Hundertwasser </br> O Pintor das Cinco Peles"} author={"Pierre Restaby"} year={2001} isHighlighted={true} />
      <Book title={"A Volta ao Mundo em 80 Dias"} author={"Júlio Verne"} year={1873} isHighlighted={false} />

      <Movie title={"Inglorious Basterds"} author={"Tarantino"} year={2010} isHighlighted={false} />
      <Movie title={"Grand Budapest Hotel"} author={"sss"} year={2015} isHighlighted={false} />
      <Movie title={"Lavagante"} author={"naosei"} year={2025} isHighlighted={false} />

      
    </>
  );
}

export default App;
