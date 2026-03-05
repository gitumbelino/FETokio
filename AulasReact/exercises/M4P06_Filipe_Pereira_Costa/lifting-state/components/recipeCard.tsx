/// <reference types="vite/client" />
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Recipe } from '../types/Recipe';
import { Divider, Box, List, ListItem, ListItemText } from '@mui/material';

const images = import.meta.glob('../../public/img/*.webp', { eager: true }) as Record<string, { default: string }>


interface RecipeProps {
    recipe: Recipe;
    onSelect: () => void;
}


export default function RecipeCard({
    onSelect,
    recipe

}: RecipeProps) {

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
                <CardMedia
                    sx={{ height: 140 }}
                    image={images[`../../public/img/${recipe.img}`]?.default}
                    title={recipe.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {recipe.name}
                    </Typography>
                    <Divider />
                    <List dense>
                        {recipe.ingredients.map((ingredient, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={ingredient} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <Divider />
                <CardActions
                    sx={{
                        p: 2,
                        justifyContent: 'right',
                        alignContent: 'bottom'
                    }}>
                    <Button
                        onClick={onSelect}
                        size="small" >Selecionar</Button>
                </CardActions>
            </Card>
        </Box >
    );
}
