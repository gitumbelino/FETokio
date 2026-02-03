import { useState } from "react";
import InstrumentCard from "./components/instrumentCard";
import instrumentsData from './data/instrumentsData.json';

function App() {

  const [instruments, setInstruments] = useState(instrumentsData);

  return (
    <>
      {instruments.map(instrument => <InstrumentCard
        key={instrument.id}
        instrument={instrument}
      />)}
    </>
  );
}

export default App
