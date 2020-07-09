import { createStore } from 'redux'
// Vai ficar as reducers
const Estado = {
    aulaSelecionada: {},
    moduloSelecionado: {},

    Modulos: [
        //Primeiro Modulo
        {
            id: 1,
            moduleName: "Iniciando React",
            aulas: [
                {
                    id: 1,
                    aulaName: "Aprendendo Componentes",

                },
                {
                    id: 2,
                    aulaName: "Aprendendo Hooks",
                },
                {
                    id: 3,
                    aulaName: "Primeiro projeto",
                }
            ]
        },
        //Segundo Modulo
        {
            id: 2,
            moduleName: "Iniciando Redux",
            aulas: [
                {
                    id: 1,
                    aulaName: "Conceitos Redux",

                },
                {
                    id: 2,
                    aulaName: "Configurando Redux",
                },
                {
                    id: 3,
                    aulaName: "Entendendo Redux Saga",
                },
                {
                    id: 4,
                    aulaName: "Finalização",
                }
            ]
        }
    ]
}

// Reducer
function Reducer(state=Estado, action) {
    switch (action.type){
        case "ADD_HEADER_INFO":
            return {
                ...state,
                aulaSelecionada: action.aulas,
                moduloSelecionado: action.estado
            }
        default:
        return state
    }
}


const store = createStore(Reducer)

export default store