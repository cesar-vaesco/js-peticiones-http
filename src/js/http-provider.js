

const jokerUrl = 'https://api.chucknorris.io/jokes/random';

const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloundPreset = 'qwq9nluv';
const cloundUrl = 'https://api.cloudinary.com/v1_1/cesar1980/upload';




const obtenerChiste = async () => {

  try {

    const resp = await fetch(jokerUrl);

    if (!resp.ok) throw Error('No se pudo realizar la petición');

    // const chiste = await resp.json();

    // return chiste;

    /*-- REGRESANDO Sólo los valores que nos interesa --*/
    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };

  } catch (err) {

    throw err;

  }

}


const obtenerUsuarios = async () => {

  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json();

  //console.log(usuarios);

  return usuarios;

}

// Arcgivo a subir :: file
const subirImagen = async (archivoSubir) => {

  const formData = new FormData();

  formData.append('upload_preset', cloundPreset );
  formData.append('file', archivoSubir );

  try {
    const resp = await fetch(cloundUrl, {
      method: 'POST',
      body: formData
    });

    if( resp.ok){
      const cloudResp = await resp.json();
      //console.log(cloudResp);
       return cloudResp.secure_url;

    } else {
      throw await resp.json();
    }

  } catch (err) {

    throw err;
  }


}

export {
  obtenerChiste,
  obtenerUsuarios,
  subirImagen
}
