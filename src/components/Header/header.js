import React from 'react'
import {connect} from 'react-redux'
import  {Container} from './styles'
const Header = ({aulaSelecionada,moduloSelecionado}) => {
    return(
        <Container>
            <h1>Aula:{aulaSelecionada.aulaName || <h6 style={{display:"inline"}}>Nenhuma Aula selecionada</h6>}</h1>
            <h1>Módulo: {moduloSelecionado.moduleName || <h6 style={{ display: "inline" }}>Nenhum módulo selecionado</h6>}</h1>
        </Container>
    )
}
const mapStateToProps = state => {
    return {
        aulaSelecionada: state.aulaSelecionada, 
        moduloSelecionado: state.moduloSelecionado
    }
}

export default connect(mapStateToProps,null)(Header)