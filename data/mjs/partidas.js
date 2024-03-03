'use strict';

// IMPORTAMOS LOS ARRAYS DE DATOS RESTANTES
import { nivelesArr } from "./niveles.js";
import { horasArr } from "./horas.js";
import { diasSemanaArr } from "./diasSemana.js";
import { JUGADORES } from './jugadores.js';
import { JUGADORES_COPIA } from './jugadores.js';
import { JUGADORES_PORNIVEL } from './jugadores.js';
import { filtraNivel_Func } from './jugadores.js';
import { agregarJugador_Func } from './jugadores.js';
import { PARTIDAS_ABIERTAS } from "./partidas_abiertas.js";

// Encapsulado de acceso a elementos en una función
function getElementById(id) {
  return document.getElementById(id);
}

// Encapsular el eventListener con un changeHandler global

class Partida {
  static contador = 1;
  
  constructor(numero) {
    this.PARTIDAS_ABIERTAS = PARTIDAS_ABIERTAS;
    this.numero = numero;
    this.diasSemanaArr = diasSemanaArr;
    this.horasArr = horasArr;
    this.nivelesArr = nivelesArr;
    this.JUGADORES_COPIA = JUGADORES_COPIA;
    this.filtraNivel_Func = filtraNivel_Func;
    this.NIVEL_SELECCIONADO = null;
    this.contadorPlayers = 0;
    this.collectedValues = {};
    this[`partidasIncompleta-${this.numero}`] = {};
    localStorage.setItem(`partidasIncompleta-${this.numero}`, JSON.stringify({}));
    this.createStructure();
    this.completaBoxDia();
    this.crearBoxHora();
    this.crearBoxNivel();
    this.crearBoxJugador1();
    this.crearBoxJugador2();
    this.crearBoxJugador3();
    this.crearBoxJugador4();
    this.crearStatus();
    this.crearBotonEliminar();
    this.crearBotonEnviar();
    this.actualizarEstado();
  }
  
  applySelectStyles(selectElement) {
    selectElement.style.backgroundColor = 'hsl(0,  0%,  0%)';
    selectElement.style.border = 'solid  1px orangered';
    selectElement.style.color = 'orangered';
    selectElement.style.textAlign = 'center';
  }

  createElement(typeElement, className, id = undefined) {
    const element = document.createElement(typeElement);
    element.className = className;
    element.id = id;
    return element;
  };
  
  createStructure() {
    // Crea el <section> y establece la clase
    this.section = this.createElement(`section`, `partidaNueva partidaNueva-${this.numero}`);
    // Crea la seccion de 'Dia'
    this.divBoxDia = this.createElement(`div`, `partida__box partida__box--dia-${this.numero}`);
    this.selectDia = this.createElement(`select`, `select select__diaSemana`, `diaSemana-${this.numero}`)
    // Crea la seccion de 'Hora'
    this.divBoxHora = this.createElement(`div`, `partida__box partida__box--hora-${this.numero}`);
    this.selectHora = this.createElement(`select`, `select select__hora`, `horas-${this.numero}`)
    // Crea la seccion de 'Nivel'
    this.divBoxNivel = this.createElement(`div`, `partida__box partida__box--nivel-${this.numero}`)
    this.selectNivel = this.createElement(`select`, `select select__nivel`, `niveles-${this.numero}`)
    // Crea la seccion de 'Jugador'
    this.divBoxJugador1 = this.createElement(`div`, `partida__box partida__box--jugador1-${this.numero}`)
    this.selectJugador1 = this.createElement(`select`, `select select__jugador1`, `jugador1-${this.numero}`);
    this.divBoxJugador2 = this.createElement(`div`, `partida__box partida__box--jugador2-${this.numero}`)
    this.selectJugador2 = this.createElement(`select`, `select select__jugador2`, `jugador2-${this.numero}`);
    this.divBoxJugador3 = this.createElement(`div`, `partida__box partida__box--jugador3-${this.numero}`)
    this.selectJugador3 = this.createElement(`select`, `select select__jugador3`, `jugador3-${this.numero}`);
    this.divBoxJugador4 = this.createElement(`div`, `partida__box partida__box--jugador4-${this.numero}`)
    this.selectJugador4 = this.createElement(`select`, `select select__jugador4`, `jugador4-${this.numero}`);
    //Crea la seccion 'Botones'
    this.divBoxButtons = this.createElement(`div`, `partida__box partida__box--buttons partida__box--buttons-${this.numero}`);

    // Añade los elementos al section
    this.section.appendChild(this.divBoxDia);
    this.divBoxDia.appendChild(this.selectDia);
    this.section.appendChild(this.divBoxHora);
    this.divBoxHora.appendChild(this.selectHora);
    this.section.appendChild(this.divBoxNivel);
    this.divBoxNivel.appendChild(this.selectNivel);
    this.section.appendChild(this.divBoxJugador1);
    this.divBoxJugador1.appendChild(this.selectJugador1);
    this.section.appendChild(this.divBoxJugador2);
    this.divBoxJugador2.appendChild(this.selectJugador2);
    this.section.appendChild(this.divBoxJugador3);
    this.divBoxJugador3.appendChild(this.selectJugador3);
    this.section.appendChild(this.divBoxJugador4);
    this.divBoxJugador4.appendChild(this.selectJugador4);
    this.section.appendChild(this.divBoxButtons);
  }

