const mongoose = require('mongoose');
const config = require('./config');


const db = mongoose.connect(`mongodb+srv://${config.MONGO_ATLAS_USERNAME}:${config.MONGO_ATLAS_PW}@${config.MONGO_ATLAS_CLUSTER}/${config.MONGO_ATLAS_BD}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a Mongo Atlas'))
    .catch(err => console.log( 'Error al conectar a Mongo Atlas\n', err));

module.exports = db;