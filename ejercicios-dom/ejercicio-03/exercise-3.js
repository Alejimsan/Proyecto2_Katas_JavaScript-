//3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.createElement("ul");
        countries.forEach(elemento => {
            const li = document.createElement("li");
            li.textContent = elemento;
            ul.appendChild(li);
        });
document.body.append(ul);

});

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.addEventListener("DOMContentLoaded", () => {
    const eliminar = document.querySelector(".fn-remove-me");
    eliminar.remove();
});

//3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

document.addEventListener("DOMContentLoaded", () =>{
    const printHere = document.querySelector("[data-function=printHere]");
    const ul = document.createElement("ul");   
        cars.forEach(car => {
            const li = document.createElement("li");
            li.textContent = car;
            ul.appendChild(li);
        });
    printHere.appendChild(ul);    

});

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

document.addEventListener("DOMContentLoaded", () => {

    countries2.forEach (countrie => {
        const div = document.createElement("div");

        const h4 = document.createElement("h4");
        h4.textContent = countrie.title;

        const img = document.createElement("img")
        img.src = countrie.imgUrl;
        img.alt = countrie.title;

        div.appendChild(h4);
        div.append(img);

        document.body.appendChild(div);
    });

});

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

document.addEventListener("DOMContentLoaded", () => {

    const button = document.createElement("button");
    document.body.appendChild(button);
    button.textContent = "Eliminar último div";
    button.addEventListener("click", () => {
        const divs = document.querySelectorAll("div");
        const deleteDiv = divs[divs.length - 1];
        deleteDiv.remove();
    });

});

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

document.addEventListener("DOMContentLoaded", () => {

    const divsIndividuales = document.querySelectorAll("div");

    divsIndividuales.forEach(divIndividual => {
        const botonIndividual = document.createElement("button");
        botonIndividual.textContent = "Eliminar este div";

        botonIndividual.addEventListener("click", () => {
            divIndividual.remove();
        });

        divIndividual.appendChild(botonIndividual);
    });

});