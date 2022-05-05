/* Example 2: Exportando funciones entre scripts con CommonJS */
// ejecutar el siguiente comando en la terminal:
// node main.js

// logger.js

// Esta es una función que se guardará en este módulo como 'info'
exports.info = (message) => {
  console.log(`info: ${message}`)
}

// Esta es una función que se guardara en este módulo como 'verbose'
exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}

