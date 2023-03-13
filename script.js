function incrementarContador(color, contadores) {
  contadores[color]++;
}

function esProgresivo(clausula) {
  return clausula === "progresivo";
}

function generarTablero(tablero, texto, columnas, filas, clausula) {
  const contadores = { azul: 0, rojo: 0 };
  for (let columna = 0; columna < columnas; columna++) {
    const conjunto = document.createElement("div");
    conjunto.classList.add("columna");
    for (let fila = 0; fila < filas; fila++) {
      const casilla = document.createElement("div");
      casilla.classList.add("casilla");
      const seleccion = esProgresivo(clausula) ?
        (fila < columna) :
        (columna >= columnas / 2) ?
          (fila <= columna) :
          (fila < columna)
      const color = seleccion ? "azul" : "rojo";
      casilla.classList.add(color);
      incrementarContador(color, contadores);
      conjunto.appendChild(casilla);
    }

    tablero.appendChild(conjunto);
  }

  texto.textContent = `ROJAS: ${contadores.rojo} - AZULES: ${contadores.azul}`;
}

// Generar los tableros
generarTablero(document.getElementById("tablero"), document.getElementById("texto"), 8, 8, 'progresivo');
generarTablero(document.getElementById("tablero1"), document.getElementById("texto1"), 8, 8, 'centro');
generarTablero(document.getElementById("tablero2"), document.getElementById("texto2"), 9, 8, 'progresivo');