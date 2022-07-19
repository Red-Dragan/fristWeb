const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, "../template/views"))
hbs.registerPartials(path.join(__dirname, '../template/partials'))
app.set('view engine', 'hbs');
app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/contact', (req, res)=>{
    res.render('contact');
})
app.get('*', (req, res)=>{
    res.render('404');
})
app.listen(process.env.PORT||8000, (()=>{console.log("server is running")}))