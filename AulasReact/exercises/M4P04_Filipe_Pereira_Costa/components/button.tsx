import Button from '@mui/material/Button';


interface ButtonProps {
    label: string
    icon: React.ReactNode
    onClick: () => void
    variant: 'gray' | 'danger' | 'teal'
}


export default function ActionButton({ label, icon, onClick, variant }: ButtonProps) {

    const buttonVariations = {
        gray: {
            bgcolor: 'grey.200',
            color: 'grey.700',
            '&:hover': { bgcolor: 'grey.300' },
            '&:active': { bgcolor: 'grey.400' },
        },
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

            variant="contained"
            disableElevation
            sx={{...buttonVariations[variant],
                width:"120px",
                borderRadius: 3
            }}
            startIcon={icon}
            onClick={onClick}
        >
            {label}

        </Button >


    )

}