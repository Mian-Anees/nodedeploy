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
app.get('/api/:id/:id2', (req,res,next)=>{

 
const id1=req.params.id;
 const id2=req.params.id2;

const db ='mongodb+srv://Miananees:Mian12345@gettingstarted-jtf43.mongodb.net/test?retryWrites=true&w=majority';

mongoose.set('useUnifiedTopology',true);
mongoose.connect(db,{'useNewUrlParser':true,'useCreateIndex':true}).then(()=>console.log('conect to db'))
.catch((err)=>{console.log(err)});
const NewUser=new schema(
   {
      name: id1,
      pascode:id2
   }
);
NewUser.save().then((NewUser)=>{
   console.log('Datasave'+NewUser)
   res.send('okkk');
}).catch((err)=>{console.log(err)})


});

app.listen(port,()=>{console.log('awaiting ')});