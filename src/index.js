
const jokeURL = 'https://api.chucknorris.io/jokes/random';

// La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP,
// tales como peticiones y respuestas.
fetch( jokeURL ).then( resp => {
  // console.log(resp);
  resp.json().then(({id, value}) =>{
   // console.log(data);
    console.log(id);
    console.log(value);
  });
});
