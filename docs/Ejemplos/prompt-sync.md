Para que los retos sean interactivos y puedas introducir cualquier texto directamente desde tu terminal al ejecutarlo, puedes utilizar el módulo *[`prompt-sync`](https://www.npmjs.com/package/prompt-sync)*

Debe configurarse al inicio de tu archivo de la siguiente manera:

```javascript
// Importamos promptSync al inicio del archivo
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

// Almacenamos lo que el usuario escriba en la variable 'texto'
let texto = prompt("Escribe algo: ");

// Ejecutamos la función con la entrada del usuario
funcionEjemplo(texto);
```
