const characterSelect = document.querySelector('#character-list');
const characterImage = document.querySelector('.character-image');
const API_URL = 'https://thronesapi.com/api/v2/Characters';

const getCharacters = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderCharacters(data);
} catch (error) {
    console.error('Error al obtener los personajes:', error);
  }
};

const renderCharacters = (characters) => {

  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Elige un personaje...';
  characterSelect.appendChild(defaultOption);

  characters.forEach(character => {
    const option = document.createElement('option');
    option.value = character.id;
    option.textContent = character.fullName;
    characterSelect.appendChild(option);
  });


  characterSelect.addEventListener('change', (event) => {
    const selectedId = parseInt(event.target.value);
    
    if (isNaN(selectedId)) {
        characterImage.src = "";
        return;
    }

    const selectedCharacter = characters.find(char => char.id === selectedId);

    if (selectedCharacter) {
      characterImage.src = selectedCharacter.imageUrl;
      characterImage.alt = selectedCharacter.fullName;
    }
  });
};

getCharacters();