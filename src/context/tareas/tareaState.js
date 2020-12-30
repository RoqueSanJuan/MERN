import React, {useReducer} from 'react';

import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";


import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA
  } from "../../types";


const TareaState = props => {

    const initialState = {
        tareas: [
            {nombre : 'Elegir plataforma', estado:true, proyectoId:1},
            {nombre : 'Elegir colores', estado:false, proyectoId:2},
            {nombre : 'Elegir plataforma de pago', estado:false, proyectoId:3},
            {nombre : 'Elegir plataforma host', estado:true, proyectoId:4},
            {nombre : 'Elegir plataforma', estado:true, proyectoId:1},
            {nombre : 'Elegir colores', estado:false, proyectoId:2},
            {nombre : 'Elegir plataforma de pago', estado:false, proyectoId:3},
            {nombre : 'Elegir plataforma', estado:true, proyectoId:2},
            {nombre : 'Elegir colores', estado:false, proyectoId:4},
            {nombre : 'Elegir plataforma de pago', estado:false, proyectoId:3},
    
        ],
        tareasproyecto : null,
        errortarea: false,
    }


    //Crear dispatch y state

    const [state, dispatch] = useReducer(TareaReducer , initialState);



    //Crear las funciones



    //Obtener las tareas de un proyecto

    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }


    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value = {{
                tareas: state.tareas,
                errortarea: state.errortarea,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState;