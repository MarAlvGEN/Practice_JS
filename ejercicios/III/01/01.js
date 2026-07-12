// Importamos promptSync al inicio del archivo
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

// Almacenamos lo que el usuario escriba en la variable 'texto'
let texto = prompt("Escribe algo: ");

// Ejecutamos la función con la entrada del usuario
inventariosPalabras(texto);

function inventariosPalabras(param) {
  console.log("hola mundo");
}
