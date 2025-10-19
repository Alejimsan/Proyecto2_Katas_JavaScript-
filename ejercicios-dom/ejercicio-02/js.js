// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

document.addEventListener("DOMContentLoaded", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
});


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

document.addEventListener("DOMContentLoaded", () => {
    const nuevoDiv = document.createElement("div");
    const nuevoP = document.createElement("p");
    nuevoDiv.appendChild(nuevoP)
    document.body.appendChild(nuevoDiv)
});


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

document.addEventListener("DOMContentLoaded", () => {
    const div23 = document.createElement("div");
    for (let i = 0; i < 6; i++){
        const p6 = document.createElement("p");
        div23.appendChild(p6);
    } 
document.body.appendChild(div23)
});


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

document.addEventListener("DOMContentLoaded", () =>{
    const p24 = document.createElement("p");
    p24.textContent = "Soy dinámico!";
    document.body.append(p24);
});


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

document.addEventListener("DOMContentLoaded", () => {
    const insertHere = document.querySelector(".fn-insert-here");
    insertHere.textContent = "Wubba Lubba dub dub";

});


/*
2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

document.addEventListener("DOMContentLoaded", () =>{
    const newUl = document.createElement("ul");
    for (const app of apps){
        const newLi = document.createElement("li");
        newLi.textContent = app;
        newUl.appendChild(newLi);
}
document.body.appendChild(newUl);

});

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

document.addEventListener("DOMContentLoaded", () =>{
    const eliminar = document.querySelectorAll(".fn-remove-me");
    for (let i=0; i < eliminar.length; i++){
        eliminar[i].remove();
}
});

/* Con forEach y => :

document.addEventListener("DOMContentLoaded", () => {
  const eliminar = document.querySelectorAll(".fn-remove-me");
  eliminar.forEach(elemento => elemento.remove()); 
});

*/


// 2.8  Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

document.addEventListener("DOMContentLoaded", () => {
    const div1 = document.querySelector("div");
    const newP = document.createElement("p");
    newP.textContent = "Voy en medio";
    div1.insertAdjacentElement("afterend", newP);
});


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

document.addEventListener("DOMContentLoaded", () => {
    const voyDentro = document.querySelectorAll(".fn-insert-here");

    voyDentro.forEach(elemento => {
        const pVoyDentro = document.createElement("p");
        pVoyDentro.textContent = "Voy dentro!";

    elemento.appendChild(pVoyDentro);
    });


});


