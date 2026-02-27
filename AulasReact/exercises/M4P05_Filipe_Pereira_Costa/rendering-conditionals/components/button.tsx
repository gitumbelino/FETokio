import Button from '@mui/material/Button';


interface ButtonProps {
    label: string
    onClick: () => void
    variant: 'danger' | 'teal'
    type?: 'button' | 'submit'
}

export default function ActionButton({ label, onClick, variant, type }: ButtonProps) {

    const buttonVariations = {
        danger: {
            bgcolor: '#ffebee',
            color: 'error.main',
            '&:hover': { bgcolor: '#ffcdd2' },
            '&:active': { bgcolor: '#ef9a9a' },
        },
        teal: {
            bgcolor: 'teal',
            color: 'white',
            '&:hover': { bgcolor: '#00695c' },
            '&:active': { bgcolor: '#004d40' },
        },
    }

    return (

        <Button
            type={type}
            variant="contained"
            disableElevation
            sx={{
                ...buttonVariations[variant],
                width: "auto",
                borderRadius: 3,
                m:1
            }}
            onClick={onClick}
        >
            {label}
        </Button >


    )

}