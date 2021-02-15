

const jokerUrl = 'https://api.chucknorris.io/jokes/random';




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

export {
  obtenerChiste
}
