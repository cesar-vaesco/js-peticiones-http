

const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async (id) => {

    const resp = await fetch(`${urlCRUD}/${id}`);
    const data = await resp.json();
    return data;
}


const createUsuario = async (usuario) => {

    const resp = await fetch(urlCRUD, {


        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(await resp.json());

    return true;
}



export {
    getUsuario,
    createUsuario
}