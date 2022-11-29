const express = require ('express')
const app = express();                                          
const path = require ('path')
const publicPth = path.resolve(__dirname, '../public');

const mainRouter = require('./routes/main.js');
const productRouter = require('./routes/products.js');
const userRouter = require('./routes/users.js');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookieParser = require('cookie-parser');
const rememberMiddleware = require("../src/middleware/rememberMiddleware");
const userLogged = require('../src/middleware/userLoggedMiddleware');

//definimos rutas estaticas
app.use(express.static(publicPth) );

//DEFINMOS MOTOR DE VISTAS EJES Y EL DIRECTORIO DONDE SE ENCUENTRAN
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs'); // esto para que era???

//CREAMOS LA SESSION
app.use(session({
    secret: 'Secreto',
    resave : false,
    saveUninitialized: false}
));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); // PaRA poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(cookieParser());
app.use(userLogged);
app.use(rememberMiddleware);
app.use(express.json());
app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);

module.exports = app;