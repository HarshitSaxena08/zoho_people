const express = require('express');
const cors = require('cors');
const form = express()
form.use(express.json());
const port = 5000
const pool = require('./db')
const bodyParser = require('body-parser')
//form.use(bodyParser.urlencoded({ extended: false}));
form.use(bodyParser.urlencoded({ extended: false }));

form.use(
    cors()
)
    form.post('/zohosignup',(req,res)=>{

        const name = req.body["name"]
        const email = req.body["email"]
        const password = req.body["password"]
        const phone_number = req.body["phone_number"]
        
    
        const insertqry = `INSERT INTO zohosignup (name,email,password,phone_number) 
                                VALUES ( '${name}','${email}','${password}','${phone_number}');`;
    
        pool.query(insertqry).then((response)=>{
            console.log("Data Saved");
        })
        .catch((err)=>{
            console.log(err)
            
        })
        res.json();
    
    })
    
form.listen(port,()=>{
    console.log(`server running on ${port}`)
})