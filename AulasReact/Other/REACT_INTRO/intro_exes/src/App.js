
import { useState } from 'react';
import './App.css';
import Book from './components/book';
import Instrument from './components/instrument';
import Movie from './components/movie';
import instrumentsData from './data/instrumentsData.json'



function App() {

  const [instruments, setInstruments] = useState(instrumentsData)

  const removeInstrument = (id) => {
    const newInstrument = instruments.filter(instrument => instrument.id !== id)
    setInstruments(newInstrument)
  }

  const addInstrument = () => {
    // para garantir que o novo id criado não seja coincidente com outros, fiz o seguinte:
    //fazer uma leitura do array e contar o nr de id's
    const countIds = instruments.map(instrument => instrument.id);
    //utilizei o spread operator para obter o nr de cada id de forma individual e o Math max para saber qual o valor mais alto
    const highestId = Math.max(...countIds);
    //o novo id é o resultado da contagem anterior mais um
    const newId = highestId + 1

    //criação do novo objecto
    const newInstrument = {
      id: newId,
      name: "Testing name",
      type: "Testing type"
    };

    // setInstruments cria um novo array, decompoe o array existente com o spread operator e adiciona o newInstrument
    setInstruments([...instruments, newInstrument])
  }

  const editInstrument = () => {
  }





  return (
    <>
      {instruments.map(instrument => <Instrument key={instrument.id} name={instrument.name} type={instrument.type}
        onRemove={() => removeInstrument(instrument.id)
        }
      />)}

      <button onClick={addInstrument}>Add Instrument</button >

    </>
  );
}

export default App;
