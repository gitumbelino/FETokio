
// Se quiseres desafiar-te:
// adiciona um formulário para inserir nome e tipo;
// mostra uma mensagem quando não existirem instrumentos;
// usa estilos personalizados.

import { useState } from "react"

export default function Instrument(props) {

    const [showModal, setShowModal] = useState(false)

    const { name, type, onRemove, onEdit, onCancel, isEditing, editInstrument, editName, editType, setEditName, setEditType } = props

    return (
        <>
            <div className="instrument-card">
                <article>
                    {isEditing ? (
                        <>
                            <div className="modal-overlay">
                                <div className="modal-overlay">
                                    <input value={editName} onChange={(e) => setEditName(e.target.value)} />
                                    <input value={editType} onChange={(e) => setEditType(e.target.value)} />
                                    <button onClick={() => { editInstrument(); setShowModal(false) }}>Save</button>
                                    <button onClick={() => { onCancel(); setShowModal(false) }}>Cancel</button>
                                </div>
                            </div>

                        </>
                    ) : (
                        <>
                            <h2>Name: {name}</h2>
                            <p>Type: {type}</p>
                            <button onClick={() => { onEdit(); setShowModal(true) }}>Edit</button>
                            <button onClick={onRemove}>Remove</button>
                        </>
                    )}

                </article>
            </div>
        </>
    )
}