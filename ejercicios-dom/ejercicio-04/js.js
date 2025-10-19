// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

document.addEventListener("DOMContentLoaded", () => {

const btnToClick = document.querySelector("#btnToClick");
btnToClick.textContent = "Información del evento";
btnToClick.addEventListener("click", (evento) => {
    console.log(evento);
});

});

// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. 

document.addEventListener("DOMContentLoaded", () =>{

    const focus = document.querySelector(".focus");
    focus.addEventListener("focus", (evento) => {
        console.log(evento.target.value);
    });

});

//4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelectorAll("input");
    input.forEach(inp => {
        inp.addEventListener("input", (evento) => {
            console.log(evento.target.value);
        });
    });

});