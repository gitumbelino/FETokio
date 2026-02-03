import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {Instrument} from '../types/Instrument.ts';


export default function InstrumentCard({ instrument }: InstrumentCardProps) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
  
          <Typography gutterBottom variant="h5" component="div">
            {instrument.name}
          </Typography>
    
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Soft" size="small" />
          <Chip label="Medium" size="small" />
          <Chip label="Hard" size="small" />
        </Stack>
      </Box>
    </Card>
  );
}
