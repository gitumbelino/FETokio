import { Box, Card, Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Counter from './counter';

interface HeaderProps {
    selected: number;
}

export default function Header({ selected }: HeaderProps) {

    return (

        <Card sx={{
            p: 2,
            mb: 2,
            borderRadius: 4,
            boxShadow: 2,
            bgcolor: '#00695c'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{display:'flex'}}>
                    <LocalDiningIcon sx={{ color: 'white', mr: 1 }} />
                    <Typography variant="h6" sx={{ color: 'white' }}>
                        Very Typical Dishes
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Counter selected={selected} />
                </Box>
            </Box>

        </Card>
    );





}   