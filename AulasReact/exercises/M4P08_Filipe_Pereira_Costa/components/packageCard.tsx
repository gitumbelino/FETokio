
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Package } from '../types/allTypes.ts'



interface PackageOfferProps {
  packageOffer: Package;
}

export default function PackageOfferCard({
  packageOffer
}: PackageOfferProps) {

  const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };


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
        sx={{
          height: 140,
          backgroundColor: randomRgbColor()
        }}

        title={packageOffer.packageType}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {packageOffer.packageType}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {packageOffer.description}
        </Typography>
      </CardContent>


    </Card>
  );
}
