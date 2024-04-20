const express = require('express')
const app = express()
const port = process.env.PORT || 3500

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(port,()=>{
    console.log(`Example server is working on port ${port}`);
})