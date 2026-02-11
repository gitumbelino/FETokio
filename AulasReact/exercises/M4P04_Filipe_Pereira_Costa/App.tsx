import { useState } from "react";
import InstrumentCard from "./components/instrumentCard";
import instrumentsData from './data/instrumentsData.json';
import Box from "@mui/material/Box";


function App() {

  const [instruments, setInstruments] = useState(instrumentsData);

  return (
    <Box
    sx={{display:'flex',
      flexWrap: 'wrap',
      gap:2,
      p:2
    }}>
      {instruments.map(instrument => <InstrumentCard
        key={instrument.id}
        instrument={instrument}
      />)}
    </Box>
  );
}

export default App
