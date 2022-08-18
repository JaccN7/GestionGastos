const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Motor de plantillas - EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Carpeta publica / Archivos estaticos
app.use('/public', express.static(path.join(__dirname, './public')));




//Establecer servidor
app.listen(PORT, () => {
    console.log(`Servidor ha iniciado correctamente\nRuta principal: http://localhost:${PORT} \n###########################################################\n\n`);
});
