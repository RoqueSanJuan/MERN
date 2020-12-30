import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTNER_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types";

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
            proyecto: state.proyectos.filter(proyecto => proyecto.id === actions.payload)
        }
    case ELIMINAR_PROYECTO:
      return {
          ...state,
          proyectos: state.proyectos.filter(proyecto => proyecto.id !== actions.payload),
          proyecto : null
      }


    default:
      return state;
  }
};
