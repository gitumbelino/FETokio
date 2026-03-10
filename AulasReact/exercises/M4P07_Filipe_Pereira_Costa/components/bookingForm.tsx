import { TextField, Button, Box} from '@mui/material';
import React from 'react';

export default function BookingForm(
    { onSubmit,
        onChangeName,
        onChangeRoom,
        onChangeCheckIn,
        onChangeCheckOut
    }: {

        onSubmit: (e: React.SyntheticEvent) => void,
        onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void,
        onChangeRoom: (e: React.ChangeEvent<HTMLInputElement>) => void,
        onChangeCheckIn: (e: React.ChangeEvent<HTMLInputElement>) => void,
        onChangeCheckOut: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {

    return (

        <Box

            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "wheat",
                boxSizing: "border-box"
            }}
        >

            <Box component="form"
                onSubmit={onSubmit}

                sx={{
                    width: "240px",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid white",
                    borderRadius: "16px",
                    padding: "20px",
                    margin: "20px",
                    gap: "12px",
                    bgcolor: "white"
                }}>

                <TextField label="Nome" required onChange={onChangeName} />

                <TextField label="Nrº de Quartos" type="number" required onChange={onChangeRoom} />

                <TextField label="Data" type="date" required onChange={onChangeCheckIn} slotProps={{ inputLabel: { shrink: true } }} />
                <TextField label="Data" type="date" required onChange={onChangeCheckOut} slotProps={{ inputLabel: { shrink: true } }} />

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit">Marcar</Button>
                </Box>
            </Box >
        </Box>
    )
}


