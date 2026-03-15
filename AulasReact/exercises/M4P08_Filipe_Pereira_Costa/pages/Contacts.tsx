import { Box, Typography, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contacts() {
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 6, px: 3 }}>
      <Typography variant="h4" gutterBottom>Contactos</Typography>
      <Divider sx={{ mb: 3 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <PhoneIcon color="primary" />
        <Typography>+351 123 456 789</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <EmailIcon color="primary" />
        <Typography>geral@reacttours.pt</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <LocationOnIcon color="primary" />
        <Typography>Rua da Route Marlene, 42 — Lift-State de Cima, Portugal</Typography>
      </Box>
    </Box>
  );
}
