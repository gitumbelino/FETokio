import { Event } from '../types/Event.ts';
import { Box, Card, Divider, Typography } from '@mui/material';
import ActionButton from './button.tsx';

interface EventProps {

    event: Event;
    subscriptionOpen: boolean;
    onChange: () => void;
}


export default function EventCard({
    subscriptionOpen, 
    event,
    onChange 

}: EventProps) {

    return (

        <Card
            elevation={2}
            sx={{
                maxWidth: "300px",
                borderRadius: 4,
                transition: '0.2s',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4
                }
            }}>
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {event.name}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {event.data}
                </Typography>
            </Box>
            <Divider />

            <Box sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'right'

            }}>

                {subscriptionOpen === true ? (
                    <ActionButton
                        variant="teal"
                        label="Inscrições abertas"
                        onClick={onChange}
                    />
                ) : (
                    <ActionButton
                        variant="danger"
                        label="Inscrições fechadas"
                        onClick={onChange}

                    />
                )}
            </Box>
        </Card>
    );
}