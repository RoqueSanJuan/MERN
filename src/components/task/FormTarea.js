import React, {useContext, useState} from 'react'
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {



    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Extraer agregar tarea
    const tareacontext = useContext(tareaContext);
    const { agregarTarea } = tareacontext;
    

    //State del formulario

    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //Extraer el nombre del proyecto
    const {nombre} = tarea;


    if(!proyecto) return null;

    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const hadleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //valiar

        //pasar la validacion

        //agregar la nueva tarea al state
        tarea.proyectoId =  proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);
        //reiniciar el form


    }

    return ( 

        <div className="formulario">
            <form
                onSubmit={onSubmit}
            
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={hadleChange}
                    >
                    </input>
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    ></input>
                </div>

            </form>
        </div>
     );
}
 
export default FormTarea;