  completaBoxDia() {
    // Añade el option por default al <select>
    let optionDefault = document.createElement("option");
    optionDefault.value = 'seleccionaDia';
    optionDefault.innerHTML = '🔸 Selecciona Día';
    optionDefault.selected = true;

    // Añade el <option> al <select> 
    this.selectDia.add(optionDefault);

    //Crea un option por cada dia de la semana
    this.diasSemanaArr.forEach((dia) => {
      let optionDia = new Option(dia, dia.toLowerCase());
      this.selectDia.add(optionDia, undefined);
    });
    
    // Detecta una seleccion en el <select> y ejecuta la funcion
    this.selectDia.addEventListener('change', () => {
      const selectedDia = this.selectDia.value;
      console.log(`Día: ${selectedDia}`);
      localStorage.setItem(`diaSemana-${this.numero}`, this.selectDia.value);
      this.applySelectStyles(this.selectDia);
      if (localStorage.getItem(`diaSemana-${this.numero}`)) {
        this.selectDia.disabled = true;
      }
      let partidasGuardadasObj = JSON.parse(localStorage.getItem(`partidasIncompleta-${this.numero}`));
      partidasGuardadasObj.dia = selectedDia;
      console.log(partidasGuardadasObj);
      localStorage.setItem(`partidasIncompleta-${this.numero}`, JSON.stringify(partidasGuardadasObj));
    });

    // Cuando se carga la página, comprueba si hay algún valor guardado en localStorage para este elemento select
    let storedValue = localStorage.getItem(`diaSemana-${this.numero}`);
    if (storedValue) {
      this.selectDia.value = storedValue;
      this.selectDia.style.backgroundColor = 'hsl(0, 0%, 0%)';
      this.selectDia.style.border = 'solid 1px orangered';
      this.selectDia.style.color = 'orangered';
      this.selectDia.style.textAlign = 'center';
      this.selectDia.disabled = true;
    }
  }

  crearBoxHora() {
    //Crea el elemento <option> por default
    let optionDefault = document.createElement("option");
    optionDefault.value = 'seleccionaHora';
    optionDefault.innerHTML = '🔸 Selecciona Hora';
    optionDefault.selected = true;

    // Incluye el <option> dentro del <select>
    this.selectHora.appendChild(optionDefault);

    //Crea un option por cada hora
    this.horasArr.forEach((hora) => {
      let optionHora = new Option(hora);
      this.selectHora.add(optionHora, undefined);
    });
    
    // Detecta una seleccion en el <select> y ejecuta la funcion
    this.selectHora.addEventListener('change', () => {
      const selectedHora = this.selectHora.value;
      console.log(`Hora: ${selectedHora}`);
      localStorage.setItem(`horas-${this.numero}`, this.selectHora.value);
      this.applySelectStyles(this.selectHora);
      if (localStorage.getItem(`horas-${this.numero}`)) {
        this.selectHora.disabled = true;
      }
    });

    // Cuando se carga la página, comprueba si hay algún valor guardado en localStorage para este elemento select
    let storedValue = localStorage.getItem(`horas-${this.numero}`);
    if (storedValue) {
      this.selectHora.value = storedValue;
      this.selectHora.style.backgroundColor = 'hsl(0, 0%, 0%)';
      this.selectHora.style.border = 'solid 1px orangered';
      this.selectHora.style.color = 'orangered';
      this.selectHora.style.textAlign = 'center';
      this.selectHora.disabled = true;
    }
  }

