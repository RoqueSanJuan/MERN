import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {


    //extraer los valorres del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario} = authContext;

    //En caso de que el usuario ya exista
    useEffect(() => {

        if(autenticado){
            props.history.push('/proyectos');
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);


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
        if( nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            passwordconfirm.trim() === '' ){
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        //Valiar pass minimo

        if( password.length < 6){
            mostrarAlerta('El password debe ser al menos de 6 caracteres', 'alerta-error')
            return;
        }
        //Valiar passconfirm

        if( password !== passwordconfirm){
            mostrarAlerta('El password no coincide con la confirmacion', 'alerta-error')
            return;
        }

        //Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password})


    }


    return(
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>): null}
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