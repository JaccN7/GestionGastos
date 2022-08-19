const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

let fechayhora = new Date();
let fecha = fechayhora.getDate() + "/" + (fechayhora.getMonth() + 1) + "/" + fechayhora.getFullYear();
let hora = fechayhora.getHours() + ":" + fechayhora.getMinutes() + ":" + fechayhora.getSeconds();
let date = fecha + " " + hora;

//Importar rutas
const authUserWebRoutes = require('./routes/web/authUserWebRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Motor de plantillas - EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Carpeta publica / Archivos estaticos
app.use('/public', express.static(path.join(__dirname, './public')));

//Rutas API


//Rutas Web
app.use('/', authUserWebRoutes.routes);


//Establecer servidor
app.listen(PORT, () => {
    console.log(`Servidor ha iniciado correctamente\nRuta principal: >> http://localhost:${PORT} <<\n>> _____ DEBUG ${date} _____ <<\n ______________ ↓↓↓↓↓↓↓↓↓↓↓ ______________ \n\n`);
});