  crearBoxNivel() {
    // Crea el elemento <option> por default
    let optionDefaultNivel = document.createElement("option");
    optionDefaultNivel.value = 'seleccionaNivel';
    optionDefaultNivel.innerHTML = '🔸 Selecciona Nivel';
    optionDefaultNivel.selected = true;

    // Añade el <option> al <select>
    this.selectNivel.add(optionDefaultNivel);

    // Itera sobre el array nivelesArr y crea los <option>
    nivelesArr.forEach(nivel => {
      // Crea un <option> en cada iteración
      const optionNivel = document.createElement('option');
      
      // Asigna el valor del nivel como el valor y el texto del option
      optionNivel.value = nivel;
      optionNivel.textContent = nivel;
      
      // Agrega el option al select
      this.selectNivel.add(optionNivel);
    });

    // Detecta una seleccion en el <select> y ejecuta la funcion
    this.selectNivel.addEventListener('change', () => {
      const NIVEL_SELECCIONADO = this.selectNivel.value;
      console.log(`Nivel: ${NIVEL_SELECCIONADO}`);

      // Guarda el localStorage el nivel selecionado
      localStorage.setItem(`niveles-${this.numero}`, this.selectNivel.value);

      // Cambia los estilos del <select>
      this.applySelectStyles(this.selectNivel);

      // Comprueba si se ha guardado la seleccion en localStorage
      if (localStorage.getItem(`niveles-${this.numero}`)) {
        this.selectNivel.disabled = true;
      }

      // Filtra la lista de jugadores por el nivel seleccionado
      const JUGADORES_ENRANGO = filtraNivel_Func(NIVEL_SELECCIONADO);

      // Convierte la lista de jugadores filtrados en un JSON
      const jugadoresFiltradosJSON = JSON.stringify(JUGADORES_ENRANGO);

      // Guarda el JSON en localStorage
      localStorage.setItem(`jugadoresFiltradosJSON-${this.numero}`, jugadoresFiltradosJSON)

      // Agrega los jugadores filtrados a los select de los jugadores
      JUGADORES_ENRANGO.forEach(jugador => {
        const optionJugador1 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador1.add(optionJugador1)
        const optionJugador2 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador2.add(optionJugador2)
        const optionJugador3 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador3.add(optionJugador3)
        const optionJugador4 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador4.add(optionJugador4)
      });

      
    });

    // Cuando se carga la página, comprueba si hay algún valor guardado en localStorage para este elemento select
    let storedValue = localStorage.getItem(`niveles-${this.numero}`);
    if (storedValue) {
      this.selectNivel.value = storedValue;
      this.selectNivel.style.backgroundColor = 'hsl(0, 0%, 0%)';
      this.selectNivel.style.border = 'solid 1px orangered';
      this.selectNivel.style.color = 'orangered';
      this.selectNivel.style.textAlign = 'center';
      this.selectNivel.disabled = true;
    }
    

  }

