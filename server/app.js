const express = require("express")
require("dotenv").config()
const bodyparser = require("body-parser")
const router = require("./routes/route")
const con = require("./config/db_con")
const cor = require("cors")
const app = express()
const port = process.env.port||2005
app.use(cor())
app.use(bodyparser.json())
app.use("",router)


app.listen(port,(err)=>{
    if(err)
    {
        console.log(err.message)
    }
    else{
        console.log(`Server is running on http://localhost:${port}`)
    }
})
