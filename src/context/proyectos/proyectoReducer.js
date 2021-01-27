import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTNER_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR
} from "../../types";

// eslint-disable-next-line
export default (state, actions) => {
  switch (actions.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTNER_PROYECTOS:
      return {
        ...state,
        proyectos: actions.payload,
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, actions.payload],
        formulario: false,
        errorFormulario: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorFormulario: true,
      };
    case PROYECTO_ACTUAL:
        return {
            ...state,
            proyecto: state.proyectos.filter(proyecto => proyecto._id === actions.payload)
        }
    case ELIMINAR_PROYECTO:
      return {
          ...state,
          proyectos: state.proyectos.filter(proyecto => proyecto._id !== actions.payload),
          proyecto : null
      }
    case PROYECTO_ERROR:
      return {
        ...state,
        mensaje: actions.payload
      }
    default:
      return state;
  }
};
