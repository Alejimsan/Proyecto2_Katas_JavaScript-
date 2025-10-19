/*
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola.
*/
const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

let peliculasPorDecada = {
    "1970": [],
    "1980": [],
    "1990": [],
    "2000": [],
    "2010": []
};

for (const movie of starWarsMovies){
    if (movie.releaseYear >= 1970 && movie.releaseYear < 1980){
        peliculasPorDecada["1970"].push(movie);
    }
    else if (movie.releaseYear >= 1980 && movie.releaseYear < 1990){
        peliculasPorDecada["1980"].push(movie);
    }
    else if (movie.releaseYear >= 1990 && movie.releaseYear < 2000){
        peliculasPorDecada["1990"].push(movie);
    }
    else if (movie.releaseYear >= 2000 && movie.releaseYear < 2010){
        peliculasPorDecada["2000"].push(movie);        
    }
    else if (movie.releaseYear >= 2010 && movie.releaseYear < 2020){
        peliculasPorDecada["2010"].push(movie);        
    }     
}

console.log(peliculasPorDecada);