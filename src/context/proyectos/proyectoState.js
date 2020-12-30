import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import {
  FORMULARIO_PROYECTO,
  OBTNER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id:1, nombre: "Tienda Virtual" },
    { id:2, nombre: "Intranet" },
    { id:3, nombre: "Guia" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null
  };

  //Dispath para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Sserie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTNER_PROYECTOS,
      payload: proyectos,
    });
  };

  //Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    //Insertar el proyecto
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };


  //Valida el formulario por errores
  const mostrarError = () =>{
     dispatch({
         type: VALIDAR_FORMULARIO
     });
  }

  //Selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoID => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload : proyectoID
    })
  }

  const eliminarProyecto = proyectoId => {
    dispatch({
        type: ELIMINAR_PROYECTO,
        payload : proyectoId
    })
  }


  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
