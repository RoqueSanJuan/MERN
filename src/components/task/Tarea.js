import React,{useContext} from 'react';
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";


const Tarea = ({tarea}) => {


    //Contex proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Contex tarea
    const tareacontext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareacontext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

    // Funcion que se ejecuta cuando el usuario aprieta boton de eliminar
    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //Modificar el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        } else {
            tarea.estado  = true;
        }
        cambiarEstadoTarea(tarea);
    }

    // Agrega una tarea actual cuando el usuario edita
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }


    return ( 

        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                ?
                    (
                        <button 
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >
                        Completo 
                        </button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() =>cambiarEstado(tarea)}
                        >
                            Incompleto
                        </button>
                    )

                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick = {() => seleccionarTarea(tarea)}    
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick = {() => tareaEliminar(tarea.id)} 
                >
                    Eliminar
                </button>
            </div>
        </li>

     );
}
 
export default Tarea;