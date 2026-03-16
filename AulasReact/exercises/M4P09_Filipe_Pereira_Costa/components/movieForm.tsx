import { useState } from "react";
import { Box, Card, TextField, Typography } from '@mui/material';
import ActionButton from "./button.tsx"
import { Add } from '@mui/icons-material'

interface MovieFormProps {
    addMovie: (title: string, releaseYear: number) => void;
}

export default function MovieForm({ addMovie }: MovieFormProps) {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState("");

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        addMovie(movieTitle, Number(movieYear));
        setMovieTitle("");
        setMovieYear("");
    };

    return (
        <Card sx={{ p: 4, mb: 4, borderRadius: 4, boxShadow: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Adicione Filme</Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                }}
            >
                <TextField
                    label="Nome do Filme"
                    placeholder="exemplo: violino"
                    helperText="Insira o nome do Filme"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                />
                <TextField
                    label="Ano de Lançamento"
                    placeholder="exemplo: 2020"
                    helperText="Especifique o ano de lançamento"
                    value={movieYear}
                    onChange={(e) => setMovieYear(e.target.value)}
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
