import { Box, Card, Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Counter from './counter';

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
                <LocalDiningIcon sx={{ color: 'white', mr: 1 }} />
                <Typography variant="h6" sx={{ color: 'white' }}>
                    Very Typical Dishes
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'center' }}>
<Counter></Counter>
                </Box>
            </Box>

        </Card>
    );
}   