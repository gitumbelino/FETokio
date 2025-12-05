
import './App.css';
import Book from './components/book';
import Instrument from './components/instrument';
import Movie from './components/movie';





function App() {

  const [instruments, setInstruments] = useState

  return (
    <>
      <Book title={"Modos de ver"} author={"John Berger"} year={1972} isHighlighted={false} />
      <Book title={"Hundertwasser </br> O Pintor das Cinco Peles"} author={"Pierre Restaby"} year={2001} isHighlighted={true} />
      <Book title={"A Volta ao Mundo em 80 Dias"} author={"Júlio Verne"} year={1873} isHighlighted={false} />

      <Movie title={"Inglorious Basterds"} author={"Tarantino"} year={2010} isFavourite={false} />
      <Movie title={"Grand Budapest Hotel"} author={"sss"} year={2015} isFavourite={false} />
      <Movie title={"Lavagante"} author={"naosei"} year={2025} isFavourite={false} />


      {instruments.map(instrument => <Instrument key={instrument.id} name={instrument.name} type={instrument.type} />)}


    </>
  );
}

export default App;
