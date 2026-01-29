import { useState } from 'react';
import './App.css';
import Instrument from './components/instrument';
import instrumentsData from './data/instrumentsData.json'
import Form from './components/instrumentsForm';

function App() {

  const [instruments, setInstruments] = useState(instrumentsData)

  const [isEditing, setIsEditing] = useState(null);
  const [editName, setEditName] = useState("")
  const [editType, setEditType] = useState("")

  const removeInstrument = (id) => {
    const newInstrument = instruments.filter(instrument => instrument.id !== id)
    setInstruments(newInstrument)
  }

  const addInstrument = (inputName, inputType) => {
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
      name: inputName,
      type: inputType
    };

    // setInstruments cria um novo array, decompoe o array existente com o spread operator e adiciona o newInstrument
    setInstruments([...instruments, newInstrument])
  }

  const startEditing = (id, name, type) => {

    setIsEditing(id);
    setEditName(name)
    setEditType(type)

  }



  const editInstrument = (id) => {

    const editedInstruments = instruments.map(instrument => {
      if (instrument.id === id) {
        return {
          ...instrument,
          name: editName,
          type: editType
        }
      } else {
        return instrument
      }
    })

    setInstruments(editedInstruments)
    console.log(editedInstruments.find(i => i.id === id))
  }

  return (

    <>
      {instruments.map(instrument =>
        <Instrument
          key={instrument.id}
          name={instrument.name}
          type={instrument.type}
          onRemove={() => removeInstrument(instrument.id)}
          onEdit={() => startEditing(
            instrument.id,
            instrument.name,
            instrument.type)}
            
          isEditing={isEditing === instrument.id}
          editInstrument={() => editInstrument(instrument.id)}
          onCancel={() => setIsEditing(null)}
          editName={editName}
          editType={editType}
          setEditName={setEditName}
          setEditType={setEditType}
        />)}

      <Form addInstrument={addInstrument} />

    </>
  );
}

export default App;