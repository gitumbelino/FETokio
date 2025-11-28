import logo from './logo.svg';
import './App.css';
import Book from './components/book';


function App() {
  return (
    <>
      <Book title={"Modos de ver"} author={"John Berger"} year={1972} isHighlighted={false} />
      <Book title={"Hundertwasser </br> O Pintor das Cinco Peles"} author={"Pierre Restaby"} year={2001} isHighlighted={true} />
      <Book title={"A Volta ao Mundo em 80 Dias"} author={"Júlio Verne"} year={1873} isHighlighted={false} />
    </>
  );
}

export default App;
