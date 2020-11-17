const express=require('express');
const morgan=require('morgan');
const path=require('path');
const handlebars  = require('express-handlebars');
const app=express();
const port=3000

//http logger
app.use(morgan('combined'))
//----------
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
//teamplate engine
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//----------------


const route = require('./router');

route(app);

// app.get('/news',(req,res)=>{
//     res.render('news');
// });

// app.get('/search',(req,res)=>{
//     // console.log(req.query.q);
//     res.render('search');
// });
// app.post('/search',(req,res)=>{
//     console.log(req.body);
//     res.send(req.body);
// });
app.listen(port,()=>{"example app listening at 3000"}); 