import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorFormulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //State de Proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //Extraer Nombre de Proyecto

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Valiar proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //Agregar al state
    agregarProyecto(proyecto);

    //Reiniciar el form
    guardarProyecto({
      nombre: "",
    });
  };

  //Mostrar Formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorFormulario ? <p className="mensaje error">El nombre es obligatorio</p>: null}


    </Fragment>
  );
};

export default NuevoProyecto;
