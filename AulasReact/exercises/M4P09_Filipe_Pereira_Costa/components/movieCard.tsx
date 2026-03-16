import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Movie } from '../types/Movie.ts';
import ActionButton from './button.tsx';
import { Edit, Delete } from '@mui/icons-material'
import EditMovieModal from './modal.tsx'


interface MovieCardProps {
    movie: Movie;
    onRemove: () => void;
    onEdit: () => void;
    onCancel: () => void;
    isEditing: boolean;
    editMovie: () => void;
    editTitle: string;
    editYear: number;
    setEditTitle: (name: string) => void;
    setEditYear: (type: number) => void;
}

export default function MovieCard({

    movie,
    onRemove,
    onEdit,
    onCancel,
    isEditing,
    editMovie,
    editTitle,
    editYear,
    setEditTitle,
    setEditYear

}: MovieCardProps) {

    return (
        <Card
            elevation={2}
            sx={{
                minWidth: "300px",
                borderRadius: 4,
                transition: '0.2s',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4
                }
            }}>

            <EditMovieModal
                open={isEditing}
                onClose={onCancel}
                editTitle={editTitle}
                editYear={editYear}
                setEditTitle={setEditTitle}
                setEditYear={setEditYear}
                onSave={editMovie}
            />
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movie.releaseYear}
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
                    onClick={onEdit}
                />
                <ActionButton
                    variant="danger"
                    label="Apagar"
                    icon={<Delete />}
                    onClick={onRemove}
                />
            </Box>
        </Card>
    );
}
