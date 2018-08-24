const express=require('express');
const hbs=require('hbs');
var app=express();
app.set('view engine','hbs');
app.use(express.static(__dirname+"/public"));
hbs.registerPartials(__dirname+"/views/partials")
const port=process.env.PORT || 3000;
//mantainance work
// app.use((req,res,next)=>{
//     res.render('middleware.hbs')
// })
//View engine template
app.get('/home',(requestAnimationFrame,res)=>{
    res.render('home.hbs',{
        title:'Home page'
       
    })
})
hbs.registerHelper('year',()=>{
    return new Date().getFullYear()
})
hbs.registerHelper('uppercase',(text)=>{
    return text.toUpperCase()
})
app.get('/about',(requestAnimationFrame,res)=>{
    res.render('about.hbs',{
        title:'About page'
    })
})

app.get('/',(requestAnimationFrame,res)=>{
    res.send({
        title:"Welcome",
        likes:['Angular','node','Express']
    })
})
//bad request
app.get('/bad',(requestAnimationFrame,res)=>{
    res.send('Bad connection error')
})
app.listen(port,()=>{
    console.log('server started at port no 3000')
})