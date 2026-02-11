import { useState } from "react";
import { Box, Card, TextField, Typography } from '@mui/material';
import ActionButton from "./button.tsx"
import { Add } from '@mui/icons-material'

interface InstrumentFormProps {
  addInstrument: (name: string, type: string) => void;
}

export default function InstrumentForm({ addInstrument }: InstrumentFormProps) {
  const [instrumentName, setInstrumentName] = useState("");
  const [instrumentType, setInstrumentType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addInstrument(instrumentName, instrumentType);
    setInstrumentName("");
    setInstrumentType("");
  };

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Add New Instrument</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'flex-start' }}
      >
        <TextField
          label="Nome do Instrumento"
          placeholder="exemplo: violino"
          helperText="Enter the Insira o nome do instrumento"
          value={instrumentName}
          onChange={(e) => setInstrumentName(e.target.value)}
        />
        <TextField
          label="Tipo de instrumento"
          placeholder="exemplo: cordas"
          helperText="Especifique o tipo de instrumento"
          value={instrumentType}
          onChange={(e) => setInstrumentType(e.target.value)}
        />
 <ActionButton
                    variant="teal"
                    label="Add"
                    icon={<Add />}
                    onClick={() => { }}
                />

      </Box>
    </Card>
  );
}
