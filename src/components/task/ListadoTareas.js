import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Si no tengo proyecto seleccionado no muestro nada

    if(!proyecto) return <h2> Selecciona un proyecto</h2>


    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre : 'Elegir plataforma', estado:true},
        {nombre : 'Elegir colores', estado:false},
        {nombre : 'Elegir plataforma de pago', estado:false},
        {nombre : 'Elegir plataforma host', estado:true},

    ];

    return ( 
        <Fragment>
            <h2> {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))         
                
                
                }
                <button 
                    type="button"
                    className="btn btn-eliminar"
                >
                    Eliminar Proyecto &times; 
                </button>
            </ul>

        </Fragment>
     );
}
 
export default ListadoTareas;