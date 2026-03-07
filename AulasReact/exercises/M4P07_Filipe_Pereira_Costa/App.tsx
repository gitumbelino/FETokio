import { useState } from "react";
import BookingForm from "./components/bookingForm"





function App() {

  const [statusMessage, setStatusMessage] = useState('Invalid E-mail')
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [email, setEmail] = useState('');
  const [submit, onsubmit] = useState('');





  const updateValue = (e) => {
    setName(e.target.value);
    setRoom(e.target.value);
    setEmail(e.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault()
  };

  const form = e.target

  const passwordLength = 8

  if (form.username.value.lenght <= passwordLength){
    setStatusMessage(`username needs ${passwordLength} letters`)
  }


    return (
      <BookingForm
        onSubmit={handleEvent}


      ></BookingForm>

    )
}

export default App
