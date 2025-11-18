import logo from './logo.svg';
import './App.css';
import Book from './components/book';


function App() {
  return (
    <>
      <Book title={"Modos de ver"} author={"John Berger"} year={1972} highlight={true} />
      <Book title={"Hundertwasser. O Pintor das Cinco Peles"} author={"Pierre Restaby"} year={2001} highlight={false} />
      <Book title={"A Volta ao Mundo em 80 Dias"} author={"John Júlio Verne"} year={1873} highlight={true} />
    </>
  );
}

export default App;
