const mongoos= require('mongoose');
const mschema= mongoos.Schema(
    {
        name:String,
        pascode:String
    }
   ); 
   module.exports= mongoos.model('schema',mschema);