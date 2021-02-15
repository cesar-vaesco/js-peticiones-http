import { obtenerChiste } from "./http-provider";



const body = document.body;

let btnOtro, olListChistes;


const crearChistesHtml = () => {

  const html = `<h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste!</button>

    <ol class="mt-2 list-group"></ol>`;

  const divChistes = document.createElement('div');

  divChistes.innerHTML = html;

  body.append(divChistes);
}

const eventos = () => {

  olListChistes = document.querySelector('ol');
  btnOtro = document.querySelector('button');

  btnOtro.addEventListener('click',async () => {
    // console.log('Hola mundo...');

    dibujarChiste(await obtenerChiste() );
  });

}

//chiste {id, value}
const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b> ${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add("list-group-item");

    olListChistes.append(olItem);

}


export const init = () => {

  crearChistesHtml();
  eventos();
}
