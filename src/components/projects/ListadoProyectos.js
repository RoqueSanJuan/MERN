import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
    }, []);

    //Revisar si existen proyectos
    if(proyectos.length === 0) return <p>No existen Proyectos</p>;


    return(

        <ul className="listado-proyectos">
             {proyectos.map(proyecto => (
                 <Proyecto
                    key = {proyecto.id}
                    proyecto={proyecto}
                 />
             ))}
        </ul>

    );


}


export default ListadoProyectos;