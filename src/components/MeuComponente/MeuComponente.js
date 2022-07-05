
import { useState } from 'react'
import { MinhaDiv, MeuBotao } from './contador.styled'

function Contador(props) {
    const [numero, setNumero] = useState(0)


    return (
        <MinhaDiv abc='1'>
            Contador: <span> {numero} </span>

            <MeuBotao variant='contained' onClick={() => setNumero(numero + 1)}>
                Click
            </MeuBotao>
        </MinhaDiv>
    )
}

export default Contador