
import { Modal, Card, Typography, Box, TextField } from "@mui/material";
import ActionButton from "./button";
import { Close, Save } from "@mui/icons-material";

interface EditMovieModalProps {
    open: boolean;
    onClose: () => void;
    editTitle: string;
    editYear: number;
    setEditTitle: (title: string) => void;
    setEditYear: (releaseYear: number) => void;
    onSave: () => void;
}

export default function EditMovieModal({
    open,
    onClose,
    editTitle,
    editYear,
    setEditTitle,
    setEditYear,
    onSave
}: EditMovieModalProps) {

    const handleSave = () => {
        onSave();
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Card sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                p: 4,
                borderRadius: 4,
                boxShadow: 24,
                minWidth: 300
            }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Editar Filme
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Nome do Filme"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <TextField
                        label="Ano de Lançamento"
                        value={editYear}
                        onChange={(e) => setEditYear(Number(e.target.value))}
                    />

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                        <ActionButton
                            variant="gray"
                            label="Cancelar"
                            icon={<Close />}
                            onClick={onClose}
                        />
                        <ActionButton
                            variant="teal"
                            label="Guardar"
                            icon={<Save />}
                            onClick={handleSave}
                        />
                    </Box>
                </Box>
            </Card>
        </Modal>
    );
}