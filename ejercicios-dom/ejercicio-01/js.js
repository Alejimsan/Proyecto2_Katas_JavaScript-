//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

document.addEventListener("DOMContentLoaded", () => {
const showMe = document.querySelector(".showme");
console.log(showMe);
});

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

document.addEventListener("DOMContentLoaded", () => {
const pillado = document.querySelector("#pillado");
console.log(pillado);
});

//1.3 Usa querySelector para mostrar por consola todos los p

document.addEventListener("DOMContentLoaded", () => {
const allP = document.querySelectorAll("p");
console.log(allP);
});

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

document.addEventListener("DOMContentLoaded", () => {
const pokemonClass = document.querySelectorAll(".pokemon");
console.log(pokemonClass);
});

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

document.addEventListener("DOMContentLoaded", () => {
const allDFTestMe = document.querySelectorAll("[data-function=testMe]");
console.log(allDFTestMe);
});

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
document.addEventListener("DOMContentLoaded", () =>{
const allDFTestMe = document.querySelectorAll("[data-function=testMe]"); 
console.log(allDFTestMe[2]);
});