  crearBoxJugador1() {
    // Crea el elemento <option> por default
    let optionDefault = document.createElement("option");
    optionDefault.value = 'seleccionaJugador1';
    optionDefault.innerHTML = '🔸 Selecciona Jugador 1';
    optionDefault.selected = true;

    // Añade el <option> por default al <select>
    this.selectJugador1.add(optionDefault)
    if ((this.selectJugador1.length == 1) && (this.selectNivel.disabled == true)) {
      console.log(`Cantidad de Options igual a 1`);
      console.log(`Select Nivel desabilitado`);
      const JUGADORES_JSON = JSON.parse(localStorage.getItem(`jugadoresFiltradosJSON-${this.numero}`))
      JUGADORES_JSON.forEach(jugador => {
        const optionJugador1 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador1.add(optionJugador1)
      });
    }

    // Detecta una seleccion en el <select> y ejecuta la funcion
    this.selectJugador1.addEventListener('change', () => {
      const selectedJugador1 = this.selectJugador1.value;
      console.log(`Jugador 1: ${selectedJugador1}`);
      localStorage.setItem(`jugador1-${this.numero}`, this.selectJugador1.value);
      this.applySelectStyles(this.selectJugador1);
      if (localStorage.getItem(`jugador1-${this.numero}`)) {
        this.selectJugador1.disabled = true;
      }
      this.actualizarEstado();
      if ((this.selectJugador1.disabled) == true) {
        localStorage.setItem(`countPlayer1-${this.numero}`, true);
      }
    });

    // Cuando se carga la página, comprueba si hay algún valor guardado en localStorage para este elemento select
    let storedValue = localStorage.getItem(`jugador1-${this.numero}`);
    if (storedValue) {
      this.selectJugador1.value = storedValue;
      this.selectJugador1.style.backgroundColor = 'hsl(0, 0%, 0%)';
      this.selectJugador1.style.border = 'solid 1px orangered';
      this.selectJugador1.style.color = 'orangered';
      this.selectJugador1.style.textAlign = 'center';
      this.selectJugador1.disabled = true;
    }

  }

  crearBoxJugador2() {
    // Crea el elemento <option> por default
    let optionDefault = document.createElement("option");
    optionDefault.value = 'seleccionaJugador2';
    optionDefault.innerHTML = '🔸 Selecciona Jugador 2';
    optionDefault.selected = true;

    // Añade el <option> por default al <select>
    this.selectJugador2.add(optionDefault)
    if ((this.selectJugador2.length == 1) && (this.selectNivel.disabled == true)) {
      console.log(`Cantidad de Options igual a 1`);
      console.log(`Select Nivel desabilitado`);
      const JUGADORES_JSON = JSON.parse(localStorage.getItem(`jugadoresFiltradosJSON-${this.numero}`))
      JUGADORES_JSON.forEach(jugador => {
        const optionJugador2 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador2.add(optionJugador2)
      });
    }

    // Detecta una seleccion en el <select> y ejecuta la funcion
    this.selectJugador2.addEventListener('change', () => {
      const selectedJugador2 = this.selectJugador2.value;
      console.log(`Jugador 2: ${selectedJugador2}`);
      localStorage.setItem(`jugador2-${this.numero}`, this.selectJugador2.value);
      this.applySelectStyles(this.selectJugador2);
      if (localStorage.getItem(`jugador2-${this.numero}`)) {
        this.selectJugador2.disabled = true;
      }
      this.actualizarEstado();
      if ((this.selectJugador2.disabled) == true) {
        localStorage.setItem(`countPlayer2-${this.numero}`, true);
      }
    });

    // Cuando se carga la página, comprueba si hay algún valor guardado en localStorage para este elemento select
    let storedValue = localStorage.getItem(`jugador2-${this.numero}`);
    if (storedValue) {
      this.selectJugador2.value = storedValue;
      this.selectJugador2.style.backgroundColor = 'hsl(0, 0%, 0%)';
      this.selectJugador2.style.border = 'solid 1px orangered';
      this.selectJugador2.style.color = 'orangered';
      this.selectJugador2.style.textAlign = 'center';
      this.selectJugador2.disabled = true;
    }

  }

