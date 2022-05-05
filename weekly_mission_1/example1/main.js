/**Example 1: Objetos de JS */
// ejecutar el siguiente comando en la terminal:
// node main.js

// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log('Valor de "my Car": ', myCar) // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {

  // Variables de contexto local
  const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
  const privateBar = [1,2,3,4]
  const baz = "Soy un valor que va a ser expuesto"

  // Variable para guardar las variables públicas
  const exported = {
    publicFoo: "Valor público, pueden verme desde donde me llamen",
    publicBar: "Otro valor público",
    publicBaz: baz
  }

  // Exposición de variables públicas
  return exported
})()

console.log(myModule)