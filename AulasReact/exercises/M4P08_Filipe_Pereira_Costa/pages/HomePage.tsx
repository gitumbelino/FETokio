import { Box } from "@mui/material"


export default function Home() {
  return (

    <>
      <Box
        sx={{
          maxWidth: 500,
          mx: 'auto',
          mt: 6,
          px: 3
        }}
      >

        <h2>Bem vindo à React Tours</h2>
        <h3>Embarque nas melhores Routes!</h3>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmwwZG1zYm9zZnBnZXo3bzA5NXFwY3p0bDZmeXh0aWtxZ2t3Y3F0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7Dk4apSbWKpZ6/giphy.gif" alt="piada seca" />

      </Box>

    </>
  )
}
