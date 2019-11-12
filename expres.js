const express = require('express');
const app = express();
const bodyparse=require('body-parser');
const morgan =require('morgan');
const apiclass =require('./apisdata.js');
const schema= require('./schema.js');
const port = process.env.port || 3000;

app.use(morgan('dev'));
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());


app.get('/',(req,res)=>{
    res.send('done').json('done');
    
    
   });
app.get('/api/:id/:id2',async (req,res,next)=>{

 try {
    const id1=req.params.id;
 const id2=req.params.id2;
    apiclass.signup();
   console.log(id1,id2);
   const useer= new schema({
       name:id1,
       pascode:id2
   });
    await useer.save().then(res=>{
       console.log(res);
       
       console.log('ok');
   });
  
  } 
 catch (err){
          next(err);
            }
  
  
   
   res.send('ok done');   
});
app.listen(port,()=>{console.log('awaiting ')});