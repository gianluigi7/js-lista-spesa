'use strict'

const listaSpesa = ['pollo','legumi','verdure','trenoboloneacetato','acqua'];

const ul = document.getElementById('lista');


for (let i = 0; i < listaSpesa.length; i++) {

    const li = document.createElement('li');

    li.innerText = listaSpesa[i];
    ul.append(li);

};

console.log(listaSpesa[1]);

