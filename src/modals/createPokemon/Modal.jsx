import './Modal.css'
import { FaWindowClose } from "react-icons/fa";
import {useRef, useState} from 'react'


export function Modal({stateModal, setStateModal}) {
    const nameRef = useRef();
    const urlRef = useRef();
    const attackRef = useRef();
    const defenseRef = useRef();
    const [nameError, setNameError] = useState('')
    const [urlError, setUrlError] = useState('')
    function closeModal(){
        setStateModal(false)
    }
    function createPokemon(){
        setNameError('')
        setUrlError('')
        if(nameRef.current.value === ''){
            setNameError('* Campo requerido')
        }
        if(urlRef.current.value === ''){
            setUrlError('* Campo requerido')
        }
        if(nameRef.current.value!== '' && nameRef.current.value!== '' ){
            console.log("create")
            console.log(nameRef.current.value + urlRef.current.value + attackRef.current.value + defenseRef.current.value)
            //ENVIAR A LA API
            setStateModal(false)
        }
    }
    
    return (
        <>
        {stateModal &&
        <section className="overlay">
        <div className="modalContainer">
            <h2>Datos del Pokemon</h2>
            <FaWindowClose className="closeIcon" onClick={closeModal}/>
            <div className="setPokemon">
                <label>Nombre:</label>
                <input ref={nameRef} type="text" placeholder="Ej. pikachu"></input>
                <label>Ataque:</label>
                <div className="setPokemon">
                    <label>0</label>
                    <input ref={attackRef} type="range" min="0" max="100"></input>
                    <label>100</label>
                </div>             
            </div>
            <p className="textError">{nameError}</p>
            <div className="setPokemon">
            <label>Imagen:</label>
                <input ref={urlRef} type="text" placeholder="Ej. pikachu"></input>
                <label>Defensa:</label>
                <div className="setPokemon">
                    <label>0</label>
                    <input ref={defenseRef} type="range" min="0" max="100"></input>
                    <label>100</label>
                </div>   
            </div>
            <p className="textError">{urlError}</p>
            <div className="buttonsNewPokemon">
                <button onClick={createPokemon}>Guardar</button>
                <button onClick={closeModal}>Cancelar</button>
            </div>
        </div>
        </section>
        }
        </>
    )
}