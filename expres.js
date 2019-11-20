const express = require('express');
const app = express();
const mongoose=require('mongoose');
const bodyparse=require('body-parser');
const morgan =require('morgan');
const apiclass =require('./apisdata.js');
const schema= require('./schema.js');
const port = process.env.port || 3000;

app.use(morgan('dev'));
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());


app.get('/',(req,res)=>{
    res.send('done');
    
    
   });
app.get('/api/:id/:id2',async (req,res,next)=>{

 
const id1=req.params.id;
 const id2=req.params.id2;
 mongoose.Promise=global.Promise;
 await mongoose.connect('mongodb+srv://Miananees:Mian12345@gettingstarted-jtf43.mongodb.net/test?retryWrites=true&w=majority',{

    useNewUrlParser:true,
    useUnifiedTopology: true
 }).then(()=>console.log("connected to moongo ")).catch((err)=>console.log(err));
   // apiclass.signup();
   console.log(id1,id2);
   const useer= new schema({
       name:id1,
       pascode:id2
   });
   await useer.save().then(res=>{
     
       console.log(res);
       
       console.log('ok');
   })
   .catch(console.error('Dbnotconnected'));

   
   res.send('ok done');   
});
app.listen(port,()=>{console.log('awaiting ')});