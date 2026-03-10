import { Box, Card, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Header() {

    return (
        <Card sx={{
            p: 2,
            boxShadow: 2,
            bgcolor: '#00695c',
            width: "100vw",
            mt: 0
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarTodayIcon sx={{ color: 'white', mr: 1 }} />
                <Typography variant="h6" sx={{ color: 'white' }}>
                    Booking Manager
                </Typography>
            </Box>
        </Card>
    );
}   