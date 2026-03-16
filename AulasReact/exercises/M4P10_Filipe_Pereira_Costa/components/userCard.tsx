import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Box, List, ListItem, ListItemText } from '@mui/material';
import { User } from '../types/User';


interface UserCardProps {
    user: User;
}

export default function UserCard({
    user
}: UserCardProps) {

    return (

        <Box sx={{
            display: 'flex'
        }}>
            <Card elevation={2}
                sx={{
                    m: 2,
                    width: "320px",
                    borderRadius: 4,
                    transition: '0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 4
                    }
                }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Divider />
                    <List dense>
                        <ListItem>
                            <ListItemText primary={`Username: ${user.username}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Email: ${user.email}`} />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>

    );
}