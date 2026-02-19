
import { Modal, Card, Typography, Box, TextField } from "@mui/material";
import ActionButton from "./button";
import { Close, Save } from "@mui/icons-material";

interface EditInstrumentModalProps {
editInstrument:(name:string,type:string)=>void;
}

interface EditInstrumentModalProps {
    open: boolean;
    onClose: () => void;
    editName: string;
    editType: string;
    setEditName: (name: string) => void;
    setEditType: (type: string) => void;
    onSave: () => void;
}

export default function EditInstrumentModal({
    open,
    onClose,
    editName,
    editType,
    setEditName,
    setEditType,
    onSave
}: EditInstrumentModalProps) {

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
                    Editar Instrumento
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Nome do Instrumento"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <TextField
                        label="Tipo de instrumento"
                        value={editType}
                        onChange={(e) => setEditType(e.target.value)}
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