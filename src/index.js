// import { init } from './js/chistes-page';
// import { init } from './js/chistes-page';

//import { init } from './js/usuarios-page';

//obtenerUsuarios().then( console.log)

//init();

import * as CRUD from './js/crud-provider';

CRUD.getUsuario( 1 ).then( console.log );

CRUD.createUsuario({
    name:'César',
    job: 'Albañil'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Verónica',
    job: 'Comerciante'}).then(console.log);