  crearBoxJugador3() {
    // Crea el elemento <option> por default
    let optionDefault = document.createElement("option");
    optionDefault.value = 'seleccionaJugador3';
    optionDefault.innerHTML = '🔸 Selecciona Jugador 3';
    optionDefault.selected = true;

    // Añade el <option> por default al <select>
    this.selectJugador3.add(optionDefault)
    if ((this.selectJugador3.length == 1) && (this.selectNivel.disabled == true)) {
      console.log(`Cantidad de Options igual a 1`);
      console.log(`Select Nivel desabilitado`);
      const JUGADORES_JSON = JSON.parse(localStorage.getItem(`jugadoresFiltradosJSON-${this.numero}`))
      JUGADORES_JSON.forEach(jugador => {
        const optionJugador3 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador3.add(optionJugador3)
      });
    }

    // Detecta una seleccion en el <select> y ejecuta la funcion
    this.selectJugador3.addEventListener('change', () => {
      const selectedJugador3 = this.selectJugador3.value;
      console.log(`Jugador 3: ${selectedJugador3}`);
      localStorage.setItem(`jugador3-${this.numero}`, this.selectJugador3.value);
      this.applySelectStyles(this.selectJugador3);
      if (localStorage.getItem(`jugador3-${this.numero}`)) {
        this.selectJugador3.disabled = true;
      };
      this.actualizarEstado();
      if ((this.selectJugador3.disabled) == true) {
        localStorage.setItem(`countPlayer3-${this.numero}`, true);
      }
    });

    // Cuando se carga la página, comprueba si hay algún valor guardado en localStorage para este elemento select
    let storedValue = localStorage.getItem(`jugador3-${this.numero}`);
    if (storedValue) {
      this.selectJugador3.value = storedValue;
      this.selectJugador3.style.backgroundColor = 'hsl(0, 0%, 0%)';
      this.selectJugador3.style.border = 'solid 1px orangered';
      this.selectJugador3.style.color = 'orangered';
      this.selectJugador3.style.textAlign = 'center';
      this.selectJugador3.disabled = true;
    }

  }

  crearBoxJugador4() {
    // Crea el elemento <option> por default
    let optionDefault = document.createElement("option");
    optionDefault.value = 'seleccionaJugador4';
    optionDefault.innerHTML = '🔸 Selecciona Jugador 4';
    optionDefault.selected = true;

    // Añade el <option> por default al <select>
    this.selectJugador4.add(optionDefault)
    if ((this.selectJugador4.length == 1) && (this.selectNivel.disabled == true)) {
      console.log(`Cantidad de Options igual a 1`);
      console.log(`Select Nivel desabilitado`);
      const JUGADORES_JSON = JSON.parse(localStorage.getItem(`jugadoresFiltradosJSON-${this.numero}`))
      JUGADORES_JSON.forEach(jugador => {
        const optionJugador4 = new Option(`${jugador.name} ${jugador.surname} - ${jugador.level}`)
        this.selectJugador4.add(optionJugador4)
      });
    }

    // Detecta una seleccion en el <select> y ejecuta la funcion
    this.selectJugador4.addEventListener('change', () => {
      const selectedJugador4 = this.selectJugador4.value;
      console.log(`Jugador 4: ${selectedJugador4}`);
      localStorage.setItem(`jugador4-${this.numero}`, this.selectJugador4.value);
      this.applySelectStyles(this.selectJugador4);
      if (localStorage.getItem(`jugador4-${this.numero}`)) {
        this.selectJugador4.disabled = true;
      };
      this.actualizarEstado();
      if ((this.selectJugador4.disabled) == true) {
        localStorage.setItem(`countPlayer4-${this.numero}`, true);
      }
    });

    // Cuando se carga la página, comprueba si hay algún valor guardado en localStorage para este elemento select
    let storedValue = localStorage.getItem(`jugador4-${this.numero}`);
    if (storedValue) {
      this.selectJugador4.value = storedValue;
      this.selectJugador4.style.backgroundColor = 'hsl(0, 0%, 0%)';
      this.selectJugador4.style.border = 'solid 1px orangered';
      this.selectJugador4.style.color = 'orangered';
      this.selectJugador4.style.textAlign = 'center';
      this.selectJugador4.disabled = true;
    }

  }

