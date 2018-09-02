const express=require('express');
const hbs=require('hbs');
const path=require('path');
const bodyParser=require('body-parser');
const route=require('./routes/route');
var app=express();
var port=process.env.PORT | 3000;
app.use(bodyParser.json());
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'views')))
app.use('/',route);

app.listen(port,()=>{
    console.log('Server start at port no'+port);
});