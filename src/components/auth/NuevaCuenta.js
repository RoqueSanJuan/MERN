import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // State para inciar Sesion

    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        passwordconfirm:''
    });

    const {nombre, email, password, passwordconfirm} = usuario;




    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }

    //Al querer inciar sesion

    const onSubmit = e => {
        e.preventDefault();

        //Validar Campos

        //Valiar pass minimo

        //Valiar passconfirm

        //Pasarlo al action

    }


    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Ingresa tu nombre"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Ingresa tu email"
                            onChange={onChange}
                        />
                    </div>


                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="passwordconfirm">Confirmar Password</label>
                        <input 
                            type="password"
                            id="passwordconfirm"
                            name="passwordconfirm"
                            value={passwordconfirm}
                            placeholder="Vuelve a ingresar tu pasword"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Registrarse"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver al inicio
                </Link>

            </div>
        </div>
    );

}

export default NuevaCuenta