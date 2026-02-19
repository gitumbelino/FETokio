import { Box, Card, TextField, Typography } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


export default function Header() {

    return (

        <Card sx={{
            p: 2,
            mb: 2,
            borderRadius: 4,
            boxShadow: 2,
            bgcolor: '#00695c'
        }}>
<Box sx={{ display: 'flex', alignItems: 'center' }}>
    <MusicNoteIcon sx={{ color: 'white', mr: 1 }} />
    <Typography variant="h6" sx={{ color: 'white' }}>
        Instrument Manager
    </Typography>
</Box>

        </Card>
    );
}   