import { TextField, Button, Box } from '@mui/material';


export default function BookingForm() {

    return (

        <Box

            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "wheat"
            }}
        >

            <Box component="form"

                sx={{
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid white",
                    borderRadius: "4px",
                    padding: "20px",
                    margin: "20px",
                    gap: "12px",
                    bgcolor: "white",
                    borderRadius: "16px"


                }}>

                <TextField label="Nome" required />
                <TextField label="Quarto" type="number" required  />
                <TextField label="Email" type="email" required />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit">Marcar</Button>
                </Box>




            </Box >


        </Box>



    )

}


