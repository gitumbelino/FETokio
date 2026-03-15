/// <reference types="vite/client" />
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Destination } from '../types/allTypes.ts'

const images = import.meta.glob('../public/img/*.webp', { eager: true }) as Record<string, { default: string }>

interface DestinationProps {
  destination: Destination;
}


export default function DestinationCard({
  destination

}: DestinationProps) {

  return (
    <Card
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

      <CardMedia
        sx={{ height: 140 }}
        image={images[`../public/img/${destination.img}`]?.default}
        title={destination.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {destination.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {destination.description}
        </Typography>
      </CardContent>
         

    </Card>
  );
}
