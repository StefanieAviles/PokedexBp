import { Overlay } from './Overlay'
import { Container } from './Container'
import './Modal.css'

export function Modal() {
    
    return (
        <>
        <Overlay className="overlay">
        <Container className="modalContainer">
            <h1>MODAL</h1>
        </Container>
        </Overlay>
        </>
    )
}