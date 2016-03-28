const process = require('process');
const fs = require('fs');
const mysql = require('mysql');
const startApi = require('./lib/start-api.js');
const createModels = require('./lib/models/create-models.js');

const env = process.env.ENVIRONMENT || 'dev';
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))[env];
const port = config['port'];
const Models = createModels(config['models']);
const isProduction = env === 'production';

console.log("Launching API...");
startApi(port, Models, isProduction, () => console.log(`Listening on port: ${port}...`));