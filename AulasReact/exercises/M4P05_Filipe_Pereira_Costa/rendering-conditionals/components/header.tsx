import { Box, Card, Typography } from '@mui/material';
import FestivalIcon from '@mui/icons-material/Festival';

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
    <FestivalIcon sx={{ color: 'white', mr: 1 }} />
    <Typography variant="h6" sx={{ color: 'white' }}>
        Event Manager
    </Typography>
</Box>

        </Card>
    );
}   