import { JUGADORES_ARR } from "../../data/mjs/jugadores.mjs";
import fs from 'fs';

const jugadores = [
  {name: 'Iker', level: 3.25},
  {name: 'Eder', level: 3.00},
];

try {
const data = JSON.stringify(jugadores, null, 2); // Convertir el array a JSON con formato
fs.writeFileSync('jugadores.json', data, 'utf8'); // Guardar en un archivo
console.log('Los datos se guardaron correctamente en jugadores.json');
} catch (error) {
console.error('Ocurrió un error al guardar los datos:', error);
}
 