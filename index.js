const app = require("./src/app")
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Servidor Corriendo en el Puerto 3000');
});
