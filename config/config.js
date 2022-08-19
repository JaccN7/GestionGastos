const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    JWT_KEY,
    MONGO_ATLAS_USERNAME,
    MONGO_ATLAS_PW,
    MONGO_ATLAS_BD,
    MONGO_ATLAS_CLUSTER,
    SECRET_KEY
} = process.env;

assert(PORT, 'PORT debe estar definido');
assert(JWT_KEY, 'JWT_KEY debe estar definida');
assert(MONGO_ATLAS_PW, 'MONGO_ATLAS_PW debe estar definida');
assert(MONGO_ATLAS_BD, 'MONGO_ATLAS_BD debe estar definida');
assert(MONGO_ATLAS_USERNAME, 'MONGO_ATLAS_USERNAME debe estar definido');
assert(MONGO_ATLAS_CLUSTER, 'MONGO_ATLAS_CLUSTER debe estar definido');
assert(SECRET_KEY, 'SECRET_KEY debe estar definida');

module.exports = {
    PORT,
    JWT_KEY,
    MONGO_ATLAS_PW,
    MONGO_ATLAS_BD,
    MONGO_ATLAS_USERNAME,
    MONGO_ATLAS_CLUSTER,
    SECRET_KEY
}
