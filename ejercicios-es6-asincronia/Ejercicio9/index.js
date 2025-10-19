const pokemonImage = document.querySelector('.random-image');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// --- FUNCIONES DE LÓGICA ---

// Genera un ID aleatorio entre 1 y 151
const getRandomPokemonId = () => {
    // Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
    return Math.floor(Math.random() * 151) + 1; 
};

// Obtiene los datos del Pokémon (Patrón GET)
const getPokemon = async () => {
    try {
        const randomId = getRandomPokemonId();
        const URL = `${BASE_URL}${randomId}`; 
        
        // Esperamos la respuesta de la petición
        const res = await fetch(URL); 
        
        // Esperamos que se convierta a JSON
        const data = await res.json(); 
        
        // Llamamos a la función de renderizado
        renderPokemon(data); 
        
    } catch (error) {
        // Manejo de errores simple para el estudiante
        console.error('Ha ocurrido un error al cargar el Pokémon:', error);
        pokemonImage.alt = 'Error de carga';
    }
};

// Muestra la imagen en el DOM (Patrón RENDER)
const renderPokemon = (data) => {
    
    // RUTA SIMPLIFICADA AL ARTE OFICIAL (LA IMAGEN GRANDE)
    // Asumimos que esta ruta siempre existe para los Pokémon de la primera generación.
    const imageUrl = data.sprites.other['official-artwork'].front_default;
    
    // Actualizamos el DOM
    pokemonImage.src = imageUrl;
    
    // Capitalizamos el nombre para el texto alternativo
    const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    pokemonImage.alt = formattedName;
    
    console.log(`¡Mostrando a ${formattedName}!`);
};


// --- INICIO DEL PROGRAMA ---
// Ejecutamos la función principal al cargar el script.
getPokemon();