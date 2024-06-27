const express = require('express')
const boardRouter = require('./10주차/router.js')

const app = express();

app.listen(3000,()=>
{
    console.log('server onload');
})