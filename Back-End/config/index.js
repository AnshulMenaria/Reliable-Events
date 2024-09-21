const dotenv = require("dotenv");

dotenv.config();
module.exports = {PORT, MONGO_URI} = process.env;  
