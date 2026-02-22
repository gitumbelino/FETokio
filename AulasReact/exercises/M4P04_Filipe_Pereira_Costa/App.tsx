import { useState } from "react";
import InstrumentCard from "./components/instrumentCard";
import instrumentsData from './data/instrumentsData.json';
import Box from "@mui/material/Box";
import InstrumentForm from "./components/instrumentForm";
import Header from "./components/header";


function App() {

   console.log("inicio")

  const [instruments, setInstruments] = useState(instrumentsData);

  type EditingState = number | null;
  const [isEditing, setIsEditing] = useState<EditingState>(null);

  const [editName, setEditName] = useState("")
  const [editType, setEditType] = useState("")

  const addInstrument = (name: string, type: string) => {
    const newInstrument = {
      id: instruments.length + 1,
      name: name,
      type: type
    };
    setInstruments([...instruments, newInstrument]);
  };


  const removeInstrument = (id: number) => {
    const newInstrument = instruments.filter(instrument => instrument.id !== id)
    setInstruments(newInstrument)
    console.log("removido")
  }



  const startEditing = (id: number, name: string, type: string) => {

    setIsEditing(id);
    setEditName(name)
    setEditType(type)

    console.log("start editing")

  }


  const editInstrument = (id: number) => {

    const editedInstruments = instruments.map(instrument => {
console.log("inicio do edit")

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




    <Box sx={{ p: 2 }}>
      <Header />
      <InstrumentForm addInstrument={addInstrument} />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {instruments.map(instrument => (
          <InstrumentCard
            key={instrument.id}
            instrument={instrument}
            onEdit={() => startEditing(instrument.id, instrument.name, instrument.type)}
            onRemove={() => removeInstrument(instrument.id)}
            isEditing={isEditing === instrument.id}
            editInstrument={() => editInstrument(instrument.id)}
            onCancel={() => setIsEditing(null)}
            editName={editName}
            editType={editType}
            setEditName={setEditName}
            setEditType={setEditType}
          />

        ))}
      </Box>
    </Box>
  );
}


export default App
