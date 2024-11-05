require('dotenv').config();
const server_port = process.env.SERVER_PORT || 5000;
const db_url = process.env.DB_URL || 'mongodb:127.0.0/dockerUser';
module.exports ={server_port, db_url}
