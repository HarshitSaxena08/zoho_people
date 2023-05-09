const {response}= require("express");
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: 'logindatabase',
    password: "Harshdata",
    port: 5432,
});
module.exports=pool