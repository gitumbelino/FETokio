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
        <Card sx={{ p: 4, mb: 4, borderRadius: 4, boxShadow: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Adicione Instrumento</Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'flex-start',  }}
            >
                <TextField
                    label="Nome do Instrumento"
                    placeholder="exemplo: violino"
                    helperText="Insira o nome do instrumento"
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
            <Box sx={{ width: '100%', display: 'flex' }}>

        <ActionButton
            variant="teal"
            label="Adicionar"
            icon={<Add />}
            type="submit"
            onClick={() => { }}
        />
    </Box>

            </Box>


        </Card>
    );
}
