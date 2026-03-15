import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import LuggageIcon from '@mui/icons-material/Luggage';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <LuggageIcon />

                    </IconButton>

                    <Link to={'/home'} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button color="inherit"> React Tours
                        </Button>
                    </Link>

                    <Box sx={{ ml: 'auto' }}>

                        <Link to={'/destinations'} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <Button color="inherit"> Destinos
                            </Button>
                        </Link>

                        <Link to={'/packages'} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <Button color="inherit"> Pacotes
                            </Button>
                        </Link>

                        <Link to={'/contacts'} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <Button color="inherit"> Contactos
                            </Button>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}