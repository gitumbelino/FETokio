import { Instrument } from "../types/Instrument"
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    IconButton,
    Typography
} from '@mui/material'


import { MusicNote, Edit, Delete } from '@mui/icons-material'

interface InstrumentCardProps { instrument: Instrument }

export default function InstrumentCard({ instrument }: InstrumentCardProps) {

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardHeader
                sx={
                    {
                        bgcolor: 'primary.main',
                        color: 'white'
                    }
                }
                slotProps={{ title: { variant: 'h5' } }}
                title="Instrumento"
                action={<MusicNote sx={{ p: 1 }} />}
            />
            <CardContent>
                <Typography variant="body1">
                    <strong>Nome:</strong> {instrument.name}
                </Typography>
                <Typography variant="body1">
                    <strong>Tipo:</strong> {instrument.type}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    bgcolor: 'primary.main',
                    display:'flex',
                    justifyContent: 'flex-end'
                }}>
                <IconButton aria-label="edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    )
}