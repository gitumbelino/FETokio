import { Box, Card, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';


type HeaderProps = {
    onRefresh: () => void;
}


export default function Header({ onRefresh }: HeaderProps) {


    return (
        <Card sx={{
            p: 2,
            boxShadow: 2,
            bgcolor: '#00695c',
            width: "100vw",
            mt: 0
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon sx={{ color: 'white', mr: 1 }} />
                <Typography variant="h6" sx={{ color: 'white' }}>
                    Utilizadores
                </Typography>
                <Button
                    sx={{
                        flex: 'end',
                        color: 'white',
                        borderColor: 'white'
                    }}
                    size="small"
                    onClick={onRefresh}>
                    Actualizar

                </Button>

            </Box>
        </Card>
    );
}   