  crearStatus() {
    this.divBoxStatus = document.createElement("div");
    this.divBoxStatus.className = `partida__box partida__box--status partida__box--status-${this.numero}`;
   
    this.pStatus = document.createElement("p");
    this.pStatus.className = `status__text status__text-${this.numero}`;
   
    this.spanIcon = document.createElement("span");
    this.spanIcon.className = `status__icon status__icon-${this.numero}`;
    this.spanIcon.innerHTML = '🟢🔓'; // Valor inicial del icono
   
    this.pStatus.innerHTML = 'ESTADO: ';
    this.pStatus.appendChild(this.spanIcon);
    this.divBoxStatus.appendChild(this.pStatus);
    this.section.appendChild(this.divBoxStatus);
  }

  crearBotonEliminar() {
    this.botonEliminar = document.createElement("button");
    this.botonEliminar.className = `eliminar__button eliminar__button-${this.numero}`;
    this.botonEliminar.innerHTML = 'Eliminar';
    this.divBoxButtons.appendChild(this.botonEliminar);
    this.botonEliminar.addEventListener('click', () => {
      localStorage.removeItem(`diaSemana-${this.numero}`);
      localStorage.removeItem(`horas-${this.numero}`);
      localStorage.removeItem(`niveles-${this.numero}`);
      localStorage.removeItem(`jugador1-${this.numero}`);
      localStorage.removeItem(`jugador2-${this.numero}`);
      localStorage.removeItem(`jugador3-${this.numero}`);
      localStorage.removeItem(`jugador4-${this.numero}`);
      localStorage.removeItem(`countPlayer1-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`countPlayer2-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`countPlayer3-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`countPlayer4-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`partidaCompleta-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`jugadoresFiltradosJSON-${this.numero}`)
      this.section.remove();
      console.clear();
    });
  }

  crearBotonEnviar() {
    this.botonEnviar = document.createElement("button");
    this.botonEnviar.className = `enviar__button enviar__button-${this.numero}`;
    this.botonEnviar.innerHTML = 'Enviar';
    this.botonEnviar.style.opacity = 0;
    this.divBoxButtons.appendChild(this.botonEnviar);
    this.botonEnviar.addEventListener('click', () => {
      //localStorage.setItem('contadorPartidas', --Partida.contador);
      localStorage.removeItem('partidaNumero', Partida.contador);
      localStorage.removeItem(`diaSemana-${this.numero}`);
      localStorage.removeItem(`horas-${this.numero}`);
      localStorage.removeItem(`niveles-${this.numero}`);
      localStorage.removeItem(`jugador1-${this.numero}`);
      localStorage.removeItem(`jugador2-${this.numero}`);
      localStorage.removeItem(`jugador3-${this.numero}`);
      localStorage.removeItem(`jugador4-${this.numero}`);
      localStorage.removeItem(`countPlayer1-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`countPlayer2-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`countPlayer3-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`countPlayer4-${this.numero}`)
      this.section.remove();
      localStorage.removeItem(`jugadoresFiltradosJSON-${this.numero}`)
      this.section.remove();
    });
  }

  actualizarEstado() {
    if (((localStorage.getItem(`countPlayer1-${this.numero}`)) && (localStorage.getItem(`countPlayer2-${this.numero}`)) && (localStorage.getItem(`countPlayer3-${this.numero}`)) && (localStorage.getItem(`countPlayer4-${this.numero}`))) || (this.selectJugador1.disabled) && (this.selectJugador2.disabled) && (this.selectJugador3.disabled) && (this.selectJugador4.disabled)) {
       this.spanIcon.innerHTML = '🔴🔒'; // Verde
       this.showMeButton();
      } else {
        this.spanIcon.innerHTML = '🟢🔓'; // Rojo
        this.botonEnviar.style.opacity = 0;
      }
  }
    
