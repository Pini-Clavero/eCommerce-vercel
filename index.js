const app = require("./src/app")
const express = require("express");
const app = express();

const port = process.env.PORT || 3000

// LEVANTAMOS EL PUERTO
app.listen(port, () => {
    console.log('Servidor Corriendo en el Puerto 3000');
});

console.log('listen on port ${port}')