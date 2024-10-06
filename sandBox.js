// El DOM es para Document Object Model

// es diferente al Window, que vendría siendo como el padre del DOM.
// El DOM se puede tomar como el contenido de los archivos que trabajamos.

// console.dir(document) => muestra el DOM en la consola, junto con las propiedades disponibles que nos da el window.

// document.getElementById("element") => trae el elemento indicado
// document.querySelector("element") => trae el primer elemento que cumpla con lo demandado

// document.getElementsByClassName("menu-items") => trae un arreglo de elementos HTML

// document.getElementsByTagName("p") => trae todos los elementos del mismo tag

// document.querySelectorAll("element") => trae un **Lista de Nodos** que contengan el mismo selector

//getElement es mas veloz que querySelector*******

// const parent = document.getElementById("parent")
// console.log(parent);

// const children = parent.children;
// console.log(children);

// const firstChild = parent.firstElementChild;
// console.log(firstChild);

// const lastChild = parent.lastElementChild;
// console.log(lastChild);

// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);

// const nextSibling = parent.nextelementSibling;
// console.log(nextSibling);

// children ; // live HTMLCollection
// childNodes; // live Nodelist
// firstChild; // live Nodelist 
// firstElementChild; // non-live HTMCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-liveHTMLCollection


const children2 = document.querySelector('li')
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent);


