import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import BookingForm from "./components/bookingForm"
import Header from "./components/header";


const userNameLength = 8

function App() {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleRoom = (e) => {
    setRoom(e.target.value);
  }

  const handleCheckIn = (e) => {
    setCheckIn(e.target.value);
  }

  const handleCheckOut = (e) => {
    setCheckOut(e.target.value);
  }

  const handleSubmit = e => {

    e.preventDefault()

    console.log(name)
    console.log(room)
    console.log(checkIn)
    console.log(checkOut)
  };


  return (
    <>
      <CssBaseline />
      <main>
        <Header />
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "wheat",
            boxSizing: "content-box"
          }} >

          <BookingForm
            onSubmit={handleSubmit}
            onChangeName={handleName}
            onChangeRoom={handleRoom}
            onChangeCheckIn={handleCheckIn}
            onChangeCheckOut={handleCheckOut}
          />
        </Box>
      </main>
    </>
  )
}

export default App
