import { useState } from "react";
import InstrumentCard from "./components/instrumentCard";
import instrumentsData from './data/instrumentsData.json';
import Box from "@mui/material/Box";
import InstrumentForm from "./components/instrumentForm";


function App() {
  
  const [instruments, setInstruments] = useState(instrumentsData);

  const addInstrument = (name: string, type: string) => {
    const newInstrument = {
      id: instruments.length + 1,
      name: name,
      type: type
    };
    setInstruments([...instruments, newInstrument]);
  };

  return (
    <Box sx={{ p: 2 }}>
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
          />
        ))}
      </Box>
    </Box>
  );
}


export default App
