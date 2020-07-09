import React from 'react'
import addToHeader from '../modules/actions/action'
import {connect} from 'react-redux'
import {Container} from './styles'

const Video = ({estado,dispatch}) => {
    return (
        <Container>
        {estado.map((estado)=>(
            <aside>
                <h1>{estado.moduleName}</h1>
                <ul>
                    {estado.aulas.map((aulas)=>(
                        <li>
                            
                            <button style={{ marginLeft: 10 }} onClick={() => dispatch(addToHeader(estado, aulas))}>{aulas.aulaName}</button>
                        </li>
                    ))}
                </ul>
            </aside>
        ))}
        </Container>
    )
}

// Está pegando do estado geral os módulos e guardando em uma variável chamado estado
const mapStateToProps=state=>{
    return{
        estado:state.Modulos
    }
}

export default connect(mapStateToProps)(Video)