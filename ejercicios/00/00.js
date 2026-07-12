import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

let texto = prompt("Escribe algo: ");

// MAIN
analizarCadena(texto);

// Funciones

// Parte 0 : Requisito analizar cadena
function analizarCadena(texto) {
  // Utilizo replaceAll para poder quitar todos los espacios del texto, luego llamo a la propiedad lenght para contar la cantidad de caractares;
  let textoLenSinEspacios = texto.replaceAll(" ", "").length;

  let vocales = ["a", "e", "i", "o", "u"];
  let totalVocales = 0;
  let textoAux = texto.replaceAll(" ", "").toLowerCase();

  for (const iterator of textoAux) {
    if (vocales.includes(iterator)) {
      totalVocales++;
    }
  }

  let textoRepetido = {};
  let charMasRepetido;
  let charAux = 0;
  for (const iterator of texto) {
    textoRepetido[iterator] = (textoRepetido[iterator] || 0) + 1;

    if (textoRepetido[iterator] > charAux) {
      charAux = textoRepetido[iterator];
      charMasRepetido = iterator;
    }
  }

  // Requisito
  console.log(
    `El texto (Sin espacios) tiene un total de ${textoLenSinEspacios} caractares`,
  );
  console.log(`El texto tiene un total de ${totalVocales} vocales`);

  if (charAux == 1) {
    console.log("No hubo repetidos");
  } else {
    console.log(
      `El caracter más repetido es "${charMasRepetido}" con un total de "${charAux}" repeticiones`,
    );
  }
}
