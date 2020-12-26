import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../task/FormTarea';
import ListadoTareas from '../task/ListadoTareas';


const Proyectos = () => {

    return(
        <div className="contedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Barra />
                
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListadoTareas />

                    </div>
                </main>
            </div>
        </div>
    );

}

export default Proyectos