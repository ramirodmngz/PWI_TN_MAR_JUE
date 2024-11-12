import React, {useState} from 'react'

const EstadosScreen = () => {
    const [contador, setContador] = useState(1)

    const incrementar = () =>{
        setContador((prevState) =>{
            return prevState + 1
        })
        setErrorContadoMinimo(false)
    }
    const decrementar = () => {
        if(contador > 1 ){
            setContador(contador - 1)
        } else {
            setErrorContadoMinimo(true)
        }
        }
    
    const [errorContadorMinimo, setErrorContadoMinimo] = useState(true)


    const handleShowHiddenText = () =>{
        // conviene callback
        setIsHiddenText((prevState) =>{
            return !prevState 
        })
    }

    const [isHiddenText, setIsHiddenText] = useState(true)

    




    return (
        <div>
            <h1>Estados en react</h1>
            <div>
                <button onClick={decrementar}>Restar</button>
                <span>{contador}</span>
                <button onClick={incrementar}>Sumar</button>
            </div>
            
            {
                errorContadorMinimo && <span>Error,el estado no puede ser negativo</span>
            }

            <button onClick={handleShowHiddenText}>Abrir</button>
            {/* <span hidden={isHiddenText}>texto oculto</span> */}
            {
                !isHiddenText && <span>texto oculto</span>
            }
        </div>
    )
}

export default EstadosScreen