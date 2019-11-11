const express = require('express');
const app = express();
const bodyparse=require('body-parser');
const morgan =require('morgan');
const apiclass =require('./apisdata.js');
const schema= require('./schema.js');

app.use(morgan('dev'));
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());


app.get('/',(req,res)=>{
    console.log('done');
    
    
});
app.get('/api/:id/:id2',(req,res)=>{
 const id1=req.params.id;
 const id2=req.params.id2;
    apiclass.signup();
   console.log(id1,id2);
   const useer= new schema({
       name:id1,
       pascode:id2
   });
   useer.save().then(res=>{
       console.log(res);
       console.log('ok');
       
   });
   console.log('ok');
   
   res.json(200,id1+id2);   
})
app.listen(3000,()=>{console.log('awaiting ')});