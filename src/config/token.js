import clienteAxios from './axios.js';

const tokenAuth = token => {
    if(token){
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;