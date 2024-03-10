import { JUGADORES_ARR } from '../../data/mjs/jugadores.mjs';

// Declarar colores por nivel
const coloresPorNivel = {
  '4.25-7.00': 'hsla(0, 100%, 50%, 0.3)',
  '4.00-4.24': 'hsla(186, 100%, 50%, 0.35)',
  '3.75-3.99': 'hsla(360, 100%, 50%, 0.3)',
  '3.50-3.74': 'hsla(246, 55%, 50%, 0.4)',
  '3.25-3.49': 'hsla(124, 100%, 50%, 0.2)',
  '3.00-3.24': 'hsla(120, 100%, 50%, 0.1)',
  '2.75-2.99': 'hsla(0, 0%, 90%, 0.3)',
  '2.50-2.74': 'hsla(0, 0%, 50%, 0.3)',
  '2.25-2.49': 'hsla(0, 0%, 20%, 0.4)',
  '2.00-2.24': 'hsla(0, 0%, 0%, 0.3)',
};

// Cambia colores de celda por Nivel
function cambiarFondoPorNivel(fila) {
  // Selecciona las celdas de las columnas 3 y 6
  const celdasNivel = fila.querySelectorAll('td:nth-child(7)');
 
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
  let posicion = 1;
 
  // Calcula el nivel actual para cada jugador antes de ordenar
  jugadores.forEach(jugador => {
     jugador.level_act = jugador.level_init + (jugador.pg * 0.03) - (jugador.pp * 0.03);
  });

  // Calcula los partidos jugados para cada jugador antes de ordenar
  jugadores.forEach(jugador => {
    jugador.pj = jugador.pg + jugador.pp;
  });

  // Calcula el ratio victorias
  jugadores.forEach(jugador => {
    if ((jugador.pj > 0) && (jugador.pg > 0)) {
      jugador.ra = Math.trunc((jugador.pg / jugador.pj) * 100) + '%';
    } else {
      jugador.ra = 0 + '%';
    }
  });

  // Recorre los jugadores y los agrega a la tabla:
  jugadores.forEach(jugador => {
    if (jugador.pj != 0) {
     const fila = document.createElement('tr');
     fila.innerHTML = `
       <td>${jugador.name}</td>
       <td>${jugador.level_init.toFixed(2)}</td>
       <td>${jugador.pj}</td>
       <td>${jugador.pg}</td>
       <td>${jugador.pp}</td>
       <td>${jugador.ra}</td>
       <td>${jugador.level_act.toFixed(2)}</td>
     `;

     // Aplica text-shadow verde si pg es igual o superior a 5
    if (jugador.pg >= 10) {
      fila.cells[3].style.textShadow = '0 0 2px green';
      fila.cells[3].style.textShadow = '0 0 5px hsl(122, 100%, 74%)';
      fila.cells[3].style.textShadow = '0 0 10px hsl(122, 100%, 74%)';
    }

    // Aplica text-shadow rojo si pp es igual o superior a 5
    if (jugador.pp >= 5) {
      fila.cells[4].style.textShadow = '0 0 5px red';
    }
    // Aplica text-shadow rojo si pj es igual a 0
    if (jugador.pj == 0) {
      fila.cells[2].style.textShadow = '0 0 5px red';
    }

    // Aplica text-shadow blanco si pj es mayor a 10
    if (jugador.pj >= 10) {
      fila.cells[2].style.textShadow = '0 0 5px grey';
    }

    //Aplica color segun porcentaje de victorias
    const colorByPercentage = {
      '100': () => 'hsl(122, 100%, 74%)',
      '81-99': () => 'hsl(194, 100%, 74%, 0.9)',
      '51-80': () => 'hsl(57, 100%, 70%, 0.8)',
      '50': () => 'hsl(0, 0%, 80%)',
      '1-49': () => 'hsl(0, 100%, 85%)',
      '0': () => 'hsla(0, 100%, 70%, 0.999)'
     };
     
     function getColorByPercentage(percentage) {
      if (percentage === 100) return colorByPercentage['100']();
      if (percentage >= 80 && percentage < 100) return colorByPercentage['81-99']();
      if (percentage > 50 && percentage < 80) return colorByPercentage['51-80']();
      if (percentage === 50) return colorByPercentage['50']();
      if (percentage > 0 && percentage < 50) return colorByPercentage['1-49']();
      if (percentage === 0) return colorByPercentage['0']();
     }
     
     const ra = parseInt(jugador.ra, 10);
     fila.cells[5].style.color = getColorByPercentage(ra);
     

 
     tabla.tBodies[0].appendChild(fila);
     posicion++;
     cambiarFondoPorNivel(fila);
    };
  });
}

// Ejecuta la función que crea la tabla
crearTablaJugadores(JUGADORES_ARR);

// ----- BOTONES ORDENACIÓN ------ //

// Objeto para mapear los criterios de ordenamiento a las funciones de ordenamiento
const criteriosOrdenamiento = {
  ni: (a, b) => b.level_init - a.level_init, // Ordenar por NA de mayor a menor
  pj: (a, b) => b.pj - a.pj, // Ordenar por PP de mayor a menor
  pp: (a, b) => a.pp - b.pp, // Ordenar por PP de mayor a menor
  pg: (a, b) => b.pg - a.pg, // Ordenar por PG de mayor a menor
  ra: (a, b) => {
    // Extrae el valor numérico de la cadena y elimina el símbolo "%"
    const valorA = parseInt(a.ra, 10);
    const valorB = parseInt(b.ra, 10);
    // Ordena por RAtio de mayor a menor
    return valorB - valorA;
  },
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
 document.getElementById('or_pj').addEventListener('click', () => ordenarTabla('pj'));
 document.getElementById('or_pp').addEventListener('click', () => ordenarTabla('pp'));
 document.getElementById('or_pg').addEventListener('click', () => ordenarTabla('pg'));
 document.getElementById('or_na').addEventListener('click', () => ordenarTabla('na'));
 document.getElementById('or_ni').addEventListener('click', () => ordenarTabla('ni'));
 document.getElementById('or_ra').addEventListener('click', () => ordenarTabla('ra'));
 document.getElementById('or_name').addEventListener('click', () => ordenarTabla('nombre'));

 // Muestra el mes actual
 window.onload = function() {
  var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  document.getElementById("mes").innerHTML = months[new Date().getMonth()];
 }
 