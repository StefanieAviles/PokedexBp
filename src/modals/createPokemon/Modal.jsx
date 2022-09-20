/* eslint-disable react-hooks/rules-of-hooks */
import './Modal.css'
import { FaWindowClose } from "react-icons/fa";
import {useRef, useState} from 'react'
import { postNewPokemon, editPokemon } from '../../Functions/Functions'


export function Modal({stateModal, setStateModal,item, setItem, edit, idEdit}) {
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
            if(!edit){
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
            }else{
                const poke = {
                    id: idEdit,
                    name: nameRef.current.value,
                    image:urlRef.current.value,
                    attack:parseInt(attackRef.current.value),
                    defense:parseInt(defenseRef.current.value),
                    hp:1000,
                    type:"n/a",
                    idAuthor:1
                }
                console.log(poke)
                console.log(idEdit)
                editPokemon(poke, idEdit)
            }              
            setStateModal(false)
        }
    }
    
    return (
        <>
        {stateModal &&
        <section className="overlay">
        <div className="modalContainer">
            <h2>Datos del Pokemon</h2>
            <FaWindowClose className="closeIcon" onClick={closeModal} data-testid= "close"/>
            <div className="setPokemon">
                <label>Nombre:</label>
                <input ref={nameRef} type="text" placeholder="Ej. pikachu" onChange={(e) => setItem(e.target.value)}value={item.name}></input>
                <label>Ataque:</label>
                <div className="setPokemon">
                    <label>0</label>
                    <input ref={attackRef} onChange={(e) => setItem(e.target.value)} type="range" min="0" max="100" value={item.attack}></input>
                    <label>100</label>
                </div>             
            </div>
            <p className="textError">{nameError}</p>
            <div className="setPokemon">
            <label>Imagen:</label>
                <input ref={urlRef} type="text" placeholder="Ej. https//:somedir.com" onChange={(e) => setItem(e.target.value)} value={item.image}></input>
                <label>Defensa:</label>
                <div className="setPokemon">
                    <label>0</label>
                    <input ref={defenseRef} type="range" min="0" max="100" onChange={(e) => setItem(e.target.value)} value={item.defense}></input>
                    <label>100</label>
                </div>   
            </div>
            <p className="textError">{urlError}</p>
            <div className="buttonsNewPokemon">
                <button onClick={createPokemon}>Guardar</button>
            </div>
        </div>
        </section>
        }
        </>
    )
}