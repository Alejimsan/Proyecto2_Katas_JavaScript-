// 4.5 Utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersEdit = streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends"));
const streamersEdit2 = streamersEdit.map(streamer => {
	const newStreamer = {...streamer}
	if (newStreamer.age > 35) {
		newStreamer.gameMorePlayed = newStreamer.gameMorePlayed.toUpperCase();
    }
    
    return newStreamer;
});

console.log(streamersEdit2);