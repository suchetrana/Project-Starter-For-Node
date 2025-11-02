const dotenv = require('dotenv');
dotenv.config();

console.log("Loaded PORT from env:", process.env.PORT); 

module.exports = {
    PORT: process.env.PORT
}