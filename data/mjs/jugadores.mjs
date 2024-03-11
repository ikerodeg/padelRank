const JUGADORES_ARR = [
  {name: 'Ada Solsona', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Adrian Fery', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Agueda Alameda', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'Agustin Asis', level_init: 3.00, pg: 1, pp: 1, level_act: ''},
  {name: 'Agustin Gargallo', level_init: 3.25, pg: 0, pp: 2, level_act: ''},
  {name: 'Agustin Santos', level_init: 3.25, pg: 1, pp: 1, level_act: ''},
  {name: 'Alain Sanchez', level_init: 3.50, pg: 0, pp: 2, level_act: ''},
  {name: 'Albert Breteain', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Albert Herranz', level_init: 3.00, pg: 0, pp: 2, level_act: ''},
  {name: 'Alex Requera', level_init: 3.50, pg: 1, pp: 2, level_act: ''},
  {name: 'Alex Sile', level_init: 3.00, pg: 2, pp: 1, level_act: ''},
  {name: 'Alejandro Schlecht', level_init: 3.50, pg: 0, pp: 1, level_act: ''},
  {name: 'Alfonso Martin Duran', level_init: 3.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Alfredo Sanchez', level_init: 3.00, pg: 0, pp: 0, level_act: ''},
  {name: 'Altom Brive', level_init: 3.00, pg: 3, pp: 4, level_act: ''},
  {name: 'Amadeo Guzman', level_init: 3.25, pg: 2, pp: 0, level_act: ''},
  {name: 'Amador', level_init: 3.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Ana Bravo', level_init: 3.00, pg: 1, pp: 0, level_act: ''},
  {name: 'Ana Pastor', level_init: 3.00, pg: 1, pp: 1, level_act: ''},
  {name: 'Ana Ruiz', level_init: 2.75, pg: 4, pp: 0, level_act: ''},
  {name: 'Anna Venuto', level_init: 2.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Andres Lopez Amores', level_init: 3.25, pg: 1, pp: 3, level_act: ''},
  {name: 'Andreu Valdazo', level_init: 2.75, pg: 1, pp: 0, level_act: ''},
  {name: 'Andreu Landete', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Andreu Martinez', level_init: 3.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Antonio Cifuentes', level_init: 3.75, pg: 1, pp: 0, level_act: ''},
  {name: 'Antonio Fortunato', level_init: 3.00, pg: 4, pp: 2, level_act: ''},
  {name: 'Arturo Sanchez', level_init: 2.75, pg: 1, pp: 0, level_act: ''},
  {name: 'Barbara Torres Ventura', level_init: 3.00, pg: 0, pp: 0, level_act: ''},
  {name: 'Blanca Muñoz', level_init: 2.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Beatriz Sanz', level_init: 2.25, pg: 0, pp: 1, level_act: ''},
  {name: 'Borja Gonzalez', level_init: 3.25, pg: 2, pp: 4, level_act: ''},
  {name: 'Carla Gimeno', level_init: 3.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Carlos Clemente', level_init: 2.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Carlos Fortuño', level_init: 3.50, pg: 4, pp: 0, level_act: ''},
  {name: 'Carlos Perez', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'Carles Prats', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'César Ortuño', level_init: 3.50, pg: 5, pp: 1, level_act: ''},
  {name: 'Constan Sales', level_init: 3.50, pg: 4, pp: 1, level_act: ''},
  {name: 'Corina Adriana', level_init: 3.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Cosco Mayol Vicent', level_init: 3.25, pg: 0, pp: 1, level_act: ''},
  {name: 'Cristian Beivide', level_init: 3.50, pg: 0, pp: 1, level_act: ''},
  {name: 'Cristian Fernandez', level_init: 3.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Cristina Angel Tena', level_init: 3.00, pg: 0, pp: 1, level_act: ''},
  {name: 'Cristina Cardo', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'Cristina Tena', level_init: 3.00, pg: 1, pp: 0, level_act: ''},
  {name: 'Daniel Casanova', level_init: 3.00, pg: 0, pp: 2, level_act: ''},
  {name: 'David', level_init: 3.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Daniel Lionel', level_init: 3.00, pg: 1, pp: 0, level_act: ''},
  {name: 'Daniel Pomar', level_init: 3.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Daniel Queral', level_init: 3.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Daniel Rezban', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Daniela Olaru', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'David Gary', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'David Guerrero Morente', level_init: 3.25, pg: 0, pp: 0, level_act: ''},
  {name: 'David Segarra', level_init: 3.00, pg: 2, pp: 0, level_act: ''},
  {name: 'Diego Carrillo', level_init: 2.75, pg: 0, pp: 2, level_act: ''},
  {name: 'Diego Cuevas', level_init: 3.00, pg: 0, pp: 0, level_act: ''},
  {name: 'Ege Urel', level_init: 2.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Enrique Esteban', level_init: 3.25, pg: 1, pp: 3, level_act: ''},
  {name: 'Erwin Bir', level_init: 3.00, pg: 0, pp: 1, level_act: ''},
  {name: 'Fernando Moreno', level_init: 3.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Fernando Villena', level_init: 3.50, pg: 3, pp: 1, level_act: ''},
  {name: 'Ferran Gisbert', level_init: 2.75, pg: 4, pp: 1, level_act: ''},
  {name: 'Florin Catalin', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'Francisco Bayarri', level_init: 2.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Francisco Cuerda', level_init: 3.25, pg: 0, pp: 1, level_act: ''},
  {name: 'Fran Jimenez', level_init: 3.50, pg: 2, pp: 1, level_act: ''},
  {name: 'Francisco Ortiz', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Francho García', level_init: 3.00, pg: 1, pp: 0, level_act: ''},
  {name: 'Gabriel Ibiza', level_init: 2.75, pg: 3, pp: 1, level_act: ''},
  {name: 'Gabriel Vilar', level_init: 3.25, pg: 3, pp: 0, level_act: ''},
  {name: 'Guillermo Calarota', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'Hector Castillo', level_init: 3.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Hector Gil', level_init: 3.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Hector Vicente Sales', level_init: 3.00, pg: 2, pp: 1, level_act: ''},
  {name: 'Hernan Mahfuz', level_init: 2.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Hugo Gallego', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'Ignacio Aguilar Sancho', level_init: 2.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Ignacio Juan', level_init: 2.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Jani Espinosa', level_init: 3.00, pg: 0, pp: 1, level_act: ''},
  {name: 'Javier Cerrillo', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Javier Isidro', level_init: 3.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Javier Ferrer', level_init: 2.75, pg: 3, pp: 1, level_act: ''},
  {name: 'Javier Jimenez Espinosa', level_init: 3.00, pg: 1, pp: 3, level_act: ''},
  {name: 'Javier Navarro', level_init: 3.75, pg: 0, pp: 2, level_act: ''},
  {name: 'Jesus Rodriguez', level_init: 3.25, pg: 2, pp: 0, level_act: ''},
  {name: 'Joan Centelles', level_init: 3.25, pg: 0, pp: 2, level_act: ''},
  {name: 'Joan Piqueras', level_init: 3.50, pg: 4, pp: 0, level_act: ''},
  {name: 'John García', level_init: 3.50, pg: 2, pp: 0, level_act: ''},
  {name: 'Jonathan Cruces', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Jordi Centelles', level_init: 3.00, pg: 0, pp: 2, level_act: ''},
  {name: 'Jorge Montaña', level_init: 3.00, pg: 0, pp: 1, level_act: ''},
  {name: 'Jorge Perez', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Jose Requena', level_init: 3.25, pg: 0, pp: 2, level_act: ''},
  {name: 'Jose A. Rico', level_init: 3.50, pg: 0, pp: 1, level_act: ''},
  {name: 'Jose A. Sanchez Pascual', level_init: 3.50, pg: 1, pp: 5, level_act: ''},
  {name: 'Jose C. Ballester', level_init: 3.50, pg: 1, pp: 1, level_act: ''},
  {name: 'Jose I. Muñoz', level_init: 2.75, pg: 1, pp: 0, level_act: ''},
  {name: 'Jose L. Micola', level_init: 2.75, pg: 0, pp: 2, level_act: ''},
  {name: 'Jose M. Acevedo', level_init: 3.00, pg: 1, pp: 0, level_act: ''},
  {name: 'Jose M. Gomez', level_init: 3.00, pg: 1, pp: 1, level_act: ''},
  {name: 'Jose M. Muñoz', level_init: 3.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Jose M. Beivide', level_init: 3.00, pg: 4, pp: 1, level_act: ''},
  {name: 'Juanma Gomez', level_init: 3.25, pg: 0, pp: 2, level_act: ''},
  {name: 'Juan C. Custodio', level_init: 3.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Juan C. Gallego', level_init: 3.25, pg: 3, pp: 0, level_act: ''},
  {name: 'Juan C. Robledillo', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Juan C. Solsona', level_init: 3.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Juan F. Polo', level_init: 3.00, pg: 0, pp: 2, level_act: ''},
  {name: 'Juan R. Simo Bueno', level_init: 3.25, pg: 1, pp: 1, level_act: ''},
  {name: 'Julio Villuendas', level_init: 3.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Lucas Castell', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Luis Contreras', level_init: 2.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Luis Martín', level_init: 3.25, pg: 4, pp: 1, level_act: ''},
  {name: 'Luis Mestre', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Luisana Diaz', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Manuel Martinez', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Marc Santos', level_init: 3.00, pg: 0, pp: 2, level_act: ''},
  {name: 'Marcela Rotaru', level_init: 2.75, pg: 0, pp: 3, level_act: ''},
  {name: 'Maria Pilar Lopez', level_init: 3.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Marta Beri', level_init: 2.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Marina Andión', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Martina Gallar', level_init: 2.50, pg: 0, pp: 1, level_act: ''},
  {name: 'Melisa Roselló', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Miguel Aroca', level_init: 3.25, pg: 1, pp: 0, level_act: ''},
  {name: 'Miguel Balada', level_init: 3.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Miguel Gonzalez', level_init: 3.25, pg: 0, pp: 1, level_act: ''},
  {name: 'Miguel A. Robles', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Miguel A. Ibañez', level_init: 2.75, pg: 1, pp: 0, level_act: ''},
  {name: 'Mikel Gómez', level_init: 2.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Miquel Pitarch', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Monica Vilar Moreno', level_init: 3.00, pg: 0, pp: 1, level_act: ''},
  {name: 'Nacho Perez Pozo', level_init: 3.25, pg: 0, pp: 3, level_act: ''},
  {name: 'Nacho Martinez', level_init: 3.00, pg: 2, pp: 4, level_act: ''},
  {name: 'Narcisa Fernandez', level_init: 2.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Nicolás Alfaro', level_init: 2.75, pg: 3, pp: 1, level_act: ''},
  {name: 'Nicosur Tetesanu', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Nuria Lopez', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Olalla Viñals', level_init: 2.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Oliver Rodríguez', level_init: 3.25, pg: 3, pp: 0, level_act: ''},
  {name: 'Olivier Petit', level_init: 3.00, pg: 0, pp: 0, level_act: ''},
  {name: 'Oscar Baeza Segoviano', level_init: 3.00, pg: 1, pp: 1, level_act: ''},
  {name: 'Pablo Barrue', level_init: 2.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Pablo Esparza', level_init: 3.50, pg: 3, pp: 2, level_act: ''},
  {name: 'Pablo Quinteros', level_init: 2.50, pg: 0, pp: 0, level_act: ''},
  {name: 'Pablo Sevilla', level_init: 3.00, pg: 0, pp: 1, level_act: ''},
  {name: 'Pablo Valls', level_init: 3.25, pg: 2, pp: 1, level_act: ''},
  {name: 'Patricia Bastante', level_init: 3.50, pg: 0, pp: 1, level_act: ''},
  {name: 'Patricia Ortiz', level_init: 2.50, pg: 2, pp: 0, level_act: ''},
  {name: 'Patxi Barreda', level_init: 3.25, pg: 3, pp: 0, level_act: ''},
  {name: 'Pedro Cabrera', level_init: 3.50, pg: 2, pp: 0, level_act: ''},
  {name: 'Pedro Felip', level_init: 3.25, pg: 2, pp: 1, level_act: ''},
  {name: 'Pedro Izquierdo', level_init: 3.50, pg: 2, pp: 1, level_act: ''},
  {name: 'Pedro Soriano', level_init: 3.50, pg: 1, pp: 0, level_act: ''},
  {name: 'Pedro Tamborero', level_init: 3.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Pilar Talavera', level_init: 3.00, pg: 0, pp: 1, level_act: ''},
  {name: 'Rafael Ochando', level_init: 3.25, pg: 2, pp: 1, level_act: ''},
  {name: 'Rafael Osuna', level_init: 3.25, pg: 1, pp: 2, level_act: ''},
  {name: 'Raúl Collado', level_init: 3.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Raúl Contreras', level_init: 3.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Raúl Navarro', level_init: 3.75, pg: 1, pp: 2, level_act: ''},
  {name: 'Raúl Perez', level_init: 3.25, pg: 1, pp: 3, level_act: ''},
  {name: 'Raúl V. Ferrer', level_init: 3.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Ricardo Ángel', level_init: 2.75, pg: 0, pp: 1, level_act: ''},
  {name: 'Roberto Portolés', level_init: 3.75, pg: 1, pp: 0, level_act: ''},
  {name: 'Salvador Úbeda', level_init: 3.00, pg: 3, pp: 0, level_act: ''},
  {name: 'Santiago Vilanova', level_init: 3.25, pg: 0, pp: 0, level_act: ''},
  {name: 'Santos Colomer', level_init: 3.50, pg: 3, pp: 1, level_act: ''},
  {name: 'Sara Miñana', level_init: 3.00, pg: 1, pp: 1, level_act: ''},
  {name: 'Sergio Gellida Álvarez', level_init: 2.50, pg: 2, pp: 0, level_act: ''},
  {name: 'Sergio Sanbart', level_init: 3.00, pg: 0, pp: 0, level_act: ''},
  {name: 'Sergio Urenda', level_init: 3.25, pg: 0, pp: 1, level_act: ''},
  {name: 'Silvia Ramos Moliner', level_init: 3.00, pg: 1, pp: 2, level_act: ''},
  {name: 'Soraya Casares', level_init: 2.50, pg: 0, pp: 3, level_act: ''},
  {name: 'Tomas Marco Soriano', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Tomás Moreno', level_init: 3.50, pg: 0, pp: 4, level_act: ''},
  {name: 'Toni Valderrama', level_init: 3.50, pg: 1, pp: 7, level_act: ''},
  {name: 'Toni Villena', level_init: 2.75, pg: 1, pp: 1, level_act: ''},
  {name: 'Vicente Ribes', level_init: 3.25, pg: 2, pp: 4, level_act: ''},
  {name: 'Vicente Oms', level_init: 3.00, pg: 0, pp: 3, level_act: ''},
  {name: 'Victor Ortega', level_init: 3.00, pg: 5, pp: 1, level_act: ''},
  {name: 'Victor Pascual', level_init: 2.75, pg: 0, pp: 0, level_act: ''},
  {name: 'Iker Rodriguez', level_init: 3.00, pg: 9, pp: 1, level_act: ''},
];

export { JUGADORES_ARR }
