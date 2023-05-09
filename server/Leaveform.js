const express = require('express');
const cors = require('cors');
const form = express()
form.use(express.json());
const port = 5000
const pool = require('./db')
const bodyParser = require('body-parser')
form.use(bodyParser.urlencoded({ extended: false }));

form.use(
    cors()
)
    form.post('/leaveform',(req,res)=>{
        const username = req.body["username"]
        const leavetype = req.body["leavetype"]
        const startdate = req.body["startdate"]
        const enddate = req.body["enddate"]
        const reason = req.body["reason"]
        
    
        const insertqry = `INSERT INTO leaveform (username,leavetype,startdate,enddate,reason) 
                                VALUES ( '${username}','${leavetype}','${startdate}','${enddate}','${reason}');`;
    
        pool.query(insertqry).then((response)=>{
            // console.log(response,'dfd');
        })
        .catch((err)=>{
            console.log(err)
            
        })
        res.json();
    
    })
form.listen(port,()=>{
    console.log(`server running on ${port}`)
})