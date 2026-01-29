import { useState } from "react";
import '../App.css';

export default function Form(props) {

    const [inputName, setInputName] = useState("");
    const [inputType, setInputType] = useState("");

    const { addInstrument } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        addInstrument(inputName, inputType);
        setInputName("");
        setInputType("");
    }

    return (

        < form onSubmit={handleSubmit} >
            <input value={inputName} onChange={(e) => setInputName(e.target.value)} />
            <input value={inputType} onChange={(e) => setInputType(e.target.value)} />
            <button type="submit">Add</button>
        </form >
    )
}
