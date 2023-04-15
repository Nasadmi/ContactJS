const dotenv = require('dotenv');

const path = require('path');

const config = () => {
    dotenv.config({ path: path.join(__dirname, '.env') });
}

module.exports = config;