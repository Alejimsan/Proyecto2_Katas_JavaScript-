/*
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
Imprime en un console log el array resultante.
Puedes usar este array:
*/
const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravel.length; i++){
    if (placesToTravel[i].id == 11 || placesToTravel[i].id == 23){
        placesToTravel.splice(i,1);
    }
}
console.log(placesToTravel);

/* SI LOS DOS ELEMENTOS FUERAN CONSECUTIVOS, EL SEGUNDO ELEMENTO NO SE ELIMINARÍA PORQUE PASARÍA A ESTAR EN LA POSICION DEL ELEMENTO ELIMINADO, Y SE LO SALTARÍA EL BUCLE
SERÍA NECESARIO HACER EL BUCLE INVERSO:

for (let i = placesToTravel.length - 1; i >= 0; i--) {

*/