  showMeButton() {
    const bontonEnviar = document.getElementsByClassName(`enviar__button-${this.numero}`)
    this.botonEnviar.style.opacity = 1;
    // Coloca los datos guardados dentro de collectedValues
    this.collectedValues.partidaNumero = localStorage.getItem(`partidaNumero`);
    this.collectedValues.diaSemana = localStorage.getItem(`diaSemana-${this.numero}`);
    this.collectedValues.hora = localStorage.getItem(`horas-${this.numero}`);
    this.collectedValues.nivel = localStorage.getItem(`niveles-${this.numero}`);
    this.collectedValues.jugador1 = localStorage.getItem(`jugador1-${this.numero}`);
    this.collectedValues.jugador2 = localStorage.getItem(`jugador2-${this.numero}`);
    this.collectedValues.jugador3 = localStorage.getItem(`jugador3-${this.numero}`);
    this.collectedValues.jugador4 = localStorage.getItem(`jugador4-${this.numero}`);
    this.collectedValuesJSON = JSON.stringify(this.collectedValues);
    console.log(this.collectedValuesJSON);
    localStorage.setItem(`partidaCompleta-${this.numero}`, this.collectedValuesJSON);
  }

}

/* ESTO FUNCIONA BIEN
// BOTON CREAR PARTIDA
const buttonCrearPartida = getElementById('crearPartidaBtn');
buttonCrearPartida.addEventListener("click", () => {
  const nuevaPartida = new Partida(Partida.contador++);
  const mainElement = document.querySelector("#partidasContainer");
  mainElement.appendChild(nuevaPartida.section);
  
  localStorage.setItem('partidaNumero', Partida.contador);

  //al pulsar el boton crear partida, tambien se creará un objeto en PARTIDAS_ABIERTAS con el numero partida y los select, se añadiran a cada propiedad del objeto: 
});
*/

// Botón crear partida
const buttonCrearPartida = getElementById('crearPartidaBtn');
buttonCrearPartida.addEventListener("click", () => {
  const nuevaPartida = new Partida(Partida.contador++);
  const mainElement = document.querySelector("#partidasContainer");
  mainElement.appendChild(nuevaPartida.section);
  
  PARTIDAS_ABIERTAS.id = `${Partida.contador++}${fechaFormateada}`;
  console.table(PARTIDAS_ABIERTAS);

  //al pulsar el boton crear partida, tambien se creará un objeto en PARTIDAS_ABIERTAS con el numero partida y los select, se añadiran a cada propiedad del objeto: 
});


//verifica si hay algún número de partida guardado en localStorage
//modificar para que busque en un map de partidas para cargarlo.
//crear un archivo js para guardar partidas abiertas y cerradas y usar import export
window.addEventListener("load", function() {
  let contadorGuardado = localStorage.getItem('partidaNumero');
  if (contadorGuardado) {
     for (let i = 0; i < contadorGuardado; i++) {
       let nuevaPartida = new Partida(i);
       let mainElement = document.querySelector("#partidasContainer");
       mainElement.appendChild(nuevaPartida.section);
     }
     Partida.contador = parseInt(contadorGuardado);
  }
});

// BOTÓN DE BORRADO DE LOCALSTORAGE Y PARTIDAS
const buttonBorrar = getElementById('borrarLocalStorage');
buttonBorrar.addEventListener('click', () => {
  const allSections = document.querySelectorAll('section');
  allSections.forEach((section) => {
    section.remove();
  });
  localStorage.clear();
  location.reload();
});


// ------------------ IDPARTIDA -----------------------
// Obtener la fecha actual
const fechaActual = new Date();

// Extraer el día, mes y año
const dia = fechaActual.getDate(); // Día del mes
const mes = fechaActual.getMonth() + 1; // getMonth() devuelve un índice basado en cero, por lo tanto, sumamos 1
const año = fechaActual.getFullYear();

// Formatear la fecha como "ddmmyyyy"
// Asegurándose de que el día y el mes sean siempre dos dígitos
const fechaFormateada = `${Partida.contador}${dia.toString().padStart(2, '0')}${mes.toString().padStart(2, '0')}${año}`;

console.log(fechaFormateada); // Muestra la fecha como "ddmmyyyy", por ejemplo, "21022024" para el 21 de febrero de 2024
