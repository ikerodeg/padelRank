import { JUGADORES_ARR } from '../../data/mjs/jugadores.mjs';

// Declarar colores por nivel
const coloresPorNivel = {
  '4.26-7.00': 'hsla(0, 100%, 50%, 0.3)',
  '4.01-4.25': 'hsla(186, 100%, 50%, 0.35)',
  '3.76-4.00': 'hsla(360, 100%, 50%, 0.3)',
  '3.51-3.75': 'hsla(246, 55%, 50%, 0.4)',
  '3.26-3.50': 'hsla(124, 100%, 50%, 0.2)',
  '3.00-3.25': 'hsla(120, 100%, 50%, 0.1)',
  '2.76-2.99': 'hsla(0, 0%, 90%, 0.3)',
  '2.51-2.75': 'hsla(0, 0%, 50%, 0.3)',
  '2.26-2.50': 'hsla(0, 0%, 20%, 0.4)',
  '2.00-2.25': 'hsla(0, 0%, 0%, 0.3)',
};

// Cambia colores de celda por Nivel
function cambiarFondoPorNivel(fila) {
  // Selecciona las celdas de las columnas 3 y 6
  const celdasNivel = fila.querySelectorAll('td:nth-child(6)');
 
  celdasNivel.forEach(celda => {
     const nivel = parseFloat(celda.innerText.replace(',', '.'));
 
     for (const rango in coloresPorNivel) {
       const [rangoInferior, rangoSuperior] = rango.split('-').map(parseFloat);
 
       if ((rangoInferior === undefined || nivel >= rangoInferior) &&
           (rangoSuperior === undefined || nivel <= rangoSuperior)) {
         celda.style.backgroundColor = coloresPorNivel[rango];
         break;
       }
     }
  });
}

// Ordena el array de jugadores por nombre
JUGADORES_ARR.sort((a, b) => a.name.localeCompare(b.name))

// Crea la tabla y rellena con jugadores
 function crearTablaJugadores(jugadores) {
  const tabla = document.getElementById('tabla-jugadores');
  tabla.style.inline-size = '70vw';
  let posicion = 1;
 
  // Calcula el nivel actual para cada jugador antes de ordenar
  jugadores.forEach(jugador => {
     jugador.level_act = jugador.level_init + (jugador.pg * 0.03) - (jugador.pp * 0.03);
  });

  // Recorre los jugadores y los agrega a la tabla:
  jugadores.forEach(jugador => {
     const fila = document.createElement('tr');
     fila.innerHTML = `
       <td>${posicion}</td>
       <td>${jugador.name}</td>
       <td>${jugador.level_init.toFixed(2)}</td>
       <td>${jugador.pg}</td>
       <td>${jugador.pp}</td>
       <td>${jugador.level_act.toFixed(2)}</td>
     `;

     // Aplica text-shadow verde si pg es igual o superior a 5
    if (jugador.pg >= 5) {
      fila.cells[3].style.textShadow = '0 0 5px green';
    }

    if (jugador.pp >= 5) {
      fila.cells[4].style.textShadow = '0 0 5px red';
    }
 
     tabla.tBodies[0].appendChild(fila);
     posicion++;
     cambiarFondoPorNivel(fila);
  });
}

// Ejecuta la función que crea la tabla
crearTablaJugadores(JUGADORES_ARR);

// ----- BOTONES ORDENACIÓN ------ //

// Objeto para mapear los criterios de ordenamiento a las funciones de ordenamiento
const criteriosOrdenamiento = {
  ni: (a, b) => b.level_init - a.level_init, // Ordenar por NA de mayor a menor
  pp: (a, b) => a.pp - b.pp, // Ordenar por PP de mayor a menor
  pg: (a, b) => b.pg - a.pg, // Ordenar por PG de mayor a menor
  na: (a, b) => b.level_act - a.level_act, // Ordenar por NA de mayor a menor
  nombre: (a, b) => a.name.localeCompare(b.name), // Ordenar por Nombre
 };
 
 // Función genérica para manejar el evento de clic en los botones de ordenamiento
 const ordenarTabla = (criterio) => {
  const cuerpoTabla = document.getElementById('cuerpo-tabla');
  cuerpoTabla.innerHTML = '';
  let jugadores = JUGADORES_ARR.slice();
 
  // Utiliza el objeto para obtener la función de ordenamiento correspondiente
  const ordenar = criteriosOrdenamiento[criterio];
  jugadores.sort(ordenar);
 
  crearTablaJugadores(jugadores);
 };
 
 // Event listeners para los botones de ordenamiento
 document.getElementById('or_pp').addEventListener('click', () => ordenarTabla('pp'));
 document.getElementById('or_pg').addEventListener('click', () => ordenarTabla('pg'));
 document.getElementById('or_na').addEventListener('click', () => ordenarTabla('na'));
 document.getElementById('or_ni').addEventListener('click', () => ordenarTabla('ni'));
 document.getElementById('or_name').addEventListener('click', () => ordenarTabla('nombre'));

 // Muestra el mes actual
 window.onload = function() {
  var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  document.getElementById("mes").innerHTML = months[new Date().getMonth()];
 }
 
