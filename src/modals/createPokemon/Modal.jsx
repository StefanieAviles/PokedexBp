/* eslint-disable react-hooks/rules-of-hooks */
import './Modal.css'
import { FaWindowClose } from "react-icons/fa";
import {useRef, useState, useEffect} from 'react'
import { postNewPokemon } from '../../Functions/Functions'


export function Modal({stateModal, setStateModal,setPokemons}) {
    const nameRef = useRef();
    const urlRef = useRef();
    const attackRef = useRef();
    const defenseRef = useRef();
    const [nameError, setNameError] = useState('')
    const [urlError, setUrlError] = useState('')

    function closeModal(){
        setStateModal(false)
        setNameError('')
        setUrlError('')
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
        if(nameRef.current.value!== '' && urlRef.current.value!== '' ){
            const poke = {
                id: Math.floor(Math.random() * (1000 - 1) + 1),
                name: nameRef.current.value,
                image:urlRef.current.value,
                attack:parseInt(attackRef.current.value),
                defense:parseInt(defenseRef.current.value),
                hp:1000,
                type:"n/a",
                idAuthor:1
            }
            postNewPokemon(poke)  
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
                <input ref={urlRef} type="text" placeholder="Ej. https//:somedir.com"></input>
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