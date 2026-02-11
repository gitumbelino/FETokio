import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Instrument } from '../types/Instrument.ts';
import ActionButton from './button.tsx';
import { Edit, Delete } from '@mui/icons-material'


interface InstrumentCardProps { instrument: Instrument }

export default function InstrumentCard({ instrument }: InstrumentCardProps) {
    return (
        <Card 
        elevation={2}
            sx={{
                minWidth: "300px",
                borderRadius: 4,
                transition: '0.2s',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                }
            }}>

            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {instrument.name}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {instrument.type}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-evenly'

            }}>
                <ActionButton
                    variant="gray"
                    label="Edit"
                    icon={<Edit />}
                    onClick={() => { }}
                />
                <ActionButton
                    variant="danger"
                    label="Delete"
                    icon={<Delete />}
                    onClick={() => { }}
                />
            </Box>
        </Card>
    );
}
